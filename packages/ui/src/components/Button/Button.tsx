import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { cornerRadiusClass, type CornerRadius } from '../../lib/cornerRadius';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPosition = 'start' | 'end';
export type ButtonLoadingIndicator = 'spinner' | 'bounce';
export type ButtonRadius = CornerRadius;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Emphase. `"primary"` est forte, `"secondary"` moyenne, `"ghost"` faible.
   * Il ne doit pas y avoir plus d’un bouton à forte emphase dans une vue.
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
   * Si le libellé change déjà selon l’état, ce nom suffit.
   */
  isSelected?: boolean;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-on-brand hover:bg-brand-hover',
  secondary: 'bg-surface-muted text-fg border border-border hover:bg-surface-hover',
  ghost: 'bg-transparent text-fg hover:bg-surface-muted',
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

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  disabled,
  loading = false,
  loadingIndicator = 'spinner',
  icon,
  iconPosition = 'start',
  fullWidth = false,
  radius = 'md',
  isSelected,
  children,
  ...rest
}: ButtonProps) {
  const isDisabled = Boolean(disabled || loading);
  const showStartIcon = !loading && icon && iconPosition === 'start';
  const showEndIcon = !loading && icon && iconPosition === 'end';

  return (
    <button
      {...rest}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-pressed={typeof isSelected === 'boolean' ? isSelected : undefined}
      className={cx(
        'inline-flex items-center justify-center gap-2 font-medium',
        'transition-colors',
        cornerRadiusClass[radius],
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        'disabled:pointer-events-none disabled:opacity-50',
        variantClass[variant],
        sizeClass[size],
        fullWidth && 'w-full min-w-0',
        isSelected ? selectedClass[variant] : undefined,
        className,
      )}
    >
      {/* Sans `label` : décoratif. Le bouton porte déjà `aria-busy` et son libellé. */}
      {loading ? loadingIndicator === 'bounce' ? <Bounce /> : <Ring /> : null}
      {showStartIcon ? <IconSlot>{icon}</IconSlot> : null}
      {children}
      {showEndIcon ? <IconSlot>{icon}</IconSlot> : null}
    </button>
  );
}
