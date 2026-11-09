import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
} from 'react';
import { VisuallyHidden } from '../../a11y/VisuallyHidden';
import { cx } from '../../lib/cx';
import { cornerRadiusClass, type CornerRadius } from '../../lib/cornerRadius';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPosition = 'start' | 'end';
export type ButtonLoadingIndicator = 'spinner' | 'bounce';
export type ButtonRadius = CornerRadius;

type ButtonOwn = {
  /**
   * Emphase. `"primary"` est forte, `"secondary"` moyenne, `"ghost"` faible,
   * `"destructive"` irréversible. Une seule action forte par vue.
   */
  variant?: ButtonVariant;
  /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les actions aérées. */
  size?: ButtonSize;
  /** Remplace l’icône par un indicateur, pose `aria-busy`. Le libellé reste visible. */
  loading?: boolean;
  /** `"spinner"` (défaut) ou `"bounce"` (trois points). Utilisé si `loading` est posé. */
  loadingIndicator?: ButtonLoadingIndicator;
  /** Icône décorative. Ne remplace pas le nom accessible. */
  icon?: ReactNode;
  /** Position de l’icône : `"start"` (début) ou `"end"` (fin). */
  iconPosition?: ButtonIconPosition;
  /** Étend le bouton à la largeur du conteneur. */
  fullWidth?: boolean;
  /** Arrondi des coins. Défaut : `md`. */
  radius?: ButtonRadius;
  /**
   * État bascule (emphase moyenne/faible). Pose `aria-pressed`.
   * Ignoré quand `href` est posé : un lien n’est pas une bascule.
   */
  isSelected?: boolean;
  /**
   * Ouvre dans un nouvel onglet. Ignoré sans `href`.
   * Ajoute `rel="noopener noreferrer"` et annonce l'ouverture.
   */
  external?: boolean;
  /** Texte ajouté au nom accessible d'un lien externe. Défaut anglais. */
  externalLabel?: string;
  /** Désactive le bouton, ou le lien (`aria-disabled`, le clic ne part pas). */
  disabled?: boolean;
  /**
   * Si présent, le contrôle est un lien `<a>` habillé en bouton.
   * Sans `href`, il reste un `<button>`.
   */
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: string;
};

export type ButtonProps = ButtonOwn &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwn | 'type'> & {
    type?: 'button' | 'submit' | 'reset';
  };

const variantClass: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-on-brand hover:bg-brand-hover',
  secondary: 'bg-surface-muted text-fg border border-border hover:bg-surface-hover',
  ghost: 'bg-transparent text-fg hover:bg-surface-muted',
  destructive: 'bg-danger text-on-danger hover:brightness-95',
};

const sizeClass: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-5 text-lg',
};

/*
 * Les deux indicateurs sont décoratifs et symétriques : la mécanique
 * d'animation vit dans la feuille de styles (`.d-ui-spinner`,
 * `.d-ui-button-bounce`), pas dans un composant exporté. L'anneau se dimensionne
 * en `1em` pour suivre la taille du bouton sans table de correspondance.
 */
function Ring() {
  return (
    <span
      className="d-ui-spinner inline-block size-[1em] shrink-0 border-2"
      aria-hidden="true"
    />
  );
}

function Bounce() {
  return (
    <span className="d-ui-button-bounce" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function IconSlot({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0" aria-hidden="true">
      {children}
    </span>
  );
}

const selectedClass: Partial<Record<ButtonVariant, string>> = {
  secondary: 'bg-surface-hover border-brand',
  ghost: 'bg-surface-muted',
};

function faceClass({
  variant,
  size,
  radius,
  fullWidth,
  isSelected,
  className,
  link,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  radius: ButtonRadius;
  fullWidth: boolean;
  isSelected?: boolean;
  className?: string;
  link?: boolean;
}) {
  return cx(
    'inline-flex items-center justify-center gap-2 font-medium no-underline',
    'transition-colors',
    cornerRadiusClass[radius],
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
    'disabled:pointer-events-none disabled:opacity-50',
    link && 'aria-disabled:pointer-events-none aria-disabled:opacity-50',
    variantClass[variant],
    sizeClass[size],
    fullWidth && 'w-full min-w-0',
    isSelected ? selectedClass[variant] : undefined,
    className,
  );
}

function Face({
  loading,
  loadingIndicator,
  icon,
  iconPosition,
  children,
  external,
  externalLabel,
}: {
  loading: boolean;
  loadingIndicator: ButtonLoadingIndicator;
  icon?: ReactNode;
  iconPosition: ButtonIconPosition;
  children: ReactNode;
  external?: boolean;
  externalLabel: string;
}) {
  const showStartIcon = !loading && icon && iconPosition === 'start';
  const showEndIcon = !loading && icon && iconPosition === 'end';
  return (
    <>
      {loading ? loadingIndicator === 'bounce' ? <Bounce /> : <Ring /> : null}
      {showStartIcon ? <IconSlot>{icon}</IconSlot> : null}
      {children}
      {showEndIcon ? <IconSlot>{icon}</IconSlot> : null}
      {external ? <VisuallyHidden> {externalLabel}</VisuallyHidden> : null}
    </>
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  loading = false,
  loadingIndicator = 'spinner',
  icon,
  iconPosition = 'start',
  fullWidth = false,
  radius = 'md',
  isSelected,
  external = false,
  externalLabel = '(opens in a new tab)',
  href,
  target,
  rel,
  onClick,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  const isDisabled = Boolean(disabled || loading);
  const face = (
    <Face
      loading={loading}
      loadingIndicator={loadingIndicator}
      icon={icon}
      iconPosition={iconPosition}
      external={href !== undefined && external && rest['aria-label'] === undefined}
      externalLabel={externalLabel}
    >
      {children}
    </Face>
  );
  const classNames = faceClass({
    variant,
    size,
    radius,
    fullWidth,
    isSelected: href === undefined ? isSelected : undefined,
    className,
    link: href !== undefined,
  });

  if (href !== undefined) {
    const labelled = rest['aria-label'];
    const linkName =
      external && typeof labelled === 'string' && !labelled.includes(externalLabel)
        ? `${labelled} ${externalLabel}`
        : labelled;
    return (
      <a
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        aria-label={linkName}
        href={href}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        className={classNames}
        target={external ? (target ?? '_blank') : target}
        rel={external ? (rel ?? 'noopener noreferrer') : rel}
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
          if (isDisabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event as unknown as MouseEvent<HTMLButtonElement>);
        }}
      >
        {face}
      </a>
    );
  }

  return (
    <button
      {...rest}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-pressed={typeof isSelected === 'boolean' ? isSelected : undefined}
      className={classNames}
      onClick={onClick}
    >
      {face}
    </button>
  );
}
