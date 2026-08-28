import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Notification as NotificationFromEntry } from '../../index';
import { Notification } from './Notification';

describe('Notification', () => {
  it('is exported from the package entrypoint', () => {
    expect(NotificationFromEntry).toBe(Notification);
  });

  it('uses role="alert" for every variant', () => {
    render(<Notification variant="success">Enregistré</Notification>);
    expect(screen.getByRole('alert')).toHaveTextContent('Enregistré');
  });

  it('calls onActionClick from the action button', async () => {
    const user = userEvent.setup();
    const onActionClick = vi.fn();
    render(
      <Notification actionLabel="Voir" onActionClick={onActionClick}>
        Mise à jour disponible
      </Notification>,
    );
    await user.click(screen.getByRole('button', { name: 'Voir' }));
    expect(onActionClick).toHaveBeenCalledTimes(1);
  });

  it('dismisses from the close button when dismissible', async () => {
    const user = userEvent.setup();
    render(
      <Notification dismissible dismissLabel="Fermer" onOpenChange={vi.fn()}>
        Processus terminé
      </Notification>,
    );
    await user.click(screen.getByRole('button', { name: 'Fermer' }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
