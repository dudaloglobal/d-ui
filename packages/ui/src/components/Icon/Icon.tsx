import type { ComponentType, SVGProps } from 'react';
import { cx } from '../../lib/cx';

export type IconSize = 'sm' | 'md' | 'lg';

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'ref' | 'children'> & {
  /**
   * Composant SVG à rendre.
   *
   * `d-ui` ne dépend d'aucune librairie d'icônes : on passe le composant, il
   * n'est donc jamais importé en bloc et le bundle ne garde que ce qui sert.
   *
   * ```tsx
   * import { ChevronDownIcon } from '@heroicons/react/24/outline';
   * <Icon as={ChevronDownIcon} />
   * ```
   */
  as: ComponentType<SVGProps<SVGSVGElement>>;
  size?: IconSize;
  /**
   * Nom accessible.
   *
   * Sans `label`, l'icône est décorative et masquée aux technologies
   * d'assistance — le cas normal quand un texte voisin porte déjà le sens.
   * Avec `label`, elle devient une image nommée.
   */
  label?: string;
};

/** Aligné sur les hauteurs de `Button` : sm 16px, md 20px, lg 24px. */
const sizeClass: Record<IconSize, string> = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
};

/**
 * Enveloppe une icône SVG avec une taille cohérente et la bonne sémantique a11y.
 *
 * La couleur suit `currentColor` : l'icône hérite du texte qui la porte, donc
 * elle suit le thème sans prop de couleur ni token dédié.
 */
export function Icon({ as: Svg, size = 'md', label, className, ...rest }: IconProps) {
  const semantics = label
    ? { role: 'img' as const, 'aria-label': label }
    : { 'aria-hidden': true, focusable: false as const };

  return (
    <Svg
      {...semantics}
      className={cx('inline-block shrink-0', sizeClass[size], className)}
      {...rest}
    />
  );
}
