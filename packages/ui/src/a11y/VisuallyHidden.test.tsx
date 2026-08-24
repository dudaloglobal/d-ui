import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { VisuallyHidden } from './VisuallyHidden';

describe('VisuallyHidden', () => {
  it('keeps text available to assistive tech', () => {
    render(
      <button type="button">
        <VisuallyHidden>Fermer</VisuallyHidden>
      </button>,
    );
    expect(screen.getByRole('button', { name: 'Fermer' })).toBeInTheDocument();
  });
});
