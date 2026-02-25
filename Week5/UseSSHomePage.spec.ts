import test from '@playwright/test'

test.use({storageState:"helper/LeafTaps_SS.json"})

test("Use Storage state TestCase 1",async({page})=>{

    //directly hitting homepage without login
    await page.goto("http://leaftaps.com/crmsfa/control/myHomeMain")

    await page.getByRole("link",{name:'Leads'}).click()
})

test("Use Storage state TestCase 2",async({page})=>{

    //directly hitting homepage without login
    await page.goto("http://leaftaps.com/crmsfa/control/myHomeMain")

    await page.getByRole("link",{name:'Contacts'}).click()
})

