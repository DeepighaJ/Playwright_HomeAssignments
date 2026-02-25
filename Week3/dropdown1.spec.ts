import test from '@playwright/test';

test("Dropdown selection",async({page})=>{

    await page.goto("https://leafground.com/select.xhtml")

    let count = await page.locator(".ui-selectonemenu").count()
    await page.selectOption(".ui-selectonemenu",{label:"Puppeteer"})
    
    await page.getByPlaceholder("Choose Course").pressSequentially("Pla")   //AutoSuggestive dropdown
    await page.getByRole("option",{name:'Playwright'}).nth(1).click()

    await page.waitForTimeout(2000)
   
    await page.locator("//label[text()='Select Country']").click()
    await page.locator("//li[text()='India']").click()

    await page.locator("//label[text()='Select Language']").click()
    await page.locator("//li[text()='Tamil']").click()

    await page.locator("//label[text()='Select City']").click()
    await page.locator("//li[text()='Chennai']").click()
     
    await page.locator("//label[text()='Select Values']").click()
    await page.locator("//li[text()='ஒன்று']").click()

})