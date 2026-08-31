import type { HTMLAttributes } from 'react';
import { cx } from '../../lib/cx';

export type ProgressVariant = 'linear' | 'circular';
export type ProgressSize = 'sm' | 'md' | 'lg';

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
  /** Affiche la valeur en clair à côté de l'indicateur. */
  showValue?: boolean;
  size?: ProgressSize;
};

/**
 * `linear` sans `value` est indéterminé : la barre balaie sa piste.
 *
 * `circular` exige une `value` : un anneau qui tourne sans valeur, c'est un
 * `Spinner`, et le design system n'en a qu'un.
 */
export type ProgressProps =
  | (ProgressBase & { variant?: 'linear'; value?: number })
  | (ProgressBase & { variant: 'circular'; value: number });

const trackHeight: Record<ProgressSize, string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const circleGeometry: Record<ProgressSize, { box: number; stroke: number }> = {
  sm: { box: 40, stroke: 4 },
  md: { box: 56, stroke: 5 },
  lg: { box: 80, stroke: 6 },
};

const valueTextSize: Record<ProgressSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

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
  size = 'md',
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
        <svg
          viewBox={`0 0 ${box} ${box}`}
          className="size-full -rotate-90"
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
            className="stroke-brand"
          />
        </svg>
        {showValue ? (
          <span
            className={cx(
              'text-fg absolute font-medium tabular-nums',
              valueTextSize[size],
            )}
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
            'bg-brand block h-full rounded-full',
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
