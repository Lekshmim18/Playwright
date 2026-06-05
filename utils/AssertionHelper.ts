/**
 * Common Assertions Helper
 * Reusable assertion methods for test files
 */

import { Page, expect } from '@playwright/test';

export class AssertionHelper {
  constructor(private page: Page) {}

  async assertPageURL(expectedURL: string): Promise<void> {
    await expect(this.page).toHaveURL(expectedURL);
  }

  async assertPageTitle(expectedTitle: string): Promise<void> {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async assertElementVisible(selector: string): Promise<void> {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  async assertElementHidden(selector: string): Promise<void> {
    await expect(this.page.locator(selector)).toBeHidden();
  }

  async assertElementContainsText(selector: string, text: string): Promise<void> {
    await expect(this.page.locator(selector)).toContainText(text);
  }

  async assertElementHasText(selector: string, text: string): Promise<void> {
    await expect(this.page.locator(selector)).toHaveText(text);
  }

  async assertErrorMessage(expectedMessage: string): Promise<void> {
    const errorSelector = '[data-test="error"]';
    await expect(this.page.locator(errorSelector)).toContainText(expectedMessage);
  }

  async assertSuccessMessage(expectedMessage: string): Promise<void> {
    const successSelector = '.success-message';
    await expect(this.page.locator(successSelector)).toContainText(expectedMessage);
  }

  async assertInputValue(selector: string, expectedValue: string): Promise<void> {
    await expect(this.page.locator(selector)).toHaveValue(expectedValue);
  }
}
