import {test, expect} from '@playwright/test';

test("Testing login", async ({page}) => {
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    let username = page.locator("#username");
    let password = page.locator("#password");
    let submit = page.locator("//button[@type='submit']");

    // await expect(submit).toBeVisible();

    await username.fill("admin");
    await password.fill("password");
    // await expect(submit).toBeEnabled();
    await submit.click();

    await page.waitForTimeout(2000);

    let invalidMessage = page.getByText("Invalid username or password");
    console.log("Invalid username or password");
});