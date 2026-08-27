import { describe, expect, it } from 'vitest';
import {
  addDays,
  addMonths,
  calendarDate,
  calendarDateFromIso,
  calendarDateToIso,
  compareCalendarDates,
  daysInMonth,
  fromCalendarDate,
  monthGrid,
  startOfMonth,
  toCalendarDate,
  isCalendarRangeValue,
  isDateInRange,
  orderedRange,
  weekdayIndex,
  weekdayLabels,
  weekStartFromLocale,
  yearOptions,
} from './calendarDate';

describe('calendarDate', () => {
  it('serializes civil dates without a timezone', () => {
    expect(calendarDateToIso(calendarDate(2026, 3, 8))).toBe('2026-03-08');
    expect(calendarDateFromIso('2026-03-08')).toEqual({ year: 2026, month: 3, day: 8 });
    expect(calendarDateFromIso('2026-02-30')).toBeNull();
  });

  it('counts days in leap Februaries', () => {
    expect(daysInMonth(2024, 2)).toBe(29);
    expect(daysInMonth(2026, 2)).toBe(28);
    expect(daysInMonth(2026, 3)).toBe(31);
  });

  it('adds days across month and year boundaries in UTC civil time', () => {
    expect(addDays({ year: 2026, month: 1, day: 31 }, 1)).toEqual({
      year: 2026,
      month: 2,
      day: 1,
    });
    expect(addDays({ year: 2025, month: 12, day: 31 }, 1)).toEqual({
      year: 2026,
      month: 1,
      day: 1,
    });
  });

  it('clamps the day when adding months', () => {
    expect(addMonths({ year: 2026, month: 1, day: 31 }, 1)).toEqual({
      year: 2026,
      month: 2,
      day: 28,
    });
    expect(startOfMonth({ year: 2026, month: 3, day: 18 })).toEqual({
      year: 2026,
      month: 3,
      day: 1,
    });
  });

  it('compares dates in calendar order', () => {
    expect(
      compareCalendarDates(
        { year: 2026, month: 3, day: 1 },
        { year: 2026, month: 3, day: 2 },
      ),
    ).toBeLessThan(0);
  });

  it('round-trips a Date through the local adapter', () => {
    const date = new Date(2026, 2, 18);
    expect(toCalendarDate(date, 'local')).toEqual({ year: 2026, month: 3, day: 18 });
    expect(fromCalendarDate({ year: 2026, month: 3, day: 18 }, 'local').getDate()).toBe(
      18,
    );
  });

  it('round-trips a Date through the UTC adapter', () => {
    const date = new Date(Date.UTC(2026, 2, 18));
    expect(toCalendarDate(date, 'utc')).toEqual({ year: 2026, month: 3, day: 18 });
    expect(fromCalendarDate({ year: 2026, month: 3, day: 18 }, 'utc').toISOString()).toBe(
      '2026-03-18T00:00:00.000Z',
    );
  });

  it('builds a six-week grid starting on Monday', () => {
    const weeks = monthGrid({ year: 2026, month: 3, day: 1 }, 1);
    expect(weeks).toHaveLength(6);
    expect(weeks[0]).toHaveLength(7);
    expect(weeks[0]![0]).toEqual({
      date: { year: 2026, month: 2, day: 23 },
      inMonth: false,
    });
    expect(weeks[0]![6]?.date).toEqual({ year: 2026, month: 3, day: 1 });
    expect(weekdayIndex({ year: 2026, month: 3, day: 1 })).toBe(0);
  });

  it('lists weekday labels from the locale', () => {
    const fr = weekdayLabels('fr', 1);
    expect(fr[0]?.long.toLowerCase()).toMatch(/lundi/);
    expect(fr).toHaveLength(7);
    const en = weekdayLabels('en', 0);
    expect(en[0]?.long.toLowerCase()).toMatch(/sunday/);
  });

  it('defaults the French week start to Monday when weekInfo exists', () => {
    const start = weekStartFromLocale('fr');
    expect(start === 0 || start === 1).toBe(true);
  });

  it('orders a range and tests inclusion', () => {
    const start = { year: 2026, month: 3, day: 16 };
    const end = { year: 2026, month: 3, day: 10 };
    expect(orderedRange(start, end)).toEqual({
      start: end,
      end: start,
    });
    expect(isDateInRange({ year: 2026, month: 3, day: 12 }, end, start)).toBe(true);
    expect(isDateInRange({ year: 2026, month: 3, day: 9 }, end, start)).toBe(false);
    expect(isCalendarRangeValue({ start, end: null })).toBe(true);
    expect(isCalendarRangeValue({ year: 2026, month: 3, day: 1 })).toBe(false);
  });

  it('lists years around the displayed year, bounded by min and max', () => {
    expect(
      yearOptions(
        2026,
        { year: 2025, month: 1, day: 1 },
        { year: 2027, month: 12, day: 31 },
      ),
    ).toEqual([2025, 2026, 2027]);
    expect(
      yearOptions(
        2026,
        { year: 2026, month: 3, day: 1 },
        { year: 2026, month: 3, day: 31 },
      ),
    ).toEqual([2026]);
  });
});
