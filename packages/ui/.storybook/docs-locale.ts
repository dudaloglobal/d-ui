export type DocsLocale = 'fr' | 'en';

export function docsLocale(value: unknown): DocsLocale {
  return value === 'en' ? 'en' : 'fr';
}

export function localeFromSearch(search = window.location.search): DocsLocale {
  const globals = new URLSearchParams(search).get('globals') ?? '';
  return docsLocale(
    globals
      .split(/[;,&]/)
      .find((part) => part.startsWith('locale:'))
      ?.slice('locale:'.length),
  );
}

/** Sidebar / canvas story titles. Source names stay French; English via Langue. */
export const storyNameEn: Record<string, string> = {
  'Par défaut': 'Default',
  'Forte emphase': 'High emphasis',
  'Emphase moyenne': 'Medium emphasis',
  'Bouton bascule': 'Toggle button',
  'Faible emphase': 'Low emphasis',
  'Petite taille': 'Small size',
  'Pleine largeur': 'Full width',
  Chargement: 'Loading',
  'Icône seule': 'Icon only',
  Désactivé: 'Disabled',
  Invalide: 'Invalid',
  Requis: 'Required',
  Aide: 'Helper',
  Indéterminé: 'Indeterminate',
  Tailles: 'Sizes',
  Groupe: 'Group',
  'Groupe horizontal': 'Horizontal group',
  Valide: 'Valid',
  'Texte de substitution': 'Placeholder',
  Icône: 'Icon',
  Effaçable: 'Clearable',
  'Longueur maximale': 'Max length',
  'Préfixe et suffixe': 'Prefix and suffix',
  'Halo de focus': 'Focus glow',
  Nombre: 'Number',
  'Mot de passe': 'Password',
  Activé: 'On',
  Langue: 'Locale',
  'Mises à jour en direct': 'Live updates',
  Taille: 'Size',
  'Passé et futur': 'Past and future',
  Contrôlé: 'Controlled',
  Placement: 'Placement',
  Collision: 'Collision',
  Portail: 'Portal',
  'Sans piège de focus': 'Without focus trap',
  Alignements: 'Alignments',
  'Options désactivées': 'Disabled options',
  'État vide': 'Empty state',
};

const storyNameFr: Record<string, string> = Object.fromEntries(
  Object.entries(storyNameEn).map(([fr, en]) => [en, fr]),
);

export function storyLabel(name: string, locale: DocsLocale): string {
  if (locale === 'en') return storyNameEn[name] ?? name;
  return storyNameFr[name] ?? name;
}

/** Manager toolbar labels. Source titles stay French; English via Langue. */
export const toolbarLabelEn: Record<string, string> = {
  Thème: 'Theme',
  Clair: 'Light',
  Sombre: 'Dark',
  Langue: 'Language',
};

const toolbarLabelFr: Record<string, string> = Object.fromEntries(
  Object.entries(toolbarLabelEn).map(([fr, en]) => [en, fr]),
);

