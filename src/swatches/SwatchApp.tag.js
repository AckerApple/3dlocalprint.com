import {
  tag,
  h1,
  p,
  section,
  div,
  button,
  h2,
  select,
  option,
  strong,
  span,
  main,
  header,
} from "taggedjs";
import { SwatchRow } from "./SwatchRow.tag.js";
import { editingIndex, toggleRowEdit, setEditingIndex } from "./displayFunctions.js";
import { extractQrToken, findQrMatches } from "./qr-utils.js";
import { extractBarcodeToken, findBarcodeMatches } from "./barcode-utils.js";
import { CodeScannerModal } from "./CodeScannerModal.tag.js";
import { BarcodeScannerPanel } from "./BarcodeScanner.tag.js";
import { materialTypes } from "./materialTypes.array.js";
import { SwatchNav } from "./SwatchNav.tag.js";
import { locations } from "./locations.array.js";
import { loadSwatches, saveSwatches } from "./firebase.js";

export const SwatchApp = tag(
  (
    manufacturers,
    onSignOut,
    user,
  ) => {
    SwatchApp.updates((args) => {
      [
        manufacturers,
        onSignOut,
        user,
      ] = args;
    });

    let data = [];
    let hasLoaded = false;
    let isLoading = false;
    let loadError = "";

    const addSwatch = () => {
      data.unshift(createEmptySwatch(locations[0] || ""));
      setEditingIndex(0);
    };

    const saveCurrentSwatches = () => saveSwatchesToFirestore(data);

    const duplicateSwatchAt = (index) => {
      const source = data[index];
      if (!source) return;
      const clone = {
        ...source,
        number: 0,
        location: source.location || locations[0] || "",
      };
      data.splice(index + 1, 0, clone);
      setEditingIndex(index + 1);
    };

    let showQrScanner = false;
    let showBarcodeScanner = false;
    let qrText = "";
    let qrToken = "";
    let barcodeText = "";
    let barcodeToken = "";
    let manufacturerFilter = "";
    let materialTypeFilter = "";
    let locationFilter = "";
    const unassignedLocation = "__unassigned__";

    const applyQrScan = (text) => {
      qrText = text || "";
      qrToken = extractQrToken(qrText);
      showQrScanner = false;
    };

    const applyBarcodeScan = (text) => {
      barcodeText = sanitizeScanText(text);
      barcodeToken = extractBarcodeToken(barcodeText) || barcodeText;
      showBarcodeScanner = false;
      console.log("app barcode apply", text);
    };

    const filteredData = () =>
      filterSwatches(data, {
        manufacturerFilter,
        materialTypeFilter,
        locationFilter,
        unassignedLocation,
        qrToken,
        barcodeToken,
      });

    const groupedData = () => {
      const unassignedLabel = "Unassigned";
      return groupSwatchesByLocation(
        filteredData(),
        [...locations, unassignedLabel]
      );
    };

    const startLoad = () => {
      if (!loadSwatches) {
        console.debug("SwatchApp load skipped: no loader provided");
        return;
      }
      if (hasLoaded || isLoading) return;
      isLoading = true;
      console.debug("SwatchApp loading swatches...");
      tag.promise = loadSwatches()
        .then((items) => {
          console.debug("SwatchApp load complete", {
            count: items?.length || 0,
          });
          loadError = "";
          data = applySwatches(items || []);
          hasLoaded = true;
        })
        .catch((error) => {
          console.error("SwatchApp load failed", error);
          loadError = "Failed to load swatches.";
          data = applySwatches([]);
          hasLoaded = true;
        })
        .finally(() => {
          isLoading = false;
        });
    };

    startLoad();

    return [
      header(
        SwatchNav(onSignOut, user),
        h1("Swatch Editor"),
        p(
          "Edit swatches in place. Changes are saved directly to Firestore."
        ),
      ),

      main(
        section.class`panel`(
          div.class`meta`(
            div.class`controls`(
              div.class`controls-group`(
                button(
                  {
                    id: "addSwatchButton",
                    class: "add-button",
                    type: "button",
                    onClick: addSwatch,
                  },
                  "➕ Add swatch"
                ),
                button(
                  {
                    id: "qrSearchButton",
                    class: "add-button",
                    type: "button",
                    onClick: () => showQrScanner = true,
                  },
                  "📷 Search by QR read"
                ),
                button(
                  {
                    id: "barcodeSearchButton",
                    class: "add-button",
                    type: "button",
                    onClick: () => showBarcodeScanner = true,
                  },
                  "🔎 Search by barcode read"
                )
              ),
              div.class`controls-group`(
                select(
                  {
                    value: () => manufacturerFilter ?? "",
                    onChange: (event) =>
                      manufacturerFilter = event?.target?.value || "",
                  },
                  option({ value: "" }, "Filter by manufacturer"),
                  ...(manufacturers || []).map((manufacturer) =>
                    option({ value: manufacturer }, manufacturer)
                  )
                ),
                select(
                  {
                    value: () => materialTypeFilter ?? "",
                    onChange: (event) =>
                      materialTypeFilter = event?.target?.value || "",
                  },
                  option({ value: "" }, "Filter by material type"),
                  ...materialTypes.map((materialType) =>
                    option({ value: materialType }, materialType)
                  )
                ),
                select(
                  {
                    value: () => locationFilter ?? "",
                    onChange: (event) =>
                      locationFilter = event?.target?.value || "",
                  },
                  option({ value: "" }, "Filter by location"),
                  ...locations.map((location) =>
                    option({ value: location }, location)
                  ),
                  option({ value: unassignedLocation }, "Unassigned")
                ),
                div.id`count`(_=> `${filteredData().length} swatches`),
              )
            )
          ),
          _=> showQrScanner &&
            CodeScannerModal({
              title: "Search by QR read",
              onClose: () => {
                showQrScanner = false
              },
              onApply: applyQrScan,
              applyLabel: "Apply QR",
            }),
          _=> showBarcodeScanner &&
            CodeScannerModal({
              title: "Search by barcode read",
              onClose: () => (showBarcodeScanner = false),
              onApply: applyBarcodeScan,
              applyLabel: "Apply barcode",
              ScannerPanel: BarcodeScannerPanel,
            }),
          div(
            {
              class: "qr-search-pill",
              hidden: () => !qrText,
            },
            span.class`qr-label`("Active QR search"),
            strong.class`qr-value`(() => qrText || "(empty)"),
            button(
              {
                type: "button",
                class: "qr-clear-button",
                onClick: () => {
                  qrText = "";
                  qrToken = "";
                },
              },
              "Clear search"
            )
          ),
          div(
            {
              class: "qr-search-pill",
              hidden: () => !barcodeText,
            },
            span.class`qr-label`("Active barcode search"),
            strong.class`qr-value`(() => barcodeText || "(empty)"),
            button(
              {
                type: "button",
                class: "qr-clear-button",
                onClick: () => {
                  barcodeText = "";
                  barcodeToken = "";
                },
              },
              "Clear search"
            )
          ),
          
          div.id`summaryList`.class`summary-list`(
            _ =>
              groupedData().map(([location, items]) =>
                div.class`location-group`(
                  h2.class`location-title`(`${location} (${items.length})`),
                  ...items.map(({ item, index }) =>
                    SwatchRow(
                      item,
                      index,
                      editingIndex,
                      toggleRowEdit,
                      manufacturers,
                      saveCurrentSwatches,
                      duplicateSwatchAt
                    ).key(
                      item.number || item
                    )
                  )
                )
              )
          )
        )
      )
    ];
  }
);

