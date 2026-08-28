import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../lib/cx';

export function PickerButton({
  label,
  className,
  children,
  ...rest
}: {
  label: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...rest}
      aria-label={label}
      className={cx(
        'inline-flex size-6 shrink-0 items-center justify-center rounded-md text-fg/70',
        'hover:bg-surface-muted hover:text-fg',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function CalendarGlyph() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect
        x="2.5"
        y="3.5"
        width="11"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M2.5 6.5h11" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 2.5v2M10.5 2.5v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClockGlyph() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 5v3.25L10 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const pickerPanelClass =
  'rounded-md border border-border bg-bg px-3 py-3 text-fg shadow-lg';
