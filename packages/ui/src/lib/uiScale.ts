/** Échelle de taille partagée (Avatar, Badge, Card). */
export const UI_SIZES = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'] as const;
export type UiSize = (typeof UI_SIZES)[number];

/** Couleur sémantique (tokens). La couleur seule ne porte pas le sens (1.4.1). */
export const UI_COLORS = [
  'brand',
  'success',
  'warning',
  'danger',
  'info',
  'neutral',
] as const;
export type UiColor = (typeof UI_COLORS)[number];

export const uiColorToken: Record<Exclude<UiColor, 'neutral'>, string> = {
  brand: '--d-ui-color-brand',
  success: '--d-ui-color-success',
  warning: '--d-ui-color-warning',
  danger: '--d-ui-color-danger',
  info: '--d-ui-color-info',
};

export const uiColorSolidClass: Record<UiColor, string> = {
  brand: 'bg-brand text-on-brand',
  success: 'bg-success text-on-success',
  warning: 'bg-warning text-on-warning',
  danger: 'bg-danger text-on-danger',
  info: 'bg-info text-on-info',
  neutral: 'bg-surface-muted text-fg',
};

export const uiColorInkClass: Record<UiColor, string> = {
  brand: 'text-brand',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
  neutral: 'text-fg',
};

export function uiColorSoftStyle(
  color: UiColor,
): { backgroundColor: string } | undefined {
  if (color === 'neutral') return undefined;
  return {
    backgroundColor: `color-mix(in srgb, var(${uiColorToken[color]}) 14%, var(--d-ui-color-bg))`,
  };
}
