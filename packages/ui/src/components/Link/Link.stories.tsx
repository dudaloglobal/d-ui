import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { Text } from '../Text/Text';

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    href: '#',
    children: 'Consulter le catalogue',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** `rel="noopener noreferrer"` et mention de l'ouverture pour les lecteurs d'écran. */
export const External: Story = {
  args: {
    href: 'https://example.org',
    external: true,
    children: 'Documentation Dudalo',
  },
};

export const InRunningText: Story = {
  render: (args) => (
    <Text className="max-w-prose">
      Le soulignement est permanent : <Link {...args}>ce lien</Link> reste identifiable
      même sans percevoir la couleur.
    </Text>
  ),
};
