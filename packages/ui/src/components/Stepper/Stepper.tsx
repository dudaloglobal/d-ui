import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { VisuallyHidden } from '../../a11y/VisuallyHidden';
import { cx } from '../../lib/cx';
import {
  uiColorBorderClass,
  uiColorInkClass,
  uiColorSolidClass,
  type UiColor,
  type UiSize,
} from '../../lib/uiScale';
import { Link } from '../Link/Link';

export type StepperVariant = 'circles' | 'bullets' | 'panels';
export type StepperOrientation = 'horizontal' | 'vertical';
export type StepStatus = 'complete' | 'current' | 'upcoming';
export type StepperSize = UiSize;
export type StepperColor = UiColor;

export type StepperStep = {
  /** Libellé visible de l'étape. */
  label: string;
  /** Précision sous le libellé. Ignorée par `bullets`. */
  description?: ReactNode;
  /** Rend l'étape cliquable — un vrai `Link`. Sans `href`, l'étape est inerte. */
  href?: string;
};

/** Fallback anglais, remplacé par `statusLabels` dès qu'une locale est connue. */
const DEFAULT_STATUS_LABELS: Record<StepStatus, string> = {
  complete: 'Completed',
  current: 'Current step',
  upcoming: 'Upcoming',
};

type StepperBase = Omit<HTMLAttributes<HTMLOListElement>, 'children'> & {
  steps: readonly StepperStep[];
  /**
   * Index de l'étape en cours, borné dans la liste. Les précédentes sont
   * terminées, les suivantes à venir : le statut est déduit, jamais déclaré
   * étape par étape — deux étapes « en cours » sont un état que l'interface ne
   * sait pas montrer.
   */
  current: number;
  orientation?: StepperOrientation;
  /**
   * Échelle partagée du design system. Défaut : `m`.
   *
   * Un seul point de réglage : le marqueur et la taille du texte en découlent,
   * et le trait de liaison suit par `calc()`.
   */
  size?: StepperSize;
  /**
   * Teinte des étapes terminée et en cours. Défaut : `brand`.
   *
   * Elle ne porte jamais le statut à elle seule (1.4.1) : la coche, la pastille
   * pleine et le `VisuallyHidden` le disent déjà.
   */
  color?: StepperColor;
  /** Nom accessible de la liste d'étapes. Obligatoire. */
  label: string;
  /**
   * Statuts annoncés aux lecteurs d'écran.
   *
   * Le composant ne peut pas deviner la langue de la page ; sans ces trois
   * chaînes, il retombe sur un fallback anglais.
   */
  statusLabels?: Record<StepStatus, string>;
};

/**
 * `hideLabels` n'existe que sur `bullets`, `bordered` que sur `panels`.
 *
 * Le type l'impose plutôt que la documentation : une prop qui ne fait rien
 * silencieusement coûte plus cher qu'une erreur de compilation.
 */
export type StepperProps =
  | (StepperBase & { variant?: 'circles'; hideLabels?: never; bordered?: never })
  | (StepperBase & {
      variant: 'bullets';
      /** Masque les libellés à l'écran seulement — ils restent lus. */
      hideLabels?: boolean;
      bordered?: never;
    })
  | (StepperBase & {
      variant: 'panels';
      hideLabels?: never;
      /** Encadre chaque étape au lieu du filet supérieur. */
      bordered?: boolean;
    });

/**
 * Taille de la boîte du marqueur à la taille `m`, en `rem`.
 *
 * Une seule constante par variante : le trait de liaison se positionne ensuite
 * par `calc()` à partir d'elle. Sans ça, chaque décalage serait une valeur
 * résolue à la main, fausse dès qu'on change la taille du marqueur.
 */
const MARKER_REM: Record<StepperVariant, number> = {
  circles: 2,
  bullets: 1.25,
  panels: 0,
};

/** Facteur appliqué au marqueur. `m` est la référence, donc `1`. */
const MARKER_FACTOR: Record<StepperSize, number> = {
  xxs: 0.625,
  xs: 0.75,
  s: 0.875,
  m: 1,
  l: 1.125,
  xl: 1.3125,
  xxl: 1.5,
};

/*
 * Taille de police posée sur la `<ol>`, en `rem`. Tout le texte à l'intérieur
 * est en `em` : une seule valeur à régler, et les proportions tiennent
 * d'elles-mêmes aux sept crans.
 *
 * Elle passe par `style` et non par une classe `text-*` : entre deux
 * utilitaires Tailwind de même spécificité, c'est l'ordre d'émission de la
 * feuille qui tranche, pas l'ordre dans l'attribut. Une `className="text-lg"`
 * de l'appelant gagnerait donc ou perdrait selon le cran demandé — et si elle
 * gagnait, elle casserait le rapport entre le texte (`em`) et le marqueur
 * (`rem`). En ligne, la règle est nette : `size` décide, et seul le `style` de
 * l'appelant peut le reprendre.
 */
