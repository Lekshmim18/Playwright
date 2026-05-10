import { test, expect } from "@playwright/test";

test('TC 01 : Verify Homepage loads successfully', async ({page}) =>    
{

await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')

//title is visible
await expect(page).toHaveTitle('Your Store');

//search bar is visible
await page.locator('input[name="Search"]').isVisible();

//logo is visible 
await page.getByTitle('Poco Electro').isVisible();

//Navigation is visible
await page.getByText('Blog').first().isVisible();
await page.getByText('Mega Menu').isVisible();

});

test('TC 02 : Verify navigation menu items', async ({page}) => 
    
{

await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home', {waitUntil: "domcontentloaded"});
await page.getByText(' Shop by Category').isVisible();
await page.getByRole("button", {name :' Shop by Category'}).click();
await page.getByLabel('Top categories ').isVisible();
await page.click('a.fas.fa-times');

await page.getByText('Mega Menu').hover();
page.reload();
await page.getByText('Blog').first().click();


});