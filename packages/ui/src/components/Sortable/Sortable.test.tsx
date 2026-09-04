import { useState } from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  DragHandle as DragHandleFromEntry,
  SortableItem as SortableItemFromEntry,
  SortableList as SortableListFromEntry,
  moveSortableItem as moveSortableItemFromEntry,
} from '../../index';
import { DragHandle } from './DragHandle';
import {
  SortableItem,
  SortableList,
  type SortableListElement,
  type SortableOrientation,
  type SortableReorder,
} from './Sortable';
import { moveSortableItem, type SortableMessages } from './sortableMessages';

const CHAPTERS = ['intro', 'vectors', 'maps'];
const LABELS: Record<string, string> = {
  intro: 'Introduction',
  vectors: 'Espaces vectoriels',
  maps: 'Applications linéaires',
};

const frenchMessages: Partial<SortableMessages> = {
  instructions: 'Espace pour saisir, flèches pour déplacer, Espace pour déposer.',
  handle: (label) => `Réordonner ${label}`,
  pickedUp: ({ label, from, count }) => `${label} saisi. Position ${from} sur ${count}.`,
  moved: ({ label, to, count }) => `${label} déplacé en position ${to} sur ${count}.`,
  dropped: ({ label, to, count }) => `${label} déposé en position ${to} sur ${count}.`,
  canceled: ({ label, from }) => `Annulé. ${label} reste en position ${from}.`,
};

function rectAt(top: number, height: number, width = 240): DOMRect {
  return {
    x: 0,
    y: top,
    top,
    left: 0,
    width,
    height,
    right: width,
    bottom: top + height,
    toJSON: () => ({}),
  } as DOMRect;
}

/** jsdom has no layout: stack every `li` 40px tall in DOM order so dnd-kit can find drop targets. */
function mockListLayout() {
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function (
    this: Element,
  ) {
    const li = this.closest('li');
    const parent = li?.parentElement;
    if (!li || !parent) return rectAt(0, 0, 0);
    const index = Array.from(parent.children).indexOf(li);
    return rectAt(index * 40, 40);
  });
}

function ChapterList({
  onReorder,
  orientation,
  as,
  disabled,
  disabledItem,
  messages,
  withLabels = true,
}: {
  onReorder?: (items: string[], reorder: SortableReorder<string>) => void;
  orientation?: SortableOrientation;
  as?: SortableListElement;
  disabled?: boolean;
  disabledItem?: string;
  messages?: Partial<SortableMessages>;
  withLabels?: boolean;
}) {
  const [items, setItems] = useState(CHAPTERS);
  return (
    <SortableList
      aria-label="Chapitres"
      items={items}
      orientation={orientation}
      as={as}
      disabled={disabled}
      messages={messages}
      onReorder={(next, reorder) => {
        setItems(next);
        onReorder?.(next, reorder);
      }}
    >
      {items.map((id) => (
        <SortableItem
          key={id}
          id={id}
          label={withLabels ? LABELS[id] : undefined}
          disabled={disabledItem === id}
        >
          <DragHandle />
          <span>{LABELS[id]}</span>
        </SortableItem>
      ))}
    </SortableList>
  );
}

function visibleOrder(): string[] {
  return screen.getAllByRole('listitem').map((item) => item.textContent ?? '');
}

