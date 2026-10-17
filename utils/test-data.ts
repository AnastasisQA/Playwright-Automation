/**
 * Centralized test data / constants.
 * Keeping data separate from test logic makes tests easier to
 * maintain and reduces duplication across spec files.
 */
export const users = {
  standard: {
    username: 'standard_user',
    password: 'valid_password',
  },
  invalid: {
    username: 'standard_user',
    password: 'wrong_password',
  },
};

export function randomEmail(): string {
  return `test.user.${Date.now()}@example.com`;
}
