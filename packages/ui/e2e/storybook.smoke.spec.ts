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
  await page.goto('/?path=/docs/components-tooltip--docs');
  await expect(page).toHaveTitle('Tooltip | Dudalo Design System');
  await page.goto('/?path=/docs/components-popover--docs');
  await expect(page).toHaveTitle('Popover | Dudalo Design System');
  await page.goto('/?path=/docs/components-emojipopover--docs');
  await expect(page).toHaveTitle('EmojiPopover | Dudalo Design System');
  await page.goto('/?path=/docs/components-select--docs');
  await expect(page).toHaveTitle('Select | Dudalo Design System');
  await page.goto('/?path=/docs/components-combobox--docs');
  await expect(page).toHaveTitle('Combobox | Dudalo Design System');
  await page.goto('/?path=/docs/components-text--docs');
  await expect(page).toHaveTitle('Text | Dudalo Design System');
  await page.goto('/?path=/docs/components-heading--docs');
  await expect(page).toHaveTitle('Heading | Dudalo Design System');
  await page.goto('/?path=/docs/components-link--docs');
  await expect(page).toHaveTitle('Link | Dudalo Design System');
  await page.goto('/?path=/docs/accessibility-skiplink--docs');
  await expect(page).toHaveTitle('SkipLink | Dudalo Design System');
  await page.goto('/?path=/docs/foundations-themeprovider--docs');
  await expect(page).toHaveTitle('ThemeProvider | Dudalo Design System');
  await page.goto('/?path=/docs/components-field--docs');
  await expect(page).toHaveTitle('Field | Dudalo Design System');
});

test('component docs H1 is the component name, like Link', async ({ page }) => {
  for (const { id, name } of [
    { id: 'components-button--docs', name: 'Button' },
    { id: 'components-textinput--docs', name: 'TextInput' },
    { id: 'components-select--docs', name: 'Select' },
    { id: 'components-combobox--docs', name: 'Combobox' },
  ]) {
    await page.goto(`/?path=/docs/${id}`);
    const heading = page
      .frameLocator('#storybook-preview-iframe')
      .getByRole('heading', { level: 1, name, exact: true });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveCount(1);
    await expect(heading).toHaveCSS('font-weight', '700');
    const fontSize = await heading.evaluate((el) => getComputedStyle(el).fontSize);
    expect(Number.parseFloat(fontSize)).toBeGreaterThanOrEqual(28);
  }
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
    .getByRole('button', { name: /Clair|Light/ })
    .first()
    .click();
  await page.getByRole('button', { name: /^(Sombre|Dark)$/ }).click();
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
  await expect(preview.getByText('"Clear"')).toHaveCount(0);
  await expect(preview.getByText('Show password')).toHaveCount(0);
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
  await expect(preview.getByText('"Effacer"')).toBeVisible();

  await page.goto('/?path=/docs/components-button--docs');
  await expect(preview.getByText(/Emphase/)).toBeVisible();
  await expect(preview.getByText('Stretch to the container width.')).toHaveCount(0);
  await expect(preview.getByText('high emphasis')).toHaveCount(0);
  await expect(preview.getByText('medium emphasis')).toHaveCount(0);
  await expect(preview.getByText('low emphasis')).toHaveCount(0);

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

test('Storybook serves the Checkbox story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-checkbox--default');
  await expect(
    page.getByRole('checkbox', { name: 'Recevoir les notifications' }),
  ).toBeVisible();
});

test('Checkbox group story exposes a labelled fieldset', async ({ page }) => {
  await page.goto('/iframe.html?id=components-checkbox--group');
  await expect(page.getByRole('group', { name: 'Canaux de notification' })).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Email' })).toBeChecked();
  await page.getByRole('checkbox', { name: 'SMS' }).click();
  await expect(page.getByRole('checkbox', { name: 'SMS' })).toBeChecked();
});

test('Checkbox invalid story exposes aria-invalid', async ({ page }) => {
  await page.goto('/iframe.html?id=components-checkbox--invalid');
  const input = page.getByRole('checkbox', { name: 'J’accepte les conditions' });
  await expect(input).toHaveAttribute('aria-invalid', 'true');
  await expect(page.getByText('Ce champ est requis.')).toBeVisible();
});

