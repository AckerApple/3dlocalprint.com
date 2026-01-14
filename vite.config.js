import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  root: "src",
  publicDir: "../public",
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
