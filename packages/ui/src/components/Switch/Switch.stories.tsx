import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { switchArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, selectionCopy } from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { Switch } from './Switch';

const importSwitch = "import { Switch } from 'd-ui';";
const importControlled =
  "import { useState } from 'react';\nimport { Switch } from 'd-ui';";

const meta = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: switchArgTypes,
  parameters: {
    controls: {
      include: ['size', 'label', 'helper', 'invalid', 'disabled', 'required', 'checked'],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(importSwitch, `<Switch label="Mode compact" />`),
  render: (args, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch {...args} label={args.label ?? copy.switchLabel} />;
  },
};

export const On: Story = {
  name: 'Activé',
  parameters: componentSourceFn(
    importControlled,
    `const [on, setOn] = useState(true);
return (
    <Switch
        label="Mode compact"
        checked={on}
        onChange={(event) => setOn(event.target.checked)}
    />
);`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <ControlledSwitch label={copy.switchLabel} defaultChecked />;
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    importSwitch,
    `<Switch label="Mode compact" defaultChecked disabled />`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} defaultChecked disabled />;
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  parameters: componentSource(
    importSwitch,
    `<Switch label="Mode compact" invalid error="Ce champ est requis." />`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} invalid error={copy.error} />;
  },
};

export const Required: Story = {
  name: 'Requis',
  parameters: componentSource(importSwitch, `<Switch label="Mode compact" required />`),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} required />;
  },
};

export const Helper: Story = {
  name: 'Aide',
  parameters: componentSource(
    importSwitch,
    `<Switch label="Mode compact" helper="Réduit les marges de l’interface." />`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} helper={copy.switchHelper} />;
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importSwitch,
    `<>
    <Switch size="sm" label="Petite" />
    <Switch size="md" label="Moyenne" />
    <Switch size="lg" label="Grande" />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-3">
        <Switch size="sm" label={copy.small} />
        <Switch size="md" label={copy.medium} />
        <Switch size="lg" label={copy.large} />
      </div>
    );
  },
};

function ControlledSwitch({
  label,
  defaultChecked = false,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <Switch
      label={label}
      checked={on}
      onChange={(event) => setOn(event.target.checked)}
    />
  );
}
