import type { HTMLAttributes } from 'react';
import { cx } from '../../lib/cx';

export type DividerOrientation = 'horizontal' | 'vertical';

export type DividerProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  orientation?: DividerOrientation;
  /**
   * Nom accessible du séparateur.
   *
   * Sans `label`, le trait est purement décoratif et masqué aux technologies
   * d'assistance. Ne le renseigner que lorsque la séparation porte du sens.
   */
  label?: string;
};

/**
 * Filet de séparation.
 *
 * Utilise `--d-ui-color-border-subtle` : un séparateur décoratif n'est pas une
 * frontière de contrôle, le seuil de 3:1 du critère 1.4.11 ne s'y applique pas.
 */
export function Divider({
  orientation = 'horizontal',
  label,
  className,
  ...rest
}: DividerProps) {
  const semantics = label
    ? { role: 'separator', 'aria-orientation': orientation, 'aria-label': label }
    : { role: 'none', 'aria-hidden': true };

  const shape =
    orientation === 'horizontal' ? 'h-px w-full' : 'w-px self-stretch min-h-4';

  if (orientation === 'vertical') {
    return (
      <div
        {...semantics}
        className={cx('bg-border-subtle', shape, className)}
        {...rest}
      />
    );
  }

  return (
    <hr
      {...semantics}
      className={cx('bg-border-subtle border-0', shape, className)}
      {...rest}
    />
  );
}
