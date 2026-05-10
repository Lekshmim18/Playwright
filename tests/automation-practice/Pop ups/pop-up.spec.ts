import {test, expect } from '@playwright/test';

test ('Verify New tab pop up', async ({page, context}) => 
    
     {

        await page.goto('https://testautomationpractice.blogspot.com/')
        const [newPage] = await Promise.all( [context.waitForEvent('page'), page.click('text=New Tab')]);
        await newPage.waitForLoadState();
        console.log(await newPage.title());

});

test ('Verify pop up windows', async ({page, context}) => 
    
     {

        await page.goto('https://testautomationpractice.blogspot.com/')
        const [newPage] = await Promise.all( [context.waitForEvent('page'), page.click('text=Popup Windows')]);
        await newPage.waitForLoadState();
        console.log(await newPage.title());

});