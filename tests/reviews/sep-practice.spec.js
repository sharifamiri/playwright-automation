import { test } from "@playwright/test";

test("SEP Practice @sep", async ({ page }) => {

    const CREDENTIALS = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({Authorization: `Basic ${CREDENTIALS}`});

    await page.goto(process.env.SEP_QA_URL);

    await page.waitForTimeout(3000);

    //Start application step:

    let firstNameInputBox = page.locator("//input[@formcontrolname='firstName']");

    await firstNameInputBox.fill("John");

    let lastNameInputBox = page.locator("//input[@formcontrolname='lastName']");

    await lastNameInputBox.fill("Doe");

    let emailInputBox = page.locator("//input[@formcontrolname='email']");

    await emailInputBox.fill("john.doe@example.com");

    let phoneNumberInputBox = page.locator("//input[@formcontrolname='phoneNumber']");

    await phoneNumberInputBox.fill("123456789");
    
    let referralInputBox = page.locator("//mat-label[text()='How did you hear about us?']");

    await referralInputBox.click();

    await page.click("//span[text()='Email']");

    let nextButton = page.locator("//button[text()=' Next']");

    await nextButton.click();


    //Payment plan setup:

    let upfrontPaymentInputBox = page.locator("#mat-expansion-panel-header-0");
    await upfrontPaymentInputBox.click();

    let nextButton2 = page.locator("//button[text()='Next']");
    await nextButton2.click();


    //Review and Submit:

    let paymentFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");

    let cardNmberInputBox = paymentFrame.locator("//input[@id='Field-numberInput']");

    await cardNmberInputBox.fill("4242424242424242");

    let cardExpiryInputBox = paymentFrame.locator("//input[@id='Field-expiryInput']");
    await cardExpiryInputBox.fill("12/26");

    let cardCvvInputBox = paymentFrame.locator("//input[@id='Field-cvcInput']");
    await cardCvvInputBox.fill("123");

    let zipCodeInputBox = paymentFrame.locator("//input[@id='Field-postalCodeInput']");
    await zipCodeInputBox.fill("12345");

    let termsAndConditionsCheckbox = page.locator("//input[@id='defaultCheck2']");
    await termsAndConditionsCheckbox.check();

    let submitButton = page.locator("//button[.//span[text()='Pay']]");
    await submitButton.click();

    //put 2 sec wait
     await page.waitForTimeout(3000);



});
