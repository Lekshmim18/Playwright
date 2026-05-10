# Contributing to Playwright Zero to Hero

Thank you for your interest in contributing to this Playwright test automation framework! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Testing Guidelines](#testing-guidelines)
- [Code Standards](#code-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)

## 🤝 Code of Conduct

This project follows a professional code of conduct. Please be respectful and constructive in all interactions.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Basic knowledge of Playwright and TypeScript

### Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/playwright-zero-to-hero.git
cd playwright-zero-to-hero

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Copy environment file
cp .env.example .env
# Edit .env with your test credentials if needed

# Run tests to verify setup
npm test
```

## 🔄 Development Workflow

### 1. Choose an Issue

- Check existing [Issues](../../issues) for tasks
- Create a new issue if you have a feature request or bug report
- Comment on the issue to indicate you're working on it

### 2. Create a Feature Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name
# or for bug fixes
git checkout -b fix/issue-number-description
```

### 3. Make Changes

- Follow the existing code patterns and structure
- Add tests for new functionality
- Update documentation if needed
- Ensure all tests pass

### 4. Test Your Changes

```bash
# Run all tests
npm test

# Run specific test suite
npm run test:swag-labs

# Run tests in UI mode for debugging
npm run test:ui

# Run tests in headed mode
npm run test:headed
```

### 5. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "feat: add new login validation test

- Add test for empty username validation
- Update error message assertions
- Add test data for edge cases"
```

## 🧪 Testing Guidelines

### Test Structure

- **Test files**: `*.spec.ts` in appropriate `tests/` subdirectories
- **Test naming**: Descriptive and clear (e.g., `'Login with valid credentials'`)
- **Test organization**: Group related tests in `describe` blocks

### Page Object Model

- **Locators**: Private properties with descriptive names
- **Methods**: Public async methods with clear names
- **Typing**: Full TypeScript typing with `Promise<void>` return types

### Example Test Structure

```typescript
test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
```

### Example Page Object

```typescript
export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.locator('input[placeholder="Username"]');
    this.passwordInput = this.page.locator('input[placeholder="Password"]');
    this.loginButton = this.page.locator('input[class="submit-button btn_action"]');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```

## 📏 Code Standards

### TypeScript

- **Strict mode**: All code must pass TypeScript strict checks
- **Naming**: PascalCase for classes, camelCase for variables/methods
- **Types**: Explicit typing preferred over `any`
- **Imports**: Group imports (external libraries, then local modules)

### Playwright Best Practices

- **Locators**: Use data-test attributes when available, then semantic locators
- **Assertions**: Use `expect()` with descriptive messages
- **Timeouts**: Use appropriate timeouts, avoid arbitrary waits
- **Parallel execution**: Tests should be independent and parallelizable

### Git Standards

- **Commit messages**: Use conventional commits format
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation
  - `test:` for test additions
  - `refactor:` for code improvements

- **Branch naming**: `feature/description` or `fix/issue-number-description`

## 📝 Submitting Changes

### Pull Request Process

1. **Update your branch** with the latest main branch:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Ensure tests pass**:
   ```bash
   npm test
   ```

3. **Create a Pull Request**:
   - Use a clear, descriptive title
   - Provide detailed description of changes
   - Reference any related issues
   - Add screenshots/videos for UI changes

4. **PR Template**:
   ```markdown
   ## Description
   Brief description of the changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing
   - [ ] All existing tests pass
   - [ ] New tests added
   - [ ] Manual testing completed

   ## Screenshots (if applicable)
   Add screenshots of UI changes

   ## Checklist
   - [ ] Code follows project standards
   - [ ] Tests are written and passing
   - [ ] Documentation updated
   - [ ] No linting errors
   ```

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Clear title** describing the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs actual behavior
- **Environment details** (OS, Node version, browser)
- **Screenshots/videos** if applicable
- **Test output** or error messages

### Feature Requests

For new features, please provide:

- **Clear description** of the proposed feature
- **Use case** and why it's needed
- **Acceptance criteria** for implementation
- **Mockups or examples** if applicable

## 🎯 Areas for Contribution

### High Priority
- [ ] Add Firefox and Safari browser configurations
- [ ] Implement visual regression testing
- [ ] Add API testing capabilities
- [ ] Create custom reporters for different formats

### Medium Priority
- [ ] Add mobile viewport testing
- [ ] Implement test data management
- [ ] Add performance testing capabilities
- [ ] Create test utilities and helpers

### Low Priority
- [ ] Add internationalization (i18n) testing
- [ ] Implement accessibility testing
- [ ] Add database testing capabilities
- [ ] Create test metrics and analytics

## 📞 Getting Help

- **Documentation**: Check the [README.md](README.md) first
- **Issues**: Search existing issues before creating new ones
- **Discussions**: Use GitHub Discussions for questions
- **Code Examples**: Look at existing tests for patterns

## 🙏 Recognition

Contributors will be recognized in the project README and GitHub repository. Thank you for helping make this project better!

---

Happy contributing! 🚀