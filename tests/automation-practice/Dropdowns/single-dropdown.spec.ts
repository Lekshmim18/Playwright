import {test, expect} from '@playwright/test';

test ('TC_01 : Verify dropdown selection behavior - Country', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.getByLabel('Country').selectOption('India')     
        //validation 
        await expect(page.locator('#country')).toContainText('India');


    });

test ('TC_02: Change selection - Country', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.getByLabel('Country').selectOption('India')  
        await page.getByLabel('Country').selectOption('Canada')   
        //validation 
        await expect(page.locator('#country')).toContainText('India');
        await expect(page.locator('#country')).toContainText('Canada');
    });

test ('TC_03: Verify default selection - Country', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await expect(page.getByLabel('Country')).toHaveValue('usa')
    });