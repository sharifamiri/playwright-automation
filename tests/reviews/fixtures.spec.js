import { expect, firefox, test } from "@playwright/test";

test("Context Fixture", async ({ context }) => {
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

test("Browser Fixture", async ({ browser }) => {
  let context1 = await browser.newContext();
  let context2 = await browser.newContext();

  let page1 = await context1.newPage();
  let page2 = await context1.newPage();

  let page3 = await context2.newPage();
  let page4 = await context2.newPage();

  // pause for 3 seconds.
  await page1.waitForTimeout(3000);

  await page1.bringToFront();
  await page1.goto("https://www.linkedin.com/");
  await page1.waitForTimeout(3000);

  await page2.bringToFront();
  await page2.goto("https://www.facebook.com/");
  await page2.waitForTimeout(3000);

  await page3.bringToFront();
  await page3.goto("https://www.github.com/");
  await page3.waitForTimeout(3000);

  await page4.bringToFront();
  await page4.goto("https://www.youtube.com/");
  await page4.waitForTimeout(3000);
});

//if you remove the 'page', then it doesn't rely on global config.js
test("Custom context and browser configuration", async () => {
  let browser = await firefox.launch();

  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto("https://www.linkedin.com/");
  await page.waitForTimeout(3000);
});


test("", async ({ baseURL, request }) => {

    //send a post request to the endpoint /api/user1
    let response = await request.post('/api/user1', {
        json: { name: "John Doe", email: "john.doe@example.com" }
    });

    //assert that the response status is 201 (created)
    await expect(response.status()).toBe(201);

    let user = response.json().json();

    //assert that the user name is "John Doe" and email is "john.doe@example.com"
    await expect(user.name).toBe("John Doe");
    await expect(user.email).toBe("john.doe@example.com");

    expect(user).toHaveProperty("name", "John Doe");
    expect(user).toHaveProperty("email", "john.doe@example.com");
});

test("Send GET request and verify response", async ({request}) => {
  const baseURL = "http://example.com";
  const response = await request.get(`${baseURL}/exampleEndPoint`);

  // Verify status code is 200
  expect(response.status()).toBe(200);

  // Verify content-type is application/json
  expect(response.headers()["content-type"]).toContain("application/json");

  // Parse JSON body
  const body = await response.json();

  // Verify total json object is 1
  expect(Object.keys(body).length).toBe(1);

  // Assuming the structure is like: { user: { firstName: 'Josh', lastName: 'Jeremy' } }
  const user = Object.values(body)[0];

  // Verify firstName is Josh and lastName is Jeremy
  expect(user.firstName).toBe("Josh");
  expect(user.lastName).toBe("Jeremy");
});

