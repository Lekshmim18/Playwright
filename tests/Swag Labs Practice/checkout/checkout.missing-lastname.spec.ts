import{ test, expect} from  "@playwright/test";

test ('Verify Last name missing ', async ({page})=>

  {

    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name : "Login"}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    // did a sort low to high
    await page.locator ('[data-test="product-sort-container"]').selectOption({ value : 'lohi'});

    // select first product 
    const firstitem = await page.locator('[data-test="inventory-item-name"]').first().innerText();
    console.log ( ' The first product is ', firstitem )
    await page.getByRole('button', {name : 'Add to Cart'}).first().click();


    //Clicking on add to cart 
    await page.locator ('[data-test="shopping-cart-link"]').click();

    await expect(page).toHaveURL(  'https://www.saucedemo.com/cart.html', {timeout : 3000});
    await page.getByRole('button', {name : 'Checkout'}).click();
    await expect(page).toHaveURL(  'https://www.saucedemo.com/checkout-step-one.html', {timeout : 3000});

    //Filling the page and click on continue button 
      await page.getByPlaceholder('First Name').fill('leks')
      await page.getByPlaceholder('Last Name').fill('')
      await page.getByPlaceholder('Zip/Postal Code').fill('34189')
      await page.locator('[data-test="continue"]').click()

     const errormessage = await page.locator('[data-test="error"]').allInnerTexts();
     console.log ( ' The error message is ', errormessage )

  });