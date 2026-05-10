import {test, expect} from '@playwright/test';

test ('Verify persistance of the forms aft refresh', async ({page})=> 

    {

 // input fields
        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.getByPlaceholder('Enter Name').fill('lekshmi')
        await page.getByPlaceholder('Enter EMail').fill('abc@gmail.com')
        await page.getByPlaceholder('Enter Phone').fill('9989765897')
        await page.getByLabel('Address').fill ('Knoxville, Tennessee')
        await page.reload({timeout : 5000});
        await expect(page.getByPlaceholder('Enter Name')).toBeEmpty();
        await expect(page.getByPlaceholder('Enter EMail')).toBeEmpty();
        await expect(page.getByPlaceholder('Enter Phone')).toBeEmpty();
        await expect(page.getByLabel('Address')).toBeEmpty();
//Input the values again
        await page.getByPlaceholder('Enter Name').fill('lekshmi')
        await page.getByPlaceholder('Enter EMail').fill('abc@gmail.com')
        await page.getByPlaceholder('Enter Phone').fill('9989765897')
        await page.getByLabel('Address').fill ('Knoxville, Tennessee')

//validations 
        await expect(page.getByPlaceholder('Enter Name')).toHaveValue('lekshmi');
        await expect(page.getByPlaceholder('Enter EMail')).toHaveValue('abc@gmail.com');
        await expect(page.getByPlaceholder('Enter Phone')).toHaveValue('9989765897');
        await expect(page.getByLabel('Address')).toHaveValue('Knoxville, Tennessee');

    });


test ('Verify input retains value after typing', async ({page})=> 

    {

 // input fields
        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.getByPlaceholder('Enter Name').fill('lekshmi')
        await page.getByPlaceholder('Enter EMail').fill('abc@gmail.com')
        await page.getByPlaceholder('Enter Phone').fill('9989765897')
        await page.getByLabel('Address').fill ('Knoxville, Tennessee')

//validations 
        await expect(page.getByPlaceholder('Enter Name')).toHaveValue('lekshmi');
        await expect(page.getByPlaceholder('Enter EMail')).toHaveValue('abc@gmail.com');
        await expect(page.getByPlaceholder('Enter Phone')).toHaveValue('9989765897');
        await expect(page.getByLabel('Address')).toHaveValue('Knoxville, Tennessee');

    });