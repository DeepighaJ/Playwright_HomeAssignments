import test,{expect} from '@playwright/test';

test("Edit Individual",async({page})=>{
    
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(3000)

    await page.getByTitle('App Launcher').click()
    await page.waitForTimeout(4000)
    await page.getByRole('button',{name:'View All Applications'}).click()
   //await page.getByText("View All").click()
    await page.waitForTimeout(2000)
    await page.getByPlaceholder("Search apps or items...").fill("Individuals")
    await page.locator("//p/mark[text()='Individuals']").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[@title='Individuals']//span[text()='Individuals']").click()
    await page.getByPlaceholder("Search this list...").fill("Japamony")

    await page.locator("(//td[@role='gridcell']//button[@part='button button-icon'])").nth(1).click()

    await page.locator("//a[@title='Japamony']").first().click() 

    await page.getByRole("button",{name:'Edit'}).click()
    
    await page.getByRole("button",{name: 'Salutation'}).click()

    await page.locator("//a[@title='Mrs.']").click()

    await page.getByRole("textbox",{name: 'First Name'}).fill("Deepigha")

    await page.locator("//span[text()='Save']").click()

    expect.soft(await page.locator("//span[@class='uiOutputText']").first().textContent()).toEqual("Mrs. Deepigha Japamony")


})