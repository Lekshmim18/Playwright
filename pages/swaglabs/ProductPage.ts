import { Page, Locator } from '@playwright/test';

export class ProductPage {

  private readonly page: Page;
  private readonly inventoryItems: Locator;
  private readonly addToCartButton: Locator;
  private readonly cartLink: Locator;

  constructor(page: Page)
  {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item_name');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async selectItems(product1: string, product2: string ): Promise<void>
  {
    // Product 1
    await this.inventoryItems.filter({ hasText: product1 }).click();
    await this.addToCartButton.click();
    await this.page.goBack();

    // Product 2
    await this.inventoryItems.filter({ hasText: product2 }).click();
    await this.addToCartButton.click();
  }

  async clickCartButton(): Promise<void>
  {
    await this.cartLink.click();
  }
}