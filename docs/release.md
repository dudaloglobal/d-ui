# Release (`@dudaloglobal/d-ui`)

Versions SemVer via Changesets. Publication sur **GitHub Packages**, uniquement
après fusion dans `main`. La racine est privée ; seul `packages/ui` est publié.
Bun 1.4.2 gère le workspace, les installations et les scripts. Node reste requis
pour Vite, Storybook et Changesets ; Changesets utilise npm pour publier.

## Sur une PR

```bash
bun run changeset
```

Choisir `@dudaloglobal/d-ui`. Les changesets existants ont été renommés avec le
package. La migration du nom est une rupture des imports, pas du contrat React
ni des variables `--d-ui-*`.

## Vérifier le paquet

```bash
bun install --frozen-lockfile
bun audit --audit-level=high --ignore GHSA-vfj7-8cjw-p6xm
bun run lint
bun run format:check
bun run typecheck
bun run test
bun run build
npm pack --dry-run --workspace @dudaloglobal/d-ui
bun run build-storybook
```

Le tarball doit contenir `dist/index.js`, `dist/index.d.ts` et `dist/d-ui.css`.
Les sources, tests, Storybook et node_modules ne sont pas publiés. React et
React DOM restent des peer dependencies, externalisées du build.

Le lockfile Bun a été créé par une installation neuve, sans conversion pnpm.
Vitest passe en version 4 pour intégrer le correctif de sécurité de son mocker.
La CI exécute `bun audit --audit-level=high` avant les contrôles de qualité et la
publication : seuls les avis `high` et `critical` bloquent. L’avis
`GHSA-vfj7-8cjw-p6xm` est temporairement exclu : aucune version corrigée de
`braces` n’est publiée et la dépendance n’est appelée que par Changesets sur des
motifs contrôlés du dépôt. Retirer l’exclusion dès la publication du correctif.
Lancer `bun audit` sans seuil en local pour voir aussi les avis `low` et
`moderate`.

## Action GitHub

`.github/workflows/release.yml` tourne sur `push` vers `main` :

1. réutilise la CI qualité et bloque la release si elle échoue — c'est la seule
   exécution de la CI sur `main` (`ci.yml` ne se déclenche plus sur `push`) ;
2. installe depuis `bun.lock`, construit et inspecte le paquet ;
3. Changesets ouvre ou actualise la PR de version si des changesets restent ;
4. `bun run version-packages` met à jour versions, changelog et `bun.lock` ;
5. après fusion de cette PR, publie les versions absentes sur GitHub Packages.

Seul le job de publication élève `GITHUB_TOKEN` avec `contents: write`,
`pull-requests: write` et `packages: write` ; la CI réutilisable reste en lecture
seule. `setup-node` fournit l'authentification du registre avec
`NODE_AUTH_TOKEN`. Aucun secret `NPM_TOKEN` n'est nécessaire. Un jeton absent
fait échouer la publication au lieu de signaler un faux succès.

Dans Settings → Actions → General, autoriser GitHub Actions à créer des pull
requests. Si cette politique est interdite par l'organisation, un administrateur
doit l'autoriser. Une PR créée avec `GITHUB_TOKEN` ne déclenche pas automatiquement
les workflows `pull_request` : fermer puis rouvrir la PR avec un compte humain
pour lancer CI et preview avant fusion, ou utiliser une GitHub App dédiée si
l'équipe veut automatiser ce déclenchement.

### Identité de release à provisionner

La cible est une GitHub App dédiée, limitée à ce dépôt, avec seulement
`contents: write`, `pull_requests: write` et `packages: write`. Un propriétaire
de l’organisation doit créer et installer l’App, puis fournir son identifiant et
sa clé privée comme secrets restreints à `d-ui`. Après migration du workflow et
validation d’une release, désactiver le droit du `GITHUB_TOKEN` à créer ou
approuver des pull requests. Ne pas désactiver ce droit avant la migration : la
PR Changesets ne pourrait plus être créée.

## Frontière de confiance des previews

Une PR, y compris depuis un fork, exécute uniquement `preview.yml` avec
`contents: read`. Ce workflow construit Storybook puis téléverse un artefact ;
il ne possède aucun droit de publication et ne reçoit aucun secret.

`preview-publish.yml` se déclenche ensuite par `workflow_run`. Il télécharge
l’artefact du run terminé et le publie, mais ne checkout et n’exécute jamais le
code de la PR. Ses droits d’écriture servent uniquement à la branche GitHub
Pages et au commentaire de preview.

La première publication est privée par défaut. Dans les paramètres du package,
vérifier son rattachement à `dudaloglobal/d-ui`, puis donner à `dudalo-admin`
l'accès **Read** dans **Manage Actions access**. Les comptes développeurs ont
également besoin d'un droit de lecture. Voir [le guide consommateur](consume.md).

`PROJECT_TOKEN` reste indépendant : il sert au suivi du board, pas au registre.
Ne jamais versionner un jeton ni publier manuellement depuis un laptop.

## Migration des consommateurs

Cette PR prépare le registre et Bun dans `d-ui`. Attendre qu'une version soit
réellement publiée avant de retirer le submodule de `dudalo-admin`. Le changement
du front et celui de `dev-stack` se font dans leurs dépôts respectifs : une PR
GitHub ne peut pas modifier plusieurs dépôts.

L'audit et l'annonce de la v1 restent suivis par DS-060 / DS-061 ; une version
technique ne remplace pas cette validation produit.
