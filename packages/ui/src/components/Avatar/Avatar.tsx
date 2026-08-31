import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cx } from '../../lib/cx';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type AvatarProps = HTMLAttributes<HTMLSpanElement> & {
  /** Photo. Si le chargement échoue, initiales puis icône. */
  src?: string;
  /**
   * Nom accessible de l’image. Défaut : `name`. `""` = décorative (un texte
   * voisin porte déjà le sens).
   */
  alt?: string;
  /**
   * Nom de la personne. Sert de nom accessible et, sans `initials`, aux
   * deux lettres du fallback.
   */
  name?: string;
  /** Deux lettres max. Sinon dérivé de `name`. */
  initials?: string;
  size?: AvatarSize;
  /** Carré arrondi au lieu du cercle (Tailwind Plus `square`). */
  square?: boolean;
};

const sizeClass: Record<AvatarSize, string> = {
  xs: 'size-6 text-[0.625rem]',
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-12 text-base',
  xl: 'size-14 text-lg',
};

export function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) {
    return Array.from(parts[0] ?? '')
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
  const first = Array.from(parts[0] ?? '')[0] ?? '';
  const last = Array.from(parts[parts.length - 1] ?? '')[0] ?? '';
  return `${first}${last}`.toUpperCase();
}

function UserFallback() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-[58%]"
    >
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
    </svg>
  );
}

/**
 * Portrait : photo, initiales, ou icône (Tailwind Plus Avatar).
 *
 * Le fallback (initiales ou silhouette) reste nommé : `name`, sinon `alt`
 * non vide. Sans les deux, le portrait est décoratif (`aria-hidden`).
 */
export function Avatar({
  src,
  alt,
  name,
  initials,
  size = 'md',
  square = false,
  className,
  ...rest
}: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;
  const resolvedInitials = (initials ?? (name ? initialsFromName(name) : '')).slice(0, 2);
  const accessibleName = name || (alt ? alt : undefined);
  const imageAlt = alt !== undefined ? alt : (name ?? '');
  const labelFallback = !showImage && accessibleName;

  return (
    <span
      {...rest}
      role={labelFallback ? 'img' : undefined}
      aria-label={labelFallback ? accessibleName : undefined}
      aria-hidden={!showImage && !accessibleName ? true : undefined}
      className={cx(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden',
        'bg-surface-muted font-medium text-fg select-none',
        square ? 'rounded-md' : 'rounded-full',
        sizeClass[size],
        className,
      )}
    >
      {showImage ? (
        <img
          src={src}
          alt={imageAlt}
          className="size-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : resolvedInitials ? (
        <span aria-hidden="true">{resolvedInitials}</span>
      ) : (
        <UserFallback />
      )}
    </span>
  );
}

export type AvatarGroupProps = HTMLAttributes<HTMLDivElement> & {
  size?: AvatarSize;
  /** Nombre d’avatars visibles. Le reste devient « +N ». */
  max?: number;
  /** Nom du groupe. Fallback anglais : `Avatar group`. */
  label?: string;
  /** Nom du surplus. Reçoit le nombre caché. Fallback anglais : `N more`. */
  overflowLabel?: (count: number) => string;
  children?: ReactNode;
};

function isAvatarElement(child: ReactNode): child is ReactElement<AvatarProps> {
  return isValidElement(child);
}

/**
 * Pile d’avatars qui se chevauchent (Tailwind Plus Avatar group).
 *
 * Chaque enfant garde son nom. Le groupe a le sien (`label`). Le pastille
 * « +N » est nommée (`overflowLabel`).
 */
export function AvatarGroup({
  size = 'md',
  max,
  label = 'Avatar group',
  overflowLabel = (count) => `${count} more`,
  className,
  children,
  ...rest
}: AvatarGroupProps) {
  const items = Children.toArray(children).filter(isAvatarElement);
  const visible = typeof max === 'number' ? items.slice(0, Math.max(0, max)) : items;
  const hiddenCount =
    typeof max === 'number' ? Math.max(0, items.length - visible.length) : 0;

  return (
    <div
      {...rest}
      role="group"
      aria-label={label}
      className={cx('flex items-center -space-x-2', className)}
    >
      {visible.map((child, index) =>
        cloneElement(child, {
          size: child.props.size ?? size,
          className: cx('ring-2 ring-bg', child.props.className),
          style: { ...child.props.style, zIndex: index + 1 },
        }),
      )}
      {hiddenCount > 0 ? (
        <span
          className={cx(
            'relative inline-flex items-center justify-center rounded-full',
            'bg-surface-muted font-medium text-fg ring-2 ring-bg',
            sizeClass[size],
          )}
          style={{ zIndex: visible.length + 1 }}
          role="img"
          aria-label={overflowLabel(hiddenCount)}
        >
          <span aria-hidden="true">+{hiddenCount}</span>
        </span>
      ) : null}
    </div>
  );
}
