---
name: marque-blanche-lms
description: >-
  Apply Dudalo LMS white-label policy on every change that produces visible text
  (UI, API errors, emails, docs, commits, PRs, issues, branch names, screenshots).
  Never name the underlying LMS product brand in those surfaces.
---

# Marque blanche du LMS

Règle permanente pour tous les dépôts, sous-modules et worktrees Dudalo, tous les
modèles, agents, fournisseurs et outils, sans exception.

Le LMS sous-jacent n'est **jamais** nommé dans ce qui est visible :

- interfaces utilisateur
- messages d'erreur renvoyés au client
- e-mails et notifications
- documentation, rapports, maquettes
- messages de commit, titres et descriptions de PR, issues
- noms de branche, captures d'écran

## Termes à employer

- « la plateforme d'apprentissage »
- « l'espace de cours »
- « synchronisé / non synchronisé »

Dans les rapports internes d'agents, désigner le système par « LMS » uniquement.

## Code interne

- Le code interne **existant** (noms de classes, colonnes, fonctions de service web,
  variables d'environnement) **n'est pas renommé**.
- Pour tout **nouvel** identifiant, préférer un nom neutre (`Lms…`, `lms_…`).
- Ne jamais relayer tel quel un message d'erreur provenant du LMS : le reformuler
  en français lisible, sans citer la marque du LMS.

## Vérification

Avant de livrer un texte visible (UI, API, e-mail, doc, commit, PR), vérifier
qu'aucune occurrence de la marque du LMS sous-jacent n'apparaît. Si un fichier
tiers ou un log brut la contient, la masquer ou la reformuler avant exposition.
