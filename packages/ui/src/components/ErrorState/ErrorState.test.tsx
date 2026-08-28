import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from '../Button/Button';
import { ErrorState as ErrorStateFromEntry } from '../../index';
import { ErrorState } from './ErrorState';

describe('ErrorState', () => {
  it('is exported from the package entrypoint', () => {
    expect(ErrorStateFromEntry).toBe(ErrorState);
  });

  it('renders a static placeholder without a live region by default', () => {
    render(
      <ErrorState
        title="Impossible de charger"
        description="Réessayez dans quelques instants."
        actions={<Button variant="secondary">Réessayer</Button>}
      />,
    );
    expect(screen.getByRole('heading', { name: 'Impossible de charger' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Réessayer' })).toBeVisible();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('uses role="alert" when live', () => {
    render(
      <ErrorState live title="Échec réseau" description="Le serveur ne répond pas." />,
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Échec réseau');
    expect(screen.getByText('Le serveur ne répond pas.')).toBeVisible();
  });
});
