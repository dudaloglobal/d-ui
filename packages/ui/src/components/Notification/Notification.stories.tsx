import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { notificationArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, notificationCopy } from '../../../.storybook/docs-locale';
import { Notification } from './Notification';

const importNotification = "import { Notification } from 'd-ui';";

function NotificationCorner({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full items-end justify-end rounded-md border border-border-subtle bg-surface-muted/40 p-4">
      {children}
    </div>
  );
}

const meta = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: notificationArgTypes,
  args: { children: 'Message' },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  args: { variant: 'info' },
  parameters: componentSource(
    importNotification,
    `<Notification variant="info">
    Les notes seront publiées demain.
</Notification>`,
  ),
  render: (args, { globals }) => {
    const copy = notificationCopy(docsLocale(globals.locale));
    return (
      <NotificationCorner>
        <Notification {...args}>{copy.infoBody}</Notification>
      </NotificationCorner>
    );
  },
};

export const Variants: Story = {
  name: 'Variantes',
  args: { children: 'Message' },
  parameters: componentSource(
    importNotification,
    `<Notification variant="info">…</Notification>
<Notification variant="success">…</Notification>
<Notification variant="warning">…</Notification>
<Notification variant="danger">…</Notification>`,
  ),
  render: (args, { globals }) => {
    const copy = notificationCopy(docsLocale(globals.locale));
    return (
      <NotificationCorner>
        <div className="flex flex-col items-end gap-3">
          <Notification {...args} variant="info">
            {copy.infoBody}
          </Notification>
          <Notification {...args} variant="success">
            {copy.successBody}
          </Notification>
          <Notification {...args} variant="warning">
            {copy.warningBody}
          </Notification>
          <Notification {...args} variant="danger">
            {copy.dangerBody}
          </Notification>
        </div>
      </NotificationCorner>
    );
  },
};

export const WithAction: Story = {
  name: 'Avec action',
  args: { variant: 'info' },
  parameters: componentSource(
    importNotification,
    `<Notification
    variant="info"
    actionLabel="Voir les détails"
    onActionClick={() => {}}
>
    Nouvelle version disponible.
</Notification>`,
  ),
  render: (args, { globals }) => {
    const copy = notificationCopy(docsLocale(globals.locale));
    return (
      <NotificationCorner>
        <Notification {...args} actionLabel={copy.action} onActionClick={() => undefined}>
          {copy.callbackBody}
        </Notification>
      </NotificationCorner>
    );
  },
};
