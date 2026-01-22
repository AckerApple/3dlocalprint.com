import { mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { renderDocument } from "./html.render.js";
import { filamentIndexPage } from "./filament.index.html.js";
import { filamentStandalonePage } from "./filament.standalone.html.js";
import { filamentFastEditPage } from "./filament.fast-edit.html.js";
import { locations } from "../src/filament/locations.array.js";
import { slugifyLocation } from "../src/filament/location-utils.js";

const rootDir = resolve(".");
const filamentDir = resolve(rootDir, "src/filament");

const pages = [
  {
    path: resolve(filamentDir, "index.html"),
    render: () => filamentIndexPage(),
  },
  {
    path: resolve(filamentDir, "admin.html"),
    render: () =>
      filamentStandalonePage({
        pageTitle: "Admin Home",
        appId: "adminHomeApp",
        appScript: "admin-home.tag.js",
      }),
  },
  {
    path: resolve(filamentDir, "filament-types.html"),
    render: () =>
      filamentStandalonePage({
        pageTitle: "Filament Types",
        appId: "filamentTypesApp",
        appScript: "filament-types.tag.js",
      }),
  },
  {
    path: resolve(filamentDir, "manufacturers.html"),
    render: () =>
      filamentStandalonePage({
        pageTitle: "🏭 Manage Filament Manufacturers",
        appId: "manufacturersApp",
        appScript: "manufacturers.tag.js",
      }),
  },
  {
    path: resolve(filamentDir, "admins.html"),
    render: () =>
      filamentStandalonePage({
        pageTitle: "Manage Admins",
        appId: "adminsApp",
        appScript: "admins.tag.js",
      }),
  },
];

const fastEditPages = locations.map((location) => {
  const locationSlug = slugifyLocation(location);
  return {
    path: resolve(filamentDir, locationSlug, "fast-edit.html"),
    render: () =>
      filamentFastEditPage({
        pageTitle: `Fast Edit - ${location}`,
        appId: "fastEditApp",
        location,
        locationSlug,
        assetPrefix: "../",
      }),
  };
});

mkdirSync(filamentDir, { recursive: true });

pages.concat(fastEditPages).forEach((page) => {
  const dir = resolve(page.path, "..");
  mkdirSync(dir, { recursive: true });
  writeFileSync(page.path, renderDocument(page.render()), "utf-8");
});
