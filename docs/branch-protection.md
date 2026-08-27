# Protection de `main` (checklist admin)

La CI PR exécute déjà : lint, Prettier, types, tests, `pnpm build`, `pnpm build-storybook`.  
Preview Storybook : `.github/workflows/preview.yml` → GitHub Pages `prs/<n>/`.  
CODEOWNERS : `.github/CODEOWNERS`.

GitHub **Free** + dépôt privé : les rulesets / branch protection peuvent être indisponibles. Dès que l’org est Team/Pro, un admin applique :

- [ ] Pas de push direct sur `main`
- [ ] PR obligatoire
- [ ] Au moins 1 revue
- [ ] Conversations résolues (optionnel mais recommandé)
- [ ] Checks requis :
  - `Lint, types, tests, build` (workflow **CI**)
  - `Build, deploy, require preview URL` (workflow **Preview Storybook**) — seulement si Pages est fiable ; sinon le laisser non-required

CODEOWNERS demande déjà une revue de `@Angelo-Cosme` et `@fruitizz` quand la protection « require review from CODEOWNERS » est cochée.
