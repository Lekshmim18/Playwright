# Playwright Zero to Hero 🎭

[![Playwright](https://img.shields.io/badge/Playwright-1.58.2-45ba4b?logo=playwright)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

A comprehensive end-to-end test automation framework built with **Playwright** and **TypeScript**, demonstrating professional testing patterns and best practices.

> **🚧 Repository Status:** This project is currently **in progress** and actively being developed. Features and documentation are being continuously improved.

## 🎯 Project Overview

This is a production-ready Playwright framework featuring:

- **Page Object Model (POM)** architecture for maintainable tests
- **50+ test scenarios** covering multiple applications
- **TypeScript strict mode** for type safety
- **Professional project structure** with clean organization
- **CI/CD ready** with GitHub Actions integration
- **Multiple test suites** for different applications

## 📂 Project Structure

```
Playwright Zero to Hero/
├── pages/                      # Page Object Models
│   ├── swaglabs/              # Production POM (SauceDemo app)
│   │   ├── LoginPage.ts       # Login functionality
│   │   ├── CartPage.ts        # Shopping cart operations
│   │   ├── ProductPage.ts     # Product selection & inventory
│   │   └── LogoutPage.ts      # Logout functionality
│   └── swaglabs-practice-old/  # Learning/practice code (not committed)
│
├── tests/                      # Test suites
│   ├── Swag Labs E2E/         # Production E2E tests
│   ├── Swag Labs Practice/    # Practice & learning tests (50+ tests)
│   ├── automation-practice/   # General automation scenarios
│   └── LambdaTest Playground/ # External site testing
│
├── playwright.config.ts        # Playwright configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies & scripts
└── .gitignore                 # Git exclusions
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/playwright-zero-to-hero.git
cd playwright-zero-to-hero

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Run tests in headed mode (see browser)
npm run test:headed

# Run specific test suite
npm run test:swag-labs        # SauceDemo E2E tests
npm run test:practice         # Practice tests
npm run test:automation       # Automation scenarios
npm run test:lambdatest       # LambdaTest tests

# View test report
npm run test:report
```

## 📋 Test Coverage

### SauceDemo Tests (Production)
- ✅ User login scenarios (positive & negative)
- ✅ Shopping cart operations
- ✅ Item selection and filtering
- ✅ Checkout process
- ✅ Session management
- ✅ Edge cases (locked users, invalid credentials)

### Automation Practice Tests
- ✅ Alert handling
- ✅ Dropdown selections
- ✅ Mouse actions (click, hover, drag-drop)
- ✅ File uploads
- ✅ Form inputs
- ✅ Radio buttons & checkboxes
- ✅ Web tables

### External Testing
- ✅ LambdaTest Playground scenarios

## 🏗️ Architecture

### Page Object Model Pattern

Each page is represented as a class with:
- **Private locators** for element selection
- **Public methods** for user interactions
- **Proper TypeScript typing**

Example:
```typescript
export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) { ... }

  async login(username: string, password: string): Promise<void> { ... }
}
```

### Test Structure

Tests follow a clear pattern:
```typescript
test('Full Flow - Successful Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
```

## 🛠️ Configuration

### playwright.config.ts
- **Parallel execution** enabled for faster testing
- **HTML reporter** for detailed test results
- **Trace recording** on first retry
- **Chromium browser** configured (Firefox & Safari commented)

### tsconfig.json
- **Strict mode** enabled for type safety
- **ES2020 target** for modern JavaScript features
- **Path aliases** for cleaner imports
- **Source maps** for easier debugging

## 📊 Key Features

| Feature | Status | Details |
|---------|--------|---------|
| POM Pattern | ✅ | Fully implemented across all pages |
| TypeScript | ✅ | Strict mode, proper typing |
| Parallel Tests | ✅ | fullyParallel enabled |
| CI/CD Ready | ✅ | GitHub Actions workflow included |
| Error Handling | ✅ | Proper assertions & validations |
| Debugging | ✅ | Trace, debug, headed modes |
| Reports | ✅ | HTML reports generated |
| Git Ready | ✅ | .gitignore properly configured |

## 🔧 Development

### Add New Tests

1. Create a test file in the appropriate `tests/` subdirectory
2. Import required page objects from `pages/swaglabs/`
3. Follow the existing test pattern
4. Run `npm test` to execute

### Add New Page Objects

1. Create a new file in `pages/swaglabs/`
2. Implement the class with private locators and public methods
3. Export the class
4. Import in your tests

## 📝 Best Practices Implemented

- ✅ Clean separation of concerns (POM pattern)
- ✅ Comprehensive error messages in assertions
- ✅ Proper async/await usage
- ✅ Type-safe with TypeScript strict mode
- ✅ Consistent naming conventions
- ✅ DRY principle (Don't Repeat Yourself)
- ✅ Maintainable test organization
- ✅ Professional git workflow

## 🚦 CI/CD Integration

This project includes GitHub Actions workflow for:
- Automatic test runs on push/PR
- Multi-browser testing support
- Test result reporting
- Failed test artifacts

See `.github/workflows/` for configuration.

## 📚 Learning Path

1. **Basics**: Start with `tests/automation-practice/` tests
2. **POM Pattern**: Study `pages/swaglabs/` implementations
3. **E2E Tests**: Review `tests/Swag Labs E2E/` for real-world scenarios
4. **Advanced**: Explore `tests/Swag Labs Practice/` for complex flows

## 🤝 Contributing

This is a learning project, but you can:
1. Fork the repository
2. Create a feature branch
3. Make improvements
4. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📋 License

This project is licensed under the ISC License - see [LICENSE](LICENSE) file for details.

## 🎓 Resources

- [Playwright Documentation](https://playwright.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

## 📧 Contact

For questions or feedback, feel free to reach out:
- LinkedIn: [https://www.linkedin.com/in/lekshmi-mahadevan-81b9141a8/]
- Email: [Lekshmi Mahadevan]
- GitHub: [@lekshmim18]

---

**Built with ❤️ for test automation excellence**
