import type { ElementType, HTMLAttributes } from 'react';
import { cx } from '../../lib/cx';

export type TextSize = 'body' | 'body-sm' | 'caption';
export type TextTone = 'default' | 'muted' | 'danger';
export type TextWeight = 'regular' | 'medium' | 'semibold';
export type TextElement = 'p' | 'span' | 'div' | 'label' | 'legend';

export type TextProps = HTMLAttributes<HTMLElement> & {
  /** Élément rendu. `p` par défaut — passer `span` pour du texte en ligne. */
  as?: TextElement;
  size?: TextSize;
  tone?: TextTone;
  weight?: TextWeight;
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
  className,
  ...rest
}: TextProps) {
  const Component = as as ElementType;

  return (
    <Component
      className={cx(sizeClass[size], toneClass[tone], weightClass[weight], className)}
      {...rest}
    />
  );
}
