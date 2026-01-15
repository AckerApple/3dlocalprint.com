import { defineConfig } from "vite";
import { resolve } from "path";
import { readFileSync } from "fs";

const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf-8")
);

export default defineConfig({
  base: "./",
  root: "src",
  publicDir: "../public",
  server: {
    allowedHosts: ["ackers-macbook.local"],
  },
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        swatches: resolve(__dirname, "src/swatches/index.html"),
        manufacturers: resolve(__dirname, "src/swatches/manufacturers.html"),
      },
    },
  },
});