export function toolbarLabel(name: string, locale: DocsLocale): string {
  if (locale === 'en') return toolbarLabelEn[name] ?? name;
  return toolbarLabelFr[name] ?? name;
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

const selectionFr = {
  checkboxLabel: 'Recevoir les notifications',
  terms: 'J’accepte les conditions',
  helper: 'Vous pourrez changer d’avis.',
  error: 'Ce champ est requis.',
  groupError: 'Choisissez au moins une option.',
  radioError: 'Choisissez une formule.',
  selectAll: 'Tout sélectionner',
  channels: 'Canaux de notification',
  email: 'Email',
  sms: 'SMS',
  push: 'Push',
  plan: 'Formule',
  monthly: 'Mensuel',
  yearly: 'Annuel',
  team: 'Équipe',
  switchLabel: 'Mode compact',
  switchHelper: 'Réduit les marges de l’interface.',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
};

const selectionEn = {
  checkboxLabel: 'Receive notifications',
  terms: 'I accept the terms',
  helper: 'You can change this later.',
  error: 'This field is required.',
  groupError: 'Choose at least one option.',
  radioError: 'Choose a plan.',
  selectAll: 'Select all',
  channels: 'Notification channels',
  email: 'Email',
  sms: 'SMS',
  push: 'Push',
  plan: 'Plan',
  monthly: 'Monthly',
  yearly: 'Yearly',
  team: 'Team',
  switchLabel: 'Compact mode',
  switchHelper: 'Reduces spacing in the interface.',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
};

export type SelectionDocsCopy = typeof selectionFr;

export function selectionCopy(locale: DocsLocale): SelectionDocsCopy {
  return locale === 'en' ? selectionEn : selectionFr;
}

const selectFr = {
  country: 'Pays',
  city: 'Ville',
  choose: 'Choisir',
  search: 'Rechercher',
  empty: 'Aucune option',
  helper: 'Le pays de résidence.',
  error: 'Ce champ est requis.',
  france: 'France',
  belgium: 'Belgique',
  canada: 'Canada',
  switzerland: 'Suisse',
  europe: 'Europe',
  americas: 'Amériques',
  paris: 'Paris',
  lyon: 'Lyon',
  marseille: 'Marseille',
  brussels: 'Bruxelles',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
};

const selectEn = {
  country: 'Country',
  city: 'City',
  choose: 'Choose',
  search: 'Search',
  empty: 'No options',
  helper: 'Country of residence.',
  error: 'This field is required.',
  france: 'France',
  belgium: 'Belgium',
  canada: 'Canada',
  switzerland: 'Switzerland',
  europe: 'Europe',
  americas: 'Americas',
  paris: 'Paris',
  lyon: 'Lyon',
  marseille: 'Marseille',
  brussels: 'Brussels',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
};

export type SelectDocsCopy = typeof selectFr;

export function selectCopy(locale: DocsLocale): SelectDocsCopy {
  return locale === 'en' ? selectEn : selectFr;
}

const overlayFr = {
  help: 'Aide',
  tip: 'Enregistrer (⌘S)',
  open: 'Ouvrir',
  close: 'Fermer',
  options: 'Options',
  more: 'Plus d’infos',
  top: 'Haut',
  bottom: 'Bas',
  left: 'Gauche',
  right: 'Droite',
  topStart: 'Haut début',
  topEnd: 'Haut fin',
  alignStart: 'Aligné au début du haut',
  alignEnd: 'Aligné à la fin du haut',
  action: 'Confirmer',
  react: 'Réagir',
  reactions: 'Réactions',
  emojiHeart: 'Cœur étincelant',
  emojiThumbsUp: 'Pouce en l’air',
  emojiParty: 'Cotillons',
  emojiClap: 'Applaudissements',
  emojiJoy: 'Larmes de joie',
  emojiWow: 'Surprise',
  emojiCry: 'Larmes',
  emojiThink: 'Réflexion',
  emojiThumbsDown: 'Pouce en bas',
};

const overlayEn = {
  help: 'Help',
  tip: 'Save (⌘S)',
  open: 'Open',
  close: 'Close',
  options: 'Options',
  more: 'More info',
  top: 'Top',
  bottom: 'Bottom',
  left: 'Left',
  right: 'Right',
  topStart: 'Top start',
  topEnd: 'Top end',
  alignStart: 'Aligned to the start of the top side',
  alignEnd: 'Aligned to the end of the top side',
  action: 'Confirm',
  react: 'React',
  reactions: 'Reactions',
  emojiHeart: 'Sparkling heart',
  emojiThumbsUp: 'Thumbs up',
  emojiParty: 'Party popper',
  emojiClap: 'Clapping hands',
  emojiJoy: 'Face with tears of joy',
  emojiWow: 'Astonished face',
  emojiCry: 'Crying face',
  emojiThink: 'Thinking face',
  emojiThumbsDown: 'Thumbs down',
};

export type OverlayDocsCopy = typeof overlayFr;

export function overlayCopy(locale: DocsLocale): OverlayDocsCopy {
  return locale === 'en' ? overlayEn : overlayFr;
}
