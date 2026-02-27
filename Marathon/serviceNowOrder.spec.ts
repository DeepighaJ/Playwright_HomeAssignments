import test,{expect} from '@playwright/test'

test("Service Now Order placing",async({page})=>{

        await page.goto("https://dev363522.service-now.com/")
        await page.getByRole("textbox",{name:'User name'}).fill("admin")
        await page.getByRole("textbox",{name:'Password'}).fill("mf=3hp^0UJMZ")
        await page.getByRole("button",{name:'Log in'}).click()

        await page.waitForTimeout(3000)

        await page.getByRole("menuitem",{name:'All'}).click()
        await page.locator("a.nested-item.item-label.keyboard-navigatable").nth(2).click()

        await page.frame('gsft_main')?.getByRole("link",{name:'Mobiles'}).first().click()

        await page.frame('gsft_main')?.getByRole("link",{name:'Apple iPhone 13 pro'}).click()

        await page.frame('gsft_main')?.locator("label.radio-label").filter({hasText: 'Yes'}).click()
        await page.frame('gsft_main')?.getByRole("textbox",{name:'What was the original phone number?'}).fill("9856930235")
        await page.frame('gsft_main')?.getByRole("combobox",{name:'Mandatory - must be'}).selectOption({value:'500MB'})
        await page.frame('gsft_main')?.locator("label.radio-label").filter({hasText: 'Sierra Blue'}).click()
        await page.frame('gsft_main')?.locator("label.radio-label").filter({hasText: '512 GB'}).click()

        await page.frame('gsft_main')?.getByRole("button",{name:'Order Now'}).click()

        const text = await page.frame('gsft_main')?.locator("//div[@class='notification notification-success']/span[2]").textContent()        
        expect(text).toEqual("Thank you, your request has been submitted")
        
        await page.screenshot({
                path: "D:/Playwright Workspace/playwright-testleaf/Data/SNOrder.png",
                fullPage: true
        });

})
