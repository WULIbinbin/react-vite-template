import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  mode: "development",
  output: "dist",
  sourceMap: true,
  server: {
    port: 8896,
  },
});