describe('SortableList', () => {
  beforeEach(() => {
    mockListLayout();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('is exported from the package entrypoint', () => {
    expect(SortableListFromEntry).toBe(SortableList);
    expect(SortableItemFromEntry).toBe(SortableItem);
    expect(DragHandleFromEntry).toBe(DragHandle);
    expect(moveSortableItemFromEntry).toBe(moveSortableItem);
  });

  it('renders a named list of items with a named handle each', () => {
    render(<ChapterList />);
    const list = screen.getByRole('list', { name: 'Chapitres' });
    expect(list.tagName).toBe('UL');
    expect(list).toHaveAttribute('data-orientation', 'vertical');
    expect(within(list).getAllByRole('listitem')).toHaveLength(3);
    const handle = screen.getByRole('button', { name: 'Reorder Introduction' });
    expect(handle).toHaveAttribute('type', 'button');
    expect(handle).toHaveAttribute('aria-roledescription', 'sortable');
    expect(handle).not.toHaveAttribute('role');
    const instructionsId = handle.getAttribute('aria-describedby');
    expect(instructionsId).toBeTruthy();
    expect(document.getElementById(instructionsId as string)).toHaveTextContent(
      'To pick up an item, press Space or Enter.',
    );
    expect(
      screen.getByRole('button', { name: 'Reorder Applications linéaires' }),
    ).toBeVisible();
  });

  it('renders an ordered list and a grid when asked', () => {
    const { unmount } = render(<ChapterList as="ol" />);
    expect(screen.getByRole('list', { name: 'Chapitres' }).tagName).toBe('OL');
    unmount();
    render(<ChapterList orientation="grid" />);
    const grid = screen.getByRole('list', { name: 'Chapitres' });
    expect(grid).toHaveAttribute('data-orientation', 'grid');
    expect(grid.className).toMatch(/grid/);
  });

  it('reorders with the keyboard and announces every step', async () => {
    const user = userEvent.setup();
    const onReorder = vi.fn();
    render(<ChapterList onReorder={onReorder} messages={frenchMessages} />);
    const handle = screen.getByRole('button', { name: 'Réordonner Introduction' });
    expect(handle).toHaveAttribute('aria-describedby');
    expect(
      document.getElementById(handle.getAttribute('aria-describedby') as string),
    ).toHaveTextContent('Espace pour saisir');

    handle.focus();
    await user.keyboard('[Space]');
    const status = screen.getByRole('status');
    await waitFor(() =>
      expect(status).toHaveTextContent('Introduction saisi. Position 1 sur 3.'),
    );
    expect(handle).toHaveAttribute('aria-pressed', 'true');

    await user.keyboard('[ArrowDown]');
    await waitFor(() =>
      expect(status).toHaveTextContent('Introduction déplacé en position 2 sur 3.'),
    );

    await user.keyboard('[Space]');
    await waitFor(() =>
      expect(status).toHaveTextContent('Introduction déposé en position 2 sur 3.'),
    );
    expect(onReorder).toHaveBeenCalledTimes(1);
    expect(onReorder).toHaveBeenCalledWith(['vectors', 'intro', 'maps'], {
      id: 'intro',
      fromIndex: 0,
      toIndex: 1,
    });
    expect(visibleOrder()).toEqual([
      'Espaces vectoriels',
      'Introduction',
      'Applications linéaires',
    ]);
    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: 'Réordonner Introduction' }),
      ).toHaveFocus(),
    );
  });

  it('moves an item up and keeps the detail indices before the move', async () => {
    const user = userEvent.setup();
    const onReorder = vi.fn();
    render(<ChapterList onReorder={onReorder} />);
    screen.getByRole('button', { name: 'Reorder Applications linéaires' }).focus();
    await user.keyboard('[Enter]');
    await user.keyboard('[ArrowUp]');
    await user.keyboard('[ArrowUp]');
    await user.keyboard('[Enter]');
    expect(onReorder).toHaveBeenCalledWith(['maps', 'intro', 'vectors'], {
      id: 'maps',
      fromIndex: 2,
      toIndex: 0,
    });
    expect(visibleOrder()).toEqual([
      'Applications linéaires',
      'Introduction',
      'Espaces vectoriels',
    ]);
  });

  it('cancels with Escape without reordering', async () => {
    const user = userEvent.setup();
    const onReorder = vi.fn();
    render(<ChapterList onReorder={onReorder} messages={frenchMessages} />);
    screen.getByRole('button', { name: 'Réordonner Introduction' }).focus();
    await user.keyboard('[Space]');
    await user.keyboard('[ArrowDown]');
    await user.keyboard('[Escape]');
    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(
        'Annulé. Introduction reste en position 1.',
      ),
    );
    expect(onReorder).not.toHaveBeenCalled();
    expect(visibleOrder()).toEqual([
      'Introduction',
      'Espaces vectoriels',
      'Applications linéaires',
    ]);
  });

  it('falls back to the item text for announcements and to a plain handle name', async () => {
    const user = userEvent.setup();
    render(<ChapterList withLabels={false} />);
    const handles = screen.getAllByRole('button', { name: 'Reorder' });
    expect(handles).toHaveLength(3);
    (handles[0] as HTMLElement).focus();
    await user.keyboard('[Space]');
    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(
        'Introduction picked up. Position 1 of 3.',
      ),
    );
  });

  it('disables every handle when the list is disabled', async () => {
    const user = userEvent.setup();
    const onReorder = vi.fn();
    render(<ChapterList disabled onReorder={onReorder} />);
    const handle = screen.getByRole('button', { name: 'Reorder Introduction' });
    expect(handle).toBeDisabled();
    expect(handle).not.toHaveAttribute('aria-disabled');
    handle.focus();
    await user.keyboard('[Space]');
    await user.keyboard('[ArrowDown]');
    await user.keyboard('[Space]');
    expect(onReorder).not.toHaveBeenCalled();
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
  });

  it('locks a single item while the others stay movable', async () => {
    const user = userEvent.setup();
    const onReorder = vi.fn();
    render(<ChapterList disabledItem="vectors" onReorder={onReorder} />);
    expect(
      screen.getByRole('button', { name: 'Reorder Espaces vectoriels' }),
    ).toBeDisabled();
    const handle = screen.getByRole('button', { name: 'Reorder Introduction' });
    expect(handle).toBeEnabled();
    handle.focus();
    await user.keyboard('[Space]');
    await user.keyboard('[ArrowDown]');
    await user.keyboard('[Space]');
    expect(onReorder).toHaveBeenCalledWith(['vectors', 'intro', 'maps'], {
      id: 'intro',
      fromIndex: 0,
      toIndex: 1,
    });
  });

  it('forwards className and data attributes to the list and items', () => {
    render(
      <SortableList
        items={['a']}
        onReorder={() => undefined}
        className="my-list"
        data-testid="list"
      >
        <SortableItem id="a" className="my-item" data-testid="item">
          <DragHandle size="sm" className="my-handle" />A
        </SortableItem>
      </SortableList>,
    );
    expect(screen.getByTestId('list')).toHaveClass('my-list');
    expect(screen.getByTestId('item')).toHaveClass('my-item');
    const handle = screen.getByRole('button', { name: 'Reorder' });
    expect(handle).toHaveClass('my-handle');
    expect(handle.className).toMatch(/h-8/);
  });
});

