export type SortableId = string | number;

/** Déplacement annoncé au lecteur d’écran. Positions humaines, à partir de 1. */
export type SortableMove = {
  /** Nom de l’élément (`SortableItem label`, sinon son texte visible). */
  label: string;
  /** Position de départ. */
  from: number;
  /** Position courante ou d’arrivée. */
  to: number;
  /** Nombre d’éléments dans la liste. */
  count: number;
};

/** Textes lus par le lecteur d’écran. Fallback anglais ; passez la langue de l’app. */
export type SortableMessages = {
  /** Instructions liées à la poignée par `aria-describedby`. */
  instructions: string;
  /** Nom accessible de la poignée, à partir du `label` de l’élément. */
  handle: (label: string | undefined) => string;
  /** Élément saisi (Espace / Entrée ou pointeur). */
  pickedUp: (move: SortableMove) => string;
  /** Élément déplacé vers une nouvelle position. */
  moved: (move: SortableMove) => string;
  /** Élément déposé. */
  dropped: (move: SortableMove) => string;
  /** Déplacement annulé (Échap ou dépôt hors liste). */
  canceled: (move: SortableMove) => string;
};

export const defaultSortableMessages: SortableMessages = {
  instructions:
    'To pick up an item, press Space or Enter. Use the arrow keys to move it, Space or Enter to drop it, Escape to cancel.',
  handle: (label) => (label ? `Reorder ${label}` : 'Reorder'),
  pickedUp: ({ label, from, count }) =>
    `${label} picked up. Position ${from} of ${count}.`,
  moved: ({ label, to, count }) => `${label} moved to position ${to} of ${count}.`,
  dropped: ({ label, to, count }) => `${label} dropped at position ${to} of ${count}.`,
  canceled: ({ label, from, count }) =>
    `Reordering canceled. ${label} is back at position ${from} of ${count}.`,
};

/** Retourne un nouveau tableau avec l’élément déplacé de `fromIndex` à `toIndex` (indices 0). */
export function moveSortableItem<T>(
  items: readonly T[],
  fromIndex: number,
  toIndex: number,
): T[] {
  const next = [...items];
  if (
    fromIndex === toIndex ||
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= next.length ||
    toIndex >= next.length
  ) {
    return next;
  }
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved as T);
  return next;
}
