const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const escapeText = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;");

const normalizeChildren = (children) =>
  children.flatMap((child) => (Array.isArray(child) ? normalizeChildren(child) : child));

const renderAttributes = (attributes) => {
  if (!attributes?.length) return "";
  const parts = [];
  attributes.forEach(([name, value]) => {
    if (value === undefined || value === null || value === false) {
      return;
    }
    if (value === true) {
      parts.push(String(name));
      return;
    }
    parts.push(`${name}="${escapeAttr(value)}"`);
  });
  return parts.length ? ` ${parts.join(" ")}` : "";
};

const isElement = (node) => node && typeof node === "object" && node.tagJsType === "element";

const renderNode = (node, indent) => {
  if (node === undefined || node === null || node === false) return "";
  if (Array.isArray(node)) {
    return normalizeChildren(node)
      .map((child) => renderNode(child, indent))
      .filter(Boolean)
      .join("\n");
  }
  if (!isElement(node)) {
    return `${" ".repeat(indent)}${escapeText(node)}`;
  }

  const tagName = node.tagName;
  const attrs = renderAttributes(node.attributes);
  const children = normalizeChildren(node.innerHTML || []).filter(
    (child) => child !== undefined && child !== null && child !== false
  );
  const spacer = " ".repeat(indent);

  if (VOID_TAGS.has(tagName)) {
    return `${spacer}<${tagName}${attrs} />`;
  }
  if (!children.length) {
    return `${spacer}<${tagName}${attrs}></${tagName}>`;
  }

  const singleChild = children.length === 1 ? children[0] : null;
  if (singleChild && !isElement(singleChild) && !Array.isArray(singleChild)) {
    return `${spacer}<${tagName}${attrs}>${escapeText(singleChild)}</${tagName}>`;
  }

  const renderedChildren = children
    .map((child) => renderNode(child, indent + 2))
    .filter(Boolean)
    .join("\n");
  return `${spacer}<${tagName}${attrs}>\n${renderedChildren}\n${spacer}</${tagName}>`;
};

export const renderDocument = (node) => `<!doctype html>\n${renderNode(node, 0)}\n`;
