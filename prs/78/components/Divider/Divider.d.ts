import { HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
    orientation?: DividerOrientation;
    /**
     * Nom accessible du séparateur.
     *
     * Sans `label`, le trait est purement décoratif et masqué aux technologies
     * d'assistance. Ne le renseigner que lorsque la séparation porte du sens.
     * En horizontal, le libellé est aussi visible, entre deux filets qui
     * occupent tout l'espace restant.
     */
    label?: string;
};
/**
 * Filet de séparation.
 *
 * Utilise `--d-ui-color-border-subtle` : un séparateur décoratif n'est pas une
 * frontière de contrôle, le seuil de 3:1 du critère 1.4.11 ne s'y applique pas.
 *
 * Toujours un `div` (jamais un `<hr>` : le preflight Tailwind force `height: 0`
 * et des marges auto, ce qui empêchait le trait de remplir le parent).
 * Horizontal : `width: 100%` du conteneur. Vertical : `self-stretch` dans un flex.
 */
export declare function Divider({ orientation, label, className, ...rest }: DividerProps): import("react").JSX.Element;
