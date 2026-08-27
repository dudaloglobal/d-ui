import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('favicon', () => {
  it('is the doughnut emoji on a white circle', () => {
    const svg = readFileSync(
      join(process.cwd(), '.storybook/public/favicon.svg'),
      'utf8',
    );
    expect(svg).toContain('🍩');
    expect(svg).toMatch(/<circle\b[^>]*\bfill="#ffffff"/);
    expect(svg).not.toContain('#0f5c4c');
    expect(svg).not.toMatch(/<rect/);
    expect(svg).not.toMatch(/M10 7h6\.1c5\.15/);
  });
});
