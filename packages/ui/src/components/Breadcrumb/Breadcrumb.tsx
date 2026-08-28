import type { ReactElement, ReactNode } from 'react';
import { Children, cloneElement, isValidElement } from 'react';
import { cx } from '../../lib/cx';
import { Link } from '../Link/Link';

export type BreadcrumbSize = 'sm' | 'md' | 'lg';

export type BreadcrumbProps = {
  /** Nom accessible du `nav`. Fallback anglais si omis. */
  label?: string;
  size?: BreadcrumbSize;
  className?: string;
  children: ReactNode;
};

const sizeClass: Record<BreadcrumbSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

function Chevron() {
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

export function Breadcrumb({
  label = 'Breadcrumb',
  size = 'md',
  className,
  children,
}: BreadcrumbProps) {
  const items = Children.toArray(children).filter(
    isValidElement,
  ) as ReactElement<BreadcrumbItemProps>[];

  return (
    <nav aria-label={label} className={cx('font-sans', sizeClass[size], className)}>
      <ol className="m-0 flex list-none flex-wrap items-center gap-1 p-0">
        {items.map((child, index) => {
          const current = index === items.length - 1;
          return (
            <li key={child.key ?? index} className="inline-flex items-center gap-1">
              {index > 0 ? (
                <span className="inline-flex text-fg/50" aria-hidden="true">
                  <Chevron />
                </span>
              ) : null}
              {cloneElement(child, { current })}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export type BreadcrumbItemProps = {
  href?: string;
  /**
   * Posé automatiquement sur le dernier item.
   * La page courante n’est pas un lien.
   */
  current?: boolean;
  className?: string;
  children: ReactNode;
};

export function BreadcrumbItem({
  href,
  current = false,
  className,
  children,
}: BreadcrumbItemProps) {
  if (current || !href) {
    return (
      <span
        aria-current={current ? 'page' : undefined}
        className={cx(current ? 'font-medium text-fg' : 'text-fg/70', className)}
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
