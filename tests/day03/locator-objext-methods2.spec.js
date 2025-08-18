import { test } from "@playwright/test";

test.describe("Test Group", () => {

  //create beforeEach to navigate to https://practice.cydeo.com/
   test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  //create afterEach to wait for 2 seconds before each test
   test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("innerText(): retrieves the visible text", async ({ page }) => {
    let headerElement = page.locator("//span[@class='h1y']");
    let actualText = await headerElement.innerText();
    console.log(actualText);
  });

  test("inputValue(): only works with <input>, <textarea>, <select>, retrieves the input value", async ({ page }) => {
    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();

    let inputBox = page.locator("//input[@type='number']");
    inputBox.fill("123");
    await page.waitForTimeout(2000);

    let actualInput = await inputBox.inputValue();
    console.log(actualInput);
  });

  test("getAttribut(): retrieves the attribute value", async ({ page }) => {
    let abTestingLink = page.locator("text='A/B Testing'");
    let hrefLink = await abTestingLink.getAttribute("href");
    console.log(hrefLink);
  });
});
