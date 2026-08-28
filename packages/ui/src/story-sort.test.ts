import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { sortSidebarStories } from '../.storybook/story-sort';

describe('sortSidebarStories', () => {
  it('keeps Introduction before Components', () => {
    expect(
      sortSidebarStories({ title: 'Introduction' }, { title: 'Components/Button' }),
    ).toBeLessThan(0);
    expect(
      sortSidebarStories({ title: 'Components/Button' }, { title: 'Introduction' }),
    ).toBeGreaterThan(0);
  });

  it('sorts Components alphabetically by English title', () => {
    expect(
      sortSidebarStories(
        { title: 'Components/Calendar' },
        { title: 'Components/Button' },
      ),
    ).toBeGreaterThan(0);
    expect(
      sortSidebarStories(
        { title: 'Components/Button' },
        { title: 'Components/Calendar' },
      ),
    ).toBeLessThan(0);
    expect(
      sortSidebarStories(
        { title: 'Components/Textarea' },
        { title: 'Components/TextInput' },
      ),
    ).toBeLessThan(0);
  });

  it('does not reorder stories inside the same component', () => {
    expect(
      sortSidebarStories({ title: 'Components/Button' }, { title: 'Components/Button' }),
    ).toBe(0);
  });

  it('inlines storySort in preview.tsx for the Storybook indexer', () => {
    const text = readFileSync(join(process.cwd(), '.storybook/preview.tsx'), 'utf8');
    expect(text).toMatch(/storySort:\s*\(a,\s*b\)\s*=>/);
    expect(text).not.toContain('storySort: sortSidebarStories');
  });
});
