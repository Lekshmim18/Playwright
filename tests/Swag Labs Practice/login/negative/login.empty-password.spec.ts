import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';

test ('Invalid test - Empty password', async ({page}) =>
{
const loginpage = new LoginPage(page)
await loginpage.navigate ();
await loginpage.login('leks', '');
await loginpage.loginpageerrormessage();
page.close();
});