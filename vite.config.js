import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // اجعلها سلاش فقط لأن الدومين الخاص يعتبر هو الجذر الأساسي  plugins: [react()],
});