test('Storybook serves the Radio story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-radio--default');
  await expect(page.getByRole('group', { name: 'Formule' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Mensuel' })).toBeChecked();
  await page.getByRole('radio', { name: 'Annuel' }).click();
  await expect(page.getByRole('radio', { name: 'Annuel' })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Mensuel' })).not.toBeChecked();
});

test('Storybook serves the Switch story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-switch--default');
  const control = page.getByRole('switch', { name: 'Mode compact' });
  await expect(control).toBeVisible();
  await expect(control).toHaveAttribute('aria-checked', 'false');
  await control.click();
  await expect(control).toHaveAttribute('aria-checked', 'true');
});

test('Switch on story is checked', async ({ page }) => {
  await page.goto('/iframe.html?id=components-switch--on');
  await expect(page.getByRole('switch', { name: 'Mode compact' })).toBeChecked();
});

test('component docs use Checkbox, Radio, and Switch titles', async ({ page }) => {
  await page.goto('/?path=/docs/components-checkbox--docs');
  await expect(page).toHaveTitle('Checkbox | Dudalo Design System');
  await page.goto('/?path=/docs/components-radio--docs');
  await expect(page).toHaveTitle('Radio | Dudalo Design System');
  await page.goto('/?path=/docs/components-switch--docs');
  await expect(page).toHaveTitle('Switch | Dudalo Design System');
});

test('French Checkbox docs do not leak English headings', async ({ page }) => {
  await page.goto('/?path=/docs/components-checkbox--docs');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(
    preview.getByRole('heading', { name: 'États particuliers' }),
  ).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Accessibilité' })).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Special states' })).toHaveCount(0);
  await expect(preview.getByText('Receive notifications')).toHaveCount(0);
});

test('Checkbox docs Show code imports Checkbox from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-checkbox--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { Checkbox } from 'd-ui'");
  await expect(source).toContainText('<Checkbox');
  await expect(source).not.toContainText('ChannelsGroup');
});

test('Radio docs Show code imports Radio from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-radio--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { Radio, RadioGroup } from 'd-ui'");
  await expect(source).toContainText('<RadioGroup');
  await expect(source).not.toContainText('PlanGroup');
});

test('Switch docs Show code imports Switch from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-switch--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { Switch } from 'd-ui'");
  await expect(source).toContainText('<Switch');
  await expect(source).not.toContainText('ControlledSwitch');
});

test('French selection Properties tables use French descriptions', async ({ page }) => {
  const preview = page.frameLocator('#storybook-preview-iframe');
  await page.goto('/?path=/docs/components-checkbox--docs');
  await expect(preview.getByText(/Libellé visible à côté du contrôle/)).toBeVisible();
  await page.goto('/?path=/docs/components-switch--docs');
  await expect(preview.getByText(/Pose `aria-checked`/)).toBeVisible();
});

test('English globals switch example copy on every component canvas', async ({
  page,
}) => {
  const cases = [
    { id: 'components-button--high-emphasis', en: 'Default', fr: 'Par défaut' },
    {
      id: 'components-textinput--default',
      en: 'Text field label',
      fr: 'Libellé du champ',
    },
    {
      id: 'components-textarea--default',
      en: 'Text area label',
      fr: 'Libellé de la zone de texte',
    },
    { id: 'components-timeago--default', en: 'Submitted', fr: 'Soumis' },
    {
      id: 'components-checkbox--default',
      en: 'Receive notifications',
      fr: 'Recevoir les notifications',
    },
    { id: 'components-radio--default', en: 'Monthly', fr: 'Mensuel' },
    { id: 'components-switch--default', en: 'Compact mode', fr: 'Mode compact' },
    { id: 'components-tooltip--default', en: 'Help', fr: 'Aide' },
    { id: 'components-popover--default', en: 'Open', fr: 'Ouvrir' },
    { id: 'components-emojipopover--default', en: 'React', fr: 'Réagir' },
    { id: 'components-select--default', en: 'Country', fr: 'Pays' },
    { id: 'components-combobox--default', en: 'City', fr: 'Ville' },
  ] as const;
  for (const { id, en, fr } of cases) {
    await page.goto(`/iframe.html?id=${id}&globals=locale:en`);
    await expect(page.getByText(en, { exact: true }).first()).toBeVisible();
    await expect(page.getByText(fr, { exact: true })).toHaveCount(0);
  }
});

