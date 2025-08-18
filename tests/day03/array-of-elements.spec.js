import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  
    let elements;
  
    //create beforeEach to navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    elements = await page.locator("//ul[@class='list-group']//a").all();
  });

  test("Verify that there are exactly 50 link elements within the <ul> tag", async ({page}) => {
    //let elements = await page.locator("//ul[@class='list-group']//a").all();

    expect(elements.length).toBe(50);
    expect(elements.length).toBeGreaterThanOrEqual(20);
  });

  test("Verify that each of the 50 link elements within the <ul> tag is visible & clickable", async ({page,}) => {
    //let elements = await page.locator("//ul[@class='list-group']//a").all();;

    for (let e of elements) {
      await expect(e).toBeVisible();
      expect(await e.isVisible).toBeTruthy();
      //--------------------------------------
      // await expect(e).toBeEnabled();
      // expect(await e.isEnabled()).toBeTruthy();
    }
  });

  test("Verify that each of the 50 link elements within the <ul> tag has a href attribute", async ({page,}) => {
    //let elements = await page.locator("//ul[@class='list-group']//a").all();
    for (let e of elements) {
      await expect(e).toHaveAttribute("href");
      console.log(await e.getAttribute("href"));
    }
  });
});

/*
1. Verify that there are exactly 50 link elements within the <ul> tag.

2. Verify that each of the 50 link elements within the <ul> tag is visible & clickable.

3. Verify that each of the 50 link elements within the <ul> tag has a href attribute.
*/
