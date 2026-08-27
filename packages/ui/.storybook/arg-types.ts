/** French ArgTypes descriptions for Storybook Properties tables. */
export const buttonArgTypes = {
  variant: {
    control: 'inline-radio' as const,
    options: ['primary', 'secondary', 'ghost'],
    description:
      'Emphase : `primary` (forte), `secondary` (moyenne), `ghost` (faible). Une seule action forte par vue.',
  },
  size: {
    control: 'inline-radio' as const,
    options: ['sm', 'md', 'lg'],
    description:
      '`sm` si l’espace est contraint, `md` par défaut, `lg` pour les actions aérées.',
  },
  loading: {
    control: 'boolean' as const,
    description:
      'Affiche un indicateur, conserve le libellé, pose `aria-busy` et désactive le contrôle.',
  },
  loadingIndicator: {
    control: 'inline-radio' as const,
    options: ['spinner', 'bounce'],
    description:
      '`spinner` (défaut) ou `bounce` (trois points). Utilisé si `loading` est vrai.',
  },
  icon: {
    description: 'Icône décorative. Ne remplace pas le nom accessible.',
  },
  iconPosition: {
    control: 'inline-radio' as const,
    options: ['start', 'end'],
    description: 'Position de l’icône : `start` (début) ou `end` (fin).',
  },
  fullWidth: {
    control: 'boolean' as const,
    description: 'Étend le contrôle à la largeur du conteneur.',
  },
  isSelected: {
    control: 'boolean' as const,
    description:
      'État bascule (emphase moyenne/faible). Pose `aria-pressed` si le libellé ne change pas.',
  },
  disabled: {
    control: 'boolean' as const,
    description: 'Désactive le contrôle : plus focusable, plus d’événements pointeur.',
  },
  'aria-label': {
    description: 'Nom accessible. Obligatoire sur `IconButton` (pas de texte visible).',
  },
};

export const timeAgoArgTypes = {
  date: {
    description:
      'Instant à afficher (`Date`, chaîne ISO-8601, ou millisecondes epoch). Une valeur invalide rend un `<span>`, pas un `<time>`.',
  },
  locale: {
    control: 'text' as const,
    description:
      'Locale BCP 47 transmise à `Intl` et à l’attribut `lang` (WCAG 3.1.2). Défaut : locale d’exécution.',
  },
  live: {
    control: 'boolean' as const,
    description:
      'Rafraîchit le texte relatif sur un intervalle grossier. Visuel uniquement : pas d’`aria-live`.',
  },
  size: {
    control: 'inline-radio' as const,
    options: ['sm', 'md'],
    description: 'Taille du texte : `sm` (métadonnées) ou `md` (défaut).',
  },
  title: {
    description: 'Infobulle native. Défaut : l’heure absolue formatée.',
  },
};

export const textFieldArgTypes = {
  size: {
    control: 'inline-radio' as const,
    options: ['sm', 'md', 'lg'],
    description:
      '`sm` si l’espace est contraint, `md` par défaut, `lg` pour les formulaires aérés.',
  },
  label: {
    description:
      'Libellé visible au-dessus du champ. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`.',
  },
  helper: {
    description:
      'Texte d’aide sous le champ. Remplacé par `error` si le champ est invalide.',
  },
  error: {
    description: 'Message d’erreur sous le champ. Pose aussi `aria-invalid`.',
  },
  placeholder: {
    description: 'Exemple de valeur. Ne remplace pas le libellé.',
  },
  invalid: {
    control: 'boolean' as const,
    description:
      'État d’erreur : `aria-invalid` et contour danger. `error` le pose aussi.',
  },
  valid: {
    control: 'boolean' as const,
    description: 'État de succès : contour vert et icône. Ignoré si `invalid`.',
  },
  disabled: {
    control: 'boolean' as const,
    description: 'Désactive le champ : plus focusable, plus d’événements pointeur.',
  },
  required: {
    control: 'boolean' as const,
    description: 'Champ obligatoire. Affiche un astérisque à côté du libellé.',
  },
  icon: {
    description:
      'Icône décorative au début du champ. Complète `label`, ne le remplace pas.',
  },
  prefix: {
    description:
      'Contenu au début du champ (unité, schéma d’URL). Ne remplace pas le libellé.',
  },
  suffix: {
    description: 'Contenu à la fin du champ. Ne remplace pas le libellé.',
  },
  fullWidth: {
    control: 'boolean' as const,
    description: 'Pleine largeur par défaut. Passez `false` pour une largeur fixe.',
  },
  focusShadow: {
    control: 'boolean' as const,
    description:
      'Halo de focus (ombre douce autour du cadre). Inactif sauf si la prop est `true`.',
  },
  clearable: {
    control: 'boolean' as const,
    description: 'Bouton d’effacement dès que la valeur n’est pas vide.',
  },
  clearLabel: {
    description: 'Nom accessible du bouton d’effacement. Défaut : `"Effacer"`.',
  },
  showCount: {
    control: 'boolean' as const,
    description:
      'Compteur de caractères (restants si `maxLength` est posé). Activé par défaut avec `maxLength`.',
  },
  maxLength: {
    description: 'Longueur maximale. Affiche le compteur sauf si `showCount={false}`.',
  },
  countMessage: {
    control: { disable: true },
    description:
      'Libellé du compteur. Reçoit le nombre de caractères et `maxLength`. Défaut : « n caractères restants ». À remplacer pour une autre langue.',
    table: {
      defaultValue: { summary: 'n caractères restants' },
    },
  },
};

