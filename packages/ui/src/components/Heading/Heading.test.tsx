import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Heading } from './Heading';

describe('Heading', () => {
  it('renders the requested semantic level', () => {
    render(<Heading level={3}>Sommaire</Heading>);
    expect(
      screen.getByRole('heading', { level: 3, name: 'Sommaire' }),
    ).toBeInTheDocument();
  });

  it('keeps the semantic level when the visual size changes', () => {
    render(
      <Heading level={2} size="display">
        Titre visuellement large
      </Heading>,
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveClass('text-4xl');
  });

  it('derives the visual size from the level by default', () => {
    render(<Heading level={1}>Accueil</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveClass(
      'text-4xl',
      'font-bold',
    );
  });
});