test('Langue toolbar remounts docs canvases in English', async ({ page }) => {
  await page.goto('/?path=/docs/components-button--docs');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.getByRole('heading', { name: 'Forte emphase' })).toBeVisible();
  await expect(preview.getByRole('button', { name: 'Par défaut' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Forte emphase' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Clair' })).toBeVisible();
  await page.getByRole('button', { name: 'Français' }).click();
  await page.getByRole('button', { name: /English/ }).click();
  await expect(preview.getByRole('heading', { name: 'High emphasis' })).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Forte emphase' })).toHaveCount(0);
  await expect(preview.getByRole('button', { name: 'Default' }).first()).toBeVisible();
  await expect(preview.getByRole('button', { name: 'Par défaut' })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'High emphasis' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Light' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Clair' })).toHaveCount(0);
});

test('component docs use Tooltip and Popover titles', async ({ page }) => {
  await page.goto('/?path=/docs/components-tooltip--docs');
  await expect(page).toHaveTitle('Tooltip | Dudalo Design System');
  await page.goto('/?path=/docs/components-popover--docs');
  await expect(page).toHaveTitle('Popover | Dudalo Design System');
  await page.goto('/?path=/docs/components-emojipopover--docs');
  await expect(page).toHaveTitle('EmojiPopover | Dudalo Design System');
});

test('Storybook serves the Tooltip story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-tooltip--default');
  const trigger = page.getByRole('button', { name: 'Aide' });
  await expect(trigger).toBeVisible();
  await trigger.hover();
  const tip = page.getByRole('tooltip');
  await expect(tip).toBeVisible();
  await expect(tip).toHaveText('Enregistrer (⌘S)');
  await expect(tip.locator('[data-d-ui-tooltip-arrow]')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(tip).toHaveCount(0);
});

test('Tooltip collision story keeps the tooltip in the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 400, height: 280 });
  await page.goto('/iframe.html?id=components-tooltip--collision');
  await page.getByRole('button', { name: 'Aide' }).hover();
  const tip = page.getByRole('tooltip');
  await expect(tip).toBeVisible();
  const box = await tip.boundingBox();
  expect(box).toBeTruthy();
  expect(box?.y ?? -1).toBeGreaterThanOrEqual(0);
  expect((box?.y ?? 0) + (box?.height ?? 0)).toBeLessThanOrEqual(280);
});

test('Storybook serves the Popover story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-popover--default');
  const trigger = page.getByRole('button', { name: 'Ouvrir' });
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await trigger.click();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  const panel = page.getByRole('dialog', { name: 'Options' });
  await expect(panel).toBeVisible();
  await expect(panel.locator('[data-d-ui-popover-arrow]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Confirmer' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog', { name: 'Options' })).toHaveCount(0);
});

test('Popover placement story shows directed sides with arrows', async ({ page }) => {
  await page.goto('/iframe.html?id=components-popover--placement');
  await expect(page.getByRole('region', { name: 'Haut' })).toBeVisible();
  await expect(page.getByRole('region', { name: 'Bas' })).toBeVisible();
  await expect(page.getByRole('region', { name: 'Gauche' })).toBeVisible();
  await expect(page.getByRole('region', { name: 'Droite' })).toBeVisible();
  await expect(page.locator('[data-d-ui-popover-arrow]')).toHaveCount(4);
});

test('Popover alignments story opens start and end along the top', async ({ page }) => {
  await page.goto('/iframe.html?id=components-popover--alignments');
  const start = page.getByRole('region', { name: 'Haut début' });
  const end = page.getByRole('region', { name: 'Haut fin' });
  await expect(start).toBeVisible();
  await expect(end).toBeVisible();
  await expect(start.locator('[data-d-ui-popover-arrow]')).toBeVisible();
  await expect(end.locator('[data-d-ui-popover-arrow]')).toBeVisible();
});

