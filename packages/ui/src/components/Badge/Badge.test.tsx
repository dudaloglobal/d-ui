import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge as BadgeFromEntry } from '../../index';
import { IconButton } from '../Button/IconButton';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from './Badge';

const bell = (
  <svg width="1em" height="1em" viewBox="0 0 16 16" aria-hidden="true">
    <circle cx="8" cy="8" r="4" />
  </svg>
);

describe('Badge', () => {
  it('is exported from the package entrypoint', () => {
    expect(BadgeFromEntry).toBe(Badge);
  });

  it('overlays a count on a named host and describes it', () => {
    render(
      <Badge count={5} label="5 unread">
        <IconButton icon={bell} aria-label="Notifications" />
      </Badge>,
    );
    const button = screen.getByRole('button', { name: 'Notifications' });
    expect(button).toHaveAccessibleDescription('5 unread');
    expect(screen.getByText('5')).toHaveAttribute('aria-hidden', 'true');
  });

  it('caps the visible count at max', () => {
    render(
      <Badge count={120} max={99} label="120 unread">
        <IconButton icon={bell} aria-label="Notifications" />
      </Badge>,
    );
    expect(screen.getByText('99+')).toBeVisible();
  });

  it('shows custom overlay content on the host', () => {
    render(
      <Badge content="N" label="New">
        <IconButton icon={bell} aria-label="Notifications" />
      </Badge>,
    );
    expect(screen.getByText('N')).toHaveAttribute('aria-hidden', 'true');
    expect(
      screen.getByRole('button', { name: 'Notifications' }),
    ).toHaveAccessibleDescription('New');
  });

  it('hides a zero count unless showZero is set', () => {
    const { rerender } = render(
      <Badge count={0} label="0 unread">
        <IconButton icon={bell} aria-label="Notifications" />
      </Badge>,
    );
    expect(screen.queryByText('0')).not.toBeInTheDocument();
    rerender(
      <Badge count={0} showZero label="0 unread">
        <IconButton icon={bell} aria-label="Notifications" />
      </Badge>,
    );
    expect(screen.getByText('0')).toBeVisible();
  });

  it('describes a photo avatar on the image itself', () => {
    render(
      <Badge count={3} label="3 messages">
        <Avatar src="https://example.com/ada.jpg" name="Ada Lovelace" />
      </Badge>,
    );
    expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toHaveAccessibleDescription(
      '3 messages',
    );
  });

  it('rejects more than one host', () => {
    expect(() =>
      render(
        // @ts-expect-error — Badge accepts a single host
        <Badge count={1}>
          <button type="button">A</button>
          <button type="button">B</button>
        </Badge>,
      ),
    ).toThrow();
  });
});
