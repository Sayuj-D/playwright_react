import { test, expect } from "@playwright/test";

test("check the visiblity", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.pause();
});

test("check rendering of the fields", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.pause();
  await page.click("button[type='submit']");
  await expect(page.locator("text=Name is required.")).toBeVisible();
  await expect(page.locator("text=Email is required.")).toBeVisible();
  await expect(page.locator("text=Date is required.")).toBeVisible();
  await expect(page.locator("text=Please select your gender.")).toBeVisible();
  await expect(
    page.locator("text=You must accept the terms and conditions.")
  ).toBeVisible();
  await expect(page.locator("text=Please enter the URL.")).toBeVisible();
});

test("submission of the form testing", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.pause();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Form submitted successfully!");
    await dialog.dismiss();
  });

  await page.fill('input[placeholder="Full Name"]', "Sayujya Dhungana");
  await page.fill("input[placeholder=Email]", "sayujyadhungana@gmail.com");
  await page.fill("input[type='date']", "2024-12-12");
  await page.selectOption("select", "nepal");
  await page.check('input[type=radio][value="others"]');
  await page.check('input[type="checkbox"]');
  await page.fill('input[type="url"]', "https://example.com");

  await page.click('button[type="submit"]');

  // await page.waitForTimeout(500);

  // check if data is obtained in table:
  await expect(page.locator("table")).toContainText("Sayujya Dhungana");
});
