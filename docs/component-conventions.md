# Conventions d’écriture des composants

Référence pour implémenter un composant `d-ui` sans divergences d’API. Compléter avec [docs/accessibility.md](./accessibility.md) et [docs/tokens.md](./tokens.md).

## Layout des fichiers

Un composant = un dossier :

```
packages/ui/src/components/Name/
  Name.tsx
  Name.test.tsx
  Name.stories.tsx
```

Primitives transverses (`VisuallyHidden`, `SkipLink`) : `packages/ui/src/a11y/`.  
Thème : `packages/ui/src/theme/`.  
Exporter depuis `packages/ui/src/index.ts`.

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

Chaînes visibles : aucune copie figée dans le composant sauf fallback a11y en **anglais** (`Skip to main content`). Les stories peuvent être en français (langue produit).

## Accessibilité (nommage)

- Contrôle natif : `<button>`, `<a>`, `<label>`, `<dialog>`. Jamais un `div` cliquable.
- Nom accessible obligatoire. Icon-only : `aria-label` dans le type (voir `IconButton`).
- `aria-*` seulement si le HTML ne suffit pas.

## Quand ouvrir un RFC

Nouvelle primitive, dépendance runtime, changement du contrat CSS public (`--d-ui-*`), ou breaking change d’API. Pas de RFC pour un variant de Button.

## Checklist composant

1. HTML sémantique, focus visible, clavier.
2. Couleurs via tokens, jamais un hex dans le TSX.
3. Tests Testing Library (`getByRole`) + story autodocs.
4. `pnpm lint` / `typecheck` / `test`.
