import { AnchorHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    /**
     * Ouvre dans un nouvel onglet, ajoute `rel="noopener noreferrer"` et
     * annonce l'ouverture aux lecteurs d'écran.
     */
    external?: boolean;
    /** Accessible extra for an external link. Override with the product language. */
    externalLabel?: string;
};
/**
 * Lien du design system.
 *
 * Le soulignement est permanent et non optionnel : la couleur seule ne peut pas
 * distinguer un lien de son texte environnant (WCAG 1.4.1).
 */
export declare function Link({ external, externalLabel, className, children, target, rel, ...rest }: LinkProps): import("react").JSX.Element;
