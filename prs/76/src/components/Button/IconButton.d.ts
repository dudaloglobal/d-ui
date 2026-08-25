import { ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { ButtonProps } from './Button';
export type IconButtonProps = Omit<ButtonProps, 'children' | 'icon' | 'iconPosition'> & {
    icon: ReactNode;
    'aria-label': string;
};
export declare function IconButton({ icon, size, className, ...rest }: IconButtonProps): import("react").JSX.Element;
