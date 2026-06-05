/**
 * Wait and Retry Helper
 * Utility methods for waiting and retrying operations
 */

import { Page } from '@playwright/test';

export class WaitHelper {
  constructor(private page: Page) {}

  /**
   * Wait for an element to appear on the page
   */
  async waitForElement(selector: string, timeout: number = 5000): Promise<void> {
    await this.page.waitForSelector(selector, { timeout });
  }

  /**
   * Wait for an element to disappear from the page
   */
  async waitForElementToDisappear(selector: string, timeout: number = 5000): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'hidden', timeout });
  }

  /**
   * Wait for navigation to complete
   */
  async waitForNavigation(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Wait for a specific URL
   */
  async waitForURL(urlPattern: string | RegExp, timeout: number = 5000): Promise<void> {
    await this.page.waitForURL(urlPattern, { timeout });
  }

  /**
   * Retry an operation with exponential backoff
   */
  async retryOperation(
    operation: () => Promise<void>,
    maxAttempts: number = 3,
    delay: number = 1000
  ): Promise<void> {
    let lastError: Error | null = null;

    for (let i = 0; i < maxAttempts; i++) {
      try {
        await operation();
        return;
      } catch (error) {
        lastError = error as Error;
        if (i < maxAttempts - 1) {
          await this.page.waitForTimeout(delay * Math.pow(2, i));
        }
      }
    }

    throw new Error(`Operation failed after ${maxAttempts} attempts: ${lastError?.message}`);
  }
}
