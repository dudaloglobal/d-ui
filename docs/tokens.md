# Tokens CSS

Les hex vivent **uniquement** dans `packages/ui/src/styles/tokens.css`. Les composants n’utilisent jamais un `#rgb` pour une couleur sémantique.

## Contrat de nommage

`--d-ui-<famille>-<rôle>` — exemple `--d-ui-color-brand`.

Light : `:root` + `[data-d-ui-theme='light']`.  
Dark : `[data-d-ui-theme='dark']`.

## Ajouter un token

1. Déclarer la variable light **et** dark dans `tokens.css`.
2. L’exposer dans `@theme` (`packages/ui/src/styles/index.css`) si un utilitaire Tailwind interne en a besoin.
3. Ajouter le nom dans `packages/ui/src/tokens/names.ts`.
4. Documenter le contraste si c’est une paire texte/fond.

Ne pas exposer les classes Tailwind (`bg-brand`, …) aux apps : elles ne font pas partie du contrat.

## Contraste (bootstrap, en attendant DS-006)

Valeurs mesurées sur le bootstrap actuel — le gel Figma (DS-006) les remplacera **sans renommer** les variables si possible.

Ratios calculés avec la formule WCAG 2.1 (luminance relative, `(L1 + 0.05) / (L2 + 0.05)`) sur les hex de `tokens.css`. Cette table est tenue à la main : elle dérive dès qu'une valeur change. DS-006 la remplacera par un test qui recalcule les paires à chaque CI.

| Paire                         | Light   | Dark    | Cible AA                                                      |
| ----------------------------- | ------- | ------- | ------------------------------------------------------------- |
| Body `fg` / `bg`              | 17.85:1 | 17.09:1 | ≥ 4.5:1                                                       |
| Heading = body `fg`           | idem    | idem    | ≥ 4.5:1                                                       |
| Inverse `on-brand` / `brand`  | 7.91:1  | 9.78:1  | ≥ 4.5:1                                                       |
| Bordure `border` / `bg`       | 4.76:1  | 3.93:1  | ≥ 3:1 (1.4.11, frontière de contrôle)                         |
| Disabled `fg-disabled` / `bg` | 2.56:1  | 3.93:1  | UI non-texte ≥ 3:1 ; le texte disabled peut rester sous 4.5:1 |

White-label : passer `tokens` à `ThemeProvider` (`brand`, `brandHover`, `onBrand`, `focus`).
