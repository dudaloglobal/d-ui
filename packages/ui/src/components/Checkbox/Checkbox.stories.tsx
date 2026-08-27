import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { checkboxArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, selectionCopy } from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { Checkbox, CheckboxGroup } from './Checkbox';

const importCheckbox = "import { Checkbox } from 'd-ui';";
const importGroup =
  "import { useState } from 'react';\nimport { Checkbox, CheckboxGroup } from 'd-ui';";

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: checkboxArgTypes,
  parameters: {
    controls: {
      include: [
        'size',
        'label',
        'helper',
        'invalid',
        'disabled',
        'required',
        'indeterminate',
        'checked',
      ],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importCheckbox,
    `<Checkbox label="Recevoir les notifications" />`,
  ),
  render: (args, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox {...args} label={args.label ?? copy.checkboxLabel} />;
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    importCheckbox,
    `<Checkbox label="Recevoir les notifications" defaultChecked disabled />`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.checkboxLabel} defaultChecked disabled />;
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  parameters: componentSource(
    importCheckbox,
    `<Checkbox label="J’accepte les conditions" invalid error="Ce champ est requis." />`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.terms} invalid error={copy.error} />;
  },
};

export const Required: Story = {
  name: 'Requis',
  parameters: componentSource(
    importCheckbox,
    `<Checkbox label="J’accepte les conditions" required />`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.terms} required />;
  },
};

export const Helper: Story = {
  name: 'Aide',
  parameters: componentSource(
    importCheckbox,
    `<Checkbox label="Recevoir les notifications" helper="Vous pourrez changer d’avis." />`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.checkboxLabel} helper={copy.helper} />;
  },
};

export const Indeterminate: Story = {
  name: 'Indéterminé',
  parameters: componentSource(
    importCheckbox,
    `<Checkbox label="Tout sélectionner" indeterminate />`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.selectAll} indeterminate />;
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importCheckbox,
    `<>
    <Checkbox size="sm" label="Petite" />
    <Checkbox size="md" label="Moyenne" />
    <Checkbox size="lg" label="Grande" />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-3">
        <Checkbox size="sm" label={copy.small} />
        <Checkbox size="md" label={copy.medium} />
        <Checkbox size="lg" label={copy.large} />
      </div>
    );
  },
};

export const Group: Story = {
  name: 'Groupe',
  parameters: componentSourceFn(
    importGroup,
    `const [value, setValue] = useState(['email']);
return (
    <CheckboxGroup
        label="Canaux de notification"
        name="channels"
        value={value}
        onChange={setValue}
    >
        <Checkbox value="email" label="Email" />
        <Checkbox value="sms" label="SMS" />
        <Checkbox value="push" label="Push" />
    </CheckboxGroup>
);`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <ChannelsGroup copy={copy} />;
  },
};

export const HorizontalGroup: Story = {
  name: 'Groupe horizontal',
  parameters: componentSourceFn(
    importGroup,
    `const [value, setValue] = useState(['email']);
return (
    <CheckboxGroup
        label="Canaux de notification"
        name="channels"
        orientation="horizontal"
        value={value}
        onChange={setValue}
    >
        <Checkbox value="email" label="Email" />
        <Checkbox value="sms" label="SMS" />
        <Checkbox value="push" label="Push" />
    </CheckboxGroup>
);`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <ChannelsGroup copy={copy} orientation="horizontal" />;
  },
};

function ChannelsGroup({
  copy,
  orientation = 'vertical',
}: {
  copy: ReturnType<typeof selectionCopy>;
  orientation?: 'vertical' | 'horizontal';
}) {
  const [value, setValue] = useState(['email']);
  return (
    <CheckboxGroup
      label={copy.channels}
      name="channels"
      orientation={orientation}
      value={value}
      onChange={setValue}
    >
      <Checkbox value="email" label={copy.email} />
      <Checkbox value="sms" label={copy.sms} />
      <Checkbox value="push" label={copy.push} />
    </CheckboxGroup>
  );
}
