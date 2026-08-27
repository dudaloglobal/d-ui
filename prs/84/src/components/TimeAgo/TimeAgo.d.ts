import { TimeHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type TimeAgoSize = 'sm' | 'md';
export type TimeAgoProps = Omit<TimeHTMLAttributes<HTMLTimeElement>, 'children' | 'dateTime'> & {
    /**
     * Instant à afficher. Accepte un `Date`, une chaîne ISO-8601, ou des
     * millisecondes epoch. Une valeur invalide rend un repli sans `<time>`.
     */
    date: Date | string | number;
    /**
     * Locale BCP 47 pour le texte relatif et absolu (`fr`, `en-US`, …).
     * Pose aussi `lang` (WCAG 3.1.2). Défaut : locale d’exécution.
     */
    locale?: Intl.LocalesArgument;
    /**
     * Si `true`, rafraîchit le texte relatif sur un intervalle grossier.
     * Visuel uniquement — pas d’`aria-live`. Passez `aria-live="polite"` pour opt-in.
     */
    live?: boolean;
    /** Taille du texte. `'md'` par défaut. */
    size?: TimeAgoSize;
    /** Infobulle native. Défaut : l’heure absolue formatée. */
    title?: string;
};
export declare function TimeAgo({ date, locale, live, size, className, title, lang, ...rest }: TimeAgoProps): import("react").JSX.Element;
