import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cx } from '../../lib/cx';
import {
  uiColorInkClass,
  uiColorSoftStyle,
  uiColorSolidClass,
  type UiColor,
  type UiSize,
} from '../../lib/uiScale';
import { CloseGlyph } from '../feedback/FeedbackIcons';

export type TagVariant =
  'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type TagAppearance = 'soft' | 'solid' | 'outline';
export type TagSize = UiSize;
export type TagColor = UiColor;

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  /** Couleur sémantique. `"default"` = marque. `"neutral"` = hiérarchie, pas un statut. */
  variant?: TagVariant;
  /**
   * Couleur (tokens). Si absente, dérivée de `variant` (`default` → `brand`).
   * La couleur seule ne porte pas le sens.
   */
  color?: TagColor;
  /**
   * `"soft"` (défaut) : fond teinté. `"solid"` : couleur pleine.
   * `"outline"` : filet, fond transparent.
   */
  appearance?: TagAppearance;
  size?: TagSize;
  /** Point décoratif. Ne remplace pas le libellé. */
  dot?: boolean;
  /** Icône décorative. Ne remplace pas le nom accessible. */
  icon?: ReactNode;
  /** Affiche un bouton pour retirer l’étiquette. L’app démonte le `Tag`. */
  dismissible?: boolean;
  onDismiss?: () => void;
  /** Nom du bouton fermer. Fallback anglais : `Remove`. */
  dismissLabel?: string;
};

const tagSizeClass: Record<TagSize, string> = {
  xxs: 'h-3.5 gap-0.5 px-1 text-[0.625rem]',
  xs: 'h-4 gap-0.5 px-1.25 text-[0.625rem]',
  s: 'h-5 gap-1 px-1.5 text-xs',
  m: 'h-6 gap-1.5 px-2 text-sm',
  l: 'h-7 gap-1.5 px-2.5 text-sm',
  xl: 'h-8 gap-1.5 px-3 text-base',
  xxl: 'h-9 gap-2 px-3.5 text-base',
};

function variantColor(variant: TagVariant): TagColor {
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

function tagClassName({
  variant = 'default',
  color,
  appearance = 'soft',
  size = 'm',
  className,
}: Pick<TagProps, 'variant' | 'color' | 'appearance' | 'size' | 'className'>): string {
  const hue = color ?? variantColor(variant);
  return cx(
    'inline-flex max-w-full items-center rounded-full font-medium whitespace-nowrap',
    tagSizeClass[size],
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
  );
}

function tagSoftStyle(
  appearance: TagAppearance,
  color: TagColor | undefined,
  variant: TagVariant,
): { backgroundColor: string } | undefined {
  if (appearance !== 'soft') return undefined;
  return uiColorSoftStyle(color ?? variantColor(variant));
}

/**
 * Étiquette de statut ou de catégorie.
 *
 * Le texte (ou `aria-label`) porte le sens : la couleur seule ne suffit pas
 * (WCAG 1.4.1). Ce n’est pas un bouton. `dismissible` ajoute un vrai `<button>` ;
 * le parent retire le `Tag` après `onDismiss`. Pour un compteur sur un
 * contrôle, utilisez `Badge`.
 */
export function Tag({
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
}: TagProps) {
  const softStyle = tagSoftStyle(appearance, color, variant);

  return (
    <span
      {...rest}
      className={tagClassName({ variant, color, appearance, size, className })}
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
          onClick={onDismiss}
        >
          <CloseGlyph />
        </button>
      ) : null}
    </span>
  );
}

export type TagGroupProps = HTMLAttributes<HTMLDivElement> & {
  size?: TagSize;
  /** Nombre d’étiquettes visibles. Le reste devient « +N ». */
  max?: number;
  /** Nom du groupe. Fallback anglais : `Tags`. */
  label?: string;
  /** Nom du surplus. Reçoit le nombre caché. Fallback anglais : `N more`. */
  overflowLabel?: (count: number) => string;
  children?: ReactNode;
};

function isTagElement(child: ReactNode): child is ReactElement<TagProps> {
  return isValidElement(child);
}

/**
 * Rangée d’étiquettes. `max` masque le surplus derrière une pastille « +N ».
 */
export function TagGroup({
  size = 'm',
  max,
  label = 'Tags',
  overflowLabel = (count) => `${count} more`,
  className,
  children,
  ...rest
}: TagGroupProps) {
  const items = Children.toArray(children).filter(isTagElement);
  const visible = typeof max === 'number' ? items.slice(0, Math.max(0, max)) : items;
  const hiddenCount =
    typeof max === 'number' ? Math.max(0, items.length - visible.length) : 0;

  return (
    <div
      {...rest}
      role="group"
      aria-label={label}
      className={cx('flex flex-wrap items-center gap-1.5', className)}
    >
      {visible.map((child, index) =>
        cloneElement(child, {
          key: child.key ?? `tag-${index}`,
          size: child.props.size ?? size,
        }),
      )}
      {hiddenCount > 0 ? (
        <Tag size={size} variant="neutral" aria-label={overflowLabel(hiddenCount)}>
          <span aria-hidden="true">+{hiddenCount}</span>
        </Tag>
      ) : null}
    </div>
  );
}
