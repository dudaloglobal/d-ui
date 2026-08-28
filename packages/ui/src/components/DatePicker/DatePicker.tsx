import { useEffect, useId, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Calendar } from '../Calendar/Calendar';
import {
  calendarDateToIso,
  isCalendarDateUnavailable,
  isCalendarRangeValue,
  type CalendarDate,
} from '../Calendar/calendarDate';
import { useFieldControl } from '../Field/useFieldControl';
import { Popover } from '../Popover/Popover';
import { TextInput, type TextInputSize } from '../TextInput/TextInput';
import { formatCalendarDate, parseCalendarDate } from './parse';
import { CalendarGlyph, PickerButton, pickerPanelClass } from './pickerChrome';

export type DatePickerSize = TextInputSize;

export type DatePickerProps = {
  size?: DatePickerSize;
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
  value?: CalendarDate | null;
  defaultValue?: CalendarDate | null;
  onValueChange?: (value: CalendarDate | null) => void;
  minValue?: CalendarDate;
  maxValue?: CalendarDate;
  isDateUnavailable?: (date: CalendarDate) => boolean;
  today?: CalendarDate;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  openCalendarLabel?: string;
  clearLabel?: string;
  invalidMessage?: string;
  className?: string;
};

/**
 * Champ date : saisie au clavier + Calendar dans un Popover.
 *
 * Valeur civile `{ year, month, day }`, pas de fuseau.
 */
export function DatePicker({
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
  clearLabel = 'Effacer',
  invalidMessage = 'Date invalide.',
  className,
}: DatePickerProps) {
  const field = useFieldControl();
  const generatedId = useId();
  const inputId = field.id ?? generatedId;
  const isDisabled = Boolean(disabled || field.disabled);
  const [uncontrolled, setUncontrolled] = useState<CalendarDate | null>(defaultValue);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [typed, setTyped] = useState(() =>
    formatOrEmpty(valueProp ?? defaultValue, locale),
  );
  const [parseInvalid, setParseInvalid] = useState(false);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolled;
  const open = isDisabled ? false : (openProp ?? uncontrolledOpen);

  useEffect(() => {
    if (isControlled) setTyped(formatOrEmpty(valueProp, locale));
  }, [isControlled, valueProp, locale]);

  function setOpen(next: boolean) {
    if (isDisabled && next) return;
    if (openProp === undefined) setUncontrolledOpen(next);
    onOpenChange?.(next);
  }

  function commit(next: CalendarDate | null, text = formatOrEmpty(next, locale)) {
    if (!isControlled) setUncontrolled(next);
    setTyped(text);
    setParseInvalid(false);
    onValueChange?.(next);
  }

  function applyTyped() {
    const parsed = parseCalendarDate(typed, locale);
    if (parsed === undefined) {
      setParseInvalid(true);
      return;
    }
    if (
      parsed &&
      isCalendarDateUnavailable(parsed, { minValue, maxValue, isDateUnavailable })
    ) {
      setParseInvalid(true);
      return;
    }
    commit(parsed);
  }

  const isInvalid = Boolean(invalid || field['aria-invalid'] || parseInvalid || error);
  const resolvedPlaceholder =
    placeholder ?? (locale.toLowerCase().startsWith('en') ? 'MM/DD/YYYY' : 'JJ/MM/AAAA');
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
        <input type="hidden" name={name} value={value ? calendarDateToIso(value) : ''} />
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
            aria-label={openCalendarLabel}
            className={pickerPanelClass}
            content={
              <Calendar
                size={size === 'lg' ? 'md' : 'sm'}
                locale={locale}
                today={today}
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                isDateUnavailable={isDateUnavailable}
                disabled={isDisabled}
                onValueChange={(next) => {
                  if (isCalendarRangeValue(next)) return;
                  commit(next);
                  setOpen(false);
                }}
              />
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

function formatOrEmpty(value: CalendarDate | null | undefined, locale: string): string {
  return value ? formatCalendarDate(value, locale) : '';
}
