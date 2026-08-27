import { ReactNode, TextareaHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { TextControlSize } from '../textControl';
export type TextareaSize = TextControlSize;
export type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix' | 'size'> & {
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
    size?: TextareaSize;
    /** Libellé visible au-dessus du champ. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`. */
    label?: ReactNode;
    /** Texte d’aide sous le champ. Remplacé par `error` si le champ est invalide. */
    helper?: ReactNode;
    /** Message d’erreur sous le champ. Pose aussi `aria-invalid`. */
    error?: ReactNode;
    /** État d’erreur : `aria-invalid`. Même nom que `Field` (`invalid`). */
    invalid?: boolean;
    /** État de succès : contour vert et icône. Ignoré si `invalid`. */
    valid?: boolean;
    /** Icône décorative au début du champ. Complète `label`, ne le remplace pas. */
    icon?: ReactNode;
    /** Contenu au début du champ. Ne remplace pas le libellé. */
    prefix?: ReactNode;
    /** Contenu à la fin du champ. Ne remplace pas le libellé. */
    suffix?: ReactNode;
    /** Étend le champ à la largeur du conteneur. Défaut : `true`. */
    fullWidth?: boolean;
    /** Halo de focus (ombre douce). Inactif sauf si `true`. */
    focusShadow?: boolean;
    /** Bouton d’effacement dès que la valeur n’est pas vide. */
    clearable?: boolean;
    onClear?: () => void;
    /** Nom accessible du bouton d’effacement. Défaut `"Clear"`. */
    clearLabel?: string;
    /**
     * Compteur de caractères (restants si `maxLength` est posé).
     * Activé par défaut avec `maxLength`. Lié via `aria-describedby`.
     */
    showCount?: boolean;
    /** Libellé du compteur. Reçoit le nombre de caractères et `maxLength`. */
    countMessage?: (count: number, maxLength?: number) => string;
    /** Nombre de lignes visibles. Défaut : `2`. */
    rows?: number;
};
export declare const Textarea: import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').ForwardRefExoticComponent<Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "prefix"> & {
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
    size?: TextareaSize;
    /** Libellé visible au-dessus du champ. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`. */
    label?: ReactNode;
    /** Texte d’aide sous le champ. Remplacé par `error` si le champ est invalide. */
    helper?: ReactNode;
    /** Message d’erreur sous le champ. Pose aussi `aria-invalid`. */
    error?: ReactNode;
    /** État d’erreur : `aria-invalid`. Même nom que `Field` (`invalid`). */
    invalid?: boolean;
    /** État de succès : contour vert et icône. Ignoré si `invalid`. */
    valid?: boolean;
    /** Icône décorative au début du champ. Complète `label`, ne le remplace pas. */
    icon?: ReactNode;
    /** Contenu au début du champ. Ne remplace pas le libellé. */
    prefix?: ReactNode;
    /** Contenu à la fin du champ. Ne remplace pas le libellé. */
    suffix?: ReactNode;
    /** Étend le champ à la largeur du conteneur. Défaut : `true`. */
    fullWidth?: boolean;
    /** Halo de focus (ombre douce). Inactif sauf si `true`. */
    focusShadow?: boolean;
    /** Bouton d’effacement dès que la valeur n’est pas vide. */
    clearable?: boolean;
    onClear?: () => void;
    /** Nom accessible du bouton d’effacement. Défaut `"Clear"`. */
    clearLabel?: string;
    /**
     * Compteur de caractères (restants si `maxLength` est posé).
     * Activé par défaut avec `maxLength`. Lié via `aria-describedby`.
     */
    showCount?: boolean;
    /** Libellé du compteur. Reçoit le nombre de caractères et `maxLength`. */
    countMessage?: (count: number, maxLength?: number) => string;
    /** Nombre de lignes visibles. Défaut : `2`. */
    rows?: number;
} & import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').RefAttributes<HTMLTextAreaElement>>;
