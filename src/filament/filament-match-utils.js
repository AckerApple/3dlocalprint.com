import { normalizeBarcodeList } from "./barcode-utils.js";

const normalizeMatchValue = (value) =>
  value === undefined || value === null ? "" : value.toString().trim().toLowerCase();

const matchesToken = (value, token) =>
  normalizeMatchValue(value).includes(normalizeMatchValue(token));

export const getFilamentTypeMatchKeyForToken = (item, token) => {
  if (!item) return "";
  const normalizedToken = normalizeMatchValue(token);
  if (!normalizedToken) return "";

  const barcodeList = normalizeBarcodeList(item.barcode_search_data);
  const barcodeMatch = barcodeList.find((barcode) =>
    normalizeMatchValue(barcode).includes(normalizedToken)
  );
  if (barcodeMatch) {
    return item.filament_type_id || "";
  }

  if (matchesToken(item.swatch_code, token)) return item.filament_type_id || "";
  if (matchesToken(item.number, token)) return item.filament_type_id || "";
  if (matchesToken(item.label, token)) return item.filament_type_id || "";
  if (matchesToken(item.color_name, token)) return item.filament_type_id || "";

  return "";
};

export const describeFilamentType = (item) => {
  if (!item) return "";
  const label = item.label || "Untitled";
  const color = item.color_name ? ` • ${item.color_name}` : "";
  const maker = item.manufacturer ? ` • 🏭 ${item.manufacturer}` : "";
  return `${label}${color}${maker}`;
};
