import { expect, test } from "@playwright/test";

test("Window pop-up practice", async ({ page }) => {

    let promisedNewPage = page.waitForEvent("popup");

    await page.goto("https://practice.cydeo.com/windows");

    await page.click("text='Click Here'");

    await page.waitForTimeout(1000);

    let newPage = await promisedNewPage;

    await expect(newPage).toHaveTitle("New Window");
    await expect(page).toHaveTitle("Windows");

    await page.waitForTimeout(3000);

    await page.bringToFront();
    let firstWindoElement = page.getByText("Opening a new window");
    await expect(firstWindoElement).toBeVisible();

    await newPage.waitForTimeout(2000);

    await newPage.bringToFront();
    let secondWindowElement = newPage.getByText("New Window");
    await expect(secondWindowElement).toBeVisible();


});
