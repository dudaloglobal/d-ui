import type { CSSProperties, HTMLAttributes } from 'react';
import { cx } from '../../lib/cx';

export type SkeletonShape = 'rect' | 'circle' | 'text';

export type SkeletonProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /**
   * Forme du bloc.
   *
   * `text` prend la hauteur d'une ligne et un coin très arrondi ; `circle`
   * force un ratio carré — passer `size` plutôt que `width` et `height`.
   */
  shape?: SkeletonShape;
  /** Largeur CSS. Défaut : `100%`. */
  width?: number | string;
  /** Hauteur CSS. Ignorée pour `text`, qui suit la ligne de base. */
  height?: number | string;
  /** Diamètre d'un `circle`. Raccourci pour `width` + `height`. */
  size?: number | string;
};

const shapeClass: Record<SkeletonShape, string> = {
  rect: 'rounded-md',
  circle: 'aspect-square rounded-full',
  text: 'h-[1em] rounded',
};

function length(value: number | string | undefined): string | undefined {
  return typeof value === 'number' ? `${value}px` : value;
}

/**
 * Bloc gris animé qui tient la place d'un contenu en cours de chargement.
 *
 * **Toujours hors de l'arbre d'accessibilité.** Un squelette n'a rien à
 * annoncer : il ne dit pas ce qui arrive, seulement qu'il n'est pas encore là.
 * C'est le conteneur qui porte l'information, via `aria-busy` et un texte de
 * remplacement — voir la doc. Un `aria-hidden={false}` venu de l'appelant
 * exposerait une suite de blocs anonymes, donc la sémantique est réaffirmée
 * après `rest`.
 *
 * L'animation vient de `.d-ui-skeleton`, coupée par le garde global
 * `prefers-reduced-motion` de la feuille de styles.
 */
export function Skeleton({
  shape = 'rect',
  width,
  height,
  size,
  className,
  style,
  ...rest
}: SkeletonProps) {
  /*
   * `text` tient sa hauteur de `h-[1em]` : une hauteur en ligne la doublerait
   * et donnerait une « ligne de texte » de 200 px.
   */
  const resolved: CSSProperties = {
    width: length(size ?? width) ?? '100%',
    height: shape === 'text' ? undefined : length(size ?? height),
    ...style,
  };

  return (
    <div
      {...rest}
      aria-hidden="true"
      style={resolved}
      className={cx('d-ui-skeleton bg-fg/10', shapeClass[shape], className)}
    />
  );
}

export type SkeletonTextProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /** Nombre de lignes. Défaut : `3`. */
  lines?: number;
  /**
   * Largeur de la dernière ligne, pour imiter un paragraphe qui s'arrête en
   * cours de ligne. Défaut : `60%`. Passer `100%` pour un bloc plein.
   */
  lastLineWidth?: number | string;
};

/**
 * Paragraphe squelette.
 *
 * Existe séparément parce que « n lignes dont la dernière est plus courte »
 * est la seule composition qu'on réécrit à chaque fois. Tout le reste —
 * carte, média, liste — se compose depuis `Skeleton` dans la page appelante.
 */
export function SkeletonText({
  lines = 3,
  lastLineWidth = '60%',
  className,
  ...rest
}: SkeletonTextProps) {
  const count = Math.max(1, Math.trunc(lines));

  return (
    <div {...rest} aria-hidden="true" className={cx('flex flex-col gap-2', className)}>
      {Array.from({ length: count }, (_, index) => (
        <Skeleton
          key={index}
          shape="text"
          width={index === count - 1 && count > 1 ? lastLineWidth : '100%'}
        />
      ))}
    </div>
  );
}
