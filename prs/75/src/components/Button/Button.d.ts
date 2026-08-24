import { ButtonHTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPosition = 'start' | 'end';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    icon?: ReactNode;
    iconPosition?: ButtonIconPosition;
};
export declare function Button({ variant, size, type, className, disabled, loading, icon, iconPosition, children, ...rest }: ButtonProps): import("react").JSX.Element;
