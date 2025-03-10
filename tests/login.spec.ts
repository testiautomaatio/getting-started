import { test, expect } from '@playwright/test';


test('Login page opens as expected', async ({ page }) => {
  await page.goto('https://authentication-6o1.pages.dev/');

  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  await expect(page).toHaveTitle(/Example application/i);
});

test('Accessing /dashboard without authentication redirects to login page', async ({ page }) => {
  await page.goto('https://authentication-6o1.pages.dev/dashboard');

  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
});

test('Alice can log in', async ({ page }) => {
  await page.goto('https://authentication-6o1.pages.dev/');

  await page.getByRole('textbox', { name: 'email' }).fill('alice@example.com');
  await page.getByRole('textbox', { name: 'password' }).fill(`}3jc\\xJnQ=E=+Q_y/%Hd311bW#6{_Oyj`);
  await page.getByRole('button', { name: 'sign in' }).first().click();

  await expect(page.getByText('Welcome Alice!')).toBeVisible();
});

test('Username and password are required', async ({ page }) => {
  await page.goto('https://authentication-6o1.pages.dev/');
  await page.getByRole('button', { name: 'sign in' }).first().click();

  await expect(page.getByText('enter a valid email address')).toBeVisible();
  await expect(page.getByText('password must be at least 6 characters long')).toBeVisible();
});

test('Login with incorrect password shows an error', async ({ page }) => {
  await page.getByRole('textbox', { name: 'email' }).fill('alice@example.com');
  await page.getByRole('textbox', { name: 'password' }).fill(`}3jc\\xJnQ=E=+Q_y/%Hd311bW#6{_Oyj`);
  await page.getByRole('button', { name: 'sign in' }).first().click();

  await expect(page.getByText('Invalid email or password')).toBeVisible();
});
