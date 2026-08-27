import { describe, expect, it } from 'vitest';
import { dudaloDocumentTitle } from '../.storybook/page-title';

describe('dudaloDocumentTitle', () => {
  it('uses the last story kind segment as the component name', () => {
    expect(dudaloDocumentTitle('Components/TextInput')).toBe(
      'TextInput | Dudalo Design System',
    );
    expect(dudaloDocumentTitle('Components/Button')).toBe(
      'Button | Dudalo Design System',
    );
    expect(dudaloDocumentTitle('Introduction')).toBe(
      'Introduction | Dudalo Design System',
    );
  });

  it('parses Storybook’s default manager title', () => {
    expect(
      dudaloDocumentTitle(
        undefined,
        'Components / TextInput - Docs ⋅ Storybook',
      ),
    ).toBe('TextInput | Dudalo Design System');
    expect(
      dudaloDocumentTitle(
        undefined,
        'Components / TimeAgo - Par défaut ⋅ Storybook',
      ),
    ).toBe('TimeAgo | Dudalo Design System');
  });

  it('falls back to the brand when nothing is selected', () => {
    expect(dudaloDocumentTitle()).toBe('Dudalo Design System');
    expect(dudaloDocumentTitle(undefined, 'Dudalo Design System')).toBe(
      'Dudalo Design System',
    );
  });
});
