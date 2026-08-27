import type { ReactNode } from 'react';

export type SelectOption = {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
};

export type SelectOptionGroup = {
  label: string;
  options: SelectOption[];
};

export type SelectItem = SelectOption | SelectOptionGroup;

export type FlatOption = SelectOption & { group?: string };

export function isSelectGroup(item: SelectItem): item is SelectOptionGroup {
  return (
    typeof item === 'object' &&
    item !== null &&
    'options' in item &&
    Array.isArray((item as SelectOptionGroup).options)
  );
}

export function optionText(label: ReactNode): string {
  if (label == null || typeof label === 'boolean') return '';
  if (typeof label === 'string' || typeof label === 'number') return String(label);
  if (Array.isArray(label)) return label.map(optionText).join('');
  return '';
}

export function optionSearchText(option: SelectOption): string {
  return `${optionText(option.label)} ${optionText(option.description)}`.trim();
}

export function asSelectValues(value: string | readonly string[] | undefined): string[] {
  if (value == null || value === '') return [];
  if (typeof value === 'string') return [value];
  return [...value];
}

export function flattenSelectItems(items: readonly SelectItem[]): FlatOption[] {
  const out: FlatOption[] = [];
  for (const item of items) {
    if (isSelectGroup(item)) {
      for (const option of item.options) {
        out.push({ ...option, group: item.label });
      }
    } else {
      out.push(item);
    }
  }
  return out;
}

export function filterSelectItems(
  items: readonly SelectItem[],
  query: string,
): SelectItem[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return [...items];
  const out: SelectItem[] = [];
  for (const item of items) {
    if (isSelectGroup(item)) {
      const options = item.options.filter((option) =>
        optionSearchText(option).toLowerCase().includes(needle),
      );
      if (options.length > 0) out.push({ ...item, options });
    } else if (optionSearchText(item).toLowerCase().includes(needle)) {
      out.push(item);
    }
  }
  return out;
}

export function findOptionIndex(
  options: readonly FlatOption[],
  value: string | undefined,
): number {
  if (value == null || value === '') return -1;
  return options.findIndex((option) => option.value === value);
}

export function nextEnabledIndex(
  options: readonly FlatOption[],
  from: number,
  delta: number,
): number {
  if (options.length === 0) return -1;
  const start = from < 0 ? (delta > 0 ? -1 : options.length) : from;
  let index = start;
  for (let step = 0; step < options.length; step += 1) {
    index = (index + delta + options.length) % options.length;
    if (!options[index]?.disabled) return index;
  }
  return -1;
}

export function matchTypeahead(
  options: readonly FlatOption[],
  query: string,
  startIndex: number,
): number {
  const needle = query.toLowerCase();
  if (!needle) return -1;
  const enabled = options
    .map((option, index) => ({ option, index }))
    .filter(({ option }) => !option.disabled);
  if (enabled.length === 0) return -1;
  const start = enabled.findIndex(({ index }) => index > startIndex);
  const ordered =
    start === -1 ? enabled : [...enabled.slice(start), ...enabled.slice(0, start)];
  const hit = ordered.find(({ option }) =>
    optionText(option.label).toLowerCase().startsWith(needle),
  );
  return hit?.index ?? -1;
}
