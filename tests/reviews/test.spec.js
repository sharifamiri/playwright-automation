import { test, expect } from "@playwright/test";

test("verify all the links under the ul tag are displayed and enabled", async ({
  page,
}) => {
  // Step 1 & 2: Open browser and navigate to the URL
  await page.goto("https://practice.cydeo.com/");

  // Step 3: Locate all links under the ul with class 'list-group'
  const links = page.locator("//ul[@class='list-group']//a");

  // Step 4: Verify that there are exactly 50 links
  await expect(links).toHaveCount(50);

  // Step 5: Verify all links are visible and enabled
  const count = await links.count();
  
  for (let i = 0; i < count; i++) {
    await expect(links.nth(i)).toBeVisible();
    await expect(links.nth(i)).toBeEnabled();
  }
});
