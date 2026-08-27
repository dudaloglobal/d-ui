import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type FieldProps = Omit<HTMLAttributes<HTMLElement>, 'id'> & {
    /** Identifiant de base. Généré si absent. */
    id?: string;
    required?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    /**
     * Groupe de contrôles (radio, cases à cocher).
     *
     * Rend un `fieldset` et transforme le `Label` en `legend` : un groupe se
     * nomme par sa légende, pas par un `for` qui ne pourrait viser qu'un seul
     * des contrôles.
     */
    group?: boolean;
    children: ReactNode;
};
/**
 * Anatomie d'un champ de formulaire.
 *
 * Distribue les identifiants et l'état à `Label`, `FieldDescription` et
 * `FieldError`, et expose au contrôle les attributs ARIA à poser via
 * `useFieldControl()`. Aucun couplage à une librairie de formulaires.
 */
export declare function Field({ id, required, invalid, disabled, group, className, children, ...rest }: FieldProps): import("react").JSX.Element;
