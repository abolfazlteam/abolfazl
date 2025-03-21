/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import { defineConfig } from "vitest/config";
import path from "node:path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    setupFiles: path.resolve(__dirname, "setup.ts"),
    environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
    reporters: "verbose",
    environment: "jsdom",
    coverage: {
      provider: "v8",
      thresholds: {
        lines: 5,
        branches: 5,
        functions: 5,
        statements: 5,
      },
      include: ["src/**/*"],
      exclude: [
        "test/**",
        "**/*.d.ts",
        "**/*.test.*",
        "**/*.config.*",
        "**/snapshot-tests/**",
        "**/*.solution.tsx",
        "**/coverage/**",
        "src/assets",
        "src/stories",
        "src/content",
        "src/tailwind",
        "src/seo",
      ],
      all: true,
    },
    // reporters: "verbose",
    // isolate: true,
    // coverage: {
    //   provider: "v8",
    //   include: ["src/**/*"],
    //   reporter: ["text", "json", "html", "clover"],
    //   all: true,
    //   thresholds: {
    //     lines: 80,
    //     branches: 80,
    //     functions: 80,
    //     statements: 80,
    //   },
    // },
  },
});
