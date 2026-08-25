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
export declare function useFieldControl(): FieldControlProps;
