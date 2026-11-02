import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/resturantmeny-rect-opgv/", // Endre dette til ditt repository-navn
});
