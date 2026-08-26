import type { ChangeEvent, ReactNode, TextareaHTMLAttributes } from 'react';
import { forwardRef, useId, useState } from 'react';
import {
  ChromeButton,
  ClearIcon,
  StatusIcon,
  TextFieldLayout,
  defaultCountMessage,
  mergeDescribedBy,
  nativeInputClass,
  stringifyValue,
  type TextControlSize,
} from './textControl';

export type TextareaSize = TextControlSize;

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'prefix' | 'size'
> & {
  size?: TextareaSize;
  label?: ReactNode;
  helper?: ReactNode;
  error?: ReactNode;
  /** Maps to `aria-invalid`. Prefer this name so it matches Field (`invalid`). */
  invalid?: boolean;
  valid?: boolean;
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  fullWidth?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  clearLabel?: string;
  showCount?: boolean;
  countMessage?: (count: number, maxLength?: number) => string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  {
    id,
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
    className,
    disabled,
    readOnly,
    required,
    value,
    defaultValue,
    onChange,
    maxLength,
    rows = 3,
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedBy,
    ...rest
  }: TextareaProps,
  ref,
) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const countId = `${generatedId}-count`;
  const helperId = `${generatedId}-helper`;
  const isControlled = value !== undefined;
  const [uncontrolled, setUncontrolled] = useState(() => stringifyValue(defaultValue));
  const current = isControlled ? stringifyValue(value) : uncontrolled;
  const isInvalid =
    Boolean(invalid) || Boolean(error) || ariaInvalid === true || ariaInvalid === 'true';
  const showClear = clearable && current.length > 0 && !disabled && !readOnly;
  const displayCount = showCount ?? maxLength != null;
  const description = isInvalid ? error : helper;

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (!isControlled) setUncontrolled(event.target.value);
    onChange?.(event);
  }

  function handleClear() {
    if (!isControlled) setUncontrolled('');
    onClear?.();
    onChange?.({
      target: { value: '', name: rest.name },
      currentTarget: { value: '', name: rest.name },
    } as ChangeEvent<HTMLTextAreaElement>);
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
      multiline
    >
      {icon ? (
        <span className="inline-flex shrink-0 pt-0.5 text-fg/70">{icon}</span>
      ) : null}
      {prefix ? (
        <span className="inline-flex shrink-0 pt-0.5 text-fg/70">{prefix}</span>
      ) : null}
      <textarea
        {...rest}
        ref={ref}
        id={controlId}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        value={current}
        maxLength={maxLength}
        rows={rows}
        aria-invalid={isInvalid || undefined}
        aria-describedby={mergeDescribedBy(
          ariaDescribedBy,
          displayCount && countId,
          description ? helperId : undefined,
        )}
        onChange={handleChange}
        className={`${nativeInputClass} resize-y`}
      />
      {showClear ? (
        <ChromeButton label={clearLabel} disabled={disabled} onClick={handleClear}>
          <ClearIcon />
        </ChromeButton>
      ) : null}
      <StatusIcon invalid={isInvalid} valid={valid} />
      {suffix ? (
        <span className="inline-flex shrink-0 pt-0.5 text-fg/70">{suffix}</span>
      ) : null}
    </TextFieldLayout>
  );
});
