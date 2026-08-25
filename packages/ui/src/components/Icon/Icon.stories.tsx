import type { Meta, StoryObj } from '@storybook/react';
import {
  ArrowRightIcon,
  BellIcon,
  ChevronDownIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { Icon } from './Icon';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    as: BellIcon,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Icon as={BellIcon} size="sm" />
      <Icon as={BellIcon} size="md" />
      <Icon as={BellIcon} size="lg" />
    </div>
  ),
};

/** L'icône hérite de `currentColor` : elle suit le texte qui la porte. */
export const InheritsColor: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <span className="text-fg">
        <Icon as={BellIcon} />
      </span>
      <span className="text-brand">
        <Icon as={BellIcon} />
      </span>
      <span className="text-on-brand bg-brand rounded-md p-2">
        <Icon as={BellIcon} />
      </span>
    </div>
  ),
};

/** Avec `label`, l'icône devient une image nommée. À réserver aux cas où aucun texte voisin ne porte le sens. */
export const Labelled: Story = {
  args: { as: TrashIcon, label: 'Supprimer définitivement' },
};

export const InsideButtons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
        Continuer
      </Button>
      <Button variant="secondary" icon={<Icon as={ChevronDownIcon} size="sm" />}>
        Filtrer
      </Button>
      <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label="Supprimer" />
    </div>
  ),
};
