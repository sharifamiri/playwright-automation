import { test } from "@playwright/test";

test.describe("Test Group", () => {
  //create beforeEach to navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    await page.waitForTimeout(1000);
  });

  //create afterEach to wait for 2 seconds before each test
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Left Click", async ({ page }) => {
    await page.click("text='A/B Testing'");
  });

  test("Right Click", async ({ page }) => {
    await page.click("text='A/B Testing'", { button: "right" });
  });

  test("Hover", async ({ page }) => {
    await page.click("text='Hovers'");

    // await page.hover("//img[@alt='User Avatar']");

    let elements = await page.locator("//img[@alt='User Avatar']").all();

    for (let e of elements) {
      await page.waitForTimeout(1000);
      await e.hover(e);
    }
  });

  test("Mouse wheel scrollin", async ({ page }) => {

    await page.mouse.wheel(0, 2000);
  });

  test("Scrolling to specific element", async ({ page }) => {

    let inputsLink = page.getByText("Inputs");

    await inputsLink.scrollIntoViewIfNeeded();

    await inputsLink.click();

  });

  test("Drag and Drop", async ({ page }) => {

    await page.click("text='Drag and Drop'");
    await page.waitForTimeout(1000);
    //await page.dragAndDrop("#column-a", "#column-b");

    //-- 2nd Way ---
    let squareALocator = page.locator("#column-a");
    let squareBLocator = page.locator("#column-b");

    await squareALocator.dragTo(squareBLocator);
  });
});
