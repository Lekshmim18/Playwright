import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';
import { LogoutPage } from '../../../../pages/swaglabs-practice-old/LogoutPage';

test ('Invalid to valid with a refresh in browser', async ({page}) =>
    {

        const loginpage = new LoginPage(page);
        const logoutpage = new LogoutPage(page);

        await loginpage.navigate();
        await loginpage.login('invalid', 'invalid');
        await loginpage.loginpageerrormessage();
        await page.reload();
        await loginpage.login('standard_user', 'secret_sauce');
        await logoutpage.logout();
        page.close();

    });