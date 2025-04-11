import { test, expect } from '@playwright/test';
var baseURL = "https://www.saucedemo.com/";

test('Validate the Title of the Page', async ({page}) =>{
  await page.goto(baseURL);
  /*await expect(page).toHaveTitle(/.*Labs/);*/
  await expect(page).toHaveTitle("Swag Labs");
})

test.skip('Validate the URL of the Page', async ({page}) =>{
  await page.goto(baseURL);
  /*await expect(page).toHaveTitle(/.*Labs/);*/
  await expect(page).toHaveURL(/.*saucedemo.com/);
})
