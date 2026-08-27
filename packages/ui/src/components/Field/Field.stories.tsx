import type { Meta, StoryObj } from '@storybook/react';
import type { InputHTMLAttributes } from 'react';
import { fieldArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, fieldCopy } from '../../../.storybook/docs-locale';
import { Field } from './Field';
import { FieldDescription } from './FieldDescription';
import { FieldError } from './FieldError';
import { Label } from './Label';
import { useFieldControl } from './useFieldControl';

/**
 * Stand-in until Input (DS-023). Real controls will call `useFieldControl()`
 * the same way. Not part of the public package.
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

const fieldImport = `import { Field, FieldDescription, FieldError, Label } from 'd-ui';`;

const meta = {
  title: 'Components/Field',
  component: Field,
  argTypes: fieldArgTypes,
  args: { children: null },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    fieldImport,
    `<Field>
  <Label>Adresse e-mail</Label>
  <input type="email" />
</Field>`,
  ),
  render: (_, { globals }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return (
      <Field>
        <Label>{copy.email}</Label>
        <DemoInput type="email" defaultValue={copy.emailValue} />
      </Field>
    );
  },
};

export const WithDescription: Story = {
  name: 'Avec aide',
  parameters: componentSource(
    fieldImport,
    `<Field>
  <Label>Adresse e-mail</Label>
  <FieldDescription>Elle sert à la récupération de compte.</FieldDescription>
  <input type="email" />
</Field>`,
  ),
  render: (_, { globals }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return (
      <Field>
        <Label>{copy.email}</Label>
        <FieldDescription>{copy.emailHelp}</FieldDescription>
        <DemoInput type="email" />
      </Field>
    );
  },
};

export const Required: Story = {
  name: 'Requis',
  parameters: componentSource(
    fieldImport,
    `<Field required>
  <Label>Nom du parcours</Label>
  <FieldDescription>Visible par les étudiants inscrits.</FieldDescription>
  <input />
</Field>`,
  ),
  render: (_, { globals }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return (
      <Field required>
        <Label>{copy.pathName}</Label>
        <FieldDescription>{copy.pathHelp}</FieldDescription>
        <DemoInput />
      </Field>
    );
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  parameters: componentSource(
    fieldImport,
    `<Field invalid required>
  <Label>Adresse e-mail</Label>
  <FieldDescription>Elle sert à la récupération de compte.</FieldDescription>
  <input type="email" defaultValue="etudiant@" />
  <FieldError>Cette adresse n’est pas valide.</FieldError>
</Field>`,
  ),
  render: (_, { globals }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return (
      <Field invalid required>
        <Label>{copy.email}</Label>
        <FieldDescription>{copy.emailHelp}</FieldDescription>
        <DemoInput type="email" defaultValue={copy.emailInvalid} />
        <FieldError>{copy.emailError}</FieldError>
      </Field>
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    fieldImport,
    `<Field disabled>
  <Label>Identifiant</Label>
  <FieldDescription>Attribué par l’établissement.</FieldDescription>
  <input defaultValue="DUD-2026-0142" />
</Field>`,
  ),
  render: (_, { globals }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return (
      <Field disabled>
        <Label>{copy.identifier}</Label>
        <FieldDescription>{copy.identifierHelp}</FieldDescription>
        <DemoInput defaultValue={copy.identifierValue} />
      </Field>
    );
  },
};

export const Group: Story = {
  name: 'Groupe',
  parameters: componentSource(
    fieldImport,
    `<Field group required>
  <Label>Notifications</Label>
  <FieldDescription>Choisissez au moins un canal.</FieldDescription>
  <label>
    <input type="checkbox" /> E-mail
  </label>
</Field>`,
  ),
  render: (_, { globals }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return (
      <Field group required>
        <Label>{copy.notifications}</Label>
        <FieldDescription>{copy.notificationsHelp}</FieldDescription>
        <div className="flex flex-col gap-2 pt-1">
          <label className="text-fg flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> {copy.channelEmail}
          </label>
          <label className="text-fg flex items-center gap-2 text-sm">
            <input type="checkbox" /> {copy.channelSms}
          </label>
        </div>
      </Field>
    );
  },
};
