import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../lib/cx';

export type BadgeVariant =
  'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type BadgeAppearance = 'soft' | 'solid' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** Couleur sémantique. `"default"` = marque. `"neutral"` = hiérarchie, pas un statut. */
  variant?: BadgeVariant;
  /**
   * `"soft"` (défaut) : fond teinté. `"solid"` : couleur pleine.
   * `"outline"` : filet, fond transparent.
   */
  appearance?: BadgeAppearance;
  size?: BadgeSize;
  /** Point décoratif. Ne remplace pas le libellé. */
  dot?: boolean;
  /** Icône décorative. Ne remplace pas le nom accessible. */
  icon?: ReactNode;
};

const TOKEN: Record<Exclude<BadgeVariant, 'neutral'>, string> = {
  default: '--d-ui-color-brand',
  success: '--d-ui-color-success',
  warning: '--d-ui-color-warning',
  danger: '--d-ui-color-danger',
  info: '--d-ui-color-info',
};

const solidClass: Record<BadgeVariant, string> = {
  default: 'bg-brand text-on-brand',
  success: 'bg-success text-on-success',
  warning: 'bg-warning text-on-warning',
  danger: 'bg-danger text-on-danger',
  info: 'bg-info text-on-info',
  neutral: 'bg-fg text-bg',
};

const inkClass: Record<BadgeVariant, string> = {
  default: 'text-brand',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
  neutral: 'text-fg',
};

const sizeClass: Record<BadgeSize, string> = {
  sm: 'h-5 gap-1 px-1.5 text-xs',
  md: 'h-6 gap-1.5 px-2 text-sm',
  lg: 'h-7 gap-1.5 px-2.5 text-sm',
};

function IconSlot({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex shrink-0 [&_svg]:block [&_svg]:size-[1em]"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

/**
 * Pastille de statut ou de catégorie (Tailwind Plus Badge).
 *
 * Le texte (ou `aria-label`) porte le sens : la couleur seule ne suffit pas
 * (WCAG 1.4.1). Ce n’est pas un bouton.
 */
export function Badge({
  variant = 'default',
  appearance = 'soft',
  size = 'md',
  dot = false,
  icon,
  className,
  style,
  children,
  ...rest
}: BadgeProps) {
  const token = variant === 'neutral' ? undefined : TOKEN[variant];
  const softStyle =
    appearance === 'soft' && token
      ? {
          backgroundColor: `color-mix(in srgb, var(${token}) 14%, var(--d-ui-color-bg))`,
        }
      : undefined;

  return (
    <span
      {...rest}
      className={cx(
        'inline-flex max-w-full items-center rounded-full font-medium whitespace-nowrap',
        sizeClass[size],
        appearance === 'solid' && solidClass[variant],
        appearance === 'soft' && (variant === 'neutral' ? 'bg-surface-muted' : undefined),
        appearance === 'soft' && inkClass[variant],
        appearance === 'outline' && 'border bg-transparent',
        appearance === 'outline' &&
          (variant === 'neutral'
            ? 'border-border text-fg'
            : `border-current ${inkClass[variant]}`),
        className,
      )}
      style={softStyle || style ? { ...softStyle, ...style } : style}
    >
      {dot ? (
        <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
      ) : null}
      {icon ? <IconSlot>{icon}</IconSlot> : null}
      {children}
    </span>
  );
}