test('French Popover docs do not leak English alignment headings', async ({ page }) => {
  await page.goto('/?path=/docs/components-popover--docs');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.getByRole('heading', { name: 'Alignements' })).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Alignments' })).toHaveCount(0);
  await expect(preview.getByText('Aligned to the start of the top side')).toHaveCount(0);
});

test('French Tooltip docs do not leak English headings', async ({ page }) => {
  await page.goto('/?path=/docs/components-tooltip--docs');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.getByRole('heading', { name: 'Accessibilité' })).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Special states' })).toHaveCount(0);
  await expect(preview.getByText('Save (⌘S)')).toHaveCount(0);
});

test('Tooltip docs Show code imports Tooltip from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-tooltip--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { Button, Tooltip } from 'd-ui'");
  await expect(source).toContainText('<Tooltip');
  await expect(source).not.toContainText('ControlledTooltip');
});

test('Popover docs Show code imports Popover from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-popover--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { Button, Popover } from 'd-ui'");
  await expect(source).toContainText('<Popover');
  await expect(source).not.toContainText('ControlledPopover');
  await expect(source).not.toContainText('DirectedPopover');
});

test('Storybook serves the EmojiPopover story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-emojipopover--default');
  await expect(page.getByRole('button', { name: 'Réagir' })).toBeVisible();
  const bar = page.getByRole('dialog', { name: 'Réactions' });
  await expect(bar).toBeVisible();
  await expect(bar.getByRole('button')).toHaveCount(9);
  await page.getByRole('button', { name: 'Pouce en l’air' }).click();
  await expect(bar).toHaveCount(0);
});

test('French EmojiPopover docs do not leak English reaction names', async ({ page }) => {
  await page.goto('/?path=/docs/components-emojipopover--docs');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.getByRole('heading', { name: 'EmojiPopover' })).toBeVisible();
  await expect(preview.getByText('Sparkling heart')).toHaveCount(0);
  await expect(preview.getByText('Thumbs up')).toHaveCount(0);
});

test('EmojiPopover docs Show code imports EmojiPopover from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-emojipopover--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { Button, EmojiPopover } from 'd-ui'");
  await expect(source).toContainText('<EmojiPopover');
  await expect(source).not.toContainText('SmileIcon');
});

test('Storybook serves the Select story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-select--default');
  const control = page.getByRole('combobox', { name: 'Pays' });
  await expect(control).toBeVisible();
  await expect(control).toHaveAttribute('aria-expanded', 'false');
  await control.click();
  await expect(control).toHaveAttribute('aria-expanded', 'true');
  const list = page.getByRole('listbox', { name: 'Pays' });
  await expect(list).toBeVisible();
  await page.getByRole('option', { name: 'Belgique' }).click();
  await expect(list).toHaveCount(0);
  await expect(control).toContainText('Belgique');
});

test('Storybook serves the Combobox story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-combobox--default');
  const control = page.getByRole('combobox', { name: 'Ville' });
  await expect(control).toBeVisible();
  await expect(control).toHaveAttribute('placeholder', 'Rechercher');
  const toggle = page.getByRole('button', { name: 'Afficher les suggestions' });
  await expect(toggle).toHaveAttribute('tabindex', '-1');
  await toggle.click();
  const list = page.getByRole('listbox', { name: 'Ville' });
  await expect(list).toBeVisible();
  await toggle.click();
  await expect(list).toHaveCount(0);
  await control.click();
  await control.fill('ly');
  await expect(list.getByRole('option', { name: 'Lyon' })).toBeVisible();
  await expect(list.getByRole('option', { name: 'Paris' })).toHaveCount(0);
  await page.keyboard.press('Enter');
  await expect(list).toHaveCount(0);
  await expect(control).toHaveValue('Lyon');
  await expect(page.getByRole('button', { name: 'Effacer' })).toBeVisible();
});

