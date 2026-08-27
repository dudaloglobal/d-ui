import { InputHTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { SelectionSize } from '../selectionControl';
export type SwitchSize = SelectionSize;
export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
    size?: SwitchSize;
    /** Libellé visible à côté de l’interrupteur. Sinon, `aria-label` ou `aria-labelledby`. */
    label?: ReactNode;
    /** Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide. */
    helper?: ReactNode;
    /** Message d’erreur. Pose aussi `aria-invalid`. */
    error?: ReactNode;
    /** État d’erreur : `aria-invalid`. */
    invalid?: boolean;
};
export declare const Switch: import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
    size?: SwitchSize;
    /** Libellé visible à côté de l’interrupteur. Sinon, `aria-label` ou `aria-labelledby`. */
    label?: ReactNode;
    /** Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide. */
    helper?: ReactNode;
    /** Message d’erreur. Pose aussi `aria-invalid`. */
    error?: ReactNode;
    /** État d’erreur : `aria-invalid`. */
    invalid?: boolean;
} & import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').RefAttributes<HTMLInputElement>>;
