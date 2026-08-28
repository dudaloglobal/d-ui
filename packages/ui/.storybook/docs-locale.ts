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
  'Sélection unique': 'Single selection',
  'Sélection multiple': 'Multiple selection',
  'Rendu personnalisé': 'Custom rendering',
  'Chargement de la suite': 'Loading more',
  'Erreur de liste': 'List error',
  'Types de filtre': 'Filter types',
  Descriptions: 'Descriptions',
  Clavier: 'Keyboard',
  'Cible personnalisée': 'Custom target',
  'Nom d’un bouton icône': 'Icon-only button name',
  'Surcharge de marque': 'Brand override',
  Système: 'System',
  Horizontal: 'Horizontal',
  Vertical: 'Vertical',
  Labellisé: 'Labelled',
  Externe: 'External',
  'Dans un paragraphe': 'In a paragraph',
  'Avec icône': 'With icon',
  'Couleur sombre': 'Dark color',
  'Couleur claire': 'Light color',
  Tons: 'Tones',
  Graisses: 'Weights',
  Niveaux: 'Levels',
  Gras: 'Bold',
  'Taille découplée': 'Decoupled size',
  'Avec aide': 'With helper',
  'Couleur héritée': 'Inherited color',
  'Même silhouette': 'Same silhouette',
  Nomée: 'Named',
  'Dans un bouton': 'Inside a button',
  'Dates restreintes': 'Restricted dates',
  'Début de semaine': 'Week start',
  'Plusieurs mois': 'Multiple months',
  'Week-ends indisponibles': 'Unavailable weekends',
  Année: 'Year',
  'Plage de dates': 'Date range',
  'Styles de base': 'Basic styles',
  'Styles personnalisés': 'Custom styles',
  'Palette principale': 'Primary palette',
  'Palette secondaire': 'Secondary palette',
  Couleurs: 'Colors',
  'Variantes de couleur': 'Color variants',
  'Retour à la ligne et débordement': 'Text wrap and overflow',
  'Zone de dépôt': 'Dropzone',
  'Clic seul': 'Click only',
  'Plusieurs fichiers': 'Multiple files',
  'Accept et taille max': 'Accept and max size',
  Progression: 'Progress',
  'Saisie au clavier': 'Keyboard entry',
  'Activation manuelle': 'Manual activation',
  'Onglets verticaux': 'Vertical tabs',
  'Alignés à gauche': 'Justify left',
  Détachés: 'Detached',
  'Beaucoup de pages': 'Many pages',
  Raccourcis: 'Shortcuts',
  'Variantes de déclencheur': 'Trigger variants',
  'Éléments du menu': 'Menu items',
  'Éléments désactivés': 'Disabled items',
  'Sous-menu': 'Submenu',
  'Menu contextuel': 'Context menu',
  'Avec icônes': 'With icons',
  Replié: 'Collapsed',
  Imbriqués: 'Nested',
  Superposition: 'Overlay',
  'Bouton menu': 'Menu button',
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
  toggle: 'Afficher les suggestions',
  clear: 'Effacer',
  remove: 'Retirer',
  cities: 'Villes',
  capital: 'Capitale',
  gastronomy: 'Gastronomie',
  port: 'Port',
  customCity: 'Ville ajoutée',
  create: 'Créer',
  loading: 'Chargement',
  loadingMore: 'Chargement de la suite',
  emptyQuery: 'Aucun résultat pour',
  listError: 'Impossible de charger les options',
  listRetry: 'Réessayez.',
  filterAuto: 'Filtre automatique',
  filterManual: 'Filtre manuel',
  filterOff: 'Sans saisie',
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
  toggle: 'Show suggestions',
  clear: 'Clear',
  remove: 'Remove',
  cities: 'Cities',
  capital: 'Capital',
  gastronomy: 'Gastronomy',
  port: 'Port',
  customCity: 'Added city',
  create: 'Create',
  loading: 'Loading',
  loadingMore: 'Loading more',
  emptyQuery: 'No results for',
  listError: 'Could not load options',
  listRetry: 'Try again.',
  filterAuto: 'Automatic filter',
  filterManual: 'Manual filter',
  filterOff: 'No typing',
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

const skipLinkFr = {
  label: 'Aller au contenu principal',
  customLabel: 'Aller au contenu',
  hint: 'Tabulation une fois — le lien d’évitement devient visible. Entrée envoie le focus vers le contenu principal.',
  main: 'Contenu principal',
  customTarget: 'Zone de contenu',
  customHint: 'href="#content" — même comportement, autre cible.',
};

