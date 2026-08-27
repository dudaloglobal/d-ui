import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { textareaArgTypes } from '../../../.storybook/arg-types';
import { componentSourceFn } from '../../../.storybook/docs-source';
import {
  docsLocale,
  inputCopy,
  type InputDocsCopy,
} from '../../../.storybook/docs-locale';
import { stringifyValue } from '../textControl';
import { Textarea, type TextareaProps } from './Textarea';

const importTextarea =
  "import { useState } from 'react';\nimport { Textarea } from 'd-ui';";

function remainingMessage(copy: InputDocsCopy) {
  return (count: number, maxLength?: number) =>
    copy.countRemaining(Math.max(0, (maxLength ?? 0) - count));
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
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: textareaArgTypes,
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
        'clearable',
        'showCount',
        'fullWidth',
        'focusShadow',
        'maxLength',
        'rows',
      ],
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: textareaSource(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} />;
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: textareaSource(
    `<Textarea
    label="Libellé de la zone de texte"
    value={value}
    disabled
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
        disabled
      />
    );
  },
};

export const Valid: Story = {
  name: 'Valide',
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
      />
    );
  },
};

export const Invalid: Story = {
  name: 'Invalide',
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
      />
    );
  },
};

export const MaxLength: Story = {
  name: 'Longueur maximale',
  parameters: textareaSource(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    maxLength={200}
    countMessage={(count, maxLength) =>
        \`\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\`
    }
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return (
      <ControlledTextarea
        label={copy.textareaLabel}
        maxLength={200}
        countMessage={remainingMessage(copy)}
      />
    );
  },
};

export const FocusShadow: Story = {
  name: 'Halo de focus',
  parameters: textareaSource(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    focusShadow
    onChange={(event) => setValue(event.target.value)}
/>`),
  render: (_, { globals }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} focusShadow />;
  },
};
