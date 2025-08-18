import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    page.goto("file:///Users/sharifamiri/Downloads/reference_page.html");
  });

  test("Case 1", async ({ page }) => {
    await page.waitForTimeout(1000);
    let search = page.locator("#search-input");
    await expect(search).toBeVisible();
    let button = page.locator("#search-button");
    await expect(button).toBeVisible();
  });

  test("Case 2", async ({ page }) => {
    let search = page.locator("#search-input");
    let button = page.locator("#search-button");
    await search.fill("isla");
    await button.click();
    await page.waitForTimeout(1000);

    let results = page.locator("#search-results");
    let resultsCount = await results.locator("li").count();
    console.log(resultsCount);


    // for(let i = 0; i < resultsCount; i++){
    //     let res = await results.nth(i).innerText();
    //     console.log(res);
    // }

  });
});
