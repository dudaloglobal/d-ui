import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from '../Button/Button';
import { EmptyState as EmptyStateFromEntry } from '../../index';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('is exported from the package entrypoint', () => {
    expect(EmptyStateFromEntry).toBe(EmptyState);
  });

  it('renders title, description, and actions', () => {
    render(
      <EmptyState
        title="Aucun devoir"
        description="Créez votre premier devoir pour commencer."
        actions={
          <>
            <Button>Créer</Button>
            <Button variant="secondary">Importer</Button>
          </>
        }
      />,
    );
    expect(screen.getByRole('heading', { name: 'Aucun devoir' })).toBeVisible();
    expect(screen.getByText('Créez votre premier devoir pour commencer.')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Créer' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Importer' })).toBeVisible();
  });
});
