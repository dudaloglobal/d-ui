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
 * Dans un `Field group`, le hook ne renvoie ni `id`, ni `aria-describedby`,
 * ni `required` : c'est le `fieldset` qui porte le nom et la description du
 * groupe, et `required` y désigne le groupe entier, pas chaque contrôle.
 */
export function useFieldControl(): FieldControlProps {
  const field = useOptionalFieldContext();

  if (!field) {
    return {};
  }

  if (field.group) {
    /*
     * `required` n'est **pas** transmis aux contrôles d'un groupe.
     *
     * Sur une case à cocher, `required` signifie « cette case-ci doit être
     * cochée » : le poser sur chacune exigerait de toutes les cocher, alors
     * que l'intention est « au moins un choix ». Dans un groupe, `required`
     * ne pilote donc que l'astérisque de la légende, et la contrainte réelle
     * appartient à la validation du formulaire.
     *
     * `aria-required` n'est pas une sortie non plus : ARIA ne l'admet pas sur
     * le rôle `group`.
     */
    return {
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
