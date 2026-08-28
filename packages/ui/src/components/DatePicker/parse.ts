import {
  calendarDateFromIso,
  calendarDateToIso,
  compareCalendarDates,
  isCalendarDateUnavailable,
  type CalendarDate,
} from '../Calendar/calendarDate';

export type ClockTime = {
  readonly hour: number;
  readonly minute: number;
};

export type DateTimeValue = {
  readonly date: CalendarDate;
  readonly time: ClockTime;
};

export function isEnglishLocale(locale?: string): boolean {
  const tag = (locale ?? 'fr').toLowerCase();
  return tag === 'en' || tag.startsWith('en-');
}

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

export function formatCalendarDate(date: CalendarDate, locale?: string): string {
  const day = pad(date.day);
  const month = pad(date.month);
  const year = String(date.year).padStart(4, '0');
  return isEnglishLocale(locale) ? `${month}/${day}/${year}` : `${day}/${month}/${year}`;
}

export function formatClockTime(time: ClockTime): string {
  return `${pad(time.hour)}:${pad(time.minute)}`;
}

export function formatDateTime(value: DateTimeValue, locale?: string): string {
  return `${formatCalendarDate(value.date, locale)} ${formatClockTime(value.time)}`;
}

export function parseCalendarDate(
  text: string,
  locale?: string,
): CalendarDate | null | undefined {
  const trimmed = text.trim();
  if (!trimmed) return null;
  const iso = calendarDateFromIso(trimmed);
  if (iso) return iso;
  const match = /^(\d{1,2})[/.\-](\d{1,2})[/.\-](\d{4})$/.exec(trimmed);
  if (!match) return undefined;
  const first = Number(match[1]);
  const second = Number(match[2]);
  const year = Number(match[3]);
  const month = isEnglishLocale(locale) ? first : second;
  const day = isEnglishLocale(locale) ? second : first;
  return calendarDateFromIso(`${year}-${pad(month)}-${pad(day)}`) ?? undefined;
}

export function parseClockTime(text: string): ClockTime | null | undefined {
  const trimmed = text.trim();
  if (!trimmed) return null;
  const match = /^(\d{1,2})[:hH](\d{2})$/.exec(trimmed);
  if (!match) return undefined;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour > 23 || minute > 59) return undefined;
  return { hour, minute };
}

export function parseDateTime(
  text: string,
  locale?: string,
): DateTimeValue | null | undefined {
  const trimmed = text.trim();
  if (!trimmed) return null;
  const match = /^(.+?)\s+(\d{1,2}[:hH]\d{2})$/.exec(trimmed);
  if (!match?.[1] || !match[2]) return undefined;
  const date = parseCalendarDate(match[1], locale);
  const time = parseClockTime(match[2]);
  if (!date || !time) return undefined;
  return { date, time };
}

export function clockTimeToMinutes(time: ClockTime): number {
  return time.hour * 60 + time.minute;
}

export function compareClockTimes(a: ClockTime, b: ClockTime): number {
  return clockTimeToMinutes(a) - clockTimeToMinutes(b);
}

export function compareDateTimes(a: DateTimeValue, b: DateTimeValue): number {
  const date = compareCalendarDates(a.date, b.date);
  if (date !== 0) return date;
  return compareClockTimes(a.time, b.time);
}

export function wrapClockUnit(value: number, min: number, max: number): number {
  const span = max - min + 1;
  return min + ((((value - min) % span) + span) % span);
}

export function isClockTimeUnavailable(
  time: ClockTime,
  options: { minValue?: ClockTime; maxValue?: ClockTime },
): boolean {
  if (options.minValue && compareClockTimes(time, options.minValue) < 0) return true;
  if (options.maxValue && compareClockTimes(time, options.maxValue) > 0) return true;
  return false;
}

export function isDateTimeUnavailable(
  value: DateTimeValue,
  options: {
    minValue?: DateTimeValue;
    maxValue?: DateTimeValue;
    isDateUnavailable?: (date: CalendarDate) => boolean;
  },
): boolean {
  if (options.minValue && compareDateTimes(value, options.minValue) < 0) return true;
  if (options.maxValue && compareDateTimes(value, options.maxValue) > 0) return true;
  return isCalendarDateUnavailable(value.date, {
    isDateUnavailable: options.isDateUnavailable,
  });
}

export function dateTimeToIso(value: DateTimeValue): string {
  return `${calendarDateToIso(value.date)}T${formatClockTime(value.time)}`;
}
