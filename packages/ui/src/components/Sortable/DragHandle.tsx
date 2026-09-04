import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cx } from '../../lib/cx';
import { useSortableItemContext, useSortableListContext } from './Sortable';
import { defaultSortableMessages } from './sortableMessages';

export type DragHandleSize = 'sm' | 'md' | 'lg';

export type DragHandleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** `"sm"` pour les rangs denses, `"md"` par défaut, `"lg"` pour les tuiles. */
  size?: DragHandleSize;
  /** Nom accessible. Défaut : `messages.handle(label)` de la liste (« Reorder … »). */
  'aria-label'?: string;
};

const sizeClass: Record<DragHandleSize, string> = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
};

function GripIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="6" cy="4" r="1.25" />
      <circle cx="10" cy="4" r="1.25" />
      <circle cx="6" cy="8" r="1.25" />
      <circle cx="10" cy="8" r="1.25" />
      <circle cx="6" cy="12" r="1.25" />
      <circle cx="10" cy="12" r="1.25" />
    </svg>
  );
}

/**
 * Poignée de réordonnancement : un vrai `<button>`, seul activateur d’un
 * `SortableItem` (pointeur, tactile, clavier). Hors `SortableItem`, un bouton
 * poignée nu : passez vos propres écouteurs dnd-kit.
 */
export const DragHandle = forwardRef<HTMLButtonElement, DragHandleProps>(
  function DragHandle(
    { size = 'md', className, disabled, 'aria-label': ariaLabel, ...rest },
    ref,
  ) {
    const item = useSortableItemContext();
    const list = useSortableListContext();
    const isDisabled = Boolean(disabled || item?.disabled);
    const messages = list?.messages ?? defaultSortableMessages;
    // `role`, `tabIndex` et `aria-disabled` sont portés par le bouton natif
    // (`disabled`) ; on garde pressed, roledescription et describedby → instructions.
    const {
      role: _role,
      tabIndex: _tabIndex,
      'aria-disabled': _ariaDisabled,
      ...ariaAttributes
    } = item?.attributes ?? {};

    return (
      <button
        {...rest}
        {...ariaAttributes}
        {...(isDisabled ? null : item?.listeners)}
        ref={(node) => {
          item?.setActivatorNodeRef(node);
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        type="button"
        disabled={isDisabled}
        aria-label={ariaLabel ?? messages.handle(item?.label)}
        className={cx(
          'inline-flex shrink-0 touch-none items-center justify-center rounded-md text-fg-muted',
          'hover:bg-surface-muted hover:text-fg',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
          'disabled:cursor-not-allowed disabled:opacity-50',
          item?.isDragging ? 'cursor-grabbing' : 'cursor-grab',
          sizeClass[size],
          className,
        )}
      >
        <GripIcon />
      </button>
    );
  },
);
