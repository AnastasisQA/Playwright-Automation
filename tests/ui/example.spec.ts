import { test, expect } from '@playwright/test';

/**
 * A minimal smoke test to verify the environment is wired up correctly.
 * Safe to delete once you have real tests in place.
 */
test('homepage has a title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/.+/);
});
