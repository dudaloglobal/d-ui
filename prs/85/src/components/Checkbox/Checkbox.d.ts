import { InputHTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { SelectionSize } from '../selectionControl';
export type CheckboxSize = SelectionSize;
export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
    size?: CheckboxSize;
    /** Libellé visible à côté de la case. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`. */
    label?: ReactNode;
    /** Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide. */
    helper?: ReactNode;
    /** Message d’erreur. Pose aussi `aria-invalid`. */
    error?: ReactNode;
    /** État d’erreur : `aria-invalid`. */
    invalid?: boolean;
    /** État mixte (ni coché ni décoché). Pose `indeterminate` et `aria-checked="mixed"`. */
    indeterminate?: boolean;
};
export type CheckboxGroupProps = {
    /** Légende du groupe (`<legend>`). */
    label?: ReactNode;
    name?: string;
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    helper?: ReactNode;
    error?: ReactNode;
    size?: CheckboxSize;
    orientation?: 'vertical' | 'horizontal';
    children: ReactNode;
};
export declare function CheckboxGroup({ label, name, value: valueProp, defaultValue, onChange, disabled, required, invalid, helper, error, size, orientation, children, }: CheckboxGroupProps): import("react").JSX.Element;
export declare const Checkbox: import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
    size?: CheckboxSize;
    /** Libellé visible à côté de la case. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`. */
    label?: ReactNode;
    /** Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide. */
    helper?: ReactNode;
    /** Message d’erreur. Pose aussi `aria-invalid`. */
    error?: ReactNode;
    /** État d’erreur : `aria-invalid`. */
    invalid?: boolean;
    /** État mixte (ni coché ni décoché). Pose `indeterminate` et `aria-checked="mixed"`. */
    indeterminate?: boolean;
} & import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').RefAttributes<HTMLInputElement>>;
