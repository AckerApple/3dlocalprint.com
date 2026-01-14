import {
  tag,
  div,
  select,
  option,
  span,
  button,
  label,
  input,
  strong,
  a,
  noElement,
  output,
} from "taggedjs";
import { extractQrToken } from "./qr-utils.js";
import { extractBarcodeToken } from "./barcode-utils.js";
import { CodeScannerModal } from "./CodeScannerModal.tag.js";
import { BarcodeScannerPanel } from "./BarcodeScanner.tag.js";
import { materialTypes } from "./materialTypes.array.js";
import { locations } from "./locations.array.js";

const isValidHex = (value) =>
  /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value);

const setItemValue = (item, field, value) => {
  item[field] = value;
};

const getDomainLabel = (url) => {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {
    return url.replace(/^https?:\/\//, "").split("/")[0];
  }
};

const textHandlers = (item, field, { trim = false } = {}) => ({
  onChange: (event) =>
    setItemValue(item, field, trim ? event.target.value.trim() : event.target.value),
  onKeyup: (event) =>
    setItemValue(item, field, trim ? event.target.value.trim() : event.target.value),
});

const numberHandler = (item, field) => ({
  onChange: (event) => setItemValue(item, field, event.target.value),
  onKeyup: (event) => setItemValue(item, field, event.target.value),
});

const selectHandlers = (item, field) => ({
  onChange: (event) => setItemValue(item, field, event?.target?.value || ""),
});

const editCard = tag((item, index, toggleRowEdit, manufacturers, onSave, onDuplicate) => {
  editCard.updates((args) => {
    [item, index, toggleRowEdit, manufacturers, onSave, onDuplicate] = args;
  });
  toggleRowEdit = output(toggleRowEdit);
  let showQrScanner = false;
  let showBarcodeScanner = false;
  let isDirty = false;

  const markDirty = () => {
    isDirty = true;
  };

  const handleFormChange = () => {
    isDirty = true;
  };

  const triggerSave = () => {
    if (!onSave || !isDirty) return;
    const result = onSave();
    const finish = () => {
      isDirty = false;
      toggleRowEdit(index);
    };
    if (result && typeof result.then === "function") {
      result.then(finish);
      return;
    }
    finish();
  };

  const triggerDuplicate = () => {
    if (!onDuplicate) return;
    onDuplicate(index);
  };

  const applyQrScan = (text) => {
    const token = extractQrToken(text || "");
    item.qr_search_data = token || text || "";
    showQrScanner = false;
    markDirty();
    console.log('👉 APPLIED', text)
  };
  const applyBarcodeScan = (text) => {
    const token = extractBarcodeToken(text || "");
    item.barcode_search_data = token || text || "";
    showBarcodeScanner = false;
    markDirty();
    console.log("👉 BARCODE APPLIED", text);
  };

  return div.class`swatch-card`(
    _=> showQrScanner &&
      CodeScannerModal({
        title: "Scan QR for this spool",
        onClose: () => (showQrScanner = false),
        onApply: applyQrScan,
        applyLabel: "Apply QR",
      }),
    _=> showBarcodeScanner &&
      CodeScannerModal({
        title: "Scan barcode for this spool",
        onClose: () => (showBarcodeScanner = false),
        onApply: applyBarcodeScan,
        applyLabel: "Apply barcode",
        ScannerPanel: BarcodeScannerPanel,
      }),
    div.class`edit-card-header`(
      span.class`edit-card-title`(_=> `Swatch ${item.number || "-"}`),
      div.class`edit-card-actions`(
        onSave
          ? button
              .type`button`
              .class`add-button`
              .disabled(_=> !isDirty)
              .onClick(triggerSave)(
              "💾 Save"
            )
          : null,
        onDuplicate
          ? button
              .type`button`
              .class`ghost-button`
              .onClick(triggerDuplicate)(
              "🧬 Duplicate"
            )
          : null,
        button
          .type`button`
          .class`edit-card-toggle`
          .onClick(() => toggleRowEdit(index))
          .attr("aria-label", "Stop editing swatch")(
          "Done"
        )
      )
    ),
    label(
      "Number",
      input
        .type`number`
        .value(() => item.number ?? "")
        .onChange(numberHandler(item, "number").onChange)
        .onKeyup(numberHandler(item, "number").onKeyup)()
    ),
    div
      .class`fields`
      .onInput(handleFormChange)
      .onChange(handleFormChange)
      .onKeydown((event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          triggerSave();
        }
      })(
      label(
        "Hex Color",
        div.class`hex-input-row`(
          input
            .type`color`
            .value(() => (isValidHex(item.hex) ? item.hex : "#000000"))
            .style`width:56px; min-width:56px; padding:0; height:42px;`
            .onChange((event) => {
              markDirty();
              setItemValue(item, "hex", event.target.value.trim());
            })(),
          input
            .value(() => item.hex ?? "")
            .style`flex:1;`
            .onChange(textHandlers(item, "hex", { trim: true }).onChange)
            .onKeyup(textHandlers(item, "hex", { trim: true }).onKeyup)()
        )
      ),
      label(
        "Spool Inventory",
        input
          .type`number`
          .value(() => item.spool_inventory ?? "")
          .onChange(numberHandler(item, "spool_inventory").onChange)
          .onKeyup(numberHandler(item, "spool_inventory").onKeyup)()
      ),
      label(
        "Label",
        input
          .value(() => item.label ?? "")
          .onChange(textHandlers(item, "label").onChange)
          .onKeyup(textHandlers(item, "label").onKeyup)()
      ),
      label(
        "Manufacturer",
        select
          .onChange(selectHandlers(item, "manufacturer").onChange)(
          option
            .value``
            .selected(() => !item.manufacturer)("Select manufacturer"),
          ...(manufacturers || []).map((manufacturer) =>
            option
              .value(manufacturer)
              .selected(() => item.manufacturer === manufacturer)(manufacturer)
          )
        )
      ),
      label(
        "Material Type",
        select
          .onChange(selectHandlers(item, "material_type").onChange)(
          option
            .value``
            .selected(() => !item.material_type)("Select material"),
          ...materialTypes.map((materialType) =>
            option
              .value(materialType)
              .selected(() => item.material_type === materialType)(materialType)
          )
        )
      ),
      label(
        "Location",
        select
          .onChange(selectHandlers(item, "location").onChange)(
          option
            .value``
            .selected(() => !item.location)("Select location"),
          ...locations.map((location) =>
            option
              .value(location)
              .selected(() => item.location === location)(location)
          )
        )
      ),
      label(
        "Color name",
        input
          .value(() => item.color_name ?? "")
          .onChange(textHandlers(item, "color_name").onChange)
          .onKeyup(textHandlers(item, "color_name").onKeyup)()
      ),
      label(
        "Swatch code",
        input
          .value(() => item.swatch_code ?? "")
          .onChange(textHandlers(item, "swatch_code").onChange)
          .onKeyup(textHandlers(item, "swatch_code").onKeyup)()
      ),
      label(
        "QR Search Data",
        div.class`qr-input-row`(
          input
            .class`qr-edit-input`
            .value(() => item.qr_search_data ?? "")
            .onChange(textHandlers(item, "qr_search_data").onChange)
            .onKeyup(textHandlers(item, "qr_search_data").onKeyup)(),
          button
            .type`button`
            .class`qr-scan-button`
            .onClick(() => showQrScanner = true)(
            "Scan QR"
          )
        )
      ),
      label(
        "Bar Code",
        div.class`qr-input-row`(
          input
            .class`qr-edit-input`
            .value(() => item.barcode_search_data ?? "")
            .onChange(textHandlers(item, "barcode_search_data").onChange)
            .onKeyup(textHandlers(item, "barcode_search_data").onKeyup)(),
          button
            .type`button`
            .class`qr-scan-button`
            .onClick(() => showBarcodeScanner = true)(
            "Scan barcode"
          )
        )
      ),
      label(
        "URL",
        input
          .type`url`
          .value(() => item.url ?? "")
          .onChange(textHandlers(item, "url").onChange)
          .onKeyup(textHandlers(item, "url").onKeyup)()
      )
    )
  );
});