const skipLinkEn = {
  label: 'Skip to main content',
  customLabel: 'Skip to content',
  hint: 'Tab once — the skip link becomes visible. Enter moves focus to the main landmark.',
  main: 'Main content',
  customTarget: 'Content area',
  customHint: 'href="#content" — same behaviour, different target.',
};

export type SkipLinkDocsCopy = typeof skipLinkFr;

export function skipLinkCopy(locale: DocsLocale): SkipLinkDocsCopy {
  return locale === 'en' ? skipLinkEn : skipLinkFr;
}

const visuallyHiddenFr = {
  close: 'Fermer',
};

const visuallyHiddenEn = {
  close: 'Close',
};

export type VisuallyHiddenDocsCopy = typeof visuallyHiddenFr;

export function visuallyHiddenCopy(locale: DocsLocale): VisuallyHiddenDocsCopy {
  return locale === 'en' ? visuallyHiddenEn : visuallyHiddenFr;
}

const themeFr = {
  brand: 'Marque violet',
  system: 'Suit le système',
  systemHint:
    'mode="system" — suit prefers-color-scheme, sans toucher document.documentElement.',
};

const themeEn = {
  brand: 'Purple brand',
  system: 'Follows the system',
  systemHint:
    'mode="system" — follows prefers-color-scheme, without touching document.documentElement.',
};

export type ThemeDocsCopy = typeof themeFr;

export function themeCopy(locale: DocsLocale): ThemeDocsCopy {
  return locale === 'en' ? themeEn : themeFr;
}

