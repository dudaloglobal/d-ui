import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import { timeAgoArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, timeAgoCopy } from '../../../.storybook/docs-locale';
import { TimeAgo } from './TimeAgo';

const minute = 60 * 1000;
const hour = 60 * minute;
const day = 24 * hour;

function fromNow(offsetMs: number): Date {
  return new Date(Date.now() + offsetMs);
}

function Example({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="font-sans text-fg">
      <p className="m-0 font-medium">{label}</p>
      {hint ? (
        <p className="mt-1 mb-2 text-sm opacity-80">{hint}</p>
      ) : (
        <div className="h-2" />
      )}
      {children}
    </div>
  );
}

const meta = {
  title: 'Components/TimeAgo',
  component: TimeAgo,
  args: {
    date: fromNow(-3 * minute),
  },
  argTypes: timeAgoArgTypes,
  parameters: {
    controls: {
      include: ['date', 'locale', 'live', 'size', 'title', 'className'],
    },
  },
} satisfies Meta<typeof TimeAgo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    "import { TimeAgo } from 'd-ui';",
    '<TimeAgo date={submission.createdAt} locale="fr" />',
  ),
  render: (args, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return (
      <Example label={copy.submitted}>
        <TimeAgo {...args} locale={locale} />
      </Example>
    );
  },
};

export const Locale: Story = {
  name: 'Langue',
  parameters: componentSource(
    "import { TimeAgo } from 'd-ui';",
    `<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />`,
  ),
  render: (_, { globals }) => {
    const copy = timeAgoCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-6">
        <Example label={copy.english} hint={copy.englishHint}>
          <TimeAgo date={fromNow(-3 * minute)} locale="en" />
        </Example>
        <Example label={copy.french} hint={copy.frenchHint}>
          <TimeAgo date={fromNow(-3 * minute)} locale="fr" />
        </Example>
      </div>
    );
  },
};

export const Live: Story = {
  name: 'Mises à jour en direct',
  parameters: componentSource(
    "import { TimeAgo } from 'd-ui';",
    '<TimeAgo date={lastSeenAt} locale="fr" live />',
  ),
  render: (args, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return (
      <Example label={copy.lastSeen} hint={copy.liveHint}>
        <TimeAgo {...args} date={fromNow(-15 * 1000)} locale={locale} live />
      </Example>
    );
  },
};

export const Sizes: Story = {
  name: 'Taille',
  parameters: componentSource(
    "import { TimeAgo } from 'd-ui';",
    `<TimeAgo date={createdAt} locale="fr" size="sm" />
<TimeAgo date={createdAt} locale="fr" size="md" />`,
  ),
  render: (args, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return (
      <div className="flex flex-col gap-4">
        <Example label={copy.small} hint='size="sm"'>
          <TimeAgo {...args} date={fromNow(-3 * minute)} locale={locale} size="sm" />
        </Example>
        <Example label={copy.medium} hint={copy.mediumHint}>
          <TimeAgo {...args} date={fromNow(-3 * minute)} locale={locale} size="md" />
        </Example>
      </div>
    );
  },
};

export const PastAndFuture: Story = {
  name: 'Passé et futur',
  parameters: componentSource(
    "import { TimeAgo } from 'd-ui';",
    `<TimeAgo date={fiveHoursAgo} locale="fr" />
<TimeAgo date={inThreeHours} locale="fr" />`,
  ),
  render: (args, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return (
      <div className="flex flex-col gap-6">
        <Example label={copy.past} hint={copy.pastHint}>
          <TimeAgo date={fromNow(-5 * hour)} locale={locale} />
        </Example>
        <Example label={copy.future} hint={copy.futureHint}>
          <TimeAgo date={fromNow(3 * hour)} locale={locale} />
        </Example>
        <Example label={copy.yesterday}>
          <TimeAgo date={fromNow(-2 * day)} locale={locale} />
        </Example>
      </div>
    );
  },
};
