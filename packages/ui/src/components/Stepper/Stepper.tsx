import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { VisuallyHidden } from '../../a11y/VisuallyHidden';
import { cx } from '../../lib/cx';
import { Link } from '../Link/Link';

export type StepperVariant = 'circles' | 'bullets' | 'panels';
export type StepperOrientation = 'horizontal' | 'vertical';
export type StepStatus = 'complete' | 'current' | 'upcoming';

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
 * Taille de la boîte du marqueur, en `rem`.
 *
 * Une seule constante par variante : le trait de liaison se positionne ensuite
 * par `calc()` à partir d'elle. Sans ça, chaque décalage serait une valeur
 * résolue à la main, fausse dès qu'on change la taille du marqueur.
 */
const MARKER_BOX: Record<StepperVariant, string> = {
  circles: '2rem',
  bullets: '1.25rem',
  panels: '0rem',
};

function statusOf(index: number, current: number): StepStatus {
  if (index < current) return 'complete';
  if (index === current) return 'current';
  return 'upcoming';
}

const markerColor: Record<StepStatus, string> = {
  complete: 'bg-brand text-on-brand border-brand',
  current: 'bg-bg text-brand border-brand',
  upcoming: 'bg-bg text-fg-muted border-border',
};

const labelColor: Record<StepStatus, string> = {
  complete: 'text-fg',
  current: 'text-brand font-medium',
  upcoming: 'text-fg-muted',
};

function CheckGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx('size-3.5', className)}
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

  const markerVar = { '--d-ui-step-marker': MARKER_BOX[variant] } as CSSProperties;

  return (
    <ol
      {...rest}
      aria-label={label}
      style={{ ...markerVar, ...style }}
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
          <Link href={step.href} className="text-sm">
            {step.label}
          </Link>
        ) : (
          <span className={cx('text-sm', labelColor[status])}>{step.label}</span>
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
              <span className="text-fg-muted mt-0.5 block text-sm">
                {step.description}
              </span>
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
                status === 'upcoming' ? 'border-border' : 'border-brand',
              )}
            >
              <span
                className={cx(
                  'flex items-center gap-1.5 text-xs font-medium uppercase',
                  labelColor[status],
                )}
              >
                {/* Coche : la complétion ne tient pas qu'à la couleur du filet. */}
                {status === 'complete' ? <CheckGlyph className="size-3" /> : null}
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
               * Pleine si terminée, creuse sinon : la forme suffit à distinguer
               * les deux sans percevoir la couleur.
               */}
              <span
                className={cx(
                  'block size-2.5 rounded-full border-2',
                  status === 'complete' ? 'bg-brand border-brand' : 'bg-bg',
                  status === 'current' ? 'border-brand' : null,
                  status === 'upcoming' ? 'border-border' : null,
                )}
              />
            </span>
          ) : (
            <span
              data-d-ui-step-marker=""
              className={cx(
                'grid size-[var(--d-ui-step-marker)] shrink-0 place-items-center rounded-full border-2 text-sm font-medium',
                markerColor[status],
              )}
            >
              {status === 'complete' ? <CheckGlyph /> : index + 1}
            </span>
          );

        /* Sous `hideLabels`, la cible cliquable est le marqueur lui-même. */
        const markerNode =
          hidden && step.href ? (
            <Link
              href={step.href}
              className="inline-flex no-underline"
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
                  index < active ? 'bg-brand' : 'bg-border',
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
