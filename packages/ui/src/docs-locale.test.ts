import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { collectDocsCopyLeaves, docsCopy, docsString } from '../.storybook/docs-copy';
import {
  buttonCopy,
  inputCopy,
  localeFromSearch,
  selectionCopy,
  storyNameEn,
  storyLabel,
  toolbarLabel,
  timeAgoCopy,
  overlayCopy,
  selectCopy,
} from '../.storybook/docs-locale';

/** English MDX headings that must not appear: docs default language is French. */
const ENGLISH_HEADINGS = [
  'Accessibility concerns',
  'Clearable',
  'Date values',
  'Disabled',
  'Do',
  "Don't",
  'Don’t',
  'Full width',
  'Helper',
  'High emphasis',
  'Icon',
  'Invalid',
  'Live updates',
  'Loading',
  'Locale',
  'Low emphasis',
  'Max length',
  'Medium emphasis',
  'Multiline',
  'Number',
  'Password',
  'Past and future',
  'Placeholder',
  'Prefix and suffix',
  'Properties',
  'Required',
  'Size',
  'Sizes',
  'Small size',
  'Special states',
  'Toggled button',
  'Valid',
  'Controlled',
  'Collision',
  'Portal',
  'Focus trap',
  'Alignments',
  'Reactions',
  'Empty state',
  'Disabled options',
  'Option groups',
  'Single selection',
  'Multiple selection',
  'Custom rendering',
  'List states',
  'Filter types',
  'Loading more',
  'Input options',
];

function collectMdx(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) out.push(...collectMdx(path));
    else if (name.endsWith('.mdx')) out.push(path);
  }
  return out;
}

function keysOf(value: object): string[] {
  return Object.keys(value).sort();
}

describe('docs locale', () => {
  it('keeps the same copy keys in French and English', () => {
    expect(keysOf(buttonCopy('fr'))).toEqual(keysOf(buttonCopy('en')));
    expect(keysOf(inputCopy('fr'))).toEqual(keysOf(inputCopy('en')));
    expect(keysOf(timeAgoCopy('fr'))).toEqual(keysOf(timeAgoCopy('en')));
    expect(keysOf(selectionCopy('fr'))).toEqual(keysOf(selectionCopy('en')));
    expect(keysOf(overlayCopy('fr'))).toEqual(keysOf(overlayCopy('en')));
    expect(keysOf(selectCopy('fr'))).toEqual(keysOf(selectCopy('en')));
  });

  it('writes MDX section headings in French', () => {
    const files = collectMdx(join(process.cwd(), 'src'));
    expect(files.length).toBeGreaterThan(0);
    const heading = new RegExp(
      `^#{1,6}\\s+(?:${ENGLISH_HEADINGS.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\s*$`,
      'm',
    );
    for (const file of files) {
      const text = readFileSync(file, 'utf8');
      const match = text.match(heading);
      expect(
        match,
        `${file} still has English heading "${match?.[0]?.trim()}"`,
      ).toBeNull();
    }
  });

  it('keeps ArgTypes descriptions in French', () => {
    const text = readFileSync(join(process.cwd(), '.storybook/arg-types.ts'), 'utf8');
    for (const phrase of [
      'Emphasis: primary',
      'Stretch to the container width.',
      'Visible label above the field',
      'Helper text under the field',
    ]) {
      expect(text, `arg-types.ts still has "${phrase}"`).not.toContain(phrase);
    }
    expect(text).toContain('Emphase : `primary`');
    expect(text).toContain('Libellé visible au-dessus du champ');
    expect(text).toContain('`"Effacer"`');
    expect(text).not.toContain('"Clear"');
    expect(text).not.toContain('Show password');
    expect(text).not.toContain('character remaining');
  });

  it('keeps MDX prose free of leftover English', () => {
    const files = collectMdx(join(process.cwd(), 'src'));
    const phrases = [
      'high emphasis',
      'medium emphasis',
      'low emphasis',
      'fort emphasis',
      '**Toggle**',
      'on / off',
      'Tree checkbox',
      'Segmented control',
      'Accessibility concerns',
    ];
    for (const file of files) {
      const text = readFileSync(file, 'utf8');
      for (const phrase of phrases) {
        expect(text, `${file} still has "${phrase}"`).not.toContain(phrase);
      }
    }
  });

  it('pairs French and English on every docs-copy leaf', () => {
    const leaves = collectDocsCopyLeaves(docsCopy);
    expect(leaves.length).toBeGreaterThan(50);
    for (const { path, fr, en } of leaves) {
      expect(fr.trim(), path).not.toBe('');
      expect(en.trim(), path).not.toBe('');
    }
    expect(docsString(docsCopy, 'button.high', 'fr')).toBe('Forte emphase');
    expect(docsString(docsCopy, 'button.high', 'en')).toBe('High emphasis');
  });

  it('maps every story name to English for the Langue toolbar', () => {
    const stories: string[] = [];
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) walk(path);
        else if (name.endsWith('.stories.tsx')) stories.push(path);
      }
    };
    walk(join(process.cwd(), 'src'));
    const names = new Set<string>();
    for (const file of stories) {
      const text = readFileSync(file, 'utf8');
      for (const match of text.matchAll(/name:\s*'([^']+)'/g)) {
        const name = match[1];
        if (name) names.add(name);
      }
    }
    expect(names.size).toBeGreaterThan(0);
    for (const name of names) {
      expect(storyNameEn[name], `missing storyNameEn for "${name}"`).toBeTruthy();
    }
    expect(storyLabel('Forte emphase', 'en')).toBe('High emphasis');
    expect(storyLabel('High emphasis', 'fr')).toBe('Forte emphase');
    expect(storyLabel('Par défaut', 'fr')).toBe('Par défaut');
  });

  it('translates the Theme toolbar with Langue', () => {
    expect(toolbarLabel('Clair', 'en')).toBe('Light');
    expect(toolbarLabel('Sombre', 'en')).toBe('Dark');
    expect(toolbarLabel('Thème', 'en')).toBe('Theme');
    expect(toolbarLabel('Light', 'fr')).toBe('Clair');
    expect(toolbarLabel('Dark', 'fr')).toBe('Sombre');
    expect(toolbarLabel('Clair', 'fr')).toBe('Clair');
    expect(storyLabel('Langue', 'en')).toBe('Locale');
    expect(toolbarLabel('Langue', 'en')).toBe('Language');
  });

  it('wires every MDX docs page to docs-i18n', () => {
    const files = collectMdx(join(process.cwd(), 'src'));
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const text = readFileSync(file, 'utf8');
      expect(text, `${file} does not import docs-i18n`).toContain('docs-i18n');
    }
  });

  it('parses locale from the Storybook globals search param', () => {
    expect(localeFromSearch('?globals=locale:en')).toBe('en');
    expect(localeFromSearch('?globals=theme:dark;locale:en')).toBe('en');
    expect(localeFromSearch('?globals=locale:fr')).toBe('fr');
    expect(localeFromSearch('?id=components-button--docs')).toBe('fr');
  });

  it('wires every story file to the Langue toolbar', () => {
    const stories: string[] = [];
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) walk(path);
        else if (name.endsWith('.stories.tsx')) stories.push(path);
      }
    };
    walk(join(process.cwd(), 'src'));
    expect(stories.length).toBeGreaterThan(0);
    for (const file of stories) {
      const text = readFileSync(file, 'utf8');
      expect(text, `${file} does not read globals.locale`).toContain(
        'docsLocale(globals.locale)',
      );
    }
  });
});
