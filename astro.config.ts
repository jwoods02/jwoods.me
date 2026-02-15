import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jwoods.me",
  vite: {
    plugins: [tailwindcss()],
  },
});
