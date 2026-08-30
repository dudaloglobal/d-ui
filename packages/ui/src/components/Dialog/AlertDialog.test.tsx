import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { AlertDialog as AlertDialogFromEntry } from '../../index';
import { AlertDialog } from './AlertDialog';

function ConfirmFixture() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Ouvrir
      </button>
      <AlertDialog
        open={open}
        onOpenChange={setOpen}
        title="Confirmer"
        cancelLabel="Refuser"
        confirmLabel="Accepter"
      >
        Continuer ?
      </AlertDialog>
    </>
  );
}

function KindFixture({ kind }: { kind: 'warning' | 'error' | 'success' }) {
  const [open, setOpen] = useState(true);
  return (
    <AlertDialog
      open={open}
      onOpenChange={setOpen}
      kind={kind}
      title="Alerte"
      confirmLabel="OK"
    >
      Message urgent.
    </AlertDialog>
  );
}

describe('AlertDialog', () => {
  it('is exported from the package entrypoint', () => {
    expect(AlertDialogFromEntry).toBe(AlertDialog);
  });

  it('renders a confirm dialog with two actions', async () => {
    const user = userEvent.setup();
    render(<ConfirmFixture />);
    await user.click(screen.getByRole('button', { name: 'Ouvrir' }));

    const dialog = await screen.findByRole('alertdialog', { name: 'Confirmer' });
    expect(dialog).toHaveAttribute('aria-describedby');
    expect(screen.getByRole('button', { name: 'Refuser' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Accepter' })).toBeInTheDocument();
  });

  it('does not close on outside press', async () => {
    const user = userEvent.setup();
    render(<ConfirmFixture />);
    await user.click(screen.getByRole('button', { name: 'Ouvrir' }));

    const dialog = await screen.findByRole('alertdialog');
    await user.click(dialog.parentElement as HTMLElement);
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
  });

  it('focuses the non-destructive action first', async () => {
    const user = userEvent.setup();
    render(<ConfirmFixture />);
    await user.click(screen.getByRole('button', { name: 'Ouvrir' }));
    await screen.findByRole('alertdialog');

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Refuser' })).toHaveFocus();
    });
  });

  it.each(['warning', 'error', 'success'] as const)(
    'renders kind %s with a single confirm action',
    async (kind) => {
      render(<KindFixture kind={kind} />);
      const dialog = await screen.findByRole('alertdialog', { name: 'Alerte' });
      expect(dialog).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Refuser' })).not.toBeInTheDocument();
    },
  );
});
