import type { DocsLocale } from './docs-locale';

export type DocsCopyLeaf = { fr: string; en: string };

export const docsCopy = {
  chrome: {
    examplesFollow: {
      fr: 'Les exemples et cette page suivent la langue choisie dans la barre d’outils.',
      en: 'Examples and this page follow the language chosen in the toolbar.',
    },
    themeLang: {
      fr: 'Thème sombre : barre d’outils **Thème**. Langue : barre d’outils **Langue**.',
      en: 'Dark theme: **Theme** toolbar. Language: **Language** toolbar.',
    },
    specialStates: { fr: 'États particuliers', en: 'Special states' },
    options: { fr: 'Options', en: 'Options' },
    accessibility: { fr: 'Accessibilité', en: 'Accessibility' },
    properties: { fr: 'Propriétés', en: 'Properties' },
    do: { fr: 'À faire', en: 'Do' },
    dont: { fr: 'À éviter', en: "Don't" },
    disabled: { fr: 'Désactivé', en: 'Disabled' },
    invalid: { fr: 'Invalide', en: 'Invalid' },
    required: { fr: 'Requis', en: 'Required' },
    helper: { fr: 'Aide', en: 'Helper' },
    sizes: { fr: 'Tailles', en: 'Sizes' },
    group: { fr: 'Groupe', en: 'Group' },
    layout: { fr: 'Disposition', en: 'Layout' },
    enabled: { fr: 'Activé', en: 'On' },
    valid: { fr: 'Valide', en: 'Valid' },
    placeholder: { fr: 'Texte de substitution', en: 'Placeholder' },
    icon: { fr: 'Icône', en: 'Icon' },
    clearable: { fr: 'Effaçable', en: 'Clearable' },
    maxLength: { fr: 'Longueur maximale', en: 'Max length' },
    prefixSuffix: { fr: 'Préfixe et suffixe', en: 'Prefix and suffix' },
    focusGlow: { fr: 'Halo de focus', en: 'Focus glow' },
    number: { fr: 'Nombre', en: 'Number' },
    password: { fr: 'Mot de passe', en: 'Password' },
    indeterminate: { fr: 'État indéterminé', en: 'Indeterminate' },
    twoStates: {
      fr: 'Deux états particuliers : `disabled` et `invalid`.',
      en: 'Two special states: `disabled` and `invalid`.',
    },
    useDisabled: {
      fr: 'Utilisez `disabled` lorsque la valeur ne peut pas être modifiée.',
      en: 'Use `disabled` when the value cannot be changed.',
    },
    useHelper: {
      fr: 'Utilisez `helper` pour donner une indication.',
      en: 'Use `helper` to give a hint.',
    },
    useSizes: {
      fr: '`sm` lorsque l’espace est contraint, `md` par défaut, `lg` pour les formulaires aérés.',
      en: '`sm` when space is tight, `md` by default, `lg` for spacious forms.',
    },
    useHorizontal: {
      fr: '`orientation="horizontal"` aligne les options sur une ligne.',
      en: '`orientation="horizontal"` lays options out in a row.',
    },
    useValid: {
      fr: 'Utilisez `valid` pour indiquer que la valeur saisie est considérée comme correcte.',
      en: 'Use `valid` to indicate that the entered value is considered correct.',
    },
    useMaxLength: {
      fr: 'Utilisez `maxLength` lorsque la longueur de saisie est limitée. Le compteur (caractères restants) s’affiche à droite du libellé. Localisez le texte avec `countMessage`.',
      en: 'Use `maxLength` when input length is limited. The remaining-character count appears to the right of the label. Localize the text with `countMessage`.',
    },
    useFocusGlow: {
      fr: '`focusShadow` ajoute un halo doux autour du cadre au focus. Inactif par défaut : passez `focusShadow` pour l’activer.',
      en: '`focusShadow` adds a soft glow around the field on focus. Off by default: pass `focusShadow` to enable it.',
    },
    nativeInput: {
      fr: 'Les attributs natifs `<input>` (`name`, `value`, `className`, …) sont transmis au contrôle.',
      en: 'Native `<input>` attributes (`name`, `value`, `className`, …) are forwarded to the control.',
    },
  },
  intro: {
    title: { fr: 'd-ui', en: 'd-ui' },
    lead: {
      fr: 'Storybook du package **d-ui** (Dudalo Design System).',
      en: 'Storybook for the **d-ui** package (Dudalo Design System).',
    },
    contract: { fr: 'Contrat public', en: 'Public contract' },
    consume: {
      fr: 'Les applications consommatrices utilisent :',
      en: 'Consuming apps use:',
    },
    itemComponents: {
      fr: 'les composants React (`Button`, `TextInput`, `Textarea`, `Checkbox`, `Radio`, `Switch`, `TimeAgo`, `ThemeProvider`, …)',
      en: 'the React components (`Button`, `TextInput`, `Textarea`, `Checkbox`, `Radio`, `Switch`, `TimeAgo`, `ThemeProvider`, …)',
    },
    itemCssVars: {
      fr: 'les **variables CSS** `--d-ui-*`',
      en: 'the **CSS variables** `--d-ui-*`',
    },
    itemStyles: {
      fr: 'la feuille `d-ui/styles.css`',
      en: 'the `d-ui/styles.css` stylesheet',
    },
    noTailwind: {
      fr: 'Ne pas dépendre des classes Tailwind internes du package.',
      en: 'Do not depend on the package’s internal Tailwind classes.',
    },
    a11y: { fr: 'Accessibilité', en: 'Accessibility' },
    a11yBody: {
      fr: 'Cible **WCAG 2.2 AA**. Chaque story est contrôlée avec l’addon a11y. Voir `docs/accessibility.md`.',
      en: 'Target **WCAG 2.2 AA**. Every story is checked with the a11y addon. See `docs/accessibility.md`.',
    },
  },
  button: {
    title: { fr: 'Button', en: 'Button' },
    intro: {
      fr: 'Les boutons déclenchent une action en un clic.',
      en: 'Buttons trigger an action in a single click.',
    },
    high: { fr: 'Forte emphase', en: 'High emphasis' },
    highBody: {
      fr: 'Utilisez la forte emphase (`variant="primary"`) pour aider à identifier l’action principale. Il ne doit pas y avoir plus d’un bouton en forte emphase dans une vue.',
      en: 'Use high emphasis (`variant="primary"`) to identify the main action. There must not be more than one high-emphasis button in a view.',
    },
    highUse: {
      fr: 'Cas d’usage : Par défaut, Désactivé, Chargement, Avec icône, Menu, Fractionné.',
      en: 'Use cases: Default, Disabled, Loading, With icon, Menu, Split.',
    },
    medium: { fr: 'Emphase moyenne', en: 'Medium emphasis' },
    mediumBody: {
      fr: 'Utilisez l’emphase moyenne (`variant="secondary"`) pour les actions secondaires.',
      en: 'Use medium emphasis (`variant="secondary"`) for secondary actions.',
    },
    toggle: { fr: 'Bouton bascule', en: 'Toggle button' },
    toggleBody: {
      fr: 'Les boutons d’emphase moyenne ont une option supplémentaire : `isSelected`. Utilisez `isSelected` pour des actions à bascule (activation de notifications, abonnement à un flux). Décrivez l’action le plus clairement possible dans le libellé.',
      en: 'Medium-emphasis buttons have an extra option: `isSelected`. Use `isSelected` for toggle actions (notifications, subscribing to a feed). Describe the action as clearly as possible in the label.',
    },
    low: { fr: 'Faible emphase', en: 'Low emphasis' },
    lowBody: {
      fr: 'Quand la vue contient déjà un bouton `primary` et un `secondary`, utilisez la faible emphase (`variant="ghost"`) pour les actions de moindre priorité. Autrement, utilisez-le lorsqu’il n’y a qu’un seul niveau de priorité.',
      en: 'When the view already has a `primary` and a `secondary` button, use low emphasis (`variant="ghost"`) for lower-priority actions. Otherwise use it when there is only one priority level.',
    },
    lowUse: {
      fr: 'Cas d’usage : Par défaut, Désactivé, Chargement, Avec icône, Menu (pas de fractionné).',
      en: 'Use cases: Default, Disabled, Loading, With icon, Menu (no split).',
    },
    loading: { fr: 'Chargement', en: 'Loading' },
    loadingBody: {
      fr: '`loading` affiche un indicateur, conserve le libellé, pose `aria-busy` et désactive le contrôle. L’icône est remplacée par l’indicateur. `loadingIndicator="spinner"` (défaut) ou `"bounce"`.',
      en: '`loading` shows an indicator, keeps the label, sets `aria-busy`, and disables the control. The icon is replaced by the indicator. `loadingIndicator="spinner"` (default) or `"bounce"`.',
    },
    small: { fr: 'Petite taille', en: 'Small size' },
    smallBody: {
      fr: 'Utilisez la petite taille (`size="sm"`) lorsque l’espace est contraint.',
      en: 'Use the small size (`size="sm"`) when space is constrained.',
    },
    fullWidth: { fr: 'Pleine largeur', en: 'Full width' },
    fullWidthBody: {
      fr: 'Utilisez `fullWidth` lorsque le bouton doit occuper toute la largeur du conteneur.',
      en: 'Use `fullWidth` when the button must fill the container width.',
    },
    compositions: {
      fr: 'Menu et fractionné sont des **compositions** de `Button` / `IconButton` (chevron, `aria-haspopup`). Le menu déroulant complet arrive avec Menu (DS-030).',
      en: 'Menu and split are **compositions** of `Button` / `IconButton` (chevron, `aria-haspopup`). The full dropdown ships with Menu (DS-030).',
    },
    a11yButton: { fr: 'Button', en: 'Button' },
    a11yButtonBody: {
      fr: 'Le bouton utilise le texte visible comme nom accessible. S’il n’y a pas de texte (icône seule, image, …), passez un `aria-label` qui décrit l’action.',
      en: 'The button uses its visible text as the accessible name. If there is no text (icon-only, image, …), pass an `aria-label` that describes the action.',
    },
    a11yUse: {
      fr: 'Cas d’usage accessibilité :',
      en: 'Accessibility use cases:',
    },
    a11yNative: {
      fr: '**Bouton natif** — `Button` rend un `<button type="button">`. Pour la navigation, utilisez un lien (`Link`, DS-019).',
      en: '**Native button** — `Button` renders a `<button type="button">`. For navigation, use a link (`Link`, DS-019).',
    },
    a11yToggle: {
      fr: "**Bascule** — état actif/inactif via `isSelected`. Si le libellé change selon l’état (`S'abonner` / `Abonné`), ce nom suffit. Si le libellé ne change pas, `aria-pressed` est posé depuis `isSelected`.",
      en: '**Toggle** — on/off via `isSelected`. If the label changes with state (`Subscribe` / `Subscribed`), that name is enough. If the label does not change, `aria-pressed` is set from `isSelected`.',
    },
    a11yMenu: {
      fr: '**Menu** — si le bouton ouvre une liste : `aria-haspopup="true"`, `aria-expanded` selon l’ouverture, et `aria-controls` vers l’id du menu uniquement si le menu est dans le DOM.',
      en: '**Menu** — if the button opens a list: `aria-haspopup="true"`, `aria-expanded` from open state, and `aria-controls` pointing at the menu id only if the menu is in the DOM.',
    },
    a11yLoading: {
      fr: '**Chargement** — `loading` conserve le libellé, pose `aria-busy` et désactive le contrôle. `loadingIndicator` choisit spinner ou bounce.',
      en: '**Loading** — `loading` keeps the label, sets `aria-busy`, and disables the control. `loadingIndicator` chooses spinner or bounce.',
    },
    a11yIcon: { fr: 'IconButton', en: 'IconButton' },
    a11yIconBody: {
      fr: 'Toutes les règles de `Button` s’appliquent. Comme il n’y a pas de texte, `aria-label` est obligatoire.',
      en: 'Every `Button` rule applies. Because there is no text, `aria-label` is required.',
    },
    propsButton: { fr: 'Button', en: 'Button' },
    propsButtonBody: {
      fr: 'Les attributs natifs `<button>` (`disabled`, `type`, `className`, `aria-haspopup`, …) sont transmis.',
      en: 'Native `<button>` attributes (`disabled`, `type`, `className`, `aria-haspopup`, …) are forwarded.',
    },
    propsIcon: { fr: 'IconButton', en: 'IconButton' },
    propsIconBody: {
      fr: '`IconButton` exige `aria-label`. `icon`, `variant`, `size`, `loading`, `loadingIndicator`, `fullWidth` et `isSelected` sont les mêmes que `Button`.',
      en: '`IconButton` requires `aria-label`. `icon`, `variant`, `size`, `loading`, `loadingIndicator`, `fullWidth`, and `isSelected` match `Button`.',
    },
  },
  checkbox: {
    title: { fr: 'Checkbox', en: 'Checkbox' },
    intro: {
      fr: '`Checkbox` est une case à cocher native. Pour plusieurs options indépendantes, utilisez `CheckboxGroup`.',
      en: '`Checkbox` is a native checkbox. For several independent options, use `CheckboxGroup`.',
    },
    useInvalid: {
      fr: 'Utilisez `invalid` (et `error` pour le message) pour indiquer que la valeur est considérée comme incorrecte. `invalid` pose `aria-invalid`.',
      en: 'Use `invalid` (and `error` for the message) to indicate that the value is considered incorrect. `invalid` sets `aria-invalid`.',
    },
    useRequired: {
      fr: 'Utilisez `required` pour indiquer que la case doit être cochée avant l’envoi du formulaire. Un astérisque est affiché à côté du libellé.',
      en: 'Use `required` to indicate that the box must be checked before submit. An asterisk is shown next to the label.',
    },
    useIndeterminate: {
      fr: '`indeterminate` représente un état mixte (ni tout coché, ni tout décoché), typiquement sur « Tout sélectionner ». Pose `aria-checked="mixed"`.',
      en: '`indeterminate` is a mixed state (neither all on nor all off), typically on “Select all”. Sets `aria-checked="mixed"`.',
    },
    groupBody: {
      fr: '`CheckboxGroup` enveloppe les options dans un `fieldset` nommé par `label` (`<legend>`). La valeur est un tableau de chaînes.',
      en: '`CheckboxGroup` wraps options in a `fieldset` named by `label` (`<legend>`). The value is an array of strings.',
    },
    a11yBody: {
      fr: '`Checkbox` rend un `<input type="checkbox">` natif. Associez toujours un label visible : prop `label`, `aria-labelledby`, ou un `<label htmlFor>` externe.',
      en: '`Checkbox` renders a native `<input type="checkbox">`. Always associate a visible label: the `label` prop, `aria-labelledby`, or an external `<label htmlFor>`.',
    },
    a11yGroup: {
      fr: '`CheckboxGroup` pose `fieldset` + `legend`. Ne pas simuler un groupe avec des `div` et `role="group"` si un `fieldset` suffit.',
      en: '`CheckboxGroup` sets `fieldset` + `legend`. Do not fake a group with `div` and `role="group"` when a `fieldset` is enough.',
    },
    a11yDisabled: {
      fr: 'Le champ peut être désactivé : `disabled` n’est plus focusable. Indiquez autrement pourquoi le contrôle est là.',
      en: 'The field can be disabled: `disabled` is no longer focusable. Explain elsewhere why the control is there.',
    },
    doTerms: {
      fr: '`<Checkbox label="J’accepte les conditions" required />`',
      en: '`<Checkbox label="I accept the terms" required />`',
    },
    doGroup: {
      fr: '`CheckboxGroup` pour plusieurs options liées',
      en: '`CheckboxGroup` for several related options',
    },
    doInvalid: {
      fr: '`invalid` **et** un message `error` (ne pas se fier à la couleur seule)',
      en: '`invalid` **and** an `error` message (do not rely on color alone)',
    },
    doIndeterminate: {
      fr: '`indeterminate` pour un parent « tout sélectionner »',
      en: '`indeterminate` for a parent “select all”',
    },
    dontProximity: {
      fr: 'Une case identifiée seulement par la proximité d’un texte',
      en: 'A checkbox identified only by nearby text',
    },
    dontTree: {
      fr: 'Arborescence de cases (hors périmètre)',
      en: 'Checkbox trees (out of scope)',
    },
    dontRequiredEach: {
      fr: '`required` sur chaque option d’un groupe multi-sélection',
      en: '`required` on every option in a multi-select group',
    },
  },
  radio: {
    title: { fr: 'Radio', en: 'Radio' },
    intro: {
      fr: '`Radio` est un bouton radio natif. Utilisez-le dans un `RadioGroup` pour un choix exclusif.',
      en: '`Radio` is a native radio button. Use it in a `RadioGroup` for an exclusive choice.',
    },
    useDisabled: {
      fr: 'Utilisez `disabled` sur le groupe lorsque la valeur ne peut pas être modifiée.',
      en: 'Use `disabled` on the group when the value cannot be changed.',
    },
    useInvalid: {
      fr: 'Utilisez `invalid` (et `error` pour le message) pour indiquer qu’aucune option n’est considérée comme correcte. Le groupe pose `aria-invalid` sur le `fieldset`.',
      en: 'Use `invalid` (and `error` for the message) to indicate that no option is considered correct. The group sets `aria-invalid` on the `fieldset`.',
    },
    useRequired: {
      fr: 'Utilisez `required` sur le groupe pour exiger une sélection avant l’envoi du formulaire. Un astérisque est affiché à côté de la légende.',
      en: 'Use `required` on the group to require a selection before submit. An asterisk is shown next to the legend.',
    },
    groupBody: {
      fr: '`RadioGroup` enveloppe les options dans un `fieldset` nommé par `label` (`<legend>`). Toutes les radios partagent le même `name`. La valeur est une chaîne.',
      en: '`RadioGroup` wraps options in a `fieldset` named by `label` (`<legend>`). All radios share the same `name`. The value is a string.',
    },
    a11yBody: {
      fr: '`Radio` rend un `<input type="radio">` natif. Le groupe utilise `fieldset` + `legend`. Les flèches déplacent la sélection dans le groupe.',
      en: '`Radio` renders a native `<input type="radio">`. The group uses `fieldset` + `legend`. Arrow keys move the selection within the group.',
    },
    a11yLabel: {
      fr: 'Associez toujours un label visible par option. La légende du groupe nomme l’ensemble, pas chaque radio.',
      en: 'Always associate a visible label per option. The group legend names the set, not each radio.',
    },
    doGroup: {
      fr: '`RadioGroup` + `Radio` avec `value` distinctes',
      en: '`RadioGroup` + `Radio` with distinct `value`s',
    },
    doName: {
      fr: 'Un `name` **par groupe** sur la page (ou omettre `name` : un identifiant est généré)',
      en: 'One `name` **per group** on the page (or omit `name`: an id is generated)',
    },
    doInvalid: {
      fr: '`invalid` **et** un message `error` (ne pas se fier à la couleur seule)',
      en: '`invalid` **and** an `error` message (do not rely on color alone)',
    },
    dontUngrouped: {
      fr: 'Des radios sans groupe nommé',
      en: 'Radios without a named group',
    },
    dontSegmented: {
      fr: 'Contrôle segmenté (hors périmètre)',
      en: 'Segmented control (out of scope)',
    },
    dontCheckboxes: {
      fr: 'Simuler un choix exclusif avec des cases à cocher',
      en: 'Faking an exclusive choice with checkboxes',
    },
    nativeForward: {
      fr: 'Les attributs natifs `<input>` (`name`, `className`, …) sont transmis au contrôle. `value` est obligatoire.',
      en: 'Native `<input>` attributes (`name`, `className`, …) are forwarded to the control. `value` is required.',
    },
  },
  switch: {
    title: { fr: 'Switch', en: 'Switch' },
    intro: {
      fr: '`Switch` est un interrupteur pour un réglage immédiat (activé / désactivé). Pour un accord ou un choix de formulaire, préférez `Checkbox`.',
      en: '`Switch` is a toggle for an immediate setting (on / off). For agreement or a form choice, prefer `Checkbox`.',
    },
    threeStates: {
      fr: 'Trois états particuliers : activé, `disabled` et `invalid`.',
      en: 'Three special states: on, `disabled`, and `invalid`.',
    },
    useOn: {
      fr: 'Passez `checked` (contrôlé) ou `defaultChecked` (non contrôlé).',
      en: 'Pass `checked` (controlled) or `defaultChecked` (uncontrolled).',
    },
    useInvalid: {
      fr: 'Utilisez `invalid` (et `error` pour le message) pour indiquer que la valeur est considérée comme incorrecte. `invalid` pose `aria-invalid`.',
      en: 'Use `invalid` (and `error` for the message) to indicate that the value is considered incorrect. `invalid` sets `aria-invalid`.',
    },
    useRequired: {
      fr: 'Utilisez `required` pour indiquer que l’interrupteur doit être activé avant l’envoi du formulaire. Un astérisque est affiché à côté du libellé.',
      en: 'Use `required` to indicate that the switch must be on before submit. An asterisk is shown next to the label.',
    },
    a11yBody: {
      fr: '`Switch` rend un `<input type="checkbox" role="switch">`. L’état est exposé par `aria-checked` (`true` / `false`). Associez toujours un nom accessible : prop `label`, `aria-label`, ou `aria-labelledby`.',
      en: '`Switch` renders `<input type="checkbox" role="switch">`. State is exposed via `aria-checked` (`true` / `false`). Always associate an accessible name: the `label` prop, `aria-label`, or `aria-labelledby`.',
    },
    a11yKeys: {
      fr: 'Espace et clic basculent l’état. Le focus visible utilise l’anneau `ring-focus`.',
      en: 'Space and click toggle the state. Visible focus uses the `ring-focus` ring.',
    },
    doLabel: {
      fr: '`<Switch label="Mode compact" />`',
      en: '`<Switch label="Compact mode" />`',
    },
    doAria: {
      fr: '`aria-label` si le libellé n’est pas visible',
      en: '`aria-label` if the label is not visible',
    },
    doInvalid: {
      fr: '`invalid` **et** un message `error` (ne pas se fier à la couleur seule)',
      en: '`invalid` **and** an `error` message (do not rely on color alone)',
    },
    dontUnnamed: {
      fr: 'Un interrupteur sans nom accessible',
      en: 'A switch without an accessible name',
    },
    dontRadioRow: {
      fr: 'Remplacer un groupe radio par une rangée d’interrupteurs',
      en: 'Replacing a radio group with a row of switches',
    },
    dontSegmented: {
      fr: 'Contrôle segmenté (hors périmètre)',
      en: 'Segmented control (out of scope)',
    },
  },
  textInput: {
    title: { fr: 'TextInput', en: 'TextInput' },
    intro: {
      fr: '`TextInput` est le champ de saisie d’une ligne, en pleine largeur. Pour plusieurs lignes, utilisez `Textarea`.',
      en: '`TextInput` is the single-line text field, full width. For several lines, use `Textarea`.',
    },
    labelProp: {
      fr: '`label` est une prop du composant : le libellé s’affiche au-dessus du cadre. Vous pouvez aussi attacher un `<label htmlFor>` externe ou `aria-labelledby` (par exemple via `Field`, DS-022).',
      en: '`label` is a component prop: the label renders above the field. You can also attach an external `<label htmlFor>` or `aria-labelledby` (for example via `Field`, DS-022).',
    },
    threeStates: {
      fr: 'Trois états particuliers : `disabled`, `valid` et `invalid`.',
      en: 'Three special states: `disabled`, `valid`, and `invalid`.',
    },
    useInvalid: {
      fr: 'Utilisez `invalid` (et `error` pour le message) pour indiquer que la valeur saisie est considérée comme incorrecte. `invalid` pose `aria-invalid`.',
      en: 'Use `invalid` (and `error` for the message) to indicate that the entered value is considered incorrect. `invalid` sets `aria-invalid`.',
    },
    optionsLead: {
      fr: 'Options : `required`, `helper`, `placeholder`, `icon`, `clearable`, `maxLength`. Les chips sont hors périmètre.',
      en: 'Options: `required`, `helper`, `placeholder`, `icon`, `clearable`, `maxLength`. Chips are out of scope.',
    },
    useRequired: {
      fr: 'Utilisez `required` pour indiquer que le champ doit être renseigné avant l’envoi du formulaire. Un astérisque est affiché à côté du libellé.',
      en: 'Use `required` to indicate that the field must be filled before submit. An asterisk is shown next to the label.',
    },
    usePlaceholder: {
      fr: 'Utilisez `placeholder` pour donner un exemple de valeur attendue ou inviter à remplir le champ.',
      en: 'Use `placeholder` to show an example value or to invite filling the field.',
    },
    useIcon: {
      fr: 'Utilisez `icon` pour illustrer le champ. `icon` complète `label` mais ne le remplace pas.',
      en: 'Use `icon` to illustrate the field. `icon` complements `label` but does not replace it.',
    },
    useClearable: {
      fr: '`clearable` affiche un bouton d’effacement dès que la valeur n’est pas vide. Passez `clearLabel` (nom accessible) et `onClear` si la valeur est contrôlée.',
      en: '`clearable` shows a clear button as soon as the value is not empty. Pass `clearLabel` (accessible name) and `onClear` if the value is controlled.',
    },
    usePrefix: {
      fr: 'Les slots `prefix` et `suffix` illustrent le champ (unité, schéma d’URL). Ils ne remplacent pas le label.',
      en: '`prefix` and `suffix` slots illustrate the field (unit, URL scheme). They do not replace the label.',
    },
    useNumber: {
      fr: 'Utilisez `type="number"` lorsque la valeur attendue est numérique. `inputMode="numeric"` aide le clavier logiciel.',
      en: 'Use `type="number"` when the expected value is numeric. `inputMode="numeric"` helps the software keyboard.',
    },
    usePassword: {
      fr: '`type="password"` masque la saisie et propose un basculeur de visibilité nommé (pas seulement une icône).',
      en: '`type="password"` hides input and offers a named visibility toggle (not an icon alone).',
    },
    a11yNative: {
      fr: '`TextInput` rend un `<input>` natif. Pour plusieurs lignes, utilisez `Textarea`.',
      en: '`TextInput` renders a native `<input>`. For several lines, use `Textarea`.',
    },
    a11yLabel: {
      fr: 'Associez toujours un label visible : prop `label`, `aria-labelledby`, ou un `<label htmlFor>` externe. Un placeholder ne suffit pas.',
      en: 'Always associate a visible label: the `label` prop, `aria-labelledby`, or an external `<label htmlFor>`. A placeholder is not enough.',
    },
    a11yCount: {
      fr: 'Lorsque `maxLength` est posé, fournissez `countMessage` localisé (par exemple « n caractères restants »). Le compteur est lié par `aria-describedby` : il n’y a pas d’`aria-live` à chaque frappe.',
      en: 'When `maxLength` is set, provide a localized `countMessage` (for example “n characters remaining”). The counter is wired with `aria-describedby`: there is no `aria-live` on each keystroke.',
    },
    a11yDisabledLead: {
      fr: 'Le champ peut être désactivé de deux façons :',
      en: 'The field can be disabled in two ways:',
    },
    a11yDisabled: {
      fr: '`disabled` désactive complètement le champ : il n’est plus focusable et les événements pointeur sont ignorés. Indiquez autrement pourquoi le champ est là et pourquoi il est désactivé.',
      en: '`disabled` fully disables the field: it is no longer focusable and pointer events are ignored. Explain elsewhere why the field is there and why it is disabled.',
    },
    a11yReadOnly: {
      fr: '`readOnly` / `aria-disabled` empêche l’édition tout en laissant le focus. Expliquez la raison via `helper`, un tooltip ou une description ARIA.',
      en: '`readOnly` / `aria-disabled` prevents editing while keeping focus. Explain why via `helper`, a tooltip, or an ARIA description.',
    },
    doEmail: {
      fr: '`<TextInput label="Email" type="email" autoComplete="email" />`',
      en: '`<TextInput label="Email" type="email" autoComplete="email" />`',
    },
    doLabels: {
      fr: '`clearLabel` / `revealPasswordLabel` dans la langue de l’app',
      en: '`clearLabel` / `revealPasswordLabel` in the app language',
    },
    doCount: {
      fr: '`countMessage` localisé lorsque `maxLength` est posé',
      en: 'Localized `countMessage` when `maxLength` is set',
    },
    doInvalid: {
      fr: '`invalid` **et** un message `error` (ne pas se fier à la couleur seule)',
      en: '`invalid` **and** an `error` message (do not rely on color alone)',
    },
    dontPlaceholder: {
      fr: 'Un champ identifié seulement par le placeholder',
      en: 'A field identified only by its placeholder',
    },
    dontIcon: {
      fr: 'Remplacer le label par `icon`',
      en: 'Replacing the label with `icon`',
    },
    dontPasswordIcon: {
      fr: 'Masquer le mot de passe derrière une icône sans nom accessible',
      en: 'Hiding the password behind an icon with no accessible name',
    },
    dontOutOfScope: {
      fr: 'Saisie masquée (carte), texte riche, OTP, chips — hors périmètre',
      en: 'Masked input (card), rich text, OTP, chips — out of scope',
    },
    nativeForward: {
      fr: 'Les attributs natifs `<input>` (`autoComplete`, `inputMode`, `name`, `required`, `className`, …) sont transmis au contrôle.',
      en: 'Native `<input>` attributes (`autoComplete`, `inputMode`, `name`, `required`, `className`, …) are forwarded to the control.',
    },
  },
  textarea: {
    title: { fr: 'Textarea', en: 'Textarea' },
    intro: {
      fr: 'Utilisez `Textarea` lorsque la saisie dépasse une ligne. Le cadre reste compact (deux lignes par défaut), en pleine largeur.',
      en: 'Use `Textarea` when input spans more than one line. The field stays compact (two rows by default), full width.',
    },
    labelProp: {
      fr: '`label` est une prop du composant : le libellé s’affiche au-dessus du cadre.',
      en: '`label` is a component prop: the label renders above the field.',
    },
    a11yNative: {
      fr: '`Textarea` rend un `<textarea>` natif.',
      en: '`Textarea` renders a native `<textarea>`.',
    },
    doComment: {
      fr: '`<Textarea label="Commentaire" />`',
      en: '`<Textarea label="Comment" />`',
    },
    doCount: {
      fr: '`countMessage` localisé lorsque `maxLength` est posé',
      en: 'Localized `countMessage` when `maxLength` is set',
    },
    doInvalid: {
      fr: '`invalid` **et** un message `error` (ne pas se fier à la couleur seule)',
      en: '`invalid` **and** an `error` message (do not rely on color alone)',
    },
    dontPlaceholder: {
      fr: 'Une zone identifiée seulement par le placeholder',
      en: 'An area identified only by its placeholder',
    },
    dontMultilineInput: {
      fr: 'Un `TextInput` multiligne — utilisez `Textarea`',
      en: 'A multiline `TextInput` — use `Textarea`',
    },
    nativeForward: {
      fr: 'Les attributs natifs `<textarea>` (`name`, `required`, `className`, …) sont transmis au contrôle.',
      en: 'Native `<textarea>` attributes (`name`, `required`, `className`, …) are forwarded to the control.',
    },
  },
  timeAgo: {
    title: { fr: 'TimeAgo', en: 'TimeAgo' },
    intro: {
      fr: 'TimeAgo affiche un horodatage **relatif** (`il y a 3 minutes`) tout en gardant l’instant **absolu** disponible pour les personnes et les machines. Le texte est formaté avec `Intl` — il n’y a pas de bundle `date-fns`. Survolez l’horodatage pour l’heure absolue ; les lecteurs d’écran reçoivent la phrase relative **et** la date absolue.',
      en: 'TimeAgo shows a **relative** timestamp (`3 minutes ago`) while keeping the **absolute** instant available to people and machines. Text is formatted with `Intl` — there is no `date-fns` bundle. Hover the timestamp for the absolute time; screen readers get the relative phrase **and** the absolute date.',
    },
    locale: { fr: 'Langue', en: 'Locale' },
    localeBody: {
      fr: 'Passez une chaîne BCP 47 `locale` pour contrôler le libellé relatif et le formatage absolu. Les locales en 24 h (ex. `fr`) formatent l’infobulle sans suffixe AM/PM. `locale` pose aussi l’attribut `lang` pour que les technologies d’assistance utilisent la bonne voix (WCAG 3.1.2).',
      en: 'Pass a BCP 47 `locale` string to control the relative label and absolute formatting. 24-hour locales (e.g. `fr`) format the tooltip without an AM/PM suffix. `locale` also sets `lang` so assistive tech uses the right voice (WCAG 3.1.2).',
    },
    localeInject: {
      fr: 'Sans `locale`, c’est la locale d’exécution. Injectez la langue de l’app (`locale={i18n.language}`) plutôt que de figer une valeur dans le design system.',
      en: 'Without `locale`, the runtime locale is used. Inject the app language (`locale={i18n.language}`) rather than hard-coding a value in the design system.',
    },
    live: { fr: 'Mises à jour en direct', en: 'Live updates' },
    liveBody: {
      fr: 'La prop `live` rafraîchit le texte relatif visible sur un intervalle **grossier** pour que le libellé reste pertinent tant que la vue est ouverte :',
      en: 'The `live` prop refreshes the visible relative text on a **coarse** interval so the label stays relevant while the view is open:',
    },
    live10s: {
      fr: 'moins d’1 minute — toutes les 10 secondes',
      en: 'under 1 minute — every 10 seconds',
    },
    live30s: {
      fr: 'moins d’1 heure — toutes les 30 secondes',
      en: 'under 1 hour — every 30 seconds',
    },
    live1m: {
      fr: 'moins d’1 jour — toutes les minutes',
      en: 'under 1 day — every minute',
    },
    live1h: {
      fr: 'plus ancien — toutes les heures',
      en: 'older — every hour',
    },
    liveSilent: {
      fr: 'Les mises à jour sont visuelles uniquement. `live` ne pose **pas** `aria-live`, donc les lecteurs d’écran ne sont pas saturés. Passez `aria-live="polite"` pour opt-in des annonces (à éviter sur les longues listes).',
      en: 'Updates are visual only. `live` does **not** set `aria-live`, so screen readers are not flooded. Pass `aria-live="polite"` to opt into announcements (avoid on long lists).',
    },
    liveOff: {
      fr: 'Laissez `live` désactivé dans les fils de discussion, les tableaux, et toute liste qui peut contenir beaucoup d’horodatages.',
      en: 'Leave `live` off in threads, tables, and any list that may contain many timestamps.',
    },
    pastFuture: { fr: 'Passé et futur', en: 'Past and future' },
    pastFutureBody: {
      fr: '`Intl.RelativeTimeFormat` avec `numeric: "auto"` produit une formulation naturelle (`hier`, `maintenant`, `dans 3 heures`) dans les deux directions.',
      en: '`Intl.RelativeTimeFormat` with `numeric: "auto"` produces natural wording (`yesterday`, `now`, `in 3 hours`) in both directions.',
    },
    size: { fr: 'Taille', en: 'Size' },
    sizeBody: {
      fr: '`size` ajuste l’échelle du texte. Composez TimeAgo dans `Text` / `Heading` lorsque ces primitifs existent ; les tailles intégrées couvrent l’usage autonome.',
      en: '`size` scales the text. Compose TimeAgo in `Text` / `Heading` when those primitives exist; built-in sizes cover standalone use.',
    },
    sizeSm: {
      fr: '`"sm"` — métadonnées compactes (cartes, commentaires)',
      en: '`"sm"` — compact metadata (cards, comments)',
    },
    sizeMd: {
      fr: '`"md"` (défaut) — horodatage au corps de texte',
      en: '`"md"` (default) — body-text timestamp',
    },
    dateValues: { fr: 'Valeurs de date', en: 'Date values' },
    dateValuesBody: {
      fr: '`date` accepte un `Date`, une chaîne ISO-8601, ou des millisecondes epoch. Le composant écrit toujours un datetime global valide sur `<time datetime>`.',
      en: '`date` accepts a `Date`, an ISO-8601 string, or epoch milliseconds. The component always writes a valid global datetime on `<time datetime>`.',
    },
    dateInvalid: {
      fr: 'Une valeur invalide ne rend pas de `<time>` : un `<span>` avec un tiret cadratin est utilisé à la place, pour que le markup reste sémantiquement honnête.',
      en: 'An invalid value does not render a `<time>`: a `<span>` with an em dash is used instead, so the markup stays semantically honest.',
    },
    a11yNative: {
      fr: '`TimeAgo` est un élément natif `<time>`. Il n’a pas de rôle ARIA supplémentaire.',
      en: '`TimeAgo` is a native `<time>` element. It has no extra ARIA role.',
    },
    a11yValid: {
      fr: 'Passez toujours un `date` valide pour que `datetime` soit un instant ISO-8601 lisible par une machine.',
      en: 'Always pass a valid `date` so `datetime` is a machine-readable ISO-8601 instant.',
    },
    a11yLocale: {
      fr: 'Passez `locale` dès que le texte n’est pas dans la langue du document. Le `lang` de l’élément suit `locale`.',
      en: 'Pass `locale` as soon as the text is not in the document language. The element’s `lang` follows `locale`.',
    },
    a11yHidden: {
      fr: 'Le texte visible est relatif. L’instant absolu est dans `title` (infobulle pointeur) **et** dans une phrase masquée visuellement (technologies d’assistance — `title` n’est pas un nom accessible fiable).',
      en: 'Visible text is relative. The absolute instant is in `title` (pointer tooltip) **and** in a visually hidden phrase (assistive tech — `title` is not a reliable accessible name).',
    },
    a11yLive: {
      fr: 'Ne placez pas TimeAgo dans une région live qui ré-annonce chaque tick. `live` est silencieux par défaut.',
      en: 'Do not put TimeAgo in a live region that re-announces every tick. `live` is silent by default.',
    },
    a11yOptIn: {
      fr: 'Annonces en opt-in : `aria-live="polite"` sur le composant. Gardez l’intervalle grossier.',
      en: 'Opt-in announcements: `aria-live="polite"` on the component. Keep the coarse interval.',
    },
    a11yHydration: {
      fr: 'Le texte relatif dépend de « maintenant » : l’élément pose `suppressHydrationWarning` pour que SSR et client puissent différer d’une unité sans casser l’hydratation.',
      en: 'Relative text depends on “now”: the element sets `suppressHydrationWarning` so SSR and client can differ by one unit without breaking hydration.',
    },
    propsTitle: { fr: 'TimeAgo', en: 'TimeAgo' },
    propsBody: {
      fr: 'Les attributs natifs `<time>` (`className`, `aria-live`, …) sont transmis. `dateTime` et `children` sont gérés par le composant.',
      en: 'Native `<time>` attributes (`className`, `aria-live`, …) are forwarded. `dateTime` and `children` are owned by the component.',
    },
  },
} as const;

