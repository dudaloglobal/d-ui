import { useEffect, useId, useState, type KeyboardEvent, type ReactNode } from 'react';
import { useFieldControl } from '../Field/useFieldControl';
import { Popover } from '../Popover/Popover';
import { TextInput, type TextInputSize } from '../TextInput/TextInput';
import {
  formatClockTime,
  isClockTimeUnavailable,
  parseClockTime,
  type ClockTime,
} from './parse';
import { ClockGlyph, PickerButton, pickerPanelClass } from './pickerChrome';
import { TimeSpinner } from './TimeSpinner';

export type TimePickerSize = TextInputSize;
export type { ClockTime };

export type TimePickerProps = {
  size?: TimePickerSize;
  label?: ReactNode;
  helper?: ReactNode;
  error?: ReactNode;
  invalid?: boolean;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  clearable?: boolean;
  name?: string;
  placeholder?: string;
  value?: ClockTime | null;
  defaultValue?: ClockTime | null;
  onValueChange?: (value: ClockTime | null) => void;
  minValue?: ClockTime;
  maxValue?: ClockTime;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  openTimeLabel?: string;
  hourLabel?: string;
  minuteLabel?: string;
  incrementHourLabel?: string;
  decrementHourLabel?: string;
  incrementMinuteLabel?: string;
  decrementMinuteLabel?: string;
  clearLabel?: string;
  invalidMessage?: string;
  className?: string;
};

/**
 * Champ heure : saisie `HH:mm` + spinbuttons accessibles dans un Popover.
 */
export function TimePicker({
  size = 'md',
  label,
  helper,
  error,
  invalid = false,
  disabled = false,
  required = false,
  fullWidth = true,
  clearable = true,
  name,
  placeholder = 'HH:mm',
  value: valueProp,
  defaultValue = null,
  onValueChange,
  minValue,
  maxValue,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  openTimeLabel = 'Ouvrir le sélecteur d’heure',
  hourLabel = 'Heure',
  minuteLabel = 'Minutes',
  incrementHourLabel = 'Augmenter l’heure',
  decrementHourLabel = 'Diminuer l’heure',
  incrementMinuteLabel = 'Augmenter les minutes',
  decrementMinuteLabel = 'Diminuer les minutes',
  clearLabel = 'Effacer',
  invalidMessage = 'Heure invalide.',
  className,
}: TimePickerProps) {
  const field = useFieldControl();
  const generatedId = useId();
  const inputId = field.id ?? generatedId;
  const isDisabled = Boolean(disabled || field.disabled);
  const [uncontrolled, setUncontrolled] = useState<ClockTime | null>(defaultValue);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [typed, setTyped] = useState(() => formatOrEmpty(valueProp ?? defaultValue));
  const [parseInvalid, setParseInvalid] = useState(false);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolled;
  const open = isDisabled ? false : (openProp ?? uncontrolledOpen);
  const spinner = value ?? { hour: 0, minute: 0 };

  useEffect(() => {
    if (isControlled) setTyped(formatOrEmpty(valueProp));
  }, [isControlled, valueProp]);

  function setOpen(next: boolean) {
    if (isDisabled && next) return;
    if (openProp === undefined) setUncontrolledOpen(next);
    onOpenChange?.(next);
  }

  function commit(next: ClockTime | null, text = formatOrEmpty(next)) {
    if (!isControlled) setUncontrolled(next);
    setTyped(text);
    setParseInvalid(false);
    onValueChange?.(next);
  }

  function applyTyped() {
    const parsed = parseClockTime(typed);
    if (parsed === undefined) {
      setParseInvalid(true);
      return;
    }
    if (parsed && isClockTimeUnavailable(parsed, { minValue, maxValue })) {
      setParseInvalid(true);
      return;
    }
    commit(parsed);
  }

  const isInvalid = Boolean(invalid || field['aria-invalid'] || parseInvalid || error);
  const resolvedError = parseInvalid ? (error ?? invalidMessage) : error;

  function handleInputKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown' && event.altKey) {
      event.preventDefault();
      setOpen(true);
    }
  }

  return (
    <>
      {name ? (
        <input type="hidden" name={name} value={value ? formatClockTime(value) : ''} />
      ) : null}
      <TextInput
        id={inputId}
        size={size}
        label={label}
        helper={helper}
        error={resolvedError}
        invalid={isInvalid}
        disabled={isDisabled}
        required={field.required ?? required}
        fullWidth={fullWidth}
        clearable={clearable}
        clearLabel={clearLabel}
        placeholder={placeholder}
        autoComplete="off"
        inputMode="numeric"
        value={typed}
        className={className}
        onChange={(event) => {
          setTyped(event.target.value);
          setParseInvalid(false);
        }}
        onBlur={(event) => {
          const next = event.relatedTarget;
          if (next instanceof HTMLElement && next.getAttribute('aria-haspopup')) {
            return;
          }
          applyTyped();
        }}
        onKeyDown={handleInputKey}
        onClear={() => commit(null)}
        suffix={
          <Popover
            open={open}
            onOpenChange={setOpen}
            trapFocus
            unstyled
            arrow={false}
            placement="bottom-start"
            disabled={isDisabled}
            aria-label={openTimeLabel}
            className={pickerPanelClass}
            content={
              <div className="flex items-center gap-3 px-2">
                <TimeSpinner
                  label={hourLabel}
                  incrementLabel={incrementHourLabel}
                  decrementLabel={decrementHourLabel}
                  value={spinner.hour}
                  min={0}
                  max={23}
                  disabled={isDisabled}
                  onChange={(hour) => commit({ hour, minute: spinner.minute })}
                />
                <span aria-hidden className="text-lg font-medium">
                  :
                </span>
                <TimeSpinner
                  label={minuteLabel}
                  incrementLabel={incrementMinuteLabel}
                  decrementLabel={decrementMinuteLabel}
                  value={spinner.minute}
                  min={0}
                  max={59}
                  disabled={isDisabled}
                  onChange={(minute) => commit({ hour: spinner.hour, minute })}
                />
              </div>
            }
          >
            <PickerButton label={openTimeLabel} disabled={isDisabled}>
              <ClockGlyph />
            </PickerButton>
          </Popover>
        }
      />
    </>
  );
}

function formatOrEmpty(value: ClockTime | null | undefined): string {
  return value ? formatClockTime(value) : '';
}
