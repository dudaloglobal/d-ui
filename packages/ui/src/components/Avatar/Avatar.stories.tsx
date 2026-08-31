import type { Meta, StoryObj } from '@storybook/react-vite';
import { avatarArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { avatarCopy, docsLocale } from '../../../.storybook/docs-locale';
import { Avatar, AvatarGroup, type AvatarSize } from './Avatar';

const importAvatar = "import { Avatar, AvatarGroup } from 'd-ui';";

function portraitUri(fill: string, letter: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect fill="${fill}" width="96" height="96"/><text x="50%" y="54%" fill="#fff" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="36">${letter}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const SIZES: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: avatarArgTypes,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importAvatar,
    `<Avatar name="Ada Lovelace" src="/portrait.png" />`,
  ),
  render: (args, { globals }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return (
      <Avatar {...args} name={copy.ada} src={portraitUri('#0f5c4c', copy.adaInitial)} />
    );
  },
};

export const Image: Story = {
  name: 'Photo',
  parameters: componentSource(
    importAvatar,
    `<Avatar name="Ada Lovelace" src="/portrait.png" />`,
  ),
  render: (args, { globals }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return (
      <Avatar {...args} name={copy.ada} src={portraitUri('#0f5c4c', copy.adaInitial)} />
    );
  },
};

export const Initials: Story = {
  name: 'Initiales',
  parameters: componentSource(importAvatar, `<Avatar name="Ada Lovelace" />`),
  render: (args, { globals }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-center gap-3">
        <Avatar {...args} name={copy.ada} />
        <Avatar {...args} name={copy.grace} />
        <Avatar {...args} name={copy.katherine} />
      </div>
    );
  },
};

export const Fallback: Story = {
  name: 'Sans image',
  parameters: componentSource(importAvatar, '<Avatar />'),
  render: (args) => <Avatar {...args} />,
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importAvatar,
    `<Avatar size="xs" name="Ada Lovelace" />
<Avatar size="sm" name="Ada Lovelace" />
<Avatar size="md" name="Ada Lovelace" />
<Avatar size="lg" name="Ada Lovelace" />
<Avatar size="xl" name="Ada Lovelace" />`,
  ),
  render: (args, { globals }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-end gap-3">
        {SIZES.map((size) => (
          <Avatar key={size} {...args} size={size} name={copy.ada} />
        ))}
      </div>
    );
  },
};

export const Square: Story = {
  name: 'Carré',
  parameters: componentSource(
    importAvatar,
    `<Avatar square name="Ada Lovelace" src="/portrait.png" />`,
  ),
  render: (args, { globals }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-center gap-3">
        <Avatar
          {...args}
          square
          name={copy.ada}
          src={portraitUri('#0f5c4c', copy.adaInitial)}
        />
        <Avatar {...args} square name={copy.grace} />
      </div>
    );
  },
};

export const Group: Story = {
  name: 'Groupe',
  parameters: componentSource(
    importAvatar,
    `<AvatarGroup max={3} label="Équipe">
    <Avatar name="Ada Lovelace" />
    <Avatar name="Grace Hopper" />
    <Avatar name="Katherine Johnson" />
    <Avatar name="Annie Easley" />
</AvatarGroup>`,
  ),
  render: (args, { globals }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return (
      <AvatarGroup
        max={3}
        size="md"
        label={copy.groupLabel}
        overflowLabel={(count) => copy.overflow(count)}
      >
        <Avatar {...args} name={copy.ada} src={portraitUri('#0f5c4c', copy.adaInitial)} />
        <Avatar
          {...args}
          name={copy.grace}
          src={portraitUri('#175cd3', copy.graceInitial)}
        />
        <Avatar
          {...args}
          name={copy.katherine}
          src={portraitUri('#6b21a8', copy.katherineInitial)}
        />
        <Avatar {...args} name={copy.annie} />
      </AvatarGroup>
    );
  },
};
