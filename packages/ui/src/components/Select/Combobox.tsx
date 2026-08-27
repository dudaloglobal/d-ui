import { FloatingPortal } from '@floating-ui/react';
import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { cx } from '../../lib/cx';
import {
  mergeDescribedBy,
  nativeInputClass,
  TextFieldLayout,
  type TextControlSize,
} from '../textControl';
import { ChevronIcon, NativeSelectMirror, SelectListbox } from './SelectListbox';
import {
  findOptionIndex,
  filterSelectItems,
  flattenSelectItems,
  nextEnabledIndex,
  optionText,
  type SelectItem,
} from './selectOptions';
import { scrollOptionIntoView, useSelectOverlay } from './useSelectOverlay';

export type ComboboxSize = TextControlSize;

export type ComboboxProps = {
  options: readonly SelectItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  form?: string;
  placeholder?: string;
  emptyMessage?: ReactNode;
  size?: ComboboxSize;
  label?: ReactNode;
  helper?: ReactNode;
  error?: ReactNode;
  invalid?: boolean;
  valid?: boolean;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
};

export function Combobox({
  options,
  value: valueProp,
  defaultValue,
  onValueChange,
  name,
  form,
  placeholder = 'Rechercher',
  emptyMessage = 'Aucune option',
  size = 'md',
  label,
  helper,
  error,
  invalid = false,
  valid = false,
  disabled = false,
  required,
  fullWidth = true,
  className,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
}: ComboboxProps) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const listId = `${generatedId}-list`;
  const helperId = `${generatedId}-helper`;
  const labelId = label ? `${controlId}-label` : undefined;
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);
  const isControlled = valueProp !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? valueProp : uncontrolled;
  const isInvalid = Boolean(invalid) || Boolean(error);
  const description = isInvalid ? error : helper;
  const allFlat = flattenSelectItems(options);
  const selected = allFlat.find((option) => option.value === value);
  const selectedLabel = selected ? optionText(selected.label) || selected.value : '';
  const displayedItems = useMemo(
    () => (filter == null ? [...options] : filterSelectItems(options, filter)),
    [options, filter],
  );
  const visible = flattenSelectItems(displayedItems);
  const [activeIndex, setActiveIndex] = useState(-1);
  const listLabelledBy = ariaLabelledBy ?? labelId;
  const inputValue = open ? (filter ?? selectedLabel) : selectedLabel;

  const setValue = (next: string) => {
    if (!isControlled) setUncontrolled(next);
    onValueChange?.(next);
    setFilter(null);
    setOpen(false);
  };

  const {
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    portal,
    setReference,
  } = useSelectOverlay(open, (next) => {
    setOpen(next);
    if (!next) setFilter(null);
  });

  useEffect(() => {
    if (!open) {
      setActiveIndex(-1);
      return;
    }
    const current = flattenSelectItems(displayedItems);
    setActiveIndex((index) => {
      if (filter != null) return nextEnabledIndex(current, -1, 1);
      if (index >= 0 && index < current.length && !current[index]?.disabled) return index;
      const selectedIndex = findOptionIndex(current, value);
      return selectedIndex >= 0 && !current[selectedIndex]?.disabled
        ? selectedIndex
        : nextEnabledIndex(current, -1, 1);
    });
  }, [open, value, displayedItems, filter]);

  useLayoutEffect(() => {
    if (!open) return;
    scrollOptionIntoView(listId, activeIndex);
  }, [open, activeIndex, listId]);

  function move(delta: number) {
    setActiveIndex((current) => nextEnabledIndex(visible, current, delta));
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (disabled) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!open) setOpen(true);
      else move(1);
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!open) setOpen(true);
      else move(-1);
      return;
    }
    if (event.key === 'Home' && open) {
      event.preventDefault();
      setActiveIndex(nextEnabledIndex(visible, -1, 1));
      return;
    }
    if (event.key === 'End' && open) {
      event.preventDefault();
      setActiveIndex(nextEnabledIndex(visible, visible.length, -1));
      return;
    }
    if (event.key === 'Enter') {
      if (!open) return;
      event.preventDefault();
      const option = visible[activeIndex];
      if (option && !option.disabled) setValue(option.value);
      return;
    }
    if (event.key === 'Escape') {
      if (open) {
        event.preventDefault();
        setFilter(null);
        setOpen(false);
      }
    }
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setOpen(true);
    setFilter(event.target.value);
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
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
      className={className}
      showCount={false}
      count={0}
      countMessage={() => ''}
      countId={`${generatedId}-count`}
      helperId={helperId}
    >
      <NativeSelectMirror
        name={name}
        form={form}
        required={required}
        disabled={disabled}
        value={value}
        items={options}
      />
      <input
        {...getReferenceProps({
          type: 'text',
          role: 'combobox',
          id: controlId,
          disabled,
          autoComplete: 'off',
          spellCheck: false,
          'aria-haspopup': 'listbox',
          'aria-expanded': open,
          'aria-controls': listId,
          'aria-autocomplete': 'list',
          'aria-activedescendant':
            open && activeIndex >= 0 ? `${listId}-opt-${activeIndex}` : undefined,
          'aria-invalid': isInvalid || undefined,
          'aria-required': required || undefined,
          'aria-label': ariaLabel,
          'aria-labelledby': ariaLabelledBy,
          'aria-describedby': mergeDescribedBy(
            ariaDescribedBy,
            description ? helperId : undefined,
          ),
          className: cx(nativeInputClass, 'w-full'),
          placeholder,
          value: inputValue,
          onChange,
          onKeyDown,
          onClick: () => setOpen(true),
        })}
        ref={setReference}
      />
      <span
        className={cx('ml-2 inline-flex shrink-0 text-fg/70', open && 'rotate-180')}
        aria-hidden="true"
      >
        <ChevronIcon />
      </span>
      {open ? (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            {...portal}
            className={portal.className}
          >
            <SelectListbox
              id={listId}
              labelledBy={listLabelledBy}
              ariaLabel={listLabelledBy ? undefined : ariaLabel}
              items={displayedItems}
              activeIndex={activeIndex}
              selectedValue={value}
              emptyMessage={emptyMessage}
              listRef={() => undefined}
              setActiveIndex={setActiveIndex}
              onSelect={setValue}
            />
          </div>
        </FloatingPortal>
      ) : null}
    </TextFieldLayout>
  );
}
