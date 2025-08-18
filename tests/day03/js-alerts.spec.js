import { test } from "@playwright/test";

test.describe("Test Group", () => {
  //create beforeEach to navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });

  //create afterEach to wait for 2 seconds before each test
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Regular alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert text: ${alert.message()}`);
      alert.accept();
    });

    let clickFroJSAlert = page.locator("//button[@onclick='jsAlert()']");
    await clickFroJSAlert.click();
  });

  test("Confirmation alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert text: ${alert.message()}`);
    //   await page.waitForTimeout(2000);
      await alert.dismiss();
    });
    let clickForJSConfirmAlert = page.locator(
      "//button[@onclick='jsConfirm()']"
    );
    await clickForJSConfirmAlert.click();
  });

  test("Promt alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert text: ${alert.message()}`);
    //   await page.waitForTimeout(2000);
      await alert.accept("Cydeo");
    });
    
    let clickForJSPromptAlert = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJSPromptAlert.click();

  });
});
