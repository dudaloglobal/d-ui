import type { ReactNode } from 'react';
import { Button, type ButtonProps } from './Button';
import { cx } from '../../lib/cx';

const iconOnlySizeClass: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-8 w-8 px-0',
  md: 'h-10 w-10 px-0',
  lg: 'h-12 w-12 px-0',
};

export type IconButtonProps = Omit<ButtonProps, 'children' | 'icon' | 'iconPosition'> & {
  icon: ReactNode;
  /** Accessible name. Required because the button has no visible text. */
  'aria-label': string;
};

export function IconButton({ icon, size = 'md', className, ...rest }: IconButtonProps) {
  return (
    <Button
      {...rest}
      size={size}
      icon={icon}
      className={cx(iconOnlySizeClass[size], className)}
    />
  );
}
