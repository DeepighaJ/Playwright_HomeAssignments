import test from '@playwright/test';

test("Handling Radio Button",async({page})=>{

    await page.goto("https://leafground.com/radio.xhtml")

    await page.locator("//table[contains(@id,'console1')]//span").first().click()

    await page.locator("//table[contains(@id,'console2')]//span").first().click()

    await page.locator("//div[contains(@id,'city2')]//span").first().click()

    await page.locator("//div[contains(@id,'age')]//span").first().click()

})