import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { textInputArgTypes } from '../../../.storybook/arg-types';
import {
  componentSource,
  componentSourceFn,
  searchIconSource,
} from '../../../.storybook/docs-source';
import {
  docsLocale,
  inputCopy,
  type InputDocsCopy,
} from '../../../.storybook/docs-locale';
import { SearchIcon, stringifyValue } from '../textControl';
import { TextInput, type TextInputProps } from './TextInput';

const importTextInput =
  "import { useState } from 'react';\nimport { TextInput } from 'd-ui';";

function remainingMessage(copy: InputDocsCopy) {
  return (count: number, maxLength?: number) =>
    copy.countRemaining(Math.max(0, (maxLength ?? 0) - count));
}

function textInputSource(
  jsx: string,
  initial = '',
): ReturnType<typeof componentSourceFn> {
  return componentSourceFn(
    importTextInput,
    `const [value, setValue] = useState(${JSON.stringify(initial)});
return (
${jsx
  .trim()
  .split('\n')
  .map((line) => `    ${line}`)
  .join('\n')}
);`,
  );
}

function ControlledTextInput({
  defaultValue,
  value: valueProp,
  onChange,
  ...props
}: TextInputProps) {
  const [value, setValue] = useState(() => stringifyValue(valueProp ?? defaultValue));
  return (
    <TextInput
      {...props}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChange?.(event);
      }}
    />
  );
}

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: textInputArgTypes,
  parameters: {
    controls: {
      include: [
        'type',
        'size',
        'label',
        'helper',
        'placeholder',
        'invalid',
        'valid',
        'disabled',
        'required',
        'clearable',
        'showCount',
        'fullWidth',
        'focusShadow',
        'maxLength',
      ],
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: textInputSource(`<TextInput
    label="Libellé du champ"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (args, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput {...args} label={args.label ?? copy.fieldLabel} />;
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: textInputSource(
    `<TextInput
    label="Libellé du champ"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>`,
    'Valeur',
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextInput
        label={copy.fieldLabel}
        defaultValue={copy.filledValue}
        disabled
      />
    );
  },
};

export const Valid: Story = {
  name: 'Valide',
  parameters: textInputSource(
    `<TextInput
    label="Libellé du champ"
    value={value}
    valid
    onChange={(event) => setValue(event.target.value)}
/>`,
    'Valeur',
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextInput
        label={copy.fieldLabel}
        defaultValue={copy.filledValue}
        valid
      />
    );
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  parameters: textInputSource(
    `<TextInput
    label="Libellé du champ"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>`,
    'Valeur',
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextInput
        label={copy.fieldLabel}
        defaultValue={copy.filledValue}
        invalid
        error={copy.invalidValue}
      />
    );
  },
};

export const Required: Story = {
  name: 'Requis',
  parameters: textInputSource(`<TextInput
    label="Libellé du champ"
    value={value}
    required
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} required />;
  },
};

export const Helper: Story = {
  name: 'Aide',
  parameters: textInputSource(`<TextInput
    label="Libellé du champ"
    helper="Texte d’aide"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} helper={copy.helper} />;
  },
};

export const Placeholder: Story = {
  name: 'Texte de substitution',
  parameters: textInputSource(`<TextInput
    label="Libellé du champ"
    placeholder="Texte de substitution"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} placeholder={copy.placeholder} />;
  },
};

export const Icon: Story = {
  name: 'Icône',
  parameters: componentSourceFn(
    importTextInput,
    `${searchIconSource}

const [value, setValue] = useState('');
return (
    <TextInput
        type="search"
        label="Libellé du champ"
        icon={search}
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
);`,
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextInput
        label={copy.fieldLabel}
        type="search"
        icon={<SearchIcon />}
        placeholder={copy.search}
      />
    );
  },
};

export const Clearable: Story = {
  name: 'Effaçable',
  parameters: textInputSource(
    `<TextInput
    label="Libellé du champ"
    value={value}
    clearable
    clearLabel="Effacer"
    onChange={(event) => setValue(event.target.value)}
    onClear={() => setValue('')}
/>`,
    'Ada Lovelace',
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextInput
        label={copy.fieldLabel}
        defaultValue={copy.placeholderName}
        clearable
        clearLabel={copy.clear}
      />
    );
  },
};

export const MaxLength: Story = {
  name: 'Longueur maximale',
  parameters: textInputSource(`<TextInput
    label="Libellé du champ"
    value={value}
    maxLength={50}
    countMessage={(count, maxLength) =>
        \`\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\`
    }
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextInput
        label={copy.fieldLabel}
        maxLength={50}
        countMessage={remainingMessage(copy)}
      />
    );
  },
};

export const PrefixSuffix: Story = {
  name: 'Préfixe et suffixe',
  parameters: componentSource(
    "import { TextInput } from 'd-ui';",
    '<TextInput label="Site" prefix="https://" suffix=".com" />',
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextInput
        label={copy.site}
        prefix="https://"
        suffix=".com"
        placeholder="dudalo"
      />
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    "import { TextInput } from 'd-ui';",
    `<TextInput size="sm" label="Libellé du champ" />
<TextInput size="md" label="Libellé du champ" />
<TextInput size="lg" label="Libellé du champ" />`,
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-4">
        <ControlledTextInput label={`${copy.fieldLabel} (${copy.small})`} size="sm" />
        <ControlledTextInput label={`${copy.fieldLabel} (${copy.medium})`} size="md" />
        <ControlledTextInput label={`${copy.fieldLabel} (${copy.large})`} size="lg" />
      </div>
    );
  },
};

export const FocusShadow: Story = {
  name: 'Halo de focus',
  parameters: textInputSource(`<TextInput
    label="Libellé du champ"
    value={value}
    focusShadow
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} focusShadow />;
  },
};

export const Number: Story = {
  name: 'Nombre',
  parameters: textInputSource(`<TextInput
    type="number"
    inputMode="numeric"
    label="Nombre"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextInput type="number" inputMode="numeric" label={copy.numberLabel} />
    );
  },
};

export const Password: Story = {
  name: 'Mot de passe',
  parameters: textInputSource(
    `<TextInput
    type="password"
    autoComplete="current-password"
    label="Mot de passe"
    value={value}
    revealPasswordLabel="Afficher le mot de passe"
    hidePasswordLabel="Masquer le mot de passe"
    onChange={(event) => setValue(event.target.value)}
/>`,
    'secret',
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextInput
        type="password"
        autoComplete="current-password"
        label={copy.password}
        defaultValue="secret"
        revealPasswordLabel={copy.revealPassword}
        hidePasswordLabel={copy.hidePassword}
      />
    );
  },
};
