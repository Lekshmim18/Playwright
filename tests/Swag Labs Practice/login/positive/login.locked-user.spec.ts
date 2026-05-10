import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';

test('Locked out User Login', async ({ page }) => {
  const loginpage = new LoginPage(page);

  await loginpage.navigate();
  await loginpage.login('locked_out_user', 'secret_sauce');
  await loginpage.loginpageerrormessage();
});
