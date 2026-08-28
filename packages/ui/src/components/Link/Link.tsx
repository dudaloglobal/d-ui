import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { VisuallyHidden } from '../../a11y/VisuallyHidden';
import { cx } from '../../lib/cx';

export type LinkColor = 'default' | 'dark' | 'light';
export type LinkIconPosition = 'start' | 'end';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
   * Ouvre dans un nouvel onglet, ajoute `rel="noopener noreferrer"` et
   * annonce l'ouverture aux lecteurs d'écran.
   */
  external?: boolean;
  /** Accessible extra for an external link. Override with the product language. */
  externalLabel?: string;
  /**
   * Couleur du lien. `"default"` : token `link`. `"dark"` : encre (`fg`).
   * `"light"` : fond (`bg`), à poser sur un fond `fg`. Non héritée du parent.
   */
  color?: LinkColor;
  /** Icône décorative. Ne remplace pas le nom accessible. */
  icon?: ReactNode;
  /** Position de l’icône : `"start"` (début) ou `"end"` (fin). */
  iconPosition?: LinkIconPosition;
};

const colorClass: Record<LinkColor, string> = {
  default: 'text-link visited:text-link-visited',
  dark: 'text-fg',
  light: 'text-bg',
};

function IconSlot({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0 [&_svg]:block" aria-hidden="true">
      {children}
    </span>
  );
}

/**
 * Lien du design system.
 *
 * Le soulignement est permanent et non optionnel : la couleur seule ne peut pas
 * distinguer un lien de son texte environnant (WCAG 1.4.1).
 */
export function Link({
  external = false,
  externalLabel = '(opens in a new tab)',
  color = 'default',
  icon,
  iconPosition = 'start',
  className,
  children,
  target,
  rel,
  ...rest
}: LinkProps) {
  const externalProps = external
    ? {
        target: target ?? '_blank',
        rel: rel ?? 'noopener noreferrer',
      }
    : { target, rel };
  const showStartIcon = Boolean(icon) && iconPosition === 'start';
  const showEndIcon = Boolean(icon) && iconPosition === 'end';

  return (
    <a
      className={cx(
        'underline underline-offset-2',
        'hover:decoration-2',
        'focus-visible:ring-focus focus-visible:ring-offset-bg rounded-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        colorClass[color],
        icon && 'inline-flex items-center gap-1.5',
        className,
      )}
      {...rest}
      {...externalProps}
    >
      {showStartIcon ? <IconSlot>{icon}</IconSlot> : null}
      {children}
      {showEndIcon ? <IconSlot>{icon}</IconSlot> : null}
      {external ? <VisuallyHidden> {externalLabel}</VisuallyHidden> : null}
    </a>
  );
}
