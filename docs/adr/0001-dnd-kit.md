# ADR 0001 — dnd-kit pour le glisser-déposer (DS-044)

- **Statut :** proposé — 2026-09-04
- **Ticket :** [DS-044](https://github.com/dudaloglobal/d-ui/issues/44)
- **Portée :** `SortableList`, `SortableItem`, `DragHandle`

## Contexte

DS-044 demande des primitives de réordonnancement (listes de chapitres, tuiles
de tableau de bord) avec **clavier obligatoire**, annonces lecteur d’écran,
pointeur **et** tactile, sans couplage Next.js ni Laravel. `docs/component-conventions.md`
exige un RFC / ADR pour toute dépendance runtime.

## Options étudiées

| Option                                       | Clavier + annonces                                                                     | Tactile                          | Poids / maintenance                                              | Verdict |
| -------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------- | ------- |
| **dnd-kit** (`@dnd-kit/core`, `sortable`)    | Capteur clavier, `aria-describedby`, région live et annonces personnalisables intégrés | `PointerSensor` + `touch-action` | ~10 kB gz, React seul, sans dépendance DOM globale               | retenu  |
| `@hello-pangea/dnd` (ex react-beautiful-dnd) | Bon clavier, annonces intégrées                                                        | oui                              | Listes 1D uniquement, pas de grille, API par render-props lourde | écarté  |
| Pragmatic drag and drop (Atlassian)          | Aucun clavier fourni : tout à écrire                                                   | oui                              | Bas niveau, adaptateur React à maintenir                         | écarté  |
| Pointer events natifs, sans librairie        | Tout à écrire (capteurs, collisions, annonces, auto-scroll)                            | à écrire                         | Zéro dépendance mais coût et risque a11y élevés                  | écarté  |

## Décision

Adopter **dnd-kit** :

- `@dnd-kit/core` — `DndContext`, capteurs pointeur + clavier, accessibilité
  (`announcements`, `screenReaderInstructions`, restauration du focus).
- `@dnd-kit/sortable` — `SortableContext`, `useSortable`, stratégies liste
  verticale / horizontale / grille, coordonnées clavier.
- `@dnd-kit/modifiers` — restriction d’axe selon `orientation`.
- `@dnd-kit/utilities` — sérialisation du `transform`.

Les quatre paquets sont des **dépendances runtime** de `d-ui`, externalisées
au build (`vite.config.ts`) comme `@floating-ui/react`.

## Règles d’usage dans `d-ui`

- La `DragHandle` (vrai `<button>`) est le **seul** activateur : pas d’élément
  entier glissable, pas de `div` avec `role="button"`.
- Liste **contrôlée** (`items` / `onReorder`). Pas d’état interne d’ordre.
- Textes lecteur d’écran via `messages` (fallback anglais).
- WCAG 2.2 **2.5.7** : le composant documente une alternative au pointeur simple
  (`moveSortableItem` + boutons Monter / Descendre) ; l’app doit la fournir.
- Hors périmètre : Kanban, dépôt de fichiers (`FileUpload`), déplacement
  d’événements de calendrier. Un besoin multi-conteneurs passera par un nouvel
  ADR, pas par une extension implicite de `SortableList`.

## Conséquences

- Plus : a11y éprouvée, grille et liste avec la même API, tactile sans
  bibliothèque de gestes supplémentaire.
- Moins : quatre paquets à suivre (Dependabot), transformations CSS gérées par
  la librairie (le `li` reçoit `transform` / `transition` inline).
- Tests : jsdom n’a pas de layout ; les tests Vitest simulent
  `getBoundingClientRect` pour les `li` afin d’exercer le clavier de bout en bout.
