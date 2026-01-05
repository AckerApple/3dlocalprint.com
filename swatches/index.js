import { swatches } from "./swatches.js";

const grid = document.getElementById("swatchGrid");
const summaryList = document.getElementById("summaryList");
const output = document.getElementById("jsonOutput");
const count = document.getElementById("count");
const editViewButton = document.getElementById("editViewButton");
const summaryViewButton = document.getElementById("summaryViewButton");
const jsonViewButton = document.getElementById("jsonViewButton");
const addSwatchButton = document.getElementById("addSwatchButton");
const jsonPanel = document.getElementById("jsonPanel");

const data = swatches
  .map((item) => ({ ...item }))
  .sort((a, b) => (Number(a.number) || 0) - (Number(b.number) || 0));
let viewMode = "summary";

const isValidHex = (value) =>
  /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value);

const serializeSwatches = () =>
  data.map((item) => {
    const cleaned = {
      number: Number(item.number) || 0,
      label: item.label || "",
    };

    if (item.color_name) cleaned.color_name = item.color_name;
    if (item.swatch_code) cleaned.swatch_code = item.swatch_code;
    if (item.hex) cleaned.hex = item.hex;
    if (item.url) cleaned.url = item.url;

    return cleaned;
  });

const updateOutput = () => {
  output.value = JSON.stringify(serializeSwatches(), null, 2);
  count.textContent = `${data.length} swatches`;
};

const buildField = (label, value, onChange, type = "text") => {
  const wrapper = document.createElement("label");
  wrapper.textContent = label;

  const input = document.createElement("input");
  input.type = type;
  input.value = value ?? "";
  input.addEventListener("input", (event) => onChange(event.target.value));

  wrapper.appendChild(input);
  return wrapper;
};

const buildColorField = (label, value, onChange) => {
  const wrapper = document.createElement("label");
  wrapper.textContent = label;

  const input = document.createElement("input");
  input.type = "color";
  input.value = isValidHex(value) ? value : "#000000";
  input.addEventListener("input", (event) => onChange(event.target.value));

  wrapper.appendChild(input);
  return wrapper;
};

const applyChip = (chip, hexValue) => {
  if (hexValue && isValidHex(hexValue)) {
    chip.style.background = hexValue;
  } else {
    chip.style.background = "";
  }
};

const renderEditView = () => {
  grid.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "swatch-card";

    const numberField = buildField(
      "Number",
      item.number,
      (value) => {
        item.number = value;
        updateOutput();
        renderSummaryView();
      },
      "number"
    );

    const fields = document.createElement("div");
    fields.className = "fields";

    const updateHex = (value) => {
      item.hex = value.trim();
      const normalized = isValidHex(item.hex) ? item.hex : "#000000";
      colorInput.value = normalized;
      hexTextInput.value = item.hex;
      updateOutput();
      renderSummaryView();
    };

    const hexWrapper = document.createElement("label");
    hexWrapper.textContent = "Hex Color";

    const hexRow = document.createElement("div");
    hexRow.style.display = "flex";
    hexRow.style.gap = "10px";
    hexRow.style.alignItems = "center";

    const colorField = buildColorField("", item.hex, updateHex);
    const hexField = buildField("", item.hex, (value) => updateHex(value));
    const colorInput = colorField.querySelector("input");
    const hexTextInput = hexField.querySelector("input");
    colorInput.style.width = "56px";
    colorInput.style.padding = "0";
    colorInput.style.height = "42px";
    hexTextInput.style.flex = "1";

    hexRow.appendChild(colorInput);
    hexRow.appendChild(hexTextInput);
    hexWrapper.appendChild(hexRow);
    fields.appendChild(hexWrapper);
    fields.appendChild(
      buildField("Label", item.label, (value) => {
        item.label = value;
        updateOutput();
        renderSummaryView();
      })
    );
    fields.appendChild(
      buildField("Color name", item.color_name, (value) => {
        item.color_name = value;
        updateOutput();
        renderSummaryView();
      })
    );
    fields.appendChild(
      buildField("Swatch code", item.swatch_code, (value) => {
        item.swatch_code = value;
        updateOutput();
        renderSummaryView();
      })
    );
    fields.appendChild(
      buildField(
        "URL",
        item.url,
        (value) => {
          item.url = value;
          updateOutput();
          renderSummaryView();
        },
        "url"
      )
    );

    card.appendChild(numberField);
    card.appendChild(fields);
    grid.appendChild(card);
  });
};

const renderSummaryView = () => {
  summaryList.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("div");
    row.className = "summary-row";

    const number = document.createElement("div");
    number.textContent = item.number || "-";

    const chip = document.createElement("div");
    chip.className = "summary-chip";
    applyChip(chip, item.hex);

    const details = document.createElement("div");
    details.className = "summary-details"
    const label = document.createElement("strong");
    label.textContent = item.label || "Untitled";
    details.appendChild(label);

    const metaItems = [];
    if (item.color_name) metaItems.push(`Name: ${item.color_name}`);
    if (item.swatch_code) metaItems.push(`Code: ${item.swatch_code}`);
    if (item.hex) metaItems.push(`Hex: ${item.hex}`);

    if (item.url) {
      const link = document.createElement("a");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = item.url;
      metaItems.push(link);
    }

    if (metaItems.length) {
      const meta = document.createElement("div");
      meta.className = "summary-meta";
      metaItems.forEach((part) => {
        const itemSpan = document.createElement("span");
        itemSpan.className = "summary-meta-item";
        if (part instanceof HTMLElement) {
          itemSpan.appendChild(part);
        } else {
          itemSpan.textContent = part;
        }
        meta.appendChild(itemSpan);
      });
      details.appendChild(meta);
    }

    row.appendChild(number);
    row.appendChild(chip);
    row.appendChild(details);
    summaryList.appendChild(row);
  });
};

const render = () => {
  addSwatchButton.hidden = viewMode !== "edit";
  if (viewMode === "edit") {
    grid.hidden = false;
    summaryList.hidden = true;
    jsonPanel.hidden = true;
    renderEditView();
    return;
  }
  if (viewMode === "summary") {
    grid.hidden = true;
    summaryList.hidden = false;
    jsonPanel.hidden = true;
    renderSummaryView();
    return;
  }
  grid.hidden = true;
  summaryList.hidden = true;
  jsonPanel.hidden = false;
};

const setViewMode = (mode) => {
  viewMode = mode;
  summaryViewButton.classList.toggle("active", mode === "summary");
  editViewButton.classList.toggle("active", mode === "edit");
  jsonViewButton.classList.toggle("active", mode === "json");
  render();
};

setViewMode(viewMode);
updateOutput();

editViewButton.addEventListener("click", () => setViewMode("edit"));
summaryViewButton.addEventListener("click", () => setViewMode("summary"));
jsonViewButton.addEventListener("click", () => setViewMode("json"));
addSwatchButton.addEventListener("click", () => {
  const nextNumber =
    Math.max(0, ...data.map((item) => Number(item.number) || 0)) + 1;
  data.unshift({
    number: nextNumber,
    label: "",
    color_name: "",
    swatch_code: "",
    hex: "",
    url: "",
  });
  updateOutput();
  render();
});
