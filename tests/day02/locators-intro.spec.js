//const {test} = require("@playwright/test");
import {test} from "@playwright/test";

test("Simple google test", async ({page}) => {

    await page.goto("https://www.google.com");

    //locator => best practice to use
    //let searchBox = page.locator("//textarea[@id='APjFqb']");
    let searchBox = page.locator("#APjFqb"); //css

    //await searchBox.type("Cydeo");
    await searchBox.fill("Cydeo");

    await searchBox.press("Enter");
    await page.waitForTimeout(3000);
});

/*
<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" 
autofocus="" title="Search" value="" aria-label="Search" placeholder="" 
aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" 
autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" 
maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" 
data-ved="0ahUKEwjHwpq4q--OAxWL7rsIHc0rHNIQ39UDCA8"></textarea>
*/

//textarea[@class='gLFyf']