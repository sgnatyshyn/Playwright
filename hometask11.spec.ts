
//hometask1.1

   import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {

  await page.goto('https://example.com/');


   //await expect(page).toHaveTitle('Example Domain'); //2-nd way
  const title = await page.title();
  expect(title).toBe('Example Domain');


  expect(page.url()).toContain('example.com');


  const text = await page.locator('body').textContent();
  expect(text).toMatch(/This domain is for use in illustrative examples/);

  
  await expect(page.locator('h1')).toHaveText('Example Domain');
});



//hometask11.2

test('test2', async({ page }) => {
    await page.goto('https://playwright.dev/');


    const url = page.url();
  expect(url.startsWith('https://playwright.dev')).toBe(true);

  
  const links = page.locator('a', { hasText: 'Get started' });
  await expect(links).toHaveCount(1);
});

//hometask11.3

test('test3', async({ page}) => {
    await page.goto('https://www.google.com');

    const searchField = page.getByTitle('Пошук');
    await searchField.fill('Playwright');
    
    const button = page.getByLabel('Пошук Google').first();
    await button.click();
    
    const result = page.locator('h3'); 
    await expect(result.first()).toContainText(/Playwright/i);
    
});
    

//hometask11.4

test('test4', async ({ page }) => {
  
  await page.goto('https://playwright.dev/');

  const title = await page.title();
  expect(title).toMatch(/Playwright/);

  const getStartedLink = page.getByRole('link', { name: 'Get started' });
  await getStartedLink.click();

  await expect(page).toHaveURL(/\/docs/);
});
