import { describe, expect, it } from 'vitest';
import {
  composite,
  contrastInk,
  formatCssColor,
  parseCssColor,
  shade,
  tint,
} from './ColorSwatches';

describe('formatCssColor', () => {
  it('turns rgb into a six-digit hex', () => {
    expect(formatCssColor('rgb(15, 92, 76)')).toBe('#0f5c4c');
  });

  it('appends opacity like LumApps ramps', () => {
    expect(formatCssColor('rgba(15, 92, 76, 0.4)')).toBe('#0f5c4c40%');
  });

  it('turns space-separated rgb into hex', () => {
    expect(formatCssColor('rgb(15 92 76)')).toBe('#0f5c4c');
    expect(formatCssColor('rgb(15 92 76 / 40%)')).toBe('#0f5c4c40%');
  });

  it('turns color(srgb) from color-mix into hex', () => {
    expect(formatCssColor('color(srgb 0.0588235 0.360784 0.298039)')).toBe('#0f5c4c');
    expect(formatCssColor('color(srgb 0.0588235 0.360784 0.298039 / 0.4)')).toBe(
      '#0f5c4c40%',
    );
  });
});

describe('parseCssColor', () => {
  it('reads alpha from color(srgb)', () => {
    expect(parseCssColor('color(srgb 1 1 1 / 0.1)')?.a).toBeCloseTo(0.1);
  });
});

describe('contrastInk', () => {
  it('picks white on dark teal and black on yellow', () => {
    expect(contrastInk(15, 92, 76)).toBe('#ffffff');
    expect(contrastInk(255, 196, 37)).toBe('#000000');
  });
});

describe('composite', () => {
  it('blends a transparent tint onto the page background', () => {
    const mixed = composite(
      { r: 15, g: 92, b: 76, a: 0.4 },
      { r: 255, g: 255, b: 255, a: 1 },
    );
    expect(mixed.r).toBeGreaterThan(15);
    expect(mixed.r).toBeLessThan(255);
  });
});

describe('ramp helpers', () => {
  it('mixes a token toward transparent or black', () => {
    expect(tint('--d-ui-color-brand', 80)).toContain('80%');
    expect(shade('--d-ui-color-brand', 72)).toContain('black');
  });
});
