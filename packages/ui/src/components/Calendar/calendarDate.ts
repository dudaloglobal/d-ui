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

export function calendarDate(year: number, month: number, day: number): CalendarDate {
  return { year, month, day };
}

export function isCalendarDateEqual(
  a: CalendarDate | null | undefined,
  b: CalendarDate | null | undefined,
): boolean {
  if (!a || !b) return a === b;
  return a.year === b.year && a.month === b.month && a.day === b.day;
}

export function compareCalendarDates(a: CalendarDate, b: CalendarDate): number {
  if (a.year !== b.year) return a.year - b.year;
  if (a.month !== b.month) return a.month - b.month;
  return a.day - b.day;
}

export function calendarDateToIso(date: CalendarDate): string {
  const y = String(date.year).padStart(4, '0');
  const m = String(date.month).padStart(2, '0');
  const d = String(date.day).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function calendarDateFromIso(iso: string): CalendarDate | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (month < 1 || month > 12) return null;
  if (day < 1 || day > daysInMonth(year, month)) return null;
  return { year, month, day };
}

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

export function startOfMonth(date: CalendarDate): CalendarDate {
  return { year: date.year, month: date.month, day: 1 };
}

export function addDays(date: CalendarDate, days: number): CalendarDate {
  const next = new Date(Date.UTC(date.year, date.month - 1, date.day + days));
  return {
    year: next.getUTCFullYear(),
    month: next.getUTCMonth() + 1,
    day: next.getUTCDate(),
  };
}

export function addMonths(date: CalendarDate, months: number): CalendarDate {
  const total = date.year * 12 + (date.month - 1) + months;
  const year = Math.floor(total / 12);
  const month = (total % 12) + 1;
  const day = Math.min(date.day, daysInMonth(year, month));
  return { year, month, day };
}

export function addYears(date: CalendarDate, years: number): CalendarDate {
  return addMonths(date, years * 12);
}

export function weekdayIndex(date: CalendarDate): CalendarWeekday {
  return new Date(
    Date.UTC(date.year, date.month - 1, date.day),
  ).getUTCDay() as CalendarWeekday;
}

export function toCalendarDate(
  date: Date,
  timeZone: CalendarDateTimeZone = 'local',
): CalendarDate {
  if (timeZone === 'utc') {
    return {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth() + 1,
      day: date.getUTCDate(),
    };
  }
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
}

export function fromCalendarDate(
  date: CalendarDate,
  timeZone: CalendarDateTimeZone = 'local',
): Date {
  if (timeZone === 'utc') {
    return new Date(Date.UTC(date.year, date.month - 1, date.day));
  }
  return new Date(date.year, date.month - 1, date.day);
}

export function todayCalendarDate(
  now: Date = new Date(),
  timeZone: CalendarDateTimeZone = 'local',
): CalendarDate {
  return toCalendarDate(now, timeZone);
}

/**
 * First day of the week for `locale` (`Intl.Locale` weekInfo).
 * Falls back to Monday when the runtime has no week data.
 */
export function weekStartFromLocale(locale?: string): CalendarWeekday {
  try {
    const loc = new Intl.Locale(locale ?? 'fr') as Intl.Locale & {
      getWeekInfo?: () => { firstDay: number };
      weekInfo?: { firstDay: number };
    };
    const info = typeof loc.getWeekInfo === 'function' ? loc.getWeekInfo() : loc.weekInfo;
    const first = info?.firstDay;
    if (typeof first === 'number') {
      return (first === 7 ? 0 : first) as CalendarWeekday;
    }
  } catch {
    /* ignore invalid locale tags */
  }
  return 1;
}

