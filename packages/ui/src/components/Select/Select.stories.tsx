import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { selectArgTypes } from '../../../.storybook/arg-types';
import {
  docsLocale,
  selectCopy,
  type SelectDocsCopy,
} from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { Select, type SelectItem, type SelectProps } from './Select';

const importSelect = "import { Select } from 'd-ui';";
const importControlled =
  "import { useState } from 'react';\nimport { Select } from 'd-ui';";

function countries(copy: SelectDocsCopy, disabledLast = false): SelectItem[] {
  return [
    { value: 'fr', label: copy.france },
    { value: 'be', label: copy.belgium },
    { value: 'ca', label: copy.canada },
    { value: 'ch', label: copy.switzerland, disabled: disabledLast },
  ];
}

function groupedCountries(copy: SelectDocsCopy): SelectItem[] {
  return [
    {
      label: copy.europe,
      options: [
        { value: 'fr', label: copy.france },
        { value: 'be', label: copy.belgium },
      ],
    },
    {
      label: copy.americas,
      options: [{ value: 'ca', label: copy.canada }],
    },
  ];
}

function ControlledSelect({
  value: valueProp,
  defaultValue,
  onValueChange,
  ...props
}: SelectProps) {
  const [value, setValue] = useState(valueProp ?? defaultValue);
  return (
    <Select
      {...props}
      value={value}
      onValueChange={(next) => {
        setValue(next);
        onValueChange?.(next);
      }}
    />
  );
}

function selectSource(jsx: string) {
  return componentSourceFn(
    importControlled,
    `const [value, setValue] = useState();
return (
${jsx
  .trim()
  .split('\n')
  .map((line) => `    ${line}`)
  .join('\n')}
);`,
  );
}

const meta = {
  title: 'Components/Select',
  component: Select,
  argTypes: selectArgTypes,
  parameters: {
    controls: {
      include: [
        'size',
        'label',
        'helper',
        'placeholder',
        'invalid',
        'valid',
        'disabled',
        'required',
        'fullWidth',
      ],
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  args: { options: [] },
  parameters: selectSource(`<Select
    label="Pays"
    placeholder="Choisir"
    options={[
        { value: 'fr', label: 'France' },
        { value: 'be', label: 'Belgique' },
        { value: 'ca', label: 'Canada' },
    ]}
    value={value}
    onValueChange={setValue}
/>`),
  render: (args, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <ControlledSelect
        {...args}
        label={args.label ?? copy.country}
        placeholder={copy.choose}
        options={countries(copy)}
      />
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  args: { options: [] },
  parameters: componentSource(
    importSelect,
    `<Select label="Pays" options={options} defaultValue="fr" disabled />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Select label={copy.country} options={countries(copy)} defaultValue="fr" disabled />
    );
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  args: { options: [] },
  parameters: componentSource(
    importSelect,
    `<Select label="Pays" options={options} invalid error="Ce champ est requis." />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Select label={copy.country} options={countries(copy)} invalid error={copy.error} />
    );
  },
};

export const Required: Story = {
  name: 'Requis',
  args: { options: [] },
  parameters: selectSource(`<Select
    label="Pays"
    required
    options={options}
    value={value}
    onValueChange={setValue}
/>`),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <ControlledSelect label={copy.country} options={countries(copy)} required />;
  },
};

export const Helper: Story = {
  name: 'Aide',
  args: { options: [] },
  parameters: componentSource(
    importSelect,
    `<Select label="Pays" helper="Le pays de résidence." options={options} />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Select label={copy.country} helper={copy.helper} options={countries(copy)} />;
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  args: { options: [] },
  parameters: componentSource(
    importSelect,
    `<>
    <Select size="sm" label="Petite" options={options} />
    <Select size="md" label="Moyenne" options={options} />
    <Select size="lg" label="Grande" options={options} />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    const options = countries(copy);
    return (
      <div className="flex w-full max-w-md flex-col gap-4">
        <Select size="sm" label={copy.small} options={options} />
        <Select size="md" label={copy.medium} options={options} />
        <Select size="lg" label={copy.large} options={options} />
      </div>
    );
  },
};

export const Group: Story = {
  name: 'Groupe',
  args: { options: [] },
  parameters: componentSource(
    importSelect,
    `<Select
    label="Pays"
    options={[
        { label: 'Europe', options: [{ value: 'fr', label: 'France' }] },
        { label: 'Amériques', options: [{ value: 'ca', label: 'Canada' }] },
    ]}
/>`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Select label={copy.country} options={groupedCountries(copy)} />;
  },
};

export const DisabledOptions: Story = {
  name: 'Options désactivées',
  args: { options: [] },
  parameters: componentSource(
    importSelect,
    `<Select
    label="Pays"
    options={[
        { value: 'fr', label: 'France' },
        { value: 'ch', label: 'Suisse', disabled: true },
    ]}
/>`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Select label={copy.country} options={countries(copy, true)} />;
  },
};
