import {test, expect} from '@playwright/test';

test ('Verify dropdown selection behavior - dd/mm/yyyy', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.locator('input[id="datepicker"]').fill('20/04/2026');
        //validation 
        await expect(page.locator('input[id="datepicker"]')).toHaveValue('20/04/2026')


    });

test ('Verify dropdown selection behavior - mm/dd/yyyy', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.locator('#txtDate').click();
        await page.locator('#txtDate').fill('02/02/2026')
        //validation 
       // await expect(page.getByLabel('Date Picker 2  (dd/mm/yyyy) :').   ('04/12/2026')

    });

test ('Verify dropdown selection behavior - start and end date', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.getByPlaceholder('Start Date').click();
        await page.getByPlaceholder('Start Date').fill ('02-04-2026')
        await page.getByPlaceholder('End Date').fill ('05-05-2027')
        //validation 
        await expect(page.getByPlaceholder('Start Date')).toHaveValue('02-04-2026')
        await expect(page.getByPlaceholder('End Date')).toHaveValue('05-05-2026')


    });