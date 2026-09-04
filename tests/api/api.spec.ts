import { test, expect } from '@playwright/test';

/**
 * Example API test using Playwright's built-in request context.
 * No browser is launched for these tests, making them fast for
 * validating backend/API contracts independent of the UI.
 */
test.describe('API - Users', () => {
  test('GET /users/1 returns a valid user @api', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      id: 1,
      username: expect.any(String),
      email: expect.any(String),
    });
  });

  test('POST /posts creates a new resource @api', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'Test post',
        body: 'This is a test post body',
        userId: 1,
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe('Test post');
  });
});
