import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';

export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>;

/** Texte destiné aux lecteurs d’écran, masqué visuellement. */
export function VisuallyHidden({ className, ...rest }: VisuallyHiddenProps) {
  return <span className={cx('d-ui-visually-hidden', className)} {...rest} />;
}
