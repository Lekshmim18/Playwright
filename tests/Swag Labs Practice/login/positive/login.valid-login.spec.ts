import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';

test('login with valid credentials', async ({ page }) =>
  {

  const loginPage = new LoginPage(page);
  
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
});