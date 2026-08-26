export type DocsLocale = 'fr' | 'en';

export function docsLocale(value: unknown): DocsLocale {
  return value === 'en' ? 'en' : 'fr';
}

const fr = {
  default: 'Par défaut',
  disabled: 'Désactivé',
  withIcon: 'Avec icône',
  dropdown: 'Menu',
  split: 'Fractionné',
  subscribe: "S'abonner",
  subscribed: 'Abonné',
  fullWidthSingle: 'Bouton pleine largeur',
  fullWidthTwo: 'Deux boutons pleine largeur',
  button: 'Bouton',
  add: 'Ajouter',
  moreActions: "Plus d'actions",
  openMenu: 'Ouvrir le menu',
  continue: 'Continuer',
  saving: 'Enregistrement',
};

const en = {
  default: 'Default',
  disabled: 'Disabled',
  withIcon: 'With Icon',
  dropdown: 'Dropdown',
  split: 'Split',
  subscribe: 'Subscribe',
  subscribed: 'Subscribed',
  fullWidthSingle: 'Single full width button',
  fullWidthTwo: 'Two full width buttons',
  button: 'Button',
  add: 'Add',
  moreActions: 'More actions',
  openMenu: 'Open menu',
  continue: 'Continue',
  saving: 'Saving',
};

export type ButtonDocsCopy = typeof fr;

export function buttonCopy(locale: DocsLocale): ButtonDocsCopy {
  return locale === 'en' ? en : fr;
}

const timeAgoFr = {
  submitted: 'Soumis',
  lastSeen: 'Vu pour la dernière fois',
  liveHint:
    'live — le texte relatif se met à jour ; les technologies d’assistance ne sont pas annoncées à chaque tick',
  english: 'Anglais',
  french: 'Français',
  englishHint: 'locale="en"',
  frenchHint: 'locale="fr" — heure absolue sur 24 h, sans AM/PM',
  small: 'Petite',
  medium: 'Moyenne',
  mediumHint: 'size="md" (défaut)',
  past: 'Passé',
  future: 'Futur',
  yesterday: 'Hier',
  pastHint: 'Il y a cinq heures',
  futureHint: 'Dans trois heures',
};

const timeAgoEn = {
  submitted: 'Submitted',
  lastSeen: 'Last seen',
  liveHint: 'live — relative text updates; assistive tech is not announced on each tick',
  english: 'English',
  french: 'French',
  englishHint: 'locale="en"',
  frenchHint: 'locale="fr" — 24h absolute time, no AM/PM',
  small: 'Small',
  medium: 'Medium',
  mediumHint: 'size="md" (default)',
  past: 'Past',
  future: 'Future',
  yesterday: 'Yesterday',
  pastHint: 'Five hours ago',
  futureHint: 'In three hours',
};

export type TimeAgoDocsCopy = typeof timeAgoFr;

export function timeAgoCopy(locale: DocsLocale): TimeAgoDocsCopy {
  return locale === 'en' ? timeAgoEn : timeAgoFr;
}

const inputFr = {
  fieldLabel: 'Libellé du champ',
  textareaLabel: 'Libellé de la zone de texte',
  numberLabel: 'Nombre',
  name: 'Nom',
  email: 'Email',
  password: 'Mot de passe',
  search: 'Recherche',
  quantity: 'Quantité',
  site: 'Site',
  placeholder: 'Texte de substitution',
  placeholderName: 'Ada Lovelace',
  helper: 'Texte d’aide',
  validValue: 'Valeur valide',
  invalidValue: 'Valeur invalide',
  filledValue: 'Valeur',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
  clear: 'Effacer',
  revealPassword: 'Afficher le mot de passe',
  hidePassword: 'Masquer le mot de passe',
  countRemaining: (n: number) =>
    n === 1 ? '1 caractère restant' : `${n} caractères restants`,
};

const inputEn = {
  fieldLabel: 'Text field label',
  textareaLabel: 'Text area label',
  numberLabel: 'Number',
  name: 'Name',
  email: 'Email',
  password: 'Password',
  search: 'Search',
  quantity: 'Quantity',
  site: 'Site',
  placeholder: 'Placeholder text',
  placeholderName: 'Ada Lovelace',
  helper: 'Helper text',
  validValue: 'Valid value',
  invalidValue: 'Invalid value',
  filledValue: 'Value',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
  clear: 'Clear',
  revealPassword: 'Show password',
  hidePassword: 'Hide password',
  countRemaining: (n: number) =>
    n === 1 ? '1 character remaining' : `${n} characters remaining`,
};

export type InputDocsCopy = typeof inputFr;

export function inputCopy(locale: DocsLocale): InputDocsCopy {
  return locale === 'en' ? inputEn : inputFr;
}
