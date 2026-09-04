import type { Meta, StoryObj } from '@storybook/react-vite';
import { BellIcon } from '@heroicons/react/24/outline';
import { badgeArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { badgeCopy, docsLocale } from '../../../.storybook/docs-locale';
import { Avatar } from '../Avatar/Avatar';
import { IconButton } from '../Button/IconButton';
import { Icon } from '../Icon/Icon';
import { Badge } from './Badge';

const importBadge = "import { Avatar, Badge, Icon, IconButton } from 'd-ui';";

const meta = {
  title: 'Components/Badge',
  component: Badge,
  args: { children: <span />, count: 5 },
  argTypes: badgeArgTypes,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importBadge,
    `<Badge count={5} label="5 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return (
      <Badge {...args} count={args.count ?? 5} label={copy.unread}>
        <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
      </Badge>
    );
  },
};

export const Capped: Story = {
  name: 'Plafond',
  parameters: componentSource(
    importBadge,
    `<Badge count={120} max={99} label="120 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return (
      <Badge {...args} count={120} max={99} label={copy.unreadMany}>
        <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
      </Badge>
    );
  },
};

export const Dot: Story = {
  name: 'Avec point',
  parameters: componentSource(
    importBadge,
    `<Badge dot label="En ligne">
    <Avatar name="Ada Lovelace" />
</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    const { count: _count, ...rest } = args;
    return (
      <Badge {...rest} dot label={copy.online}>
        <Avatar name={copy.ada} />
      </Badge>
    );
  },
};

export const OnAvatar: Story = {
  name: 'Sur un avatar',
  parameters: componentSource(
    importBadge,
    `<Badge count={3} label="3 messages">
    <Avatar name="Ada Lovelace" />
</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return (
      <Badge {...args} count={3} label={copy.messages}>
        <Avatar name={copy.ada} />
      </Badge>
    );
  },
};

export const Zero: Story = {
  name: 'Zéro',
  parameters: componentSource(
    importBadge,
    `<Badge count={0} showZero label="0 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return (
      <Badge {...args} count={0} showZero label={copy.unreadZero}>
        <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
      </Badge>
    );
  },
};

export const Placement: Story = {
  name: 'Position',
  parameters: componentSource(
    importBadge,
    `<Badge count={5} placement="top-start" label="5 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    const corners = ['top-end', 'top-start', 'bottom-end', 'bottom-start'] as const;
    return (
      <div className="flex flex-wrap items-center gap-8 p-6">
        {corners.map((placement) => (
          <Badge
            {...args}
            key={placement}
            count={5}
            placement={placement}
            label={copy.unread}
          >
            <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
          </Badge>
        ))}
      </div>
    );
  },
};

export const Content: Story = {
  name: 'Contenu',
  parameters: componentSource(
    importBadge,
    `<Badge content="N" label="Nouveau">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>`,
  ),
  render: (args, { globals }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    const { count: _count, ...rest } = args;
    return (
      <Badge {...rest} content="N" label={copy.newMark}>
        <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
      </Badge>
    );
  },
};
