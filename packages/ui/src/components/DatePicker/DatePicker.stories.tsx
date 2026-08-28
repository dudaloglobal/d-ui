import type { Meta, StoryObj } from '@storybook/react-vite';
import { datePickerArgTypes } from '../../../.storybook/arg-types';
import { datePickerCopy, docsLocale } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import type { CalendarDate } from '../Calendar/calendarDate';
import { DatePicker } from './DatePicker';

const importDatePicker = "import { DatePicker } from 'd-ui';";
const today: CalendarDate = { year: 2026, month: 3, day: 18 };
const selected: CalendarDate = { year: 2026, month: 3, day: 12 };

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  args: { today, defaultValue: selected, locale: 'fr' },
  argTypes: datePickerArgTypes,
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importDatePicker,
    `<DatePicker
    label="Échéance"
    helper="Saisissez une date ou ouvrez le calendrier."
    defaultValue={{ year: 2026, month: 3, day: 12 }}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return (
      <DatePicker
        {...args}
        locale={docsLocale(globals.locale)}
        label={copy.label}
        helper={copy.helper}
      />
    );
  },
};

export const Keyboard: Story = {
  name: 'Saisie au clavier',
  parameters: componentSource(
    importDatePicker,
    '<DatePicker label="Échéance" placeholder="JJ/MM/AAAA" />',
  ),
  args: { defaultValue: null },
  render: (args, { globals }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return (
      <DatePicker
        {...args}
        locale={docsLocale(globals.locale)}
        label={copy.label}
        helper={copy.helper}
        placeholder={copy.placeholder}
      />
    );
  },
};

export const Restricted: Story = {
  name: 'Dates restreintes',
  parameters: componentSource(
    importDatePicker,
    `<DatePicker
    label="Échéance"
    minValue={{ year: 2026, month: 3, day: 5 }}
    maxValue={{ year: 2026, month: 3, day: 25 }}
/>`,
  ),
  args: {
    minValue: { year: 2026, month: 3, day: 5 },
    maxValue: { year: 2026, month: 3, day: 25 },
  },
  render: (args, { globals }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return (
      <DatePicker
        {...args}
        locale={docsLocale(globals.locale)}
        label={copy.label}
        helper={copy.restricted}
      />
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    importDatePicker,
    '<DatePicker label="Échéance" disabled />',
  ),
  render: (args, { globals }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return (
      <DatePicker
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
    importDatePicker,
    '<DatePicker label="Échéance" invalid error="Date invalide." />',
  ),
  render: (args, { globals }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return (
      <DatePicker
        {...args}
        locale={docsLocale(globals.locale)}
        label={copy.label}
        invalid
        error={copy.error}
      />
    );
  },
};

export const Clearable: Story = {
  name: 'Effaçable',
  parameters: componentSource(
    importDatePicker,
    '<DatePicker label="Échéance" clearable defaultValue={{ year: 2026, month: 3, day: 12 }} />',
  ),
  render: (args, { globals }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return (
      <DatePicker
        {...args}
        locale={docsLocale(globals.locale)}
        label={copy.label}
        clearable
      />
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importDatePicker,
    `<DatePicker size="sm" label="Échéance" />
<DatePicker size="md" label="Échéance" />
<DatePicker size="lg" label="Échéance" />`,
  ),
  render: (args, { globals }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    const locale = docsLocale(globals.locale);
    return (
      <div className="flex flex-col gap-4">
        <DatePicker
          {...args}
          size="sm"
          locale={locale}
          label={`${copy.label} (${copy.small})`}
        />
        <DatePicker
          {...args}
          size="md"
          locale={locale}
          label={`${copy.label} (${copy.medium})`}
        />
        <DatePicker
          {...args}
          size="lg"
          locale={locale}
          label={`${copy.label} (${copy.large})`}
        />
      </div>
    );
  },
};
