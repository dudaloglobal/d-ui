import {
  type ReactElement,
  type ReactNode,
  type Ref,
  cloneElement,
  isValidElement,
} from 'react';
import { cx } from '../../lib/cx';
import {
  flattenSelectItems,
  isSelectGroup,
  optionText,
  type FlatOption,
  type SelectItem,
  type SelectOption,
  type SelectOptionGroup,
} from './selectOptions';

export function SelectOptionIcon({ icon }: { icon?: ReactNode }) {
  if (!icon) return null;
  return (
    <span className="inline-flex shrink-0 text-fg/70 [&_svg]:block" aria-hidden="true">
      {isValidElement(icon) ? cloneElement(icon as ReactElement) : icon}
    </span>
  );
}

export type ComboboxListStatus = 'idle' | 'loading' | 'loadingMore' | 'error';

export function SelectListbox({
  id,
  labelId,
  labelledBy,
  ariaLabel,
  items,
  activeIndex,
  selectedValues,
  emptyMessage,
  listRef,
  setActiveIndex,
  onSelect,
  multiple = false,
  listStatus = 'idle',
  listErrorMessage,
  listErrorRetryMessage,
  beforeOptions,
  renderOption,
  renderSectionTitle,
}: {
  id: string;
  labelId?: string;
  labelledBy?: string;
  ariaLabel?: string;
  items: readonly SelectItem[];
  activeIndex: number;
  selectedValues: readonly string[];
  emptyMessage: ReactNode;
  listRef: Ref<HTMLDivElement>;
  setActiveIndex: (index: number) => void;
  onSelect: (value: string) => void;
  multiple?: boolean;
  listStatus?: ComboboxListStatus;
  listErrorMessage?: ReactNode;
  listErrorRetryMessage?: ReactNode;
  beforeOptions?: ReactNode;
  renderOption?: (option: SelectOption, selected: boolean) => ReactNode;
  renderSectionTitle?: (group: SelectOptionGroup) => ReactNode;
}) {
  const flat = flattenSelectItems(items);
  let cursor = -1;
  const loading = listStatus === 'loading';
  const error = listStatus === 'error';
  const showOptions = !loading && !error;

  return (
    <div
      ref={listRef}
      id={id}
      role="listbox"
      tabIndex={-1}
      aria-busy={loading || listStatus === 'loadingMore' || undefined}
      aria-multiselectable={multiple || undefined}
      aria-labelledby={labelledBy ?? labelId}
      aria-label={labelledBy || labelId ? undefined : ariaLabel}
      className="d-ui-listbox max-h-[inherit] overflow-auto rounded-md bg-bg py-1 text-fg"
    >
      {beforeOptions && showOptions ? (
        <div className="border-b border-border py-1">{beforeOptions}</div>
      ) : null}
      {loading ? <ListSkeleton count={4} /> : null}
      {error ? (
        <div className="px-3 py-3 text-sm" role="alert">
          <p className="font-medium text-danger">{listErrorMessage}</p>
          {listErrorRetryMessage ? (
            <p className="mt-1 text-fg/70">{listErrorRetryMessage}</p>
          ) : null}
        </div>
      ) : null}
      {showOptions && flat.length === 0 ? (
        <div className="px-3 py-2 text-sm text-fg/70" role="presentation">
          {emptyMessage}
        </div>
      ) : null}
      {showOptions && flat.length > 0
        ? items.map((item, groupIndex) => {
            if (isSelectGroup(item)) {
              return (
                <div
                  key={`g-${item.label}-${groupIndex}`}
                  role="group"
                  aria-label={item.label}
                >
                  <div className="px-3 py-1 text-xs font-medium text-fg/60">
                    {renderSectionTitle ? renderSectionTitle(item) : item.label}
                  </div>
                  {item.options.map((option) => {
                    cursor += 1;
                    return (
                      <OptionRow
                        key={option.value}
                        id={`${id}-opt-${cursor}`}
                        option={option}
                        index={cursor}
                        active={cursor === activeIndex}
                        selected={selectedValues.includes(option.value)}
                        renderOption={renderOption}
                        onHover={setActiveIndex}
                        onSelect={onSelect}
                      />
                    );
                  })}
                </div>
              );
            }
            cursor += 1;
            return (
              <OptionRow
                key={item.value}
                id={`${id}-opt-${cursor}`}
                option={item}
                index={cursor}
                active={cursor === activeIndex}
                selected={selectedValues.includes(item.value)}
                renderOption={renderOption}
                onHover={setActiveIndex}
                onSelect={onSelect}
              />
            );
          })
        : null}
      {listStatus === 'loadingMore' ? <ListSkeleton count={1} /> : null}
    </div>
  );
}

