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
  clearable: {
    control: 'boolean' as const,
    description: 'Bouton d’effacement dès que la valeur n’est pas vide.',
  },
  clearLabel: {
    description: 'Nom accessible du bouton d’effacement. Défaut : `"Clear"`.',
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
    description:
      'Libellé du compteur. Reçoit le nombre de caractères et `maxLength`. À localiser.',
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
      'Nom accessible pour afficher le mot de passe. Défaut : `"Show password"`.',
  },
  hidePasswordLabel: {
    description:
      'Nom accessible pour masquer le mot de passe. Défaut : `"Hide password"`.',
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
