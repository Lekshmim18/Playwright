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
  
  // Wait for cart page to load
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html', {timeout: 5000});

  // Checkout from Cart Page
  await productPage.clickCheckoutButton();
  
  // Wait for checkout step one page
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html', {timeout: 5000});
  
  // Fill in checkout details
  await productPage.fillCheckoutDetails('John', 'Doe', '12345');
  await productPage.clickContinueButton();

  // Wait for order summary page
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html', {timeout: 5000});
  
  // Finish Order
  await productPage.clickFinishButton();
  
  // Wait for order confirmation page
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html', {timeout: 5000});
  
  // Capture order confirmation details
  const orderDetails = await productPage.getOrderConfirmationDetails();
  console.log('Order Successfully Placed:', orderDetails);

  // Logout
  await logoutPage.logout();
  await expect(page).toHaveURL('https://www.saucedemo.com/');

});