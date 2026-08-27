import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { radioArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, selectionCopy } from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { Radio, RadioGroup } from './Radio';

const importGroup =
  "import { useState } from 'react';\nimport { Radio, RadioGroup } from 'd-ui';";

function radioGroupSource(
  jsx: string,
  initial = "'monthly'",
): ReturnType<typeof componentSourceFn> {
  return componentSourceFn(
    importGroup,
    `const [value, setValue] = useState(${initial});
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
  title: 'Components/Radio',
  component: Radio,
  args: {
    value: 'monthly',
  },
  argTypes: radioArgTypes,
  parameters: {
    controls: {
      include: ['size', 'label', 'disabled', 'required'],
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: radioGroupSource(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} />;
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: radioGroupSource(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    disabled
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} disabled />;
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  parameters: radioGroupSource(
    `<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    invalid
    error="Choisissez une formule."
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`,
    "''",
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} defaultValue="" invalid error={copy.radioError} />;
  },
};

export const Required: Story = {
  name: 'Requis',
  parameters: radioGroupSource(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    required
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} required />;
  },
};

export const Helper: Story = {
  name: 'Aide',
  parameters: radioGroupSource(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    helper="Vous pourrez changer d’avis."
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} helper={copy.helper} />;
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    "import { Radio, RadioGroup } from 'd-ui';",
    `<>
    <RadioGroup label="Petite" name="plan-sm" defaultValue="monthly" size="sm">
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
    </RadioGroup>
    <RadioGroup label="Moyenne" name="plan-md" defaultValue="monthly" size="md">
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
    </RadioGroup>
    <RadioGroup label="Grande" name="plan-lg" defaultValue="monthly" size="lg">
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
    </RadioGroup>
</>`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-6">
        <RadioGroup label={copy.small} name="plan-sm" defaultValue="monthly" size="sm">
          <Radio value="monthly" label={copy.monthly} />
          <Radio value="yearly" label={copy.yearly} />
        </RadioGroup>
        <RadioGroup label={copy.medium} name="plan-md" defaultValue="monthly" size="md">
          <Radio value="monthly" label={copy.monthly} />
          <Radio value="yearly" label={copy.yearly} />
        </RadioGroup>
        <RadioGroup label={copy.large} name="plan-lg" defaultValue="monthly" size="lg">
          <Radio value="monthly" label={copy.monthly} />
          <Radio value="yearly" label={copy.yearly} />
        </RadioGroup>
      </div>
    );
  },
};

export const Horizontal: Story = {
  name: 'Groupe horizontal',
  parameters: radioGroupSource(`<RadioGroup
    label="Formule"
    name="plan"
    orientation="horizontal"
    value={value}
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} orientation="horizontal" />;
  },
};

function PlanGroup({
  copy,
  disabled,
  required,
  invalid,
  error,
  helper,
  defaultValue = 'monthly',
  orientation = 'vertical',
}: {
  copy: ReturnType<typeof selectionCopy>;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  error?: string;
  helper?: string;
  defaultValue?: string;
  orientation?: 'vertical' | 'horizontal';
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <RadioGroup
      label={copy.plan}
      value={value}
      onChange={setValue}
      disabled={disabled}
      required={required}
      invalid={invalid}
      error={error}
      helper={helper}
      orientation={orientation}
    >
      <Radio value="monthly" label={copy.monthly} />
      <Radio value="yearly" label={copy.yearly} />
      <Radio value="team" label={copy.team} />
    </RadioGroup>
  );
}
