import { test, expect } from "@playwright/test";

// check visiblity of the fields
test.describe("Test rendering of form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
    // await page.pause();
  });

  test("Page loads correctly", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/");
  });

  test("Form is visible on screen", async ({ page }) => {
    const form = await page.locator("form");
    await expect(form).toBeVisible();
  });

  test("All input fields are present", async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('select[name="gender"]')).toBeVisible();
    await expect(page.locator('input[type="checkbox"]')).toBeVisible();
  });

  test("Submit button is visible and enabled", async ({ page }) => {
    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toBeEnabled();
  });
});

//error handeling with dummy data:
test.describe("Form Validations", () => {
  // Runs before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("shows error if name is empty", async ({ page }) => {
    // tries submitting form with no name
    await page.fill('input[type="email"]', "sayuj@example.com");
    await page.check('input[type="radio"][value="male"]');
    await page.check('input[type="checkbox"]');
    await page.click("button[type=submit]");
    await expect(page.locator("text=Name is required.")).toBeVisible();
  });

  test("shows error if email is empty", async ({ page }) => {
    // tries submitting form with no email
    await page.fill('input[type="text"]', "Sayuj handsome");
    await page.check('input[type="radio"][value="male"]');
    await page.check('input[type="checkbox"]');
    await page.click("button[type=submit]");
    await expect(page.locator("text=Email is required.")).toBeVisible();
  });

  test("shows error if email is invalid", async ({ page }) => {
    // tries submitting form with wrong email format
    await page.fill('input[type="text"]', "Sayuj");
    await page.fill('input[type="email"]', "invalidemail");
    await page.check('input[type="radio"][value="male"]');
    await page.check('input[type="checkbox"]');
    await page.click("button[type=submit]");
    await expect(page.locator("text=Invalid email format.")).toBeVisible();
  });

  test("shows error if gender is not selected", async ({ page }) => {
    // skips gender
    await page.fill('input[type="text"]', "Sayujya dhungana");
    await page.fill('input[type="email"]', "sayujya@example.com");
    await page.check('input[type="checkbox"]');
    await page.click("button[type=submit]");
    await expect(page.locator("text=Please select your gender.")).toBeVisible();
  });

  test("shows error if terms not accepted", async ({ page }) => {
    // doesn't check terms
    await page.fill('input[type="text"]', "Sayujya Dhungana");
    await page.fill('input[type="email"]', "sayuj@example.com");
    await page.check('input[type="radio"][value="male"]');
    await page.click("button[type=submit]");
    await expect(
      page.locator("text=You must accept the terms and conditions.")
    ).toBeVisible();
  });

  test("submits successfully when all fields are valid", async ({ page }) => {
    // everything filled correctly
    await page.fill('input[type="text"]', "Sayujya Dhungana");
    await page.fill('input[type="email"]', "sayuj@example.com");
    await page.selectOption("select", "india");
    await page.check('input[type="radio"][value="male"]');
    await page.check('input[type="checkbox"]');
    // page.on("dialog", (dialog) => dialog.accept()); // handles alert
    await page.click("button[type=submit]");
  });
});
