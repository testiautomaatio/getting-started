import { test, expect } from '@playwright/test';


test('Sign up link works as expected', async ({ page }) => {
    await page.goto('https://authentication-6o1.pages.dev/');
    await page.getByRole('link', { name: 'Sign up' }).click();

    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
});

test('Name, email and password are required', async ({ page }) => {
    await page.goto('https://authentication-6o1.pages.dev/signUp');
    await page.getByRole('button', { name: 'Sign up' }).first().click();

    await expect(page.getByText('name is required')).toBeVisible();
    await expect(page.getByText('enter a valid email address')).toBeVisible();
    await expect(page.getByText('password must be at least 6 characters long')).toBeVisible();
});

test('Sign up with existing email shows an error', async ({ page }) => {
    await page.goto('https://authentication-6o1.pages.dev/signUp');

    await page.getByRole('textbox', { name: 'name' }).fill('Alice');
    await page.getByRole('textbox', { name: 'email' }).fill('alice@example.com');
    await page.getByRole('textbox', { name: 'password' }).fill(`AliceAlreadyExists123`);

    await page.getByRole('button', { name: 'sign up' }).first().click();

    await expect(page.getByText('Email is already in use')).toBeVisible();
});

test('Sign up with valid data works as expected', async ({ page }) => {
    await page.goto('https://authentication-6o1.pages.dev/signUp');

    await page.getByRole('textbox', { name: 'name' }).fill('Charlie');
    await page.getByRole('textbox', { name: 'email' }).fill('charlie@example.com');
    await page.getByRole('textbox', { name: 'password' }).fill(`CharlieHasAPassword123`);

    await page.getByRole('button', { name: 'sign up' }).first().click();

    await expect(page.getByText('Account created successfully')).toBeVisible();
});

test('A newly created account can be used for signing in', async ({ page }) => {
    await page.goto('https://authentication-6o1.pages.dev/signUp');

    await page.getByRole('textbox', { name: 'name' }).fill('Charlie');
    await page.getByRole('textbox', { name: 'email' }).fill('charlie@example.com');
    await page.getByRole('textbox', { name: 'password' }).fill(`CharlieHasAPassword123`);
    await page.getByRole('button', { name: 'sign up' }).first().click();

    await expect(page.getByText('Account created successfully')).toBeVisible();

    await page.getByRole('textbox', { name: 'email' }).fill('charlie@example.com');
    await page.getByRole('textbox', { name: 'password' }).fill(`CharlieHasAPassword123`);
    await page.getByRole('button', { name: 'sign in' }).first().click();

    await expect(page.getByText('Welcome Charlie')).toBeVisible();
});