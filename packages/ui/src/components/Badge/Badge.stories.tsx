import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckIcon } from '@heroicons/react/24/outline';
import { badgeArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { badgeCopy, docsLocale } from '../../../.storybook/docs-locale';
import { Icon } from '../Icon/Icon';
import { Badge, type BadgeAppearance, type BadgeVariant } from './Badge';

const importBadge = "import { Badge, Icon } from 'd-ui';";

const VARIANTS: BadgeVariant[] = [
  'default',
  'success',
  'warning',
  'danger',
  'info',
  'neutral',
];

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: badgeArgTypes,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  args: { variant: 'default' },
  parameters: componentSource(importBadge, '<Badge>Nouveau</Badge>'),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <Badge {...args}>{copy.defaultLabel}</Badge>;
  },
};

export const Variants: Story = {
  name: 'Variantes',
  parameters: componentSource(
    importBadge,
    `<Badge variant="default">Nouveau</Badge>
<Badge variant="success">Publié</Badge>
<Badge variant="warning">Brouillon</Badge>
<Badge variant="danger">Archivé</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="neutral">Neutre</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    const labels: Record<BadgeVariant, string> = {
      default: copy.defaultLabel,
      success: copy.success,
      warning: copy.warning,
      danger: copy.danger,
      info: copy.info,
      neutral: copy.neutral,
    };
    return (
      <div className="flex flex-wrap items-center gap-2">
        {VARIANTS.map((variant) => (
          <Badge {...args} key={variant} variant={variant}>
            {labels[variant]}
          </Badge>
        ))}
      </div>
    );
  },
};

export const Appearances: Story = {
  name: 'Apparences',
  parameters: componentSource(
    importBadge,
    `<Badge appearance="soft">Nouveau</Badge>
<Badge appearance="solid">Nouveau</Badge>
<Badge appearance="outline">Nouveau</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    const appearances: BadgeAppearance[] = ['soft', 'solid', 'outline'];
    const labels: Record<BadgeAppearance, string> = {
      soft: copy.soft,
      solid: copy.solid,
      outline: copy.outline,
    };
    return (
      <div className="flex flex-col gap-3">
        {appearances.map((appearance) => (
          <div key={appearance} className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((variant) => (
              <Badge {...args} key={variant} appearance={appearance} variant={variant}>
                {labels[appearance]}
              </Badge>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importBadge,
    `<Badge size="sm">Nouveau</Badge>
<Badge size="md">Nouveau</Badge>
<Badge size="lg">Nouveau</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Badge {...args} size="sm">
          {copy.defaultLabel}
        </Badge>
        <Badge {...args} size="md">
          {copy.defaultLabel}
        </Badge>
        <Badge {...args} size="lg">
          {copy.defaultLabel}
        </Badge>
      </div>
    );
  },
};

export const WithIcon: Story = {
  name: 'Avec icône',
  parameters: componentSource(
    importBadge,
    `<Badge variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
    Publié
</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return (
      <Badge {...args} variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
        {copy.success}
      </Badge>
    );
  },
};

export const WithDot: Story = {
  name: 'Avec point',
  parameters: componentSource(
    importBadge,
    `<Badge variant="success" dot>
    Publié
</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Badge {...args} variant="success" dot>
          {copy.success}
        </Badge>
        <Badge {...args} variant="warning" dot>
          {copy.warning}
        </Badge>
        <Badge {...args} variant="danger" dot>
          {copy.danger}
        </Badge>
      </div>
    );
  },
};

export const Dismissible: Story = {
  name: 'Fermable',
  parameters: componentSource(
    importBadge,
    `<Badge dismissible dismissLabel="Retirer" onDismiss={() => {}}>
    Nouveau
</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return (
      <Badge {...args} dismissible dismissLabel={copy.dismiss} variant="neutral">
        {copy.defaultLabel}
      </Badge>
    );
  },
};
