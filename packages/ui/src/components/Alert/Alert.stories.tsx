import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { alertArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { alertCopy, docsLocale } from '../../../.storybook/docs-locale';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Alert } from './Alert';

const importAlert = "import { Alert, Icon } from 'd-ui';";

const meta = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: alertArgTypes,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  args: { variant: 'info' },
  parameters: componentSource(
    importAlert,
    `<Alert variant="info">
    Les notes seront visibles après la correction.
</Alert>`,
  ),
  render: (args, { globals }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return <Alert {...args}>{copy.infoBody}</Alert>;
  },
};

export const Variants: Story = {
  name: 'Variantes',
  parameters: componentSource(
    importAlert,
    `<Alert variant="info">…</Alert>
<Alert variant="success">…</Alert>
<Alert variant="warning">…</Alert>
<Alert variant="danger">…</Alert>`,
  ),
  render: (args, { globals }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-3">
        <Alert
          {...args}
          variant="info"
          icon={<Icon as={InformationCircleIcon} size="md" />}
        >
          {copy.infoBody}
        </Alert>
        <Alert {...args} variant="success" icon={<Icon as={CheckCircleIcon} size="md" />}>
          {copy.successBody}
        </Alert>
        <Alert
          {...args}
          variant="warning"
          icon={<Icon as={ExclamationTriangleIcon} size="md" />}
        >
          {copy.warningBody}
        </Alert>
        <Alert {...args} variant="danger" icon={<Icon as={XCircleIcon} size="md" />}>
          {copy.dangerBody}
        </Alert>
      </div>
    );
  },
};

export const WithTitle: Story = {
  name: 'Avec titre',
  args: { variant: 'warning' },
  parameters: componentSource(
    importAlert,
    `<Alert variant="warning" title="Session expirée">
    Reconnectez-vous pour continuer.
</Alert>`,
  ),
  render: (args, { globals }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return (
      <Alert
        {...args}
        title={copy.sessionTitle}
        icon={<Icon as={ExclamationTriangleIcon} size="md" />}
      >
        {copy.sessionBody}
      </Alert>
    );
  },
};

export const Dismissible: Story = {
  name: 'Fermable',
  args: { variant: 'info', dismissible: true },
  parameters: componentSource(
    importAlert,
    `<Alert variant="info" dismissible dismissLabel="Fermer l’alerte">
    Nouvelle fonctionnalité disponible.
</Alert>`,
  ),
  render: (args, { globals }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return (
      <Alert
        {...args}
        dismissLabel={copy.dismiss}
        icon={<Icon as={InformationCircleIcon} size="md" />}
      >
        {copy.featureBody}
      </Alert>
    );
  },
};

export const Trimmed: Story = {
  name: 'Sans fond',
  args: { variant: 'info', hasBackground: false },
  parameters: componentSource(
    importAlert,
    `<Alert variant="info" hasBackground={false}>
    Conseil sans fond teinté (LumApps Message trimmed).
</Alert>`,
  ),
  render: (args, { globals }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return (
      <Alert {...args} icon={<Icon as={InformationCircleIcon} size="md" />}>
        {copy.trimmedBody}
      </Alert>
    );
  },
};

export const WithAction: Story = {
  name: 'Avec action',
  args: { variant: 'info' },
  parameters: componentSource(
    importAlert,
    `<Alert
    variant="info"
    actions={<Button size="sm" variant="ghost">En savoir plus</Button>}
>
    Nouvelle fonctionnalité disponible.
</Alert>`,
  ),
  render: (args, { globals }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return (
      <Alert
        {...args}
        icon={<Icon as={InformationCircleIcon} size="md" />}
        actions={
          <Button size="sm" variant="ghost">
            {copy.learnMore}
          </Button>
        }
      >
        {copy.featureBody}
      </Alert>
    );
  },
};
