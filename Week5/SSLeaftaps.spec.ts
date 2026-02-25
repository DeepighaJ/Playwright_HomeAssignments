import test from '@playwright/test'

test("Storage State",async({page})=>{

await page.goto("http://leaftaps.com/crmsfa/control/main")
await page.locator("//input[@name='USERNAME']").first().fill("demosalesmanager")
await page.locator("//input[@name='PASSWORD']").fill("crmsfa")
await page.getByRole("button",{name:'Login'}).click()

//generate json for storage state
await page.context().storageState({path:"helper/LeafTaps_SS.json"})

})
