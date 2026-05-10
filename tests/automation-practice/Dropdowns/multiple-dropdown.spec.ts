import {test, expect} from '@playwright/test';

test ('TC_01 : Select multiple colors - Colors', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.getByLabel('Color').selectOption(['blue' , 'green' , 'yellow']);
        //validation 
        await expect(page.locator('#colors')).toHaveValues(['blue' , 'green' , 'yellow'])

    });

test ('TC_02 : Unselect one color - Colors', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.getByLabel('Color').selectOption(['blue' , 'green' , 'yellow']);
        //validation 
        await expect(page.locator('#colors')).toHaveValues(['blue' , 'green' , 'yellow'])
        await page.getByLabel('Color').selectOption(['blue' , 'green']);
        await expect(page.locator('#colors')).toHaveValues(['blue' , 'green'])


    });

test ('TC_03 : Select all colors - Colors', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        const dropdown = await page.getByLabel('Color')
        const values = await dropdown.locator('option').evaluateAll(options => options.map(o => (o as HTMLOptionElement).value).filter(v => v));
        await dropdown.selectOption(values);
    });