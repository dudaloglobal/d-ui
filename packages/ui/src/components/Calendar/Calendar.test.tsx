import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Calendar as CalendarFromEntry } from '../../index';
import { Calendar, type CalendarProps } from './Calendar';
import { calendarDate } from './calendarDate';

const today = calendarDate(2026, 3, 18);
const selected = calendarDate(2026, 3, 12);
const march = calendarDate(2026, 3, 1);

function renderCalendar(props: Partial<CalendarProps> = {}) {
  return render(
    <Calendar
      today={today}
      defaultValue={selected}
      defaultMonth={march}
      locale="fr"
      weekStartsOn={1}
      {...props}
    />,
  );
}

describe('Calendar', () => {
  it('is exported from the package entrypoint', () => {
    expect(CalendarFromEntry).toBe(Calendar);
  });

  it('renders a labelled month grid with a selected day and today', () => {
    renderCalendar();
    const grid = screen.getByRole('grid', { name: /mars 2026/i });
    expect(grid).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /mars 2026/i })).toBeInTheDocument();
    expect(
      within(screen.getByRole('gridcell', { selected: true })).getByRole('button'),
    ).toHaveAccessibleName(/jeudi 12 mars 2026/i);
    expect(screen.getByRole('button', { current: 'date' })).toHaveAccessibleName(
      /mercredi 18 mars 2026/i,
    );
  });

  it('starts the week on Monday when weekStartsOn is 1', () => {
    renderCalendar();
    const headers = within(screen.getByRole('grid')).getAllByRole('columnheader');
    expect(headers[0]).toHaveAccessibleName(/lundi/i);
    expect(headers[6]).toHaveAccessibleName(/dimanche/i);
  });

  it('starts the week on Sunday when weekStartsOn is 0', () => {
    renderCalendar({ weekStartsOn: 0, locale: 'en' });
    const headers = within(screen.getByRole('grid')).getAllByRole('columnheader');
    expect(headers[0]).toHaveAccessibleName(/sunday/i);
  });

  it('selects a day on click and announces it', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderCalendar({ onValueChange });
    await user.click(screen.getByRole('button', { name: /vendredi 13 mars 2026/i }));
    expect(onValueChange).toHaveBeenCalledWith({ year: 2026, month: 3, day: 13 });
    expect(
      within(screen.getByRole('gridcell', { selected: true })).getByRole('button'),
    ).toHaveAccessibleName(/vendredi 13 mars 2026/i);
  });

  it('selects the focused day with Enter', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderCalendar({ onValueChange });
    screen.getByRole('button', { name: /jeudi 12 mars 2026/i }).focus();
    await user.keyboard('{ArrowRight}{Enter}');
    expect(onValueChange).toHaveBeenCalledWith({ year: 2026, month: 3, day: 13 });
  });

  it('moves between days with arrow keys', async () => {
    const user = userEvent.setup();
    renderCalendar();
    const selectedDay = screen.getByRole('button', { name: /jeudi 12 mars 2026/i });
    selectedDay.focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('button', { name: /vendredi 13 mars 2026/i })).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: /vendredi 20 mars 2026/i })).toHaveFocus();
  });

  it('moves by week with Home and End', async () => {
    const user = userEvent.setup();
    renderCalendar();
    screen.getByRole('button', { name: /jeudi 12 mars 2026/i }).focus();
    await user.keyboard('{Home}');
    expect(screen.getByRole('button', { name: /lundi 9 mars 2026/i })).toHaveFocus();
    await user.keyboard('{End}');
    expect(screen.getByRole('button', { name: /dimanche 15 mars 2026/i })).toHaveFocus();
  });

  it('changes month with PageDown and the next-month button', async () => {
    const user = userEvent.setup();
    const onMonthChange = vi.fn();
    renderCalendar({ onMonthChange });
    screen.getByRole('button', { name: /jeudi 12 mars 2026/i }).focus();
    await user.keyboard('{PageDown}');
    expect(onMonthChange).toHaveBeenCalledWith({ year: 2026, month: 4, day: 1 });
    expect(screen.getByRole('heading', { name: /avril 2026/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Mois suivant' }));
    expect(screen.getByRole('heading', { name: /mai 2026/i })).toBeInTheDocument();
  });

  it('does not select unavailable or out-of-range dates', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderCalendar({
      onValueChange,
      minValue: calendarDate(2026, 3, 10),
      maxValue: calendarDate(2026, 3, 20),
      isDateUnavailable: (date) => date.day === 13,
    });
    await user.click(screen.getByRole('button', { name: /vendredi 13 mars 2026/i }));
    await user.click(screen.getByRole('button', { name: /lundi 9 mars 2026/i }));
    expect(onValueChange).not.toHaveBeenCalled();
    expect(
      screen.getByRole('button', { name: /vendredi 13 mars 2026/i }),
    ).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders several months and a hidden form value', () => {
    renderCalendar({ numberOfMonths: 2, name: 'start' });
    expect(screen.getAllByRole('grid')).toHaveLength(2);
    expect(screen.getByRole('heading', { name: /mars 2026/i })).toHaveTextContent(
      /avril 2026/i,
    );
    const hidden = document.querySelector('input[name="start"]');
    expect(hidden).toHaveValue('2026-03-12');
  });

  it('does not select when the calendar is disabled', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderCalendar({ disabled: true, onValueChange });
    expect(screen.getByRole('button', { name: 'Mois précédent' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: /vendredi 13 mars 2026/i }));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('jumps to a year and a month from the header selects', async () => {
    const user = userEvent.setup();
    const onMonthChange = vi.fn();
    renderCalendar({ onMonthChange });
    await user.selectOptions(screen.getByRole('combobox', { name: 'Année' }), '2027');
    expect(onMonthChange).toHaveBeenCalledWith({ year: 2027, month: 3, day: 1 });
    expect(screen.getByRole('heading', { name: /mars 2027/i })).toBeInTheDocument();
    await user.selectOptions(screen.getByRole('combobox', { name: 'Mois' }), '4');
    expect(onMonthChange).toHaveBeenCalledWith({ year: 2027, month: 4, day: 1 });
    expect(screen.getByRole('heading', { name: /avril 2027/i })).toBeInTheDocument();
  });

  it('selects a date range and orders the endpoints', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderCalendar({
      selectionMode: 'range',
      numberOfMonths: 1,
      defaultValue: { start: null, end: null },
      onValueChange,
      name: 'from',
      nameEnd: 'to',
    });
    await user.click(screen.getByRole('button', { name: /mardi 10 mars 2026/i }));
    expect(onValueChange).toHaveBeenCalledWith({
      start: { year: 2026, month: 3, day: 10 },
      end: null,
    });
    await user.click(screen.getByRole('button', { name: /lundi 16 mars 2026/i }));
    expect(onValueChange).toHaveBeenLastCalledWith({
      start: { year: 2026, month: 3, day: 10 },
      end: { year: 2026, month: 3, day: 16 },
    });
    expect(document.querySelector('input[name="from"]')).toHaveValue('2026-03-10');
    expect(document.querySelector('input[name="to"]')).toHaveValue('2026-03-16');

    await user.click(screen.getByRole('button', { name: /vendredi 20 mars 2026/i }));
    await user.click(screen.getByRole('button', { name: /jeudi 12 mars 2026/i }));
    expect(onValueChange).toHaveBeenLastCalledWith({
      start: { year: 2026, month: 3, day: 12 },
      end: { year: 2026, month: 3, day: 20 },
    });
  });

  it('selects a range that starts and ends in different months', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderCalendar({
      selectionMode: 'range',
      numberOfMonths: 2,
      defaultValue: { start: null, end: null },
      onValueChange,
    });
    const march = screen.getByRole('grid', { name: /mars 2026/i });
    const april = screen.getByRole('grid', { name: /avril 2026/i });
    await user.click(within(march).getByRole('button', { name: /mardi 24 mars 2026/i }));
    await user.click(
      within(april).getByRole('button', { name: /mercredi 8 avril 2026/i }),
    );
    expect(onValueChange).toHaveBeenLastCalledWith({
      start: { year: 2026, month: 3, day: 24 },
      end: { year: 2026, month: 4, day: 8 },
    });
    expect(screen.getAllByRole('gridcell', { selected: true })).toHaveLength(2);
  });

  it('completes a range after navigating to another month', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderCalendar({
      selectionMode: 'range',
      numberOfMonths: 1,
      defaultValue: { start: null, end: null },
      onValueChange,
    });
    await user.click(screen.getByRole('button', { name: /mardi 24 mars 2026/i }));
    await user.click(screen.getByRole('button', { name: 'Mois suivant' }));
    await user.click(screen.getByRole('button', { name: /mercredi 8 avril 2026/i }));
    expect(onValueChange).toHaveBeenLastCalledWith({
      start: { year: 2026, month: 3, day: 24 },
      end: { year: 2026, month: 4, day: 8 },
    });
  });
});
