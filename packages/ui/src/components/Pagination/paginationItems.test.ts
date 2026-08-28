import { describe, expect, it } from 'vitest';
import { paginationItems } from './paginationItems';

describe('paginationItems', () => {
  it('lists every page when the range is short', () => {
    expect(paginationItems(1, 5)).toEqual([
      { type: 'page', page: 1 },
      { type: 'page', page: 2 },
      { type: 'page', page: 3 },
      { type: 'page', page: 4 },
      { type: 'page', page: 5 },
    ]);
  });

  it('collapses a long range around the current page', () => {
    expect(paginationItems(1, 12)).toEqual([
      { type: 'page', page: 1 },
      { type: 'page', page: 2 },
      { type: 'ellipsis', id: 'end' },
      { type: 'page', page: 12 },
    ]);
    expect(paginationItems(6, 12)).toEqual([
      { type: 'page', page: 1 },
      { type: 'ellipsis', id: 'start' },
      { type: 'page', page: 5 },
      { type: 'page', page: 6 },
      { type: 'page', page: 7 },
      { type: 'ellipsis', id: 'end' },
      { type: 'page', page: 12 },
    ]);
    expect(paginationItems(12, 12)).toEqual([
      { type: 'page', page: 1 },
      { type: 'ellipsis', id: 'start' },
      { type: 'page', page: 11 },
      { type: 'page', page: 12 },
    ]);
  });

  it('fills a single-page hole instead of an ellipsis', () => {
    expect(paginationItems(3, 5)).toEqual([
      { type: 'page', page: 1 },
      { type: 'page', page: 2 },
      { type: 'page', page: 3 },
      { type: 'page', page: 4 },
      { type: 'page', page: 5 },
    ]);
  });

  it('returns nothing when there are no pages', () => {
    expect(paginationItems(1, 0)).toEqual([]);
  });
});
