import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';
import { LogoutPage } from '../../../../pages/swaglabs-practice-old/LogoutPage';

test ('Invalid test to valid test', async ({page}) =>
{

        const loginpage = new LoginPage(page);
        const logoutpage = new LogoutPage(page);

        await loginpage.navigate();
        await page.getByRole('button', { name: 'Login' }).click();
        await loginpage.loginpageerrormessage();
        await page.locator('button.error-button').click();
        await loginpage.login('standard_user','secret_sauce')
        await logoutpage.logout();
        page.close();

});