import type { ElementType, HTMLAttributes } from 'react';
import { cx } from '../../lib/cx';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = 'display' | 'title' | 'subtitle' | 'body';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  /** Niveau sémantique. Rend un vrai `h1`…`h6` : il porte la structure du document. */
  level: HeadingLevel;
  /**
   * Taille visuelle, indépendante du niveau.
   *
   * Un `h2` peut avoir l'allure d'un `display` sans casser la hiérarchie.
   * Par défaut, la taille suit le niveau.
   */
  size?: HeadingSize;
  /** Graisse `font-bold`. Désactivée par défaut. */
  bold?: boolean;
};

const sizeClass: Record<HeadingSize, string> = {
  display: 'text-4xl tracking-tight',
  title: 'text-2xl',
  subtitle: 'text-xl',
  body: 'text-base',
};

const defaultSizeForLevel: Record<HeadingLevel, HeadingSize> = {
  1: 'display',
  2: 'title',
  3: 'subtitle',
  4: 'body',
  5: 'body',
  6: 'body',
};

/**
 * Titre du design system.
 *
 * Le niveau sémantique et la taille visuelle sont deux props distinctes :
 * coupler les deux pousse à sauter des niveaux pour obtenir la bonne taille,
 * ce qui casse la navigation par titres (WCAG 1.3.1).
 */
export function Heading({ level, size, bold = false, className, ...rest }: HeadingProps) {
  const Component = `h${level}` as ElementType;
  const resolvedSize = size ?? defaultSizeForLevel[level];

  return (
    <Component
      className={cx(
        bold ? 'font-bold' : 'font-normal',
        'text-fg text-balance',
        sizeClass[resolvedSize],
        className,
      )}
      {...rest}
    />
  );
}
