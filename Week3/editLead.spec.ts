import test from '@playwright/test'

test("Create Lead",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")

    await page.locator("input[value='Login']").click()

    await page.waitForTimeout(3000)

    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

    await page.getByRole("link",{name:'Leads'}).click()

    await page.getByRole("link",{name:'Create Lead'}).click()

    await page.locator("input#createLeadForm_companyName").fill("Test Leaf")

    await page.locator("input#createLeadForm_firstName").fill("Deepigha")

    await page.locator("input#createLeadForm_lastName").fill("Japamony")

    await page.getByRole("button",{name:'Create Lead'}).last().click()

    await page.getByRole("link",{name: 'Edit'}).click()

    await page.locator("input#updateLeadForm_companyName").fill("Test Leaf QA")

    await page.getByRole("button",{name:'Update'}).click()

    await page.waitForTimeout(1000)

})