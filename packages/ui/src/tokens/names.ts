/** Public CSS custom property names. Source of truth: `styles/tokens.css`. */
export const tokenNames = {
  colorBg: '--d-ui-color-bg',
  colorFg: '--d-ui-color-fg',
  colorFgMuted: '--d-ui-color-fg-muted',
  colorFgDisabled: '--d-ui-color-fg-disabled',
  colorBrand: '--d-ui-color-brand',
  colorBrandHover: '--d-ui-color-brand-hover',
  colorOnBrand: '--d-ui-color-on-brand',
  colorSurfaceMuted: '--d-ui-color-surface-muted',
  colorSurfaceHover: '--d-ui-color-surface-hover',
  colorField: '--d-ui-color-field',
  colorFieldHover: '--d-ui-color-field-hover',
  colorBorder: '--d-ui-color-border',
  colorBorderSubtle: '--d-ui-color-border-subtle',
  colorFocus: '--d-ui-color-focus',
  colorLink: '--d-ui-color-link',
  colorLinkVisited: '--d-ui-color-link-visited',
  colorDanger: '--d-ui-color-danger',
  colorOnDanger: '--d-ui-color-on-danger',
  colorWarning: '--d-ui-color-warning',
  colorOnWarning: '--d-ui-color-on-warning',
  colorSuccess: '--d-ui-color-success',
  colorOnSuccess: '--d-ui-color-on-success',
  colorInfo: '--d-ui-color-info',
  colorOnInfo: '--d-ui-color-on-info',
  fontSans: '--d-ui-font-sans',
  radiusMd: '--d-ui-radius-md',
  zOverlay: '--d-ui-z-overlay',
  space1: '--d-ui-space-1',
  space2: '--d-ui-space-2',
  space3: '--d-ui-space-3',
  space4: '--d-ui-space-4',
  shadowFocus: '--d-ui-shadow-focus',
} as const;

export type TokenName = (typeof tokenNames)[keyof typeof tokenNames];

export type BrandTokens = Partial<{
  brand: string;
  brandHover: string;
  onBrand: string;
  focus: string;
}>;

const brandToCss: Record<keyof BrandTokens, TokenName> = {
  brand: tokenNames.colorBrand,
  brandHover: tokenNames.colorBrandHover,
  onBrand: tokenNames.colorOnBrand,
  focus: tokenNames.colorFocus,
};

export function brandTokensToStyle(
  tokens: BrandTokens | undefined,
): Record<string, string> | undefined {
  if (!tokens) {
    return undefined;
  }
  const style: Record<string, string> = {};
  for (const key of Object.keys(brandToCss) as Array<keyof BrandTokens>) {
    const value = tokens[key];
    if (value) {
      style[brandToCss[key]] = value;
    }
  }
  return Object.keys(style).length > 0 ? style : undefined;
}
