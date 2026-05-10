import{ test, expect} from  "@playwright/test";
import {LoginPage} from '../../pages/LoginPage'

test ('Verify loading URL without Login', async ({page}) => 
    
    {

      await page.goto('https://www.saucedemo.com/inventory.html')      
      await page.locator('[data-test="error"]').isVisible();
      const errormessage = await page.locator('[data-test="error"]').allInnerTexts();
      console.log ('The error message is', errormessage)


    });