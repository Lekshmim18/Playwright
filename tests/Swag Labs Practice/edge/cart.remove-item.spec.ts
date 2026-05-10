import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/swaglabs-practice-old/LoginPage';
import { ItemsPage } from '../../../pages/swaglabs-practice-old/ItemsPage';
import { CartPage } from '../../../pages/swaglabs-practice-old/CartPage';

test ('Adding 2 items to the cart, removing one and adding another ', async ({page})=>

  {

 const loginpage = new LoginPage(page);
 const itemspage = new ItemsPage(page);
 const cartpage = new CartPage(page);


  await loginpage.navigate();
  await loginpage.login('standard_user','secret_sauce'); 

  //Choosing Items and adding
  await itemspage.firstitem();
  await itemspage.seconditem();
  await itemspage.additem1();
  await itemspage.additem2();
  await itemspage.itemsincart();
 
  //Validating and Clicking on cart
  await cartpage.validatingcart();
  await itemspage.clickcart();
  await cartpage.inventoryitemnames();


  //Now removing one item from the cart and validating total items
  await cartpage.removeitem();
  await cartpage.validatingcart();

  //Click on continue shopping button 
  await cartpage.clickcontinue();

  //Verify the cart value here 
  await cartpage.updatedcartvalue();

  //Click on another item 
  const newlyaddeditem = await page.locator('[data-test="inventory-item-name"]', { hasText: 'Sauce Labs Fleece Jacket' }).innerText();
  console.log('the newly added item is', newlyaddeditem);
  await page.getByRole('button', {name : "Add to cart"}).nth(2).click();

  //Verify the cart value here 
    await cartpage.updatedcartvalue();
    await itemspage.clickcart();
    await cartpage.inventoryitemnames();

  });