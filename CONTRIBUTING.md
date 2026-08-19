# Contribuer à `d-ui`

## Git

1. Partir de `main` à jour.
2. Branche : `feature/DS-XXX-short-slug` (ticket GitHub obligatoire).
3. PR vers `main`. La CI doit être verte. Une revue est requise.
4. Ne pas pousser directement sur `main`.

Voir aussi [docs/github-admin.md](./docs/github-admin.md) (labels, milestones, protection de `main`).

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

## Qualité (KISS, SOLID, DRY)

- Un module = un job. Pas d’abstraction « au cas où ».
- Réutiliser tokens, `cx`, `ThemeProvider` plutôt que de recréer des couleurs ou des classNames.
- Le domaine Education n’entre pas dans `d-ui`.

## Accessibilité

Cible WCAG 2.2 AA. Checklist dans le template de PR et dans [docs/accessibility.md](./docs/accessibility.md).

## Tests

Pour un composant interactif : test Testing Library (rôle, nom accessible, clavier si pertinent) + story.

## Release

Changesets (`pnpm changeset`). Publication NPM : ticket dédié, pas depuis une PR de composant.
