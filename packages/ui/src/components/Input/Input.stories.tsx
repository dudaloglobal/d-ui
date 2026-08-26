import type { Meta, StoryObj } from '@storybook/react';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
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
import { Input, type InputProps } from './Input';
import { Textarea, type TextareaProps } from './Textarea';
import { SearchIcon, stringifyValue } from './textControl';

const importInput = "import { useState } from 'react';\nimport { Input } from 'd-ui';";
const importTextarea =
  "import { useState } from 'react';\nimport { Textarea } from 'd-ui';";

function remainingMessage(copy: InputDocsCopy) {
  return (count: number, maxLength?: number) =>
    copy.countRemaining(Math.max(0, (maxLength ?? 0) - count));
}

function inputSource(jsx: string, initial = ''): ReturnType<typeof componentSourceFn> {
  return componentSourceFn(
    importInput,
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

function textareaSource(jsx: string, initial = ''): ReturnType<typeof componentSourceFn> {
  return componentSourceFn(
    importTextarea,
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

function ControlledInput({
  defaultValue,
  value: valueProp,
  onChange,
  ...props
}: InputProps) {
  const [value, setValue] = useState(() => stringifyValue(valueProp ?? defaultValue));
  return (
    <Input
      {...props}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChange?.(event);
      }}
    />
  );
}

function ControlledTextarea({
  defaultValue,
  value: valueProp,
  onChange,
  ...props
}: TextareaProps) {
  const [value, setValue] = useState(() => stringifyValue(valueProp ?? defaultValue));
  return (
    <Textarea
      {...props}
      value={value}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
        onChange?.(event);
      }}
    />
  );
}

const meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'number', 'tel', 'url'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    invalid: { control: 'boolean' },
    valid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    clearable: { control: 'boolean' },
    showCount: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
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
        'maxLength',
      ],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: inputSource(`<Input
    label="Libellé du champ"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (args, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput {...args} label={args.label ?? copy.fieldLabel} />;
  },
};

export const Disabled: Story = {
  parameters: inputSource(
    `<Input
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
      <ControlledInput label={copy.fieldLabel} defaultValue={copy.filledValue} disabled />
    );
  },
};

export const Valid: Story = {
  parameters: inputSource(
    `<Input
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
      <ControlledInput label={copy.fieldLabel} defaultValue={copy.filledValue} valid />
    );
  },
};

export const Invalid: Story = {
  parameters: inputSource(
    `<Input
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
      <ControlledInput
        label={copy.fieldLabel}
        defaultValue={copy.filledValue}
        invalid
        error={copy.invalidValue}
      />
    );
  },
};

export const Required: Story = {
  parameters: inputSource(`<Input
    label="Libellé du champ"
    value={value}
    required
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} required />;
  },
};

export const Helper: Story = {
  parameters: inputSource(`<Input
    label="Libellé du champ"
    helper="Texte d’aide"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} helper={copy.helper} />;
  },
};

export const Placeholder: Story = {
  parameters: inputSource(`<Input
    label="Libellé du champ"
    placeholder="Texte de substitution"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} placeholder={copy.placeholder} />;
  },
};

export const Icon: Story = {
  parameters: componentSourceFn(
    importInput,
    `${searchIconSource}

const [value, setValue] = useState('');
return (
    <Input
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
      <ControlledInput
        label={copy.fieldLabel}
        type="search"
        icon={<SearchIcon />}
        placeholder={copy.search}
      />
    );
  },
};

export const Clearable: Story = {
  parameters: inputSource(
    `<Input
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
      <ControlledInput
        label={copy.fieldLabel}
        defaultValue={copy.placeholderName}
        clearable
        clearLabel={copy.clear}
      />
    );
  },
};

export const MaxLength: Story = {
  parameters: inputSource(`<Input
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
      <ControlledInput
        label={copy.fieldLabel}
        maxLength={50}
        countMessage={remainingMessage(copy)}
      />
    );
  },
};

export const PrefixSuffix: Story = {
  parameters: componentSource(
    "import { Input } from 'd-ui';",
    '<Input label="Site" prefix="https://" suffix=".com" />',
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledInput
        label={copy.site}
        prefix="https://"
        suffix=".com"
        placeholder="dudalo"
      />
    );
  },
};

export const Sizes: Story = {
  parameters: componentSource(
    "import { Input } from 'd-ui';",
    `<Input size="sm" label="Libellé du champ" />
<Input size="md" label="Libellé du champ" />
<Input size="lg" label="Libellé du champ" />`,
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-4">
        <ControlledInput label={`${copy.fieldLabel} (${copy.small})`} size="sm" />
        <ControlledInput label={`${copy.fieldLabel} (${copy.medium})`} size="md" />
        <ControlledInput label={`${copy.fieldLabel} (${copy.large})`} size="lg" />
      </div>
    );
  },
};

export const Multiline: Story = {
  parameters: textareaSource(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} rows={4} />;
  },
};

export const TextareaValid: Story = {
  parameters: textareaSource(
    `<Textarea
    label="Libellé de la zone de texte"
    value={value}
    valid
    helper="Valeur valide"
    onChange={(event) => setValue(event.target.value)}
/>`,
    'Valeur',
  ),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextarea
        label={copy.textareaLabel}
        defaultValue={copy.filledValue}
        valid
        helper={copy.validValue}
        rows={4}
      />
    );
  },
};

export const TextareaInvalid: Story = {
  parameters: textareaSource(
    `<Textarea
    label="Libellé de la zone de texte"
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
      <ControlledTextarea
        label={copy.textareaLabel}
        defaultValue={copy.filledValue}
        invalid
        error={copy.invalidValue}
        rows={4}
      />
    );
  },
};

export const Number: Story = {
  parameters: inputSource(`<Input
    type="number"
    inputMode="numeric"
    label="Nombre"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput type="number" inputMode="numeric" label={copy.numberLabel} />;
  },
};

export const Password: Story = {
  parameters: inputSource(
    `<Input
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
      <ControlledInput
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
