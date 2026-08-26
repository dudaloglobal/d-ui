import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Input as InputFromEntry, Textarea as TextareaFromEntry } from '../../index';
import { Input } from './Input';
import { Textarea } from './Textarea';

describe('Input', () => {
  it('is exported from the package entrypoint', () => {
    expect(InputFromEntry).toBe(Input);
    expect(TextareaFromEntry).toBe(Textarea);
  });

  it('names the textbox from the built-in label and forwards autocomplete and inputMode', () => {
    render(<Input label="Email" type="email" autoComplete="email" inputMode="email" />);
    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('autocomplete', 'email');
    expect(input).toHaveAttribute('inputmode', 'email');
  });

  it('still accepts an external htmlFor label', () => {
    render(
      <>
        <label htmlFor="name">Nom</label>
        <Input id="name" />
      </>,
    );
    expect(screen.getByRole('textbox', { name: 'Nom' })).toBeInTheDocument();
  });

  it('marks the control invalid without relying on colour alone', () => {
    render(<Input label="Nom" invalid defaultValue="??" error="Valeur invalide" />);
    const input = screen.getByRole('textbox', { name: 'Nom' });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('Valeur invalide');
  });

  it('marks the control valid without aria-invalid', () => {
    render(<Input label="Nom" valid defaultValue="Ada" />);
    expect(screen.getByRole('textbox', { name: 'Nom' })).not.toHaveAttribute(
      'aria-invalid',
    );
  });

  it('does not fire when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input label="Nom" disabled onChange={onChange} />);
    const input = screen.getByRole('textbox', { name: 'Nom' });
    expect(input).toBeDisabled();
    await user.type(input, 'Ada');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('shows a required asterisk without putting it in the accessible name', () => {
    render(<Input label="Nom" required />);
    const input = screen.getByRole('textbox', { name: 'Nom' });
    expect(input).toBeRequired();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  });

  it('announces helper text through aria-describedby', () => {
    render(<Input label="Nom" helper="Texte d’aide" />);
    expect(screen.getByRole('textbox', { name: 'Nom' })).toHaveAccessibleDescription(
      'Texte d’aide',
    );
  });

  it('renders prefix, suffix, and icon slots', () => {
    render(<Input label="Site" icon={<span>⌕</span>} prefix="https://" suffix=".com" />);
    expect(screen.getByText('⌕')).toBeInTheDocument();
    expect(screen.getByText('https://')).toBeInTheDocument();
    expect(screen.getByText('.com')).toBeInTheDocument();
  });

  it('clears the value with an accessible control', async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    const onChange = vi.fn();
    render(
      <Input
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

  it('toggles password visibility with an accessible name', async () => {
    const user = userEvent.setup();
    render(
      <Input
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
    render(<Input label="Bio" maxLength={10} defaultValue="hey" />);
    const input = screen.getByRole('textbox', { name: 'Bio' });
    expect(input).toHaveAccessibleDescription('7 characters remaining');
    await user.type(input, '!');
    expect(input).toHaveAccessibleDescription('6 characters remaining');
  });

  it('renders a number input as a spinbutton', () => {
    render(<Input label="Quantité" type="number" inputMode="numeric" defaultValue={3} />);
    expect(screen.getByRole('spinbutton', { name: 'Quantité' })).toHaveAttribute(
      'inputmode',
      'numeric',
    );
  });
});

describe('Textarea', () => {
  it('renders a labeled multiline control', async () => {
    const user = userEvent.setup();
    render(<Textarea label="Commentaire" />);
    const area = screen.getByRole('textbox', { name: 'Commentaire' });
    expect(area.tagName).toBe('TEXTAREA');
    await user.type(area, 'Bien reçu');
    expect(area).toHaveValue('Bien reçu');
  });

  it('clears and counts remaining characters', async () => {
    const user = userEvent.setup();
    render(
      <Textarea
        label="Commentaire"
        clearable
        clearLabel="Effacer"
        maxLength={20}
        defaultValue="Hello"
      />,
    );
    const area = screen.getByRole('textbox', { name: 'Commentaire' });
    expect(area).toHaveAccessibleDescription('15 characters remaining');
    await user.click(screen.getByRole('button', { name: 'Effacer' }));
    expect(area).toHaveValue('');
    expect(area).toHaveAccessibleDescription('20 characters remaining');
  });
});
