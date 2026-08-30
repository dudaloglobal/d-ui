import { useState, type ReactElement } from 'react';
import { cx } from '../../lib/cx';
import { Popover, type PopoverPlacement, type PopoverRadius } from './Popover';

/** Jeu Google Meet : cœur, pouces, fête, applaudissements, visages. */
export const REACTION_EMOJIS = [
  '💖',
  '👍',
  '🎉',
  '👏',
  '😂',
  '😮',
  '😢',
  '🤔',
  '👎',
] as const;

export type ReactionEmoji = (typeof REACTION_EMOJIS)[number];

const DEFAULT_LABELS: Record<ReactionEmoji, string> = {
  '💖': 'Cœur étincelant',
  '👍': 'Pouce en l’air',
  '🎉': 'Cotillons',
  '👏': 'Applaudissements',
  '😂': 'Larmes de joie',
  '😮': 'Surprise',
  '😢': 'Larmes',
  '🤔': 'Réflexion',
  '👎': 'Pouce en bas',
};

export type EmojiPopoverProps = {
  children: ReactElement;
  onSelect?: (emoji: ReactionEmoji) => void;
  placement?: PopoverPlacement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  /** Arrondi des coins du panneau. Défaut : `md`. */
  radius?: PopoverRadius;
  className?: string;
  /** Noms accessibles. Défaut : libellés français. */
  labels?: Partial<Record<ReactionEmoji, string>>;
  'aria-label'?: string;
};

export function EmojiPopover({
  children,
  onSelect,
  placement = 'top',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  radius,
  className,
  labels,
  'aria-label': ariaLabel = 'Réactions',
}: EmojiPopoverProps) {
  const isControlled = openProp !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = disabled ? false : (openProp ?? uncontrolledOpen);

  const setOpen = (next: boolean) => {
    if (disabled && next) return;
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  const pick = (emoji: ReactionEmoji) => {
    onSelect?.(emoji);
    setOpen(false);
  };

  const nameOf = (emoji: ReactionEmoji) => labels?.[emoji] ?? DEFAULT_LABELS[emoji];

  return (
    <Popover
      unstyled
      arrow={false}
      trapFocus
      placement={placement}
      open={open}
      onOpenChange={setOpen}
      disabled={disabled}
      radius={radius}
      aria-label={ariaLabel}
      className={cx('d-ui-emoji-popover', className)}
      content={
        <div className="flex items-center">
          {REACTION_EMOJIS.map((emoji) => (
            <button
              key={emoji}
              type="button"
              className="d-ui-emoji-popover-btn"
              aria-label={nameOf(emoji)}
              onClick={() => pick(emoji)}
            >
              <span aria-hidden>{emoji}</span>
            </button>
          ))}
        </div>
      }
    >
      {children}
    </Popover>
  );
}
