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
   * En horizontal, le libellé est aussi visible, entre deux filets qui
   * occupent tout l'espace restant.
   */
  label?: string;
};

/**
 * Filet de séparation.
 *
 * Utilise `--d-ui-color-border-subtle` : un séparateur décoratif n'est pas une
 * frontière de contrôle, le seuil de 3:1 du critère 1.4.11 ne s'y applique pas.
 *
 * Toujours un `div` (jamais un `<hr>` : le preflight Tailwind force `height: 0`
 * et des marges auto, ce qui empêchait le trait de remplir le parent).
 * Horizontal : `width: 100%` du conteneur. Vertical : `self-stretch` dans un flex.
 */
export function Divider({
  orientation = 'horizontal',
  label,
  className,
  ...rest
}: DividerProps) {
  /**
   * Étalé **après** `rest` : la sémantique découle de `label` et ne doit pas
   * pouvoir être écrasée par l'appelant. Un `aria-hidden={false}` passé de
   * l'extérieur exposerait un séparateur anonyme aux lecteurs d'écran.
   */
  const semantics = label
    ? {
        role: 'separator' as const,
        'aria-orientation': orientation,
        'aria-label': label,
      }
    : { role: 'none' as const, 'aria-hidden': true };

  if (orientation === 'vertical') {
    return (
      <div
        {...rest}
        {...semantics}
        className={cx('bg-border-subtle w-px min-h-4 self-stretch', className)}
      />
    );
  }

  if (label) {
    return (
      <div
        {...rest}
        {...semantics}
        className={cx('flex w-full min-w-0 items-center gap-3', className)}
      >
        <span className="bg-border-subtle h-px min-w-0 flex-1" aria-hidden />
        <span className="text-fg-muted shrink-0 text-xs" aria-hidden>
          {label}
        </span>
        <span className="bg-border-subtle h-px min-w-0 flex-1" aria-hidden />
      </div>
    );
  }

  return (
    <div
      {...rest}
      {...semantics}
      className={cx('bg-border-subtle m-0 block h-px w-full min-w-0', className)}
    />
  );
}
