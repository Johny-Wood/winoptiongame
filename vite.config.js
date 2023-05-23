import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "rollup-plugin-replace";
import json from "@rollup/plugin-json";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    json(),
    replace({
      '"/src/assets/"': '"/assets/"',
    }),
  ],
  base: "https://johny-wood.github.io/winoptiongame",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
