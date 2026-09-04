import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cx } from '../../lib/cx';
import { VisuallyHidden } from '../../a11y/VisuallyHidden';
import { uiColorSolidClass } from '../../lib/uiScale';
import {
  Tag,
  type TagAppearance,
  type TagColor,
  type TagSize,
  type TagVariant,
} from '../Tag/Tag';

export type BadgePlacement = 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start';
export type BadgeVariant = TagVariant;
export type BadgeAppearance = TagAppearance;
export type BadgeSize = TagSize;
export type BadgeColor = TagColor;

const placementClass: Record<BadgePlacement, string> = {
  'top-end': 'top-0 end-0 translate-x-1/3 -translate-y-1/3',
  'top-start': 'top-0 start-0 -translate-x-1/3 -translate-y-1/3',
  'bottom-end': 'bottom-0 end-0 translate-x-1/3 translate-y-1/3',
  'bottom-start': 'bottom-0 start-0 -translate-x-1/3 translate-y-1/3',
};

function overlayHue(variant: BadgeVariant, color?: BadgeColor): BadgeColor {
  return color ?? (variant === 'default' ? 'brand' : variant);
}

function overlayLabel(label: string | undefined, display: ReactNode): string | undefined {
  if (label) return label;
  if (typeof display === 'string' || typeof display === 'number') return String(display);
  return undefined;
}

function overlayDisplay(
  count: number | undefined,
  content: ReactNode,
  max: number,
): ReactNode {
  if (content !== undefined && typeof content !== 'number') return content;
  const value = typeof content === 'number' ? content : count;
  if (value === undefined) return null;
  if (value > max) return `${max}+`;
  return String(value);
}

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** Contrôle ou portrait sur lequel poser le compteur. Un seul élément. */
  children: ReactElement;
  /** Compteur. Masqué si `0` sauf `showZero`. Plafonné par `max`. */
  count?: number;
  /** Contenu d’incrustation. Un nombre est traité comme `count`. */
  content?: ReactNode;
  /** Plafond affiché (`99+`). Défaut : `99`. */
  max?: number;
  /** Affiche `0`. */
  showZero?: boolean;
  /** Point de statut, sans chiffre. */
  dot?: boolean;
  /**
   * Annoncé à côté de l’hôte (`aria-describedby`). Fallback : le chiffre
   * visible, en anglais s’il n’y a que le nombre.
   */
  label?: string;
  variant?: BadgeVariant;
  color?: BadgeColor;
  appearance?: BadgeAppearance;
  /** Taille de l’incrustation. `xxs` par défaut. */
  size?: BadgeSize;
  placement?: BadgePlacement;
};

/**
 * Compteur ou point posé sur un contrôle (`IconButton`, `Avatar`, `Button`).
 *
 * Ce n’est pas une pastille de libellé : pour « Publié » / « Brouillon »,
 * utilisez `Tag`. L’incrustation est décorative ; le nom passe par `label`
 * (relié à l’hôte).
 */
export function Badge({
  children,
  count,
  content,
  max = 99,
  showZero = false,
  dot = false,
  label,
  variant = 'danger',
  color,
  appearance = 'solid',
  size = 'xxs',
  placement = 'top-end',
  className,
  ...rest
}: BadgeProps) {
  const describedId = useId();
  const host = Children.only(children);
  if (!isValidElement(host)) {
    throw new Error('<Badge> attend un seul élément hôte (Avatar, IconButton, …).');
  }

  const display = overlayDisplay(count, content, max);
  const numeric = typeof content === 'number' ? content : count;
  const hideCount =
    !dot &&
    (numeric === undefined || (numeric === 0 && !showZero)) &&
    (content === undefined || typeof content === 'number');
  const showOverlay = dot || !hideCount;
  const announced = overlayLabel(label, dot ? undefined : display);
  const hue = overlayHue(variant, color);

  const hostProps = host.props as { 'aria-describedby'?: string };
  const describedBy = [hostProps['aria-describedby'], announced ? describedId : undefined]
    .filter(Boolean)
    .join(' ');

  const overlay = showOverlay ? (
    dot ? (
      <span
        className={cx(
          'absolute size-2.5 rounded-full ring-2 ring-bg',
          placementClass[placement],
          hue === 'neutral' ? 'bg-fg' : uiColorSolidClass[hue],
        )}
        aria-hidden="true"
      />
    ) : (
      <Tag
        variant={variant}
        color={color}
        appearance={appearance}
        size={size}
        aria-hidden="true"
        className={cx('absolute min-w-4 justify-center px-1', placementClass[placement])}
      >
        {display}
      </Tag>
    )
  ) : null;

  return (
    <span {...rest} className={cx('relative inline-flex', className)}>
      {announced
        ? cloneElement(host, {
            'aria-describedby': describedBy,
          } as Partial<typeof host.props>)
        : host}
      {announced ? <VisuallyHidden id={describedId}>{announced}</VisuallyHidden> : null}
      {overlay}
    </span>
  );
}
