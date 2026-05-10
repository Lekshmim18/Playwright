import {test, expect} from '@playwright/test'

test ('Verify handling simple alert', async ({page}) =>

    {

await page.goto('https://testautomationpractice.blogspot.com/')
await page.getByRole('button', {name : 'Simple Alert'}).click();
page.on('dialog', async dialog => 
    {
  console.log(dialog.message());
  await dialog.accept(); // Click OK
});

    });


test ('Verify handling Confirmation alert - deny', async ({page}) =>

    {

await page.goto('https://testautomationpractice.blogspot.com/')
await page.getByRole('button', {name : 'Confirmation Alert'}).click();
page.on('dialog', async dialog => 
    {
  console.log(dialog.message());
  await dialog.dismiss(); // Click OK
});
page.close();
    });



test ('Verify handling Confirmation alert - accept', async ({page}) =>

    {

await page.goto('https://testautomationpractice.blogspot.com/')
await page.getByRole('button', {name : 'Confirmation Alert'}).click();

page.on('dialog', async dialog => 
{
  console.log(dialog.message());
  await dialog.accept(); // Click OK
});

    });


test ('Verify handling Prompt alert - accept', async ({page}) =>

    {

await page.goto('https://testautomationpractice.blogspot.com/')
await page.getByRole('button', {name : 'Confirmation Alert'}).click();

page.on('dialog', async dialog => 
    {
  await expect(dialog.message()).toContain('Press a button!');
  console.log(dialog.message());
  await dialog.accept(); // Click OK
});

page.close();

    });

test ('Verify handling Prompt alert - deny', async ({page}) =>

    {

await page.goto('https://testautomationpractice.blogspot.com/')
await page.getByRole('button', {name : 'Confirmation Alert'}).click();

page.on('dialog', async dialog => 
    {
  await expect(dialog.message()).toContain('Press a button!');
  console.log(dialog.message());
  await dialog.dismiss(); // Click OK
});

page.close();

    });