import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    alias: {
      "@": "/src",
    },
    retry:2
  },
});
