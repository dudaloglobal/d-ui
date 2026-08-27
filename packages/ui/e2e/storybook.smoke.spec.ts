import { test, expect, type Page } from '@playwright/test';

test('Storybook serves the Button story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-button--primary');
  await expect(page.getByRole('button', { name: 'Continuer' })).toBeVisible();
});

test('Storybook serves the d-ui favicon', async ({ page }) => {
  const svg = await page.request.get('/favicon.svg');
  expect(svg.ok()).toBeTruthy();
  const svgText = await svg.text();
  expect(svgText).toContain('🍩');
  expect(svgText).toMatch(/<circle\b[^>]*\bfill="#ffffff"/);
  expect(svgText).not.toContain('#0f5c4c');
  expect(svgText).not.toMatch(/<rect/);
  const png = await page.request.get('/favicon.png');
  expect(png.ok()).toBeTruthy();
});

test('favicon PNG corners are transparent', async ({ page }) => {
  await page.goto('/');
  const corners = await page.evaluate(async () => {
    const img = document.createElement('img');
    img.src = '/favicon.png';
    await img.decode();
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('no canvas');
    ctx.drawImage(img, 0, 0);
    const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const at = (x: number, y: number) => {
      const i = (y * width + x) * 4;
      return [data[i], data[i + 1], data[i + 2], data[i + 3]];
    };
    return {
      width,
      height,
      tl: at(0, 0),
      tr: at(width - 1, 0),
      bl: at(0, height - 1),
      br: at(width - 1, height - 1),
    };
  });
  expect(corners.width).toBeGreaterThan(0);
  expect(corners.height).toBeGreaterThan(0);
  for (const corner of [corners.tl, corners.tr, corners.bl, corners.br]) {
    expect(corner[3]).toBe(0);
  }
});

test('component docs use Component | Dudalo Design System titles', async ({ page }) => {
  await page.goto('/?path=/docs/components-textinput--docs');
  await expect(page).toHaveTitle('TextInput | Dudalo Design System');
  await page.goto('/?path=/docs/components-button--docs');
  await expect(page).toHaveTitle('Button | Dudalo Design System');
  await page.goto('/?path=/docs/components-textarea--docs');
  await expect(page).toHaveTitle('Textarea | Dudalo Design System');
  await page.goto('/?path=/docs/components-timeago--docs');
  await expect(page).toHaveTitle('TimeAgo | Dudalo Design System');
});

test('Storybook page title uses Dudalo Design System', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Dudalo Design System/);
  await expect(page).not.toHaveTitle(/Storybook/);
  await expect(page.getByRole('link', { name: 'd-ui' })).toBeVisible();
  await expect(page.locator('img[alt="d-ui"]')).toHaveAttribute('src', /favicon\.svg/);
  await expect(page.locator('img[alt="d-ui"]')).toHaveCSS('width', '32px');
  await expect(page.locator('img[alt="d-ui"]')).toHaveCSS('height', '32px');
});

const darkBrand = 'rgb(94, 234, 212)';
const lightBrand = 'rgb(15, 92, 76)';
const darkAppBg = 'rgb(11, 18, 32)';
const darkBarBg = 'rgb(30, 41, 59)';
const lightSidebar = 'rgb(241, 245, 249)';
const lightSyntaxTag = 'rgb(128, 0, 0)';
const lightSyntaxClass = 'rgb(43, 145, 175)';
const storybookLimeTag = 'rgb(168, 255, 96)';

async function docsSource(page: Page) {
  const preview = page.frameLocator('#storybook-preview-iframe');
  const source = preview.locator('pre.prismjs').first();
  if (!(await source.isVisible().catch(() => false))) {
    await preview
      .getByRole('button', { name: /Show code|Afficher/i })
      .first()
      .click();
  }
  await expect(source).toBeVisible();
  return { preview, source };
}

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
  await page
    .getByRole('button', { name: /Clair|Light/i })
    .first()
    .click();
  await page.getByText('Sombre', { exact: true }).first().click();
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

