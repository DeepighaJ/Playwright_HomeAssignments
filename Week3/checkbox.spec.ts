import test ,{expect} from '@playwright/test';

test("Handle a Checkbox",async({page})=>
{
    await page.goto("https://leafground.com/checkbox.xhtml")

    await page.locator("//span[@class='ui-chkbox-label' and text()='Basic']").click()

    await page.locator("//span[@class='ui-chkbox-label' and text()='Ajax']").click()

    await page.locator("div.ui-toggleswitch-slider").click()

    //validate its disabled
    expect( page.locator("div.ui-selectbooleancheckbox.ui-chkbox.ui-widget input").last()).toBeDisabled()

    await page.waitForTimeout(2000)

    await page.locator("//table[@class='ui-selectmanycheckbox ui-widget'] //div[2]").first().click()
        //await page.locator("//table//input[@value='java']").click() -- why input field didn't work ?
    await page.locator("//table[@class='ui-selectmanycheckbox ui-widget'] //div[2]").last().click()

    await page.locator("//ul[@data-label='Cities']").click()

    //await page.locator("//ul[@role='group']/li/div/div[2]").nth(2).click() --worked
   
    const list =  page.locator("//ul[@role='group']/li")
    const count = await list.count();
    console.log(count)

    for(let i=0;i<count;i++)
    {
        let optiontext = await list.nth(i).innerText()
        if(optiontext === "Berlin")
        {
            await list.locator("div div:nth-child(2)").nth(i).click();
            
        }

    }
    await page.locator("//div[contains(@id,'TriState')]/div[2]").click()
})