export const textInputArgTypes = {
  ...textFieldArgTypes,
  type: {
    control: 'select' as const,
    options: ['text', 'email', 'password', 'search', 'number', 'tel', 'url'],
    description:
      'Type HTML : `text`, `email`, `password`, `search`, `number`, `tel`, `url`.',
  },
  revealPasswordLabel: {
    description:
      'Nom accessible pour afficher le mot de passe. Défaut : `"Afficher le mot de passe"`.',
  },
  hidePasswordLabel: {
    description:
      'Nom accessible pour masquer le mot de passe. Défaut : `"Masquer le mot de passe"`.',
  },
};

export const textareaArgTypes = {
  ...textFieldArgTypes,
  rows: {
    description: 'Nombre de lignes visibles. Défaut : `2`.',
  },
};

const selectionSharedArgTypes = {
  size: {
    control: 'inline-radio' as const,
    options: ['sm', 'md', 'lg'],
    description:
      '`sm` si l’espace est contraint, `md` par défaut, `lg` pour les formulaires aérés.',
  },
  label: {
    description:
      'Libellé visible à côté du contrôle. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`.',
  },
  helper: {
    description:
      'Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide.',
  },
  error: {
    description: 'Message d’erreur sous le contrôle. Pose aussi `aria-invalid`.',
  },
  invalid: {
    control: 'boolean' as const,
    description:
      'État d’erreur : `aria-invalid` et contour danger. `error` le pose aussi.',
  },
  disabled: {
    control: 'boolean' as const,
    description: 'Désactive le contrôle : plus focusable, plus d’événements pointeur.',
  },
  required: {
    control: 'boolean' as const,
    description: 'Contrôle obligatoire. Affiche un astérisque à côté du libellé.',
  },
};

export const checkboxArgTypes = {
  ...selectionSharedArgTypes,
  indeterminate: {
    control: 'boolean' as const,
    description:
      'État mixte (ni coché ni décoché). Pose `indeterminate` et `aria-checked="mixed"`.',
  },
  checked: {
    control: 'boolean' as const,
    description: 'État coché. Contrôlé si passé, non contrôlé sinon.',
  },
};

export const radioArgTypes = {
  ...selectionSharedArgTypes,
  value: {
    description: 'Valeur envoyée avec le groupe. Obligatoire dans un `RadioGroup`.',
  },
};

export const switchArgTypes = {
  ...selectionSharedArgTypes,
  checked: {
    control: 'boolean' as const,
    description:
      'État activé. Contrôlé si passé, non contrôlé sinon. Pose `aria-checked`.',
  },
};

const overlaySharedArgTypes = {
  content: {
    description: 'Contenu du panneau flottant.',
  },
  placement: {
    control: 'select' as const,
    options: [
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
      'right',
      'right-start',
      'right-end',
    ],
    description:
      'Côté préféré (`top`, `bottom`, `left`, `right`, et variantes `-start` / `-end`). Flip/shift recadrent près des bords du viewport.',
  },
  open: {
    control: 'boolean' as const,
    description: 'Ouvert contrôlé. Sinon `defaultOpen`.',
  },
  defaultOpen: {
    control: 'boolean' as const,
    description: 'Ouvert initial en mode non contrôlé.',
  },
  disabled: {
    control: 'boolean' as const,
    description: 'Empêche l’ouverture.',
  },
};

export const tooltipArgTypes = {
  ...overlaySharedArgTypes,
  delayMs: {
    control: 'number' as const,
    description:
      'Délai d’ouverture au survol (ms). `0` si `prefers-reduced-motion`. Défaut : `200`.',
  },
};

export const popoverArgTypes = {
  ...overlaySharedArgTypes,
  trapFocus: {
    control: 'boolean' as const,
    description:
      'Piège le focus dans le panneau (`role="dialog"`). À passer si le contenu est interactif.',
  },
  'aria-label': {
    description:
      'Nom accessible du panneau. Obligatoire avec `trapFocus` si pas de `aria-labelledby`.',
  },
  'aria-labelledby': {
    description: 'Id d’un titre visible qui nomme le panneau.',
  },
};

