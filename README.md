# Dudalo Design System (`d-ui`)

Package UI générique de Dudalo (**DudaX**). Pas de logique métier Education.

## Contrat public

Les apps consommatrices dépendent de :

1. l’API React (`Button`, `ThemeProvider`, `SkipLink`, …)
2. les variables CSS `--d-ui-*`
3. `import '@dudaloglobal/d-ui/styles.css'`

Les classes Tailwind internes ne font **pas** partie du contrat.

Usage : [docs/consume.md](./docs/consume.md). Tokens : [docs/tokens.md](./docs/tokens.md).

## Prérequis

- Node 22.12+ (`nvm use` — pin `.nvmrc` : 22.23.2)
- Bun 1.4.2 (version épinglée dans `package.json`)

```bash
bun install
bun run storybook
```

## Scripts

| Commande                  | Rôle                           |
| ------------------------- | ------------------------------ |
| `bun run lint`            | ESLint + jsx-a11y              |
| `bun run format:check`    | Prettier                       |
| `bun run typecheck`       | TypeScript                     |
| `bun run test`            | Vitest                         |
| `bun run build`           | Build lib `@dudaloglobal/d-ui` |
| `bun run storybook`       | Storybook local                |
| `bun run build-storybook` | Build Storybook (CI preview)   |

## Contribution

Voir [CONTRIBUTING.md](./CONTRIBUTING.md), [AGENTS.md](./AGENTS.md) (skills Cursor / Claude Code), [docs/component-conventions.md](./docs/component-conventions.md), [docs/accessibility.md](./docs/accessibility.md) et [SECURITY.md](./SECURITY.md).

## Roadmap

Backlog GitHub : [issues](https://github.com/dudaloglobal/design-system/issues) · projet [Design System DudaX](https://github.com/orgs/dudaloglobal/projects/2).

## Licence

Ce projet est distribué sous la licence [Apache-2.0](./LICENSE).
