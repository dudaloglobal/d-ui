import type { HTMLAttributes, ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type Active,
  type Announcements,
  type DragEndEvent,
  type DraggableAttributes,
  type DraggableSyntheticListeners,
  type Over,
  type UniqueIdentifier,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis, restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  SortableContext,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { cx } from '../../lib/cx';
import {
  defaultSortableMessages,
  moveSortableItem,
  type SortableId,
  type SortableMessages,
  type SortableMove,
} from './sortableMessages';

export type SortableOrientation = 'vertical' | 'horizontal' | 'grid';
export type SortableListElement = 'ul' | 'ol';

/** Détail d’un réordonnancement. Indices à partir de 0, avant déplacement. */
export type SortableReorder<T extends SortableId = SortableId> = {
  id: T;
  fromIndex: number;
  toIndex: number;
};

type SortableListContextValue = {
  disabled: boolean;
  messages: SortableMessages;
};

const SortableListContext = createContext<SortableListContextValue | null>(null);

type SortableItemContextValue = {
  attributes: DraggableAttributes;
  listeners: DraggableSyntheticListeners;
  setActivatorNodeRef: (element: HTMLElement | null) => void;
  disabled: boolean;
  label: string | undefined;
  isDragging: boolean;
};

const SortableItemContext = createContext<SortableItemContextValue | null>(null);

/** Contexte de la liste (messages, `disabled`). `null` hors de `SortableList`. */
export function useSortableListContext(): SortableListContextValue | null {
  return useContext(SortableListContext);
}

/** Contexte de l’élément (activateur dnd-kit). `null` hors de `SortableItem`. */
export function useSortableItemContext(): SortableItemContextValue | null {
  return useContext(SortableItemContext);
}

type SortableItemData = { getLabel: () => string };

function labelOf(entry: Active | Over): string {
  const data = entry.data.current as Partial<SortableItemData> | undefined;
  return data?.getLabel?.() ?? String(entry.id);
}

export type SortableListProps<T extends SortableId = SortableId> = Omit<
  HTMLAttributes<HTMLElement>,
  'children'
> & {
  /** Identifiants dans l’ordre affiché. Contrôlé : mettez à jour l’état dans `onReorder`. */
  items: readonly T[];
  /** Nouvel ordre + détail du déplacement (`id`, `fromIndex`, `toIndex`). */
  onReorder: (items: T[], reorder: SortableReorder<T>) => void;
  /**
   * `"vertical"` (défaut) : colonne, déplacement limité à l’axe vertical.
   * `"horizontal"` : ligne, déplacement limité à l’axe horizontal.
   * `"grid"` : grille, déplacement libre.
   */
  orientation?: SortableOrientation;
  /** `"ul"` (défaut) ou `"ol"` quand l’ordre a un sens pour tout le monde. */
  as?: SortableListElement;
  /** Bloque tout réordonnancement. Les poignées sont désactivées. */
  disabled?: boolean;
  /** Textes lecteur d’écran (poignée, instructions, annonces). Fallback anglais. */
  messages?: Partial<SortableMessages>;
  children?: ReactNode;
};

const orientationClass: Record<SortableOrientation, string> = {
  vertical: 'flex flex-col gap-2',
  horizontal: 'flex flex-row flex-wrap gap-2',
  grid: 'grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-2',
};

const strategyFor: Record<SortableOrientation, typeof verticalListSortingStrategy> = {
  vertical: verticalListSortingStrategy,
  horizontal: horizontalListSortingStrategy,
  grid: rectSortingStrategy,
};

const modifiersFor: Record<SortableOrientation, (typeof restrictToVerticalAxis)[]> = {
  vertical: [restrictToVerticalAxis],
  horizontal: [restrictToHorizontalAxis],
  grid: [],
};

/**
 * Liste réordonnable (dnd-kit) : pointeur, tactile et clavier via `DragHandle`.
 *
 * Contrôlée : `items` + `onReorder`. Le lecteur d’écran reçoit les annonces via
 * une région live ; localisez-les avec `messages`.
 */
export function SortableList<T extends SortableId = SortableId>({
  items,
  onReorder,
  orientation = 'vertical',
  as: Component = 'ul',
  disabled = false,
  messages: messagesProp,
  className,
  children,
  ...rest
}: SortableListProps<T>) {
  const contextId = useId();
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  const messages = useMemo<SortableMessages>(
    () => ({ ...defaultSortableMessages, ...messagesProp }),
    [messagesProp],
  );

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const moveOf = useCallback((active: Active, over: Over | null): SortableMove => {
    const current = itemsRef.current;
    const from = current.indexOf(active.id as T) + 1;
    const to = over ? current.indexOf(over.id as T) + 1 : from;
    return { label: labelOf(active), from, to: to || from, count: current.length };
  }, []);

  // dnd-kit signale « over » sur l’élément lui-même dès la saisie : on n’annonce
  // un déplacement que lorsque la cible change vraiment.
  const lastOverRef = useRef<UniqueIdentifier | null>(null);
  const announcements = useMemo<Announcements>(
    () => ({
      onDragStart: ({ active }) => {
        lastOverRef.current = active.id;
        return messages.pickedUp(moveOf(active, null));
      },
      onDragOver: ({ active, over }) => {
        if (!over || over.id === lastOverRef.current) return undefined;
        lastOverRef.current = over.id;
        return messages.moved(moveOf(active, over));
      },
      onDragEnd: ({ active, over }) =>
        over
          ? messages.dropped(moveOf(active, over))
          : messages.canceled(moveOf(active, null)),
      onDragCancel: ({ active }) => messages.canceled(moveOf(active, null)),
    }),
    [messages, moveOf],
  );

  function handleDragEnd({ active, over }: DragEndEvent) {
    setActiveId(null);
    if (!over || active.id === over.id) return;
    const fromIndex = items.indexOf(active.id as T);
    const toIndex = items.indexOf(over.id as T);
    if (fromIndex < 0 || toIndex < 0) return;
    onReorder(moveSortableItem(items, fromIndex, toIndex), {
      id: active.id as T,
      fromIndex,
      toIndex,
    });
  }

  const sortableItems = useMemo(() => [...items] as UniqueIdentifier[], [items]);
  const listContext = useMemo(() => ({ disabled, messages }), [disabled, messages]);

  return (
    <DndContext
      id={contextId}
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={modifiersFor[orientation]}
      accessibility={{
        announcements,
        screenReaderInstructions: { draggable: messages.instructions },
      }}
      onDragStart={({ active }) => setActiveId(active.id)}
      onDragCancel={() => setActiveId(null)}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={sortableItems} strategy={strategyFor[orientation]}>
        <SortableListContext.Provider value={listContext}>
          <Component
            {...rest}
            data-orientation={orientation}
            data-sorting={activeId != null || undefined}
            className={cx(
              'm-0 list-none p-0',
              orientationClass[orientation],
              activeId != null && 'select-none',
              className,
            )}
          >
            {children}
          </Component>
        </SortableListContext.Provider>
      </SortableContext>
    </DndContext>
  );
}

export type SortableItemProps = HTMLAttributes<HTMLLIElement> & {
  /** Identifiant présent dans `items`. */
  id: SortableId;
  /** Nom pour la poignée et les annonces. Défaut : texte visible de l’élément. */
  label?: string;
  /** Empêche de saisir cet élément. Les autres peuvent toujours passer devant ou derrière. */
  disabled?: boolean;
  children?: ReactNode;
};

/**
 * Élément d’une `SortableList` : un vrai `<li>`. Placez un `DragHandle` dedans :
 * c’est la poignée pour le pointeur, le tactile et le clavier.
 */
export function SortableItem({
  id,
  label,
  disabled = false,
  className,
  style,
  children,
  ...rest
}: SortableItemProps) {
  const list = useSortableListContext();
  const isDisabled = Boolean(disabled || list?.disabled);
  const nodeRef = useRef<HTMLLIElement | null>(null);

  const getLabel = useCallback(
    () => label ?? nodeRef.current?.textContent?.trim() ?? String(id),
    [id, label],
  );
  const data = useMemo<SortableItemData>(() => ({ getLabel }), [getLabel]);

  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({ id, data, disabled: { draggable: isDisabled, droppable: false } });

  const itemContext = useMemo<SortableItemContextValue>(
    () => ({
      attributes,
      listeners,
      setActivatorNodeRef,
      disabled: isDisabled,
      label,
      isDragging,
    }),
    [attributes, listeners, setActivatorNodeRef, isDisabled, label, isDragging],
  );

  const targeted = isOver && !isDragging;

  return (
    <SortableItemContext.Provider value={itemContext}>
      <li
        {...rest}
        ref={(node) => {
          nodeRef.current = node;
          setNodeRef(node);
        }}
        style={{ ...style, transform: CSS.Translate.toString(transform), transition }}
        data-dragging={isDragging || undefined}
        data-over={targeted || undefined}
        className={cx(
          'relative flex items-center gap-2 rounded-md border border-border-subtle bg-bg px-3 py-2 text-fg',
          isDragging && 'z-10 shadow-lg ring-2 ring-brand',
          targeted && 'bg-surface-muted',
          className,
        )}
      >
        {children}
      </li>
    </SortableItemContext.Provider>
  );
}
