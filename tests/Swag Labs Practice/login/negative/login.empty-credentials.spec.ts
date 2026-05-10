import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';

test('Invalid test - Empty username and password', async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.navigate();
  await loginpage.login('', '');
  await loginpage.loginpageerrormessage();
});