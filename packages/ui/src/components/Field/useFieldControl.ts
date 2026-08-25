import { describedBy, useOptionalFieldContext } from './FieldContext';

export type FieldControlProps = {
  id?: string;
  required?: boolean;
  disabled?: boolean;
  'aria-invalid'?: true;
  'aria-describedby'?: string;
};

/**
 * Attributs à poser sur le contrôle d'un `Field`.
 *
 * ```tsx
 * function Input(props) {
 *   const field = useFieldControl();
 *   return <input {...field} {...props} />;
 * }
 * ```
 *
 * Utilisable hors d'un `Field` : le hook renvoie alors un objet vide, ce qui
 * permet aux contrôles de l'appeler inconditionnellement.
 *
 * Dans un `Field group`, le hook ne renvoie ni `id` ni `aria-describedby` :
 * c'est le `fieldset` qui porte le nom et la description du groupe. Les poser
 * sur chaque contrôle ferait répéter l'aide à chaque option.
 */
export function useFieldControl(): FieldControlProps {
  const field = useOptionalFieldContext();

  if (!field) {
    return {};
  }

  if (field.group) {
    return {
      required: field.required || undefined,
      disabled: field.disabled || undefined,
    };
  }

  return {
    id: field.controlId,
    required: field.required || undefined,
    disabled: field.disabled || undefined,
    'aria-invalid': field.invalid || undefined,
    'aria-describedby': describedBy(field),
  };
}
