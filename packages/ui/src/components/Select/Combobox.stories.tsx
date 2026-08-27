import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { comboboxArgTypes } from '../../../.storybook/arg-types';
import {
  docsLocale,
  selectCopy,
  type SelectDocsCopy,
} from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { Combobox, type ComboboxProps } from './Combobox';
import type { SelectItem } from './Select';

const importCombobox = "import { Combobox } from 'd-ui';";
const importControlled =
  "import { useState } from 'react';\nimport { Combobox } from 'd-ui';";

function cities(copy: SelectDocsCopy, disabledLast = false): SelectItem[] {
  return [
    { value: 'paris', label: copy.paris },
    { value: 'lyon', label: copy.lyon },
    { value: 'marseille', label: copy.marseille },
    { value: 'bruxelles', label: copy.brussels, disabled: disabledLast },
  ];
}

function groupedCities(copy: SelectDocsCopy): SelectItem[] {
  return [
    {
      label: copy.france,
      options: [
        { value: 'paris', label: copy.paris },
        { value: 'lyon', label: copy.lyon },
      ],
    },
    {
      label: copy.belgium,
      options: [{ value: 'bruxelles', label: copy.brussels }],
    },
  ];
}

function ControlledCombobox({
  value: valueProp,
  defaultValue,
  onValueChange,
  ...props
}: ComboboxProps) {
  const [value, setValue] = useState(valueProp ?? defaultValue);
  return (
    <Combobox
      {...props}
      value={value}
      onValueChange={(next) => {
        setValue(next);
        onValueChange?.(next);
      }}
    />
  );
}

function comboboxSource(jsx: string) {
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
  title: 'Components/Combobox',
  component: Combobox,
  argTypes: comboboxArgTypes,
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
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  args: { options: [] },
  parameters: comboboxSource(`<Combobox
    label="Ville"
    placeholder="Rechercher"
    options={[
        { value: 'paris', label: 'Paris' },
        { value: 'lyon', label: 'Lyon' },
        { value: 'marseille', label: 'Marseille' },
    ]}
    value={value}
    onValueChange={setValue}
/>`),
  render: (args, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <ControlledCombobox
        {...args}
        label={args.label ?? copy.city}
        placeholder={copy.search}
        options={cities(copy)}
      />
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<Combobox label="Ville" options={options} defaultValue="paris" disabled />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox label={copy.city} options={cities(copy)} defaultValue="paris" disabled />
    );
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<Combobox label="Ville" options={options} invalid error="Ce champ est requis." />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox label={copy.city} options={cities(copy)} invalid error={copy.error} />
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<>
    <Combobox size="sm" label="Petite" options={options} />
    <Combobox size="md" label="Moyenne" options={options} />
    <Combobox size="lg" label="Grande" options={options} />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    const options = cities(copy);
    return (
      <div className="flex w-full max-w-md flex-col gap-4">
        <Combobox size="sm" label={copy.small} options={options} />
        <Combobox size="md" label={copy.medium} options={options} />
        <Combobox size="lg" label={copy.large} options={options} />
      </div>
    );
  },
};

export const Group: Story = {
  name: 'Groupe',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<Combobox
    label="Ville"
    options={[
        { label: 'France', options: [{ value: 'paris', label: 'Paris' }] },
        { label: 'Belgique', options: [{ value: 'bruxelles', label: 'Bruxelles' }] },
    ]}
/>`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={groupedCities(copy)} />;
  },
};

export const Empty: Story = {
  name: 'État vide',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<Combobox label="Ville" options={[]} emptyMessage="Aucune option" />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox
        label={copy.city}
        options={[]}
        emptyMessage={copy.empty}
        defaultValue=""
      />
    );
  },
};
