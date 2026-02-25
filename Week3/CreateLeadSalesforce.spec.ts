import test from '@playwright/test';

test.only("Create Lead in Salesforce",async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    page.waitForTimeout(6000)
 //   await page.getByRole("button",{name:'App Launcher'}).waitFor()

    await page.getByRole("button",{name:'App Launcher'}).click()
    await page.getByRole("button",{name:"View All Applications"}).waitFor()
   // await page.locator("//lightning-button//button[text()='View All']").click()
    await page.getByRole("button",{name:"View All Applications"}).click()
    await page.waitForTimeout(3000)
    await page.locator("//p[text()='Sales']").click()
    await page.waitForTimeout(3000)
    await page.getByRole("link",{name:'Leads'}).click()
   // await page.getByTitle('Leads').click()
    await page.waitForTimeout(2000)
    await page.locator("//div[@title='New']").click()

    await page.locator("//button[@name='salutation']//span[text()='--None--']").click()
    await page.locator("//lightning-base-combobox-item//span[@title='Mrs.']").click()
    await page.getByPlaceholder("Last Name").fill("Japamony")
    await page.locator("//input[@name='Company']").fill("AAA")
    await page.locator("//button[@name='SaveEdit']").click()
    await page.waitForTimeout(2000)
    let leadName = await page.locator("//lightning-formatted-name[@slot='primaryField']").textContent()
    if(leadName?.split(" ")[1]=="Japamony")
        console.log(leadName, "created successfully")

})



