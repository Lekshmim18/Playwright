import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/swaglabs-practice-old/LoginPage';

test( "Invalid username test ", async({page}) =>
{
    const loginpage = new LoginPage(page);
    await loginpage.navigate();
    await loginpage.login('invalid','secret_sauce');
    await loginpage.loginpageerrormessage();

});