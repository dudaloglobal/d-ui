import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Text } from '../Text/Text';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="flex max-w-prose flex-col gap-4">
      <Text>Section précédente</Text>
      <Divider {...args} />
      <Text>Section suivante</Text>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <Text as="span">Brouillons</Text>
      <Divider orientation="vertical" />
      <Text as="span">Publiés</Text>
    </div>
  ),
};

/** Avec `label`, le trait devient un séparateur annoncé. À réserver aux ruptures porteuses de sens. */
export const Labelled: Story = {
  args: { label: 'Fin des résultats pertinents' },
  render: (args) => (
    <div className="flex max-w-prose flex-col gap-4">
      <Text>Résultats pertinents</Text>
      <Divider {...args} />
      <Text tone="muted">Autres résultats</Text>
    </div>
  ),
};
