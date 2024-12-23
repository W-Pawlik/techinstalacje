/* eslint-disable import/no-unresolved */
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  define: {
    "process.env": process.env,
    global: "window",
  },
  server: {
    open: true,
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  test: {
    clearMocks: true,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      provider: "v8",
      reportOnFailure: true,
      include: ["src/**/*"],
      exclude: ["**/__fixtures__/**/*"],
      reporter: ["lcov"],
    },
    reporters: ["junit", "verbose"],
    outputFile: "./junit.xml",
    typecheck: { ignoreSourceErrors: true, include: [] },
  },
  build: {
    minify: "terser",
  },
});
