import { HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type FieldDescriptionProps = HTMLAttributes<HTMLParagraphElement>;
/**
 * Aide à la saisie, annoncée via `aria-describedby`.
 *
 * S'enregistre auprès du `Field` pour que le contrôle ne référence que des
 * identifiants réellement présents dans le DOM.
 */
export declare function FieldDescription({ className, ...rest }: FieldDescriptionProps): import("react").JSX.Element;
