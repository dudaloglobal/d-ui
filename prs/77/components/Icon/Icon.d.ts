import { ComponentType, SVGProps } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
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
/**
 * Enveloppe une icône SVG avec une taille cohérente et la bonne sémantique a11y.
 *
 * La couleur suit `currentColor` : l'icône hérite du texte qui la porte, donc
 * elle suit le thème sans prop de couleur ni token dédié.
 */
export declare function Icon({ as: Svg, size, label, className, ...rest }: IconProps): import("react").JSX.Element;
