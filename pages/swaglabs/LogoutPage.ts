import { expect, Page } from '@playwright/test';

export class LogoutPage 

{
  readonly page: Page;

  constructor(page: Page) 
  {
    this.page = page;
  }

  async logout(): Promise<void> 
  {
    //await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await this.page.getByText('Open Menu').click();
    await this.page.getByText('Logout').click();
  }
}
