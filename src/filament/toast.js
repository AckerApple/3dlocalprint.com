const ROOT_ID = "toast-root";
const DEFAULT_DURATION = 6000;

const ensureRoot = () => {
  let root = document.getElementById(ROOT_ID);
  if (root) return root;
  root = document.createElement("div");
  root.id = ROOT_ID;
  root.className = "toast-root";
  document.body.appendChild(root);
  return root;
};

const buildToast = (message, tone) => {
  const toast = document.createElement("div");
  toast.className = `toast toast-${tone}`;
  toast.setAttribute("role", "status");
  toast.textContent = message;
  return toast;
};

const showToast = (message, options = {}) => {
  if (!message) return;
  const { tone = "info", duration = DEFAULT_DURATION } = options;
  const root = ensureRoot();
  const toast = buildToast(message, tone);
  root.appendChild(toast);

  const timeoutId = window.setTimeout(() => {
    toast.remove();
  }, duration);

  toast.addEventListener(
    "click",
    () => {
      window.clearTimeout(timeoutId);
      toast.remove();
    },
    { once: true }
  );
};

export const toast = {
  info: (message, options) => showToast(message, { ...options, tone: "info" }),
  success: (message, options) =>
    showToast(message, { ...options, tone: "success" }),
  error: (message, options) =>
    showToast(message, { ...options, tone: "error" }),
};
