import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ikaedis.github.io/Trie1",
  plugins: [react()],
});
