import { describe, expect, it } from 'vitest';
import { createToastQueueReducer } from './toastQueue';

const item = (id: string) => ({
  id,
  variant: 'info' as const,
  message: id,
  duration: 6000,
  dismissible: false,
  dismissLabel: 'Dismiss notification',
});

describe('createToastQueueReducer', () => {
  const reduce = createToastQueueReducer(2);

  it('shows toasts until maxVisible then queues the rest', () => {
    let state = reduce({ active: [], pending: [] }, { type: 'enqueue', item: item('a') });
    state = reduce(state, { type: 'enqueue', item: item('b') });
    expect(state.active.map((toast) => toast.id)).toEqual(['a', 'b']);
    state = reduce(state, { type: 'enqueue', item: item('c') });
    expect(state.active.map((toast) => toast.id)).toEqual(['a', 'b']);
    expect(state.pending.map((toast) => toast.id)).toEqual(['c']);
  });

  it('promotes the next pending toast when one is dismissed', () => {
    const state = reduce(
      { active: [item('a'), item('b')], pending: [item('c')] },
      {
        type: 'dismiss',
        id: 'a',
      },
    );
    expect(state.active.map((toast) => toast.id)).toEqual(['b', 'c']);
    expect(state.pending).toEqual([]);
  });

  it('clears active and pending on dismissAll', () => {
    const state = reduce(
      { active: [item('a')], pending: [item('b')] },
      { type: 'dismissAll' },
    );
    expect(state.active).toEqual([]);
    expect(state.pending).toEqual([]);
  });
});
