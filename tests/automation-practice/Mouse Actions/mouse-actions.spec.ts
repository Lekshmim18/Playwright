import {test, expect } from '@playwright/test';

test ('Verify New tab pop up', async ({page, context}) => 
    
     {

        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.getByRole('button', {name : 'Point Me'}).hover();
        await page.locator('.dropdown-content a', { hasText: 'Laptops' }).click();
    
    });

test ('Verify Double Click ', async ({page}) => 
    
     {

        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.getByRole('button', {name : 'Copy Text'}).dblclick({delay : 100});
        await expect(page.locator('input[id="field2"]')).toHaveValue('Hello World!');

    });

test ('Verify Drag and drop ', async ({page}) => 
    
     {

        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.dragAndDrop('#draggable', '#droppable');

    });