test('Storybook serves the Combobox multiple story', async ({ page }) => {
  await page.goto('/iframe.html?id=components-combobox--multiple');
  await expect(page.getByRole('list', { name: 'Villes' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Paris — Retirer' })).toBeVisible();
  await page.getByRole('button', { name: 'Afficher les suggestions' }).click();
  const list = page.getByRole('listbox', { name: 'Villes' });
  await expect(list).toHaveAttribute('aria-multiselectable', 'true');
  await page.getByRole('option', { name: 'Marseille' }).click();
  await expect(list).toBeVisible();
  await expect(page.getByRole('button', { name: 'Marseille — Retirer' })).toBeVisible();
});

test('Storybook serves Combobox custom rendering, list states, and filters', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=components-combobox--custom');
  await expect(page.getByRole('button', { name: 'Lyon — Retirer' })).toBeVisible();
  await page.getByRole('button', { name: 'Afficher les suggestions' }).click();
  await expect(page.getByRole('group', { name: 'France' })).toBeVisible();
  await expect(page.getByRole('option', { name: /Paris/ })).toContainText('Capitale');
  const control = page.getByRole('combobox', { name: 'Villes' });
  await control.fill('Nantes');
  await page.getByRole('button', { name: 'Créer « Nantes »' }).click();
  await expect(page.getByRole('button', { name: 'Nantes — Retirer' })).toBeVisible();

  await page.goto('/iframe.html?id=components-combobox--loading');
  await expect(page.getByRole('listbox', { name: 'Ville' })).toHaveAttribute(
    'aria-busy',
    'true',
  );
  await expect(page.getByRole('option')).toHaveCount(0);
  await expect(page.getByText('Chargement')).toBeAttached();

  await page.goto('/iframe.html?id=components-combobox--loading-more');
  await expect(page.getByRole('option', { name: 'Paris' })).toBeVisible();
  await expect(page.getByRole('listbox', { name: 'Ville' })).toHaveAttribute(
    'aria-busy',
    'true',
  );

  await page.goto('/iframe.html?id=components-combobox--empty');
  await expect(page.getByText('Aucune option')).toBeVisible();

  await page.goto('/iframe.html?id=components-combobox--list-error');
  const alert = page.getByRole('alert');
  await expect(alert).toContainText('Impossible de charger les options');
  await expect(alert).toContainText('Réessayez.');

  await page.goto('/iframe.html?id=components-combobox--filter-types');
  await expect(page.getByRole('combobox', { name: 'Sans saisie' })).toHaveAttribute(
    'readonly',
    '',
  );
});

test('French Select docs do not leak English headings', async ({ page }) => {
  await page.goto('/?path=/docs/components-select--docs');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.getByRole('heading', { name: 'Groupes d’options' })).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Option groups' })).toHaveCount(0);
  await expect(preview.getByText('Country of residence.')).toHaveCount(0);
});

test('French Combobox docs do not leak English headings', async ({ page }) => {
  await page.goto('/?path=/docs/components-combobox--docs');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(
    preview.getByRole('heading', { level: 1, name: 'Combobox' }),
  ).toBeVisible();
  await expect(
    preview.getByRole('heading', { name: 'Sélection multiple' }),
  ).toBeVisible();
  await expect(
    preview.getByRole('heading', { name: 'Rendu personnalisé' }),
  ).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'États de liste' })).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Types de filtre' })).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'État vide' })).toBeVisible();
  await expect(preview.getByRole('heading', { name: 'Empty state' })).toHaveCount(0);
  await expect(preview.getByRole('heading', { name: 'Multiple selection' })).toHaveCount(
    0,
  );
  await expect(preview.getByText('No options')).toHaveCount(0);
});

test('Select docs Show code imports Select from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-select--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { useState } from 'react'");
  await expect(source).toContainText("import { Select } from 'd-ui'");
  await expect(source).toContainText('<Select');
  await expect(source).not.toContainText('ControlledSelect');
});

test('Combobox docs Show code imports Combobox from d-ui', async ({ page }) => {
  await page.goto('/?path=/docs/components-combobox--docs');
  const { source } = await docsSource(page);
  await expect(source).toContainText("import { Combobox } from 'd-ui'");
  await expect(source).toContainText('<Combobox');
  await expect(source).not.toContainText('ControlledCombobox');
});
