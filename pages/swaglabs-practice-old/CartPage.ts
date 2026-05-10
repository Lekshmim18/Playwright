import { expect, Page } from '@playwright/test';

export class CartPage { readonly page: Page;

  constructor(page: Page) 
  {
    this.page = page;
  }

async removeitem() 
  {
  await this.page.getByRole('button', { name : "Remove" }).last().click();
  }

  async validatingcart() 
  {
  const cartitems = await this.page.locator('[data-test="shopping-cart-badge"]', ).innerText();
  console.log('The number of Items in the Cart Page is', cartitems)
  }
  
  async clickcontinue() 
  {
  await this.page.locator('[data-test="continue-shopping"]').click();
  await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html', { timeout: 60000 })    
  }

async updatedcartvalue()
{

  const updatedcartvalue = await this.page.locator('[data-test="shopping-cart-link"]').innerText();
  console.log('The Updated Cart Value is', updatedcartvalue)

}
async inventoryitemnames()
{

  const newitempresent = await this.page.locator('[data-test="inventory-item-name"]').allInnerTexts();
  console.log('The New Items in the Cart are', newitempresent)

}


}

