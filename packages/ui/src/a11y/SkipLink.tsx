import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { cx } from '../lib/cx';

export type SkipLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href?: `#${string}`;
};

const DEFAULT_LABEL = 'Skip to main content';

/**
 * First focusable control in an app shell. Visible on keyboard focus only.
 * Point `href` at a landmark that is already focusable, e.g.
 * `<main id="main" tabIndex={-1}>`.
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
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    event.preventDefault();
    target.focus();
  }

  return (
    <a
      {...rest}
      href={href}
      className={cx('d-ui-skip-link', className)}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
