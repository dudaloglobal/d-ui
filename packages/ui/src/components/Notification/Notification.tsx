import { useState, type HTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';
import { Text } from '../Text/Text';
import { CloseGlyph, DefaultFeedbackIcon } from '../feedback/FeedbackIcons';
import {
  feedbackNotificationIconStyle,
  feedbackNotificationShellStyle,
  type FeedbackVariant,
} from '../feedback/feedbackSurface';

export type NotificationVariant = FeedbackVariant;

export type NotificationProps = HTMLAttributes<HTMLDivElement> & {
  variant?: NotificationVariant;
  icon?: ReactNode;
  /** Fallback anglais : `Dismiss notification`. */
  dismissLabel?: string;
  /** Libellé du bouton d’action (LumApps « Info with callback »). */
  actionLabel?: string;
  onActionClick?: () => void;
  /** LumApps n’affiche pas de fermeture manuelle ; réservé aux cas contrôlés. */
  dismissible?: boolean;
  onDismiss?: () => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
};

/**
 * Toast LumApps (coin inférieur droit). La file / auto-dismiss relève de Toast (DS-033).
 */
export function Notification({
  variant = 'info',
  icon,
  dismissLabel = 'Dismiss notification',
  actionLabel,
  onActionClick,
  dismissible = false,
  onDismiss,
  open: openProp,
  defaultOpen = true,
  onOpenChange,
  className,
  style,
  children,
  ...rest
}: NotificationProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const controlled = openProp !== undefined;
  const open = openProp ?? uncontrolledOpen;

  const setOpen = (next: boolean) => {
    if (!controlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
    if (!next) onDismiss?.();
  };

  if (!open) return null;

  const showAction = Boolean(actionLabel && onActionClick);

  return (
    <div
      {...rest}
      role="alert"
      className={cx(
        'flex max-w-md min-h-[3.25rem] items-center overflow-hidden rounded text-start',
        className,
      )}
      style={{ ...feedbackNotificationShellStyle(), ...style }}
    >
      <span
        className="inline-flex size-[3.25rem] shrink-0 items-center justify-center"
        style={feedbackNotificationIconStyle(variant)}
        aria-hidden="true"
      >
        {icon ?? <DefaultFeedbackIcon variant={variant} />}
      </span>
      <div className="min-w-0 flex-1 px-4">
        <Text as="div" size="body-sm">
          {children}
        </Text>
      </div>
      {showAction ? (
        <div className="shrink-0 pe-2">
          <Button size="sm" variant="secondary" onClick={onActionClick}>
            {actionLabel}
          </Button>
        </div>
      ) : null}
      {dismissible ? (
        <IconButton
          size="sm"
          variant="ghost"
          icon={<CloseGlyph />}
          aria-label={dismissLabel}
          onClick={() => setOpen(false)}
          className="me-1 shrink-0"
        />
      ) : null}
    </div>
  );
}
