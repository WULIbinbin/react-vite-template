import { ConfigEnv, UserConfigExport } from 'vite';
import path, { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
// import { manualChunksPlugin } from 'vite-plugin-webpackchunkname';
import visualizer from 'rollup-plugin-visualizer';

function lessModifyVars(lessPaths: string[]) {
  return lessPaths.reduce((prev, curv) => `${prev}@import (reference) "${resolve(curv)}"; `, 'true;');
}

export default ({ command }: ConfigEnv): UserConfigExport => ({
  base: './',
  mode: 'development',
  server: {
    port: 8896,
  },
  plugins: [
    viteMockServe({
      mockPath: path.resolve('mock/index'),
      localEnabled: command === 'serve',
      // watchFiles: true,
    }),
    // manualChunksPlugin(),
    visualizer({
      sourcemap: true,
      emitFile: true,
    }),
  ],
  esbuild: {
    jsx: 'automatic',
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      '@': '/src/',
      pages: resolve(__dirname, '/src/pages'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: lessModifyVars(['src/styles/var.less', 'src/styles/mixins.less']),
        },
        javascriptEnabled: true,
      },
    },
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom', 'react-redux', '@reduxjs/toolkit'],
          layout: ['tdesign-icons-react', 'tdesign-react'],
        },
      },
    },
  },
});
