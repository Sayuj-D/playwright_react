import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForSelector('[data-testid="theme-container"]'); // Ensure the container is loaded
});

test("default theme is light", async ({ page }) => {
  // button exists before interacting with it
  const button = page.locator("button");
  await expect(button).toBeVisible();

  const container = page.locator('[data-testid="theme-container"]');
  await expect(container).toHaveClass(/bg-white/);
});

test("switches to dark theme on toggle click", async ({ page }) => {
  const button = page.locator("button");
  await button.click();
  const container = page.locator('[data-testid="theme-container"]');
  await expect(container).toHaveClass(/bg-gray-900/);

  test("toggles back to light theme on second click", async ({ page }) => {
    const button = page.locator("button");
    await button.click(); // First click - dark
    await button.click(); // Second click - back to light

    const container = page.locator('[data-testid="theme-container"]');
    await expect(container).toHaveClass(/bg-white/);
  });
});
