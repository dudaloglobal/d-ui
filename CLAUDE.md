<!-- DUDALO LMS WHITE-LABEL POLICY -->

## Règle obligatoire — marque blanche du LMS

Tous les modèles et agents IA, sans exception, doivent lire
`.agents/skills/marque-blanche-lms/SKILL.md` avant de produire un texte visible
ou un artefact GitHub. Le LMS sous-jacent n'est jamais nommé dans les
interfaces, messages d'erreur client, e-mails, notifications, documentation,
rapports, maquettes, commits, titres/descriptions de PR, issues, noms de branche
ou captures. Termes à employer : « la plateforme d'apprentissage », « l'espace
de cours », « synchronisé / non synchronisé ». Code interne existant non
renommé ; nouveaux identifiants neutres (`Lms…`, `lms_…`). Ne jamais relayer tel
quel un message d'erreur provenant du LMS.

<!-- END DUDALO LMS WHITE-LABEL POLICY -->

@AGENTS.md

# Claude Code

Project skills are real files under `.claude/skills/<name>/SKILL.md` (same
content as `.cursor/skills/`). Claude Code loads this directory on clone.

Before `git commit`, `.githooks/pre-commit` runs `pre-commit-review` on this
machine. Before `git push`, `.githooks/ensure-github-issue` **reuses** an
existing ticket, and **creates** one only if the work is brand-new and the
backlog has no match. It also assigns the issue and sets **En cours** /
**En revue** / **Terminé** (`project-status`). Do not add a GitHub Actions
workflow for the AI review.
