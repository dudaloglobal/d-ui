import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Switch as SwitchFromEntry } from '../../index';
import { Switch } from './Switch';

describe('Switch', () => {
  it('is exported from the package entrypoint', () => {
    expect(SwitchFromEntry).toBe(Switch);
  });

  it('forwards a ref to the native checkbox', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Switch label="Mode compact" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current).toHaveAttribute('type', 'checkbox');
    expect(ref.current).toHaveAttribute('role', 'switch');
  });

  it('exposes an accessible name and checked state', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch label="Mode compact" onChange={onChange} />);
    const control = screen.getByRole('switch', { name: 'Mode compact' });
    expect(control).toHaveAttribute('aria-checked', 'false');
    expect(control).not.toBeChecked();
    await user.click(control);
    expect(control).toBeChecked();
    expect(control).toHaveAttribute('aria-checked', 'true');
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('toggles with Space', async () => {
    const user = userEvent.setup();
    render(<Switch label="Mode compact" />);
    const control = screen.getByRole('switch', { name: 'Mode compact' });
    control.focus();
    await user.keyboard('[Space]');
    expect(control).toBeChecked();
  });

  it('does not fire when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch label="Mode compact" disabled onChange={onChange} />);
    const control = screen.getByRole('switch', { name: 'Mode compact' });
    expect(control).toBeDisabled();
    await user.click(control);
    expect(onChange).not.toHaveBeenCalled();
    expect(control).not.toBeChecked();
  });

  it('marks the control invalid without relying on colour alone', () => {
    render(<Switch label="Mode compact" invalid error="Requis" />);
    const control = screen.getByRole('switch', { name: 'Mode compact' });
    expect(control).toHaveAttribute('aria-invalid', 'true');
    expect(control).toHaveAccessibleDescription('Requis');
  });

  it('announces helper text through aria-describedby', () => {
    render(<Switch label="Mode compact" helper="Réduit les marges." />);
    expect(
      screen.getByRole('switch', { name: 'Mode compact' }),
    ).toHaveAccessibleDescription('Réduit les marges.');
  });

  it('shows a required asterisk without putting it in the accessible name', () => {
    render(<Switch label="Mode compact" required />);
    const control = screen.getByRole('switch', { name: 'Mode compact' });
    expect(control).toBeRequired();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  });
});
