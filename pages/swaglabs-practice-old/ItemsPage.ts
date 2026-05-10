import { expect, Page } from '@playwright/test';

export class ItemsPage { readonly page: Page;

  constructor(page: Page) 
  {
    this.page = page;
  }

  async firstitem() 
  {
   const firstitem = await this.page.locator('[data-test="inventory-item-name"]').first().innerText();
   console.log('The First Item is', firstitem)  
  }
    async seconditem() 
  {
   const seconditem = await this.page.locator('[data-test="inventory-item-name"]').nth(1).innerText();
   console.log (' The Second Item is ', seconditem)
 
  }
     async additem1() 
  {
     await this.page.getByRole('button', {name : "Add to cart"}).first().click();

  }
     async additem2() 
  {
      await this.page.getByRole('button', {name : "Add to cart"}).nth(1).click();

  }
       
      async itemsincart() 
  {
  const itemsincart = await this.page.locator('[data-test="shopping-cart-badge"]').innerText();
  console.log('The no of Items added to the Cart is ', itemsincart) 
  }
       async clickcart() 
  {
  await this.page.locator('[data-test="shopping-cart-link"]').click();
  await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html')
  }



}