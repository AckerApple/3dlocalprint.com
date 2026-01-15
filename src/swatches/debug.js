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
};

export const flushDebugLog = () => {
  const entries = readEntries();
  if (!entries.length) return;
  console.debug("[debug] session log", entries);
};

export const clearDebugLog = () => {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Failed to clear debug log", error);
  }
};
