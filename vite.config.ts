import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/// <reference types="@testing-library/jest-dom" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
