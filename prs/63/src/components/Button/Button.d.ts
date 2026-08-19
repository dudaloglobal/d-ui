import { ButtonHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};
export declare function Button({ variant, size, type, className, disabled, children, ...rest }: ButtonProps): import("react").JSX.Element;
