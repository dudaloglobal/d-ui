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
});
