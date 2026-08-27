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
8. `TimeAgo` : `<time datetime>` (ISO-8601) + texte relatif visible, `lang` aligné sur `locale`. Date invalide → `<span>`, pas un `<time>` sans valeur. Instant absolu : `title` et `VisuallyHidden`. `live` sans `aria-live` sauf opt-in.
9. `TextInput` / `Textarea` : label visible (prop `label`, `aria-labelledby`, ou `<label for>`). `invalid` pose `aria-invalid` ; `error` / `helper` sont liés par `aria-describedby`. Le compteur (caractères restants) n’utilise pas `aria-live`. Le bouton d’effacement et le basculeur mot de passe ont un nom accessible. `autoComplete` et `inputMode` sont transmis.
10. `Checkbox` / `Radio` / `Switch` : contrôles natifs (`input`) avec label visible. Les groupes (`CheckboxGroup`, `RadioGroup`) utilisent `fieldset` + `legend`. `Switch` pose `role="switch"` et `aria-checked`. `indeterminate` pose `aria-checked="mixed"`. `invalid` / `error` ne reposent pas sur la couleur seule.
11. `Tooltip` : `role="tooltip"`, `aria-describedby` sur le déclencheur, contenu non interactif (`pointer-events-none`). Escape ferme. Pas d’information indispensable uniquement dans le tooltip.
12. `Popover` : `aria-expanded` / `aria-haspopup` / `aria-controls` sur le déclencheur. `trapFocus` seulement si le panneau contient des contrôles focusables (`role="dialog"` + nom accessible). Escape et clic extérieur ferment. Le portail recopie `data-d-ui-theme`.
13. `EmojiPopover` : barre de neuf réactions (boutons nommés). `role="dialog"` + `trapFocus`. `onSelect` ferme le panneau. Déclencheur icône avec `aria-label`.

## Outils

| Outil                         | Quand                |
| ----------------------------- | -------------------- |
| `eslint-plugin-jsx-a11y`      | à chaque `pnpm lint` |
| Storybook addon a11y          | sur chaque story     |
| Testing Library (`getByRole`) | tests unitaires      |
| Checklist PR                  | avant review         |

## Thème

`ThemeProvider` pose `data-d-ui-theme`. Les tokens `--d-ui-*` doivent rester lisibles en light et dark. Les valeurs actuelles sont un bootstrap ; le gel design (tokens Figma) les remplacera sans changer les noms de variables si possible.
