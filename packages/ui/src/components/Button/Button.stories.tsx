import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import {
  buttonCopy,
  docsLocale,
  type ButtonDocsCopy,
} from '../../../.storybook/docs-locale';
import { cx } from '../../lib/cx';
import { Button, type ButtonSize, type ButtonVariant } from './Button';
import { IconButton } from './IconButton';

function PlusIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 3v10M3 8h10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UseCaseRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>;
}

function FillRow({ children }: { children: ReactNode }) {
  return <div className="flex w-full items-center gap-4">{children}</div>;
}

function DropdownButton({
  copy,
  variant,
  size,
}: {
  copy: ButtonDocsCopy;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <Button
      variant={variant}
      size={size}
      icon={<ChevronIcon />}
      iconPosition="end"
      aria-haspopup="true"
      aria-expanded={false}
    >
      {copy.dropdown}
    </Button>
  );
}

function SplitButton({
  copy,
  variant,
  size,
}: {
  copy: ButtonDocsCopy;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <div className="inline-flex overflow-hidden rounded-md">
      <Button variant={variant} size={size} className="rounded-none">
        {copy.split}
      </Button>
      <span
        className={cx(
          'w-px shrink-0 self-stretch',
          variant === 'secondary' || variant === 'ghost' ? 'bg-border' : 'bg-on-brand/30',
        )}
        aria-hidden="true"
      />
      <IconButton
        variant={variant}
        size={size}
        icon={<ChevronIcon />}
        aria-label={copy.moreActions}
        aria-haspopup="true"
        aria-expanded={false}
        className="rounded-none"
      />
    </div>
  );
}

function EmphasisUseCases({
  copy,
  variant,
  size,
  includeSplit = true,
}: {
  copy: ButtonDocsCopy;
  variant?: ButtonVariant;
  size?: ButtonSize;
  includeSplit?: boolean;
}) {
  return (
    <UseCaseRow>
      <Button variant={variant} size={size}>
        {copy.default}
      </Button>
      <Button variant={variant} size={size} disabled>
        {copy.disabled}
      </Button>
      <Button variant={variant} size={size} icon={<PlusIcon />}>
        {copy.withIcon}
      </Button>
      <DropdownButton copy={copy} variant={variant} size={size} />
      {includeSplit ? <SplitButton copy={copy} variant={variant} size={size} /> : null}
    </UseCaseRow>
  );
}

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Emphasis: primary (high), secondary (medium), ghost (low).',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Use sm when space is constrained.',
    },
    loading: {
      control: 'boolean',
      description:
        'Shows a spinner, keeps the label, sets aria-busy, and disables the control.',
    },
    iconPosition: {
      control: 'inline-radio',
      options: ['start', 'end'],
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to the container width.',
    },
    isSelected: {
      control: 'boolean',
      description: 'Toggle state for medium/low emphasis. Sets aria-pressed.',
    },
    disabled: {
      control: 'boolean',
    },
  },
  parameters: {
    controls: {
      include: [
        'children',
        'variant',
        'size',
        'disabled',
        'loading',
        'iconPosition',
        'fullWidth',
        'isSelected',
      ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  },
};

export const HighEmphasis: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button icon={<PlusIcon />}>Avec icône</Button>
<Button icon={<ChevronIcon />} iconPosition="end" aria-haspopup="true">
  Menu
</Button>`,
      },
    },
  },
  render: (_, { globals }) => (
    <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} />
  ),
};

export const MediumEmphasis: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>Désactivé</Button>
<Button variant="secondary" icon={<PlusIcon />}>Avec icône</Button>`,
      },
    },
  },
  render: (_, { globals }) => (
    <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} variant="secondary" />
  ),
};

export const Toggled: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`,
      },
    },
  },
  render: (_, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return (
      <UseCaseRow>
        <Button variant="secondary">{copy.subscribe}</Button>
        <Button variant="secondary" isSelected>
          {copy.subscribed}
        </Button>
      </UseCaseRow>
    );
  },
};

export const LowEmphasis: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>Désactivé</Button>
<Button variant="ghost" icon={<PlusIcon />}>Avec icône</Button>`,
      },
    },
  },
  render: (_, { globals }) => (
    <EmphasisUseCases
      copy={buttonCopy(docsLocale(globals.locale))}
      variant="ghost"
      includeSplit={false}
    />
  ),
};

export const SmallSize: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">Par défaut</Button>
<Button size="sm" variant="ghost">Par défaut</Button>`,
      },
    },
  },
  render: (_, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-4">
        <EmphasisUseCases copy={copy} size="sm" />
        <EmphasisUseCases copy={copy} variant="secondary" size="sm" />
        <EmphasisUseCases copy={copy} variant="ghost" size="sm" includeSplit={false} />
      </div>
    );
  },
};

export const FullWidth: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button fullWidth>Bouton pleine largeur</Button>
<div className="flex w-full gap-4">
  <Button fullWidth variant="secondary">Deux boutons pleine largeur</Button>
  <Button fullWidth variant="secondary">Deux boutons pleine largeur</Button>
</div>`,
      },
    },
  },
  render: (_, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return (
      <div className="flex w-full flex-col gap-4">
        <FillRow>
          <Button fullWidth>{copy.fullWidthSingle}</Button>
        </FillRow>
        <FillRow>
          <Button fullWidth variant="secondary">
            {copy.fullWidthTwo}
          </Button>
          <Button fullWidth variant="secondary">
            {copy.fullWidthTwo}
          </Button>
        </FillRow>
        <FillRow>
          <Button fullWidth>{copy.fullWidthSingle}</Button>
          <Button variant="ghost">{copy.button}</Button>
        </FillRow>
      </div>
    );
  },
};

export const Loading: Story = {
  render: (args, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return (
      <Button {...args} loading>
        {copy.saving}
      </Button>
    );
  },
};

export const IconOnly: Story = {
  render: (_, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  },
};