export const emojiPopoverArgTypes = {
  placement: overlaySharedArgTypes.placement,
  open: overlaySharedArgTypes.open,
  defaultOpen: overlaySharedArgTypes.defaultOpen,
  disabled: overlaySharedArgTypes.disabled,
  onSelect: {
    description: 'Appelé avec l’emoji choisi. Le panneau se ferme ensuite.',
  },
  'aria-label': {
    description: 'Nom accessible de la barre. Défaut : « Réactions ».',
  },
};

const selectSharedArgTypes = {
  size: textFieldArgTypes.size,
  label: textFieldArgTypes.label,
  helper: textFieldArgTypes.helper,
  error: textFieldArgTypes.error,
  invalid: textFieldArgTypes.invalid,
  valid: textFieldArgTypes.valid,
  disabled: textFieldArgTypes.disabled,
  required: textFieldArgTypes.required,
  fullWidth: textFieldArgTypes.fullWidth,
  options: {
    control: { disable: true },
    description:
      'Liste d’options `{ value, label, icon?, description?, disabled? }` ou de groupes `{ label, options }`.',
  },
  value: {
    description:
      'Valeur contrôlée (`string` ou `string[]` si `multiple`). Sinon `defaultValue`.',
  },
  defaultValue: {
    description: 'Valeur initiale en mode non contrôlé.',
  },
  onValueChange: {
    description:
      'Appelé avec une `string` (sélection unique) ou `string[]` (`multiple`).',
  },
  name: {
    description:
      'Nom du `<select>` natif masqué, pour la soumission HTML (`name` / `form`).',
  },
  form: {
    description: 'Id du formulaire hôte si le champ est rendu hors du `<form>`.',
  },
  emptyMessage: {
    description: 'Texte affiché lorsque la liste est vide. Défaut : « Aucune option ».',
  },
};

export const selectArgTypes = {
  ...selectSharedArgTypes,
  placeholder: {
    ...textFieldArgTypes.placeholder,
    description:
      'Texte du déclencheur lorsqu’aucune valeur n’est choisie. Défaut : « Choisir ».',
  },
};

export const comboboxArgTypes = {
  ...selectSharedArgTypes,
  placeholder: {
    ...textFieldArgTypes.placeholder,
    description:
      'Texte de recherche. Ne remplace pas le libellé. Défaut : « Rechercher ».',
  },
  multiple: {
    control: 'boolean' as const,
    description:
      'Sélection multiple. Les valeurs s’affichent en chips dans le champ. Défaut : `false`.',
  },
  filter: {
    control: 'inline-radio' as const,
    options: ['auto', 'manual', 'off'],
    description:
      '`auto` masque les non-correspondances, `manual` laisse la liste intacte (`onSearch`), `off` empêche la saisie.',
  },
  onSearch: {
    description: 'Appelé avec le texte saisi (recherche distante, `filter="manual"`).',
  },
  listStatus: {
    control: 'inline-radio' as const,
    options: ['idle', 'loading', 'loadingMore', 'error'],
    description:
      'État du panneau : `idle`, `loading` (placeholders), `loadingMore`, `error`.',
  },
  loadingMessage: {
    description: 'Message annoncé pendant le chargement. Défaut : `"Chargement"`.',
  },
  listErrorMessage: {
    description: 'Titre d’erreur de liste si `listStatus="error"`.',
  },
  listErrorRetryMessage: {
    description: 'Texte secondaire sous l’erreur de liste.',
  },
  emptyMessage: {
    description:
      'Liste vide. Chaîne, nœud, ou `(query) => …`. Défaut : « Aucune option ».',
  },
  beforeOptions: {
    description: 'Contenu injecté en tête de liste (action **Créer**, etc.).',
  },
  renderOption: {
    description: 'Rendu custom d’une option. Reçoit l’option et `selected`.',
  },
  renderSectionTitle: {
    description: 'Rendu custom du libellé de groupe.',
  },
  renderChip: {
    description: 'Rendu custom d’un chip (`multiple`).',
  },
  chipGroupLabel: {
    description: 'Nom accessible du groupe de chips. Défaut : le `label`.',
  },
  chipRemoveLabel: {
    description: 'Suffixe du bouton de retrait d’un chip. Défaut : `"Retirer"`.',
  },
  defaultOpen: {
    control: 'boolean' as const,
    description: 'Ouvre la liste au montage.',
  },
  openOnFocus: {
    control: 'boolean' as const,
    description: 'Ouvre la liste au focus. Utile avec `filter="off"`.',
  },
  icon: textFieldArgTypes.icon,
  clearable: {
    control: 'boolean' as const,
    description:
      'Bouton d’effacement dès qu’une valeur unique est choisie. Ignoré si `multiple`. Défaut : `true`.',
  },
  clearLabel: {
    description: 'Nom accessible du bouton d’effacement. Défaut : `"Effacer"`.',
  },
  toggleLabel: {
    description:
      'Nom accessible du bouton chevron. Défaut : `"Afficher les suggestions"`. Omis : pas de chevron.',
  },
};

