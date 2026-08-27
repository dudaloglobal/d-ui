import { InputHTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { SelectionSize } from '../selectionControl';
export type RadioSize = SelectionSize;
export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
    size?: RadioSize;
    /** Libellé visible à côté du bouton radio. */
    label?: ReactNode;
    /** Valeur envoyée avec le groupe. Obligatoire dans un `RadioGroup`. */
    value: string;
};
export type RadioGroupProps = {
    /** Légende du groupe (`<legend>`). */
    label?: ReactNode;
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    helper?: ReactNode;
    error?: ReactNode;
    size?: RadioSize;
    orientation?: 'vertical' | 'horizontal';
    children: ReactNode;
};
export declare function RadioGroup({ label, name, value: valueProp, defaultValue, onChange, disabled, required, invalid, helper, error, size, orientation, children, }: RadioGroupProps): import("react").JSX.Element;
export declare const Radio: import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
    size?: RadioSize;
    /** Libellé visible à côté du bouton radio. */
    label?: ReactNode;
    /** Valeur envoyée avec le groupe. Obligatoire dans un `RadioGroup`. */
    value: string;
} & import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').RefAttributes<HTMLInputElement>>;
