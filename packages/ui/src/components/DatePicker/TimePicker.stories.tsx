import type { Meta, StoryObj } from '@storybook/react-vite';
import { timePickerArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, timePickerCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { TimePicker } from './TimePicker';

const importTimePicker = "import { TimePicker } from 'd-ui';";

const meta = {
  title: 'Components/TimePicker',
  component: TimePicker,
  args: { defaultValue: { hour: 14, minute: 30 } },
  argTypes: timePickerArgTypes,
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importTimePicker,
    '<TimePicker label="Heure de début" defaultValue={{ hour: 14, minute: 30 }} />',
  ),
  render: (args, { globals }) => {
    const copy = timePickerCopy(docsLocale(globals.locale));
    return <TimePicker {...args} label={copy.label} helper={copy.helper} />;
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    importTimePicker,
    '<TimePicker label="Heure de début" disabled />',
  ),
  render: (args, { globals }) => {
    const copy = timePickerCopy(docsLocale(globals.locale));
    return <TimePicker {...args} label={copy.label} disabled />;
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  parameters: componentSource(
    importTimePicker,
    '<TimePicker label="Heure de début" invalid error="Heure invalide." />',
  ),
  render: (args, { globals }) => {
    const copy = timePickerCopy(docsLocale(globals.locale));
    return <TimePicker {...args} label={copy.label} invalid error={copy.error} />;
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importTimePicker,
    `<TimePicker size="sm" label="Heure de début" />
<TimePicker size="md" label="Heure de début" />
<TimePicker size="lg" label="Heure de début" />`,
  ),
  render: (args, { globals }) => {
    const copy = timePickerCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-4">
        <TimePicker {...args} size="sm" label={`${copy.label} (${copy.small})`} />
        <TimePicker {...args} size="md" label={`${copy.label} (${copy.medium})`} />
        <TimePicker {...args} size="lg" label={`${copy.label} (${copy.large})`} />
      </div>
    );
  },
};
