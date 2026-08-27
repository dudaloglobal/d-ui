import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders a paragraph by default', () => {
    render(<Text>Bonjour</Text>);
    expect(screen.getByText('Bonjour').tagName).toBe('P');
  });

  it('renders the requested element', () => {
    render(<Text as="span">En ligne</Text>);
    expect(screen.getByText('En ligne').tagName).toBe('SPAN');
  });

  it('forwards arbitrary attributes', () => {
    render(<Text data-testid="intro">Intro</Text>);
    expect(screen.getByTestId('intro')).toHaveTextContent('Intro');
  });

  it('applies the danger tone through the tone prop', () => {
    render(<Text tone="danger">Erreur</Text>);
    expect(screen.getByText('Erreur')).toHaveClass('text-danger');
  });
});
