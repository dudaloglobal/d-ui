import { HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { CalendarDate, CalendarRangeValue, CalendarWeekday } from './calendarDate';
export type CalendarSize = 'sm' | 'md' | 'lg';
export type CalendarSelectionMode = 'single' | 'range';
export type { CalendarRangeValue };
export type CalendarProps = Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'> & {
    /** `'single'` (défaut) ou `'range'` (début + fin). */
    selectionMode?: CalendarSelectionMode;
    /** Date ou plage sélectionnée (contrôlé). `null` = aucune. */
    value?: CalendarDate | CalendarRangeValue | null;
    /** Date ou plage au montage (non contrôlé). */
    defaultValue?: CalendarDate | CalendarRangeValue | null;
    /** Appelé lorsqu’un jour disponible est choisi (date ou plage). */
    onValueChange?: (value: CalendarDate | CalendarRangeValue) => void;
    /** Premier mois affiché (contrôlé). Le jour est ignoré. */
    month?: CalendarDate;
    /** Premier mois affiché au montage. */
    defaultMonth?: CalendarDate;
    /** Appelé lorsque l’utilisateur change de mois. */
    onMonthChange?: (month: CalendarDate) => void;
    /**
     * « Aujourd’hui » (pastille). Défaut : date civile locale.
     * Passez-le dans les tests et les stories pour un rendu stable.
     */
    today?: CalendarDate;
    /** Première date sélectionnable (incluse). */
    minValue?: CalendarDate;
    /** Dernière date sélectionnable (incluse). */
    maxValue?: CalendarDate;
    /** Dates individuelles non sélectionnables (week-ends, jours fériés, …). */
    isDateUnavailable?: (date: CalendarDate) => boolean;
    /**
     * Premier jour de la semaine (0 = dimanche). Défaut : `weekStartFromLocale(locale)`.
     */
    weekStartsOn?: CalendarWeekday;
    /** Locale BCP 47 pour les libellés. Pose aussi `lang`. Défaut : `fr`. */
    locale?: string;
    /** Nombre de mois côte à côte (1–3). Défaut : 1, ou 2 si `selectionMode="range"`. */
    numberOfMonths?: number;
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les vues aérées. */
    size?: CalendarSize;
    /** Désactive la grille et la navigation. */
    disabled?: boolean;
    /** Nom accessible du bouton mois précédent. Défaut : « Mois précédent ». */
    previousMonthLabel?: string;
    /** Nom accessible du bouton mois suivant. Défaut : « Mois suivant ». */
    nextMonthLabel?: string;
    /** Nom accessible du sélecteur de mois. Défaut : « Mois ». */
    monthSelectLabel?: string;
    /** Nom accessible du sélecteur d’année. Défaut : « Année ». */
    yearSelectLabel?: string;
    /** Nom du champ masqué `YYYY-MM-DD` (date unique, ou début de plage). */
    name?: string;
    /** Nom du champ masqué de fin de plage (`selectionMode="range"`). */
    nameEnd?: string;
};
export declare function Calendar({ selectionMode, value, defaultValue, onValueChange, month, defaultMonth, onMonthChange, today: todayProp, minValue, maxValue, isDateUnavailable, weekStartsOn: weekStartsOnProp, locale, numberOfMonths, size, disabled, previousMonthLabel, nextMonthLabel, monthSelectLabel, yearSelectLabel, name, nameEnd, className, lang, ...rest }: CalendarProps): import("react").JSX.Element;
