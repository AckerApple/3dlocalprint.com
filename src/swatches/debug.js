const STORAGE_KEY = "swatches:debugLog";
const MAX_ENTRIES = 200;

const readEntries = () => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn("Failed to read debug log", error);
    return [];
  }
};

const writeEntries = (entries) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (error) {
    console.warn("Failed to write debug log", error);
  }
};

const shouldShowOverlay = () =>
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("debug");

const shouldPause = () =>
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("pause");

export const debugPause = (label) => {
  if (!shouldShowOverlay() || !shouldPause()) return;
  window.confirm(`Debug pause: ${label}`);
};

const renderOverlay = () => {
  if (!shouldShowOverlay()) return;
  if (document.getElementById("debug-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "debug-overlay";
  overlay.style.position = "fixed";
  overlay.style.left = "12px";
  overlay.style.right = "12px";
  overlay.style.bottom = "12px";
  overlay.style.maxHeight = "40vh";
  overlay.style.overflow = "auto";
  overlay.style.background = "rgba(15, 17, 20, 0.92)";
  overlay.style.color = "#f5f1e8";
  overlay.style.borderRadius = "12px";
  overlay.style.padding = "10px 12px";
  overlay.style.fontSize = "12px";
  overlay.style.zIndex = "2000";
  overlay.style.whiteSpace = "pre-wrap";
  overlay.style.fontFamily = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace";

  const header = document.createElement("div");
  header.textContent = "Debug log (append ?debug=1)";
  header.style.opacity = "0.7";
  header.style.marginBottom = "6px";
  overlay.appendChild(header);

  const body = document.createElement("div");
  body.id = "debug-overlay-body";
  overlay.appendChild(body);

  const close = document.createElement("button");
  close.textContent = "Close";
  close.style.position = "absolute";
  close.style.top = "8px";
  close.style.right = "8px";
  close.style.background = "transparent";
  close.style.border = "1px solid rgba(245, 241, 232, 0.4)";
  close.style.color = "#f5f1e8";
  close.style.borderRadius = "999px";
  close.style.padding = "2px 8px";
  close.style.cursor = "pointer";
  close.addEventListener("click", () => overlay.remove());
  overlay.appendChild(close);

  document.body.appendChild(overlay);
  updateOverlay();
};

const updateOverlay = () => {
  if (!shouldShowOverlay()) return;
  const body = document.getElementById("debug-overlay-body");
  if (!body) return;
  const entries = readEntries();
  body.textContent = entries
    .slice(-60)
    .map((entry) => `${entry.t} ${entry.label} ${JSON.stringify(entry.data)}`)
    .join("\n");
};

export const debugLog = (label, data = {}) => {
  const entry = {
    t: new Date().toISOString(),
    label,
    data,
  };
  console.debug(`[debug] ${label}`, data);
  const entries = readEntries();
  entries.push(entry);
  if (entries.length > MAX_ENTRIES) {
    entries.splice(0, entries.length - MAX_ENTRIES);
  }
  writeEntries(entries);
  updateOverlay();
};

export const flushDebugLog = () => {
  const entries = readEntries();
  if (!entries.length) return;
  console.debug("[debug] session log", entries);
  renderOverlay();
  updateOverlay();
};

export const clearDebugLog = () => {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Failed to clear debug log", error);
  }
};
