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

  async clickContinueShoppingButton(): Promise<void>
  {
    await this.page.locator('[data-test="continue-shopping"]').click();
  }

  async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string): Promise<void>
  {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(postalCode);
  }

  async clickContinueButton(): Promise<void>
  {
    await this.page.locator('[data-test="continue"]').click();
  }

  async clickCheckoutButton(): Promise<void>
  {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }

  async clickFinishButton(): Promise<void>
  {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  async captureOrderConfirmation(): Promise<string>
  {
    const confirmationMessage = await this.page.locator('[data-test="complete-header"]').innerText();
    console.log('Order Confirmation Message:', confirmationMessage);
    return confirmationMessage;
  }

  async getOrderConfirmationDetails(): Promise<{ message: string; subMessage: string }>
  {
    const message = await this.page.locator('[data-test="complete-header"]').innerText();
    const subMessage = await this.page.locator('[data-test="complete-text"]').innerText();
    console.log('Order Details - Message:', message);
    console.log('Order Details - Sub Message:', subMessage);
    return { message, subMessage };
  }
}