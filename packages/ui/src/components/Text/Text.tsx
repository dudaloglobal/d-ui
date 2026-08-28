import type { CSSProperties, ElementType, HTMLAttributes } from 'react';
import { cx } from '../../lib/cx';

export type TextSize = 'body' | 'body-sm' | 'caption';
export type TextTone = 'default' | 'muted' | 'danger';
export type TextWeight = 'regular' | 'medium' | 'semibold';
export type TextElement = 'p' | 'span' | 'div' | 'label' | 'legend';

/** Familles de la page Color. `N` est le cran courant. */
export type TextColor =
  'brand' | 'dark' | 'light' | 'warning' | 'danger' | 'success' | 'info' | 'violet';

export type TextColorVariant =
  'D2' | 'D1' | 'N' | 'L1' | 'L2' | 'L3' | 'L4' | 'L5' | 'L6';

/** `true` : une ligne. `{ lines: n }` : n lignes. */
export type TextTruncate = boolean | { lines: number };

export const TEXT_COLORS: readonly TextColor[] = [
  'brand',
  'dark',
  'light',
  'warning',
  'danger',
  'success',
  'info',
  'violet',
];

export const TEXT_COLOR_VARIANTS: readonly TextColorVariant[] = [
  'D2',
  'D1',
  'N',
  'L1',
  'L2',
  'L3',
  'L4',
  'L5',
  'L6',
];

export type TextProps = Omit<HTMLAttributes<HTMLElement>, 'color'> & {
  /** Élément rendu. `p` par défaut — passer `span` pour du texte en ligne. */
  as?: TextElement;
  size?: TextSize;
  tone?: TextTone;
  weight?: TextWeight;
  /**
   * Couleur de la palette (page Color). Remplace l’attribut HTML `color`
   * et, si posée, remplace `tone`. `light` se lit sur un fond `fg`.
   */
  color?: TextColor;
  /** Cran de la rampe. `N` par défaut. Les crans L sont des teintes, pas du texte courant. */
  colorVariant?: TextColorVariant;
  /** Empêche le retour à la ligne. Un parent `overflow-hidden` coupe sans ellipse. */
  noWrap?: boolean;
  /**
   * Coupe avec une ellipse. `true` : une ligne (active `noWrap`).
   * `{ lines: n }` : n lignes (`n` > 1).
   */
  truncate?: TextTruncate;
};

const sizeClass: Record<TextSize, string> = {
  body: 'text-base',
  'body-sm': 'text-sm',
  caption: 'text-xs',
};

/**
 * Le ton est une prop, jamais un `className`.
 *
 * `cx()` ne résout pas les conflits entre classes Tailwind : passer
 * `className="text-danger"` laisserait `text-fg` gagner selon l'ordre du CSS
 * généré. Une couleur sémantique doit donc entrer par ici.
 */
const toneClass: Record<TextTone, string> = {
  default: 'text-fg',
  muted: 'text-fg-muted',
  danger: 'text-danger',
};

const weightClass: Record<TextWeight, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
};

const COLOR_TOKEN: Record<TextColor, string> = {
  brand: '--d-ui-color-brand',
  dark: '--d-ui-color-fg',
  light: '--d-ui-color-bg',
  warning: '--d-ui-color-warning',
  danger: '--d-ui-color-danger',
  success: '--d-ui-color-success',
  info: '--d-ui-color-info',
  violet: '--d-ui-color-link-visited',
};

const COLOR_CLASS: Record<TextColor, string> = {
  brand: 'text-brand',
  dark: 'text-fg',
  light: 'text-bg',
  warning: 'text-warning',
  danger: 'text-danger',
  success: 'text-success',
  info: 'text-info',
  violet: 'text-link-visited',
};

/** Aligné sur les rampes de `ColorSwatches`. */
const L_TINT: Record<TextColor, readonly number[]> = {
  brand: [80, 60, 40, 20, 10, 5],
  dark: [70, 60, 38, 20, 12, 3],
  light: [90, 80, 60, 40, 20, 10],
  warning: [90, 80, 60, 48, 24, 12],
  danger: [80, 60, 40, 20, 10, 5],
  success: [80, 60, 40, 20, 10, 5],
  info: [80, 60, 40, 20, 10, 5],
  violet: [80, 60, 40, 20, 10, 5],
};

export function wrapOverflow(
  noWrap?: boolean,
  truncate?: TextTruncate,
): { className?: string; style?: CSSProperties } {
  const lines =
    truncate === true
      ? 1
      : typeof truncate === 'object' && Number.isFinite(truncate.lines)
        ? Math.max(1, Math.floor(truncate.lines))
        : undefined;

  if (lines === 1) return { className: 'min-w-0 truncate' };
  if (lines && lines > 1) {
    return {
      className: 'd-ui-text-clamp',
      style: { '--d-ui-text-truncate-lines': lines } as CSSProperties,
    };
  }
  if (noWrap) return { className: 'whitespace-nowrap' };
  return {};
}

export function palettePaint(
  color: TextColor,
  variant: TextColorVariant = 'N',
): { className?: string; style?: CSSProperties } {
  if (variant === 'N') return { className: COLOR_CLASS[color] };
  const token = COLOR_TOKEN[color];
  if (variant === 'D2') {
    return { style: { color: `color-mix(in srgb, var(${token}) 72%, black)` } };
  }
  if (variant === 'D1') {
    if (color === 'brand') return { className: 'text-brand-hover' };
    return { style: { color: `color-mix(in srgb, var(${token}) 88%, black)` } };
  }
  const index = Number.parseInt(variant.slice(1), 10) - 1;
  const percent = L_TINT[color][index] ?? 80;
  return {
    style: { color: `color-mix(in srgb, var(${token}) ${percent}%, transparent)` },
  };
}

/**
 * Texte courant du design system.
 *
 * `tone="muted"` reste au-dessus de 4.5:1 dans les deux thèmes : c'est une
 * nuance de hiérarchie, pas une permission de baisser le contraste.
 */
export function Text({
  as = 'p',
  size = 'body',
  tone = 'default',
  weight = 'regular',
  color,
  colorVariant = 'N',
  noWrap,
  truncate,
  className,
  style,
  ...rest
}: TextProps) {
  const Component = as as ElementType;
  const palette = color ? palettePaint(color, colorVariant) : undefined;
  const overflow = wrapOverflow(noWrap, truncate);

  return (
    <Component
      className={cx(
        sizeClass[size],
        palette ? palette.className : toneClass[tone],
        weightClass[weight],
        overflow.className,
        className,
      )}
      style={
        palette?.style || overflow.style
          ? { ...style, ...palette?.style, ...overflow.style }
          : style
      }
      {...rest}
    />
  );
}
