import type { HTMLAttributes } from 'react';
import { cx } from '../../lib/cx';
import { useFieldContext } from './FieldContext';

/**
 * `htmlFor` et `id` sont pilotés par `Field` : les surcharger casserait
 * l'association entre le libellé et son contrôle.
 */
export type LabelProps = Omit<HTMLAttributes<HTMLElement>, 'htmlFor' | 'id'>;

/**
 * Libellé du champ.
 *
 * Dans un `Field group`, rend un `legend` : un groupe de contrôles se nomme par
 * sa légende. Ailleurs, un `label` lié au contrôle par `for`.
 *
 * L'astérisque de champ requis est décoratif (`aria-hidden`) : c'est l'attribut
 * `required` posé sur le contrôle qui porte l'information pour les lecteurs
 * d'écran. Doubler les deux ferait annoncer « requis » deux fois.
 */
export function Label({ className, children, ...rest }: LabelProps) {
  const field = useFieldContext('Label');

  const content = (
    <>
      {children}
      {field.required ? (
        <span aria-hidden="true" className="text-danger ml-0.5">
          *
        </span>
      ) : null}
    </>
  );

  const classes = cx(
    'text-fg text-sm font-medium',
    field.disabled ? 'opacity-50' : null,
    className,
  );

  if (field.group) {
    return (
      <legend {...rest} id={field.labelId} className={classes}>
        {content}
      </legend>
    );
  }

  return (
    <label {...rest} id={field.labelId} htmlFor={field.controlId} className={classes}>
      {content}
    </label>
  );
}