test('Light docs source uses Storybook light syntax, not lime or brand green', async ({
  page,
}) => {
  await page.goto('/?path=/docs/components-button--docs&globals=theme:light');
  const { preview, source } = await docsSource(page);
  await expect(source).toHaveCSS('color', 'rgb(57, 58, 52)');
  await expect(source).toHaveCSS('background-color', 'rgb(246, 248, 250)');
  const className = preview.locator('pre.prismjs .token.class-name').first();
  await expect(className).toHaveCSS('color', lightSyntaxClass);
  const tagColor = await source.evaluate((pre) => {
    const el = [...pre.querySelectorAll('.token.tag')].find(
      (node) =>
        !node.classList.contains('class-name') &&
        !node.classList.contains('punctuation') &&
        !node.classList.contains('attr-name'),
    );
    return el ? getComputedStyle(el).color : '';
  });
  expect(tagColor).toBe(lightSyntaxTag);
  expect(tagColor).not.toBe(storybookLimeTag);
  expect(tagColor).not.toBe(lightBrand);
});

test('Dark docs source does not use lime or brand teal for JSX tags', async ({
  page,
}) => {
  await page.goto('/?path=/docs/components-button--docs&globals=theme:dark');
  const { source } = await docsSource(page);
  const tagColor = await source.evaluate((pre) => {
    const el = [...pre.querySelectorAll('.token.tag')].find(
      (node) =>
        !node.classList.contains('class-name') &&
        !node.classList.contains('punctuation') &&
        !node.classList.contains('attr-name'),
    );
    return el ? getComputedStyle(el).color : '';
  });
  expect(tagColor).toBe('rgb(224, 108, 117)');
  expect(tagColor).not.toBe(storybookLimeTag);
  expect(tagColor).not.toBe(darkBrand);
});

test('old Input docs URL opens TextInput docs', async ({ page }) => {
  await page.goto('/?path=/docs/components-input--docs');
  await expect(page).toHaveURL(/components-textinput--docs/);
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.getByRole('heading', { name: 'TextInput' })).toBeVisible();
});

test('French TextInput docs do not leak English headings or example copy', async ({
  page,
}) => {
  await page.goto('/?path=/docs/components-textinput--docs');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(
    preview.getByRole('heading', { name: 'États particuliers' }),
  ).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Accessibilité' })).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Special states' })).toHaveCount(0);
  await expect(
    preview.getByRole('heading', { name: 'Accessibility concerns' }),
  ).toHaveCount(0);
  await expect(preview.getByText('Text field label')).toHaveCount(0);
  await expect(preview.getByText('Helper text')).toHaveCount(0);
  await expect(preview.getByText('characters remaining')).toHaveCount(0);
  await expect(
    preview.getByRole('textbox', { name: 'Libellé du champ' }).first(),
  ).toBeVisible();
});

test('TextInput docs do not embed Textarea', async ({ page }) => {
  await page.goto('/?path=/docs/components-textinput--docs');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.getByRole('heading', { name: 'TextInput' })).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Textarea' })).toHaveCount(0);
});

test('French Properties tables use French descriptions', async ({ page }) => {
  const preview = page.frameLocator('#storybook-preview-iframe');
  await page.goto('/?path=/docs/components-textinput--docs');
  await expect(preview.getByText(/Libellé visible au-dessus du champ/)).toBeVisible();
  await expect(preview.getByText('Emphasis: primary')).toHaveCount(0);

  await page.goto('/?path=/docs/components-button--docs');
  await expect(preview.getByText(/Emphase/)).toBeVisible();
  await expect(preview.getByText('Stretch to the container width.')).toHaveCount(0);

  await page.goto('/?path=/docs/components-timeago--docs');
  await expect(preview.getByText(/Instant à afficher/)).toBeVisible();

  await page.goto('/?path=/docs/components-textarea--docs');
  await expect(preview.getByRole('heading', { name: 'Textarea' })).toBeVisible();
  await expect(preview.getByText(/Libellé visible au-dessus du champ/)).toBeVisible();
});

