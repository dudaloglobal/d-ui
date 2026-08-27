import { HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
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
};
/**
 * Titre du design system.
 *
 * Le niveau sémantique et la taille visuelle sont deux props distinctes :
 * coupler les deux pousse à sauter des niveaux pour obtenir la bonne taille,
 * ce qui casse la navigation par titres (WCAG 1.3.1).
 */
export declare function Heading({ level, size, className, ...rest }: HeadingProps): import("react").JSX.Element;
