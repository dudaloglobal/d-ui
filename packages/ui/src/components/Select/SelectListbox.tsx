import { type ReactNode, type Ref } from 'react';
import { cx } from '../../lib/cx';
import {
  flattenSelectItems,
  isSelectGroup,
  optionText,
  type FlatOption,
  type SelectItem,
} from './selectOptions';

export function SelectListbox({
  id,
  labelId,
  labelledBy,
  ariaLabel,
  items,
  activeIndex,
  selectedValue,
  emptyMessage,
  listRef,
  setActiveIndex,
  onSelect,
}: {
  id: string;
  labelId?: string;
  labelledBy?: string;
  ariaLabel?: string;
  items: readonly SelectItem[];
  activeIndex: number;
  selectedValue?: string;
  emptyMessage: ReactNode;
  listRef: Ref<HTMLDivElement>;
  setActiveIndex: (index: number) => void;
  onSelect: (value: string) => void;
}) {
  const flat = flattenSelectItems(items);
  let cursor = -1;

  return (
    <div
      ref={listRef}
      id={id}
      role="listbox"
      tabIndex={-1}
      aria-labelledby={labelledBy ?? labelId}
      aria-label={labelledBy || labelId ? undefined : ariaLabel}
      className="d-ui-listbox max-h-[inherit] overflow-auto rounded-md border border-border bg-bg py-1 text-fg shadow-lg"
    >
      {flat.length === 0 ? (
        <div className="px-3 py-2 text-sm text-fg/70" role="presentation">
          {emptyMessage}
        </div>
      ) : (
        items.map((item, groupIndex) => {
          if (isSelectGroup(item)) {
            return (
              <div
                key={`g-${item.label}-${groupIndex}`}
                role="group"
                aria-label={item.label}
              >
                <div className="px-3 py-1 text-xs font-medium text-fg/60">
                  {item.label}
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
                      selected={option.value === selectedValue}
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
              selected={item.value === selectedValue}
              onHover={setActiveIndex}
              onSelect={onSelect}
            />
          );
        })
      )}
    </div>
  );
}

function OptionRow({
  id,
  option,
  index,
  active,
  selected,
  onHover,
  onSelect,
}: {
  id: string;
  option: FlatOption;
  index: number;
  active: boolean;
  selected: boolean;
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
        'd-ui-option cursor-pointer px-3 py-2 text-sm',
        option.disabled && 'pointer-events-none opacity-50',
        active && !option.disabled && 'bg-surface-hover',
        selected && 'font-medium',
      )}
      onMouseMove={() => {
        if (!option.disabled) onHover(index);
      }}
      onMouseDown={(event) => event.preventDefault()}
      onKeyDown={(event) => event.preventDefault()}
      onClick={() => {
        if (!option.disabled) onSelect(option.value);
      }}
    >
      {option.label}
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
}: {
  name?: string;
  form?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  items: readonly SelectItem[];
}) {
  if (!name) return null;
  return (
    <select
      className="d-ui-visually-hidden"
      tabIndex={-1}
      aria-hidden="true"
      name={name}
      form={form}
      required={required}
      disabled={disabled}
      value={value ?? ''}
      onChange={() => undefined}
    >
      <option value="" />
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
