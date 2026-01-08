import {
  tag,
  div,
  span,
  button,
  label,
  input,
  strong,
  a,
  noElement,
  output,
} from "https://cdn.jsdelivr.net/gh/AckerApple/taggedjs@dist/bundle.js";

const isValidHex = (value) =>
  /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value);

const setItemValue = (item, field, value) => {
  item[field] = value;
};

const textHandlers = (item, field, { trim = false } = {}) => ({
  onChange: (event) =>
    setItemValue(item, field, trim ? event.target.value.trim() : event.target.value),
  onKeyup: (event) =>
    setItemValue(item, field, trim ? event.target.value.trim() : event.target.value),
});

const numberHandler = (item, field) => ({
  onChange: (event) => setItemValue(item, field, event.target.value),
});

const editCard = tag((item, index, toggleRowEdit) => {
  toggleRowEdit = output(toggleRowEdit)
  return div(
    { class: "swatch-card" },
    div(
      { class: "edit-card-header" },
      span({ class: "edit-card-title" }, `Swatch ${item.number || "-"}`),
      button(
        {
          type: "button",
          class: "edit-card-toggle",
          onClick: () => toggleRowEdit(index),
          "aria-label": "Stop editing swatch",
        },
        "Done"
      )
    ),
    label(
      "Number",
      input({
        type: "number",
        value: () => item.number ?? "",
        ...numberHandler(item, "number"),
      })
    ),
    div(
      { class: "fields" },
      label(
        "Hex Color",
        div(
          { style: "display:flex; gap:10px; align-items:center;" },
          input({
            type: "color",
            value: () => (isValidHex(item.hex) ? item.hex : "#000000"),
            style: "width:56px; min-width:56px; padding:0; height:42px;",
            onChange: (event) =>
              setItemValue(item, "hex", event.target.value.trim()),
          }),
          input({
            value: () => item.hex ?? "",
            style: "flex:1;",
            ...textHandlers(item, "hex", { trim: true }),
          })
        )
      ),
      label(
        "Spool Inventory",
        input({
          type: "number",
          value: () => item.spool_inventory ?? "",
          ...numberHandler(item, "spool_inventory"),
        })
      ),
      label(
        "Label",
        input({
          value: () => item.label ?? "",
          ...textHandlers(item, "label"),
        })
      ),
      label(
        "Color name",
        input({
          value: () => item.color_name ?? "",
          ...textHandlers(item, "color_name"),
        })
      ),
      label(
        "Swatch code",
        input({
          value: () => item.swatch_code ?? "",
          ...textHandlers(item, "swatch_code"),
        })
      ),
      label(
        "URL",
        input({
          type: "url",
          value: () => item.url ?? "",
          ...textHandlers(item, "url"),
        })
      )
    )
  );
})

const summaryRow = tag((item, index, toggleRowEdit) => {
  toggleRowEdit = output(toggleRowEdit)
  return div(
    { class: "summary-row" },
    div(() => item.number || "-"),
    div({
      class: "summary-chip",
      "style.background": () => (isValidHex(item.hex) ? item.hex : ""),
    }),
    div(
      { class: "summary-details" },
      div(
        { class: "summary-title-row" },
        strong(() => item.label || "Untitled"),
        button(
          {
            type: "button",
            class: "summary-edit-button",
            onClick: () => toggleRowEdit(index),
            "aria-label": "Edit swatch",
          },
          "✏️"
        )
      ),
      () => {
        const parts = [];
        if (item.color_name) {
          parts.push(
            span({ class: "summary-meta-item" }, `Name: ${item.color_name}`)
          );
        }
        if (item.swatch_code) {
          parts.push(
            span({ class: "summary-meta-item" }, `Code: ${item.swatch_code}`)
          );
        }
        if (item.hex) {
          parts.push(
            span({ class: "summary-meta-item" }, `Hex: ${item.hex}`)
          );
        }
        if (item.spool_inventory !== undefined && item.spool_inventory !== "") {
          parts.push(
            span(
              { class: "summary-meta-item" },
              `Spool Inventory: ${item.spool_inventory}`
            )
          );
        }
        if (item.url) {
          parts.push(
            span(
              { class: "summary-meta-item" },
              a(
                {
                  href: item.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                item.url
              )
            )
          );
        }
        if (!parts.length) {
          return "";
        }
        return div({ class: "summary-meta" }, ...parts);
      }
    )
  );
})

export const SwatchRow = tag(
  (
    item, index, isEditAll,
    activeEditIndex, toggleRowEdit,
  ) => {
    SwatchRow.updates((args) => {
      [item, index, isEditAll, activeEditIndex, toggleRowEdit] = args;
    });

    toggleRowEdit = output(toggleRowEdit)

    return noElement(
      _=> (isEditAll || activeEditIndex === index)
        ? editCard(item, index, toggleRowEdit)
        : summaryRow(item, index, toggleRowEdit)
    );
  }
);
