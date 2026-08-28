import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { IconButton } from '../Button/IconButton';

export type NavbarProps = HTMLAttributes<HTMLElement> & {
  /** Marque / titre à gauche. */
  brand?: ReactNode;
  /** Actions contextuelles (recherche, notifications, …). */
  actions?: ReactNode;
  /** Zone utilisateur à droite. */
  user?: ReactNode;
  /**
   * Nom du bouton menu (overlay mobile).
   * Fallback anglais : `Open navigation`.
   */
  menuLabel?: string;
  menuOpen?: boolean;
  onMenuOpenChange?: (open: boolean) => void;
  /** `id` du `Sidebar` overlay (`aria-controls`). */
  menuControls?: string;
  /** `position: fixed` en haut du viewport. L’app réserve la hauteur (`h-14`). */
  fixed?: boolean;
  /** Fond et bordure transparents (hero, photo). Le texte reste `text-fg`. */
  transparent?: boolean;
};

function MenuGlyph() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 4.5h10M3 8h10M3 11.5h10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Barre supérieure d’une coquille d’application.
 * Primitive de layout : pas de liens LMS ni de logique d’auth.
 */
export function Navbar({
  brand,
  actions,
  user,
  children,
  menuLabel = 'Open navigation',
  menuOpen = false,
  onMenuOpenChange,
  menuControls,
  fixed = false,
  transparent = false,
  className,
  ...rest
}: NavbarProps) {
  const showMenu = typeof onMenuOpenChange === 'function';

  return (
    <header
      {...rest}
      className={cx(
        'flex h-14 items-center gap-3 px-3 text-fg',
        transparent
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-border bg-bg',
        fixed && 'fixed inset-x-0 top-0 z-40',
        className,
      )}
    >
      {showMenu ? (
        <IconButton
          icon={<MenuGlyph />}
          aria-label={menuLabel}
          aria-expanded={menuOpen}
          aria-controls={menuControls}
          aria-haspopup="dialog"
          onClick={() => onMenuOpenChange(!menuOpen)}
        />
      ) : null}
      {brand ? <div className="min-w-0 font-sans font-medium">{brand}</div> : null}
      {children}
      {actions || user ? (
        <div className="ms-auto flex min-w-0 items-center gap-2">
          {actions}
          {user}
        </div>
      ) : null}
    </header>
  );
}
