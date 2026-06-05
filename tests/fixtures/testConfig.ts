/**
 * Test Configuration - Environment-based settings
 */

export const testConfig = {
  urls: {
    saucedemo: process.env.SAUCEDEMO_URL || 'https://www.saucedemo.com',
    automationpractice: process.env.AUTOMATION_URL || 'https://www.w3schools.com',
    lambdatest: process.env.LAMBDATEST_URL || 'https://www.lambdatest.com'
  },
  
  timeouts: {
    short: 5000,
    standard: 10000,
    long: 30000
  },

  retryAttempts: {
    local: 0,
    ci: 2
  }
};

export default testConfig;
