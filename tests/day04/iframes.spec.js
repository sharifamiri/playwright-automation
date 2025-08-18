import { expect, test } from "@playwright/test";

test("", async ({ page }) => {

    await page.goto("https://practice.cydeo.com/iframe");

    let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");

    let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");

    await page.waitForTimeout(1000);

    await elementInsideTheFrame.clear();
    
    //second method to clear the content of the iframe
    //await elementInsideTheFrame.press("Control+A", "Backspace");
    
    await page.waitForTimeout(1000);
    await elementInsideTheFrame.fill("Hello, Cydeo!");
    await page.waitForTimeout(4000);

    await expect(elementInsideTheFrame).toHaveText("Hello, Cydeo!");

});
