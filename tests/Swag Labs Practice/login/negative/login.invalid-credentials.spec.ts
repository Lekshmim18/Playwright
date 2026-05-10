import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';

test ('Both username and password Invalid test', async ({page}) =>
{
    const loginpage = new LoginPage(page);
    await loginpage.navigate();
    await loginpage.login('invalid','invalid');
    await loginpage.loginpageerrormessage();
    page.close();

});