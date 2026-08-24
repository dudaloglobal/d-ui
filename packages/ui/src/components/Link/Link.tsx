import type { AnchorHTMLAttributes } from 'react';
import { VisuallyHidden } from '../../a11y/VisuallyHidden';
import { cx } from '../../lib/cx';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
   * Ouvre dans un nouvel onglet, ajoute `rel="noopener noreferrer"` et
   * annonce l'ouverture aux lecteurs d'écran.
   */
  external?: boolean;
  /** Texte annoncé pour un lien externe. */
  externalLabel?: string;
};

/**
 * Lien du design system.
 *
 * Le soulignement est permanent et non optionnel : la couleur seule ne peut pas
 * distinguer un lien de son texte environnant (WCAG 1.4.1).
 */
export function Link({
  external = false,
  externalLabel = '(ouvre dans un nouvel onglet)',
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

  return (
    <a
      className={cx(
        'text-link underline underline-offset-2',
        'hover:decoration-2',
        'visited:text-link-visited',
        'focus-visible:ring-focus focus-visible:ring-offset-bg rounded-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        className,
      )}
      {...externalProps}
      {...rest}
    >
      {children}
      {external ? <VisuallyHidden> {externalLabel}</VisuallyHidden> : null}
    </a>
  );
}
