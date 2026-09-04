import type { CSSProperties, HTMLAttributes } from 'react';
import { cx } from '../../lib/cx';
import { uiColorInkClass, type UiColor, type UiSize } from '../../lib/uiScale';

export type ProgressVariant = 'linear' | 'circular';
export type ProgressSize = UiSize;
export type ProgressColor = UiColor;

type ProgressBase = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /**
   * Nom accessible, obligatoire.
   *
   * Une barre sans nom annonce un pourcentage sans dire de quoi. Reprendre le
   * libellé visible voisin s'il y en a un.
   */
  label: string;
  /**
   * Texte annoncé à la place du pourcentage — « étape 2 sur 4 »,
   * « 12 Mo sur 40 ». À utiliser dès que le pourcentage seul est opaque.
   */
  valueText?: string;
  /**
   * Affiche la valeur en clair à côté de l'indicateur.
   *
   * Sur un anneau trop petit pour l'accueillir, elle est omise plutôt que
   * posée sur le trait : `aria-valuenow` la porte de toute façon.
   */
  showValue?: boolean;
  /** Échelle partagée du design system (`Avatar`, `Badge`, `Card`). Défaut : `m`. */
  size?: ProgressSize;
  /**
   * Teinte du remplissage. Défaut : `brand`.
   *
   * Elle ne porte jamais le sens à elle seule (1.4.1) : une progression en
   * échec se dit dans `label` ou `valueText`, pas seulement en rouge.
   */
  color?: ProgressColor;
};

/**
 * `linear` sans `value` est indéterminé : la barre balaie sa piste.
 *
 * `circular` exige une `value`. Un anneau qui tourne sans valeur n'apprend rien
 * que l'`aria-busy` du conteneur ne dise déjà : le design system ne le rend pas
 * dans un composant à part.
 */
export type ProgressProps =
  | (ProgressBase & { variant?: 'linear'; value?: number })
  | (ProgressBase & { variant: 'circular'; value: number });

const trackHeight: Record<ProgressSize, string> = {
  xxs: 'h-0.5',
  xs: 'h-1',
  s: 'h-1.5',
  m: 'h-2',
  l: 'h-3',
  xl: 'h-4',
  xxl: 'h-5',
};

/*
 * `box` est le diamètre en pixels, `stroke` l'épaisseur du trait. Les deux
 * grandissent ensemble : un trait constant sur un grand cercle paraît maigre,
 * sur un petit il mange le trou.
 */
const circleGeometry: Record<ProgressSize, { box: number; stroke: number }> = {
  xxs: { box: 20, stroke: 2.5 },
  xs: { box: 28, stroke: 3 },
  s: { box: 40, stroke: 4 },
  m: { box: 56, stroke: 5 },
  l: { box: 72, stroke: 6 },
  xl: { box: 88, stroke: 7 },
  xxl: { box: 104, stroke: 8 },
};

/* Valeur affichée à côté d'une barre : sept crans, sept tailles distinctes. */
const valueTextSize: Record<ProgressSize, string> = {
  xxs: 'text-[0.5625rem]',
  xs: 'text-[0.625rem]',
  s: 'text-xs',
  m: 'text-sm',
  l: 'text-base',
  xl: 'text-lg',
  xxl: 'text-xl',
};

/*
 * Au centre d'un anneau, la taille du texte se déduit du diamètre — une table
 * parallèle finirait par diverger de `circleGeometry`, et « 100 % » sortirait
 * du cercle. En dessous de ce seuil, le texte ne tient pas : il chevaucherait
 * le trait coloré, et un glyphe posé sur son propre indicateur ne se lit plus
 * (1.4.3). La valeur reste annoncée par `aria-valuenow`, elle n'est pas perdue.
 */
const CIRCLE_VALUE_MIN_BOX = 48;

function circleValueStyle(box: number): CSSProperties {
  return { fontSize: `${Math.round(box * 0.26)}px` };
}

