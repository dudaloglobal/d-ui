import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi, afterEach, beforeEach } from 'vitest';
import {
  ToastProvider as ToastProviderFromEntry,
  useToast as useToastFromEntry,
} from '../../index';
import { Button } from '../Button/Button';
import { ToastProvider, useToast } from './ToastProvider';

function ToastDemo({ message = 'Processus terminé' }: { message?: string }) {
  const { toast } = useToast();
  return (
    <Button type="button" onClick={() => toast({ message, variant: 'success' })}>
      Afficher
    </Button>
  );
}

describe('ToastProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('is exported from the package entrypoint', () => {
    expect(ToastProviderFromEntry).toBe(ToastProvider);
    expect(useToastFromEntry).toBe(useToast);
  });

  it('throws when useToast is used outside the provider', () => {
    expect(() => render(<ToastDemo />)).toThrow(/ToastProvider/);
  });

  it('shows a toast in the viewport without moving focus', () => {
    render(
      <ToastProvider defaultDuration={6000}>
        <ToastDemo />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Afficher' }));
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('Processus terminé');
    expect(alert).not.toHaveFocus();
  });

  it('auto-dismisses after the configured duration', () => {
    render(
      <ToastProvider defaultDuration={1000}>
        <ToastDemo />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Afficher' }));
    expect(screen.getByRole('alert')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('queues toasts beyond maxVisible', () => {
    function QueueDemo() {
      const { toast } = useToast();
      return (
        <Button
          type="button"
          onClick={() => {
            toast({ message: 'Premier', variant: 'info' });
            toast({ message: 'Deuxième', variant: 'info' });
            toast({ message: 'Troisième', variant: 'info' });
          }}
        >
          Enfiler
        </Button>
      );
    }

    render(
      <ToastProvider maxVisible={2} defaultDuration={0}>
        <QueueDemo />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Enfiler' }));
    expect(screen.getAllByRole('alert')).toHaveLength(2);
    expect(screen.getByText('Premier')).toBeInTheDocument();
    expect(screen.getByText('Deuxième')).toBeInTheDocument();
    expect(screen.queryByText('Troisième')).not.toBeInTheDocument();
  });

  it('dismisses from the close button when dismissible', () => {
    function DismissDemo() {
      const { toast } = useToast();
      return (
        <Button
          type="button"
          onClick={() =>
            toast({
              message: 'Processus terminé',
              dismissible: true,
              dismissLabel: 'Fermer',
              duration: 0,
            })
          }
        >
          Afficher
        </Button>
      );
    }

    render(
      <ToastProvider defaultDuration={0}>
        <DismissDemo />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Afficher' }));
    expect(screen.getByRole('alert')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Fermer' }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
