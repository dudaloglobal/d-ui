import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../lib/cx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPosition = 'start' | 'end';
export type ButtonLoadingIndicator = 'spinner' | 'bounce';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Emphasis. `"primary"` is high, `"secondary"` is medium, `"ghost"` is low.
   * There should not be more than one high-emphasis button in a view.
   */
  variant?: ButtonVariant;
  /** `"sm"` when space is constrained. `"md"` by default. `"lg"` for spacious actions. */
  size?: ButtonSize;
  /** Replaces the icon with a loading indicator and sets `aria-busy`. The label stays visible. */
  loading?: boolean;
  /** `"spinner"` (default) or `"bounce"` (three dots). Only used when `loading` is set. */
  loadingIndicator?: ButtonLoadingIndicator;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  /** Stretch to the width of the container. */
  fullWidth?: boolean;
  /**
   * Toggle state for medium/low emphasis (subscribe, notification on/off).
   * Sets `aria-pressed`. If the label already changes with the state, that is enough
   * for the name; `aria-pressed` still exposes the pressed state.
   */
  isSelected?: boolean;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-on-brand hover:bg-brand-hover',
  secondary: 'bg-surface-muted text-fg border border-border hover:bg-surface-hover',
  ghost: 'bg-transparent text-fg hover:bg-surface-muted',
};

const sizeClass: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-5 text-lg',
};

function Spinner() {
  return <span className="d-ui-button-spinner" aria-hidden="true" />;
}

function Bounce() {
  return (
    <span className="d-ui-button-bounce" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function IconSlot({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0" aria-hidden="true">
      {children}
    </span>
  );
}

const selectedClass: Partial<Record<ButtonVariant, string>> = {
  secondary: 'bg-surface-hover border-brand',
  ghost: 'bg-surface-muted',
};

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  disabled,
  loading = false,
  loadingIndicator = 'spinner',
  icon,
  iconPosition = 'start',
  fullWidth = false,
  isSelected,
  children,
  ...rest
}: ButtonProps) {
  const isDisabled = Boolean(disabled || loading);
  const showStartIcon = !loading && icon && iconPosition === 'start';
  const showEndIcon = !loading && icon && iconPosition === 'end';

  return (
    <button
      {...rest}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-pressed={typeof isSelected === 'boolean' ? isSelected : undefined}
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-md font-medium',
        'transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        'disabled:pointer-events-none disabled:opacity-50',
        variantClass[variant],
        sizeClass[size],
        fullWidth && 'w-full min-w-0',
        isSelected ? selectedClass[variant] : undefined,
        className,
      )}
    >
      {loading ? loadingIndicator === 'bounce' ? <Bounce /> : <Spinner /> : null}
      {showStartIcon ? <IconSlot>{icon}</IconSlot> : null}
      {children}
      {showEndIcon ? <IconSlot>{icon}</IconSlot> : null}
    </button>
  );
}
