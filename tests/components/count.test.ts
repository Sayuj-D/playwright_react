import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.pause();
});

test("initial count is 0", async ({ page }) => {
  const count = await page.getByTestId("count-value");
  await expect(count).toHaveText("0");
});

test("clicking button increases count", async ({ page }) => {
  const button = page.getByRole("button", { name: "Increase" });
  await button.click();
  const count = page.locator('[data-testid="count-value"]');
  await expect(count).toHaveText("1");
});
