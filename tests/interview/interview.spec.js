import {test, expect} from '@playwright/test';

test("Verify input and submit", async ({page}) => {
    page.goto("file:///Users/sharifamiri/Downloads/reference_page.html");
    let searchBox = page.locator("#search-input");
    await expect(searchBox).toBeVisible();
    let submitButton = page.locator("#search-button");
    await expect(submitButton).toBeVisible();
});

test("Verify 'isla' results", async ({page}) => {
    page.goto("file:///Users/sharifamiri/Downloads/reference_page.html");
    let searchBox = page.locator("#search-input");
    let submitButton = page.locator("#search-button");
    await searchBox.fill("isla");
    await submitButton.click();

    await page.waitForTimeout(2000);

    let results = await page.locator("#search-results");
    let resultsCount = await results.locator("li");
    
    expect(resultsCount).toBeGreaterThanOrEqual(1);
    console.log(resultsCount);
    expect(resultsCount).toEqual(4);

    // for (let i = 0; i < resultsCount; i++){
    //     console.log(await results.nth(i).innerText());
    // }
    
    // await page.waitForTimeout(2000);
});

