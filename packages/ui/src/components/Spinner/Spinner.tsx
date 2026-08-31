import type { HTMLAttributes } from 'react';
import { VisuallyHidden } from '../../a11y/VisuallyHidden';
import { cx } from '../../lib/cx';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg';

export type SpinnerProps = Omit<HTMLAttributes<HTMLSpanElement>, 'children'> & {
  /** `xs` suit la taille du texte courant (`1em`). Défaut : `md`. */
  size?: SpinnerSize;
  /**
   * Nom accessible, et donc annonce.
   *
   * Avec `label`, le spinner devient une région `status` : le lecteur d'écran
   * annonce l'attente sans interrompre. Sans `label`, il est décoratif — c'est
   * le bon choix quand le conteneur porte déjà `aria-busy` et un texte visible,
   * comme dans `Button`. Deux annonces pour une seule attente, c'est du bruit.
   */
  label?: string;
};

const sizeClass: Record<SpinnerSize, string> = {
  xs: 'size-[1em] border-2',
  sm: 'size-4 border-2',
  md: 'size-6 border-2',
  lg: 'size-8 border-[3px]',
};

/**
 * Indicateur d'attente indéterminée : on ne sait pas combien de temps.
 *
 * Dès qu'une valeur est connue, `Progress` la montre — une barre qui avance
 * dit quelque chose qu'un cercle qui tourne ne dira jamais.
 *
 * La couleur vient de `currentColor` : le spinner prend le ton de son contexte
 * plutôt que d'exposer une palette à lui.
 */
export function Spinner({ size = 'md', label, className, ...rest }: SpinnerProps) {
  const ringClass = cx(
    'd-ui-spinner inline-block shrink-0',
    sizeClass[size],
    label ? null : className,
  );

  /*
   * Décoratif : le conteneur porte déjà l'attente. La sémantique est posée
   * après `rest` — un appelant ne doit pas pouvoir exposer un disque anonyme,
   * ni faire taire un spinner nommé.
   */
  if (!label) {
    return <span {...rest} role={undefined} aria-hidden="true" className={ringClass} />;
  }

  /*
   * Une région `status` annonce le **contenu** qu'elle porte. Un `aria-label`
   * sur un élément vide ne serait jamais lu : le nom vit donc à l'intérieur,
   * en texte, et l'anneau reste décoratif.
   */
  return (
    <span
      {...rest}
      role="status"
      aria-hidden={undefined}
      className={cx('inline-flex shrink-0', className)}
    >
      <span aria-hidden="true" className={ringClass} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </span>
  );
}
