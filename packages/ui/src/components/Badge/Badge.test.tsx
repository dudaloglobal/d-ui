import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Badge as BadgeFromEntry } from '../../index';
import { Badge } from './Badge';

describe('Badge', () => {
  it('is exported from the package entrypoint', () => {
    expect(BadgeFromEntry).toBe(Badge);
  });

  it('renders a named status label', () => {
    render(<Badge variant="success">Publié</Badge>);
    expect(screen.getByText('Publié')).toBeVisible();
  });

  it('keeps a decorative icon out of the accessible name', () => {
    render(
      <Badge
        variant="info"
        icon={
          <svg width="1em" height="1em" aria-hidden="true">
            <circle cx="8" cy="8" r="4" />
          </svg>
        }
      >
        Info
      </Badge>,
    );
    expect(screen.getByText('Info')).toBeVisible();
    expect(screen.getByText('Info').querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  it('does not expose the status dot to assistive tech', () => {
    render(
      <Badge variant="warning" dot>
        Brouillon
      </Badge>,
    );
    const badge = screen.getByText('Brouillon');
    expect(badge.querySelector('[aria-hidden="true"]')).toBeTruthy();
  });

  it('removes the pill with a named dismiss button', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(
      <Badge dismissible dismissLabel="Retirer" onDismiss={onDismiss}>
        Maths
      </Badge>,
    );
    await user.click(screen.getByRole('button', { name: 'Retirer' }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Maths')).not.toBeInTheDocument();
  });

  it('forwards className onto the pill', () => {
    render(
      <Badge color="success" className="my-badge">
        Publié
      </Badge>,
    );
    expect(screen.getByText('Publié')).toHaveClass('my-badge');
  });
});
