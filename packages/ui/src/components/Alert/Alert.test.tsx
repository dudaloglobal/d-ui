import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Alert as AlertFromEntry } from '../../index';
import { Button } from '../Button/Button';
import { Alert } from './Alert';

describe('Alert', () => {
  it('is exported from the package entrypoint', () => {
    expect(AlertFromEntry).toBe(Alert);
  });

  it('uses role="status" for informational variants', () => {
    render(<Alert variant="info">Message informatif</Alert>);
    expect(screen.getByRole('status')).toHaveTextContent('Message informatif');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('uses role="alert" for warning and danger', () => {
    const { rerender } = render(<Alert variant="warning">Attention</Alert>);
    expect(screen.getByRole('alert')).toHaveTextContent('Attention');

    rerender(<Alert variant="danger">Erreur critique</Alert>);
    expect(screen.getByRole('alert')).toHaveTextContent('Erreur critique');
  });

  it('only shows dismiss on info with a background', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Alert variant="warning" dismissible dismissLabel="Fermer">
          Alerte
        </Alert>
        <Alert variant="info" hasBackground={false} dismissible dismissLabel="Fermer">
          Trimmed
        </Alert>
        <Alert variant="info" dismissible dismissLabel="Fermer">
          Fermable
        </Alert>
      </>,
    );
    expect(screen.getAllByRole('button', { name: 'Fermer' })).toHaveLength(1);
    await user.click(screen.getByRole('button', { name: 'Fermer' }));
    expect(screen.queryByText('Fermable')).not.toBeInTheDocument();
    expect(screen.getByText('Trimmed')).toBeInTheDocument();
  });

  it('renders actions below the message', () => {
    render(
      <Alert variant="info" actions={<Button size="sm">En savoir plus</Button>}>
        Nouveauté
      </Alert>,
    );
    expect(screen.getByRole('button', { name: 'En savoir plus' })).toBeVisible();
  });

  it('renders trimmed without a tinted background', () => {
    render(
      <Alert variant="info" hasBackground={false} data-testid="alert">
        Message trimmed
      </Alert>,
    );
    expect(screen.getByTestId('alert')).toHaveClass('px-0');
    expect(screen.getByTestId('alert')).not.toHaveClass('border');
  });
});