const TEXT_REM: Record<StepperSize, number> = {
  xxs: 0.625,
  xs: 0.75,
  s: 0.8125,
  m: 0.875,
  l: 1,
  xl: 1.125,
  xxl: 1.25,
};

function statusOf(index: number, current: number): StepStatus {
  if (index < current) return 'complete';
  if (index === current) return 'current';
  return 'upcoming';
}

function markerColor(status: StepStatus, color: StepperColor): string {
  if (status === 'complete') {
    return cx(uiColorSolidClass[color], uiColorBorderClass[color]);
  }
  if (status === 'current') {
    return cx('bg-bg', uiColorInkClass[color], uiColorBorderClass[color]);
  }
  return 'bg-bg text-fg-muted border-border';
}

function labelColor(status: StepStatus, color: StepperColor): string {
  if (status === 'complete') return 'text-fg';
  if (status === 'current') return cx(uiColorInkClass[color], 'font-medium');
  return 'text-fg-muted';
}

function CheckGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx('size-[1.1em]', className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.5 8.5l3 3 6-6" />
    </svg>
  );
}

/**
 * Suite d'étapes ordonnées, avec l'étape en cours.
 *
 * Rend une `<ol>` : l'ordre **est** l'information. L'étape en cours porte
 * `aria-current="step"`, et chaque étape annonce son statut en toutes lettres
 * via un `VisuallyHidden`.
 *
 * Le statut se voit aussi **sans percevoir les couleurs** (WCAG 1.4.1) : une
 * étape terminée porte une coche (`circles`, `panels`) ou une pastille pleine
 * (`bullets`), une étape à venir un contour creux.
 *
 * Si les étapes sont des liens, enveloppez le composant dans un `<nav>` : c'est
 * alors de la navigation, et ce choix appartient à la page.
 *
 * `orientation="vertical"` avec `variant="circles"` donne la frise verticale —
 * la même liste, pas un composant de plus. Pour la forme à chevrons, le design
 * system a déjà `Breadcrumb` : la dupliquer ici donnerait deux conventions
 * (`aria-current="step"` contre `"page"`) pour un seul motif visuel.
 */
