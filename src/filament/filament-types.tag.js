import {
  tag,
  tagElement,
  section,
  div,
  input,
  button,
  select,
  option,
  label,
  h1,
  p,
  strong,
} from "taggedjs";
import { materialTypes } from "./materialTypes.array.js";
import { AdminNav } from "./AdminNav.tag.js";
import {
  signIn,
  signOutUser,
  saveFilamentTypes,
  subscribeFilamentTypes,
  subscribeManufacturers,
} from "./firebase.js";
import { normalizeBarcodeList, extractBarcodeToken } from "./barcode-utils.js";
import { extractQrToken } from "./qr-utils.js";
import { CodeScannerModal } from "./CodeScannerModal.tag.js";
import { BarcodeScannerPanel } from "./BarcodeScanner.tag.js";
import { filterByManufacturerAndMaterial } from "./filter-utils.js";
import { withManufacturerEmoji } from "./adminNavItems.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";
import { toast } from "./toast.js";
import { startAuthFlow } from "./auth-flow.js";
import { handleAdminAuthUser } from "./auth-handler.js";

let app = document.getElementById("filamentTypesApp");
const appRoot = { current: app };
let types = [];
let stopTypes = null;
let stopManufacturers = null;
let manufacturers = [];
let manufacturerFilter = "";
let materialTypeFilter = "";
let activeQrItem = null;
let activeBarcodeItem = null;
let isAuthorized = false;
let appMounted = false;
let currentUser = null;
const expandedTypeIds = new Set();

const createFilamentTypeId = () => {
  if (globalThis.crypto?.randomUUID) {
    return crypto.randomUUID();
  }
  const rand = Math.random().toString(36).slice(2, 10);
  return `filament_${Date.now().toString(36)}_${rand}`;
};

const createEmptyFilamentType = () => ({
  filament_type_id: createFilamentTypeId(),
  number: "",
  label: "",
  manufacturer: "",
  material_type: "",
  color_name: "",
  swatch_code: "",
  qr_search_data: "",
  barcode_search_data: [],
  hex: "",
  url: "",
});

