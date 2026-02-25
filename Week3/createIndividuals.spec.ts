import test from '@playwright/test';

test("Create Individuals ",async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(3000)

    await page.getByTitle('App Launcher').click()
    await page.waitForTimeout(4000)
    await page.locator("//lightning-button//button[text()='View All']").click()
   //await page.getByText("View All").click()
    await page.waitForTimeout(2000)
    await page.getByPlaceholder("Search apps or items...").fill("Individuals")
    await page.locator("//p/mark[text()='Individuals']").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[@title='Individuals']/following-sibling::one-app-nav-bar-item-dropdown//lightning-primitive-icon").click()

    await page.locator("//div[@title='New']").click()
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Last Name").fill("Japamony")
    await page.locator("//button[@title='Save']/span").click()
await page.waitForTimeout(2000)
    let leadName = await page.locator("(//span[@class='uiOutputText'])[2]").textContent()
    if(leadName==="Japamony")
        console.log(leadName, "created successfully")
    else
        console.log(leadName)
})