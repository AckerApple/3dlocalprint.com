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
  subscribe,
  array,
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
import { FilamentTypesRowDisplay } from "./filament-types/FilamentTypesRowDisplay.tag.js";

let app = document.getElementById("filamentTypesApp");
const appRoot = { current: app };

let types$ = array()
let stopTypes = null

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
let pendingFocusTypeId = "";
const editTypeId = typeof window !== "undefined"
  ? new URLSearchParams(window.location.search).get("edit")
  : "";
if (editTypeId) {
  expandedTypeIds.add(editTypeId);
}

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

/*
const rerender = () => {
  if (!appRoot.current) return;
  const nextRoot = replaceMountRoot(appRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(FilamentTypesApp, nextRoot);
  if (pendingFocusTypeId) {
    const targetId = `filament-type-card-${pendingFocusTypeId}`;
    requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.classList.add("is-new-target");
      window.setTimeout(() => {
        target.classList.remove("is-new-target");
      }, 1300);
    });
    pendingFocusTypeId = "";
  }
  appMounted = true;
  app = appRoot.current;
};
*/
const addType = () => {
  const next = createEmptyFilamentType();
  if (next.filament_type_id) {
    expandedTypeIds.add(next.filament_type_id);
    pendingFocusTypeId = next.filament_type_id;
  }
  types$.unshift(next);
};

const removeType = (index) => {
  const label = types$[index]?.label || "this filament type";
  if (!confirm(`Remove ${label}?`)) return;
  const id = types$[index]?.filament_type_id;
  if (id) expandedTypeIds.delete(id);
  types$.splice(index, 1);
};

const saveList = async () => {
  if (!isAuthorized) {
    toast.error("Sign in to save changes.");
    return false;
  }
  try {
    const cleaned = serializeFilamentTypes(types$.value);
    await saveFilamentTypes(cleaned);
    toast.success("Filament types saved.");
    return true;
  } catch (error) {
    console.error("Failed to save filament types", error);
    toast.error("Save failed. Try again.");
    return false;
  }
};

const saveType = async (item) => {
  const didSave = await saveList();
  if (!didSave) return;
  const id = item?.filament_type_id;
  if (!id) return;
  expandedTypeIds.delete(id);
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
};

const removeBarcode = (item, index) => {
  const next = getBarcodeList(item);
  next.splice(index, 1);
  item.barcode_search_data = next;
};

const openQrScanner = (item) => {
  activeQrItem = item;
};

const openBarcodeScanner = (item) => {
  activeBarcodeItem = item;
};

const applyQrScan = (text) => {
  if (!activeQrItem) return;
  const token = extractQrToken(text || "");
  activeQrItem.qr_search_data = token || text || "";
  activeQrItem = null;
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
};

const filteredTypes = () =>
  filterByManufacturerAndMaterial(types$.value, {
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
};

const isExpanded = (item) => {
  if (!item?.filament_type_id) return false;
  return expandedTypeIds.has(item.filament_type_id);
};

export const FilamentTypesApp = tag(() => {

  console.log('stopTypes', {
    stopTypes, sub: stopTypes.subscribe,
    // stopTypes2: stopTypes(),
  })

  return [
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
            _=> (manufacturers || []).map((maker) =>
              option({ value: maker }, maker)
            )
          ),
          select
            .value(() => materialTypeFilter ?? "")
            .onChange((event) => {
              materialTypeFilter = event?.target?.value || "";
            })(
            option({ value: "" }, "Filter by material type"),
            _=> materialTypes.map((materialType) =>
              option({ value: materialType }, materialType)
            )
          ),
          div.id`count`(_=> `${filteredTypes().length} filament types`)
        )
      )
    ),
    div.class`swatch-grid`(
      subscribe(
        types$,
        types => FilamentTypesRowDisplay({
          types,
          filteredTypes,
          isExpanded,
          toggleExpanded,
          removeType,
          getBarcodeList,
          updateBarcode,
          addBarcode,
          removeBarcode,
          openQrScanner,
          openBarcodeScanner,
          saveType,
          manufacturers,
          materialTypes,
          withManufacturerEmoji,
        })
      ),
    ),
    _=> activeQrItem &&
      CodeScannerModal({
        name: 'qr-scanner-',
        title: "Scan QR",
        onClose: () => {
          activeQrItem = null;
        },
        onApply: applyQrScan,
        applyLabel: "Apply QR",
      }),
    _=> activeBarcodeItem &&
      CodeScannerModal({
        name: 'bc-scanner-',
        title: "Scan barcode",
        onClose: () => {
          activeBarcodeItem = null;
        },
        onApply: applyBarcodeScan,
        applyLabel: "Apply barcode",
        ScannerPanel: BarcodeScannerPanel,
      })
  ),
]});

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
          console.log('items ++++++', {items})
          types$.length = 0

          if (Array.isArray(items)) {
            types$.push( ...items.map((item) => ({ ...item })) )
          }
          
          if (appMounted) {
            return;
          }
          if (isAuthorized) {
            mountApp("types:update");
          }
        });

        console.log('stopTypes ready ---', {stopTypes})
      }
      if (!stopManufacturers) {
        stopManufacturers = subscribeManufacturers((items) => {
          if (Array.isArray(items) && items.length) {
            manufacturers = items;
          } else {
            manufacturers = [];
          }
          if (appMounted) {
            console.log('✅')
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
