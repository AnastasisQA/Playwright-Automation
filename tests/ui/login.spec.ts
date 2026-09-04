import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Login', () => {
  test('should log in successfully with valid credentials @smoke', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'valid_password');

    await expect(page).toHaveURL(/dashboard/);
  });

  test('should show an error with invalid credentials', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Invalid username or password');
  });
});
