import test, { expect } from '@playwright/test';

test("Handle Alert thats inside a Frame",async({page})=>{

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    let text = "Hi"
    //Event listener
     page.on("dialog",alert=>{
        const type = alert.type()

        const defVal= alert.defaultValue();

        const message = alert.message();

        if(type==='alert')
        {
            alert.accept()
        }
        else if(type==='confirm')
        {
            alert.accept();

        }
        else if (type==='prompt')
        {
            alert.accept(text)
        }


    })

    let expectedText='You pressed OK!'

    await page.frameLocator('#iframeResult').locator("//button[text()='Try it']").click(); //clicking on Try it button

    let actualText = await page.frameLocator("#iframeResult").locator("//p[@id='demo']").textContent(); //retrieving text 
    
    //assert the retrieved text
    expect.soft(actualText).toEqual(expectedText);

})