function clamp(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

/**
 * Progression mesurée, de 0 à 100.
 *
 * L'échelle est toujours un pourcentage : accepter un `min` et un `max`
 * arbitraires ferait porter au composant une conversion que l'appelant fait
 * mieux, et `valueText` couvre déjà le besoin d'annoncer autre chose qu'un
 * pourcentage.
 */
export function Progress({
  variant = 'linear',
  value,
  label,
  valueText,
  showValue = false,
  size = 'm',
  color = 'brand',
  className,
  ...rest
}: ProgressProps) {
  const indeterminate = value === undefined;
  /*
   * Le type interdit `circular` sans `value`, mais le type n'est qu'un garde
   * de compilation : un consommateur JavaScript, un spread `Record<string,
   * unknown>` ou le panneau de contrôles de Storybook passent au travers. Un
   * anneau vide dessinerait alors 0 % sans l'annoncer.
   */
  const resolvedVariant = variant === 'circular' && indeterminate ? 'linear' : variant;
  const percent = indeterminate ? 0 : clamp(value);
  const shown = valueText ?? `${Math.round(percent)} %`;

  /*
   * Après `rest` : le rôle et les bornes font l'indicateur. Un indéterminé
   * **omet** `aria-valuenow` — c'est ce qui le distingue d'un 0 %.
   */
  const semantics = {
    role: 'progressbar' as const,
    'aria-label': label,
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    'aria-valuenow': indeterminate ? undefined : Math.round(percent),
    /*
     * `aria-valuetext` survit à l'indéterminé : ARIA l'autorise sans
     * `aria-valuenow`, et « Étape 2 sur 4 » est justement le cas où la valeur
     * chiffrée manque mais l'information existe. L'avaler en silence serait
     * la seule option franchement mauvaise.
     */
    'aria-valuetext': valueText,
  };

  if (resolvedVariant === 'circular') {
    const { box, stroke } = circleGeometry[size];
    const radius = (box - stroke) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
      <div
        {...rest}
        {...semantics}
        className={cx('relative inline-flex items-center justify-center', className)}
        style={{ width: box, height: box, ...rest.style }}
      >
        {/*
          La teinte est portée par le `<svg>`, pas par le conteneur : la valeur
          en clair reste en `text-fg`, dont le contraste est garanti sur le fond
          quelle que soit la couleur du remplissage.
        */}
        <svg
          viewBox={`0 0 ${box} ${box}`}
          className={cx('size-full -rotate-90', uiColorInkClass[color])}
          aria-hidden="true"
          focusable="false"
        >
          <circle
            cx={box / 2}
            cy={box / 2}
            r={radius}
            fill="none"
            strokeWidth={stroke}
            className="stroke-fg/10"
          />
          <circle
            cx={box / 2}
            cy={box / 2}
            r={radius}
            fill="none"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percent / 100)}
            className="stroke-current"
          />
        </svg>
        {showValue && box >= CIRCLE_VALUE_MIN_BOX ? (
          <span
            className="text-fg absolute font-medium tabular-nums"
            style={circleValueStyle(box)}
            aria-hidden="true"
          >
            {shown}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div {...rest} {...semantics} className={cx('flex items-center gap-3', className)}>
      <span
        className={cx(
          'bg-fg/10 relative w-full overflow-hidden rounded-full',
          trackHeight[size],
        )}
      >
        <span
          className={cx(
            'block h-full rounded-full bg-current',
            uiColorInkClass[color],
            indeterminate
              ? 'd-ui-progress-indeterminate w-1/3'
              : 'transition-[width] duration-300 ease-out',
          )}
          style={indeterminate ? undefined : { width: `${percent}%` }}
        />
      </span>
      {showValue && !indeterminate ? (
        <span
          className={cx('text-fg shrink-0 font-medium tabular-nums', valueTextSize[size])}
          aria-hidden="true"
        >
          {shown}
        </span>
      ) : null}
    </div>
  );
}