test('Docs source stays hidden until Show code is clicked', async ({ page }) => {
  await page.goto('/?path=/docs/components-textinput--docs');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(
    preview.getByRole('textbox', { name: 'Libellé du champ' }).first(),
  ).toBeVisible();
  await expect(preview.locator('pre.prismjs')).toHaveCount(0);
  await preview
    .getByRole('button', { name: /Show code|Afficher/i })
    .first()
    .click();
  await expect(preview.locator('pre.prismjs').first()).toBeVisible();
});

test('Button docs Show code imports Button from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-button--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { Button, IconButton } from 'd-ui'");
  await expect(source).toContainText('export default () =>');
  await expect(source).toContainText('<Button');
  await expect(source).not.toContainText('EmphasisUseCases');
  await expect(source).not.toContainText('PlusIcon');
});

test('TextInput docs Show code imports TextInput from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-textinput--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { TextInput } from 'd-ui'");
  await expect(source).toContainText('export default () =>');
  await expect(source).toContainText('<TextInput');
  await expect(source).not.toContainText('DefaultDemo');
  await expect(source).not.toContainText('Labeled');
});

test('Textarea docs Show code imports Textarea from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-textarea--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { Textarea } from 'd-ui'");
  await expect(source).toContainText('export default () =>');
  await expect(source).toContainText('<Textarea');
  await expect(source).not.toContainText('ControlledTextarea');
});

test('TimeAgo docs Show code imports TimeAgo from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-timeago--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { TimeAgo } from 'd-ui'");
  await expect(source).toContainText('<TimeAgo');
  await expect(source).not.toContainText('Example');
});

test('Button high emphasis covers Default, Disabled, Loading, With Icon, Dropdown and Split', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/iframe.html?id=components-button--high-emphasis');
  await expect(page.getByRole('button', { name: 'Par défaut' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Désactivé' })).toBeDisabled();
  const loading = page.getByRole('button', { name: 'Enregistrement' });
  await expect(loading).toBeDisabled();
  await expect(loading).toHaveAttribute('aria-busy', 'true');
  await expect(loading.locator('.d-ui-button-spinner')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Avec icône' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Menu' })).toHaveAttribute(
    'aria-haspopup',
    'true',
  );
  await expect(page.getByRole('button', { name: "Plus d'actions" })).toBeVisible();
  const labels = [
    'Par défaut',
    'Désactivé',
    'Enregistrement',
    'Avec icône',
    'Menu',
    "Plus d'actions",
  ];
  const boxes = await Promise.all(
    labels.map((name) => page.getByRole('button', { name }).boundingBox()),
  );
  const ys = boxes.map((box) => box?.y ?? -1);
  expect(Math.max(...ys) - Math.min(...ys)).toBeLessThan(2);
});

