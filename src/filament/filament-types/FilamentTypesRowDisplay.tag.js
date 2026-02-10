import {
  tag,
  div,
  strong,
  button,
  input,
  label,
  select,
  option,
} from "taggedjs";

export const FilamentTypesRowDisplay = tag((props = {}) => {
  let groupTypesByManufacturer = []
  let {
    types = [],
    isExpanded = () => false,
    toggleExpanded = () => {},
    removeType = () => {},
    getBarcodeList = () => [],
    updateBarcode = () => {},
    addBarcode = () => {},
    removeBarcode = () => {},
    openQrScanner = () => {},
    openBarcodeScanner = () => {},
    saveType = () => {},
    manufacturers = [],
    materialTypes = [],
    withManufacturerEmoji = (text) => text,
  } = props;

  FilamentTypesRowDisplay.inputs((args) => {
    [{
      types = [],
      groupTypesByManufacturer,
      isExpanded = () => false,
      toggleExpanded = () => {},
      removeType = () => {},
      getBarcodeList = () => [],
      updateBarcode = () => {},
      addBarcode = () => {},
      removeBarcode = () => {},
      openQrScanner = () => {},
      openBarcodeScanner = () => {},
      saveType = () => {},
      manufacturers = [],
      materialTypes = [],
      withManufacturerEmoji = (text) => text,
    }] = args;

    groupTypesByManufacturer = getGroupTypesByManufacturer(types)
  });

  return [_=> groupTypesByManufacturer.map(([maker, items]) => {
    return div.class`filament-type-group`(
      strong.class`filament-type-group-title`(
        maker === "Unknown" ? "🏭 Unknown" : `🏭 ${maker}`
      ),
      _=> items.map((item, index) =>
        div({
          class: "swatch-card",
          id: `filament-type-card-${item.filament_type_id || index}`,
        },
          div.class`filament-type-header`(
            div
              .class`summary-chip filament-type-swatch`
              .style(_=> `background:${item.hex || ""};`)(),
            div(
              strong(_=> item.label || "Untitled filament"),
              div.class`filament-type-color`(_=> item.color_name || "")
            ),
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
            div.class`filament-type-editor`(
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
                    _=> (manufacturers || []).map((makerValue) =>
                      option
                        .value(makerValue)
                        .selected(_=> item.manufacturer === makerValue)(makerValue)
                        .key(makerValue)
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
                    _=> materialTypes.map((materialType) =>
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
                    _=> {
                      const barcodes = getBarcodeList(item);
                      return barcodes.map((barcode, barcodeIndex) =>
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
                      );
                    },
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
              ),
              div.class`edit-card-footer`(
                button
                  .type`button`
                  .class`add-button`
                  .onClick(() => saveType(item))(
                  "💾 Save changes"
                )
              )
            )
        ).key(item.filament_type_id || index)
      )
    ).key(maker)
  })]
})

const getGroupTypesByManufacturer = (items) => {
  const groups = new Map();
  items.forEach((item) => {
    const key = item.manufacturer || "Unknown";
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(item);
  });
  return Array.from(groups.entries()).sort(([a], [b]) => {
    const aUnknown = a === "Unknown";
    const bUnknown = b === "Unknown";
    if (aUnknown && !bUnknown) return -1;
    if (!aUnknown && bUnknown) return 1;
    return a.localeCompare(b);
  });
};
