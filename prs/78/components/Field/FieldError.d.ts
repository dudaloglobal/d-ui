import { HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type FieldErrorProps = HTMLAttributes<HTMLParagraphElement>;
/**
 * Message d'erreur du champ.
 *
 * Ne rend rien tant que `Field` n'est pas `invalid` : un message d'erreur
 * présent dans le DOM mais masqué visuellement reste annoncé par les lecteurs
 * d'écran.
 *
 * Porte `role="alert"` pour que l'erreur soit annoncée à son apparition, sans
 * attendre que l'utilisateur revienne sur le champ.
 */
export declare function FieldError({ className, children, ...rest }: FieldErrorProps): import("react").JSX.Element | null;
