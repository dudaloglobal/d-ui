# Consommer `@dudaloglobal/d-ui`

Contrat public :

1. API React (`Button`, `ThemeProvider`, `SkipLink`, …)
2. variables CSS `--d-ui-*`
3. `import '@dudaloglobal/d-ui/styles.css'`

Les classes Tailwind internes ne font pas partie du contrat.

```tsx
import '@dudaloglobal/d-ui/styles.css';
import { Button, SkipLink, ThemeProvider } from '@dudaloglobal/d-ui';

export function App() {
  return (
    <ThemeProvider mode="light">
      <SkipLink>Aller au contenu principal</SkipLink>
      <main id="main" tabIndex={-1}>
        <Button>Enregistrer</Button>
      </main>
    </ThemeProvider>
  );
}
```

`mode="light" | "dark" | "system"`. White-label : `tokens={{ brand, brandHover, onBrand, focus }}`.

## Installer depuis GitHub Packages

Dans le `.npmrc` de l'application :

```ini
@dudaloglobal:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

En local, `NODE_AUTH_TOKEN` contient un PAT **classic** avec `read:packages`,
appartenant à un compte autorisé à lire le package (autoriser le SSO si requis).
Même un package npm public de GitHub Packages exige une authentification.
Le fichier peut être versionné avec cette référence de variable, jamais avec
la valeur du jeton.

Après la première publication :

```bash
bun add --exact @dudaloglobal/d-ui@<version-publiee>
```

Remplacer `<version-publiee>` par une version visible dans GitHub Packages,
puis versionner `package.json` et `bun.lock`. Le consommateur n'a besoin ni
de pnpm, ni des sources du design system, ni d'un workspace partagé avec lui.

Dans GitHub Actions, accorder au dépôt consommateur **Read** dans les paramètres
du package → **Manage Actions access**, puis utiliser :

```yaml
permissions:
  contents: read
  packages: read

# Après checkout et installation de Bun :
steps:
  - run: bun install --frozen-lockfile
    env:
      NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Dans un conteneur de développement, fournir le secret lors de l'installation.
Pour construire une image, utiliser un secret BuildKit : ne pas copier le jeton
dans l'image ou le passer par un `ARG` persistant.

## Migrer dudalo-admin

1. Installer une version publiée et retirer la dépendance `file:./d-ui/packages/ui`.
2. Remplacer les imports `d-ui` par `@dudaloglobal/d-ui`, et l'import CSS par
   `@dudaloglobal/d-ui/styles.css`.
3. Conserver `components/ui.ts` avec sa directive `"use client"` et ses exports
   explicites. Le bundle actuel crée des contextes React et ne porte pas cette
   directive : une publication ne le rend pas compatible RSC à elle seule.
4. Vérifier les types, `next build`, les écrans et les thèmes avec le paquet installé.
5. Retirer le submodule et son entrée `.gitmodules` après ces vérifications.
6. Dans `dev-stack`, supprimer `d-ui-build`, ses volumes et les étapes de build
   dans `cli/dudalo.ts`, puis documenter la nouvelle installation authentifiée.
