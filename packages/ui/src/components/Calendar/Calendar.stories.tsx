import type { Meta, StoryObj } from '@storybook/react';
import { calendarArgTypes } from '../../../.storybook/arg-types';
import { calendarCopy, docsLocale } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { Calendar } from './Calendar';
import { weekdayIndex, type CalendarDate } from './calendarDate';

const importCalendar = "import { Calendar } from 'd-ui';";

const today: CalendarDate = { year: 2026, month: 3, day: 18 };
const selected: CalendarDate = { year: 2026, month: 3, day: 12 };
const march: CalendarDate = { year: 2026, month: 3, day: 1 };

function weekend(date: CalendarDate): boolean {
  const weekday = weekdayIndex(date);
  return weekday === 0 || weekday === 6;
}

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  args: {
    today,
    defaultValue: selected,
    defaultMonth: march,
    locale: 'fr',
    weekStartsOn: 1,
  },
  argTypes: calendarArgTypes,
  parameters: {
    controls: {
      include: [
        'size',
        'locale',
        'weekStartsOn',
        'numberOfMonths',
        'disabled',
        'selectionMode',
        'previousMonthLabel',
        'nextMonthLabel',
      ],
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importCalendar,
    `<Calendar
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    locale="fr"
    weekStartsOn={1}
/>`,
  ),
  render: (args, { globals }) => {
    const locale = docsLocale(globals.locale);
    return <Calendar {...args} locale={args.locale ?? locale} />;
  },
};

export const Restricted: Story = {
  name: 'Dates restreintes',
  parameters: componentSource(
    importCalendar,
    `<Calendar
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    minValue={{ year: 2026, month: 3, day: 5 }}
    maxValue={{ year: 2026, month: 3, day: 25 }}
    isDateUnavailable={(date) => date.day === 13}
    locale="fr"
    weekStartsOn={1}
/>`,
  ),
  args: {
    minValue: { year: 2026, month: 3, day: 5 },
    maxValue: { year: 2026, month: 3, day: 25 },
    isDateUnavailable: (date) => date.day === 13,
  },
  render: (args, { globals }) => (
    <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
  ),
};

export const WeekStart: Story = {
  name: 'Début de semaine',
  parameters: componentSource(
    importCalendar,
    `<>
    <Calendar weekStartsOn={1} locale="fr" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar weekStartsOn={0} locale="en" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = calendarCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap gap-8">
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.weekMonday}</p>
          <Calendar
            today={today}
            defaultValue={selected}
            defaultMonth={march}
            locale="fr"
            weekStartsOn={1}
          />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.weekSunday}</p>
          <Calendar
            today={today}
            defaultValue={selected}
            defaultMonth={march}
            locale="en"
            weekStartsOn={0}
          />
        </div>
      </div>
    );
  },
};

export const Locale: Story = {
  name: 'Langue',
  parameters: componentSource(
    importCalendar,
    `<>
    <Calendar locale="fr" weekStartsOn={1} defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar locale="en" weekStartsOn={0} defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = calendarCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap gap-8">
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.french}</p>
          <Calendar
            today={today}
            defaultValue={selected}
            defaultMonth={march}
            locale="fr"
            weekStartsOn={1}
          />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.english}</p>
          <Calendar
            today={today}
            defaultValue={selected}
            defaultMonth={march}
            locale="en"
            weekStartsOn={0}
          />
        </div>
      </div>
    );
  },
};

export const MultipleMonths: Story = {
  name: 'Plusieurs mois',
  parameters: componentSource(
    importCalendar,
    `<Calendar
    numberOfMonths={2}
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    locale="fr"
    weekStartsOn={1}
/>`,
  ),
  args: { numberOfMonths: 2 },
  render: (args, { globals }) => (
    <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
  ),
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importCalendar,
    `<>
    <Calendar size="sm" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar size="md" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar size="lg" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = calendarCopy(locale);
    return (
      <div className="flex flex-col gap-8">
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.small}</p>
          <Calendar
            size="sm"
            today={today}
            defaultValue={selected}
            defaultMonth={march}
            locale={locale}
            weekStartsOn={1}
          />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.medium}</p>
          <Calendar
            size="md"
            today={today}
            defaultValue={selected}
            defaultMonth={march}
            locale={locale}
            weekStartsOn={1}
          />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.large}</p>
          <Calendar
            size="lg"
            today={today}
            defaultValue={selected}
            defaultMonth={march}
            locale={locale}
            weekStartsOn={1}
          />
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    importCalendar,
    `<Calendar disabled defaultValue={{ year: 2026, month: 3, day: 12 }} />`,
  ),
  args: { disabled: true },
  render: (args, { globals }) => (
    <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
  ),
};

export const WeekendsUnavailable: Story = {
  name: 'Week-ends indisponibles',
  parameters: componentSource(
    importCalendar,
    `<Calendar
    isDateUnavailable={(date) => {
        const weekday = new Date(Date.UTC(date.year, date.month - 1, date.day)).getUTCDay();
        return weekday === 0 || weekday === 6;
    }}
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    locale="fr"
/>`,
  ),
  args: { isDateUnavailable: weekend },
  render: (args, { globals }) => (
    <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
  ),
};

export const Year: Story = {
  name: 'Année',
  parameters: componentSource(
    importCalendar,
    `<Calendar
    defaultMonth={{ year: 2026, month: 3, day: 1 }}
    minValue={{ year: 2020, month: 1, day: 1 }}
    maxValue={{ year: 2030, month: 12, day: 31 }}
    locale="fr"
/>`,
  ),
  args: {
    minValue: { year: 2020, month: 1, day: 1 },
    maxValue: { year: 2030, month: 12, day: 31 },
  },
  render: (args, { globals }) => (
    <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
  ),
};

export const Range: Story = {
  name: 'Plage de dates',
  parameters: componentSource(
    importCalendar,
    `<Calendar
    selectionMode="range"
    numberOfMonths={2}
    defaultValue={{
        start: { year: 2026, month: 3, day: 25 },
        end: { year: 2026, month: 4, day: 8 },
    }}
    locale="fr"
/>`,
  ),
  args: {
    selectionMode: 'range',
    numberOfMonths: 2,
    defaultValue: {
      start: { year: 2026, month: 3, day: 25 },
      end: { year: 2026, month: 4, day: 8 },
    },
  },
  render: (args, { globals }) => (
    <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
  ),
};
