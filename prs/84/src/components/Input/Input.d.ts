import { InputHTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { TextControlSize } from './textControl';
export type InputSize = TextControlSize;
export type InputType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size' | 'type'> & {
    type?: InputType;
    size?: InputSize;
    /** Visible label above the control. Prefer this, or an external `htmlFor` / `aria-labelledby`. */
    label?: ReactNode;
    /** Guidance under the control. Replaced by `error` when the field is invalid. */
    helper?: ReactNode;
    /** Error text under the control. Also sets `aria-invalid`. */
    error?: ReactNode;
    /** Maps to `aria-invalid`. Prefer this name so it matches Field (`invalid`). */
    invalid?: boolean;
    /** Success state: green outline and check. Ignored when `invalid`. */
    valid?: boolean;
    /** Decorative icon at the start of the field. Complements `label`, does not replace it. */
    icon?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    /** Stretch the control to the container width. */
    fullWidth?: boolean;
    /** Show a clear control when the value is not empty. */
    clearable?: boolean;
    onClear?: () => void;
    /** Accessible name of the clear control. Default `"Clear"`. */
    clearLabel?: string;
    /**
     * Visible character count in the header (remaining when `maxLength` is set).
     * Defaults to on when `maxLength` is set. Associate via `aria-describedby`.
     */
    showCount?: boolean;
    countMessage?: (count: number, maxLength?: number) => string;
    /** Accessible name while the password is hidden. Default `"Show password"`. */
    revealPasswordLabel?: string;
    /** Accessible name while the password is visible. Default `"Hide password"`. */
    hidePasswordLabel?: string;
};
export declare const Input: import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "prefix"> & {
    type?: InputType;
    size?: InputSize;
    /** Visible label above the control. Prefer this, or an external `htmlFor` / `aria-labelledby`. */
    label?: ReactNode;
    /** Guidance under the control. Replaced by `error` when the field is invalid. */
    helper?: ReactNode;
    /** Error text under the control. Also sets `aria-invalid`. */
    error?: ReactNode;
    /** Maps to `aria-invalid`. Prefer this name so it matches Field (`invalid`). */
    invalid?: boolean;
    /** Success state: green outline and check. Ignored when `invalid`. */
    valid?: boolean;
    /** Decorative icon at the start of the field. Complements `label`, does not replace it. */
    icon?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    /** Stretch the control to the container width. */
    fullWidth?: boolean;
    /** Show a clear control when the value is not empty. */
    clearable?: boolean;
    onClear?: () => void;
    /** Accessible name of the clear control. Default `"Clear"`. */
    clearLabel?: string;
    /**
     * Visible character count in the header (remaining when `maxLength` is set).
     * Defaults to on when `maxLength` is set. Associate via `aria-describedby`.
     */
    showCount?: boolean;
    countMessage?: (count: number, maxLength?: number) => string;
    /** Accessible name while the password is hidden. Default `"Show password"`. */
    revealPasswordLabel?: string;
    /** Accessible name while the password is visible. Default `"Hide password"`. */
    hidePasswordLabel?: string;
} & import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').RefAttributes<HTMLInputElement>>;
