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
  ChromeButton,
  ClearIcon,
  mergeDescribedBy,
  nativeInputClass,
  StatusIcon,
  TextFieldLayout,
  type TextControlSize,
} from '../textControl';
import {
  ChevronIcon,
  NativeSelectMirror,
  SelectListbox,
  SelectOptionIcon,
  type ComboboxListStatus,
} from './SelectListbox';
import {
  asSelectValues,
  findOptionIndex,
  filterSelectItems,
  flattenSelectItems,
  nextEnabledIndex,
  optionText,
  type SelectItem,
  type SelectOption,
  type SelectOptionGroup,
} from './selectOptions';
import {
  closeSelectOverlay,
  scrollOptionIntoView,
  useSelectOverlay,
} from './useSelectOverlay';

export type ComboboxSize = TextControlSize;
export type { ComboboxListStatus };
export type ComboboxFilter = 'auto' | 'manual' | 'off';

export type ComboboxProps = {
  options: readonly SelectItem[];
  value?: string | readonly string[];
  defaultValue?: string | readonly string[];
  onValueChange?: (value: string | string[]) => void;
  multiple?: boolean;
  name?: string;
  form?: string;
  placeholder?: string;
  emptyMessage?: ReactNode | ((query: string) => ReactNode);
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
  clearable?: boolean;
  clearLabel?: string;
  toggleLabel?: string;
  chipGroupLabel?: string;
  chipRemoveLabel?: string;
  defaultOpen?: boolean;
  openOnFocus?: boolean;
  filter?: ComboboxFilter;
  onSearch?: (query: string) => void;
  listStatus?: ComboboxListStatus;
  loadingMessage?: string;
  listErrorMessage?: ReactNode;
  listErrorRetryMessage?: ReactNode;
  beforeOptions?: ReactNode;
  renderOption?: (option: SelectOption, selected: boolean) => ReactNode;
  renderSectionTitle?: (group: SelectOptionGroup) => ReactNode;
  renderChip?: (option: SelectOption) => ReactNode;
  icon?: ReactNode;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
};

