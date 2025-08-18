import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  // Test body
  await page.goto("https://practice.cydeo.com/");
  let actualTitle = await page.title();
  //pause for 3 seconds to see the output
  //await page.waitForTimeout(3000);

  console.log(actualTitle);
});

test("Getting current url of the page", async ({ page }) => {
  // Test body
  await page.goto("https://practice.cydeo.com/");
  let actualUrl = page.url();

  console.log(actualUrl);
});

test("Set the window size", async ({ page }) => {
    // Test body
    await page.goto("https://practice.cydeo.com/");

    //will set this in global config
    //await page.setViewportSize({width: 1500, height: 900});
    await page.waitForTimeout(3000);
});
