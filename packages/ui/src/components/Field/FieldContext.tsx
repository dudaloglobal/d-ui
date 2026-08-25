import { createContext, useContext } from 'react';

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

export const FieldContext = createContext<FieldContextValue | null>(null);

export function useFieldContext(component: string): FieldContextValue {
  const context = useContext(FieldContext);

  if (!context) {
    throw new Error(`<${component}> doit être rendu à l'intérieur de <Field>.`);
  }

  return context;
}

/** Retourne le contexte sans lever d'erreur — pour les composants utilisables hors `Field`. */
export function useOptionalFieldContext(): FieldContextValue | null {
  return useContext(FieldContext);
}

/**
 * Construit la valeur d'`aria-describedby`.
 *
 * On ne référence que des identifiants réellement rendus : pointer vers un id
 * absent fait taire l'annonce entière chez plusieurs lecteurs d'écran.
 */
export function describedBy(context: FieldContextValue): string | undefined {
  const ids = [
    context.hasDescription ? context.descriptionId : null,
    context.hasError ? context.errorId : null,
  ].filter(Boolean);

  return ids.length > 0 ? ids.join(' ') : undefined;
}