describe('DragHandle', () => {
  it('honours an explicit aria-label inside a sortable item', () => {
    render(
      <SortableList items={['a']} onReorder={() => undefined}>
        <SortableItem id="a" label="Alpha">
          <DragHandle aria-label="Déplacer Alpha" />
        </SortableItem>
      </SortableList>,
    );
    expect(screen.getByRole('button', { name: 'Déplacer Alpha' })).toBeVisible();
  });

  it('renders a bare named button outside a sortable item', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<DragHandle onClick={onClick} />);
    const handle = screen.getByRole('button', { name: 'Reorder' });
    expect(handle).not.toHaveAttribute('aria-roledescription');
    await user.click(handle);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('moveSortableItem', () => {
  it('moves an item forward and backward without mutating the input', () => {
    const items = ['a', 'b', 'c', 'd'];
    expect(moveSortableItem(items, 0, 2)).toEqual(['b', 'c', 'a', 'd']);
    expect(moveSortableItem(items, 3, 1)).toEqual(['a', 'd', 'b', 'c']);
    expect(items).toEqual(['a', 'b', 'c', 'd']);
  });

  it('returns a copy when the move is a no-op or out of range', () => {
    const items = ['a', 'b'];
    expect(moveSortableItem(items, 1, 1)).toEqual(items);
    expect(moveSortableItem(items, -1, 0)).toEqual(items);
    expect(moveSortableItem(items, 0, 5)).toEqual(items);
    expect(moveSortableItem(items, 0, 1)).not.toBe(items);
  });
});
