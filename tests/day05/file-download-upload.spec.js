import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test("File downloads", async ({ page }) => {

    //create event listener for download event. we don't need 'await' here
    let promisedDownloadEvent = page.waitForEvent("download");

    await page.goto("https://practice.cydeo.com/download");

    page.click("text='Insurance.jpg'"); //triggers download event

    let download = await promisedDownloadEvent;

    let downloadPath = path.join(__dirname, "./downloads", download.suggestedFilename());

    await download.saveAs(downloadPath);

    expect(fs.existsSync(downloadPath)).toBeTruthy();

});

test("File uploads", async ({ page }) => {

    await page.goto("https://practice.cydeo.com/upload");

    let filePath = path.join(__dirname, "./uploads", "TestUpload.txt");

    await page.waitForTimeout(2000);

    await page.setInputFiles("//input[@id='file-upload']", filePath);
    await page.waitForTimeout(2000);

    await page.click("//input[@id='file-submit']");

    await page.waitForTimeout(2000);

    await expect(page.getByText("File Uploaded!")).toBeVisible();
});
