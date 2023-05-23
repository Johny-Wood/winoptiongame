import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "./src/assets/*",
          dest: "assets",
        },
      ],
    }),
  ],
  base: "https://johny-wood.github.io/winoptiongame",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
