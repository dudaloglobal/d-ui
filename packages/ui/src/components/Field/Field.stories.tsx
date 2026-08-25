import type { Meta, StoryObj } from '@storybook/react';
import type { InputHTMLAttributes } from 'react';
import { Field } from './Field';
import { FieldDescription } from './FieldDescription';
import { FieldError } from './FieldError';
import { Label } from './Label';
import { useFieldControl } from './useFieldControl';

/**
 * Contrôle de démonstration.
 *
 * `Input` arrive avec DS-023 ; il appellera `useFieldControl()` exactement de
 * cette façon. Les stories utilisent un `input` natif pour montrer que le
 * câblage ne dépend d'aucun composant de saisie particulier.
 */
function DemoInput(props: InputHTMLAttributes<HTMLInputElement>) {
  const field = useFieldControl();

  return (
    <input
      {...field}
      {...props}
      className="border-border text-fg bg-bg focus-visible:ring-focus focus-visible:ring-offset-bg h-10 rounded-md border px-3 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50 aria-invalid:border-2 aria-invalid:border-(--d-ui-color-danger)"
    />
  );
}

const meta = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  // Chaque story fournit son propre arbre via `render` ; `children` n'est là
  // que pour satisfaire la prop requise de `Field`.
  args: { children: null },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field>
      <Label>Adresse e-mail</Label>
      <DemoInput type="email" defaultValue="etudiant@dudalo.com" />
    </Field>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Field>
      <Label>Adresse e-mail</Label>
      <FieldDescription>
        Elle sert uniquement à la récupération de compte.
      </FieldDescription>
      <DemoInput type="email" />
    </Field>
  ),
};

export const Required: Story = {
  render: () => (
    <Field required>
      <Label>Nom du parcours</Label>
      <FieldDescription>Visible par les étudiants inscrits.</FieldDescription>
      <DemoInput />
    </Field>
  ),
};

/** L'erreur n'est rendue que si le champ est `invalid` — sinon elle resterait annoncée. */
export const Invalid: Story = {
  render: () => (
    <Field invalid required>
      <Label>Adresse e-mail</Label>
      <FieldDescription>
        Elle sert uniquement à la récupération de compte.
      </FieldDescription>
      <DemoInput type="email" defaultValue="etudiant@" />
      <FieldError>Cette adresse n’est pas valide.</FieldError>
    </Field>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field disabled>
      <Label>Identifiant</Label>
      <FieldDescription>Attribué par l’établissement.</FieldDescription>
      <DemoInput defaultValue="DUD-2026-0142" />
    </Field>
  ),
};

/** Un groupe se nomme par sa légende : `Field group` rend un `fieldset`. */
export const Group: Story = {
  render: () => (
    <Field group required>
      <Label>Notifications</Label>
      <FieldDescription>Choisissez au moins un canal.</FieldDescription>
      <div className="flex flex-col gap-2 pt-1">
        <label className="text-fg flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked /> E-mail
        </label>
        <label className="text-fg flex items-center gap-2 text-sm">
          <input type="checkbox" /> SMS
        </label>
      </div>
    </Field>
  ),
};
