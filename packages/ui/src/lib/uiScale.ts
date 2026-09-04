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

/**
 * Contour de la même teinte.
 *
 * `neutral` suit `uiColorInkClass` et prend l'encre du texte, **pas**
 * `border-border` : ce jeton est celui des éléments inertes, et un composant
 * qui l'emploierait pour marquer un état actif rendrait cet état indiscernable
 * de son voisin au repos.
 */
export const uiColorBorderClass: Record<UiColor, string> = {
  brand: 'border-brand',
  success: 'border-success',
  warning: 'border-warning',
  danger: 'border-danger',
  info: 'border-info',
  neutral: 'border-fg',
};

/**
 * Fond teinté discret. `neutral` ne rend rien : c'est au fond par défaut de
 * s'appliquer.
 *
 * `percent` est le poids de la teinte dans le mélange. 14 % suffit derrière du
 * texte, qu'il ne faut pas gêner ; un aplat sans texte a besoin de plus pour
 * qu'on voie qu'il est teinté du tout.
 */
export function uiColorSoftStyle(
  color: UiColor,
  percent = 14,
): { backgroundColor: string } | undefined {
  if (color === 'neutral') return undefined;
  return {
    backgroundColor: `color-mix(in srgb, var(${uiColorToken[color]}) ${percent}%, var(--d-ui-color-bg))`,
  };
}
