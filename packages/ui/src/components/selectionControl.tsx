import type { ReactNode } from 'react';
import { cx } from '../lib/cx';

export type SelectionSize = 'sm' | 'md' | 'lg';

export const boxSizeClass: Record<SelectionSize, string> = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
};

export const switchTrackClass: Record<SelectionSize, string> = {
  sm: 'h-4 w-7',
  md: 'h-5 w-9',
  lg: 'h-6 w-11',
};

export const switchThumbClass: Record<SelectionSize, string> = {
  sm: 'size-3 translate-x-0.5 peer-checked:translate-x-3.5',
  md: 'size-4 translate-x-0.5 peer-checked:translate-x-[1.125rem]',
  lg: 'size-5 translate-x-0.5 peer-checked:translate-x-6',
};

export const nativeControlClass =
  'absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed';

export function mergeDescribedBy(
  ...ids: Array<string | undefined | false>
): string | undefined {
  const value = ids.filter((id): id is string => Boolean(id)).join(' ');
  return value || undefined;
}

export function CheckMark() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IndeterminateMark() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RadioDot() {
  return <span className="d-ui-radio-dot size-1/2 rounded-full bg-current" />;
}

export function SelectionCaption({
  id,
  invalid,
  error,
  helper,
}: {
  id: string;
  invalid: boolean;
  error?: ReactNode;
  helper?: ReactNode;
}) {
  const description = invalid ? error : helper;
  if (!description) return null;
  return (
    <p
      id={id}
      className={cx(
        'mt-2 text-sm leading-5',
        invalid && error ? 'text-danger' : 'text-fg/70',
      )}
    >
      {description}
    </p>
  );
}

export function GroupFieldset({
  legend,
  required,
  disabled,
  invalid,
  helper,
  error,
  helperId,
  orientation = 'vertical',
  children,
}: {
  legend?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  invalid: boolean;
  helper?: ReactNode;
  error?: ReactNode;
  helperId: string;
  orientation?: 'vertical' | 'horizontal';
  children: ReactNode;
}) {
  return (
    <fieldset
      disabled={disabled}
      aria-invalid={invalid || undefined}
      aria-required={required || undefined}
      className="m-0 min-w-0 border-0 p-0"
    >
      {legend ? (
        <legend
          className={cx(
            'mb-2 px-0 text-sm leading-5',
            disabled ? 'text-fg/40' : 'text-fg',
          )}
        >
          {legend}
          {required ? <span aria-hidden="true"> *</span> : null}
        </legend>
      ) : null}
      <div
        className={cx(
          'flex',
          orientation === 'horizontal' ? 'flex-row flex-wrap gap-4' : 'flex-col gap-2',
        )}
      >
        {children}
      </div>
      <SelectionCaption id={helperId} invalid={invalid} error={error} helper={helper} />
    </fieldset>
  );
}
