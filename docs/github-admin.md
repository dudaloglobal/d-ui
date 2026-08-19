# Admin GitHub (DS-062)

Réglages qui exigent Maintain/admin. Source de vérité reproductible : `.github/github-admin.json` + `.github/scripts/apply-github-admin.sh`.

## Politique Git

- `main` est protégée : pas de push direct.
- Flux : branche `feature/DS-XXX-…` → PR → CI verte → **une revue** → merge.
- Les personnes avec **Write** peuvent pousser des branches de travail.
- CODEOWNERS reste un placeholder tant que les owners ne sont pas nommés (DS-004).
- Aucune automatisation ne doit ajouter de trailer `Co-authored-by` ni d’attribution d’outil.

## Appliquer

```bash
sh .github/scripts/apply-github-admin.sh
```

Le script crée les labels `area:*` / `priority:p0–p3` / `type:*` / `complexity:*`, les milestones Sprint 0–10, lie le Project org **Design System DudaX**, et protège `main` (revue obligatoire + checks CI).

## Checks requis sur `main`

- `Lint, types, tests, build`
- `Build, deploy, require preview URL`

**Limite actuelle :** l’org `dudaloglobal` est en plan **Free** et le dépôt est **privé**. GitHub n’autorise alors ni la protection classique de branche, ni les rulesets. Pour activer « pas de push direct + revue + CI obligatoire », il faut **Team ou Pro**, puis relancer le script.

Les labels, milestones et le lien Project s’appliquent déjà sans ce plan.

## Droits

Les grants Maintain/admin sont **nominatifs**, uniquement quand le PM les désigne. Ne pas les étendre à toute l’org depuis ce script.
