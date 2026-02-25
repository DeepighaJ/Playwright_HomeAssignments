import test, { expect } from '@playwright/test'


test("Handling Alerts inside multiple Frames",async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml")

    const NoofFrames= page.frames()  //returns array of all frames including main page

    console.log("Number of frames in the page: ", NoofFrames.length); //printing no. of frames

    const frame1 = NoofFrames[1]   //first frame, since index 0 is main page

     await frame1.locator("#Click").click()
     let text = await frame1.locator("#Click").textContent()
     expect.soft(text).toEqual("Hurray! You Clicked Me.")

    await page.frame({name:'frame2'})?.getByRole("button",{name:'Click Me'}).click()

   expect.soft(await page.frame({name:'frame2'})?.locator("//button[@id='Click']").first().textContent()).toEqual("Hurray! You Clicked Me.")




})