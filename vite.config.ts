// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
// import path, { dirname } from "path";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export default defineConfig({
//   base: '/react-practice/',
//   plugins: [react(), runtimeErrorOverlay(), themePlugin()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
//   root: __dirname,
//   build: {
//     outDir: path.resolve(__dirname, "dist"),
//     emptyOutDir: true,
//   },
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/react-practice/',
  plugins: [react()],
})

