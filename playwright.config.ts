import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false, // Disable fully parallel tests (run them sequentially)
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // Ensure only one worker/browser instance is used

  reporter: [["html"]], // Using HTML reporter for a better view of test results

  use: {
    trace: "on-first-retry", // Collect trace on first retry for debugging
  },

  // Only run the tests in Chromium (or another browser of your choice)
  projects: [
    {
      name: "chromium", // Only Chromium (Desktop Chrome)
      use: {
        ...devices["Desktop Chrome"],
        headless: false, // Set to true for headless mode (optional)
      },
    },
  ],
});
