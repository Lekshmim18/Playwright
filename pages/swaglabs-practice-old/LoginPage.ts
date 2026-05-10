import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly username: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) 
  {
    this.page = page;
    this.username = this.page.locator('input[placeholder="Username"]');
    this.password = this.page.locator('input[placeholder="Password"]');
    this.loginButton = this.page.locator('input[class="submit-button btn_action"]');
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async enterUsername(username: string): Promise<void> 
  {
    await this.username.fill(username);
  }

  async enterPassword(password: string): Promise<void> 
  {
    await this.password.fill(password);
  }

  async clickLoginButton(): Promise<void> 
  {
    await this.loginButton.click();
  }
}
