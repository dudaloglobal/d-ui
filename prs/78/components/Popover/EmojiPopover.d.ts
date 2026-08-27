import { ReactElement } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { PopoverPlacement } from './Popover';
/** Jeu Google Meet : cœur, pouces, fête, applaudissements, visages. */
export declare const REACTION_EMOJIS: readonly ["💖", "👍", "🎉", "👏", "😂", "😮", "😢", "🤔", "👎"];
export type ReactionEmoji = (typeof REACTION_EMOJIS)[number];
export type EmojiPopoverProps = {
    children: ReactElement;
    onSelect?: (emoji: ReactionEmoji) => void;
    placement?: PopoverPlacement;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    className?: string;
    /** Noms accessibles. Défaut : libellés français. */
    labels?: Partial<Record<ReactionEmoji, string>>;
    'aria-label'?: string;
};
export declare function EmojiPopover({ children, onSelect, placement, open: openProp, defaultOpen, onOpenChange, disabled, className, labels, 'aria-label': ariaLabel, }: EmojiPopoverProps): import("react").JSX.Element;
