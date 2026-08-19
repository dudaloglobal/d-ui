# Accessibilité numérique

Cible : **WCAG 2.2 niveau AA** (RGAA comme grille de contrôle interne).

## Règles pour chaque composant

1. HTML sémantique (`button`, `a`, `label`, `dialog`, …). Pas de `div` cliquable.
2. Nom accessible : texte visible, `aria-label`, ou `VisuallyHidden`. Un contrôle icon-only sans nom est un bug.
3. Focus visible (`:focus-visible`) — ne jamais `outline: none` sans remplacement.
4. Contraste des couleurs de tokens ≥ 4.5:1 (texte) / 3:1 (large et UI non-texte).
5. Clavier : Tab, Shift+Tab, Enter/Espace, Escape pour fermer un overlay.
6. `prefers-reduced-motion` : pas d’animation obligatoire.
7. Ne pas reposer uniquement sur la couleur pour l’état (erreur, succès).

## Outils

| Outil                         | Quand                |
| ----------------------------- | -------------------- |
| `eslint-plugin-jsx-a11y`      | à chaque `pnpm lint` |
| Storybook addon a11y          | sur chaque story     |
| Testing Library (`getByRole`) | tests unitaires      |
| Checklist PR                  | avant review         |

## Thème

`ThemeProvider` pose `data-d-ui-theme`. Les tokens `--d-ui-*` doivent rester lisibles en light et dark. Les valeurs actuelles sont un bootstrap ; le gel design (tokens Figma) les remplacera sans changer les noms de variables si possible.
