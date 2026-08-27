import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  Checkbox as CheckboxFromEntry,
  CheckboxGroup as CheckboxGroupFromEntry,
} from '../../index';
import { Checkbox, CheckboxGroup } from './Checkbox';

describe('Checkbox', () => {
  it('is exported from the package entrypoint', () => {
    expect(CheckboxFromEntry).toBe(Checkbox);
    expect(CheckboxGroupFromEntry).toBe(CheckboxGroup);
  });

  it('forwards a ref to the native checkbox', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Checkbox label="Notifications" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current).toHaveAttribute('type', 'checkbox');
  });

  it('names the checkbox from the built-in label', () => {
    render(<Checkbox label="Notifications" name="alerts" />);
    const input = screen.getByRole('checkbox', { name: 'Notifications' });
    expect(input).toHaveAttribute('name', 'alerts');
    expect(input).not.toBeChecked();
  });

  it('toggles on click and Space', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="Notifications" onChange={onChange} />);
    const input = screen.getByRole('checkbox', { name: 'Notifications' });
    await user.click(input);
    expect(input).toBeChecked();
    expect(onChange).toHaveBeenCalledOnce();
    await user.keyboard('[Space]');
    expect(input).not.toBeChecked();
  });

  it('does not fire when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="Notifications" disabled onChange={onChange} />);
    const input = screen.getByRole('checkbox', { name: 'Notifications' });
    expect(input).toBeDisabled();
    await user.click(input);
    expect(onChange).not.toHaveBeenCalled();
    expect(input).not.toBeChecked();
  });

  it('marks the control invalid without relying on colour alone', () => {
    render(<Checkbox label="Conditions" invalid error="Requis" />);
    const input = screen.getByRole('checkbox', { name: 'Conditions' });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('Requis');
  });

  it('treats error as invalid even without the invalid prop', () => {
    render(<Checkbox label="Conditions" error="Requis" />);
    expect(screen.getByRole('checkbox', { name: 'Conditions' })).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });

  it('announces helper text through aria-describedby', () => {
    render(<Checkbox label="Notifications" helper="Vous pourrez changer d’avis." />);
    expect(
      screen.getByRole('checkbox', { name: 'Notifications' }),
    ).toHaveAccessibleDescription('Vous pourrez changer d’avis.');
  });

  it('shows a required asterisk without putting it in the accessible name', () => {
    render(<Checkbox label="Conditions" required />);
    const input = screen.getByRole('checkbox', { name: 'Conditions' });
    expect(input).toBeRequired();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  });

  it('exposes an indeterminate mixed state', () => {
    render(<Checkbox label="Tout sélectionner" indeterminate />);
    const input = screen.getByRole('checkbox', { name: 'Tout sélectionner' });
    expect(input).toHaveAttribute('aria-checked', 'mixed');
    expect((input as HTMLInputElement).indeterminate).toBe(true);
  });
});

describe('CheckboxGroup', () => {
  it('exposes a labelled group and collects checked values', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <CheckboxGroup
        label="Canaux"
        name="channels"
        defaultValue={['email']}
        onChange={onChange}
      >
        <Checkbox value="email" label="Email" />
        <Checkbox value="sms" label="SMS" />
      </CheckboxGroup>,
    );

    const group = screen.getByRole('group', { name: 'Canaux' });
    expect(group).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Email' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'SMS' })).not.toBeChecked();

    await user.click(screen.getByRole('checkbox', { name: 'SMS' }));
    expect(onChange).toHaveBeenCalledWith(['email', 'sms']);
    expect(screen.getByRole('checkbox', { name: 'SMS' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Email' })).toHaveAttribute(
      'name',
      'channels',
    );
  });

  it('does not mark each option required when the group is required', () => {
    render(
      <CheckboxGroup label="Canaux" required>
        <Checkbox value="email" label="Email" />
      </CheckboxGroup>,
    );
    expect(screen.getByRole('group', { name: 'Canaux' })).toHaveAttribute(
      'aria-required',
      'true',
    );
    expect(screen.getByRole('checkbox', { name: 'Email' })).not.toBeRequired();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  });

  it('describes the group when invalid', () => {
    render(
      <CheckboxGroup label="Canaux" error="Choisissez au moins un canal">
        <Checkbox value="email" label="Email" />
      </CheckboxGroup>,
    );
    expect(screen.getByRole('group', { name: 'Canaux' })).toHaveAttribute(
      'aria-invalid',
      'true',
    );
    expect(screen.getByRole('checkbox', { name: 'Email' })).toHaveAccessibleDescription(
      'Choisissez au moins un canal',
    );
  });
});
