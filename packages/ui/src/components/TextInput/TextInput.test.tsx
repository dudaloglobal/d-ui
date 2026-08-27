import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { TextInput as TextInputFromEntry } from '../../index';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('is exported from the package entrypoint', () => {
    expect(TextInputFromEntry).toBe(TextInput);
  });

  it('is full width by default', () => {
    const { container } = render(<TextInput label="Nom" />);
    expect(container.firstElementChild).toHaveClass('w-full');
  });

  it('can opt out of full width', () => {
    const { container } = render(<TextInput label="Nom" fullWidth={false} />);
    expect(container.firstElementChild).toHaveClass('w-80');
    expect(container.firstElementChild).not.toHaveClass('w-full');
  });

  it('forwards a ref to the native input', () => {
    const ref = createRef<HTMLInputElement>();
    render(<TextInput label="Nom" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current).toHaveAttribute('type', 'text');
  });

  it('names the textbox from the built-in label and forwards autocomplete and inputMode', () => {
    render(
      <TextInput label="Email" type="email" autoComplete="email" inputMode="email" />,
    );
    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('autocomplete', 'email');
    expect(input).toHaveAttribute('inputmode', 'email');
  });

  it('still accepts an external htmlFor label', () => {
    render(
      <>
        <label htmlFor="name">Nom</label>
        <TextInput id="name" />
      </>,
    );
    expect(screen.getByRole('textbox', { name: 'Nom' })).toBeInTheDocument();
  });

  it('marks the control invalid without relying on colour alone', () => {
    render(<TextInput label="Nom" invalid defaultValue="??" error="Valeur invalide" />);
    const input = screen.getByRole('textbox', { name: 'Nom' });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('Valeur invalide');
  });

  it('marks the control valid without aria-invalid', () => {
    render(<TextInput label="Nom" valid defaultValue="Ada" />);
    expect(screen.getByRole('textbox', { name: 'Nom' })).not.toHaveAttribute(
      'aria-invalid',
    );
  });

  it('treats error as invalid even without the invalid prop', () => {
    render(<TextInput label="Nom" error="Requis" />);
    const input = screen.getByRole('textbox', { name: 'Nom' });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('Requis');
  });

  it('replaces helper with error when the field is invalid', () => {
    render(<TextInput label="Nom" helper="Texte d’aide" error="Valeur invalide" />);
    const input = screen.getByRole('textbox', { name: 'Nom' });
    expect(input).toHaveAccessibleDescription('Valeur invalide');
    expect(input).not.toHaveAccessibleDescription('Texte d’aide');
  });

  it('keeps aria-invalid when both valid and invalid are set', () => {
    render(<TextInput label="Nom" valid invalid defaultValue="??" error="Nope" />);
    expect(screen.getByRole('textbox', { name: 'Nom' })).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });

  it('does not fire when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TextInput label="Nom" disabled onChange={onChange} />);
    const input = screen.getByRole('textbox', { name: 'Nom' });
    expect(input).toBeDisabled();
    await user.type(input, 'Ada');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('shows a required asterisk without putting it in the accessible name', () => {
    render(<TextInput label="Nom" required />);
    const input = screen.getByRole('textbox', { name: 'Nom' });
    expect(input).toBeRequired();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  });

  it('announces helper text through aria-describedby', () => {
    render(<TextInput label="Nom" helper="Texte d’aide" />);
    expect(screen.getByRole('textbox', { name: 'Nom' })).toHaveAccessibleDescription(
      'Texte d’aide',
    );
  });

  it('renders prefix, suffix, and a decorative icon slot', () => {
    render(
      <TextInput label="Site" icon={<span>⌕</span>} prefix="https://" suffix=".com" />,
    );
    expect(screen.getByText('⌕').closest('[aria-hidden="true"]')).not.toBeNull();
    expect(screen.getByText('https://')).toBeInTheDocument();
    expect(screen.getByText('.com')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Site' })).toHaveAccessibleName('Site');
  });

  it('clears the value with an accessible control', async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    const onChange = vi.fn();
    render(
      <TextInput
        label="Nom"
        clearable
        clearLabel="Effacer"
        defaultValue="Ada"
        onClear={onClear}
        onChange={onChange}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Effacer' }));
    expect(screen.getByRole('textbox', { name: 'Nom' })).toHaveValue('');
    expect(onClear).toHaveBeenCalledOnce();
    expect(onChange).toHaveBeenCalled();
  });

  it('does not show the clear control when empty, disabled, or read-only', () => {
    const { rerender } = render(<TextInput label="Nom" clearable clearLabel="Effacer" />);
    expect(screen.queryByRole('button', { name: 'Effacer' })).not.toBeInTheDocument();

    rerender(
      <TextInput
        label="Nom"
        clearable
        clearLabel="Effacer"
        defaultValue="Ada"
        disabled
      />,
    );
    expect(screen.queryByRole('button', { name: 'Effacer' })).not.toBeInTheDocument();

    rerender(
      <TextInput
        label="Nom"
        clearable
        clearLabel="Effacer"
        defaultValue="Ada"
        readOnly
      />,
    );
    expect(screen.queryByRole('button', { name: 'Effacer' })).not.toBeInTheDocument();
  });

  it('toggles password visibility with an accessible name', async () => {
    const user = userEvent.setup();
    render(
      <TextInput
        label="Mot de passe"
        type="password"
        defaultValue="secret"
        revealPasswordLabel="Afficher le mot de passe"
        hidePasswordLabel="Masquer le mot de passe"
      />,
    );
    const input = screen.getByLabelText('Mot de passe', { selector: 'input' });
    expect(input).toHaveAttribute('type', 'password');
    const reveal = screen.getByRole('button', { name: 'Afficher le mot de passe' });
    expect(reveal).toHaveAttribute('aria-pressed', 'false');
    await user.click(reveal);
    expect(input).toHaveAttribute('type', 'text');
    const hide = screen.getByRole('button', { name: 'Masquer le mot de passe' });
    expect(hide).toHaveAttribute('aria-pressed', 'true');
  });

  it('announces remaining characters through aria-describedby when maxLength is set', async () => {
    const user = userEvent.setup();
    render(<TextInput label="Bio" maxLength={10} defaultValue="hey" />);
    const input = screen.getByRole('textbox', { name: 'Bio' });
    expect(input).toHaveAccessibleDescription('7 characters remaining');
    await user.type(input, '!');
    expect(input).toHaveAccessibleDescription('6 characters remaining');
  });

  it('renders a number input as a spinbutton', () => {
    render(
      <TextInput label="Quantité" type="number" inputMode="numeric" defaultValue={3} />,
    );
    expect(screen.getByRole('spinbutton', { name: 'Quantité' })).toHaveAttribute(
      'inputmode',
      'numeric',
    );
  });

  it('exposes a searchbox for type="search"', () => {
    render(<TextInput label="Recherche" type="search" />);
    expect(screen.getByRole('searchbox', { name: 'Recherche' })).toBeInTheDocument();
  });

  it('does not add a password toggle on a plain text field', () => {
    render(<TextInput label="Nom" defaultValue="Ada" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('can hide the character count when maxLength is set', () => {
    render(<TextInput label="Bio" maxLength={10} defaultValue="hey" showCount={false} />);
    const input = screen.getByRole('textbox', { name: 'Bio' });
    expect(input).not.toHaveAccessibleDescription('7 characters remaining');
    expect(screen.queryByText(/characters remaining/)).not.toBeInTheDocument();
  });

  it('uses a localized countMessage', () => {
    render(
      <TextInput
        label="Bio"
        maxLength={10}
        defaultValue="hey"
        countMessage={(count, max) => `${max! - count} restants`}
      />,
    );
    expect(screen.getByRole('textbox', { name: 'Bio' })).toHaveAccessibleDescription(
      '7 restants',
    );
  });

  it('updates an uncontrolled value as the user types', async () => {
    const user = userEvent.setup();
    render(<TextInput label="Nom" name="given-name" />);
    const input = screen.getByRole('textbox', { name: 'Nom' });
    await user.type(input, 'Ada');
    expect(input).toHaveValue('Ada');
    expect(input).toHaveAttribute('name', 'given-name');
  });

  it('opts into the focus glow only when focusShadow is passed', () => {
    const { container, rerender } = render(<TextInput label="Nom" />);
    expect(container.innerHTML).not.toContain('d-ui-shadow-focus');
    rerender(<TextInput label="Nom" focusShadow />);
    expect(container.innerHTML).toContain('d-ui-shadow-focus');
  });
});
