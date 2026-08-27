import { describe, expect, it } from 'vitest';
import {
  filterSelectItems,
  flattenSelectItems,
  matchTypeahead,
  nextEnabledIndex,
  optionText,
  type SelectItem,
} from './selectOptions';

const items: SelectItem[] = [
  {
    label: 'Europe',
    options: [
      { value: 'fr', label: 'France' },
      { value: 'ch', label: 'Suisse', disabled: true },
    ],
  },
  { value: 'ca', label: 'Canada' },
];

describe('selectOptions', () => {
  it('flattens groups and keeps disabled flags', () => {
    expect(flattenSelectItems(items)).toEqual([
      { value: 'fr', label: 'France', group: 'Europe' },
      { value: 'ch', label: 'Suisse', disabled: true, group: 'Europe' },
      { value: 'ca', label: 'Canada' },
    ]);
  });

  it('filters options and drops empty groups', () => {
    expect(filterSelectItems(items, 'can')).toEqual([{ value: 'ca', label: 'Canada' }]);
    expect(filterSelectItems(items, 'fr')).toEqual([
      { label: 'Europe', options: [{ value: 'fr', label: 'France' }] },
    ]);
  });

  it('skips disabled options when moving', () => {
    const flat = flattenSelectItems(items);
    expect(nextEnabledIndex(flat, 0, 1)).toBe(2);
    expect(nextEnabledIndex(flat, 2, -1)).toBe(0);
  });

  it('matches typeahead from the current index', () => {
    const flat = flattenSelectItems(items);
    expect(matchTypeahead(flat, 'c', 0)).toBe(2);
    expect(optionText('France')).toBe('France');
  });
});
