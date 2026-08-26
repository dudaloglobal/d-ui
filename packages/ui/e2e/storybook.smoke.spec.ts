import { test, expect } from '@playwright/test';

test('Storybook serves the Button story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-button--primary');
  await expect(page.getByRole('button', { name: 'Continuer' })).toBeVisible();
});

test('Storybook serves the TimeAgo story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-timeago--default');
  const time = page.locator('time');
  await expect(time).toBeVisible();
  await expect(time).toHaveAttribute(
    'datetime',
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/,
  );
  await expect(time).toHaveAttribute('lang', 'fr');
  await expect(time).toHaveAttribute('title', /.+/);
  await expect(time.locator('.d-ui-visually-hidden')).toBeAttached();
  await expect(time).not.toHaveAttribute('role');
});

test('TimeAgo live story updates visually without aria-live', async ({ page }) => {
  await page.goto('/iframe.html?id=components-timeago--live');
  const time = page.locator('time');
  await expect(time).toBeVisible();
  await expect(time).not.toHaveAttribute('aria-live');
});

test('TimeAgo English locale story renders relative English copy', async ({ page }) => {
  await page.goto('/iframe.html?id=components-timeago--locale');
  const time = page.locator('time[lang="en"]');
  await expect(time).toBeVisible();
  await expect(time).toContainText(/ago|now/i);
});

test('TimeAgo sizes story renders small and medium timestamps', async ({ page }) => {
  await page.goto('/iframe.html?id=components-timeago--sizes');
  await expect(page.locator('time')).toHaveCount(2);
});
