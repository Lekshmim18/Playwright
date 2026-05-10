import {test, expect} from '@playwright/test';

        test ('Verify dropdown selection behavior - Sorted list', async ({page})=> 

    {

        await page.goto( 'https://testautomationpractice.blogspot.com/');
        await page.getByLabel('Sorted List').selectOption(['Giraffe', 'Lion', 'Cat']);
        const selected = await page.locator('#animals option:checked').allTextContents();
    });