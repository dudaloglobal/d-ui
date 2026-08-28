export type PaginationItem =
  { type: 'page'; page: number } | { type: 'ellipsis'; id: 'start' | 'end' };

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * First and last pages always, a cluster around the current page, and
 * ellipses when a gap is wider than one skipped page.
 */
export function paginationItems(
  page: number,
  pageCount: number,
  siblingCount = 1,
): PaginationItem[] {
  if (pageCount < 1) return [];
  const current = clamp(page, 1, pageCount);
  const siblings = Math.max(0, siblingCount);
  const maxWithoutEllipsis = siblings * 2 + 5;

  if (pageCount <= maxWithoutEllipsis) {
    return Array.from({ length: pageCount }, (_, index) => ({
      type: 'page' as const,
      page: index + 1,
    }));
  }

  const pages = new Set<number>([1, pageCount]);
  for (let p = current - siblings; p <= current + siblings; p += 1) {
    if (p >= 1 && p <= pageCount) pages.add(p);
  }

  let sorted = [...pages].sort((a, b) => a - b);
  for (let i = 1; i < sorted.length; i += 1) {
    const prev = sorted[i - 1];
    const next = sorted[i];
    if (prev !== undefined && next !== undefined && next - prev === 2) {
      pages.add(prev + 1);
    }
  }
  sorted = [...pages].sort((a, b) => a - b);

  const items: PaginationItem[] = [];
  for (let i = 0; i < sorted.length; i += 1) {
    const p = sorted[i];
    const prev = sorted[i - 1];
    if (p === undefined) continue;
    if (prev !== undefined && p - prev > 1) {
      items.push({ type: 'ellipsis', id: prev === 1 ? 'start' : 'end' });
    }
    items.push({ type: 'page', page: p });
  }
  return items;
}
