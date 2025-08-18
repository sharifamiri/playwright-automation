import { test } from "@playwright/test";

test.describe("Test Group", () => {
  //create beforeEach to navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  //create afterEach to wait for 3 seconds before each test
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Check: checks the radio button and check boxes if they haven't been checked yet", async ({ page }) => {
    // let checkboxesLink = page.locator("text='Checkboxes'");
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    let checkbox1 = page.locator("//input[@id='box1']");
    await checkbox1.check();
  });

  test("Uncheck: unchecks the radio button and check boxes if they haven't been unchecked yet", async ({ page }) => {
        let checkboxesLink = page.getByText("Checkboxes");
        await checkboxesLink.click();
        await page.waitForTimeout(2000);

        let checkbox2 = page.locator("#box2")
        await checkbox2.uncheck();

  });

  test("SelectOption: used for dropdown boxes with select tagname", async ({ page }) => {
    let dropdownLin = page.getByText("Dropdown");
    await dropdownLin.click();
    await page.waitForTimeout(2000);

    let simpleDropdown = page.locator("//select[@id='dropdown']");
    // await simpleDropdown.selectOption("1");
    // await simpleDropdown.selectOption({label: "Option 1"}); //selecting by text
    await simpleDropdown.selectOption({index: 1}); //selecting by index
  });
});
