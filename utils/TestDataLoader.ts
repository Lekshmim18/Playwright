/**
 * Test Data Loader
 * Utility to load and manage test data from JSON fixtures
 */

import * as fs from 'fs';
import * as path from 'path';

export class TestDataLoader {
  private static readonly fixturesPath = path.join(__dirname, '../tests/fixtures');

  /**
   * Load JSON fixture file
   */
  static loadJSON<T>(fileName: string): T {
    const filePath = path.join(this.fixturesPath, fileName);
    
    if (!fs.existsSync(filePath)) {
      throw new Error(`Test data file not found: ${filePath}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent) as T;
  }

  /**
   * Load user credentials
   */
  static loadUsers(): any {
    return this.loadJSON('users.json');
  }

  /**
   * Load checkout data
   */
  static loadCheckoutData(): any {
    return this.loadJSON('checkout.json');
  }

  /**
   * Get specific user by role
   */
  static getUserByRole(role: string): any {
    const users = this.loadUsers();
    return users.validUsers.find((user: any) => user.role === role);
  }

  /**
   * Get all valid users
   */
  static getAllValidUsers(): any[] {
    const users = this.loadUsers();
    return users.validUsers;
  }

  /**
   * Get all invalid credentials
   */
  static getInvalidCredentials(): any[] {
    const users = this.loadUsers();
    return users.invalidCredentials;
  }

  /**
   * Get all empty credential scenarios
   */
  static getEmptyCredentials(): any[] {
    const users = this.loadUsers();
    return users.emptyCredentials;
  }
}
