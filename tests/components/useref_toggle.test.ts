import { test, expect } from "@playwright/test";

test("revised toggle test", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.pause();

  const theme = await page.getByText("Test Text");
  const btn = await page.getByRole("button");

  await expect(theme).toHaveClass(/bg-gray-100 text-black/);

  await btn.click();
  await expect(theme).toHaveClass(/bg-gray-900 text-white/);

  await btn.click();
  await expect(theme).toHaveClass(/bg-gray-100 text-black/);
});
