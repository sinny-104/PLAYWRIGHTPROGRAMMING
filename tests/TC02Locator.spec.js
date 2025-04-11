import  {test,expect} from '@playwright/test';

var baseURL = "https://www.saucedemo.com/";
test.only('saucelab login',async({page}) =>{
    await page.goto(baseURL);
    await page.getByPlaceholder("User name").fill("Standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator('[type="submit"]').click();
    await page.waitForTimeout(1000);
})
