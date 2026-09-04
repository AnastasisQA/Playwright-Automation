import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

/**
 * Custom fixtures extend Playwright's base test object so that
 * Page Objects are automatically instantiated and injected into tests.
 *
 * Usage in a spec file:
 *   import { test, expect } from '../../fixtures/test-fixtures';
 *   test('example', async ({ loginPage }) => { ... });
 */
type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
