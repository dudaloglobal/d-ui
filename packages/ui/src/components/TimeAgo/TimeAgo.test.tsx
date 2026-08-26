import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { TimeAgo } from './TimeAgo';
import { TimeAgo as TimeAgoFromEntry } from '../../index';

const NOW = new Date('2026-08-26T12:00:00.000Z');

function getTime(): HTMLTimeElement {
  const node = document.querySelector('time');
  expect(node).toBeInstanceOf(HTMLTimeElement);
  return node as HTMLTimeElement;
}

describe('TimeAgo', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(NOW);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders relative text on a time element with an ISO datetime', () => {
    render(<TimeAgo date={new Date('2026-08-26T11:00:00.000Z')} locale="en" />);
    const time = getTime();
    expect(time).toHaveAttribute('datetime', '2026-08-26T11:00:00.000Z');
    expect(screen.getByText('1 hour ago')).toBeInTheDocument();
  });

  it('exposes the absolute time to assistive tech and as a title', () => {
    render(<TimeAgo date={new Date('2026-08-26T11:00:00.000Z')} locale="en" />);
    const time = getTime();
    expect(time).toHaveAttribute('title');
    expect(time.getAttribute('title')?.length).toBeGreaterThan(0);
    expect(screen.getByText(/August 26, 2026/)).toBeInTheDocument();
    expect(time.querySelector('.d-ui-visually-hidden')).toHaveTextContent(
      /August 26, 2026/,
    );
    expect(time).toHaveTextContent(/1 hour ago/);
  });

  it('lets a custom title override the absolute tooltip', () => {
    render(
      <TimeAgo
        date={new Date('2026-08-26T11:00:00.000Z')}
        locale="en"
        title="Submitted yesterday"
      />,
    );
    expect(getTime()).toHaveAttribute('title', 'Submitted yesterday');
    expect(screen.getByText(/August 26, 2026/)).toBeInTheDocument();
  });

  it('injects the locale into relative copy', () => {
    render(<TimeAgo date={new Date('2026-08-26T11:57:00.000Z')} locale="fr" />);
    expect(screen.getByText('il y a 3 minutes')).toBeInTheDocument();
  });

  it('uses numeric:auto wording for the current instant', () => {
    render(<TimeAgo date={NOW} locale="en" />);
    expect(screen.getByText('now')).toBeInTheDocument();
  });

  it('formats a future instant', () => {
    render(<TimeAgo date={new Date('2026-08-28T12:00:00.000Z')} locale="en" />);
    expect(screen.getByText('in 2 days')).toBeInTheDocument();
  });

  it('picks week and year units', () => {
    const week = 7 * 24 * 60 * 60 * 1000;
    const year = 365.25 * 24 * 60 * 60 * 1000;
    const { rerender } = render(
      <TimeAgo date={new Date(NOW.getTime() - 2 * week)} locale="en" />,
    );
    expect(screen.getByText('2 weeks ago')).toBeInTheDocument();

    rerender(<TimeAgo date={new Date(NOW.getTime() - 3 * year)} locale="en" />);
    expect(screen.getByText('3 years ago')).toBeInTheDocument();
  });

  it('accepts an ISO string date', () => {
    render(<TimeAgo date="2026-08-25T12:00:00.000Z" locale="en" />);
    expect(getTime()).toHaveAttribute('datetime', '2026-08-25T12:00:00.000Z');
    expect(screen.getByText('yesterday')).toBeInTheDocument();
  });

  it('accepts an epoch millisecond date', () => {
    render(<TimeAgo date={Date.parse('2026-08-26T11:00:00.000Z')} locale="en" />);
    expect(getTime()).toHaveAttribute('datetime', '2026-08-26T11:00:00.000Z');
    expect(screen.getByText('1 hour ago')).toBeInTheDocument();
  });

  it('applies size and className on the time element', () => {
    const { rerender } = render(
      <TimeAgo date={NOW} locale="en" size="sm" className="posted-at" />,
    );
    expect(getTime()).toHaveClass('text-sm', 'posted-at');

    rerender(<TimeAgo date={NOW} locale="en" size="md" />);
    expect(getTime()).toHaveClass('text-base');
    expect(getTime()).not.toHaveClass('text-sm');
  });

  it('does not set aria-live when live updates are enabled', () => {
    render(<TimeAgo date={new Date('2026-08-26T11:59:30.000Z')} live locale="en" />);
    expect(getTime()).not.toHaveAttribute('aria-live');
    expect(screen.getByText('30 seconds ago')).toBeInTheDocument();
  });

  it('lets consumers opt into announcements via aria-live', () => {
    render(
      <TimeAgo
        date={new Date('2026-08-26T11:59:30.000Z')}
        live
        locale="en"
        aria-live="polite"
      />,
    );
    expect(getTime()).toHaveAttribute('aria-live', 'polite');
  });

  it('does not refresh relative text unless live is set', async () => {
    render(<TimeAgo date={new Date('2026-08-26T11:59:30.000Z')} locale="en" />);
    expect(screen.getByText('30 seconds ago')).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(10_000);
    });

    expect(screen.getByText('30 seconds ago')).toBeInTheDocument();
    expect(screen.queryByText('40 seconds ago')).not.toBeInTheDocument();
  });

  it('refreshes relative text on a coarse interval when live', async () => {
    render(<TimeAgo date={new Date('2026-08-26T11:59:30.000Z')} live locale="en" />);
    expect(screen.getByText('30 seconds ago')).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(10_000);
    });

    expect(screen.getByText('40 seconds ago')).toBeInTheDocument();
  });

  it('crosses from seconds to minutes on a live tick', async () => {
    render(<TimeAgo date={new Date('2026-08-26T11:59:10.000Z')} live locale="en" />);
    expect(screen.getByText('50 seconds ago')).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(10_000);
    });

    expect(screen.getByText('1 minute ago')).toBeInTheDocument();
  });

  it('uses a 30s interval once the offset is past a minute', async () => {
    render(<TimeAgo date={new Date('2026-08-26T11:58:01.000Z')} live locale="en" />);
    expect(screen.getByText('1 minute ago')).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(10_000);
    });
    expect(screen.getByText('1 minute ago')).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(20_000);
    });
    expect(screen.getByText('2 minutes ago')).toBeInTheDocument();
  });

  it('clears the live timer on unmount', () => {
    const clearSpy = vi.spyOn(globalThis, 'clearTimeout');
    const { unmount } = render(
      <TimeAgo date={new Date('2026-08-26T11:59:30.000Z')} live locale="en" />,
    );
    unmount();
    expect(clearSpy).toHaveBeenCalled();
    clearSpy.mockRestore();
  });

  it('uses a native time element with a valid global datetime', () => {
    render(<TimeAgo date={new Date('2026-08-26T11:00:00.000Z')} locale="en" />);
    const time = getTime();
    expect(time.tagName).toBe('TIME');
    expect(time).not.toHaveAttribute('role');
    expect(time.getAttribute('datetime')).toMatch(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/,
    );
  });

  it('sets lang from the injectable locale so AT use the right voice', () => {
    render(<TimeAgo date={NOW} locale="fr" />);
    expect(getTime()).toHaveAttribute('lang', 'fr');
  });

  it('renders a span, not time, when the date is invalid', () => {
    render(<TimeAgo date="not-a-date" locale="en" />);
    expect(document.querySelector('time')).toBeNull();
    const fallback = screen.getByText('—');
    expect(fallback.tagName).toBe('SPAN');
    expect(fallback).not.toHaveAttribute('datetime');
  });

  it('does not schedule live updates for an invalid date', async () => {
    render(<TimeAgo date={new Date('invalid')} live locale="en" />);
    expect(screen.getByText('—')).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(60_000);
    });

    expect(screen.getByText('—')).toBeInTheDocument();
    expect(document.querySelector('time')).toBeNull();
  });

  it('is exported from the package entrypoint', () => {
    expect(TimeAgoFromEntry).toBe(TimeAgo);
    render(<TimeAgoFromEntry date={NOW} locale="en" />);
    expect(screen.getByText('now')).toBeInTheDocument();
  });
});
