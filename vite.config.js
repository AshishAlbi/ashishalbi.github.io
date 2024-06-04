import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { copy } from "vite-plugin-copy";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "assets/**/*",
          dest: "assets",
        },
      ],
    }),
  ],
});
