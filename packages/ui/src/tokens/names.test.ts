import { describe, expect, it } from 'vitest';
import { brandTokensToStyle, tokenNames } from './names';

describe('tokenNames', () => {
  it('exposes CSS variable names, not hex values', () => {
    expect(tokenNames.colorBrand).toBe('--d-ui-color-brand');
    expect(tokenNames.colorBrand.startsWith('--d-ui-')).toBe(true);
  });

  it('maps brand overrides onto CSS variables', () => {
    expect(brandTokensToStyle({ brand: '#123456' })).toEqual({
      '--d-ui-color-brand': '#123456',
    });
  });
});
