import { FloatingPortal } from '@floating-ui/react';
import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
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
import {
  ChevronIcon,
  NativeSelectMirror,
  SelectListbox,
  SelectOptionIcon,
} from './SelectListbox';
import {
  findOptionIndex,
  flattenSelectItems,
  matchTypeahead,
  nextEnabledIndex,
  type SelectItem,
} from './selectOptions';
import {
  closeSelectOverlay,
  scrollOptionIntoView,
  useSelectOverlay,
} from './useSelectOverlay';

export type { SelectItem, SelectOption, SelectOptionGroup } from './selectOptions';

export type SelectSize = TextControlSize;

export type SelectProps = {
  options: readonly SelectItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  form?: string;
  placeholder?: string;
  emptyMessage?: ReactNode;
  size?: SelectSize;
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

export function Select({
  options,
  value: valueProp,
  defaultValue,
  onValueChange,
  name,
  form,
  placeholder = 'Choisir',
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
}: SelectProps) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const listId = `${generatedId}-list`;
  const helperId = `${generatedId}-helper`;
  const labelId = label ? `${controlId}-label` : undefined;
  const typeaheadRef = useRef('');
  const typeaheadTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const isControlled = valueProp !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? valueProp : uncontrolled;
  const isInvalid = Boolean(invalid) || Boolean(error);
  const description = isInvalid ? error : helper;
  const flat = flattenSelectItems(options);
  const selected = flat.find((option) => option.value === value);
  const [activeIndex, setActiveIndex] = useState(-1);
  const listLabelledBy = ariaLabelledBy ?? labelId;

  const setValue = (next: string) => {
    if (!isControlled) setUncontrolled(next);
    onValueChange?.(next);
    closeSelectOverlay(() => setOpen(false));
  };

  const {
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    portal,
    setReference,
  } = useSelectOverlay(open, setOpen);

  useEffect(() => {
    return () => window.clearTimeout(typeaheadTimer.current);
  }, []);

  useEffect(() => {
    if (!open) {
      setActiveIndex(-1);
      return;
    }
    const current = flattenSelectItems(options);
    setActiveIndex((index) => {
      if (index >= 0 && index < current.length && !current[index]?.disabled) return index;
      const selectedIndex = findOptionIndex(current, value);
      return selectedIndex >= 0 && !current[selectedIndex]?.disabled
        ? selectedIndex
        : nextEnabledIndex(current, -1, 1);
    });
  }, [open, value, options]);

  useLayoutEffect(() => {
    if (!open) return;
    scrollOptionIntoView(listId, activeIndex);
  }, [open, activeIndex, listId]);

  function move(delta: number) {
    setActiveIndex((current) => nextEnabledIndex(flat, current, delta));
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
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
    if (event.key === 'Home') {
      event.preventDefault();
      if (!open) setOpen(true);
      setActiveIndex(nextEnabledIndex(flat, -1, 1));
      return;
    }
    if (event.key === 'End') {
      event.preventDefault();
      if (!open) setOpen(true);
      setActiveIndex(nextEnabledIndex(flat, flat.length, -1));
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      const option = flat[activeIndex];
      if (option && !option.disabled) setValue(option.value);
      return;
    }
    if (event.key === 'Escape') {
      if (open) {
        event.preventDefault();
        setOpen(false);
      }
      return;
    }
    if (event.key.length === 1 && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      if (!open) setOpen(true);
      typeaheadRef.current += event.key;
      window.clearTimeout(typeaheadTimer.current);
      typeaheadTimer.current = setTimeout(() => {
        typeaheadRef.current = '';
      }, 500);
      const next = matchTypeahead(flat, typeaheadRef.current, activeIndex);
      if (next >= 0) setActiveIndex(next);
    }
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
      frameRef={setReference}
    >
      <NativeSelectMirror
        name={name}
        form={form}
        required={required}
        disabled={disabled}
        value={value}
        items={options}
      />
      <button
        {...getReferenceProps({
          type: 'button',
          role: 'combobox',
          id: controlId,
          disabled,
          'aria-haspopup': 'listbox',
          'aria-expanded': open,
          'aria-controls': listId,
          'aria-autocomplete': 'none',
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
          className: cx(
            nativeInputClass,
            'flex w-full cursor-pointer items-center justify-between text-left',
            !selected && 'text-fg/60',
          ),
          onClick: () => setOpen((next) => !next),
          onKeyDown,
        })}
      >
        <span className="flex min-w-0 flex-1 items-center gap-2">
          {selected ? <SelectOptionIcon icon={selected.icon} /> : null}
          <span className="min-w-0 flex-1 truncate">
            {selected ? selected.label : placeholder}
          </span>
        </span>
        <span
          className={cx('ml-2 inline-flex shrink-0 text-fg/70', open && 'rotate-180')}
        >
          <ChevronIcon />
        </span>
      </button>
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
              items={options}
              activeIndex={activeIndex}
              selectedValues={value ? [value] : []}
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
