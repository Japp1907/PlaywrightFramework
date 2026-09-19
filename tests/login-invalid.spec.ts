import { test, expect } from '@playwright/test';

test('invalid login should not log in and URL should remain same', async ({ page }) => {
  const loginUrl = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';

  await page.goto(loginUrl);

  await page.getByLabel('Email Address').fill('invalid_user_123');
  await page.getByLabel('Password').fill('invalid_password_456');
  await page.getByLabel('Remember me').check();
  await page.getByRole('button', { name: /login/i }).click();

  await expect(page.getByLabel('Email Address')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page).toHaveURL(loginUrl);
});
