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
 *
 * If the target cannot take focus, the component falls back to the browser's
 * native hash navigation rather than swallowing the click.
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
    target.focus();

    /*
     * Le saut d'ancre natif n'est annulé que si le focus a réellement atterri.
     *
     * `focus()` ne fait rien sur un élément non focusable — un `<main>` sans
     * `tabIndex={-1}`, par exemple. Annuler avant de vérifier laisserait
     * l'utilisateur clavier sans rien : ni focus déplacé, ni navigation par
     * défaut. Mieux vaut rendre la main au navigateur dans ce cas.
     *
     * On ne pose délibérément pas `tabindex` sur la cible : le DOM du
     * consommateur ne nous appartient pas — cf. le test
     * « does not mutate tabindex on the target ».
     */
    if (document.activeElement === target) {
      event.preventDefault();
    }
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
