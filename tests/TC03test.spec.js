import  {test,expect} from '@playwright/test';
/*

Before each
After each
before all
After all

*/

test.beforeEach ('Description for Before Each Test',async()=>{
    console.log('I am in before each');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

test.afterEach ('Description for After Each Test',async()=>{
    console.log('I am in After each');
});

test.beforeAll ('Description for Before All',async()=>{
    console.log('I am in before each');
});

test.afterAll ('Description for after All',async()=>{
    console.log('I am in before each');
    
});

test ('Login in to the Application ',async({page}) =>{
    await page.waitForTimeout(4000)
    await page.locator("input[@placeholder='Username']").fill("Admin");
    await page.locator ("input[placeholder='Password']").fill("admin123");
    await page.locator (button[type='submit']).click;
    await page.waitForTimeout(1000);
})