function ListSkeleton({ count }: { count: number }) {
  return (
    <div className="flex flex-col gap-2 px-3 py-2" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="h-4 animate-pulse rounded bg-fg/15" />
      ))}
    </div>
  );
}

function OptionRow({
  id,
  option,
  index,
  active,
  selected,
  renderOption,
  onHover,
  onSelect,
}: {
  id: string;
  option: FlatOption;
  index: number;
  active: boolean;
  selected: boolean;
  renderOption?: (option: SelectOption, selected: boolean) => ReactNode;
  onHover: (index: number) => void;
  onSelect: (value: string) => void;
}) {
  return (
    <div
      id={id}
      role="option"
      tabIndex={-1}
      aria-selected={selected}
      aria-disabled={option.disabled || undefined}
      data-active={active ? '' : undefined}
      className={cx(
        'd-ui-option flex cursor-pointer items-center gap-2 px-3 py-2 text-sm',
        option.disabled && 'pointer-events-none opacity-50',
        active && !option.disabled && 'bg-surface-hover',
        selected && 'font-medium',
      )}
      onMouseMove={() => {
        if (!option.disabled) onHover(index);
      }}
      onPointerDown={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onKeyDown={(event) => event.preventDefault()}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!option.disabled) onSelect(option.value);
      }}
    >
      <span className="min-w-0 flex-1">
        {renderOption ? (
          renderOption(option, selected)
        ) : (
          <span className="flex min-w-0 items-center gap-2">
            <SelectOptionIcon icon={option.icon} />
            <span className="min-w-0 flex-1">
              <span className="block truncate">{option.label}</span>
              {option.description ? (
                <span className="mt-0.5 block truncate text-xs font-normal text-fg/60">
                  {option.description}
                </span>
              ) : null}
            </span>
          </span>
        )}
      </span>
      {selected ? (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M3.5 8.5l3 3 6-7"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </div>
  );
}

export function NativeSelectMirror({
  name,
  form,
  required,
  disabled,
  value,
  items,
  multiple = false,
}: {
  name?: string;
  form?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string | readonly string[];
  items: readonly SelectItem[];
  multiple?: boolean;
}) {
  if (!name) return null;
  const values = typeof value === 'string' ? (value ? [value] : []) : [...(value ?? [])];
  return (
    <select
      className="d-ui-visually-hidden"
      tabIndex={-1}
      aria-hidden="true"
      name={name}
      form={form}
      required={required}
      disabled={disabled}
      multiple={multiple || undefined}
      value={multiple ? values : (values[0] ?? '')}
      onChange={() => undefined}
    >
      {multiple ? null : <option value="" />}
      {items.map((item, index) => {
        if (isSelectGroup(item)) {
          return (
            <optgroup key={`${item.label}-${index}`} label={item.label}>
              {item.options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {optionText(option.label) || option.value}
                </option>
              ))}
            </optgroup>
          );
        }
        return (
          <option key={item.value} value={item.value} disabled={item.disabled}>
            {optionText(item.label) || item.value}
          </option>
        );
      })}
    </select>
  );
}

export function ChevronIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
