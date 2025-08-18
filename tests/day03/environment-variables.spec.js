import { test } from "@playwright/test";

test("@env-test Testing environment variables", async ({ page }) => {
    console.log(process.env.PRACTICE_USERNAME);
    console.log(process.env.PRACTICE_PASSWORD);

    console.log(`username: ${process.env.PRACTICE_USERNAME}`);
    console.log(`password: ${process.env.PRACTICE_PASSWORD}`);
});

test("Bypassing authentication by encoding the credentials base64 format", async ({
  page,
}) => {
  let encodedCredential = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredential}`,
  });
  await page.goto("https://practice.cydeo.com/basic_auth");
  await page.waitForTimeout(3000);
});
