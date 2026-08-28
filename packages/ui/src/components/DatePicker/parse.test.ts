import { describe, expect, it } from 'vitest';
import {
  compareDateTimes,
  formatCalendarDate,
  formatClockTime,
  formatDateTime,
  parseCalendarDate,
  parseClockTime,
  parseDateTime,
  wrapClockUnit,
} from './parse';

describe('parseCalendarDate', () => {
  it('parses French, ISO and empty values', () => {
    expect(parseCalendarDate('12/03/2026')).toEqual({
      year: 2026,
      month: 3,
      day: 12,
    });
    expect(parseCalendarDate('2026-03-12')).toEqual({
      year: 2026,
      month: 3,
      day: 12,
    });
    expect(parseCalendarDate('')).toBeNull();
    expect(parseCalendarDate('32/13/2026')).toBeUndefined();
  });

  it('parses English month-first when the locale is en', () => {
    expect(parseCalendarDate('03/12/2026', 'en')).toEqual({
      year: 2026,
      month: 3,
      day: 12,
    });
    expect(formatCalendarDate({ year: 2026, month: 3, day: 12 }, 'en')).toBe(
      '03/12/2026',
    );
    expect(formatCalendarDate({ year: 2026, month: 3, day: 12 }, 'fr')).toBe(
      '12/03/2026',
    );
  });
});

describe('parseClockTime', () => {
  it('parses HH:mm and HHhmm', () => {
    expect(parseClockTime('14:30')).toEqual({ hour: 14, minute: 30 });
    expect(parseClockTime('9h05')).toEqual({ hour: 9, minute: 5 });
    expect(parseClockTime('')).toBeNull();
    expect(parseClockTime('24:00')).toBeUndefined();
    expect(formatClockTime({ hour: 9, minute: 5 })).toBe('09:05');
  });
});

describe('parseDateTime', () => {
  it('parses a date and a time', () => {
    expect(parseDateTime('12/03/2026 14:30')).toEqual({
      date: { year: 2026, month: 3, day: 12 },
      time: { hour: 14, minute: 30 },
    });
    expect(
      formatDateTime({
        date: { year: 2026, month: 3, day: 12 },
        time: { hour: 14, minute: 30 },
      }),
    ).toBe('12/03/2026 14:30');
    expect(parseDateTime('hier')).toBeUndefined();
  });
});

describe('compareDateTimes', () => {
  it('orders by date then time', () => {
    const morning = {
      date: { year: 2026, month: 3, day: 12 },
      time: { hour: 8, minute: 0 },
    };
    const noon = {
      date: { year: 2026, month: 3, day: 12 },
      time: { hour: 12, minute: 0 },
    };
    expect(compareDateTimes(morning, noon)).toBeLessThan(0);
    expect(wrapClockUnit(23 + 1, 0, 23)).toBe(0);
    expect(wrapClockUnit(0 - 1, 0, 23)).toBe(23);
  });
});
