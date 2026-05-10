import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';

test ('Invalid password test', async ({page}) =>
{

    const loginpage = new LoginPage(page);
    await loginpage.navigate();
    await loginpage.login('standard_user','');
    await loginpage.loginpageerrormessage();
    page.close();

});