const rerender = () => {
  if (!appRoot.current) return;
  const nextRoot = replaceMountRoot(appRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(FilamentTypesApp, nextRoot);
  appMounted = true;
  app = appRoot.current;
};

const addType = () => {
  const next = createEmptyFilamentType();
  types.unshift(next);
  if (next.filament_type_id) {
    expandedTypeIds.add(next.filament_type_id);
  }
  rerender();
};

const removeType = (index) => {
  const label = types[index]?.label || "this filament type";
  if (!confirm(`Remove ${label}?`)) return;
  const id = types[index]?.filament_type_id;
  if (id) expandedTypeIds.delete(id);
  types.splice(index, 1);
  rerender();
};

const saveList = async () => {
  if (!isAuthorized) {
    toast.error("Sign in to save changes.");
    return;
  }
  try {
    const cleaned = serializeFilamentTypes(types);
    await saveFilamentTypes(cleaned);
    toast.success("Filament types saved.");
  } catch (error) {
    console.error("Failed to save filament types", error);
    toast.error("Save failed. Try again.");
  }
};

const handleSignOut = () =>
  signOutUser().catch((error) => {
    console.error("Firebase sign-out failed", error);
    toast.error("Sign out failed. Try again.");
  });

const getBarcodeList = (item) => normalizeBarcodeList(item.barcode_search_data);

const updateBarcode = (item, index, value) => {
  const next = getBarcodeList(item);
  next[index] = (value || "").trim();
  item.barcode_search_data = next.filter(Boolean);
};

const addBarcode = (item) => {
  const next = getBarcodeList(item);
  next.push("");
  item.barcode_search_data = next;
  rerender();
};

const removeBarcode = (item, index) => {
  const next = getBarcodeList(item);
  next.splice(index, 1);
  item.barcode_search_data = next;
  rerender();
};

const openQrScanner = (item) => {
  activeQrItem = item;
  rerender();
};

const openBarcodeScanner = (item) => {
  activeBarcodeItem = item;
  rerender();
};

const applyQrScan = (text) => {
  if (!activeQrItem) return;
  const token = extractQrToken(text || "");
  activeQrItem.qr_search_data = token || text || "";
  activeQrItem = null;
  rerender();
};

const applyBarcodeScan = (text) => {
  if (!activeBarcodeItem) return;
  const token = extractBarcodeToken(text || "");
  const value = (token || text || "").trim();
  if (!value) return;
  const next = getBarcodeList(activeBarcodeItem);
  if (!next.includes(value)) {
    next.push(value);
  }
  activeBarcodeItem.barcode_search_data = next;
  activeBarcodeItem = null;
  rerender();
};

const filteredTypes = () =>
  filterByManufacturerAndMaterial(types, {
    manufacturerFilter,
    materialTypeFilter,
  });

const toggleExpanded = (item) => {
  const id = item?.filament_type_id;
  if (!id) return;
  if (expandedTypeIds.has(id)) {
    expandedTypeIds.delete(id);
  } else {
    expandedTypeIds.add(id);
  }
  rerender();
};

const isExpanded = (item) => {
  if (!item?.filament_type_id) return false;
  return expandedTypeIds.has(item.filament_type_id);
};

export const FilamentTypesApp = tag(() => [
  AdminNav(handleSignOut, currentUser),
  section.class`panel`(
    h1("Filament Types"),
    p("Manage filament type details used by inventory."),
    div.class`meta`(
      div.class`controls`(
        div.class`controls-group`(
          button
            .type`button`
            .class`add-button`
            .onClick(addType)(
            "➕ Add filament type"
          ),
          button
            .type`button`
            .class`add-button`
            .onClick(saveList)(
            "💾 Save to Firestore"
          )
        ),
        div.class`controls-group`(
          select
            .value(() => manufacturerFilter ?? "")
            .onChange((event) => {
              manufacturerFilter = event?.target?.value || "";
            })(
            option({ value: "" }, "🏭 Filter by manufacturer"),
            ...(manufacturers || []).map((maker) =>
              option({ value: maker }, maker)
            )
          ),
          select
            .value(() => materialTypeFilter ?? "")
            .onChange((event) => {
              materialTypeFilter = event?.target?.value || "";
            })(
            option({ value: "" }, "Filter by material type"),
            ...materialTypes.map((materialType) =>
              option({ value: materialType }, materialType)
            )
          ),
          div.id`count`(_=> `${filteredTypes().length} filament types`)
        )
      )
    ),
    div.class`swatch-grid`(
      ...filteredTypes().map((item, index) =>
        div.class`swatch-card`(
          div.class`filament-type-header`(
            div
              .class`summary-chip filament-type-swatch`
              .style(_=> `background:${item.hex || ""};`)(),
            strong(_=> item.label || "Untitled filament"),
            div.class`filament-type-actions`(
              button
                .type`button`
                .class`ghost-button`
                .onClick(() => toggleExpanded(item))(
                isExpanded(item) ? "Hide" : "View"
              ),
              button
                .type`button`
                .class`ghost-button`
                .onClick(() => removeType(index))(
                "Remove"
              )
            )
          ),
          _=> isExpanded(item) &&
            div.class`fields`(
              label(
                "Number",
                input
                  .type`number`
                  .value(_=> item.number ?? "")
                  .onInput((event) => {
                    item.number = event.target.value;
                  })()
              ),
              label(
                "Label",
                input
                  .value(_=> item.label ?? "")
                  .onInput((event) => {
                    item.label = event.target.value;
                  })()
              ),
              label(
                "🏭 Manufacturer",
                select
                  .onChange((event) => {
                    item.manufacturer = event?.target?.value || "";
                  })(
                  option
                    .value``
                    .selected(_=> !item.manufacturer)(
                    withManufacturerEmoji("Select manufacturer")
                  ),
                  ...(manufacturers || []).map((maker) =>
                    option
                      .value(maker)
                      .selected(_=> item.manufacturer === maker)(maker)
                      .key(maker)
                  )
                )
              ),
              label(
                "Material Type",
                select
                  .onChange((event) => {
                    item.material_type = event?.target?.value || "";
                  })(
                  option
                    .value``
                    .selected(_=> !item.material_type)("Select material"),
                  ...materialTypes.map((materialType) =>
                    option
                      .value(materialType)
                      .selected(_=> item.material_type === materialType)(materialType)
                  )
                )
              ),
              label(
                "Color name",
                input
                  .value(_=> item.color_name ?? "")
                  .onInput((event) => {
                    item.color_name = event.target.value;
                  })()
              ),
              label(
                "Hex Color",
                input
                  .value(_=> item.hex ?? "")
                  .onInput((event) => {
                    item.hex = event.target.value;
                  })()
              ),
              label(
                "Filament code",
                input
                  .value(_=> item.swatch_code ?? "")
                  .onInput((event) => {
                    item.swatch_code = event.target.value;
                  })()
              ),
              label(
                "QR Search Data",
                div.class`qr-input-row`(
                  input
                    .class`qr-edit-input`
                    .value(_=> item.qr_search_data ?? "")
                    .onInput((event) => {
                      item.qr_search_data = event.target.value;
                    })(),
                  button
                    .type`button`
                    .class`qr-scan-button`
                    .onClick(() => openQrScanner(item))(
                    "Scan QR"
                  )
                )
              ),
              label(
                "Bar Codes",
                div.class`barcode-inputs`(
                  ...getBarcodeList(item).map((barcode, barcodeIndex) =>
                    div.class`barcode-entry`(
                      input
                        .class`qr-edit-input`
                        .value(barcode ?? "")
                        .onInput((event) => updateBarcode(item, barcodeIndex, event.target.value))(),
                      button
                        .type`button`
                        .class`ghost-button barcode-remove`
                        .onClick(() => removeBarcode(item, barcodeIndex))(
                        "−"
                      )
                    ).key(`${item.filament_type_id}-${barcodeIndex}`)
                  ),
                  div.class`barcode-actions`(
                    button
                      .type`button`
                      .class`ghost-button`
                      .onClick(() => addBarcode(item))(
                      "➕ Add barcode"
                    ),
                    button
                      .type`button`
                      .class`qr-scan-button`
                      .onClick(() => openBarcodeScanner(item))(
                      "Scan barcode"
                    )
                  )
                )
              ),
              label(
                "URL",
                input
                  .type`url`
                  .value(_=> item.url ?? "")
                  .onInput((event) => {
                    item.url = event.target.value;
                  })()
              ),
              label(
                "Type ID",
                input
                  .attr("readonly", true)
                  .value(_=> item.filament_type_id || "")()
              )
            )
        ).key(item.filament_type_id || index)
      )
    ),
    _=> activeQrItem &&
      CodeScannerModal({
        title: "Scan QR",
        onClose: () => {
          activeQrItem = null;
        },
        onApply: applyQrScan,
        applyLabel: "Apply QR",
      }),
    _=> activeBarcodeItem &&
      CodeScannerModal({
        title: "Scan barcode",
        onClose: () => {
          activeBarcodeItem = null;
        },
        onApply: applyBarcodeScan,
        applyLabel: "Apply barcode",
        ScannerPanel: BarcodeScannerPanel,
      })
  ),
]);

const serializeFilamentTypes = (items) =>
  (Array.isArray(items) ? items : []).map((item) => {
    const cleaned = {
      filament_type_id: item.filament_type_id || createFilamentTypeId(),
      number: item.number ? Number(item.number) || 0 : 0,
      label: item.label || "",
    };
    if (item.manufacturer) cleaned.manufacturer = item.manufacturer;
    if (item.material_type) cleaned.material_type = item.material_type;
    if (item.color_name) cleaned.color_name = item.color_name;
    if (item.swatch_code) cleaned.swatch_code = item.swatch_code;
    if (item.qr_search_data) cleaned.qr_search_data = item.qr_search_data;
    const barcodeList = normalizeBarcodeList(item.barcode_search_data);
    if (barcodeList.length) cleaned.barcode_search_data = barcodeList;
    if (item.hex) cleaned.hex = item.hex;
    if (item.url) cleaned.url = item.url;
    return cleaned;
  });

const mountApp = () => {
  if (!appRoot.current || appMounted) {
    return;
  }
  const nextRoot = replaceMountRoot(appRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(FilamentTypesApp, nextRoot);
  appMounted = true;
  app = appRoot.current;
};

const mountSso = (status, userEmail, reason = "") => {
  if (!appRoot.current) return;
  mountSsoPanel({
    rootRef: appRoot,
    status,
    userEmail,
    adminEmail: "",
    onSignIn: () =>
      signIn().catch((error) => {
        console.error("Firebase sign-in failed", error);
        toast.error("Sign in failed. Try again.");
      }),
    onSignOut: handleSignOut,
    setAppMounted: (value) => {
      appMounted = value;
    },
  });
  app = appRoot.current;
};

mountSso("loading", "", "initial");

const handleAuthUser = async (user, reason = "") => {
  isAuthorized = false;
  const isAllowed = await handleAdminAuthUser({
    user,
    mountSso,
    toast,
    setCurrentUser: (value) => {
      currentUser = value;
    },
    onSignedOut: () => {
      if (stopTypes) {
        stopTypes();
        stopTypes = null;
      }
      if (stopManufacturers) {
        stopManufacturers();
        stopManufacturers = null;
      }
    },
    onDenied: () => {
      if (stopTypes) {
        stopTypes();
        stopTypes = null;
      }
      if (stopManufacturers) {
        stopManufacturers();
        stopManufacturers = null;
      }
    },
    onAuthorized: () => {
      isAuthorized = true;
      if (!stopTypes) {
        stopTypes = subscribeFilamentTypes((items) => {
          if (Array.isArray(items)) {
            types = items.map((item) => ({ ...item }));
          } else {
            types = [];
          }
          if (appMounted) {
            rerender();
            return;
          }
          if (isAuthorized) {
            mountApp("types:update");
          }
        });
      }
      if (!stopManufacturers) {
        stopManufacturers = subscribeManufacturers((items) => {
          if (Array.isArray(items) && items.length) {
            manufacturers = items;
          } else {
            manufacturers = [];
          }
          if (appMounted) {
            rerender();
            return;
          }
          if (isAuthorized) {
            mountApp("manufacturers:update");
          }
        });
      }
      mountApp("auth:authorized");
    },
    reason,
  });
  if (!isAllowed) return;
};

startAuthFlow({
  onUser: handleAuthUser,
  toast,
});
