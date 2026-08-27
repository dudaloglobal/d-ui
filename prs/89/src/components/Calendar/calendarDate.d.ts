/** Civil date (year / month / day). No wall-clock time, no timezone. */
export type CalendarDate = {
    readonly year: number;
    readonly month: number;
    readonly day: number;
};
/** 0 = Sunday … 6 = Saturday. */
export type CalendarWeekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/** How to read or write a JS `Date` at the CalendarDate boundary. */
export type CalendarDateTimeZone = 'local' | 'utc';
export type CalendarGridCell = {
    date: CalendarDate;
    inMonth: boolean;
};
export declare function calendarDate(year: number, month: number, day: number): CalendarDate;
export declare function isCalendarDateEqual(a: CalendarDate | null | undefined, b: CalendarDate | null | undefined): boolean;
export declare function compareCalendarDates(a: CalendarDate, b: CalendarDate): number;
export declare function calendarDateToIso(date: CalendarDate): string;
export declare function calendarDateFromIso(iso: string): CalendarDate | null;
export declare function daysInMonth(year: number, month: number): number;
export declare function startOfMonth(date: CalendarDate): CalendarDate;
export declare function addDays(date: CalendarDate, days: number): CalendarDate;
export declare function addMonths(date: CalendarDate, months: number): CalendarDate;
export declare function addYears(date: CalendarDate, years: number): CalendarDate;
export declare function weekdayIndex(date: CalendarDate): CalendarWeekday;
export declare function toCalendarDate(date: Date, timeZone?: CalendarDateTimeZone): CalendarDate;
export declare function fromCalendarDate(date: CalendarDate, timeZone?: CalendarDateTimeZone): Date;
export declare function todayCalendarDate(now?: Date, timeZone?: CalendarDateTimeZone): CalendarDate;
/**
 * First day of the week for `locale` (`Intl.Locale` weekInfo).
 * Falls back to Monday when the runtime has no week data.
 */
export declare function weekStartFromLocale(locale?: string): CalendarWeekday;
export declare function monthGrid(month: CalendarDate, weekStartsOn: CalendarWeekday): CalendarGridCell[][];
export declare function weekdayLabels(locale: string | undefined, weekStartsOn: CalendarWeekday): {
    short: string;
    long: string;
}[];
export declare function formatMonthYear(date: CalendarDate, locale?: string): string;
export declare function formatDayLabel(date: CalendarDate, locale?: string): string;
export declare function startOfWeek(date: CalendarDate, weekStartsOn: CalendarWeekday): CalendarDate;
export declare function endOfWeek(date: CalendarDate, weekStartsOn: CalendarWeekday): CalendarDate;
export declare function isCalendarDateUnavailable(date: CalendarDate, options: {
    minValue?: CalendarDate;
    maxValue?: CalendarDate;
    isDateUnavailable?: (date: CalendarDate) => boolean;
}): boolean;
export type CalendarRangeValue = {
    start: CalendarDate | null;
    end: CalendarDate | null;
};
export declare function isCalendarRangeValue(value: unknown): value is CalendarRangeValue;
export declare function orderedRange(a: CalendarDate, b: CalendarDate): {
    start: CalendarDate;
    end: CalendarDate;
};
export declare function isDateInRange(date: CalendarDate, start: CalendarDate | null, end: CalendarDate | null): boolean;
export declare function formatMonthName(month: number, locale?: string): string;
export declare function yearOptions(displayedYear: number, minValue?: CalendarDate, maxValue?: CalendarDate): number[];
