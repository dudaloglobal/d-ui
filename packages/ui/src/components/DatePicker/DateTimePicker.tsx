import { useEffect, useId, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Calendar } from '../Calendar/Calendar';
import {
  isCalendarRangeValue,
  todayCalendarDate,
  type CalendarDate,
} from '../Calendar/calendarDate';
import { useFieldControl } from '../Field/useFieldControl';
import { Popover } from '../Popover/Popover';
import { TextInput, type TextInputSize } from '../TextInput/TextInput';
import {
  dateTimeToIso,
  formatDateTime,
  isDateTimeUnavailable,
  parseDateTime,
  type ClockTime,
  type DateTimeValue,
} from './parse';
import { CalendarGlyph, PickerButton, pickerPanelClass } from './pickerChrome';
import { TimeSpinner } from './TimeSpinner';

export type DateTimePickerSize = TextInputSize;
export type { DateTimeValue };

export type DateTimePickerProps = {
  size?: DateTimePickerSize;
  label?: ReactNode;
  helper?: ReactNode;
  error?: ReactNode;
  invalid?: boolean;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  clearable?: boolean;
  name?: string;
  locale?: string;
  placeholder?: string;
  value?: DateTimeValue | null;
  defaultValue?: DateTimeValue | null;
  onValueChange?: (value: DateTimeValue | null) => void;
  minValue?: DateTimeValue;
  maxValue?: DateTimeValue;
  isDateUnavailable?: (date: CalendarDate) => boolean;
  today?: CalendarDate;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  openCalendarLabel?: string;
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

const midnight: ClockTime = { hour: 0, minute: 0 };

/**
 * Date et heure civiles : saisie + Calendar et spinbuttons dans un Popover.
 */
export function DateTimePicker({
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
  locale = 'fr',
  placeholder,
  value: valueProp,
  defaultValue = null,
  onValueChange,
  minValue,
  maxValue,
  isDateUnavailable,
  today,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  openCalendarLabel = 'Ouvrir le calendrier',
  hourLabel = 'Heure',
  minuteLabel = 'Minutes',
  incrementHourLabel = 'Augmenter l’heure',
  decrementHourLabel = 'Diminuer l’heure',
  incrementMinuteLabel = 'Augmenter les minutes',
  decrementMinuteLabel = 'Diminuer les minutes',
  clearLabel = 'Effacer',
  invalidMessage = 'Date ou heure invalide.',
  className,
}: DateTimePickerProps) {
  const field = useFieldControl();
  const generatedId = useId();
  const inputId = field.id ?? generatedId;
  const isDisabled = Boolean(disabled || field.disabled);
  const [uncontrolled, setUncontrolled] = useState<DateTimeValue | null>(defaultValue);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [typed, setTyped] = useState(() =>
    formatOrEmpty(valueProp ?? defaultValue, locale),
  );
  const [parseInvalid, setParseInvalid] = useState(false);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolled;
  const open = isDisabled ? false : (openProp ?? uncontrolledOpen);
  const spinner = value?.time ?? midnight;

  useEffect(() => {
    if (isControlled) setTyped(formatOrEmpty(valueProp, locale));
  }, [isControlled, valueProp, locale]);

  function setOpen(next: boolean) {
    if (isDisabled && next) return;
    if (openProp === undefined) setUncontrolledOpen(next);
    onOpenChange?.(next);
  }

  function commit(next: DateTimeValue | null, text = formatOrEmpty(next, locale)) {
    if (!isControlled) setUncontrolled(next);
    setTyped(text);
    setParseInvalid(false);
    onValueChange?.(next);
  }

  function applyTyped() {
    const parsed = parseDateTime(typed, locale);
    if (parsed === undefined) {
      setParseInvalid(true);
      return;
    }
    if (
      parsed &&
      isDateTimeUnavailable(parsed, { minValue, maxValue, isDateUnavailable })
    ) {
      setParseInvalid(true);
      return;
    }
    commit(parsed);
  }

  const isInvalid = Boolean(invalid || field['aria-invalid'] || parseInvalid || error);
  const resolvedPlaceholder =
    placeholder ??
    (locale.toLowerCase().startsWith('en') ? 'MM/DD/YYYY HH:mm' : 'JJ/MM/AAAA HH:mm');
  const resolvedError = parseInvalid ? (error ?? invalidMessage) : error;

  function handleInputKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown' && event.altKey) {
      event.preventDefault();
      setOpen(true);
    }
  }

  function commitDate(date: CalendarDate) {
    commit({ date, time: value?.time ?? midnight });
  }

  function commitTime(time: ClockTime) {
    if (!value) {
      commit({ date: today ?? todayCalendarDate(), time });
      return;
    }
    commit({ date: value.date, time });
  }

  return (
    <>
      {name ? (
        <input type="hidden" name={name} value={value ? dateTimeToIso(value) : ''} />
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
        placeholder={resolvedPlaceholder}
        autoComplete="off"
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
            aria-label={openCalendarLabel}
            className={pickerPanelClass}
            content={
              <div className="flex flex-col gap-3">
                <Calendar
                  size="sm"
                  locale={locale}
                  today={today}
                  value={value?.date ?? null}
                  minValue={minValue?.date}
                  maxValue={maxValue?.date}
                  isDateUnavailable={isDateUnavailable}
                  disabled={isDisabled}
                  onValueChange={(next) => {
                    if (isCalendarRangeValue(next)) return;
                    commitDate(next);
                  }}
                />
                <div className="flex items-center justify-center gap-3 border-t border-border pt-3">
                  <TimeSpinner
                    label={hourLabel}
                    incrementLabel={incrementHourLabel}
                    decrementLabel={decrementHourLabel}
                    value={spinner.hour}
                    min={0}
                    max={23}
                    disabled={isDisabled}
                    onChange={(hour) => commitTime({ hour, minute: spinner.minute })}
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
                    onChange={(minute) => commitTime({ hour: spinner.hour, minute })}
                  />
                </div>
              </div>
            }
          >
            <PickerButton label={openCalendarLabel} disabled={isDisabled}>
              <CalendarGlyph />
            </PickerButton>
          </Popover>
        }
      />
    </>
  );
}

function formatOrEmpty(value: DateTimeValue | null | undefined, locale: string): string {
  return value ? formatDateTime(value, locale) : '';
}
