import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
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

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Continuer',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Loading: Story = {
  args: { loading: true, children: 'Enregistrement' },
};

export const WithIcon: Story = {
  args: { icon: <PlusIcon />, children: 'Ajouter' },
};

export const WithIconEnd: Story = {
  args: { icon: <PlusIcon />, iconPosition: 'end', children: 'Ajouter' },
};

export const IconOnly: Story = {
  render: () => <IconButton icon={<PlusIcon />} aria-label="Ajouter" />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Petit</Button>
      <Button size="md">Moyen</Button>
      <Button size="lg">Grand</Button>
    </div>
  ),
};
