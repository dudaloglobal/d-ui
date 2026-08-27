import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('favicon', () => {
  it('fills the square with brand green and does not round the corners', () => {
    const svg = readFileSync(
      join(process.cwd(), '.storybook/public/favicon.svg'),
      'utf8',
    );
    expect(svg).toContain('#0f5c4c');
    expect(svg).toMatch(/<rect\s+width="32"\s+height="32"\s+fill="#0f5c4c"/);
    expect(svg).not.toMatch(/\brx=/);
  });
});