export function monthGrid(
  month: CalendarDate,
  weekStartsOn: CalendarWeekday,
): CalendarGridCell[][] {
  const start = startOfMonth(month);
  const offset = (weekdayIndex(start) - weekStartsOn + 7) % 7;
  let cursor = addDays(start, -offset);
  const weeks: CalendarGridCell[][] = [];
  for (let week = 0; week < 6; week += 1) {
    const row: CalendarGridCell[] = [];
    for (let day = 0; day < 7; day += 1) {
      row.push({
        date: cursor,
        inMonth: cursor.year === month.year && cursor.month === month.month,
      });
      cursor = addDays(cursor, 1);
    }
    weeks.push(row);
  }
  return weeks;
}

export function weekdayLabels(
  locale: string | undefined,
  weekStartsOn: CalendarWeekday,
): { short: string; long: string }[] {
  const labels: { short: string; long: string }[] = [];
  for (let i = 0; i < 7; i += 1) {
    const weekday = ((weekStartsOn + i) % 7) as CalendarWeekday;
    const date = new Date(Date.UTC(2026, 0, 4 + weekday));
    labels.push({
      short: new Intl.DateTimeFormat(locale, {
        weekday: 'short',
        timeZone: 'UTC',
      }).format(date),
      long: new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        timeZone: 'UTC',
      }).format(date),
    });
  }
  return labels;
}

export function formatMonthYear(date: CalendarDate, locale?: string): string {
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(Date.UTC(date.year, date.month - 1, 1));
}

export function formatDayLabel(date: CalendarDate, locale?: string): string {
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(Date.UTC(date.year, date.month - 1, date.day));
}

export function startOfWeek(
  date: CalendarDate,
  weekStartsOn: CalendarWeekday,
): CalendarDate {
  const offset = (weekdayIndex(date) - weekStartsOn + 7) % 7;
  return addDays(date, -offset);
}

export function endOfWeek(
  date: CalendarDate,
  weekStartsOn: CalendarWeekday,
): CalendarDate {
  return addDays(startOfWeek(date, weekStartsOn), 6);
}

export function isCalendarDateUnavailable(
  date: CalendarDate,
  options: {
    minValue?: CalendarDate;
    maxValue?: CalendarDate;
    isDateUnavailable?: (date: CalendarDate) => boolean;
  },
): boolean {
  if (options.minValue && compareCalendarDates(date, options.minValue) < 0) return true;
  if (options.maxValue && compareCalendarDates(date, options.maxValue) > 0) return true;
  return Boolean(options.isDateUnavailable?.(date));
}

export type CalendarRangeValue = {
  start: CalendarDate | null;
  end: CalendarDate | null;
};

export function isCalendarRangeValue(value: unknown): value is CalendarRangeValue {
  return (
    !!value &&
    typeof value === 'object' &&
    'start' in value &&
    'end' in value &&
    !('year' in value)
  );
}

export function orderedRange(
  a: CalendarDate,
  b: CalendarDate,
): { start: CalendarDate; end: CalendarDate } {
  return compareCalendarDates(a, b) <= 0 ? { start: a, end: b } : { start: b, end: a };
}

export function isDateInRange(
  date: CalendarDate,
  start: CalendarDate | null,
  end: CalendarDate | null,
): boolean {
  if (!start || !end) return false;
  const { start: from, end: to } = orderedRange(start, end);
  return compareCalendarDates(date, from) >= 0 && compareCalendarDates(date, to) <= 0;
}

export function formatMonthName(month: number, locale?: string): string {
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    timeZone: 'UTC',
  }).format(Date.UTC(2026, month - 1, 1));
}

const YEAR_WINDOW = 50;

export function yearOptions(
  displayedYear: number,
  minValue?: CalendarDate,
  maxValue?: CalendarDate,
): number[] {
  const min = minValue?.year ?? displayedYear - YEAR_WINDOW;
  const max = maxValue?.year ?? displayedYear + YEAR_WINDOW;
  const start = Math.min(min, displayedYear);
  const end = Math.max(max, displayedYear);
  const years: number[] = [];
  for (let year = start; year <= end; year += 1) years.push(year);
  return years;
}
