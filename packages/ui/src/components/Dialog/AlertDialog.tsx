import type { ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { Button } from '../Button/Button';
import { DefaultFeedbackIcon } from '../feedback/FeedbackIcons';
import { feedbackIconClass } from '../feedback/feedbackSurface';
import type { FeedbackVariant } from '../feedback/feedbackSurface';
import { Dialog, type DialogProps, type DialogSize } from './Dialog';
import { DialogActions, DialogDescription, DialogTitle } from './DialogParts';

export type AlertDialogKind = 'warning' | 'error' | 'success';

export type AlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  children: ReactNode;
  /**
   * Variante visuelle LumApps : icône teintée à gauche du titre.
   *
   * Sans `kind`, le dialogue est une confirmation neutre (deux actions).
   */
  kind?: AlertDialogKind;
  size?: DialogSize;
  /** Libellé du bouton principal. */
  confirmLabel?: string;
  onConfirm?: () => void;
  /** Si présent, le dialogue devient une confirmation (deux actions). */
  cancelLabel?: string;
  onCancel?: () => void;
} & Pick<DialogProps, 'initialFocus'>;

const kindVariant: Record<AlertDialogKind, FeedbackVariant> = {
  warning: 'warning',
  error: 'danger',
  success: 'success',
};

const kindIconBg: Record<AlertDialogKind, string> = {
  warning: 'bg-warning/15',
  error: 'bg-danger/15',
  success: 'bg-success/15',
};

/**
 * Dialogue pré-composé LumApps (`AlertDialog`).
 *
 * - **Confirmation** : `cancelLabel` + `confirmLabel` — on ne sort que par une
 *   action explicite (pas de clic extérieur ni de croix).
 * - **Alerte** : `kind` (`warning`, `error`, `success`) + une seule action
 *   `confirmLabel`.
 */
export function AlertDialog({
  open,
  onOpenChange,
  title,
  children,
  kind,
  size = 'regular',
  confirmLabel = 'OK',
  onConfirm,
  cancelLabel,
  onCancel,
  initialFocus,
}: AlertDialogProps) {
  const close = () => onOpenChange(false);
  const handleConfirm = () => {
    onConfirm?.();
    close();
  };
  const handleCancel = () => {
    onCancel?.();
    close();
  };

  const variant = kind ? kindVariant[kind] : undefined;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      alert
      size={size}
      initialFocus={initialFocus}
    >
      {kind ? (
        <div className="flex gap-4">
          <span
            className={cx(
              'flex size-10 shrink-0 items-center justify-center rounded-full',
              kindIconBg[kind],
              feedbackIconClass(variant!),
            )}
          >
            <DefaultFeedbackIcon variant={variant!} />
          </span>
          <div className="min-w-0 flex-1">
            <DialogTitle className="pe-0">{title}</DialogTitle>
            <DialogDescription>{children}</DialogDescription>
          </div>
        </div>
      ) : (
        <>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </>
      )}
      <DialogActions>
        {cancelLabel ? (
          <Button variant="secondary" onClick={handleCancel}>
            {cancelLabel}
          </Button>
        ) : null}
        <Button variant="primary" onClick={handleConfirm}>
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
