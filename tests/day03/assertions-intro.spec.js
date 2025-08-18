import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {

    //create beforeEach to navigate to https://practice.cydeo.com/
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
        
        await expect(page).toHaveTitle("Practice");
        expect(await page.title()).toBe("Practice");
    });

    //create afterEach to wait for 2 seconds before each test
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(2000);
    });

  test("Verify checkboxes are checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let firstCheckbox = page.locator("#box1");
    let secondCheckbox = page.locator("#box2");

    await firstCheckbox.check();
    await secondCheckbox.check();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();

    // --------------------------
    expect(await firstCheckbox.isChecked()).toBeTruthy();
    expect(await secondCheckbox.isChecked()).toBeTruthy();

  });

  test("Verify checkboxes are unchecked", async ({ page }) => {
        await page.getByText("Checkboxes").click();
        let firstCheckbox = page.locator("#box1");
        let secondCheckbox = page.locator("#box2");

        await firstCheckbox.uncheck();
        await secondCheckbox.uncheck();

        await expect(firstCheckbox).not.toBeChecked();
        await expect(secondCheckbox).not.toBeChecked();
        // --------------------------
        expect(await firstCheckbox.isChecked).toBeFalsy();
        expect(await secondCheckbox.isChecked()).toBeFalsy();
  });

  test("Verify text of the element", async ({ page }) => {

    let headerElement = page.locator("span.h1y");
    await expect(headerElement).toHaveText("Test Automation Practice");

    let actualText = await headerElement.innerText();
    expect(actualText).toEqual("Test Automation Practice");

  });
});
