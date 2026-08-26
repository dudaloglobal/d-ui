import { ReactNode, TextareaHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { TextControlSize } from './textControl';
export type TextareaSize = TextControlSize;
export type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix' | 'size'> & {
    size?: TextareaSize;
    label?: ReactNode;
    helper?: ReactNode;
    error?: ReactNode;
    /** Maps to `aria-invalid`. Prefer this name so it matches Field (`invalid`). */
    invalid?: boolean;
    valid?: boolean;
    icon?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    fullWidth?: boolean;
    clearable?: boolean;
    onClear?: () => void;
    clearLabel?: string;
    showCount?: boolean;
    countMessage?: (count: number, maxLength?: number) => string;
};
export declare const Textarea: import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').ForwardRefExoticComponent<Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "prefix"> & {
    size?: TextareaSize;
    label?: ReactNode;
    helper?: ReactNode;
    error?: ReactNode;
    /** Maps to `aria-invalid`. Prefer this name so it matches Field (`invalid`). */
    invalid?: boolean;
    valid?: boolean;
    icon?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    fullWidth?: boolean;
    clearable?: boolean;
    onClear?: () => void;
    clearLabel?: string;
    showCount?: boolean;
    countMessage?: (count: number, maxLength?: number) => string;
} & import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').RefAttributes<HTMLTextAreaElement>>;
