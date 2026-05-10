import {test, expect} from '@playwright/test';

test ('TC_01 : Verify only one radio button is selected', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.locator('input[id="male"]').check();

        //Validation 
        await expect(page.locator('input[id="male"]')).toBeChecked();
        page.close();

    });


test ('TC_02 : Verify only one radio button can be selected at a time', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.locator('input[id="male"]').check();
        await expect(page.locator('input[id="female"]')).not.toBeChecked();
        await page.locator('input[id="female"]').check();
        await expect(page.locator('input[id="male"]')).not.toBeChecked();

        page.close();

    });

test ('TC_03 : TC_03: Verify default selected value', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await expect(page.locator('input[id="female"]')).not.toBeChecked();
        await expect(page.locator('input[id="male"]')).not.toBeChecked();

        page.close();

    });

test ('TC_04 : Switching between the check boxes', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.locator('input[value="female"]').check();
        await page.locator('input[id="male"]').check();
        await page.locator('input[id="female"]').check();

        //validation 
        await expect(page.locator('input[value="female"]')).toBeChecked();

    });
