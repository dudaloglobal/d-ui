import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Textarea as TextareaFromEntry } from '../../index';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('is exported from the package entrypoint', () => {
    expect(TextareaFromEntry).toBe(Textarea);
  });

  it('is full width by default', () => {
    const { container } = render(<Textarea label="Commentaire" />);
    expect(container.firstElementChild).toHaveClass('w-full');
  });

  it('renders a labeled multiline control', async () => {
    const user = userEvent.setup();
    render(<Textarea label="Commentaire" />);
    const area = screen.getByRole('textbox', { name: 'Commentaire' });
    expect(area.tagName).toBe('TEXTAREA');
    expect(area).toHaveAttribute('rows', '2');
    expect(area).toHaveClass('resize-none');
    await user.type(area, 'Bien reçu');
    expect(area).toHaveValue('Bien reçu');
  });

  it('can opt out of full width and honors a custom rows count', () => {
    const { container } = render(
      <Textarea label="Commentaire" fullWidth={false} rows={6} />,
    );
    expect(container.firstElementChild).toHaveClass('w-80');
    expect(screen.getByRole('textbox', { name: 'Commentaire' })).toHaveAttribute(
      'rows',
      '6',
    );
  });

  it('forwards a ref to the native textarea', () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea label="Commentaire" ref={ref} />);
    expect(ref.current?.tagName).toBe('TEXTAREA');
  });

  it('still accepts an external htmlFor label', () => {
    render(
      <>
        <label htmlFor="note">Note</label>
        <Textarea id="note" />
      </>,
    );
    expect(screen.getByRole('textbox', { name: 'Note' })).toBeInTheDocument();
  });

  it('marks the control invalid without relying on colour alone', () => {
    render(<Textarea label="Commentaire" invalid error="Trop court" />);
    const area = screen.getByRole('textbox', { name: 'Commentaire' });
    expect(area).toHaveAttribute('aria-invalid', 'true');
    expect(area).toHaveAccessibleDescription('Trop court');
  });

  it('does not fire when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Textarea label="Commentaire" disabled onChange={onChange} />);
    const area = screen.getByRole('textbox', { name: 'Commentaire' });
    expect(area).toBeDisabled();
    await user.type(area, 'Ada');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('shows a required asterisk without putting it in the accessible name', () => {
    render(<Textarea label="Commentaire" required />);
    const area = screen.getByRole('textbox', { name: 'Commentaire' });
    expect(area).toBeRequired();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  });

  it('announces helper text through aria-describedby', () => {
    render(<Textarea label="Commentaire" helper="Soyez précis" />);
    expect(
      screen.getByRole('textbox', { name: 'Commentaire' }),
    ).toHaveAccessibleDescription('Soyez précis');
  });

  it('keeps newlines in the value', async () => {
    const user = userEvent.setup();
    render(<Textarea label="Commentaire" />);
    const area = screen.getByRole('textbox', { name: 'Commentaire' });
    await user.type(area, 'Ligne 1{Enter}Ligne 2');
    expect(area).toHaveValue('Ligne 1\nLigne 2');
  });

  it('uses compact filled chrome instead of a tall outlined box', () => {
    const { container } = render(<Textarea label="Commentaire" />);
    const frame = container.querySelector('.bg-field');
    expect(frame).toHaveClass('py-2', 'items-start');
    expect(frame).not.toHaveClass('min-h-24');
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
