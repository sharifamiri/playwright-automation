import { test, expect } from "@playwright/test";

//These test cases are created by Perplexity.ai
test("Verify that all the links under the ul tag are displayed and enabled", async ({
  page,
}) => {
  // Step 1 & 2: Open browser and navigate to URL
  await page.goto("https://practice.cydeo.com/");

  // Step 3: Check URL contains "practice.cydeo"
  await expect(page).toHaveURL(/practice\.cydeo/);

  // Step 4: Check title is "Practice"
  await expect(page).toHaveTitle("Practice");

  // Step 5: Verify all links under ul with class 'list-group' are visible and enabled (clickable)
  const links = page.locator('//ul[@class="list-group"]//a');
  const count = await links.count();
  for (let i = 0; i < count; i++) {
    const link = links.nth(i);
    await expect(link).toBeVisible();
    await expect(link).toBeEnabled();
  }
});


test("Test Case 2: Search Cydeo in Google", async ({ page }) => {
  // Step 1 & 2: Open browser and navigate to Google's homepage
  await page.goto("https://google.com");

  // Step 3: Verify the title is "Google"
  await expect(page).toHaveTitle("Google");

  // Step 4: Enter "Cydeo" in the search box and press Enter
  const searchBox = page.locator('//textarea[@class="gLFyf"]');
  await searchBox.fill("Cydeo");
  await searchBox.press("Enter");

  // Step 5: Verify the page title contains "Cydeo"
  await expect(page).toHaveTitle(/Cydeo/);
});
