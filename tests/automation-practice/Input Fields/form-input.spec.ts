import {test, expect} from '@playwright/test';

test ('Verify Basic input actions', async ({page})=> 

    {

 // input fields
        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.getByPlaceholder('Enter Name').fill('lekshmi')
        await page.getByPlaceholder('Enter EMail').fill('abc@gmail.com')
        await page.getByPlaceholder('Enter Phone').fill('9989765897')
        await page.getByLabel('Address').fill ('Knoxville, Tennessee')


    });