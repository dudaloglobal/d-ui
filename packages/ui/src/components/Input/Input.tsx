import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId, useState } from 'react';
import {
  ChromeButton,
  ClearIcon,
  EyeIcon,
  EyeOffIcon,
  StatusIcon,
  TextFieldLayout,
  defaultCountMessage,
  mergeDescribedBy,
  nativeInputClass,
  stringifyValue,
  type TextControlSize,
} from './textControl';

export type InputSize = TextControlSize;
export type InputType =
  'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'prefix' | 'size' | 'type'
> & {
  type?: InputType;
  size?: InputSize;
  /** Visible label above the control. Prefer this, or an external `htmlFor` / `aria-labelledby`. */
  label?: ReactNode;
  /** Guidance under the control. Replaced by `error` when the field is invalid. */
  helper?: ReactNode;
  /** Error text under the control. Also sets `aria-invalid`. */
  error?: ReactNode;
  /** Maps to `aria-invalid`. Prefer this name so it matches Field (`invalid`). */
  invalid?: boolean;
  /** Success state: green outline and check. Ignored when `invalid`. */
  valid?: boolean;
  /** Decorative icon at the start of the field. Complements `label`, does not replace it. */
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  /** Stretch the control to the container width. */
  fullWidth?: boolean;
  /** Show a clear control when the value is not empty. */
  clearable?: boolean;
  onClear?: () => void;
  /** Accessible name of the clear control. Default `"Clear"`. */
  clearLabel?: string;
  /**
   * Visible character count in the header (remaining when `maxLength` is set).
   * Defaults to on when `maxLength` is set. Associate via `aria-describedby`.
   */
  showCount?: boolean;
  countMessage?: (count: number, maxLength?: number) => string;
  /** Accessible name while the password is hidden. Default `"Show password"`. */
  revealPasswordLabel?: string;
  /** Accessible name while the password is visible. Default `"Hide password"`. */
  hidePasswordLabel?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    type = 'text',
    size = 'md',
    label,
    helper,
    error,
    invalid = false,
    valid = false,
    icon,
    prefix,
    suffix,
    fullWidth = false,
    clearable = false,
    onClear,
    clearLabel = 'Clear',
    showCount,
    countMessage = defaultCountMessage,
    revealPasswordLabel = 'Show password',
    hidePasswordLabel = 'Hide password',
    className,
    disabled,
    readOnly,
    required,
    value,
    defaultValue,
    onChange,
    maxLength,
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedBy,
    ...rest
  }: InputProps,
  ref,
) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const countId = `${generatedId}-count`;
  const helperId = `${generatedId}-helper`;
  const isControlled = value !== undefined;
  const [uncontrolled, setUncontrolled] = useState(() => stringifyValue(defaultValue));
  const [passwordVisible, setPasswordVisible] = useState(false);
  const current = isControlled ? stringifyValue(value) : uncontrolled;
  const isInvalid =
    Boolean(invalid) || Boolean(error) || ariaInvalid === true || ariaInvalid === 'true';
  const isPassword = type === 'password';
  const showClear = clearable && current.length > 0 && !disabled && !readOnly;
  const displayCount = showCount ?? maxLength != null;
  const description = isInvalid ? error : helper;
  const inputType = isPassword && passwordVisible ? 'text' : type;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!isControlled) setUncontrolled(event.target.value);
    onChange?.(event);
  }

  function handleClear() {
    if (!isControlled) setUncontrolled('');
    onClear?.();
    onChange?.({
      target: { value: '', name: rest.name },
      currentTarget: { value: '', name: rest.name },
    } as ChangeEvent<HTMLInputElement>);
  }

  return (
    <TextFieldLayout
      id={controlId}
      label={label}
      helper={helper}
      error={error}
      required={required}
      invalid={isInvalid}
      valid={valid}
      disabled={Boolean(disabled)}
      fullWidth={fullWidth}
      size={size}
      className={className}
      showCount={displayCount}
      count={current.length}
      maxLength={maxLength}
      countMessage={countMessage}
      countId={countId}
      helperId={helperId}
    >
      {icon ? <span className="inline-flex shrink-0 text-fg/70">{icon}</span> : null}
      {prefix ? <span className="inline-flex shrink-0 text-fg/70">{prefix}</span> : null}
      <input
        {...rest}
        ref={ref}
        id={controlId}
        type={inputType}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        value={current}
        maxLength={maxLength}
        aria-invalid={isInvalid || undefined}
        aria-describedby={mergeDescribedBy(
          ariaDescribedBy,
          displayCount && countId,
          description ? helperId : undefined,
        )}
        onChange={handleChange}
        className={nativeInputClass}
      />
      {showClear ? (
        <ChromeButton label={clearLabel} disabled={disabled} onClick={handleClear}>
          <ClearIcon />
        </ChromeButton>
      ) : null}
      {isPassword ? (
        <ChromeButton
          label={passwordVisible ? hidePasswordLabel : revealPasswordLabel}
          pressed={passwordVisible}
          disabled={disabled}
          onClick={() => setPasswordVisible((visible) => !visible)}
        >
          {passwordVisible ? <EyeOffIcon /> : <EyeIcon />}
        </ChromeButton>
      ) : null}
      <StatusIcon invalid={isInvalid} valid={valid} />
      {suffix ? <span className="inline-flex shrink-0 text-fg/70">{suffix}</span> : null}
    </TextFieldLayout>
  );
});
