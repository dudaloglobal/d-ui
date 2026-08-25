import type { HTMLAttributes, ReactNode } from 'react';
import { useId, useMemo, useState } from 'react';
import { cx } from '../../lib/cx';
import { FieldContext, describedBy } from './FieldContext';

export type FieldProps = Omit<HTMLAttributes<HTMLElement>, 'id'> & {
  /** Identifiant de base. Généré si absent. */
  id?: string;
  required?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  /**
   * Groupe de contrôles (radio, cases à cocher).
   *
   * Rend un `fieldset` et transforme le `Label` en `legend` : un groupe se
   * nomme par sa légende, pas par un `for` qui ne pourrait viser qu'un seul
   * des contrôles.
   */
  group?: boolean;
  children: ReactNode;
};

/**
 * Anatomie d'un champ de formulaire.
 *
 * Distribue les identifiants et l'état à `Label`, `FieldDescription` et
 * `FieldError`, et expose au contrôle les attributs ARIA à poser via
 * `useFieldControl()`. Aucun couplage à une librairie de formulaires.
 */
export function Field({
  id,
  required = false,
  invalid = false,
  disabled = false,
  group = false,
  className,
  children,
  ...rest
}: FieldProps) {
  const generatedId = useId();
  const base = id ?? generatedId;

  const [hasDescription, setHasDescription] = useState(false);
  const [hasError, setHasError] = useState(false);

  const value = useMemo(
    () => ({
      controlId: `${base}-control`,
      labelId: `${base}-label`,
      descriptionId: `${base}-description`,
      errorId: `${base}-error`,
      required,
      invalid,
      disabled,
      group,
      hasDescription,
      hasError,
      setHasDescription,
      setHasError,
    }),
    [base, required, invalid, disabled, group, hasDescription, hasError],
  );

  const classes = cx('flex flex-col gap-1', className);

  if (group) {
    return (
      <FieldContext.Provider value={value}>
        <fieldset
          {...rest}
          disabled={disabled || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy(value)}
          className={cx(classes, 'min-w-0 border-0 p-0')}
        >
          {children}
        </fieldset>
      </FieldContext.Provider>
    );
  }

  return (
    <FieldContext.Provider value={value}>
      <div {...rest} className={classes}>
        {children}
      </div>
    </FieldContext.Provider>
  );
}
