# Release (`d-ui`)

Versions SemVer via Changesets. Publication **uniquement** depuis `main`, jamais depuis une branche feature.

## Sur une PR

```bash
pnpm changeset
```

Cela crée un fichier dans `.changeset/`. Sans changeset, l’Action de release ne publie rien.

## Dry-run du tarball

```bash
pnpm build
pnpm --filter d-ui exec npm pack --dry-run
```

Le tarball doit lister `dist/` (JS, `.d.ts`, `d-ui.css`). Pas de `src/`.

## Action GitHub

`.github/workflows/release.yml` tourne sur `push` vers `main` :

1. build + dry-run pack
2. [changesets/action](https://github.com/changesets/action) ouvre une PR « Version packages » s’il reste des changesets
3. au merge de cette PR, `changeset publish` s’exécute **si** `NPM_TOKEN` est défini

## Secrets

| Secret         | Où                    | Rôle                                                                                         |
| -------------- | --------------------- | -------------------------------------------------------------------------------------------- |
| `NPM_TOKEN`    | Actions repo (ou org) | `npm publish` de `d-ui`. Compte npm de l’org Dudalo. **Sans ce secret, aucune publication.** |
| `GITHUB_TOKEN` | fourni par Actions    | PR de version, tags                                                                          |

Ne pas coller de token dans le dépôt. Ne pas publier à la main depuis un laptop.

La v1.0 publique reste DS-061.
