import { swatches } from "./swatches.js";
import { SwatchApp } from "./SwatchApp.tag.js";
import { SwatchRow } from "./SwatchRow.tag.js";
import {
  tag,
  tagElement,
  h1,
  p,
} from "https://cdn.jsdelivr.net/gh/AckerApple/taggedjs@dist/bundle.js";

const swatchHeader = document.getElementById("swatchHeader");
const swatchApp = document.getElementById("swatchApp");

const TaggedHeader = tag(() => [
  h1("Swatch Editor"),
  p(
    "Edit swatches in place. The preview updates instantly, and the JSON at",
    "the bottom is ready to copy back into your source file."
  ),
]);

if (swatchHeader) {
  tagElement(TaggedHeader, swatchHeader);
}

const data = swatches
  .map((item) => ({ ...item }))
  .sort((a, b) => (Number(a.number) || 0) - (Number(b.number) || 0));

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
    if (item.spool_inventory !== undefined && item.spool_inventory !== "") {
      cleaned.spool_inventory = Number(item.spool_inventory) || 0;
    }

    return cleaned;
  });

const addSwatch = () => {
  const nextNumber =
    Math.max(0, ...data.map((item) => Number(item.number) || 0)) + 1;
  data.unshift({
    number: nextNumber,
    label: "",
    color_name: "",
    swatch_code: "",
    hex: "",
    url: "",
    spool_inventory: 1,
  });
};

const App = tag(() =>
  SwatchApp(
    data,
    addSwatch,
    serializeSwatches,
  )
);

if (swatchApp) {
  tagElement(App, swatchApp);
}
