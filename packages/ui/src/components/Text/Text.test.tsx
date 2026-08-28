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

  it('applies a palette family through the color prop', () => {
    render(<Text color="brand">Marque</Text>);
    expect(screen.getByText('Marque')).toHaveClass('text-brand');
  });

  it('lets color win over tone', () => {
    render(
      <Text tone="danger" color="brand">
        Emphase
      </Text>,
    );
    const el = screen.getByText('Emphase');
    expect(el).toHaveClass('text-brand');
    expect(el).not.toHaveClass('text-danger');
  });

  it('uses brand-hover for brand D1', () => {
    render(
      <Text color="brand" colorVariant="D1">
        Survol
      </Text>,
    );
    expect(screen.getByText('Survol')).toHaveClass('text-brand-hover');
  });

  it('paints a tint with color-mix when colorVariant is not N', () => {
    render(
      <Text color="brand" colorVariant="L2">
        Teinte
      </Text>,
    );
    const el = screen.getByText('Teinte');
    expect(el).not.toHaveClass('text-brand');
    expect(el).not.toHaveClass('text-fg');
    expect(el.getAttribute('style')).toContain(
      'color-mix(in srgb, var(--d-ui-color-brand) 60%, transparent)',
    );
  });

  it('prevents wrapping with noWrap', () => {
    render(<Text noWrap>Large</Text>);
    expect(screen.getByText('Large')).toHaveClass('whitespace-nowrap');
  });

  it('truncates a single line with an ellipsis', () => {
    render(<Text truncate>Large</Text>);
    expect(screen.getByText('Large')).toHaveClass('truncate');
  });

  it('truncates after several lines', () => {
    render(<Text truncate={{ lines: 2 }}>Large</Text>);
    const el = screen.getByText('Large');
    expect(el).toHaveClass('d-ui-text-clamp');
    expect(el.style.getPropertyValue('--d-ui-text-truncate-lines')).toBe('2');
  });
});
