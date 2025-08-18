import { test } from "@playwright/test";

test("Bypassing authentication by embedding the credentials in the URL", async ({ page }) => {
    
    //for security reasons, it is not recommended to embed credentials in the URL
    await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
    await page.waitForTimeout(2000);
});

test("Bypassing authentication by encoding the credentials base64 format", async ({ page }) => {
    
    let encodedCredential = Buffer.from("admin:admin").toString("base64");
    await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredential}`});
    await page.goto("https://practice.cydeo.com/basic_auth");
    await page.waitForTimeout(3000);
});
