import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
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
    locale: 'en',
  },
  argTypes: {
    date: {
      description: 'Instant to display (`Date`, ISO string, or epoch ms).',
    },
    locale: {
      control: 'text',
      description: 'BCP 47 locale forwarded to Intl and to the `lang` attribute.',
    },
    live: {
      control: 'boolean',
      description: 'Refresh relative text on a coarse interval (visual only).',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
      description: 'Text size.',
    },
    title: {
      description: 'Native tooltip. Defaults to the absolute formatted time.',
    },
  },
  parameters: {
    controls: {
      include: ['date', 'locale', 'live', 'size', 'title', 'className'],
    },
  },
} satisfies Meta<typeof TimeAgo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    locale: 'fr',
  },
  parameters: {
    docs: {
      source: {
        code: '<TimeAgo date={submission.createdAt} locale="fr" />',
      },
    },
  },
  render: (args) => (
    <Example label="Submitted">
      <TimeAgo {...args} />
    </Example>
  ),
};

export const Locale: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />`,
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <Example label="English" hint='locale="en"'>
        <TimeAgo date={fromNow(-3 * minute)} locale="en" />
      </Example>
      <Example label="Français" hint='locale="fr" — 24h absolute time, no AM/PM'>
        <TimeAgo date={fromNow(-3 * minute)} locale="fr" />
      </Example>
    </div>
  ),
};

export const Live: Story = {
  parameters: {
    docs: {
      source: {
        code: '<TimeAgo date={lastSeenAt} locale="en" live />',
      },
    },
  },
  render: (args) => (
    <Example
      label="Last seen"
      hint="live — relative text updates; assistive tech is not announced on each tick"
    >
      <TimeAgo {...args} date={fromNow(-15 * 1000)} live />
    </Example>
  ),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TimeAgo date={createdAt} size="sm" />
<TimeAgo date={createdAt} size="md" />`,
      },
    },
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Example label="Small" hint='size="sm"'>
        <TimeAgo {...args} date={fromNow(-3 * minute)} size="sm" />
      </Example>
      <Example label="Medium" hint='size="md" (default)'>
        <TimeAgo {...args} date={fromNow(-3 * minute)} size="md" />
      </Example>
    </div>
  ),
};

export const PastAndFuture: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TimeAgo date={fiveHoursAgo} locale="en" />
<TimeAgo date={inThreeHours} locale="en" />`,
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <Example label="Past" hint="Five hours ago">
        <TimeAgo date={fromNow(-5 * hour)} locale="en" />
      </Example>
      <Example label="Future" hint="In three hours">
        <TimeAgo date={fromNow(3 * hour)} locale="en" />
      </Example>
      <Example label="Yesterday">
        <TimeAgo date={fromNow(-2 * day)} locale="en" />
      </Example>
    </div>
  ),
};
