import { test, expect } from '@playwright/test';

test('Storybook serves the Button story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-button--primary');
  await expect(page.getByRole('button', { name: 'Continuer' })).toBeVisible();
});

test('Storybook serves the d-ui favicon', async ({ page }) => {
  const svg = await page.request.get('/favicon.svg');
  expect(svg.ok()).toBeTruthy();
  expect(await svg.text()).toContain('#0f5c4c');
  const png = await page.request.get('/favicon.png');
  expect(png.ok()).toBeTruthy();
});

test('Storybook page title uses d-ui', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/d-ui/);
  await expect(page).not.toHaveTitle(/Storybook/);
  await expect(page.getByRole('link', { name: 'd-ui' })).toBeVisible();
  await expect(page.locator('img[alt="d-ui"]')).toHaveAttribute('src', /favicon\.svg/);
});

const darkBrand = 'rgb(94, 234, 212)';
const lightBrand = 'rgb(15, 92, 76)';
const darkAppBg = 'rgb(11, 18, 32)';
const darkBarBg = 'rgb(30, 41, 59)';
const lightSidebar = 'rgb(241, 245, 249)';

test('Dark theme applies to manager chrome, docs, and the story canvas', async ({
  page,
}) => {
  await page.goto('/?path=/docs/components-button--docs&globals=theme:dark');
  await expect(page.locator('html')).toHaveClass(/d-ui-manager-dark/);
  await expect(page.locator('body')).toHaveClass(/d-ui-manager-dark/);
  await expect(page.locator('nav.sidebar-container')).toHaveCSS(
    'background-color',
    darkAppBg,
  );
  await expect(page.locator('.sb-bar').first()).toHaveCSS('background-color', darkBarBg);
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.locator('[data-d-ui-theme="dark"]').first()).toBeVisible();
  const button = preview.getByRole('button', { name: 'Par défaut' }).first();
  await expect(button).toBeVisible();
  await expect(button).toHaveCSS('background-color', darkBrand);
});

test('Dark theme applies on a story route, not only docs', async ({ page }) => {
  await page.goto('/?path=/story/components-button--primary&globals=theme:dark');
  await expect(page.locator('nav.sidebar-container')).toHaveCSS(
    'background-color',
    darkAppBg,
  );
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.getByRole('button', { name: 'Continuer' })).toHaveCSS(
    'background-color',
    darkBrand,
  );
});

test('Toolbar Dark restyles manager chrome, not only the iframe', async ({ page }) => {
  await page.goto('/?path=/docs/components-button--docs&globals=theme:light');
  await expect(page.locator('nav.sidebar-container')).toHaveCSS(
    'background-color',
    lightSidebar,
  );
  await page.getByRole('button', { name: /Light/i }).first().click();
  await page.getByText('Dark', { exact: true }).first().click();
  await expect(page.locator('nav.sidebar-container')).toHaveCSS(
    'background-color',
    darkAppBg,
  );
  await expect(page.locator('.sb-bar').first()).toHaveCSS('background-color', darkBarBg);
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.getByRole('button', { name: 'Par défaut' }).first()).toHaveCSS(
    'background-color',
    darkBrand,
  );
});

test('Static iframe dark globals use dark brand tokens', async ({ page }) => {
  await page.goto('/iframe.html?id=components-button--primary&globals=theme:dark');
  const button = page.getByRole('button', { name: 'Continuer' });
  await expect(page.locator('html')).toHaveAttribute('data-d-ui-theme', 'dark');
  await expect(button).toHaveCSS('background-color', darkBrand);
});

test('Static iframe light globals keep the light brand token', async ({ page }) => {
  await page.goto('/iframe.html?id=components-button--primary&globals=theme:light');
  const button = page.getByRole('button', { name: 'Continuer' });
  await expect(page.locator('html')).toHaveAttribute('data-d-ui-theme', 'light');
  await expect(button).toHaveCSS('background-color', lightBrand);
});

test('Button high emphasis covers Default, Disabled, With Icon, Dropdown and Split', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/iframe.html?id=components-button--high-emphasis');
  await expect(page.getByRole('button', { name: 'Par défaut' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Désactivé' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Avec icône' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Menu' })).toHaveAttribute(
    'aria-haspopup',
    'true',
  );
  await expect(page.getByRole('button', { name: "Plus d'actions" })).toBeVisible();
  const labels = ['Par défaut', 'Désactivé', 'Avec icône', 'Menu', "Plus d'actions"];
  const boxes = await Promise.all(
    labels.map((name) => page.getByRole('button', { name }).boundingBox()),
  );
  const ys = boxes.map((box) => box?.y ?? -1);
  expect(Math.max(...ys) - Math.min(...ys)).toBeLessThan(2);
});

test('Button full width use cases sit on aligned rows', async ({ page }) => {
  await page.goto('/iframe.html?id=components-button--full-width');
  const pair = page.getByRole('button', { name: 'Deux boutons pleine largeur' });
  await expect(pair).toHaveCount(2);
  const first = pair.nth(0);
  const second = pair.nth(1);
  const a = await first.boundingBox();
  const b = await second.boundingBox();
  expect(a).toBeTruthy();
  expect(b).toBeTruthy();
  expect(a && b ? Math.abs(a.y - b.y) : 99).toBeLessThan(2);
  expect(a && b ? Math.abs(a.width - b.width) : 99).toBeLessThan(2);
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
  await expect(page.getByText('Soumis')).toBeVisible();
  await expect(time).toContainText(/il y a|maintenant|hier/i);
});

test('TimeAgo live story updates visually without aria-live', async ({ page }) => {
  await page.goto('/iframe.html?id=components-timeago--live');
  const time = page.locator('time');
  await expect(time).toBeVisible();
  await expect(time).toHaveAttribute('lang', 'fr');
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
