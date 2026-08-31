# Dudalo Design System (`d-ui`)

Package UI générique de Dudalo (**DudaX**). Pas de logique métier Education.

## Contrat public

Les apps consommatrices dépendent de :

1. l’API React (`Button`, `ThemeProvider`, `SkipLink`, …)
2. les variables CSS `--d-ui-*`
3. `import 'd-ui/styles.css'`

Les classes Tailwind internes ne font **pas** partie du contrat.

Usage : [docs/consume.md](./docs/consume.md). Tokens : [docs/tokens.md](./docs/tokens.md).

## Prérequis

- Node 22.12+ (`nvm use` — pin `.nvmrc` : 22.23.2)
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

Voir [CONTRIBUTING.md](./CONTRIBUTING.md), [AGENTS.md](./AGENTS.md) (skills Cursor / Claude Code), [docs/component-conventions.md](./docs/component-conventions.md), [docs/accessibility.md](./docs/accessibility.md) et [SECURITY.md](./SECURITY.md).

## Roadmap

Backlog GitHub : [issues](https://github.com/dudaloglobal/design-system/issues) · projet [Design System DudaX](https://github.com/orgs/dudaloglobal/projects/2).
