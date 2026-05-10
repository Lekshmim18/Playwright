import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/swaglabs-practice-old/LoginPage';
import { LogoutPage } from '../../../pages/swaglabs-practice-old/LogoutPage';

test('Verify Logout', async ({ page }) => {
  const loginpage = new LoginPage(page);
  const logoutpage = new LogoutPage(page);

  await loginpage.navigate();
  await loginpage.login('standard_user', 'secret_sauce');
  await logoutpage.logout();
});