export function Stepper({
  steps,
  current,
  variant = 'circles',
  orientation = 'horizontal',
  size = 'm',
  color = 'brand',
  label,
  hideLabels = false,
  bordered = false,
  statusLabels = DEFAULT_STATUS_LABELS,
  className,
  style,
  ...rest
}: StepperProps) {
  const vertical = orientation === 'vertical';
  const panels = variant === 'panels';
  /*
   * `current` est borné : un appelant qui envoie `steps.length` pour dire
   * « tout est fait » laisserait sinon la liste sans étape courante, alors que
   * le composant promet qu'il y en a toujours exactement une.
   */
  const active = Math.min(
    Math.max(Math.trunc(current), 0),
    Math.max(steps.length - 1, 0),
  );

  const scale = {
    '--d-ui-step-marker': `${MARKER_REM[variant] * MARKER_FACTOR[size]}rem`,
    fontSize: `${TEXT_REM[size]}rem`,
  } as CSSProperties;

  return (
    <ol
      {...rest}
      aria-label={label}
      style={{ ...scale, ...style }}
      className={cx(
        'flex',
        vertical ? 'flex-col' : 'flex-row items-start',
        panels ? 'gap-3' : null,
        className,
      )}
    >
      {steps.map((step, index) => {
        const status = statusOf(index, active);
        const last = index === steps.length - 1;
        const announced = statusLabels[status];

        const hidden = variant === 'bullets' && hideLabels;

        /*
         * Le lien ne contient que le libellé. Le statut et la description
         * restent dehors : sinon le nom accessible du lien changerait à chaque
         * avancement, ce qui casse le ciblage à la voix.
         *
         * Sous `hideLabels`, c'est le **marqueur** qui devient le lien : une
         * cible focusable invisible n'aurait pas d'indicateur de focus visible
         * (WCAG 2.4.7). Le nom vient alors d'un texte masqué à l'intérieur.
         */
        const clickable = step.href ? (
          <Link href={step.href}>{step.label}</Link>
        ) : (
          <span className={labelColor(status, color)}>{step.label}</span>
        );

        const body = (
          <>
            {/*
             * Masqué et non cliquable : le libellé reste lu. Une pastille sans
             * nom accessible ne dit rien à personne. Masqué **et** cliquable :
             * le nom est déjà sur le lien porté par le marqueur.
             */}
            {hidden ? (
              step.href ? null : (
                <VisuallyHidden>{step.label}</VisuallyHidden>
              )
            ) : (
              clickable
            )}
            <VisuallyHidden>{` — ${announced}`}</VisuallyHidden>
            {step.description && variant !== 'bullets' ? (
              <span className="text-fg-muted mt-0.5 block">{step.description}</span>
            ) : null}
          </>
        );

        if (panels) {
          return (
            <li
              key={index}
              aria-current={status === 'current' ? 'step' : undefined}
              className={cx(
                'flex-1 px-4 py-3',
                bordered ? 'rounded-md border' : 'border-t-4',
                status === 'upcoming' ? 'border-border' : uiColorBorderClass[color],
              )}
            >
              <span
                className={cx(
                  'flex items-center gap-1.5 text-[0.8em] font-medium uppercase',
                  labelColor(status, color),
                )}
              >
                {/* Coche : la complétion ne tient pas qu'à la couleur du filet. */}
                {status === 'complete' ? <CheckGlyph className="size-[0.95em]" /> : null}
                {`${index + 1}`.padStart(2, '0')}
              </span>
              {body}
            </li>
          );
        }

        const marker =
          variant === 'bullets' ? (
            <span
              data-d-ui-step-marker=""
              className="grid size-[var(--d-ui-step-marker)] shrink-0 place-items-center"
            >
              {/*
               * Trois formes, trois statuts, sans percevoir aucune couleur :
               * terminée pleine, en cours creuse et **plus grande**, à venir
               * creuse et petite. Le diamètre porte le repère de l'étape en
               * cours parce que la teinte ne le peut pas : `success` et
               * `warning` ont presque la même luminance que `border-border`,
               * et deux pastilles creuses ne se distingueraient alors que par
               * la teinte (1.4.1) — d'autant plus qu'en `hideLabels` il ne
               * reste rien d'autre à l'écran.
               */}
              <span
                className={cx(
                  'block rounded-full border-2',
                  status === 'current'
                    ? 'size-[calc(var(--d-ui-step-marker)/1.5)]'
                    : 'size-[calc(var(--d-ui-step-marker)/2)]',
                  status === 'complete'
                    ? cx('bg-current', uiColorInkClass[color], uiColorBorderClass[color])
                    : 'bg-bg',
                  status === 'current' ? uiColorBorderClass[color] : null,
                  status === 'upcoming' ? 'border-border' : null,
                )}
              />
            </span>
          ) : (
            <span
              data-d-ui-step-marker=""
              className={cx(
                'grid size-[var(--d-ui-step-marker)] shrink-0 place-items-center rounded-full font-medium',
                /*
                 * Trait plus épais sur l'étape en cours : un contour teinté ne
                 * suffit pas, `success` et `warning` ont presque la luminance
                 * de `border-border` et resteraient indiscernables d'une étape
                 * à venir sans percevoir la couleur (1.4.1).
                 */
                status === 'current' ? 'border-[3px]' : 'border-2',
                markerColor(status, color),
              )}
            >
              {status === 'complete' ? <CheckGlyph /> : index + 1}
            </span>
          );

        /*
         * Sous `hideLabels`, la cible cliquable est le marqueur lui-même. Aux
         * petits crans la pastille descend sous 24 px : la zone cliquable est
         * donc découplée du dessin (`min-size-6`, centré), pour tenir WCAG 2.2
         * SC 2.5.8 sans grossir la pastille.
         */
        const markerNode =
          hidden && step.href ? (
            <Link
              href={step.href}
              className="inline-flex min-h-6 min-w-6 items-center justify-center no-underline"
              aria-label={step.label}
            >
              {marker}
            </Link>
          ) : (
            marker
          );

        return (
          <li
            key={index}
            aria-current={status === 'current' ? 'step' : undefined}
            className={cx(
              'relative flex',
              vertical
                ? 'flex-row gap-3 pb-6 last:pb-0'
                : 'flex-1 flex-col items-start gap-2',
            )}
          >
            {/*
             * Trait de liaison, décoratif : il redit l'ordre que la `<ol>`
             * porte déjà. Positionné depuis `--d-ui-step-marker`, donc juste
             * quelle que soit la taille du marqueur.
             */}
            {last ? null : (
              <span
                aria-hidden="true"
                className={cx(
                  index < active ? cx('bg-current', uiColorInkClass[color]) : 'bg-border',
                  'absolute',
                  vertical
                    ? 'top-[var(--d-ui-step-marker)] bottom-0 left-[calc(var(--d-ui-step-marker)/2-1px)] w-0.5'
                    : 'left-[var(--d-ui-step-marker)] right-0 top-[calc(var(--d-ui-step-marker)/2-1px)] h-0.5',
                )}
              />
            )}
            {markerNode}
            <span className={vertical ? 'min-w-0' : 'block'}>{body}</span>
          </li>
        );
      })}
    </ol>
  );
}