const normalizeLocation = (location) =>
  locations.includes(location) ? location : "";

const prepareSwatches = (items) =>
  (Array.isArray(items) ? items : [])
    .map((item) => ({
      ...item,
      location: normalizeLocation(item.location),
    }))
    .sort((a, b) => (Number(a.number) || 0) - (Number(b.number) || 0));

// Normalize swatch entries for Firestore by stripping empty fields and coercing types.
const serializeSwatches = (items) =>
  items.map((item) => {
    const cleaned = {
      number: Number(item.number) || 0,
      label: item.label || "",
    };

    if (item.color_name) cleaned.color_name = item.color_name;
    if (item.manufacturer) cleaned.manufacturer = item.manufacturer;
    if (item.material_type) cleaned.material_type = item.material_type;
    if (item.swatch_code) cleaned.swatch_code = item.swatch_code;
    if (item.qr_search_data) cleaned.qr_search_data = item.qr_search_data;
    if (item.barcode_search_data) cleaned.barcode_search_data = item.barcode_search_data;
    if (item.hex) cleaned.hex = item.hex;
    if (item.url) cleaned.url = item.url;
    if (item.location) cleaned.location = item.location;
    if (item.spool_inventory !== undefined && item.spool_inventory !== "") {
      cleaned.spool_inventory = Number(item.spool_inventory) || 0;
    }

    return cleaned;
  });

const createEmptySwatch = (defaultLocation = "") => ({
  number: 0,
  label: "",
  manufacturer: "",
  material_type: "",
  color_name: "",
  swatch_code: "",
  qr_search_data: "",
  barcode_search_data: "",
  hex: "",
  url: "",
  spool_inventory: 1,
  location: defaultLocation,
});

const sanitizeScanText = (text) => (text ? text.trim() : "");

const matchesTextFilter = (value, filter) =>
  !filter || (value || "").toLowerCase() === filter.toLowerCase();

const matchesLocationFilter = (value, filter, unassignedToken) => {
  if (!filter) return true;
  if (filter === unassignedToken) return !value;
  return (value || "").toLowerCase() === filter.toLowerCase();
};

const applySwatches = (items) => {
  const prepared = prepareSwatches(items);
  console.debug("Swatches loaded", { count: prepared.length });
  return prepared;
};

const saveSwatchesToFirestore = (items) =>
  saveSwatches(serializeSwatches(items)).catch((error) => {
    console.error("Failed to save swatches", error);
    alert("Save failed. Check the console for details.");
  });

const filterSwatches = (items, filters) =>
  items.reduce((acc, item, index) => {
    const matchesManufacturer = matchesTextFilter(
      item.manufacturer,
      filters.manufacturerFilter
    );
    const matchesMaterialType = matchesTextFilter(
      item.material_type,
      filters.materialTypeFilter
    );
    const matchesLocation = matchesLocationFilter(
      item.location,
      filters.locationFilter,
      filters.unassignedLocation
    );
    const matchesQr =
      !filters.qrToken || findQrMatches([item], filters.qrToken).length > 0;
    const matchesBarcode =
      !filters.barcodeToken ||
      findBarcodeMatches([item], filters.barcodeToken).length > 0;

    if (
      matchesManufacturer &&
      matchesMaterialType &&
      matchesLocation &&
      matchesQr &&
      matchesBarcode
    ) {
      acc.push({ item, index });
    }
    return acc;
  }, []);

const groupSwatchesByLocation = (entries, locationLabels) => {
  const grouped = new Map();
  locationLabels.forEach((location) => {
    grouped.set(location, []);
  });
  entries.forEach((entry) => {
    const location = entry.item.location || locationLabels[locationLabels.length - 1];
    if (!grouped.has(location)) {
      grouped.set(location, []);
    }
    grouped.get(location).push(entry);
  });
  return Array.from(grouped.entries()).filter(([, items]) => items.length);
};
