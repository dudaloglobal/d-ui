import { useState, type HTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { IconButton } from '../Button/IconButton';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { CloseGlyph, DefaultFeedbackIcon } from '../feedback/FeedbackIcons';
import {
  feedbackIconClass,
  feedbackLiveRole,
  feedbackSurfaceStyle,
  feedbackVariantColor,
  type FeedbackVariant,
} from '../feedback/feedbackSurface';

export type AlertVariant = FeedbackVariant;

export type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  variant?: AlertVariant;
  title?: ReactNode;
  icon?: ReactNode;
  /** Fond teinté et bordure. `false` = variante « trimmed » LumApps Message. */
  hasBackground?: boolean;
  /** Boutons ou liens (`Button`, `Link`). */
  actions?: ReactNode;
  /**
   * Affiche le bouton fermer. LumApps Message : seulement `info` + `hasBackground`.
   * Les autres combinaisons ignorent `dismissible`.
   */
  dismissible?: boolean;
  onDismiss?: () => void;
  /** Fallback anglais : `Dismiss alert`. */
  dismissLabel?: string;
  /** Ouvert contrôlé. Sinon l’alerte se masque après fermeture. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

/**
 * Message inline permanent (LumApps Message). Distinct de `Notification` et de Toast (DS-033).
 */
export function Alert({
  variant = 'info',
  title,
  icon,
  hasBackground = true,
  actions,
  dismissible = false,
  onDismiss,
  dismissLabel = 'Dismiss alert',
  open: openProp,
  defaultOpen = true,
  onOpenChange,
  className,
  style,
  children,
  ...rest
}: AlertProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const controlled = openProp !== undefined;
  const open = openProp ?? uncontrolledOpen;
  const role = feedbackLiveRole(variant);
  const showDismiss = dismissible && variant === 'info' && hasBackground;

  const setOpen = (next: boolean) => {
    if (!controlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
    if (!next) onDismiss?.();
  };

  if (!open) return null;

  const surface = hasBackground ? feedbackSurfaceStyle(variant) : undefined;
  const iconClass = feedbackIconClass(variant);

  return (
    <div
      {...rest}
      role={role}
      className={cx(
        'flex items-start gap-3 text-start',
        hasBackground ? 'rounded-md border px-3 py-2' : 'px-0 py-1',
        className,
      )}
      style={{ ...surface, ...style }}
    >
      <span className={cx('inline-flex shrink-0 pt-0.5', iconClass)}>
        {icon ?? <DefaultFeedbackIcon variant={variant} />}
      </span>
      <div className="min-w-0 flex-1">
        {title ? (
          <Heading level={3} size="body" className="mb-0.5 font-medium">
            {title}
          </Heading>
        ) : null}
        <Text as="div" size="body-sm" color={feedbackVariantColor(variant)}>
          {children}
        </Text>
        {actions ? (
          <div className="mt-2 flex flex-wrap items-center gap-2">{actions}</div>
        ) : null}
      </div>
      {showDismiss ? (
        <IconButton
          size="sm"
          variant="ghost"
          icon={<CloseGlyph />}
          aria-label={dismissLabel}
          onClick={() => setOpen(false)}
          className="shrink-0"
        />
      ) : null}
    </div>
  );
}
