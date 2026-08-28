import type { Meta, StoryObj } from '@storybook/react-vite';
import { dateTimePickerArgTypes } from '../../../.storybook/arg-types';
import { dateTimePickerCopy, docsLocale } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import type { CalendarDate } from '../Calendar/calendarDate';
import { DateTimePicker } from './DateTimePicker';

const importDateTimePicker = "import { DateTimePicker } from 'd-ui';";
const today: CalendarDate = { year: 2026, month: 3, day: 18 };

const meta = {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
  args: {
    today,
    locale: 'fr',
    defaultValue: {
      date: { year: 2026, month: 3, day: 12 },
      time: { hour: 9, minute: 15 },
    },
  },
  argTypes: dateTimePickerArgTypes,
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importDateTimePicker,
    `<DateTimePicker
    label="Soutenance"
    defaultValue={{
        date: { year: 2026, month: 3, day: 12 },
        time: { hour: 9, minute: 15 },
    }}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = dateTimePickerCopy(docsLocale(globals.locale));
    return (
      <DateTimePicker
        {...args}
        locale={docsLocale(globals.locale)}
        label={copy.label}
        helper={copy.helper}
      />
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    importDateTimePicker,
    '<DateTimePicker label="Soutenance" disabled />',
  ),
  render: (args, { globals }) => {
    const copy = dateTimePickerCopy(docsLocale(globals.locale));
    return (
      <DateTimePicker
        {...args}
        locale={docsLocale(globals.locale)}
        label={copy.label}
        disabled
      />
    );
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  parameters: componentSource(
    importDateTimePicker,
    '<DateTimePicker label="Soutenance" invalid error="Date ou heure invalide." />',
  ),
  render: (args, { globals }) => {
    const copy = dateTimePickerCopy(docsLocale(globals.locale));
    return (
      <DateTimePicker
        {...args}
        locale={docsLocale(globals.locale)}
        label={copy.label}
        invalid
        error={copy.error}
      />
    );
  },
};
