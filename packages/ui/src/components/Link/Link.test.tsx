import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Link } from './Link';

describe('Link', () => {
  it('exposes an accessible name and href', () => {
    render(<Link href="/tarifs">Tarifs</Link>);
    expect(screen.getByRole('link', { name: 'Tarifs' })).toHaveAttribute(
      'href',
      '/tarifs',
    );
  });

  it('announces that an external link opens a new tab', () => {
    render(
      <Link href="https://example.org" external>
        Documentation
      </Link>,
    );

    const link = screen.getByRole('link', {
      name: 'Documentation (opens in a new tab)',
    });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('is reachable and activable with the keyboard', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn((event: React.MouseEvent) => event.preventDefault());
    render(
      <Link href="/contact" onClick={onClick}>
        Contact
      </Link>,
    );

    await user.tab();
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders a decorative icon without changing the accessible name', () => {
    render(
      <Link
        href="/catalogue"
        icon={
          <svg data-testid="link-icon" viewBox="0 0 16 16">
            <path d="M4 12L12 4M6 4h6v6" />
          </svg>
        }
        iconPosition="end"
      >
        Catalogue
      </Link>,
    );
    const link = screen.getByRole('link', { name: 'Catalogue' });
    expect(
      link.querySelector('[data-testid="link-icon"]')?.parentElement,
    ).toHaveAttribute('aria-hidden', 'true');
    expect(link).toHaveClass('inline-flex');
  });

  it('uses ink and paper colors without the visited token', () => {
    const { rerender } = render(
      <Link href="/catalogue" color="dark">
        Sombre
      </Link>,
    );
    expect(screen.getByRole('link', { name: 'Sombre' })).toHaveClass('text-fg');
    expect(screen.getByRole('link', { name: 'Sombre' })).not.toHaveClass('text-link');

    rerender(
      <Link href="/catalogue" color="light">
        Clair
      </Link>,
    );
    expect(screen.getByRole('link', { name: 'Clair' })).toHaveClass('text-bg');
  });
});
