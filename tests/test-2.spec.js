import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://blazedemo.com/');
  await page.locator('select[name="fromPort"]').selectOption('Philadelphia');
  await page.locator('select[name="toPort"]').selectOption('Rome');
  await page.getByRole('button', { name: 'Find Flights' }).click();
  await page.getByRole('row', { name: 'Choose This Flight 43 Virgin' }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Sinny');
  await page.getByRole('textbox', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address' }).fill('123,bbsr');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('bbsr');
  await page.getByRole('textbox', { name: 'State' }).click();
  await page.getByRole('textbox', { name: 'State' }).fill('odisha');
  await page.getByRole('textbox', { name: 'Zip Code' }).click();
  await page.getByRole('textbox', { name: 'Zip Code' }).fill('751010');
  await page.locator('#cardType').selectOption('amex');
  await page.getByRole('textbox', { name: 'Credit Card Number' }).click();
  await page.getByRole('textbox', { name: 'Credit Card Number' }).fill('567890');
  await page.getByRole('textbox', { name: 'Month' }).click();
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Purchase Flight' }).click();
});