import type { ReactNode } from 'react';
import { cx } from '../../lib/cx';

export type TextControlSize = 'sm' | 'md' | 'lg';

export const inputHeightClass: Record<TextControlSize, string> = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
};

export function mergeDescribedBy(
  ...ids: Array<string | undefined | false>
): string | undefined {
  const value = ids.filter((id): id is string => Boolean(id)).join(' ');
  return value || undefined;
}

export function stringifyValue(
  value: string | number | readonly string[] | undefined,
): string {
  if (value == null) return '';
  if (typeof value === 'number') return String(value);
  if (typeof value === 'string') return value;
  return value.join(',');
}

export function defaultCountMessage(count: number, maxLength?: number): string {
  if (maxLength == null) return String(count);
  const remaining = Math.max(0, maxLength - count);
  return remaining === 1 ? '1 character remaining' : `${remaining} characters remaining`;
}

export function frameClass({
  size,
  invalid,
  valid,
  disabled,
  multiline,
}: {
  size: TextControlSize;
  invalid: boolean;
  valid?: boolean;
  disabled: boolean;
  multiline?: boolean;
}): string {
  return cx(
    'flex gap-2 rounded-md border bg-bg px-3 text-sm text-fg',
    multiline ? 'min-h-24 items-start py-2' : cx('items-center', inputHeightClass[size]),
    invalid
      ? 'border-danger focus-within:border-danger focus-within:shadow-[inset_0_0_0_1px_var(--d-ui-color-danger)]'
      : valid
        ? 'border-success focus-within:border-success focus-within:shadow-[inset_0_0_0_1px_var(--d-ui-color-success)]'
        : 'border-border focus-within:border-focus focus-within:shadow-[inset_0_0_0_1px_var(--d-ui-color-focus)]',
    !disabled && !invalid && !valid && 'hover:border-fg/40',
    disabled && 'pointer-events-none',
    'w-full min-w-0',
  );
}

export function TextFieldLayout({
  id,
  label,
  helper,
  error,
  required,
  invalid,
  valid,
  disabled,
  fullWidth,
  size,
  className,
  showCount,
  count,
  maxLength,
  countMessage,
  countId,
  helperId,
  multiline,
  children,
}: {
  id?: string;
  label?: ReactNode;
  helper?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  invalid: boolean;
  valid?: boolean;
  disabled: boolean;
  fullWidth: boolean;
  size: TextControlSize;
  className?: string;
  showCount?: boolean;
  count: number;
  maxLength?: number;
  countMessage: (count: number, maxLength?: number) => string;
  countId: string;
  helperId: string;
  multiline?: boolean;
  children: ReactNode;
}) {
  const description = invalid ? error : helper;
  const showHeader = Boolean(label) || showCount;

  return (
    <div
      className={cx(
        'flex flex-col',
        fullWidth ? 'w-full min-w-0' : 'w-80 max-w-full',
        disabled && 'opacity-50',
        className,
      )}
    >
      {showHeader ? (
        <div className="mb-1 flex items-baseline gap-3">
          {label ? (
            <label htmlFor={id} className="min-w-0 flex-1 text-sm text-fg/70">
              {label}
              {required ? <span aria-hidden="true"> *</span> : null}
            </label>
          ) : (
            <span className="flex-1" />
          )}
          {showCount ? (
            <span id={countId} className="shrink-0 text-sm text-fg/70">
              {countMessage(count, maxLength)}
            </span>
          ) : null}
        </div>
      ) : null}
      <div
        className={frameClass({
          size,
          invalid,
          valid: Boolean(valid) && !invalid,
          disabled,
          multiline,
        })}
      >
        {children}
      </div>
      {description ? (
        <p
          id={helperId}
          className={cx('mt-1 text-sm', invalid && error ? 'text-danger' : 'text-fg/70')}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ChromeButton({
  label,
  pressed,
  disabled,
  onClick,
  children,
}: {
  label: string;
  pressed?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      disabled={disabled}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
      className={cx(
        'inline-flex size-6 shrink-0 items-center justify-center rounded-md text-fg/70',
        'hover:bg-surface-muted hover:text-fg',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
        'disabled:pointer-events-none disabled:opacity-50',
      )}
    >
      {children}
    </button>
  );
}

export function ClearIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EyeIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="8" r="1.75" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function EyeOffIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 2l12 12M6.1 6.2A2.2 2.2 0 009.8 9.9M4.2 4.5C2.6 5.6 1.5 8 1.5 8s2.5 4.5 6.5 4.5c1.2 0 2.3-.4 3.2-1M11.7 11.2C13.2 10.2 14.5 8 14.5 8s-2.5-4.5-6.5-4.5c-.5 0-1 .07-1.4.18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10.5 10.5L14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-success"
    >
      <path
        d="M3.5 8.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AlertIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-danger"
    >
      <path
        d="M8 2.5L14.5 14h-13L8 2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 7v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="12.25" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function StatusIcon({ invalid, valid }: { invalid: boolean; valid?: boolean }) {
  if (invalid) return <AlertIcon />;
  if (valid) return <CheckIcon />;
  return null;
}

export const nativeInputClass =
  'min-w-0 flex-1 border-0 bg-transparent p-0 text-inherit outline-none placeholder:text-fg/50';
