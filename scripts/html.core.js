import {
  html,
  head,
  body,
  title,
  meta,
  link,
  div,
  htmlTag,
} from "taggedjs";

export const script = htmlTag("script");

export const favicon =
  'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖨️</text></svg>';

const baseHead = () => [
  meta({ charset: "UTF-8" }),
  meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
];

export const htmlPage = ({ pageTitle, headItems = [], bodyItems = [], bodyClass = "" }) => {
  const bodyArgs = bodyClass ? [{ class: bodyClass }, ...bodyItems] : bodyItems;
  return html(
    { lang: "en" },
    head(
      ...baseHead(),
      title(pageTitle),
      ...headItems
    ),
    body(...bodyArgs)
  );
};

export const versionBadge = () =>
  div({ class: "version-badge", "data-app-version": "" });
