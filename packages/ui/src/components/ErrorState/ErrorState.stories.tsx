import type { Meta, StoryObj } from '@storybook/react-vite';
import { errorStateArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, errorStateCopy } from '../../../.storybook/docs-locale';
import { Button } from '../Button/Button';
import { ErrorState } from './ErrorState';

const importErrorState = "import { Button, ErrorState } from 'd-ui';";

const meta = {
  title: 'Components/ErrorState',
  component: ErrorState,
  argTypes: errorStateArgTypes,
  args: { title: 'Placeholder' },
} satisfies Meta<typeof ErrorState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importErrorState,
    `<ErrorState
    title="Impossible de charger les devoirs"
    description="Vérifiez votre connexion, puis réessayez."
    actions={<Button variant="secondary">Réessayer</Button>}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = errorStateCopy(docsLocale(globals.locale));
    return (
      <ErrorState
        {...args}
        title={copy.title}
        description={copy.description}
        actions={<Button variant="secondary">{copy.retry}</Button>}
      />
    );
  },
};

export const Live: Story = {
  name: 'Annonce dynamique',
  args: { live: true },
  parameters: componentSource(
    importErrorState,
    `<ErrorState
    live
    title="Échec de l’enregistrement"
    description="Réessayez ou contactez le support."
    actions={<Button variant="secondary">Réessayer</Button>}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = errorStateCopy(docsLocale(globals.locale));
    return (
      <ErrorState
        {...args}
        title={copy.saveTitle}
        description={copy.saveDescription}
        actions={<Button variant="secondary">{copy.retry}</Button>}
      />
    );
  },
};
