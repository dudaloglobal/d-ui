import type { KeyboardEvent } from 'react';
import { cx } from '../../lib/cx';
import { wrapClockUnit } from './parse';
import { PickerButton } from './pickerChrome';

export function TimeSpinner({
  label,
  incrementLabel,
  decrementLabel,
  value,
  min,
  max,
  disabled = false,
  onChange,
}: {
  label: string;
  incrementLabel: string;
  decrementLabel: string;
  value: number;
  min: number;
  max: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}) {
  function step(delta: number) {
    onChange(wrapClockUnit(value + delta, min, max));
  }

  function handleKey(event: KeyboardEvent<HTMLDivElement>) {
    if (disabled) return;
    if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
      event.preventDefault();
      step(1);
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
      event.preventDefault();
      step(-1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      onChange(min);
    }
    if (event.key === 'End') {
      event.preventDefault();
      onChange(max);
    }
    if (event.key === 'PageUp') {
      event.preventDefault();
      step(5);
    }
    if (event.key === 'PageDown') {
      event.preventDefault();
      step(-5);
    }
  }

  const display = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-1">
      <PickerButton label={incrementLabel} disabled={disabled} onClick={() => step(1)}>
        <Chevron dir="up" />
      </PickerButton>
      <div
        role="spinbutton"
        tabIndex={disabled ? -1 : 0}
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuetext={display}
        aria-disabled={disabled || undefined}
        onKeyDown={handleKey}
        className={cx(
          'min-w-10 rounded-md px-2 py-1 text-center text-lg font-medium tabular-nums',
          'ring-1 ring-inset ring-border',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
          disabled && 'opacity-50',
        )}
      >
        {display}
      </div>
      <PickerButton label={decrementLabel} disabled={disabled} onClick={() => step(-1)}>
        <Chevron dir="down" />
      </PickerButton>
    </div>
  );
}

function Chevron({ dir }: { dir: 'up' | 'down' }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={dir === 'up' ? 'M4 10l4-4 4 4' : 'M4 6l4 4 4-4'}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
