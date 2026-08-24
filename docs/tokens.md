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

| Paire                         | Light  | Dark   | Cible AA                                                      |
| ----------------------------- | ------ | ------ | ------------------------------------------------------------- |
| Body `fg` / `bg`              | 16.1:1 | 15.4:1 | ≥ 4.5:1                                                       |
| Heading = body `fg`           | idem   | idem   | ≥ 4.5:1                                                       |
| Inverse `on-brand` / `brand`  | 8.6:1  | 9.8:1  | ≥ 4.5:1                                                       |
| Disabled `fg-disabled` / `bg` | 2.5:1  | 3.6:1  | UI non-texte ≥ 3:1 ; le texte disabled peut rester sous 4.5:1 |

White-label : passer `tokens` à `ThemeProvider` (`brand`, `brandHover`, `onBrand`, `focus`).
