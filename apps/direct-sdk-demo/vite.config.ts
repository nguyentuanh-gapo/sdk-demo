import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@demo/sdk": path.resolve(__dirname, "./local-sdk/index.es.js"),
      "@demo/sdk/style.css": path.resolve(__dirname, "./local-sdk/style.css"),
    },
  },
});
