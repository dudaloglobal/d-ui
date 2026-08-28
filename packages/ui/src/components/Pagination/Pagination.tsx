import type { ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';
import { paginationItems } from './paginationItems';

export type PaginationSize = 'sm' | 'md' | 'lg';

export type PaginationProps = {
  /** Page courante, 1-indexée. Contrôlé. */
  page: number;
  /** Nombre total de pages. */
  pageCount: number;
  onPageChange: (page: number) => void;
  /** Pages numérotées de chaque côté de la courante. Défaut : `1`. */
  siblingCount?: number;
  /** Nom accessible du `nav`. Fallback anglais si omis. */
  label?: string;
  previousLabel?: string;
  nextLabel?: string;
  /** Accessible name for a page button. */
  pageLabel?: (page: number, current: boolean) => string;
  disabled?: boolean;
  size?: PaginationSize;
  className?: string;
};

function ChevronLeft() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M10 4L6 8l4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function defaultPageLabel(page: number, current: boolean): string {
  return current ? `Page ${page}, current page` : `Page ${page}`;
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
  siblingCount = 1,
  label = 'Pagination',
  previousLabel = 'Previous page',
  nextLabel = 'Next page',
  pageLabel = defaultPageLabel,
  disabled = false,
  size = 'md',
  className,
}: PaginationProps) {
  const items = paginationItems(page, pageCount, siblingCount);
  const current = pageCount < 1 ? 0 : Math.min(Math.max(page, 1), pageCount);
  const atStart = current <= 1;
  const atEnd = current >= pageCount || pageCount < 1;

  function go(next: number) {
    if (disabled || next < 1 || next > pageCount || next === current) return;
    onPageChange(next);
  }

  return (
    <nav aria-label={label} className={cx('font-sans', className)}>
      <ul className="m-0 flex list-none flex-wrap items-center gap-1 p-0">
        <li>
          <IconButton
            variant="ghost"
            size={size}
            icon={<ChevronLeft />}
            aria-label={previousLabel}
            disabled={disabled || atStart}
            onClick={() => go(current - 1)}
          />
        </li>
        {items.map((item) =>
          item.type === 'ellipsis' ? (
            <li key={item.id}>
              <span
                aria-hidden="true"
                className="inline-flex min-w-8 items-center justify-center px-1 text-fg/70"
              >
                …
              </span>
            </li>
          ) : (
            <li key={item.page}>
              <PageButton
                page={item.page}
                current={item.page === current}
                disabled={disabled}
                size={size}
                label={pageLabel(item.page, item.page === current)}
                onSelect={go}
              />
            </li>
          ),
        )}
        <li>
          <IconButton
            variant="ghost"
            size={size}
            icon={<ChevronRight />}
            aria-label={nextLabel}
            disabled={disabled || atEnd}
            onClick={() => go(current + 1)}
          />
        </li>
      </ul>
    </nav>
  );
}

function PageButton({
  page,
  current,
  disabled,
  size,
  label,
  onSelect,
}: {
  page: number;
  current: boolean;
  disabled: boolean;
  size: PaginationSize;
  label: string;
  onSelect: (page: number) => void;
}): ReactNode {
  return (
    <Button
      type="button"
      variant={current ? 'secondary' : 'ghost'}
      size={size}
      disabled={disabled}
      aria-label={label}
      aria-current={current ? 'page' : undefined}
      onClick={() => onSelect(page)}
    >
      {page}
    </Button>
  );
}
