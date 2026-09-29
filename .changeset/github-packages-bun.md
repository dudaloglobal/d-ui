---
'@dudaloglobal/d-ui': minor
---

Publier le design system sous le nom `@dudaloglobal/d-ui` sur GitHub Packages.
Les consommateurs remplacent les imports `d-ui` et `d-ui/styles.css` par
`@dudaloglobal/d-ui` et `@dudaloglobal/d-ui/styles.css`, et configurent l'accès
authentifié au registre. Les composants et les variables CSS restent inchangés.
Le développement et la CI utilisent désormais Bun workspaces.
