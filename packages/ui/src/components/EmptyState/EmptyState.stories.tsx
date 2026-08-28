import type { Meta, StoryObj } from '@storybook/react-vite';
import { InboxIcon } from '@heroicons/react/24/outline';
import { emptyStateArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, emptyStateCopy } from '../../../.storybook/docs-locale';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { EmptyState } from './EmptyState';

const importEmptyState = "import { Button, EmptyState, Icon } from 'd-ui';";

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  argTypes: emptyStateArgTypes,
  args: { title: 'Placeholder' },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importEmptyState,
    `<EmptyState
    title="Aucun devoir"
    description="Créez votre premier devoir pour commencer."
    icon={<Icon as={InboxIcon} size="lg" />}
    actions={<Button>Créer un devoir</Button>}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = emptyStateCopy(docsLocale(globals.locale));
    return (
      <EmptyState
        {...args}
        title={copy.title}
        description={copy.description}
        icon={<Icon as={InboxIcon} size="lg" />}
        actions={<Button>{copy.primary}</Button>}
      />
    );
  },
};

export const WithActions: Story = {
  name: 'Avec actions',
  parameters: componentSource(
    importEmptyState,
    `<EmptyState
    title="Aucun cours"
    description="Importez un cours ou créez-en un nouveau."
    actions={
        <>
            <Button>Créer</Button>
            <Button variant="secondary">Importer</Button>
        </>
    }
/>`,
  ),
  render: (args, { globals }) => {
    const copy = emptyStateCopy(docsLocale(globals.locale));
    return (
      <EmptyState
        {...args}
        title={copy.coursesTitle}
        description={copy.coursesDescription}
        icon={<Icon as={InboxIcon} size="lg" />}
        actions={
          <>
            <Button>{copy.primary}</Button>
            <Button variant="secondary">{copy.secondary}</Button>
          </>
        }
      />
    );
  },
};
