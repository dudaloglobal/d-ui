import type { ReactNode } from 'react';
import type { FeedbackVariant } from '../feedback/feedbackSurface';

export type ToastItem = {
  id: string;
  variant: FeedbackVariant;
  message: ReactNode;
  actionLabel?: string;
  onActionClick?: () => void;
  /** Milliseconds. `0` disables auto-dismiss. */
  duration: number;
  dismissible: boolean;
  dismissLabel: string;
};

export type ToastQueueState = {
  active: ToastItem[];
  pending: ToastItem[];
};

export function createToastQueueReducer(maxVisible: number) {
  return function toastQueueReducer(
    state: ToastQueueState,
    action:
      | { type: 'enqueue'; item: ToastItem }
      | { type: 'dismiss'; id: string }
      | { type: 'dismissAll' },
  ): ToastQueueState {
    switch (action.type) {
      case 'enqueue': {
        if (state.active.length < maxVisible) {
          return { ...state, active: [...state.active, action.item] };
        }
        return { ...state, pending: [...state.pending, action.item] };
      }
      case 'dismiss': {
        const active = state.active.filter((item) => item.id !== action.id);
        const pending = [...state.pending];
        while (active.length < maxVisible && pending.length > 0) {
          const next = pending.shift();
          if (next) active.push(next);
        }
        return { active, pending };
      }
      case 'dismissAll':
        return { active: [], pending: [] };
      default:
        return state;
    }
  };
}
