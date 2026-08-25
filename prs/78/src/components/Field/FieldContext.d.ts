export type FieldContextValue = {
    /** Identifiant du contrôle. Cible du `for` du `Label`. */
    controlId: string;
    labelId: string;
    descriptionId: string;
    errorId: string;
    required: boolean;
    invalid: boolean;
    disabled: boolean;
    /** Vrai pour un groupe de contrôles (radio, cases à cocher). */
    group: boolean;
    hasDescription: boolean;
    hasError: boolean;
    setHasDescription: (present: boolean) => void;
    setHasError: (present: boolean) => void;
};
export declare const FieldContext: import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').Context<FieldContextValue | null>;
export declare function useFieldContext(component: string): FieldContextValue;
/** Retourne le contexte sans lever d'erreur — pour les composants utilisables hors `Field`. */
export declare function useOptionalFieldContext(): FieldContextValue | null;
/**
 * Construit la valeur d'`aria-describedby`.
 *
 * On ne référence que des identifiants réellement rendus : pointer vers un id
 * absent fait taire l'annonce entière chez plusieurs lecteurs d'écran.
 */
export declare function describedBy(context: FieldContextValue): string | undefined;
