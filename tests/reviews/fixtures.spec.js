import { test } from "@playwright/test";

test("", async ({ context }) => {

    let linkedInPage = await context.newPage();
    let githubPage = await context.newPage();
    let facebookPage = await context.newPage();

    await facebookPage.waitForTimeout(2000);

    await linkedInPage.bringToFront();
    await linkedInPage.goto("https://www.linkedin.com/");
    await linkedInPage.waitForTimeout(1000);

    await githubPage.bringToFront();
    await githubPage.goto("https://www.github.com/");
    await githubPage.waitForTimeout(1000);

    await facebookPage.bringToFront();
    await facebookPage.goto("https://www.facebook.com/");
    await facebookPage.waitForTimeout(2000);
});
