# Accessibilité numérique

Cible release `d-ui` v1 : **WCAG 2.2 niveau AA** (RGAA comme grille interne).  
Lié à la Definition of Done globale dans [CONTRIBUTING.md](../CONTRIBUTING.md).

Une exception AA exige un sign-off Accessibilité **et** une décision produit écrite sur l’issue.

## Règles pour chaque composant

1. HTML sémantique (`button`, `a`, `label`, `dialog`, …). Pas de `div` cliquable.
2. Nom accessible : texte visible, `aria-label`, ou `VisuallyHidden`. Un contrôle icon-only sans nom est un bug.
3. Focus visible (`:focus-visible`) — ne jamais `outline: none` sans remplacement.
4. Contraste des couleurs de tokens ≥ 4.5:1 (texte) / 3:1 (large et UI non-texte). Processus : [docs/tokens.md](./tokens.md) + gel design DS-006.
5. Clavier : Tab, Shift+Tab, Enter/Espace, Escape pour fermer un overlay.
6. `prefers-reduced-motion` : pas d’animation obligatoire.
7. Ne pas reposer uniquement sur la couleur pour l’état (erreur, succès).
8. Pas de copie UI hardcodée dans un composant (hors fallback a11y anglais). Respecter `dir`.
9. `TimeAgo` : `<time datetime>` (ISO-8601) + texte relatif visible, `lang` aligné sur `locale`. Date invalide → `<span>`, pas un `<time>` sans valeur. Instant absolu : `title` et `VisuallyHidden`. `live` sans `aria-live` sauf opt-in.
10. `TextInput` / `Textarea` : label visible (prop `label`, `aria-labelledby`, ou `<label for>`). `invalid` pose `aria-invalid` ; `error` / `helper` sont liés par `aria-describedby`. Le compteur (caractères restants) n’utilise pas `aria-live`. Le bouton d’effacement et le basculeur mot de passe ont un nom accessible. `autoComplete` et `inputMode` sont transmis.
11. `Checkbox` / `Radio` / `Switch` : contrôles natifs (`input`) avec label visible. Les groupes (`CheckboxGroup`, `RadioGroup`) utilisent `fieldset` + `legend`. `Switch` pose `role="switch"` et `aria-checked`. `indeterminate` pose `aria-checked="mixed"`. `invalid` / `error` ne reposent pas sur la couleur seule.
12. `Tooltip` : `role="tooltip"`, `aria-describedby` sur le déclencheur, contenu non interactif (`pointer-events-none`). Escape ferme. Pas d’information indispensable uniquement dans le tooltip.
13. `Popover` : `aria-expanded` / `aria-haspopup` / `aria-controls` sur le déclencheur. `trapFocus` seulement si le panneau contient des contrôles focusables (`role="dialog"` + nom accessible). Escape et clic extérieur ferment. Le portail recopie `data-d-ui-theme`.
14. `EmojiPopover` : barre de neuf réactions (boutons nommés). `role="dialog"` + `trapFocus`. `onSelect` ferme le panneau. Déclencheur icône avec `aria-label`.
15. `Select` / `Combobox` : `role="combobox"` + listbox nommée (`aria-labelledby` du libellé). Flèches, typeahead (Select), filtre (Combobox), Escape, Entrée. Options `disabled` ignorées par le clavier. `name` / `form` sur un `<select>` natif masqué. L’option active est défilée dans la vue. `Combobox` : bouton chevron `tabIndex={-1}` (`toggleLabel`), effacement optionnel, `multiple` (chips nommés, `aria-multiselectable`), `listStatus` (région live `loadingMessage`).

## Overlays — revue de PR

Ces patterns s’appliquent dès qu’un Dialog, Menu, Popover ou Tooltip est proposé. Une PR qui les ignore n’est pas AA.

### Focus

| Widget              | Ouverture                                                                        | Fermeture                               |
| ------------------- | -------------------------------------------------------------------------------- | --------------------------------------- |
| Dialog / modal      | Focus le premier focusable (ou le titre si `aria-labelledby`)                    | Restore sur le trigger                  |
| Menu / context menu | Premier item (ou item actif)                                                     | Restore sur le trigger                  |
| Popover             | Premier focusable **s’il contient des contrôles** ; sinon le trigger reste focus | Restore si le focus était à l’intérieur |
| Tooltip             | **Ne prend pas** le focus. Le trigger reste focusable                            | —                                       |

Un overlay modal pose `aria-modal="true"` et piège le Tab **à l’intérieur**. Un non-modal (popover) ne piège pas.

`SkipLink` n’est pas un overlay : visible au `:focus`, cible `main` (`id="main"`, `tabindex="-1"` recommandé).

### Clavier (widgets cœur)

| Widget              | Tab                                | Enter / Espace           | Escape | Flèches                    |
| ------------------- | ---------------------------------- | ------------------------ | ------ | -------------------------- |
| Button / IconButton | Entre / sort                       | Active                   | —      | —                          |
| Link                | Entre / sort                       | Active (Enter)           | —      | —                          |
| Dialog              | Cycle interne                      | Active le contrôle focus | Ferme  | —                          |
| Menu                | Sort du widget                     | Active l’item            | Ferme  | Haut / bas (et Home / End) |
| Popover             | Vers le contenu s’il est focusable | Selon le contrôle        | Ferme  | —                          |
| Tooltip             | Reste sur le trigger               | —                        | Masque | —                          |

Pas de `div` + `onKeyDown` si un élément natif existe (`dialog`, `button`, `a`).

## Outils

| Outil                         | Quand                |
| ----------------------------- | -------------------- |
| `eslint-plugin-jsx-a11y`      | à chaque `pnpm lint` |
| Storybook addon a11y          | sur chaque story     |
| Testing Library (`getByRole`) | tests unitaires      |
| Checklist PR                  | avant review         |

## Thème

`ThemeProvider` pose `data-d-ui-theme`. Les tokens `--d-ui-*` doivent rester lisibles en light et dark. Les valeurs actuelles sont un bootstrap ; le gel design (DS-006) les remplaçera sans changer les noms de variables si possible.