test('Button loading story shows spinner and bounce on each emphasis and IconButton', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=components-button--loading');
  const labeled = page.getByRole('button', { name: 'Enregistrement' });
  await expect(labeled).toHaveCount(6);
  for (const button of await labeled.all()) {
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await expect(button).toBeDisabled();
  }
  await expect(page.locator('.d-ui-button-spinner')).toHaveCount(4);
  await expect(page.locator('.d-ui-button-bounce')).toHaveCount(4);
  const iconOnly = page.getByRole('button', { name: 'Ajouter' });
  await expect(iconOnly).toHaveCount(2);
  await expect(iconOnly.nth(0).locator('.d-ui-button-spinner')).toBeVisible();
  await expect(iconOnly.nth(1).locator('.d-ui-button-bounce')).toBeVisible();
  await expect(page.locator('.d-ui-button-bounce > span')).toHaveCount(12);
  const spinnerDuration = await page
    .locator('.d-ui-button-spinner')
    .first()
    .evaluate((el) => getComputedStyle(el).animationDuration);
  expect(spinnerDuration === '0.9s' || spinnerDuration === '900ms').toBeTruthy();
  const bounceDot = page.locator('.d-ui-button-bounce > span').first();
  const { width, fontSize } = await bounceDot.evaluate((el) => {
    const parent = el.parentElement;
    return {
      width: parseFloat(getComputedStyle(el).width),
      fontSize: parseFloat(getComputedStyle(parent ?? el).fontSize),
    };
  });
  expect(width).toBeCloseTo(fontSize * 0.38, 1);
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

test('Storybook serves the TextInput story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-textinput--default');
  await expect(page.getByRole('textbox', { name: 'Libellé du champ' })).toBeVisible();
});

test('TextInput password story toggles visibility with an accessible name', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=components-textinput--password');
  const password = page.getByRole('textbox', { name: 'Mot de passe' });
  await expect(password).toHaveAttribute('type', 'password');
  await page.getByRole('button', { name: 'Afficher le mot de passe' }).click();
  await expect(password).toHaveAttribute('type', 'text');
});

test('TextInput icon story exposes a search field', async ({ page }) => {
  await page.goto('/iframe.html?id=components-textinput--icon');
  await expect(page.getByRole('searchbox', { name: 'Libellé du champ' })).toBeVisible();
});

test('TextInput number story renders a spinbutton', async ({ page }) => {
  await page.goto('/iframe.html?id=components-textinput--number');
  await expect(page.getByRole('spinbutton', { name: 'Nombre' })).toBeVisible();
});

test('TextInput clearable story empties the field from the named control', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=components-textinput--clearable');
  const input = page.getByRole('textbox', { name: 'Libellé du champ' });
  await expect(input).toHaveValue('Ada Lovelace');
  await page.getByRole('button', { name: 'Effacer' }).click();
  await expect(input).toHaveValue('');
});

test('TextInput character count is described on the textbox', async ({ page }) => {
  await page.goto('/iframe.html?id=components-textinput--max-length');
  const input = page.getByRole('textbox', { name: 'Libellé du champ' });
  await expect(input).toHaveAttribute('aria-describedby', /.+/);
  await expect(page.getByText('50 caractères restants')).toBeVisible();
});

test('Textarea story renders a compact labeled multiline control', async ({ page }) => {
  await page.goto('/iframe.html?id=components-textarea--default');
  const area = page.getByRole('textbox', { name: 'Libellé de la zone de texte' });
  await expect(area).toBeVisible();
  await expect(area).toHaveJSProperty('tagName', 'TEXTAREA');
  await expect(area).toHaveAttribute('rows', '2');
  const box = await area.boundingBox();
  expect(box?.height ?? 99).toBeLessThan(56);
});

test('Textarea story stretches to the canvas width', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/iframe.html?id=components-textarea--default');
  const area = page.getByRole('textbox', { name: 'Libellé de la zone de texte' });
  await expect(area).toBeVisible();
  const box = await area.boundingBox();
  expect(box?.width ?? 0).toBeGreaterThan(400);
});

test('Textarea invalid story exposes aria-invalid', async ({ page }) => {
  await page.goto('/iframe.html?id=components-textarea--invalid');
  const area = page.getByRole('textbox', { name: 'Libellé de la zone de texte' });
  await expect(area).toHaveAttribute('aria-invalid', 'true');
  await expect(page.getByText('Valeur invalide')).toBeVisible();
});

test('TextInput helper story describes the field', async ({ page }) => {
  await page.goto('/iframe.html?id=components-textinput--helper');
  const input = page.getByRole('textbox', { name: 'Libellé du champ' });
  await expect(input).toHaveAccessibleDescription(/.+/);
});
