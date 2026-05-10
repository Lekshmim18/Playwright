import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/swaglabs/LoginPage';
import { LogoutPage } from '../../pages/swaglabs/LogoutPage';
import { ProductPage } from '../../pages/swaglabs/ProductPage';

test('Full Flow', async ({ page }) =>
{
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const logoutPage = new LogoutPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login('standard_user','secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
  //Product Selection
  await productPage.selectItems('Sauce Labs Backpack','Sauce Labs Bike Light');
  console.log('Products added to cart successfully');
  await productPage.clickCartButton();

  //logout
  //await logoutPage.logout();

});