# Changesets

Les versions de `d-ui` suivent SemVer.

Sur une PR qui change l'API publique, ajouter un changeset :

```sh
bun run changeset
```

- **patch** — correctif sans casser l'API
- **minor** — nouvelle fonctionnalité rétrocompatible
- **major** — breaking change (prop retirée, token renommé, contrat CSS public modifié)
