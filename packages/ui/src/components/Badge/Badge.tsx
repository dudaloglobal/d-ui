import { useState, type HTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../lib/cx';
import {
  uiColorInkClass,
  uiColorSoftStyle,
  uiColorSolidClass,
  type UiColor,
  type UiSize,
} from '../../lib/uiScale';
import { CloseGlyph } from '../feedback/FeedbackIcons';

export type BadgeVariant =
  'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type BadgeAppearance = 'soft' | 'solid' | 'outline';
export type BadgeSize = UiSize;
export type BadgeColor = UiColor;

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** Couleur sémantique. `"default"` = marque. `"neutral"` = hiérarchie, pas un statut. */
  variant?: BadgeVariant;
  /**
   * Couleur (tokens). Si absente, dérivée de `variant` (`default` → `brand`).
   * La couleur seule ne porte pas le sens.
   */
  color?: BadgeColor;
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
  /** Affiche un bouton pour retirer la pastille. */
  dismissible?: boolean;
  onDismiss?: () => void;
  /** Nom du bouton fermer. Fallback anglais : `Remove`. */
  dismissLabel?: string;
};

const sizeClass: Record<BadgeSize, string> = {
  xxs: 'h-3.5 gap-0.5 px-1 text-[0.625rem]',
  xs: 'h-4 gap-0.5 px-1.25 text-[0.625rem]',
  s: 'h-5 gap-1 px-1.5 text-xs',
  m: 'h-6 gap-1.5 px-2 text-sm',
  l: 'h-7 gap-1.5 px-2.5 text-sm',
  xl: 'h-8 gap-1.5 px-3 text-base',
  xxl: 'h-9 gap-2 px-3.5 text-base',
};

function variantColor(variant: BadgeVariant): BadgeColor {
  return variant === 'default' ? 'brand' : variant;
}

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
 * (WCAG 1.4.1). Ce n’est pas un bouton. `dismissible` ajoute un vrai `<button>`.
 */
export function Badge({
  variant = 'default',
  color,
  appearance = 'soft',
  size = 'm',
  dot = false,
  icon,
  dismissible = false,
  onDismiss,
  dismissLabel = 'Remove',
  className,
  style,
  children,
  ...rest
}: BadgeProps) {
  const [open, setOpen] = useState(true);
  const hue = color ?? variantColor(variant);
  const softStyle = appearance === 'soft' ? uiColorSoftStyle(hue) : undefined;

  if (!open) return null;

  return (
    <span
      {...rest}
      className={cx(
        'inline-flex max-w-full items-center rounded-full font-medium whitespace-nowrap',
        sizeClass[size],
        appearance === 'solid' &&
          (hue === 'neutral' ? 'bg-fg text-bg' : uiColorSolidClass[hue]),
        appearance === 'soft' && (hue === 'neutral' ? 'bg-surface-muted' : undefined),
        appearance === 'soft' && uiColorInkClass[hue],
        appearance === 'outline' && 'border bg-transparent',
        appearance === 'outline' &&
          (hue === 'neutral'
            ? 'border-border text-fg'
            : `border-current ${uiColorInkClass[hue]}`),
        className,
      )}
      style={softStyle || style ? { ...softStyle, ...style } : style}
    >
      {dot ? (
        <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
      ) : null}
      {icon ? <IconSlot>{icon}</IconSlot> : null}
      {children}
      {dismissible ? (
        <button
          type="button"
          aria-label={dismissLabel}
          className={cx(
            '-me-0.5 inline-flex size-[1.15em] shrink-0 items-center justify-center rounded-full',
            'hover:bg-current/15',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 focus-visible:ring-offset-bg',
          )}
          onClick={() => {
            setOpen(false);
            onDismiss?.();
          }}
        >
          <CloseGlyph />
        </button>
      ) : null}
    </span>
  );
}
