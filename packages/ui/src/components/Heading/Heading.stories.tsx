import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    level: 2,
    children: 'Parcours d’apprentissage',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Levels: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Heading level={1}>Niveau 1 — display</Heading>
      <Heading level={2}>Niveau 2 — title</Heading>
      <Heading level={3}>Niveau 3 — subtitle</Heading>
      <Heading level={4}>Niveau 4 — body</Heading>
    </div>
  ),
};

/** Le niveau sémantique et la taille visuelle se règlent séparément. */
export const SizeDecoupledFromLevel: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Heading level={2} size="display">
        h2 rendu en display
      </Heading>
      <Heading level={1} size="subtitle">
        h1 rendu en subtitle
      </Heading>
    </div>
  ),
};
