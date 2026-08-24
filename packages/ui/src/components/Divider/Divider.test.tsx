import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Divider } from './Divider';

describe('Divider', () => {
  it('is decorative and hidden from assistive technologies by default', () => {
    render(<Divider data-testid="divider" />);

    expect(screen.queryByRole('separator')).not.toBeInTheDocument();
    expect(screen.getByTestId('divider')).toHaveAttribute('aria-hidden', 'true');
  });

  it('becomes a named separator when labelled', () => {
    render(<Divider label="Fin des résultats" />);

    const separator = screen.getByRole('separator', { name: 'Fin des résultats' });
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('reports its orientation when vertical', () => {
    render(<Divider orientation="vertical" label="Séparateur de colonnes" />);

    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });
});
