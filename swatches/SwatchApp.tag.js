import {
  tag,
  section,
  div,
  button,
  h2,
  input,
  textarea,
  strong,
  span,
  htmlTag,
} from "https://cdn.jsdelivr.net/gh/AckerApple/taggedjs@dist/bundle.js";
import { SwatchRow } from "./SwatchRow.tag.js";
import { editingIndex, editAll, setViewMode, toggleEditAll, toggleRowEdit, viewMode } from "./displayFunctions.js";
import { extractQrToken, findQrMatches } from "./qr-utils.js";
import { extractBarcodeToken, findBarcodeMatches } from "./barcode-utils.js";
import { CodeScannerModal } from "./CodeScannerModal.tag.js";
import { BarcodeScannerPanel } from "./BarcodeScanner.tag.js";

export const SwatchApp = tag(
  (
    data,
    addSwatch,
    serializeSwatches,
  ) => {
    SwatchApp.updates((args) => {
      [
        data,
        addSwatch,
        serializeSwatches,
      ] = args;
    });

    let showQrScanner = false;
    let showBarcodeScanner = false;
    let qrText = "";
    let qrToken = "";
    let barcodeText = "";
    let barcodeToken = "";
    let manufacturerFilter = "";
    let materialTypeFilter = "";

    const selectTag = htmlTag("select");
    const optionTag = htmlTag("option");

    const applyQrScan = (text) => {
      qrText = text || "";
      qrToken = extractQrToken(qrText);
      showQrScanner = false;
      console.log('app apply', text)
    };

    const applyBarcodeScan = (text) => {
      barcodeText = text || "";
      barcodeToken = extractBarcodeToken(barcodeText);
      showBarcodeScanner = false;
      console.log("app barcode apply", text);
    };

    const updateQrText = (text) => {
      qrText = text || "";
      qrToken = extractQrToken(qrText);
    };

    const updateBarcodeText = (text) => {
      barcodeText = text || "";
      barcodeToken = extractBarcodeToken(barcodeText);
    };

    const matchesManufacturer = (item) =>
      !manufacturerFilter ||
      (item.manufacturer || "").toLowerCase() === manufacturerFilter.toLowerCase();
    const matchesMaterialType = (item) =>
      !materialTypeFilter ||
      (item.material_type || "").toLowerCase() === materialTypeFilter.toLowerCase();

    const matchesQr = (item) =>
      !qrToken || findQrMatches([item], qrToken).length > 0;
    const matchesBarcode = (item) =>
      !barcodeToken || findBarcodeMatches([item], barcodeToken).length > 0;

    const filteredData = () =>
      data.reduce((acc, item, index) => {
        if (
          matchesQr(item) &&
          matchesBarcode(item) &&
          matchesManufacturer(item) &&
          matchesMaterialType(item)
        ) {
          acc.push({ item, index });
        }
        return acc;
      }, []);

    return [
      section(
        { class: "panel" },
        div(
          { class: "meta" },
          div(
            { class: "controls" },
            div(
              { class: "toggle", role: "tablist", "aria-label": "View toggle" },
              button(
                {
                  id: "summaryViewButton",
                  class: () => (viewMode === "summary" ? "active" : ""),
                  role: "tab",
                  type: "button",
                  onClick: () => setViewMode("summary"),
                },
                "Summary"
              ),
              button(
                {
                  id: "jsonViewButton",
                  class: () => (viewMode === "json" ? "active" : ""),
                  role: "tab",
                  type: "button",
                  onClick: () => setViewMode("json"),
                },
                "JSON"
              )
            ),
            button(
              {
                id: "editAllButton",
                class: "add-button",
                type: "button",
                onClick: toggleEditAll,
              },
              () => (editAll ? "Exit edit all" : "Edit all")
            ),
            button(
              {
                id: "addSwatchButton",
                class: "add-button",
                type: "button",
                onClick: addSwatch,
              },
              "+ Add swatch"
            ),
            button(
              {
                id: "qrSearchButton",
                class: "add-button",
                type: "button",
                onClick: () => showQrScanner = true,
              },
              "Search by QR read"
            ),
            button(
              {
                id: "barcodeSearchButton",
                class: "add-button",
                type: "button",
                onClick: () => showBarcodeScanner = true,
              },
              "Search by barcode read"
            ),
            div.id`count`(_=> `${data.length} swatches`),
            div('editingIndex:', () => editingIndex),
            div('showQrScanner:', () => showQrScanner),
          )
        ),
        _=> showQrScanner &&
          CodeScannerModal({
            title: "Search by QR read",
            onClose: () => {
              showQrScanner = false
              console.log('showQrScanner', showQrScanner)
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
            hidden: () => viewMode !== "summary" || !qrText,
          },
          span({ class: "qr-label" }, "Active search"),
          strong({ class: "qr-value" }, () => qrText || "(empty)"),
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
            hidden: () => viewMode !== "summary" || !barcodeText,
          },
          span({ class: "qr-label" }, "Active search"),
          strong({ class: "qr-value" }, () => barcodeText || "(empty)"),
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
        div(
          {
            class: "qr-search",
            hidden: () => viewMode !== "summary",
          },
          div(
            { class: "qr-input-row" },
            selectTag(
              {
                value: () => manufacturerFilter ?? "",
                onChange: (event) =>
                  manufacturerFilter = event?.target?.value || "",
              },
              optionTag({ value: "" }, "Filter by manufacturer"),
              optionTag({ value: "Bambu" }, "Bambu"),
              optionTag({ value: "PolyMaker" }, "PolyMaker"),
              optionTag({ value: "Hatchbox" }, "Hatchbox")
            )
          ),
          div(
            { class: "qr-input-row" },
            selectTag(
              {
                value: () => materialTypeFilter ?? "",
                onChange: (event) =>
                  materialTypeFilter = event?.target?.value || "",
              },
              optionTag({ value: "" }, "Filter by material type"),
              optionTag({ value: "PETG" }, "PETG"),
              optionTag({ value: "PLA" }, "PLA"),
              optionTag({ value: "TPU" }, "TPU")
            )
          ),
          div(
            { class: "qr-input-row" },
            input({
              placeholder: "Filter by QR text or token",
              value: () => qrText ?? "",
              onInput: (event) => updateQrText(event?.target?.value || ""),
            }),
            button(
              {
                type: "button",
                class: "qr-scan-button",
                onClick: () => showQrScanner = true,
              },
              "Scan QR"
            )
          ),
          div(
            { class: "qr-input-row" },
            input({
              placeholder: "Filter by barcode text",
              value: () => barcodeText ?? "",
              onInput: (event) => updateBarcodeText(event?.target?.value || ""),
            }),
            button(
              {
                type: "button",
                class: "qr-scan-button",
                onClick: () => showBarcodeScanner = true,
              },
              "Scan barcode"
            )
          )
        ),
        
        div.id`summaryList`.class`summary-list`(
          {
            hidden: () => viewMode !== "summary",
          },

          _ => 
            filteredData().map(({ item, index }) =>
              SwatchRow(item, index, editAll, editingIndex, toggleRowEdit).key(
                item.number || index
              )
            )
        )
      ),
      section(
        { id: "jsonPanel", class: "panel", hidden: () => viewMode !== "json" },
        h2({ class: "output-title" }, "JSON output"),
        textarea({
          id: "jsonOutput",
          spellcheck: "false",
          readOnly: true,
          value: () => JSON.stringify(serializeSwatches(), null, 2),
        })
      ),
    ];
  }
);
