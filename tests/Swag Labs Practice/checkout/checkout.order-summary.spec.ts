import{ test, expect} from  "@playwright/test";

test ('Verify Order Summary page ', async ({page})=>

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

    // select second product 
    const seconditem = await page.locator('[data-test="inventory-item-name"]').nth(1).innerText();
    console.log ( ' The first product is ', seconditem )
    await page.getByRole('button', {name : 'Add to Cart'}).nth(1).click();

    // select second product 
    const thirditem = await page.locator('[data-test="inventory-item-name"]').nth(2).innerText();
    console.log ( ' The first product is ', thirditem )
    await page.getByRole('button', {name : 'Add to Cart'}).nth(1).click();

    //Clicking on add to cart 
    await page.locator ('[data-test="shopping-cart-link"]').click();

    await expect(page).toHaveURL(  'https://www.saucedemo.com/cart.html', {timeout : 3000});
    await page.getByRole('button', {name : 'Checkout'}).click();
    await expect(page).toHaveURL(  'https://www.saucedemo.com/checkout-step-one.html', {timeout : 3000});

          //Filling the page and click on continue button 
      await page.getByPlaceholder('First Name').fill('leks')
      await page.getByPlaceholder('Last Name').fill('leks')
      await page.getByPlaceholder('Zip/Postal Code').fill('34189')
      await page.locator('[data-test="continue"]').click()

     //verifying the order summary [page]
        const pagetitle = await page.locator('[data-test="title"]').isVisible()
        console.log('the title is ', pagetitle)
        const allitemsincart =    await page.locator('[data-test="inventory-item-name"]').allInnerTexts();
        console.log('the Items in the cart is ', allitemsincart)
        const PaymentInformation = await page.locator('[data-test="payment-info-value"]').innerText();
        console.log('the PaymentI nformationin the cart is ', PaymentInformation)
        const shippinginformation = await page.locator('[data-test="shipping-info-value"]').allInnerTexts();
        console.log('the shipping information in the cart is ', PaymentInformation)
        const totalprice = await page.locator('[data-test="total-label"]').allInnerTexts();
        console.log('the total price of items in the cart is ', totalprice)
        const tax = await page.locator('[data-test="tax-label"]').allInnerTexts();
        console.log('the tax in the cart page is ', tax)






});