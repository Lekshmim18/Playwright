import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';

test ('Invalid test - Empty username', async ({page}) =>
{

    const loginpage = new LoginPage(page);
    await loginpage.navigate();
    await loginpage.login('', 'secret_sauce');
    await loginpage.loginpageerrormessage();
    page.close();

});
