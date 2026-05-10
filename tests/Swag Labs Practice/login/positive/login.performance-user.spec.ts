import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';

test ('Performance_glitch_user Login ' , async ({ page }) =>
{

        const loginpage = new LoginPage(page);
        
        await loginpage.navigate();
        await loginpage.login ('performance_glitch_user','secret_sauce')
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        page.close();

});