export const skipLinkArgTypes = {
  href: {
    description:
      'Cible du lien, un identifiant de page (`#main` par défaut). Le landmark doit déjà être focusable (`tabIndex={-1}`).',
  },
  children: {
    description:
      'Libellé visible au focus. Défaut anglais : `"Skip to main content"`. Passez la langue de l’app.',
  },
};

export const visuallyHiddenArgTypes = {
  children: {
    description:
      'Texte lu par les technologies d’assistance, masqué visuellement. Obligatoire : c’est le nom accessible.',
  },
};

export const iconArgTypes = {
  as: {
    control: false as const,
    description:
      'Composant SVG à rendre. Jamais importé par `d-ui` : le bundle ne garde que ce que l’app passe.',
  },
  size: {
    control: 'inline-radio' as const,
    options: ['sm', 'md', 'lg'],
    description:
      'Aligné sur `Button` : `sm` 16 px, `md` 20 px (défaut), `lg` 24 px. Réduit le SVG en CSS, sans changer de jeu Heroicons.',
  },
  label: {
    description:
      'Nom accessible. Absent : icône décorative (`aria-hidden`, `focusable="false"`). Présent : `role="img"`. Ne pas l’utiliser à côté d’un libellé visible, ni dans le slot `icon` d’un `Button`.',
  },
};

export const themeArgTypes = {
  mode: {
    control: 'inline-radio' as const,
    options: ['light', 'dark', 'system'],
    description:
      '`light` / `dark` explicites, ou `system` (suit `prefers-color-scheme`). Pose `data-d-ui-theme` sur l’enveloppe, pas sur `document.documentElement`.',
  },
  tokens: {
    description:
      'Surcharge white-label : `brand`, `brandHover`, `onBrand`, `focus`. Écrit les variables `--d-ui-color-*` en inline.',
  },
};

export const textArgTypes = {
  as: {
    control: 'inline-radio' as const,
    options: ['p', 'span', 'div', 'label', 'legend'],
    description: 'Élément rendu. `p` par défaut ; `span` pour du texte en ligne.',
  },
  size: {
    control: 'inline-radio' as const,
    options: ['body', 'body-sm', 'caption'],
    description: '`body` (courant), `body-sm` (aide), `caption` (métadonnées).',
  },
  tone: {
    control: 'inline-radio' as const,
    options: ['default', 'muted'],
    description:
      '`default` (`text-fg`) ou `muted` (`text-fg-muted`, toujours ≥ 4.5:1). Jamais via `className`.',
  },
  weight: {
    control: 'inline-radio' as const,
    options: ['regular', 'medium', 'semibold'],
    description: 'Graisse : `regular`, `medium`, `semibold`.',
  },
};

export const headingArgTypes = {
  level: {
    control: 'inline-radio' as const,
    options: [1, 2, 3, 4, 5, 6],
    description: 'Niveau sémantique : rend un vrai `h1`…`h6` (WCAG 1.3.1).',
  },
  size: {
    control: 'inline-radio' as const,
    options: ['display', 'title', 'subtitle', 'body'],
    description:
      'Taille visuelle, indépendante du `level`. Par défaut, la taille suit le niveau.',
  },
};

export const linkArgTypes = {
  href: {
    description: 'Cible du lien. Obligatoire pour un vrai `<a>`.',
  },
  external: {
    control: 'boolean' as const,
    description:
      'Ouvre un nouvel onglet, pose `rel="noopener noreferrer"`, annonce l’ouverture (texte masqué).',
  },
  externalLabel: {
    description:
      'Texte annoncé pour un lien externe. Défaut anglais : `"(opens in a new tab)"`.',
  },
};

export const dividerArgTypes = {
  orientation: {
    control: 'inline-radio' as const,
    options: ['horizontal', 'vertical'],
    description:
      '`horizontal` : `div` en `w-full` (100 % du parent). `vertical` : `div` en `self-stretch` dans un flex.',
  },
  label: {
    description:
      'Nom accessible. Sans `label`, le trait est décoratif (`aria-hidden`). Avec `label` en horizontal, le texte est visible au centre et les filets remplissent le parent. Ne le renseigner que si la séparation porte du sens.',
  },
};
