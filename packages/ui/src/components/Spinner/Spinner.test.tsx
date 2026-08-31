import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner as SpinnerFromEntry } from '../../index';
import { Button } from '../Button/Button';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('is exported from the package entrypoint', () => {
    expect(SpinnerFromEntry).toBe(Spinner);
  });

  it('stays out of the accessibility tree without a label', () => {
    const { container } = render(<Spinner />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('carries the label as text inside the live region', () => {
    render(<Spinner label="Chargement des résultats" />);
    const status = screen.getByRole('status');
    // Une région live annonce son **contenu**. Un `aria-label` sur un élément
    // vide ne serait jamais lu : le nom vit donc à l'intérieur, en texte.
    expect(status).toHaveTextContent('Chargement des résultats');
    expect(status).not.toHaveAttribute('aria-hidden');
    expect(status.querySelector('.d-ui-spinner')).toHaveAttribute('aria-hidden', 'true');
  });

  it('does not let a caller silence a labelled spinner', () => {
    render(<Spinner label="Chargement" aria-hidden="true" role="presentation" />);
    const status = screen.getByRole('status');
    expect(status).toHaveTextContent('Chargement');
    expect(status).not.toHaveAttribute('aria-hidden');
  });

  it('is the only spinner in a loading Button, and stays decorative there', () => {
    render(<Button loading>Enregistrer</Button>);
    const button = screen.getByRole('button', { name: 'Enregistrer' });
    expect(button).toHaveAttribute('aria-busy', 'true');
    // Une seule annonce pour une seule attente : le bouton, pas le spinner.
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(button.querySelector('.d-ui-spinner')).toBeTruthy();
    expect(button.querySelector('.d-ui-button-spinner')).toBeNull();
  });
});
