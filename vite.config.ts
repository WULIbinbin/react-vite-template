import { defineConfig } from "vite";
import { resolve } from "path";

function lessModifyVars(lessPaths: string[]) {
  return lessPaths.reduce((prev, curv) => {
    return prev + `@import (reference) "${resolve(curv)}"; `;
  }, "true;");
}

console.log(lessModifyVars([
  "src/styles/var.less",
  "src/styles/mixins.less",
]))

export default defineConfig({
  base: "./",
  mode: "development",
  server: {
    port: 8896,
  },
  esbuild: {
    jsx: "automatic",
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      "@": "/src/",
      pages: resolve(__dirname, "/src/pages"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: lessModifyVars([
            "src/styles/var.less",
            "src/styles/mixins.less",
          ]),
        },
        javascriptEnabled: true,
      },
    },
  },
});
