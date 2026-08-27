import { InputHTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { TextControlSize } from '../textControl';
export type TextInputSize = TextControlSize;
export type TextInputType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
export type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size' | 'type'> & {
    /** Type HTML : `text`, `email`, `password`, `search`, `number`, `tel`, `url`. */
    type?: TextInputType;
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
    size?: TextInputSize;
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
    /** Contenu au début du champ (unité, schéma d’URL). Ne remplace pas le libellé. */
    prefix?: ReactNode;
    /** Contenu à la fin du champ. Ne remplace pas le libellé. */
    suffix?: ReactNode;
    /** Étend le champ à la largeur du conteneur. Défaut : `true`. */
    fullWidth?: boolean;
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
    /** Nom accessible pour afficher le mot de passe. Défaut `"Show password"`. */
    revealPasswordLabel?: string;
    /** Nom accessible pour masquer le mot de passe. Défaut `"Hide password"`. */
    hidePasswordLabel?: string;
};
export declare const TextInput: import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "prefix"> & {
    /** Type HTML : `text`, `email`, `password`, `search`, `number`, `tel`, `url`. */
    type?: TextInputType;
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
    size?: TextInputSize;
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
    /** Contenu au début du champ (unité, schéma d’URL). Ne remplace pas le libellé. */
    prefix?: ReactNode;
    /** Contenu à la fin du champ. Ne remplace pas le libellé. */
    suffix?: ReactNode;
    /** Étend le champ à la largeur du conteneur. Défaut : `true`. */
    fullWidth?: boolean;
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
    /** Nom accessible pour afficher le mot de passe. Défaut `"Show password"`. */
    revealPasswordLabel?: string;
    /** Nom accessible pour masquer le mot de passe. Défaut `"Hide password"`. */
    hidePasswordLabel?: string;
} & import('../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react').RefAttributes<HTMLInputElement>>;
