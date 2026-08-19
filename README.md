# Dudalo Design System (`d-ui`)

Package UI générique de Dudalo (**DudaX**). Pas de logique métier Education.

## Contrat public

Les apps consommatrices dépendent de :

1. l’API React (`Button`, `ThemeProvider`, …)
2. les variables CSS `--d-ui-*`
3. `import 'd-ui/styles.css'`

Les classes Tailwind internes ne font **pas** partie du contrat.

## Prérequis

- Node 22 (`nvm use`)
- pnpm 9

```bash
pnpm install
pnpm storybook
```

## Scripts

| Commande               | Rôle                         |
| ---------------------- | ---------------------------- |
| `pnpm lint`            | ESLint + jsx-a11y            |
| `pnpm format:check`    | Prettier                     |
| `pnpm typecheck`       | TypeScript                   |
| `pnpm test`            | Vitest                       |
| `pnpm build`           | Build lib `d-ui`             |
| `pnpm storybook`       | Storybook local              |
| `pnpm build-storybook` | Build Storybook (CI preview) |

## Contribution

Voir [CONTRIBUTING.md](./CONTRIBUTING.md), [docs/accessibility.md](./docs/accessibility.md) et [SECURITY.md](./SECURITY.md).

## Roadmap

Backlog GitHub : [issues](https://github.com/dudaloglobal/design-system/issues) · projet [Design System DudaX](https://github.com/orgs/dudaloglobal/projects/2).

Admin GitHub (labels, protection de `main`) : [docs/github-admin.md](./docs/github-admin.md).
