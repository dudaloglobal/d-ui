import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  DatePicker as DatePickerFromEntry,
  DateTimePicker as DateTimePickerFromEntry,
  TimePicker as TimePickerFromEntry,
} from '../../index';
import { DatePicker } from './DatePicker';
import { DateTimePicker } from './DateTimePicker';
import { TimePicker } from './TimePicker';

const today = { year: 2026, month: 3, day: 18 };

describe('DatePicker', () => {
  it('is exported from the package entrypoint', () => {
    expect(DatePickerFromEntry).toBe(DatePicker);
    expect(TimePickerFromEntry).toBe(TimePicker);
    expect(DateTimePickerFromEntry).toBe(DateTimePicker);
  });

  it('parses a typed date on blur and posts ISO on the hidden field', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <DatePicker
        label="Échéance"
        name="due"
        today={today}
        onValueChange={onValueChange}
      />,
    );
    const input = screen.getByRole('textbox', { name: 'Échéance' });
    await user.type(input, '12/03/2026');
    await user.tab();
    expect(onValueChange).toHaveBeenCalledWith({
      year: 2026,
      month: 3,
      day: 12,
    });
    expect(document.querySelector('input[name="due"]')).toHaveValue('2026-03-12');
  });

  it('announces an invalid typed date', async () => {
    const user = userEvent.setup();
    render(<DatePicker label="Échéance" today={today} />);
    const input = screen.getByRole('textbox', { name: 'Échéance' });
    await user.type(input, '99/99/2026');
    await user.tab();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Date invalide.')).toBeInTheDocument();
  });

  it('commits a calendar day and closes the popover', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<DatePicker label="Échéance" today={today} onValueChange={onValueChange} />);
    await user.click(screen.getByRole('button', { name: 'Ouvrir le calendrier' }));
    expect(
      screen.getByRole('dialog', { name: 'Ouvrir le calendrier' }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /jeudi 12 mars 2026/i }));
    expect(onValueChange).toHaveBeenCalledWith({
      year: 2026,
      month: 3,
      day: 12,
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Échéance' })).toHaveValue('12/03/2026');
  });

  it('closes the calendar on Escape', async () => {
    const user = userEvent.setup();
    render(<DatePicker label="Échéance" today={today} />);
    await user.click(screen.getByRole('button', { name: 'Ouvrir le calendrier' }));
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('clears the value from the named control', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <DatePicker
        label="Échéance"
        today={today}
        defaultValue={{ year: 2026, month: 3, day: 12 }}
        onValueChange={onValueChange}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Effacer' }));
    expect(onValueChange).toHaveBeenCalledWith(null);
    expect(screen.getByRole('textbox', { name: 'Échéance' })).toHaveValue('');
  });

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    render(<DatePicker label="Échéance" today={today} disabled />);
    expect(screen.getByRole('textbox', { name: 'Échéance' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Ouvrir le calendrier' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Ouvrir le calendrier' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

describe('TimePicker', () => {
  it('parses a typed time and exposes hour/minute spinbuttons', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<TimePicker label="Heure de début" onValueChange={onValueChange} />);
    const input = screen.getByRole('textbox', { name: 'Heure de début' });
    await user.type(input, '14:30');
    await user.tab();
    expect(onValueChange).toHaveBeenCalledWith({ hour: 14, minute: 30 });
    await user.click(screen.getByRole('button', { name: 'Ouvrir le sélecteur d’heure' }));
    expect(screen.getByRole('spinbutton', { name: 'Heure' })).toHaveAttribute(
      'aria-valuenow',
      '14',
    );
    fireEvent.keyDown(screen.getByRole('spinbutton', { name: 'Heure' }), {
      key: 'ArrowUp',
    });
    expect(onValueChange).toHaveBeenLastCalledWith({ hour: 15, minute: 30 });
  });
});

describe('DateTimePicker', () => {
  it('parses a typed date and time', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <DateTimePicker
        label="Soutenance"
        today={today}
        name="defense"
        onValueChange={onValueChange}
      />,
    );
    const input = screen.getByRole('textbox', { name: 'Soutenance' });
    await user.type(input, '12/03/2026 09:15');
    await user.tab();
    expect(onValueChange).toHaveBeenCalledWith({
      date: { year: 2026, month: 3, day: 12 },
      time: { hour: 9, minute: 15 },
    });
    expect(document.querySelector('input[name="defense"]')).toHaveValue(
      '2026-03-12T09:15',
    );
  });
});