const typographyFr = {
  sample:
    'Le design system fournit les primitives typographiques pour que les écrans n’inventent pas leurs propres tailles.',
  body: 'body — texte courant',
  bodySm: 'body-sm — texte secondaire, aides de saisie',
  caption: 'caption — légendes, métadonnées',
  styleDisplay: 'Display',
  styleTitle: 'Title',
  styleSubtitle: 'Subtitle — le ciel n’est pas la limite, seulement le début du parcours',
  styleBody:
    'Body Des centaines de milliers d’étudiants suivent un parcours. Le texte courant porte l’essentiel : modules, descriptions, consignes. Il reste utile, simple, et lisible sur toute la largeur de la colonne.',
  styleBodySm:
    'Body-sm Des aides, des légendes secondaires et des métadonnées encore lisibles. Moins d’emphase, même contraste utilisable.',
  styleCaption: 'Caption',
  stylePublish: 'Publié le 12 mars 2026',
  customTitle1: 'Title1',
  customTitle2: 'Title2',
  customTitle3: 'Title3',
  customTitle4: 'Title4',
  customIntro: 'Intro',
  customBodyLarge: 'Body large',
  customBody: 'Body',
  customQuote:
    '« Le design system fournit les primitives typographiques pour que les écrans n’inventent pas leurs propres tailles. »',
  toneDefault: 'tone="default" — contraste maximal',
  toneMuted: 'tone="muted" — reste au-dessus de 4.5:1',
  toneDanger: 'tone="danger" — message d’erreur',
  heading: 'Parcours d’apprentissage',
  level1: 'Niveau 1 — display',
  level2: 'Niveau 2 — title',
  level3: 'Niveau 3 — subtitle',
  level4: 'Niveau 4 — body',
  sizeDecoupledDisplay: 'h2 rendu en display',
  sizeDecoupledSubtitle: 'h1 rendu en subtitle',
  catalogue: 'Consulter le catalogue',
  darkLink: 'Lien sombre',
  lightLink: 'Lien clair',
  inTextBefore: 'Le soulignement est permanent :',
  inTextLink: 'ce lien',
  inTextAfter: 'reste identifiable même sans percevoir la couleur.',
  docs: 'Documentation Dudalo',
  previous: 'Section précédente',
  next: 'Section suivante',
  drafts: 'Brouillons',
  published: 'Publiés',
  labelled: 'Fin des résultats pertinents',
  relevant: 'Résultats pertinents',
  other: 'Autres résultats',
  colorBefore: 'Voici un mot',
  colorEmphasis: 'coloré',
  colorAfter: 'dans la phrase.',
  weightRegular: 'regular — graisse par défaut',
  weightMedium: 'medium — emphase moyenne',
  weightSemibold: 'semibold — emphase forte',
  wrapDefault: 'par défaut',
  wrapNoWrap: 'noWrap',
  wrapTruncate: 'truncate',
  wrapTruncateMultiline: 'truncate { lines: 2 }',
  wrapSample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const typographyEn = {
  sample:
    'The design system provides typography primitives so screens do not invent their own sizes.',
  body: 'body — running text',
  bodySm: 'body-sm — secondary text, field help',
  caption: 'caption — captions, metadata',
  styleDisplay: 'Display',
  styleTitle: 'Title',
  styleSubtitle: 'Subtitle — the sky is not the limit, only the start of the path',
  styleBody:
    'Body Hundreds of thousands of students follow a path. Running text carries the bulk of the content: modules, descriptions, instructions. It stays useful, simple, and readable across the column.',
  styleBodySm:
    'Body-sm Secondary help, captions, and metadata that remain readable. Less emphasis, still a usable contrast.',
  styleCaption: 'Caption',
  stylePublish: 'Published 12 March 2026',
  customTitle1: 'Title1',
  customTitle2: 'Title2',
  customTitle3: 'Title3',
  customTitle4: 'Title4',
  customIntro: 'Intro',
  customBodyLarge: 'Body large',
  customBody: 'Body',
  customQuote:
    '“The design system provides typography primitives so screens do not invent their own sizes.”',
  toneDefault: 'tone="default" — maximum contrast',
  toneMuted: 'tone="muted" — stays above 4.5:1',
  toneDanger: 'tone="danger" — error message',
  heading: 'Learning path',
  level1: 'Level 1 — display',
  level2: 'Level 2 — title',
  level3: 'Level 3 — subtitle',
  level4: 'Level 4 — body',
  sizeDecoupledDisplay: 'h2 rendered as display',
  sizeDecoupledSubtitle: 'h1 rendered as subtitle',
  catalogue: 'Browse the catalogue',
  darkLink: 'Dark color link',
  lightLink: 'Light color link',
  inTextBefore: 'The underline is permanent:',
  inTextLink: 'this link',
  inTextAfter: 'stays identifiable even without perceiving colour.',
  docs: 'Dudalo documentation',
  previous: 'Previous section',
  next: 'Next section',
  drafts: 'Drafts',
  published: 'Published',
  labelled: 'End of relevant results',
  relevant: 'Relevant results',
  other: 'Other results',
  colorBefore: 'Here is a',
  colorEmphasis: 'coloured',
  colorAfter: 'word in the sentence.',
  weightRegular: 'regular — default weight',
  weightMedium: 'medium — medium emphasis',
  weightSemibold: 'semibold — strong emphasis',
  wrapDefault: 'default',
  wrapNoWrap: 'noWrap',
  wrapTruncate: 'truncate',
  wrapTruncateMultiline: 'truncate { lines: 2 }',
  wrapSample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export type TypographyDocsCopy = typeof typographyFr;

export function typographyCopy(locale: DocsLocale): TypographyDocsCopy {
  return locale === 'en' ? typographyEn : typographyFr;
}

const colorFr = {
  brand: 'Marque',
  dark: 'Sombre',
  light: 'Clair',
  danger: 'Danger',
  warning: 'Attention',
  success: 'Succès',
  info: 'Info',
  violet: 'Violet',
};

const colorEn = {
  brand: 'Brand',
  dark: 'Dark',
  light: 'Light',
  danger: 'Danger',
  warning: 'Warning',
  success: 'Success',
  info: 'Info',
  violet: 'Violet',
};

export type ColorDocsCopy = typeof colorFr;

export function colorCopy(locale: DocsLocale): ColorDocsCopy {
  return locale === 'en' ? colorEn : colorFr;
}

const iconFr = {
  continue: 'Continuer',
  filter: 'Filtrer',
  delete: 'Supprimer',
  deleteForever: 'Supprimer définitivement',
};

const iconEn = {
  continue: 'Continue',
  filter: 'Filter',
  delete: 'Delete',
  deleteForever: 'Delete permanently',
};

export type IconDocsCopy = typeof iconFr;

export function iconCopy(locale: DocsLocale): IconDocsCopy {
  return locale === 'en' ? iconEn : iconFr;
}

const calendarFr = {
  weekMonday: 'Semaine le lundi',
  weekSunday: 'Semaine le dimanche',
  french: 'Français',
  english: 'Anglais',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
};

const calendarEn = {
  weekMonday: 'Week starts Monday',
  weekSunday: 'Week starts Sunday',
  french: 'French',
  english: 'English',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
};

export type CalendarDocsCopy = typeof calendarFr;

export function calendarCopy(locale: DocsLocale): CalendarDocsCopy {
  return locale === 'en' ? calendarEn : calendarFr;
}

const fileUploadFr = {
  label: 'Devoir',
  helper: 'PDF, jusqu’à 5 Mo.',
  browse: 'Choisir un fichier',
  drop: 'Glissez les fichiers ici ou cliquez pour les choisir',
  error: 'Ce champ est requis.',
  progress: 'Envoi : 40 %',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
};

const fileUploadEn = {
  label: 'Assignment',
  helper: 'PDF, up to 5 MB.',
  browse: 'Choose file',
  drop: 'Drop files here or click to choose them',
  error: 'This field is required.',
  progress: 'Upload: 40%',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
};

export type FileUploadDocsCopy = typeof fileUploadFr;

export function fileUploadCopy(locale: DocsLocale): FileUploadDocsCopy {
  return locale === 'en' ? fileUploadEn : fileUploadFr;
}

const datePickerFr = {
  label: 'Échéance',
  helper: 'Saisissez une date ou ouvrez le calendrier.',
  placeholder: 'JJ/MM/AAAA',
  error: 'Date invalide.',
  restricted: 'Entre le 5 et le 25 mars.',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
};

const datePickerEn = {
  label: 'Due date',
  helper: 'Type a date or open the calendar.',
  placeholder: 'MM/DD/YYYY',
  error: 'Invalid date.',
  restricted: 'Between 5 and 25 March.',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
};

export type DatePickerDocsCopy = typeof datePickerFr;

export function datePickerCopy(locale: DocsLocale): DatePickerDocsCopy {
  return locale === 'en' ? datePickerEn : datePickerFr;
}

const timePickerFr = {
  label: 'Heure de début',
  helper: 'Format 24 h (HH:mm).',
  error: 'Heure invalide.',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
};

const timePickerEn = {
  label: 'Start time',
  helper: '24-hour format (HH:mm).',
  error: 'Invalid time.',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
};

export type TimePickerDocsCopy = typeof timePickerFr;

export function timePickerCopy(locale: DocsLocale): TimePickerDocsCopy {
  return locale === 'en' ? timePickerEn : timePickerFr;
}

const dateTimePickerFr = {
  label: 'Soutenance',
  helper: 'Date et heure de la session.',
  error: 'Date ou heure invalide.',
};

const dateTimePickerEn = {
  label: 'Defense',
  helper: 'Session date and time.',
  error: 'Invalid date or time.',
};

export type DateTimePickerDocsCopy = typeof dateTimePickerFr;

export function dateTimePickerCopy(locale: DocsLocale): DateTimePickerDocsCopy {
  return locale === 'en' ? dateTimePickerEn : dateTimePickerFr;
}

const tabsFr = {
  label: 'Section du cours',
  overview: 'Aperçu',
  homework: 'Devoirs',
  files: 'Fichiers',
  overviewPanel: 'Présentation du cours.',
  homeworkPanel: 'Liste des devoirs.',
  filesPanel: 'Documents du cours.',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
  productLabel: 'Type de produit',
  internal: 'Logiciel interne',
  customer: 'Logiciel client',
  marketing: 'Marketing & SEO',
  mobile: 'Applis mobiles',
  internalPanel:
    'Construire un CRM pour mon équipe commerciale de 12 personnes, avec le suivi des deals et des relances…',
  customerPanel: 'Portail client pour suivre les commandes et les tickets de support.',
  marketingPanel:
    'Site vitrine et pages de campagne, avec le référencement déjà en place.',
  mobilePanel: 'Application iOS et Android pour l’équipe terrain.',
  attachImage: 'Joindre une image',
  buildIt: 'Créer',
};

const tabsEn = {
  label: 'Course section',
  overview: 'Overview',
  homework: 'Homework',
  files: 'Files',
  overviewPanel: 'Course overview.',
  homeworkPanel: 'Assignment list.',
  filesPanel: 'Course files.',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
  productLabel: 'Product type',
  internal: 'Internal software',
  customer: 'Customer software',
  marketing: 'Marketing & SEO',
  mobile: 'Mobile apps',
  internalPanel:
    'Build a CRM for my 12-person sales team that tracks deals and follow-ups…',
  customerPanel: 'A customer portal to track orders and support tickets.',
  marketingPanel: 'A marketing site and campaign pages, with SEO already in place.',
  mobilePanel: 'An iOS and Android app for the field team.',
  attachImage: 'Attach Image',
  buildIt: 'Build it',
};

export type TabsDocsCopy = typeof tabsFr;

export function tabsCopy(locale: DocsLocale): TabsDocsCopy {
  return locale === 'en' ? tabsEn : tabsFr;
}

const breadcrumbFr = {
  label: 'Fil d’Ariane',
  home: 'Accueil',
  courses: 'Cours',
  math: 'Mathématiques',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
};

const breadcrumbEn = {
  label: 'Breadcrumb',
  home: 'Home',
  courses: 'Courses',
  math: 'Mathematics',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
};

export type BreadcrumbDocsCopy = typeof breadcrumbFr;

export function breadcrumbCopy(locale: DocsLocale): BreadcrumbDocsCopy {
  return locale === 'en' ? breadcrumbEn : breadcrumbFr;
}

const paginationFr = {
  label: 'Pagination des devoirs',
  previous: 'Page précédente',
  next: 'Page suivante',
  page: (page: number) => `Page ${page}`,
  pageCurrent: (page: number) => `Page ${page}, page courante`,
};

const paginationEn = {
  label: 'Assignment pagination',
  previous: 'Previous page',
  next: 'Next page',
  page: (page: number) => `Page ${page}`,
  pageCurrent: (page: number) => `Page ${page}, current page`,
};

export type PaginationDocsCopy = typeof paginationFr;

export function paginationCopy(locale: DocsLocale): PaginationDocsCopy {
  return locale === 'en' ? paginationEn : paginationFr;
}

const menuFr = {
  label: 'Actions du devoir',
  fileLabel: 'Actions du fichier',
  actions: 'Actions',
  rename: 'Renommer',
  duplicate: 'Dupliquer',
  delete: 'Supprimer',
  save: 'Enregistrer',
  archive: 'Archiver',
  share: 'Partager',
  copyLink: 'Copier le lien',
  email: 'E-mail',
  open: 'Ouvrir',
  download: 'Télécharger',
  card: 'Fiche devoir',
  moreActions: 'Plus d’actions',
  openAssignment: 'Ouvrir le devoir',
  saveShortcut: '⌘S',
  duplicateShortcut: '⌘⇧D',
  deleteShortcut: '⌘⌫',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
};

const menuEn = {
  label: 'Assignment actions',
  fileLabel: 'File actions',
  actions: 'Actions',
  rename: 'Rename',
  duplicate: 'Duplicate',
  delete: 'Delete',
  save: 'Save',
  archive: 'Archive',
  share: 'Share',
  copyLink: 'Copy link',
  email: 'Email',
  open: 'Open',
  download: 'Download',
  card: 'Assignment card',
  moreActions: 'More actions',
  openAssignment: 'Open assignment',
  saveShortcut: '⌘S',
  duplicateShortcut: '⌘⇧D',
  deleteShortcut: '⌘⌫',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
};

export type MenuDocsCopy = typeof menuFr;

export function menuCopy(locale: DocsLocale): MenuDocsCopy {
  return locale === 'en' ? menuEn : menuFr;
}

const navbarFr = {
  brand: 'Dudalo',
  notifications: 'Notifications',
  profile: 'Profil',
};

const navbarEn = {
  brand: 'Dudalo',
  notifications: 'Notifications',
  profile: 'Profile',
};

export type NavbarDocsCopy = typeof navbarFr;

export function navbarCopy(locale: DocsLocale): NavbarDocsCopy {
  return locale === 'en' ? navbarEn : navbarFr;
}

const sidebarFr = {
  label: 'Navigation principale',
  home: 'Accueil',
  courses: 'Cours',
  homework: 'Devoirs',
  maths: 'Maths',
  history: 'Histoire',
  collapse: 'Replier le menu',
  expand: 'Déployer le menu',
  openNav: 'Ouvrir la navigation',
  closeNav: 'Fermer la navigation',
  main: 'Contenu du cours',
};

const sidebarEn = {
  label: 'Main navigation',
  home: 'Home',
  courses: 'Courses',
  homework: 'Assignments',
  maths: 'Maths',
  history: 'History',
  collapse: 'Collapse sidebar',
  expand: 'Expand sidebar',
  openNav: 'Open navigation',
  closeNav: 'Close navigation',
  main: 'Course content',
};

export type SidebarDocsCopy = typeof sidebarFr;

export function sidebarCopy(locale: DocsLocale): SidebarDocsCopy {
  return locale === 'en' ? sidebarEn : sidebarFr;
}