const summaryRow = tag((item, index, toggleRowEdit) => {
  summaryRow.updates((args) => {
    [item, index, toggleRowEdit] = args;
    // toggleRowEdit = output(toggleRowEdit);
  });
  toggleRowEdit = output(toggleRowEdit);
  return div.class`summary-row`(
    div(() => item.number || "-"),
    div.class`summary-swatch`(
      div
        .class`summary-chip`
        .style(() => `background:${isValidHex(item.hex) ? item.hex : ""};`)(),
      span.class`summary-swatch-name`(() => item.color_name || "Unnamed")
    ),
    div.class`summary-details`(
      div.class`summary-title-row`(
        strong(() => item.label || "Untitled"),
        button
          .type`button`
          .class`summary-edit-button`
          .onClick(() => {
              toggleRowEdit(index)
          })({
            "aria-label": "Edit swatch",
          },
          "✏️"
        )
      ),
      () => {
        const parts = [];
        if (item.manufacturer) {
          parts.push(
            span.class`summary-meta-item`(`Maker: ${item.manufacturer}`)
          );
        } else {
          parts.push(
            span.class`summary-meta-item`("Maker: N/A")
          );
        }
        if (item.spool_inventory !== undefined && item.spool_inventory !== "") {
          parts.push(
            span.class`summary-meta-item`(`Spools: ${item.spool_inventory}`)
          );
        } else {
          parts.push(
            span.class`summary-meta-item`("Spools: N/A")
          );
        }
        if (item.url) {
          const domainLabel = getDomainLabel(item.url);
          parts.push(
            span.class`summary-meta-item`(
              a
                .href(item.url)
                .attr("target", "_blank")
                .attr("rel", "noopener noreferrer")(
                domainLabel || item.url
              )
            )
          );
        }
        if (!parts.length) {
          return "";
        }
        return div.class`summary-meta`(...parts);
      }
    )
  );
});

export const SwatchRow = tag(
  (
    item, index,
    activeEditIndex, toggleRowEdit,
    manufacturers,
    onSave,
    onDuplicate,
  ) => {
    SwatchRow.updates((args) => {
      [item, index, activeEditIndex, toggleRowEdit, manufacturers, onSave, onDuplicate] = args;
      toggleRowEdit = output(toggleRowEdit)
    });

    toggleRowEdit = output(toggleRowEdit)

    return noElement(
      _=> (activeEditIndex === index)
        ? editCard(item, index, toggleRowEdit, manufacturers, onSave, onDuplicate)
        : summaryRow(item, index, toggleRowEdit)
    );
  }
);
