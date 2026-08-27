import type { Meta, StoryObj } from '@storybook/react';
import {
  ArrowRightIcon,
  BellIcon,
  ChevronDownIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { iconArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, iconCopy } from '../../../.storybook/docs-locale';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';
import { Icon } from './Icon';

const heroImport = `import { BellIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';`;

const meta = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: iconArgTypes,
  args: {
    as: BellIcon,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(heroImport, '<Icon as={BellIcon} />'),
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    heroImport,
    `<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="md" />
  <Icon as={BellIcon} size="lg" />
</>`,
  ),
  render: () => (
    <div className="text-fg flex items-end gap-4">
      <Icon as={BellIcon} size="sm" />
      <Icon as={BellIcon} size="md" />
      <Icon as={BellIcon} size="lg" />
    </div>
  ),
};

export const InheritsColor: Story = {
  name: 'Couleur héritée',
  parameters: componentSource(
    heroImport,
    `<span className="text-brand">
  <Icon as={BellIcon} />
</span>`,
  ),
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

export const OutlineScale: Story = {
  name: 'Même silhouette',
  parameters: componentSource(
    heroImport,
    `<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="lg" />
</>`,
  ),
  render: () => (
    <div className="text-fg flex items-end gap-4">
      <Icon as={BellIcon} size="sm" />
      <Icon as={BellIcon} size="md" />
      <Icon as={BellIcon} size="lg" />
    </div>
  ),
};

export const Labelled: Story = {
  name: 'Nomée',
  args: { as: TrashIcon, label: 'Supprimer définitivement' },
  parameters: componentSource(
    `import { TrashIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';`,
    '<Icon as={TrashIcon} label="Supprimer définitivement" />',
  ),
  render: (args, { globals }) => {
    const copy = iconCopy(docsLocale(globals.locale));
    return <Icon {...args} as={TrashIcon} label={copy.deleteForever} />;
  },
};

export const InsideButtons: Story = {
  name: 'Dans un bouton',
  parameters: componentSource(
    `import { ArrowRightIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton } from 'd-ui';`,
    `<>
  <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
    Continuer
  </Button>
  <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label="Supprimer" />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = iconCopy(docsLocale(globals.locale));
    return (
      <div className="flex items-center gap-3">
        <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
          {copy.continue}
        </Button>
        <Button variant="secondary" icon={<Icon as={ChevronDownIcon} size="sm" />}>
          {copy.filter}
        </Button>
        <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label={copy.delete} />
      </div>
    );
  },
};
