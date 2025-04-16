import { test, expect } from "@playwright/test";

test("toggle theme from light to dark and back", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.pause();
  const theme = await page.getByTestId("theme-container");
  const btn = await page.getByRole("button", { name: "Toggle Theme" });

  // Initially light
  await expect(theme).toHaveClass(/bg-white/);

  // Click dark
  await btn.click();
  await expect(theme).toHaveClass(/bg-gray-900/);

  // Click light
  await btn.click();
  await expect(theme).toHaveClass(/bg-white/);
});
