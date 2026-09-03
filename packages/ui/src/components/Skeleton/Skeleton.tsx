import type { CSSProperties, HTMLAttributes } from 'react';
import { cx } from '../../lib/cx';
import { uiColorSoftStyle, type UiColor } from '../../lib/uiScale';

export type SkeletonShape = 'rect' | 'circle' | 'text';
export type SkeletonColor = UiColor;

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
  /**
   * Diamètre d'un `circle`. Raccourci pour `width` + `height`.
   *
   * Volontairement une longueur CSS et non l'échelle `UiSize` du design
   * system : un squelette doit épouser exactement le bloc qu'il remplace, sinon
   * la page saute à l'arrivée des données — ce qu'il est justement là pour
   * éviter. Sept crans ne tomberaient jamais sur la bonne mesure.
   */
  size?: number | string;
  /**
   * Teinte du bloc. Défaut : `neutral`, un gris tiré du texte.
   *
   * Le squelette reste `aria-hidden` : la couleur est décorative et ne peut
   * porter aucune information (1.4.1).
   */
  color?: SkeletonColor;
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
  color = 'neutral',
  className,
  style,
  ...rest
}: SkeletonProps) {
  /*
   * `text` tient sa hauteur de `h-[1em]` : une hauteur en ligne la doublerait
   * et donnerait une « ligne de texte » de 200 px.
   */
  /*
   * `uiColorSoftStyle` ne rend rien pour `neutral` : la classe `bg-fg/10`
   * reste alors seule, et c'est bien le gris par défaut qu'on veut.
   *
   * 32 % plutôt que les 14 % d'une `Card` : ici l'aplat ne porte pas de texte,
   * et une teinte qu'on ne distingue pas du gris par défaut serait une prop
   * pour rien. Un `color` explicite prend donc le pas sur une éventuelle
   * classe `bg-*` de l'appelant — c'est ce qu'il a demandé ; son `style`, lui,
   * garde le dernier mot.
   */
  const resolved: CSSProperties = {
    ...uiColorSoftStyle(color, 32),
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
  /** Teinte des lignes. Défaut : `neutral`. Transmise telle quelle à `Skeleton`. */
  color?: SkeletonColor;
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
  color = 'neutral',
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
          color={color}
          width={index === count - 1 && count > 1 ? lastLineWidth : '100%'}
        />
      ))}
    </div>
  );
}
