
    //hometask 12.1

import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('wronguser');
  await page.getByLabel('Password').fill('wrongpass');
  await page.locator('.radius').click();


  const errorMessage = page.locator('#flash');
  await expect(errorMessage).toContainText('Your username is invalid!');


  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.locator('.radius').click();


  const successMessage = page.locator('#flash');
  await expect(successMessage).toContainText('You logged into a secure area!');


  await page.getByRole('link', { name: 'Logout' }).click();


  await expect(page).toHaveURL(/\/login/);
  await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
});


    //hometask 12.2

test('test2', async ({ page }) => {
  
    await page.goto('https://demo.guru99.com/test/radio.html');

    const checkbox1 = page.locator('input[value="checkbox1"]');
    const checkbox2 = page.locator('input[value="checkbox2"]');
    const checkbox3 = page.locator('input[value="checkbox3"]');

    await checkbox1.click();
    await checkbox2.click();
    await checkbox3.click();
 
    await checkbox1.check();
    await checkbox2.check();
    await checkbox3.check();


    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).toBeChecked();
    await expect(checkbox3).toBeChecked();

  
    await checkbox1.uncheck();
    await checkbox2.uncheck();
    await checkbox3.uncheck();

 
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).not.toBeChecked();
    await expect(checkbox3).not.toBeChecked();
});

    
    //hometask 12.3

test('test3', async ({ page }) => {
  
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');

    const iframe = page.frameLocator('#iframeResult');
    const select = iframe.locator('#cars');

    await select.selectOption('Saab');

    await expect(select).toHaveValue('saab');
    await iframe.getByRole('button', { name: 'Submit' }).click();

    const result = iframe.locator('body');
    await expect(result).toContainText('The server has processed your input and returned this answer.');
    });



    //hometask 12.4

test('test4', async ({ page }) => {
  
    await page.goto('http://formy-project.herokuapp.com/form');

    await page.getByLabel('First name').fill('Sam');
    await page.getByLabel('Last name').fill('Robertson');
    await page.getByLabel('Job title').fill('Test Automation Engineer');

    await page.locator('input[value="radio-button-2"]').click();

    await page.locator('input[value="checkbox-1"]').click();

    await page.locator('#select-menu').selectOption('5-9');

    await page.getByPlaceholder('mm/dd/yyyy').fill('14/12/2024');

    await page.getByText('Submit').click();
    await expect(page.getByRole('alert')).toHaveText('The form was successfully submitted!');

});


    //hometask 12.5

test('test5', async ({ page }) => {
  
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
 
    await page.locator('[alt="Phones & PDAs"]').click();
    await expect(page.locator('h1')).toHaveText('Phones & PDAs');

  
    const minPriceInput = page.getByPlaceholder('Minimum Price').first();
    const maxPriceInput = page.getByPlaceholder('Maximum Price').first();
    await minPriceInput.fill('135');
    await maxPriceInput.fill('165');
    
    await page.locator('#entry_212409', {hasText:"Showing 1 to 8 of 8 (1 Pages)" });

    const product = page.locator('a', {hasText:"HTC Touch HD"});
    await product.click();
    
    //await expect (page.locator('h3[data-update="price"]')).toHaveText('$146.00'); не працює
   
});

