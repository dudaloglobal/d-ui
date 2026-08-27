# Contribuer à `d-ui`

## Git

1. Partir de `main` à jour.
2. Branche : `feature/DS-XXX-short-slug` (ticket GitHub obligatoire).
3. PR vers `main`. Description en **français**, template `.github/PULL_REQUEST_TEMPLATE.md`. La CI doit être verte. Une revue est requise.
4. Ne pas pousser directement sur `main`.

L’auteur de la PR est assigné automatiquement. Les reviewers demandés sont les deux autres membres de l’équipe (`@fruitizz`, `@Angelo-Cosme`, `@noukpoherve`) selon l’assigné du ticket ou de la PR.

Messages de commit en **anglais**, style conventional : `feat(button): …`, `fix(a11y): …`, `chore(ci): …`.

Ne pas ajouter de trailer `Co-authored-by` (ni attribution d’outil). Installer les hooks une fois :

```bash
sh .githooks/install.sh
```

## Preview Storybook (obligatoire)

Chaque PR **doit** contenir l’URL du preview Storybook dans la section **Preview Storybook** du template.

La CI :

1. construit Storybook
2. déploie `prs/<numéro-de-PR>/` sur GitHub Pages
3. commente l’URL et l’écrit dans la description de PR
4. échoue si l’URL est absente

Ne pas merger une PR sans ce lien.

## Definition of Done

Un composant n’est pas fini sans :

- API exportée depuis `d-ui`
- tokens (aucun hex sémantique dans le TSX)
- HTML sémantique, clavier, focus visible, nom accessible — [docs/accessibility.md](./docs/accessibility.md)
- tests Testing Library + story **et** MDX (voir [docs/component-conventions.md](./docs/component-conventions.md))
- conventions : [docs/component-conventions.md](./docs/component-conventions.md)

## Qualité (KISS, SOLID, DRY)

- Un module = un job. Pas d’abstraction « au cas où ».
- Réutiliser tokens, `cx`, `ThemeProvider` plutôt que de recréer des couleurs ou des classNames.
- Le domaine Education n’entre pas dans `d-ui`.

## Tests

Pour un composant interactif : test Testing Library (rôle, nom accessible, clavier si pertinent) + story.

## Release

Changesets (`pnpm changeset`). Détail : [docs/release.md](./docs/release.md).
