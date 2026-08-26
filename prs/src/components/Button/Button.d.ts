import { ButtonHTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPosition = 'start' | 'end';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Emphasis. `"primary"` is high, `"secondary"` is medium, `"ghost"` is low.
     * There should not be more than one high-emphasis button in a view.
     */
    variant?: ButtonVariant;
    /** `"sm"` when space is constrained. `"md"` by default. `"lg"` for spacious actions. */
    size?: ButtonSize;
    /** Replaces the icon with a spinner and sets `aria-busy`. The label stays visible. */
    loading?: boolean;
    icon?: ReactNode;
    iconPosition?: ButtonIconPosition;
    /** Stretch to the width of the container. */
    fullWidth?: boolean;
    /**
     * Toggle state for medium/low emphasis (subscribe, notification on/off).
     * Sets `aria-pressed`. If the label already changes with the state, that is enough
     * for the name; `aria-pressed` still exposes the pressed state.
     */
    isSelected?: boolean;
};
export declare function Button({ variant, size, type, className, disabled, loading, icon, iconPosition, fullWidth, isSelected, children, ...rest }: ButtonProps): import("react").JSX.Element;
