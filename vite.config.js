import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import json from "@rollup/plugin-json";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://johny-wood.github.io/winoptiongame",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // "@json": path.resolve(__dirname, "/mock"),
    },
  },
});
