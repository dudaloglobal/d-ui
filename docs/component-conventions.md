# Conventions d’écriture des composants

Référence pour implémenter un composant `d-ui` sans divergences d’API. Compléter avec [docs/accessibility.md](./accessibility.md) et [docs/tokens.md](./tokens.md).

## Layout des fichiers

Un composant = un dossier :

```
packages/ui/src/components/Name/
  Name.tsx
  Name.test.tsx
  Name.stories.tsx
  Name.mdx
```

Primitives transverses (`VisuallyHidden`, `SkipLink`) : `packages/ui/src/a11y/` (mêmes quatre fichiers).  
Thème : `packages/ui/src/theme/`.  
Exporter depuis `packages/ui/src/index.ts`.

## Storybook (documentation)

La page docs n’est pas de l’autodocs seul. Suivre `Button.mdx` / `TextInput.mdx` / `TimeAgo.mdx` :

- MDX en **français** (titre de composant = nom d’API anglais).
- Une section = une capacité, avec `<Canvas of={Stories.X} />`.
- `Accessibilité` + `À faire` / `À éviter` + `Propriétés` (`ArgTypes` avec `include`).
- Stories : `name` français, id d’export anglais, copy via `docs-locale.ts`, snippet **Show code** via `componentSource` (`import { Name } from 'd-ui'`).
- Descriptions d’ArgTypes en français dans `.storybook/arg-types.ts`.

Détail agent : `.cursor/skills/storybook-docs/SKILL.md` et `.cursor/skills/docs-locale/SKILL.md`.

## Props

| Prop        | Règle                                                                       |
| ----------- | --------------------------------------------------------------------------- |
| `variant`   | Union string littérale (`'primary' \| 'secondary'`)                         |
| `size`      | `'sm' \| 'md' \| 'lg'` quand c’est utile                                    |
| `disabled`  | Attribut HTML natif. **Pas** `isDisabled`                                   |
| `className` | Escape hatch, fusionné avec `cx(...)` **à la fin**                          |
| `style`     | Autorisé ; ne pas s’en servir pour injecter une couleur sémantique (tokens) |
| `data-*`    | Autorisé, transmis au nœud DOM racine                                       |

Pas de `asChild` tant qu’un cas réel l’exige (YAGNI). Button n’est pas un lien : `Link` est DS-019.

Chaînes visibles : aucune copie figée dans le composant sauf fallback a11y en **anglais** (`Skip to main content`). Les stories passent par `docs-locale.ts` (français par défaut, anglais via la barre Langue).

## Accessibilité (nommage)

- Contrôle natif : `<button>`, `<a>`, `<label>`, `<dialog>`. Jamais un `div` cliquable.
- Nom accessible obligatoire. Icon-only : `aria-label` dans le type (voir `IconButton`).
- `aria-*` seulement si le HTML ne suffit pas.

## Quand ouvrir un RFC

Nouvelle primitive, dépendance runtime, changement du contrat CSS public (`--d-ui-*`), ou breaking change d’API. Pas de RFC pour un variant de Button.

## Options documentées

Chaque prop / état public a une story et un canvas MDX. Un Button « label seul » n’est pas la doc complète s’il existe (ou s’il manque de façon évidente) bouton + icône, icon-only, loading, tailles. Détail : `.cursor/skills/pre-commit-review/SKILL.md`.

## Checklist composant

1. HTML sémantique (`button`, `a`, `label`, `dialog`, …), focus visible, clavier — WCAG 2.2 AA (`docs/accessibility.md`).
2. Couleurs via tokens, jamais un hex dans le TSX.
3. Tests Testing Library (`getByRole`) + story + MDX (pas autodocs seul).
4. Options publiques toutes démontrées (pas seulement `Default`).
5. `pnpm lint` / `format:check` / `typecheck` / `test`.