export type DocsCopy = typeof docsCopy;

export function isDocsCopyLeaf(value: unknown): value is DocsCopyLeaf {
  return (
    !!value &&
    typeof value === 'object' &&
    'fr' in value &&
    'en' in value &&
    typeof (value as DocsCopyLeaf).fr === 'string' &&
    typeof (value as DocsCopyLeaf).en === 'string'
  );
}

export function docsString(copy: unknown, path: string, locale: DocsLocale): string {
  const parts = path.split('.');
  let cur: unknown = copy;
  for (const part of parts) {
    if (!cur || typeof cur !== 'object' || !(part in cur)) {
      throw new Error(`Missing docs copy: ${path}`);
    }
    cur = (cur as Record<string, unknown>)[part];
  }
  if (!isDocsCopyLeaf(cur)) {
    throw new Error(`Not a docs copy leaf: ${path}`);
  }
  return locale === 'en' ? cur.en : cur.fr;
}

export function collectDocsCopyLeaves(
  value: unknown,
  prefix = '',
): { path: string; fr: string; en: string }[] {
  if (isDocsCopyLeaf(value)) {
    return [{ path: prefix, fr: value.fr, en: value.en }];
  }
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, child]) =>
    collectDocsCopyLeaves(child, prefix ? `${prefix}.${key}` : key),
  );
}
