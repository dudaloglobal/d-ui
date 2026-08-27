import { render, screen } from '@testing-library/react';
import type { SVGProps } from 'react';
import { describe, expect, it } from 'vitest';
import { Icon } from './Icon';

function StubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg data-testid="svg" viewBox="0 0 24 24" {...props}>
      <path d="M0 0h24v24H0z" />
    </svg>
  );
}

describe('Icon', () => {
  it('is decorative and hidden from assistive technologies by default', () => {
    render(<Icon as={StubIcon} />);

    const svg = screen.getByTestId('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveAttribute('focusable', 'false');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('becomes a named image when labelled', () => {
    render(<Icon as={StubIcon} label="Supprimer" />);

    const svg = screen.getByRole('img', { name: 'Supprimer' });
    expect(svg).not.toHaveAttribute('aria-hidden');
    // Être nommée ne remet pas l'icône dans l'ordre de tabulation.
    expect(svg).toHaveAttribute('focusable', 'false');
  });

  it('applies the size class matching the Button heights', () => {
    render(<Icon as={StubIcon} size="lg" />);
    expect(screen.getByTestId('svg')).toHaveClass('size-6');
  });

  it('keeps consumer classes and forwards SVG props', () => {
    render(<Icon as={StubIcon} className="rotate-90" data-state="open" />);

    const svg = screen.getByTestId('svg');
    expect(svg).toHaveClass('rotate-90');
    expect(svg).toHaveAttribute('data-state', 'open');
  });

  it('does not let a caller override the accessibility semantics', () => {
    // Le type autorise ces attributs — c'est pour ça que le composant les
    // réaffirme après `rest` plutôt que de compter sur TypeScript.
    render(<Icon as={StubIcon} aria-hidden={false} role="presentation" focusable />);

    const svg = screen.getByTestId('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveAttribute('focusable', 'false');
    expect(svg).not.toHaveAttribute('role', 'presentation');
  });
});
