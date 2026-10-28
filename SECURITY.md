# Politique de sécurité

`d-ui` publie une bibliothèque d’interface cliente. Elle ne fournit ni serveur,
ni authentification, ni stockage de secrets. Les applications consommatrices
restent responsables de leurs contrôles d’accès et de la validation métier.

## Versions supportées

| Version | Supportée |
| ------- | --------- |
| 0.1.x   | Oui       |
| < 0.1   | Non       |

Seule la dernière version mineure publiée reçoit des correctifs de sécurité.
Une version affectée peut être retirée ou remplacée sans maintien d’une branche
ancienne tant que le paquet reste en version `0.x`.

## Signaler une vulnérabilité

Utilisez exclusivement le
[signalement privé GitHub](https://github.com/dudaloglobal/d-ui/security/advisories/new).
N’ouvrez pas d’issue, de discussion ou de pull request publique et n’y publiez
ni exploit, ni preuve de concept, ni données sensibles.

Nous visons un accusé de réception sous **trois jours ouvrés**. Après triage,
nous communiquons au déclarant la sévérité estimée, les prochaines étapes et,
si possible, une échéance de correction. Merci de laisser un délai raisonnable
avant toute divulgation coordonnée.

Le rapport doit contenir la version concernée, un scénario reproductible,
l’impact observé, les prérequis et toute mitigation déjà identifiée. N’accédez
pas aux données d’autrui et ne dégradez aucun service pendant vos recherches.

## Périmètre

Constituent notamment des vulnérabilités pour cette bibliothèque UI :

- l’exécution de code ou l’injection de HTML, CSS ou URL active à partir de
  propriétés non fiables ;
- un déni de service déclenchable par une entrée raisonnablement contrôlable ;
- la fuite de données par le paquet, Storybook ou ses artefacts publiés ;
- une compromission de la chaîne de construction ou de publication ;
- un comportement qui contourne les garanties de sécurité documentées d’un
  composant.

Ne relèvent généralement pas de `d-ui` : l’autorisation métier d’une
application consommatrice, un contrôle serveur absent, ou l’usage d’une version
qui n’est plus supportée. Un contrôle désactivé ou masqué dans l’interface ne
constitue jamais un contrôle d’accès.

## Règles de développement

- Aucun secret, jeton ou fichier `.env` dans le dépôt ou Storybook.
- Les chaînes fournies par les applications sont considérées comme non fiables.
- Aucun `eval` ni `dangerouslySetInnerHTML` dans les primitives publiques.
- Les Actions GitHub utilisent les permissions minimales nécessaires.
- Les workflows de PR ne reçoivent aucun secret et restent en lecture seule ;
  la publication d’un preview traite son artefact comme une donnée sans jamais
  checkout ni exécuter le code de la PR dans le workflow privilégié.
- Toutes les Actions distantes sont épinglées à un SHA complet.
- Dependabot surveille les dépendances npm et les Actions GitHub.
