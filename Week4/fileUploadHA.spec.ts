import test, { expect } from '@playwright/test'


test("Handling  File upload without Clicking Upload button on the page ",async({page})=>{

    page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("Data/testdata.docx")

})
test("Handling Image upload inside the red square are ",async({page})=>{

    page.goto("https://the-internet.herokuapp.com/upload")

    //Event Listener

    //create a promise
    const fileUpload = page.waitForEvent('filechooser')

    //click on the red area for upload
    await page.locator("#drag-drop-upload").click()

    const filechooser = await fileUpload

    await filechooser.setFiles('Data/testdata.docx')

    await page.waitForTimeout(2000)

})
test("Handling  File  Download",async({page})=>{

    page.goto("https://the-internet.herokuapp.com/download")

    //Event Listener

    //Create a promise

    const downloadFile = page.waitForEvent('download')

    //click on link to download
    await page.locator("//a[text()='IMG_6859.JPG.jpeg']").click()

    const download = await downloadFile //await downloadd

    await download.saveAs('D:/Playwright Workspace/playwright-testleaf/Data/'+download.suggestedFilename())

    await page.waitForTimeout(2000)

})
