import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { cx } from '../lib/cx';

export type SkipLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href?: `#${string}`;
};

const DEFAULT_LABEL = 'Skip to main content';

function focusTarget(id: string) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }
  if (!target.hasAttribute('tabindex')) {
    target.setAttribute('tabindex', '-1');
  }
  target.focus();
}

/**
 * First focusable control in an app shell. Visible on keyboard focus only.
 * Point `href` at a `main` landmark (`id="main"`).
 */
export function SkipLink({
  href = '#main',
  className,
  children = DEFAULT_LABEL,
  onClick,
  ...rest
}: SkipLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }
    const id = href.startsWith('#') ? href.slice(1) : '';
    if (!id) {
      return;
    }
    event.preventDefault();
    focusTarget(id);
  }

  return (
    <a
      href={href}
      className={cx('d-ui-skip-link', className)}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}
