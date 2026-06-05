import {test, expect} from '@playwright/test';

test ('TC_01 : Select single checkbox', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.locator('input[id="sunday"]').check();


        //validation 
        await expect(page.locator('input[id="sunday"]')).toBeChecked();

    });

test ('TC_02 : Select multiple checkboxs', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.locator('input[id="monday"]').check();
        await page.locator('input[id="tuesday"]').check();
        await page.locator('input[id="wednesday"]').check();

        //validation 
        await expect(page.locator('input[id="monday"]')).toBeChecked();

    });

test ('TC_03 : Check and uncheck checkboxs', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.locator('input[id="tuesday"]').check();
        await expect(page.locator('input[id="tuesday"]')).toBeChecked();
        await page.locator('input[id="tuesday"]').uncheck();
        await expect(page.locator('input[id="tuesday"]')).not.toBeChecked();


    });

test ('TC_04 : Verify independent checkbox behavior', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.locator('input[id="thursday"]').check();
        await expect(page.locator('input[id="thursday"]')).toBeChecked();
        await page.locator('input[id="friday"]').check();
        await expect(page.locator('input[id="friday"]')).toBeChecked();


    });

test ('TC_05 :Verify multiple select + partial unselect of checkboxes', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.getByLabel('Sunday').check();
        await page.locator('input[id="monday"]').check();
        await page.locator('input[value="tuesday"]').check();

        // Uncheck Tuesday
        await page.locator('input[value="monday"]').uncheck();

        //validation 
        await expect(page.getByLabel('Sunday')).toBeChecked();
        await expect(page.locator('input[value="tuesday"]')).toBeChecked();
        await expect(page.locator('input[value="monday"]')).not.toBeChecked();
    });

test ('TC_06 : Verify no default checkbox selection', async ({page})=> 

    {

        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        const count = await page.locator('input[type="checkbox"]:checked').count();
        await expect(count).toBe(0);
        console.log('the count is :', count)

    });

test ('TC_07 : Re-select already selected checkbox', async ({page})=> 

    {
        await page.goto ( 'https://testautomationpractice.blogspot.com/');
        await page.locator('input[id="thursday"]').check();
        await expect(page.locator('input[id="thursday"]')).toBeChecked();
        await page.locator('input[id="thursday"]').uncheck();
        await expect(page.locator('input[id="thursday"]')).not.toBeChecked();
    });