//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import react from "react";
// import react from '@vitejs/plugin-react';

export default defineConfig ({
  plugins: [nodeResolve()],
  build: {
    sourcemap:true,
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "@sepoina/vitetranslate-components",   		 
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom","path", "fs"],
      output: {
        globals: {
          "path":"path",
          "fs":"fs",
          "react": "React",
          "react-dom": "ReactDOM",
        },
      },},
  },
});