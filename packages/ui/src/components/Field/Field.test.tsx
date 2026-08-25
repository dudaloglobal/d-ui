import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Field } from './Field';
import { FieldDescription } from './FieldDescription';
import { FieldError } from './FieldError';
import { Label } from './Label';
import { useFieldControl } from './useFieldControl';

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const field = useFieldControl();
  return <input {...field} {...props} />;
}

describe('Field', () => {
  it('associates the label with the control', () => {
    render(
      <Field>
        <Label>Adresse e-mail</Label>
        <Input />
      </Field>,
    );

    expect(screen.getByLabelText('Adresse e-mail')).toBeInTheDocument();
  });

  it('wires the description through aria-describedby', () => {
    render(
      <Field>
        <Label>Adresse e-mail</Label>
        <FieldDescription>Nous ne la partageons jamais.</FieldDescription>
        <Input />
      </Field>,
    );

    const control = screen.getByLabelText('Adresse e-mail');
    const description = screen.getByText('Nous ne la partageons jamais.');

    expect(control.getAttribute('aria-describedby')).toBe(description.id);
  });

  it('does not reference a description that is not rendered', () => {
    render(
      <Field>
        <Label>Adresse e-mail</Label>
        <Input />
      </Field>,
    );

    expect(screen.getByLabelText('Adresse e-mail')).not.toHaveAttribute(
      'aria-describedby',
    );
  });

  it('marks the control invalid and references the error', () => {
    render(
      <Field invalid>
        <Label>Adresse e-mail</Label>
        <Input />
        <FieldError>Format invalide</FieldError>
      </Field>,
    );

    const control = screen.getByLabelText('Adresse e-mail');
    const error = screen.getByRole('alert');

    expect(control).toHaveAttribute('aria-invalid', 'true');
    expect(control.getAttribute('aria-describedby')).toContain(error.id);
  });

  it('references both description and error when the field is invalid', () => {
    render(
      <Field invalid>
        <Label>Adresse e-mail</Label>
        <FieldDescription>Nous ne la partageons jamais.</FieldDescription>
        <Input />
        <FieldError>Format invalide</FieldError>
      </Field>,
    );

    const control = screen.getByLabelText('Adresse e-mail');
    const ids = control.getAttribute('aria-describedby')?.split(' ') ?? [];

    expect(ids).toHaveLength(2);
    expect(ids).toContain(screen.getByText('Nous ne la partageons jamais.').id);
    expect(ids).toContain(screen.getByRole('alert').id);
  });

  it('renders the error in the danger tone, not the default one', () => {
    render(
      <Field invalid>
        <Label>Adresse e-mail</Label>
        <Input />
        <FieldError>Format invalide</FieldError>
      </Field>,
    );

    // `cx()` ne résout pas les conflits Tailwind : si le ton passait par
    // `className`, `text-fg` resterait présent et gagnerait selon l'ordre du CSS.
    const error = screen.getByRole('alert');
    expect(error).toHaveClass('text-danger');
    expect(error).not.toHaveClass('text-fg');
  });

  it('keeps the error out of the DOM while the field is valid', () => {
    render(
      <Field>
        <Label>Adresse e-mail</Label>
        <Input />
        <FieldError>Format invalide</FieldError>
      </Field>,
    );

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.queryByText('Format invalide')).not.toBeInTheDocument();
  });

  it('marks the control required without duplicating the announcement', () => {
    render(
      <Field required>
        <Label>Adresse e-mail</Label>
        <Input />
      </Field>,
    );

    // Requête par nom accessible : l'astérisque étant `aria-hidden`, il ne doit
    // pas apparaître dans le nom calculé du contrôle.
    const control = screen.getByRole('textbox', { name: 'Adresse e-mail' });
    expect(control).toBeRequired();
  });

  it('propagates the disabled state to the control', () => {
    render(
      <Field disabled>
        <Label>Adresse e-mail</Label>
        <Input />
      </Field>,
    );

    expect(screen.getByLabelText('Adresse e-mail')).toBeDisabled();
  });

  it('names a group with a legend instead of a label', () => {
    render(
      <Field group>
        <Label>Notifications</Label>
        <FieldDescription>Choisissez au moins un canal.</FieldDescription>
        <label>
          <input type="checkbox" /> E-mail
        </label>
      </Field>,
    );

    const group = screen.getByRole('group', { name: /Notifications/ });
    expect(group.tagName).toBe('FIELDSET');
    expect(group.getAttribute('aria-describedby')).toBe(
      screen.getByText('Choisissez au moins un canal.').id,
    );
  });

  it('throws when a part is rendered outside Field', () => {
    expect(() => render(<Label>Orpheline</Label>)).toThrow(/à l'intérieur de <Field>/);
  });
});
