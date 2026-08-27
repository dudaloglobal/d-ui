import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buttonCopy, inputCopy, timeAgoCopy } from '../.storybook/docs-locale';

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
  });
});