export function Combobox({
  options,
  value: valueProp,
  defaultValue,
  onValueChange,
  multiple = false,
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
  clearable = true,
  clearLabel = 'Effacer',
  toggleLabel = 'Afficher les suggestions',
  chipGroupLabel,
  chipRemoveLabel = 'Retirer',
  defaultOpen = false,
  openOnFocus = false,
  filter = 'auto',
  onSearch,
  listStatus = 'idle',
  loadingMessage = 'Chargement',
  listErrorMessage = 'Impossible de charger les options',
  listErrorRetryMessage,
  beforeOptions,
  renderOption,
  renderSectionTitle,
  renderChip,
  icon,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
}: ComboboxProps) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const listId = `${generatedId}-list`;
  const helperId = `${generatedId}-helper`;
  const labelId = label ? `${controlId}-label` : undefined;
  const liveId = `${generatedId}-live`;
  const [open, setOpen] = useState(defaultOpen);
  const [filterText, setFilterText] = useState<string | null>(null);
  const isControlled = valueProp !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const rawValue = isControlled ? valueProp : uncontrolled;
  const values = asSelectValues(rawValue);
  const valuesKey = values.join('\0');
  const isInvalid = Boolean(invalid) || Boolean(error);
  const description = isInvalid ? error : helper;
  const allFlat = flattenSelectItems(options);
  const selectedOptions = values
    .map((item) => allFlat.find((option) => option.value === item))
    .filter((option): option is NonNullable<typeof option> => Boolean(option));
  const selectedLabel =
    optionText(selectedOptions[0]?.label) || selectedOptions[0]?.value || '';
  const readOnly = filter === 'off';
  const displayedItems = useMemo(() => {
    if (filter !== 'auto' || filterText == null) return [...options];
    return filterSelectItems(options, filterText);
  }, [options, filter, filterText]);
  const visible = flattenSelectItems(displayedItems);
  const [activeIndex, setActiveIndex] = useState(-1);
  const listLabelledBy = ariaLabelledBy ?? labelId;
  const inputValue = multiple
    ? (filterText ?? '')
    : open
      ? (filterText ?? selectedLabel)
      : selectedLabel;
  const showClear = Boolean(clearable && !multiple && values.length > 0 && !disabled);
  const chipsLabel = chipGroupLabel ?? (typeof label === 'string' ? label : 'Sélection');

  const emit = (next: string[]) => {
    if (!isControlled) setUncontrolled(multiple ? next : (next[0] ?? ''));
    onValueChange?.(multiple ? next : (next[0] ?? ''));
  };

  const setSingle = (next: string | undefined) => {
    emit(next ? [next] : []);
    setFilterText(null);
    closeSelectOverlay(() => setOpen(false));
  };

  const toggleValue = (next: string) => {
    const following = values.includes(next)
      ? values.filter((item) => item !== next)
      : [...values, next];
    emit(following);
    setFilterText('');
    onSearch?.('');
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
    if (!next) setFilterText(null);
  });

  useEffect(() => {
    if (!open) {
      setActiveIndex(-1);
      return;
    }
    const current = flattenSelectItems(displayedItems);
    const selected = valuesKey.split('\0')[0];
    setActiveIndex((index) => {
      if (filterText != null) return nextEnabledIndex(current, -1, 1);
      if (index >= 0 && index < current.length && !current[index]?.disabled) return index;
      const selectedIndex = findOptionIndex(current, selected);
      return selectedIndex >= 0 && !current[selectedIndex]?.disabled
        ? selectedIndex
        : nextEnabledIndex(current, -1, 1);
    });
  }, [open, valuesKey, displayedItems, filterText]);

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
      if (option && !option.disabled) {
        if (multiple) toggleValue(option.value);
        else setSingle(option.value);
      }
      return;
    }
    if (event.key === 'Escape') {
      if (open) {
        event.preventDefault();
        setFilterText(null);
        setOpen(false);
      }
    }
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setOpen(true);
    setFilterText(query);
    onSearch?.(query);
  }

  const chips =
    multiple && selectedOptions.length > 0 ? (
      <div
        role="list"
        aria-label={chipsLabel}
        className="flex flex-wrap items-center gap-1.5"
      >
        {selectedOptions.map((option) => {
          const name = optionText(option.label) || option.value;
          return (
            <span
              key={option.value}
              role="listitem"
              className="inline-flex max-w-full items-center gap-1 rounded-full bg-surface-muted px-2 py-0.5 text-sm text-fg"
            >
              <span className="inline-flex min-w-0 items-center gap-1.5">
                {renderChip ? (
                  renderChip(option)
                ) : (
                  <>
                    <SelectOptionIcon icon={option.icon} />
                    <span className="min-w-0 truncate">{option.label}</span>
                  </>
                )}
              </span>
              <button
                type="button"
                aria-label={`${name} — ${chipRemoveLabel}`}
                disabled={disabled}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => toggleValue(option.value)}
                className={cx(
                  'inline-flex size-4 shrink-0 items-center justify-center rounded-full text-fg/70',
                  'hover:bg-surface-hover hover:text-fg',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
                  'disabled:pointer-events-none disabled:opacity-50',
                )}
              >
                <ClearIcon />
              </button>
            </span>
          );
        })}
      </div>
    ) : null;

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
        value={multiple ? values : values[0]}
        items={options}
        multiple={multiple}
      />
      <div className="d-ui-visually-hidden" aria-live="polite" id={liveId}>
        {listStatus === 'loading' || listStatus === 'loadingMore' ? loadingMessage : null}
      </div>
      {icon ? (
        <span className="inline-flex shrink-0 text-fg/70" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <div
        className={cx(
          'flex min-w-0 flex-1 flex-wrap items-center gap-1.5',
          chips && 'py-1',
        )}
      >
        {chips}
        {!multiple && filterText == null && selectedOptions[0]?.icon ? (
          <SelectOptionIcon icon={selectedOptions[0].icon} />
        ) : null}
        <input
          {...getReferenceProps({
            type: 'text',
            role: 'combobox',
            id: controlId,
            disabled,
            readOnly,
            autoComplete: 'off',
            spellCheck: false,
            'aria-haspopup': 'listbox',
            'aria-expanded': open,
            'aria-controls': listId,
            'aria-autocomplete': filter === 'off' ? 'none' : 'list',
            'aria-activedescendant':
              open && activeIndex >= 0 ? `${listId}-opt-${activeIndex}` : undefined,
            'aria-invalid': isInvalid || undefined,
            'aria-required': required || undefined,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledBy,
            'aria-describedby': mergeDescribedBy(
              ariaDescribedBy,
              description ? helperId : undefined,
              listStatus === 'loading' || listStatus === 'loadingMore'
                ? liveId
                : undefined,
            ),
            className: cx(nativeInputClass, 'min-w-[6rem] flex-1'),
            placeholder,
            value: inputValue,
            onChange: readOnly ? undefined : onChange,
            onKeyDown,
            onClick: () => setOpen(true),
            onFocus: () => {
              if (openOnFocus && !disabled) setOpen(true);
            },
          })}
        />
      </div>
      {showClear ? (
        <ChromeButton
          label={clearLabel}
          disabled={disabled}
          onClick={() => setSingle(undefined)}
        >
          <ClearIcon />
        </ChromeButton>
      ) : null}
      <StatusIcon invalid={isInvalid} valid={valid} />
      {toggleLabel ? (
        <button
          type="button"
          tabIndex={-1}
          disabled={disabled}
          aria-label={toggleLabel}
          aria-expanded={open}
          aria-controls={listId}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setOpen((next) => !next)}
          className={cx(
            'inline-flex size-6 shrink-0 items-center justify-center rounded-md text-fg/70',
            'hover:bg-surface-muted hover:text-fg',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
            'disabled:pointer-events-none disabled:opacity-50',
          )}
        >
          <span className={cx('inline-flex', open && 'rotate-180')}>
            <ChevronIcon />
          </span>
        </button>
      ) : null}
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
              selectedValues={values}
              emptyMessage={
                typeof emptyMessage === 'function'
                  ? emptyMessage(filterText ?? '')
                  : emptyMessage
              }
              listRef={() => undefined}
              setActiveIndex={setActiveIndex}
              onSelect={multiple ? toggleValue : setSingle}
              multiple={multiple}
              listStatus={listStatus}
              listErrorMessage={listErrorMessage}
              listErrorRetryMessage={listErrorRetryMessage}
              beforeOptions={beforeOptions}
              renderOption={renderOption}
              renderSectionTitle={renderSectionTitle}
            />
          </div>
        </FloatingPortal>
      ) : null}
    </TextFieldLayout>
  );
}
