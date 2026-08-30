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
    radius: { fr: 'Arrondi', en: 'Corner radius' },
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
    placement: { fr: 'Placement', en: 'Placement' },
    alignments: { fr: 'Alignements', en: 'Alignments' },
    controlled: { fr: 'Contrôlé', en: 'Controlled' },
    collision: { fr: 'Collision', en: 'Collision' },
    portal: { fr: 'Portail', en: 'Portal' },
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
      fr: 'les composants React (`Button`, `Text`, `Heading`, `Link`, `Icon`, `Field`, `TextInput`, `Textarea`, `Checkbox`, `Radio`, `Switch`, `Select`, `Combobox`, `Calendar`, `Tooltip`, `Popover`, `EmojiPopover`, `TimeAgo`, `ThemeProvider`, `SkipLink`, …)',
      en: 'the React components (`Button`, `Text`, `Heading`, `Link`, `Icon`, `Field`, `TextInput`, `Textarea`, `Checkbox`, `Radio`, `Switch`, `Select`, `Combobox`, `Calendar`, `Tooltip`, `Popover`, `EmojiPopover`, `TimeAgo`, `ThemeProvider`, `SkipLink`, …)',
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
  skipLink: {
    intro: {
      fr: '`SkipLink` est le premier contrôle focusable d’une coquille d’application. Invisible tant qu’on n’utilise pas le clavier, il apparaît au focus et envoie vers le landmark principal — pour ne pas tabuler tout le chrome (WCAG 2.4.1).',
      en: '`SkipLink` is the first focusable control in an app shell. Hidden until the keyboard is used, it appears on focus and jumps to the main landmark — so you do not tab through all the chrome (WCAG 2.4.1).',
    },
    target: { fr: 'Cible', en: 'Target' },
    targetBody: {
      fr: '`href` pointe un identifiant déjà focusable, en général `<main id="main" tabIndex={-1}>`. Le composant **ne pose pas** `tabIndex` sur la cible : c’est à l’application de rendre le landmark focusable. Si la cible est absente **ou** ne peut pas recevoir le focus, le clic n’est pas annulé : le navigateur suit l’ancre.',
      en: '`href` points at an already-focusable id, usually `<main id="main" tabIndex={-1}>`. The component does **not** set `tabIndex` on the target: the app must make the landmark focusable. If the target is missing **or** cannot take focus, the click is not cancelled: the browser follows the hash.',
    },
    label: { fr: 'Libellé', en: 'Label' },
    labelBody: {
      fr: 'Le texte par défaut est anglais (`Skip to main content`) — c’est le seul fallback a11y autorisé dans un composant. Passez `children` dans la langue de l’app (`Aller au contenu principal`).',
      en: 'The default text is English (`Skip to main content`) — the only a11y fallback allowed in a component. Pass `children` in the app language (`Skip to main content`).',
    },
    a11yBody: {
      fr: '`SkipLink` rend un `<a href="#main">`. Pas de `role`, pas de `div` cliquable. Au clic / Entrée, si la cible existe, le focus y est déplacé sans muter le DOM hôte. `SkipLink` n’est **pas** un overlay : pas de piège de Tab, pas d’`aria-modal`.',
      en: '`SkipLink` renders an `<a href="#main">`. No `role`, no clickable `div`. On click / Enter, if the target exists, focus moves there without mutating the host DOM. `SkipLink` is **not** an overlay: no Tab trap, no `aria-modal`.',
    },
    doMain: {
      fr: '`<SkipLink>Aller au contenu principal</SkipLink>` avec `<main id="main" tabIndex={-1}>`',
      en: '`<SkipLink>Skip to main content</SkipLink>` with `<main id="main" tabIndex={-1}>`',
    },
    doOnce: {
      fr: 'Un seul skip link, tout en haut du `ThemeProvider`',
      en: 'A single skip link, at the top of `ThemeProvider`',
    },
    doHref: {
      fr: '`href="#content"` seulement si le landmark s’appelle `content`',
      en: '`href="#content"` only if the landmark is named `content`',
    },
    dontTabIndex: {
      fr: 'Omettre `tabIndex={-1}` sur `main` (le focus n’ira pas ; le saut d’ancre natif prend le relais)',
      en: 'Omitting `tabIndex={-1}` on `main` (focus will not move; native hash navigation takes over)',
    },
    dontButton: {
      fr: 'Un `<button>` ou un `div` + `onKeyDown` à la place du lien',
      en: 'A `<button>` or a `div` + `onKeyDown` instead of the link',
    },
    dontDuplicate: {
      fr: 'Dupliquer le lien dans chaque page alors que la coquille l’a déjà',
      en: 'Duplicating the link on every page when the shell already has it',
    },
    props: {
      fr: 'Les attributs natifs `<a>` (`className`, `onClick`, …) sont transmis. `href` doit rester une ancre (`#…`).',
      en: 'Native `<a>` attributes (`className`, `onClick`, …) are forwarded. `href` must stay a hash (`#…`).',
    },
  },
  visuallyHidden: {
    intro: {
      fr: '`VisuallyHidden` masque un texte à l’écran tout en le laissant aux technologies d’assistance. C’est le nom accessible d’un contrôle sans libellé visible (bouton icône, pagination « page 3 sur 12 »).',
      en: '`VisuallyHidden` hides text on screen while leaving it for assistive technologies. It is the accessible name of a control with no visible label (icon button, pagination “page 3 of 12”).',
    },
    notTooltip: {
      fr: 'Ce n’est **pas** un tooltip, ni un `title`, ni `aria-label` à la place d’un texte qui pourrait être visible. Si le libellé peut tenir à l’écran, affichez-le.',
      en: 'This is **not** a tooltip, a `title`, or `aria-label` in place of text that could be visible. If the label fits on screen, show it.',
    },
    a11yBody: {
      fr: 'Le composant rend un `<span>` avec la classe `d-ui-visually-hidden` (clip, pas `display: none` — `display: none` retire le texte de l’arbre d’accessibilité). Pour un bouton icône du design system, préférez `IconButton` (`aria-label` obligatoire). `VisuallyHidden` sert quand vous composez un contrôle natif vous-même.',
      en: 'The component renders a `<span>` with the `d-ui-visually-hidden` class (clip, not `display: none` — `display: none` removes the text from the accessibility tree). For a design-system icon button, prefer `IconButton` (required `aria-label`). Use `VisuallyHidden` when you compose a native control yourself.',
    },
    doClose: {
      fr: '`<button type="button"><span aria-hidden="true">×</span><VisuallyHidden>Fermer</VisuallyHidden></button>`',
      en: '`<button type="button"><span aria-hidden="true">×</span><VisuallyHidden>Close</VisuallyHidden></button>`',
    },
    doReinforce: {
      fr: 'Masquer uniquement le texte de **renfort** (unité, contexte), pas tout le contenu d’une vue',
      en: 'Hide only **reinforcing** text (unit, context), not a whole view’s content',
    },
    dontDisplayNone: {
      fr: '`display: none` / `hidden` / `aria-hidden` sur le texte à annoncer',
      en: '`display: none` / `hidden` / `aria-hidden` on the text to announce',
    },
    dontReplaceLabel: {
      fr: 'Remplacer un `label` visible de champ par `VisuallyHidden`',
      en: 'Replacing a visible field `label` with `VisuallyHidden`',
    },
    dontDuplicate: {
      fr: 'Dupliquer un nom déjà porté par `aria-label` (double annonce)',
      en: 'Duplicating a name already provided by `aria-label` (double announcement)',
    },
    props: {
      fr: 'Les attributs natifs `<span>` (`className`, `id`, …) sont transmis.',
      en: 'Native `<span>` attributes (`className`, `id`, …) are forwarded.',
    },
  },
  theme: {
    intro: {
      fr: '`ThemeProvider` pose `data-d-ui-theme` sur une enveloppe (`d-ui-root`). Il ne touche **pas** `document.documentElement` : plusieurs racines peuvent coexister (app + Storybook, micro-frontends).',
      en: '`ThemeProvider` sets `data-d-ui-theme` on a wrapper (`d-ui-root`). It does **not** touch `document.documentElement`: several roots can coexist (app + Storybook, micro-frontends).',
    },
    toolbar: {
      fr: 'Les exemples et cette page suivent la langue choisie dans la barre d’outils. En plus, la barre **Thème** (Clair / Sombre) pilote le canvas entier.',
      en: 'Examples and this page follow the language chosen in the toolbar. In addition, the **Theme** toolbar (Light / Dark) drives the whole canvas.',
    },
    system: { fr: 'Mode système', en: 'System mode' },
    systemBody: {
      fr: "`mode=\"system\"` suit `prefers-color-scheme` et se met à jour si l’OS change. Le mode résolu reste `'light' | 'dark'` sur l’attribut. Utilisez `light` ou `dark` quand l’app a son propre sélecteur.",
      en: "`mode=\"system\"` follows `prefers-color-scheme` and updates if the OS changes. The resolved mode stays `'light' | 'dark'` on the attribute. Use `light` or `dark` when the app has its own picker.",
    },
    brand: { fr: 'Surcharge de marque', en: 'Brand override' },
    brandBody: {
      fr: '`tokens` écrit `--d-ui-color-brand`, `--d-ui-color-brand-hover`, `--d-ui-color-on-brand` et `--d-ui-color-focus` en style inline. C’est le white-label : pas de nouveau nom de token, seulement des valeurs.',
      en: '`tokens` writes `--d-ui-color-brand`, `--d-ui-color-brand-hover`, `--d-ui-color-on-brand` and `--d-ui-color-focus` as inline style. That is white-label: no new token names, only values.',
    },
    a11yBody: {
      fr: 'Le thème n’est pas un widget. Le contraste des paires token doit rester AA en clair **et** en sombre (`docs/tokens.md`). Un override `brand` trop clair sur `on-brand` casse 1.4.3 — c’est à l’app de garder le rapport. `color-scheme` est posé sur `.d-ui-root` pour que les contrôles natifs (scrollbars, inputs) suivent le thème.',
      en: 'Theme is not a widget. Token pair contrast must stay AA in light **and** dark (`docs/tokens.md`). A `brand` override that is too light on `on-brand` breaks 1.4.3 — the app must keep the ratio. `color-scheme` is set on `.d-ui-root` so native controls (scrollbars, inputs) follow the theme.',
    },
    doRoot: {
      fr: 'Un `ThemeProvider` à la racine de l’app, `mode` branché sur le sélecteur utilisateur',
      en: 'One `ThemeProvider` at the app root, `mode` wired to the user picker',
    },
    doSystem: {
      fr: '`mode="system"` tant qu’il n’y a pas de préférence stockée',
      en: '`mode="system"` until a stored preference exists',
    },
    doTokens: {
      fr: '`tokens={{ brand, brandHover, onBrand, focus }}` pour un client white-label',
      en: '`tokens={{ brand, brandHover, onBrand, focus }}` for a white-label client',
    },
    dontDocument: {
      fr: 'Écrire `data-d-ui-theme` à la main sur `document.documentElement`',
      en: 'Writing `data-d-ui-theme` by hand on `document.documentElement`',
    },
    dontHex: {
      fr: 'Un hex de marque dans chaque bouton au lieu de `tokens`',
      en: 'A brand hex in every button instead of `tokens`',
    },
    dontNest: {
      fr: 'Nidifier des `ThemeProvider` pour « juste un bouton » — préférez `tokens` sur le plus proche ancêtre utile',
      en: 'Nesting `ThemeProvider` for “just one button” — prefer `tokens` on the nearest useful ancestor',
    },
    props: {
      fr: '`children` est obligatoire. `className` est fusionné sur l’enveloppe.',
      en: '`children` is required. `className` is merged on the wrapper.',
    },
  },
  tokens: {
    intro: {
      fr: "Les couleurs sémantiques vivent dans `packages/ui/src/styles/tokens.css`. Les hex n’existent **que là**. Les composants consomment `var(--d-ui-*)` via le pont Tailwind `@theme inline` dans `styles/index.css` — `inline` est obligatoire pour que le thème sombre suive `data-d-ui-theme` et ne fige pas les valeurs du thème clair. Les noms TypeScript publics sont `tokenNames` (`import { tokenNames } from 'd-ui'`).",
      en: "Semantic colours live in `packages/ui/src/styles/tokens.css`. Hex values exist **only there**. Components consume `var(--d-ui-*)` through the Tailwind `@theme inline` bridge in `styles/index.css` — `inline` is required so dark theme follows `data-d-ui-theme` and does not freeze light values. Public TypeScript names are `tokenNames` (`import { tokenNames } from 'd-ui'`).",
    },
    contract: { fr: 'Contrat', en: 'Contract' },
    contractBody: {
      fr: "`--d-ui-<famille>-<rôle>` — exemple `--d-ui-color-brand`. Clair : `:root` + `[data-d-ui-theme='light']`. Sombre : `[data-d-ui-theme='dark']`. Les classes Tailwind internes (`bg-brand`, `text-fg`, …) **ne font pas** partie du contrat consommateur. Les apps utilisent les variables CSS, ou les composants.",
      en: "`--d-ui-<family>-<role>` — example `--d-ui-color-brand`. Light: `:root` + `[data-d-ui-theme='light']`. Dark: `[data-d-ui-theme='dark']`. Internal Tailwind classes (`bg-brand`, `text-fg`, …) are **not** part of the consumer contract. Apps use CSS variables, or the components.",
    },
    add: { fr: 'Ajouter un token', en: 'Add a token' },
    add1: {
      fr: 'Déclarer la variable clair **et** sombre dans `tokens.css`.',
      en: 'Declare the variable in light **and** dark in `tokens.css`.',
    },
    add2: {
      fr: 'L’exposer dans `@theme inline` si un utilitaire interne en a besoin.',
      en: 'Expose it in `@theme inline` if an internal utility needs it.',
    },
    add3: {
      fr: 'L’ajouter à `packages/ui/src/tokens/names.ts`.',
      en: 'Add it to `packages/ui/src/tokens/names.ts`.',
    },
    add4: {
      fr: 'Documenter le contraste si c’est une paire texte / fond (`docs/tokens.md`).',
      en: 'Document contrast if it is a text / background pair (`docs/tokens.md`).',
    },
    whiteLabel: {
      fr: 'White-label : passer `tokens` à `ThemeProvider` (`brand`, `brandHover`, `onBrand`, `focus`). Cela n’ajoute pas de nouveaux noms, ça surcharge les valeurs.',
      en: 'White-label: pass `tokens` to `ThemeProvider` (`brand`, `brandHover`, `onBrand`, `focus`). That does not add new names, it overrides values.',
    },
    contrast: { fr: 'Contraste', en: 'Contrast' },
    contrastBody: {
      fr: 'Cible release : **WCAG 2.2 AA** — 4.5:1 pour le texte, 3:1 pour l’UI non texte. Les valeurs actuelles sont un bootstrap ; le gel Figma (DS-006) les remplaçera **sans renommer** les variables si possible.',
      en: 'Release target: **WCAG 2.2 AA** — 4.5:1 for text, 3:1 for non-text UI. Current values are a bootstrap; the Figma freeze (DS-006) will replace them **without renaming** variables if possible.',
    },
    doColor: {
      fr: '`color: var(--d-ui-color-fg)` ou `className="text-fg"` **dans** le package',
      en: '`color: var(--d-ui-color-fg)` or `className="text-fg"` **inside** the package',
    },
    doHex: {
      fr: 'Un hex nouveau uniquement dans `tokens.css`, light **et** dark',
      en: 'A new hex only in `tokens.css`, light **and** dark',
    },
    dontHex: {
      fr: '`#0f172a` (ou n’importe quel hex) dans un `.tsx`',
      en: '`#0f172a` (or any hex) in a `.tsx` file',
    },
    dontExpose: {
      fr: 'Exposer `bg-brand` aux applications',
      en: 'Exposing `bg-brand` to apps',
    },
    dontDecor: {
      fr: 'Un token « décoratif » réutilisé comme frontière de contrôle',
      en: 'A “decorative” token reused as a control boundary',
    },
  },
  color: {
    intro: {
      fr: 'Utilisez la couleur pour hiérarchiser, signaler un état, et ancrer la marque. Les hex vivent dans `tokens.css` ; les composants consomment `var(--d-ui-color-*)`.',
      en: 'Use colour to rank information, signal state, and anchor the brand. Hex values live in `tokens.css`; components consume `var(--d-ui-color-*)`.',
    },
    available: {
      fr: '**Palette de couleurs disponible**',
      en: '**Available color palette**',
    },
    primary: { fr: 'Palette principale', en: 'Primary palette' },
    familyBrand: { fr: 'Marque', en: 'Brand' },
    familyDark: { fr: 'Sombre', en: 'Dark' },
    familyLight: { fr: 'Clair', en: 'Light' },
    secondary: { fr: 'Palette secondaire', en: 'Secondary palette' },
    familyWarning: { fr: 'Attention', en: 'Warning' },
    familyDanger: { fr: 'Danger', en: 'Danger' },
    familySuccess: { fr: 'Succès', en: 'Success' },
    familyInfo: { fr: 'Info', en: 'Info' },
    familyViolet: { fr: 'Violet', en: 'Violet' },
    a11yBody: {
      fr: 'Une couleur n’est jamais le seul porteur d’information (WCAG 1.4.1). Le texte utilise `fg`, `on-brand`, `danger`… pas un cran **L4**. Les paires sont mesurées dans `tokens.contrast.test.ts` (4.5:1 texte, 3:1 UI). Voir **Tokens**.',
      en: 'Colour is never the only carrier of information (WCAG 1.4.1). Text uses `fg`, `on-brand`, `danger`… not an **L4** step. Pairs are measured in `tokens.contrast.test.ts` (4.5:1 text, 3:1 UI). See **Tokens**.',
    },
    doToken: {
      fr: '`color: var(--d-ui-color-brand)` (ou `className="text-brand"` **dans** le package)',
      en: '`color: var(--d-ui-color-brand)` (or `className="text-brand"` **inside** the package)',
    },
    doOn: {
      fr: '`on-brand`, `on-danger`, `on-warning`… pour le texte posé sur un fond saturé',
      en: '`on-brand`, `on-danger`, `on-warning`… for text on a saturated background',
    },
    doTheme: {
      fr: 'La barre **Thème** pour vérifier clair et sombre',
      en: 'The **Theme** toolbar to check light and dark',
    },
    dontHex: {
      fr: '`#0f5c4c` (ou n’importe quel hex) dans un composant',
      en: '`#0f5c4c` (or any hex) in a component',
    },
    dontTintText: {
      fr: 'Un cran **L5** comme couleur de texte courant',
      en: 'An **L5** step as running text colour',
    },
    dontDecor: {
      fr: '`border-subtle` comme unique frontière d’un contrôle (WCAG 1.4.11)',
      en: '`border-subtle` as a control’s only boundary (WCAG 1.4.11)',
    },
  },
  text: {
    intro: {
      fr: '`Text` est le texte courant du design system. Utilisez `Heading` pour un titre, `Link` pour une navigation.',
      en: '`Text` is the running text of the design system. Use `Heading` for a title, `Link` for navigation.',
    },
    sizes: { fr: 'Tailles', en: 'Sizes' },
    sizesBody: {
      fr: '`body` pour le paragraphe, `body-sm` pour une aide de saisie, `caption` pour une métadonnée. L’échelle est celle de Tailwind, exposée sous des rôles — pas de `text-[17px]`.',
      en: '`body` for a paragraph, `body-sm` for field help, `caption` for metadata. The scale is Tailwind’s, exposed as roles — no `text-[17px]`.',
    },
    tones: { fr: 'Tons', en: 'Tones' },
    tonesBody: {
      fr: '`tone` est une prop, jamais un `className`. `cx()` ne résout pas les conflits Tailwind : `className="text-slate-400"` laisserait `text-fg` gagner. `muted` reste au-dessus de 4.5:1 dans les deux thèmes. `danger` est réservé aux messages d’erreur (`FieldError`).',
      en: '`tone` is a prop, never a `className`. `cx()` does not resolve Tailwind conflicts: `className="text-slate-400"` would let `text-fg` win. `muted` stays above 4.5:1 in both themes. `danger` is reserved for error messages (`FieldError`).',
    },
    weights: { fr: 'Graisses', en: 'Weights' },
    weightsBody: {
      fr: '`regular`, `medium`, `semibold`.',
      en: '`regular`, `medium`, `semibold`.',
    },
    color: { fr: 'Couleur', en: 'Color' },
    colorBody: {
      fr: '`color` pose une famille de la page Color (`brand`, `dark`, `light`, `warning`, `danger`, `success`, `info`, `violet`). Si elle est posée, elle remplace `tone`. `light` se lit sur un fond `fg`. Préférez le cran `N` pour le texte courant.',
      en: '`color` sets a Color page family (`brand`, `dark`, `light`, `warning`, `danger`, `success`, `info`, `violet`). When set, it replaces `tone`. `light` is read on an `fg` surface. Prefer the `N` step for running text.',
    },
    colorVariant: { fr: 'Variantes de couleur', en: 'Color variants' },
    colorVariantBody: {
      fr: '`colorVariant` est le cran de la rampe (`D2`, `D1`, `N`, `L1`–`L6`). `N` par défaut. Les crans L sont des teintes (mêmes pourcentages que Color) et peuvent manquer 4.5:1 — pas pour un paragraphe.',
      en: '`colorVariant` is the ramp step (`D2`, `D1`, `N`, `L1`–`L6`). Default `N`. L steps are tints (same percentages as Color) and can fail 4.5:1 — not for a paragraph.',
    },
    wrap: { fr: 'Retour à la ligne et débordement', en: 'Text wrap and overflow' },
    wrapBody: {
      fr: 'Par défaut, un long texte passe à la ligne. `noWrap` l’empêche (un parent `overflow-hidden` coupe **sans** ellipse). `truncate` coupe avec une ellipse : `true` sur une ligne, `{ lines: n }` sur n lignes.',
      en: 'By default, long text wraps. `noWrap` prevents that (a parent `overflow-hidden` clips **without** an ellipsis). `truncate` cuts with an ellipsis: `true` on one line, `{ lines: n }` on n lines.',
    },
    a11yBody: {
      fr: '`Text` rend un `<p>` par défaut. Passez `as="span"` en ligne. Ce n’est pas un titre : un `Text size="body"` avec `font-semibold` ne remplace pas un `Heading`. `color` / `colorVariant` ne dispensent pas du contraste : restez sur `N` (ou `tone`) pour le texte courant. Avec `noWrap` ou `truncate`, le lecteur d’écran lit **tout** le texte : raccourcissez le contenu en amont s’il est trop long.',
      en: '`Text` renders a `<p>` by default. Pass `as="span"` inline. It is not a heading: `Text size="body"` with `font-semibold` does not replace `Heading`. `color` / `colorVariant` do not waive contrast: stay on `N` (or `tone`) for running text. With `noWrap` or `truncate`, the screen reader still reads **all** the text: shorten the content upstream if it is too long.',
    },
    doMuted: {
      fr: '`<Text tone="muted" size="body-sm">Mis à jour hier</Text>`',
      en: '`<Text tone="muted" size="body-sm">Updated yesterday</Text>`',
    },
    doSpan: {
      fr: '`as="span"` dans un bouton ou un lien',
      en: '`as="span"` inside a button or a link',
    },
    doColor: {
      fr: '`<Text as="span" color="brand">mot d’emphase</Text>`',
      en: '`<Text as="span" color="brand">emphasis word</Text>`',
    },
    doTruncate: {
      fr: '`<Text truncate>` dans une colonne bornée',
      en: '`<Text truncate>` in a bounded column',
    },
    dontClass: {
      fr: '`<Text className="text-slate-400">` pour un ton',
      en: '`<Text className="text-slate-400">` for a tone',
    },
    dontHeading: {
      fr: '`<Text as="h2">` — utiliser `Heading`',
      en: '`<Text as="h2">` — use `Heading`',
    },
    dontTint: {
      fr: '`<Text color="brand" colorVariant="L5">` comme texte courant',
      en: '`<Text color="brand" colorVariant="L5">` as running text',
    },
    dontTruncate: {
      fr: '`truncate` pour raccourcir le contenu annoncé — le lecteur d’écran lit tout',
      en: '`truncate` to shorten announced content — the screen reader reads everything',
    },
    props: {
      fr: 'Les attributs natifs de l’élément (`id`, `className`, …) sont transmis.',
      en: 'Native element attributes (`id`, `className`, …) are forwarded.',
    },
  },
  heading: {
    intro: {
      fr: '`Heading` porte la structure du document : un vrai `h1`…`h6`. La taille visuelle (`size`) est une prop **distincte** pour ne pas sauter un niveau afin d’obtenir le bon corps (WCAG 1.3.1).',
      en: '`Heading` carries document structure: a real `h1`…`h6`. Visual size (`size`) is a **separate** prop so you do not skip a level to get the right type size (WCAG 1.3.1).',
    },
    levels: { fr: 'Niveaux', en: 'Levels' },
    levelsBody: {
      fr: 'Par défaut, la taille suit le niveau : `h1` → display, `h2` → title, `h3` → subtitle, `h4`–`h6` → body.',
      en: 'By default, size follows the level: `h1` → display, `h2` → title, `h3` → subtitle, `h4`–`h6` → body.',
    },
    decoupled: { fr: 'Taille découplée', en: 'Decoupled size' },
    decoupledBody: {
      fr: 'Un `h2` peut avoir l’allure d’un display. Un `h1` peut rester discret. Ne posez **qu’un** `h1` par vue.',
      en: 'An `h2` can look like display. An `h1` can stay small. Put **only one** `h1` per view.',
    },
    bold: { fr: 'Gras', en: 'Bold' },
    boldBody: {
      fr: 'La graisse par défaut est `font-normal`. Passez `bold` pour un titre en `font-bold`.',
      en: 'Default weight is `font-normal`. Pass `bold` for a `font-bold` title.',
    },
    a11yBody: {
      fr: 'Le composant rend `<h1>`…`<h6>`. Pas de `role="heading"` sur un `div`.',
      en: 'The component renders `<h1>`…`<h6>`. No `role="heading"` on a `div`.',
    },
    doSize: {
      fr: '`<Heading level={2} size="display">` si le visuel est grand mais le niveau est 2',
      en: '`<Heading level={2} size="display">` when the visual is large but the level is 2',
    },
    doBold: {
      fr: '`<Heading level={2} bold>` pour un titre fort',
      en: '`<Heading level={2} bold>` for a strong title',
    },
    doOneH1: {
      fr: 'Un seul `level={1}` par page',
      en: 'A single `level={1}` per page',
    },
    dontSkip: {
      fr: 'Sauter de `h1` à `h3` pour une question de taille',
      en: 'Skipping from `h1` to `h3` for size',
    },
    dontTwoH1: {
      fr: 'Deux `h1` sur le même écran',
      en: 'Two `h1`s on the same screen',
    },
    props: {
      fr: 'Les attributs natifs du titre (`id`, `className`, …) sont transmis.',
      en: 'Native heading attributes (`id`, `className`, …) are forwarded.',
    },
  },
  link: {
    intro: {
      fr: '`Link` est un `<a>`. Le soulignement est **permanent** : la couleur seule ne distingue pas un lien dans un paragraphe (WCAG 1.4.1). Pour une action, utilisez `Button`.',
      en: '`Link` is an `<a>`. The underline is **permanent**: colour alone cannot distinguish a link in a paragraph (WCAG 1.4.1). For an action, use `Button`.',
    },
    inText: { fr: 'Dans un paragraphe', en: 'In a paragraph' },
    inTextBody: {
      fr: 'Composez `Link` dans `Text`. Le soulignement et `visited:text-link-visited` restent.',
      en: 'Compose `Link` inside `Text`. The underline and `visited:text-link-visited` remain.',
    },
    external: { fr: 'Externe', en: 'External' },
    externalBody: {
      fr: '`external` ouvre un nouvel onglet, pose `rel="noopener noreferrer"`, et annonce l’ouverture. Le fallback masqué est anglais (`(opens in a new tab)`) — passez `externalLabel` dans la langue de l’app.',
      en: '`external` opens a new tab, sets `rel="noopener noreferrer"`, and announces the opening. The hidden fallback is English (`(opens in a new tab)`) — pass `externalLabel` in the app language.',
    },
    iconBody: {
      fr: '`icon` est décorative (`aria-hidden`) : le nom accessible reste le texte. `iconPosition="end"` place l’icône après le libellé. La couleur suit `currentColor`.',
      en: '`icon` is decorative (`aria-hidden`): the accessible name stays the text. `iconPosition="end"` places the icon after the label. Colour follows `currentColor`.',
    },
    color: { fr: 'Couleur', en: 'Color' },
    colorBody: {
      fr: '`color` n’est **pas** héritée du parent. `default` utilise le token `link`. `dark` prend l’encre (`fg`) pour un lien discret. `light` prend le fond (`bg`) — à poser sur un fond `fg`. Dans un paragraphe, préférez `default` : un lien `dark` se confond avec le texte voisin.',
      en: '`color` is **not** inherited from the parent. `default` uses the `link` token. `dark` uses ink (`fg`) for a quiet link. `light` uses the background (`bg`) — place it on an `fg` surface. In a paragraph, prefer `default`: a `dark` link blends into neighbouring text.',
    },
    a11yBody: {
      fr: 'Contrôle natif `<a href>`. Focus visible via l’anneau `focus`. Tab / Entrée activent le lien.',
      en: 'Native `<a href>` control. Visible focus via the `focus` ring. Tab / Enter activate the link.',
    },
    doHref: {
      fr: '`<Link href="/catalogue">Catalogue</Link>`',
      en: '`<Link href="/catalogue">Catalogue</Link>`',
    },
    doExternal: {
      fr: '`<Link href="https://…" external externalLabel="(ouvre dans un nouvel onglet)">`',
      en: '`<Link href="https://…" external externalLabel="(opens in a new tab)">`',
    },
    doIcon: {
      fr: '`<Link href="/catalogue" icon={<Icon as={ArrowTopRightOnSquareIcon} size="sm" />} iconPosition="end">`',
      en: '`<Link href="/catalogue" icon={<Icon as={ArrowTopRightOnSquareIcon} size="sm" />} iconPosition="end">`',
    },
    dontBlank: {
      fr: '`target="_blank"` sans `rel`',
      en: '`target="_blank"` without `rel`',
    },
    dontButton: {
      fr: 'Un `Button` pour de la navigation, ou un `Link` pour soumettre un formulaire',
      en: 'A `Button` for navigation, or a `Link` to submit a form',
    },
    dontDarkInText: {
      fr: '`color="dark"` dans un paragraphe de la même encre — le lien n’est plus distinguable par la couleur',
      en: '`color="dark"` in a paragraph of the same ink — the link is no longer distinguishable by colour',
    },
    props: {
      fr: 'Les attributs natifs `<a>` (`className`, `download`, …) sont transmis.',
      en: 'Native `<a>` attributes (`className`, `download`, …) are forwarded.',
    },
  },
  divider: {
    intro: {
      fr: '`Divider` est un filet de séparation qui **occupe tout l’espace disponible** du parent (`w-full` en horizontal, `self-stretch` en vertical). Par défaut il est **décoratif** (`aria-hidden`) : un séparateur visuel n’est pas une frontière de contrôle, donc `--d-ui-color-border-subtle` (pas le seuil 3:1 de 1.4.11). C’est un `div`, jamais un `<hr>` (le preflight Tailwind casse hauteur et largeur du `<hr>`).',
      en: '`Divider` is a separating rule that **fills the parent’s available space** (`w-full` horizontally, `self-stretch` vertically). By default it is **decorative** (`aria-hidden`): a visual separator is not a control boundary, so `--d-ui-color-border-subtle` (not the 3:1 1.4.11 threshold). It is a `div`, never an `<hr>` (Tailwind preflight breaks `<hr>` height and width).',
    },
    vertical: { fr: 'Vertical', en: 'Vertical' },
    verticalBody: {
      fr: 'Un parent flex est requis (`self-stretch`) pour que le filet prenne toute la hauteur disponible.',
      en: 'A flex parent is required (`self-stretch`) so the rule takes all available height.',
    },
    labelled: { fr: 'Labellisé', en: 'Labelled' },
    labelledBody: {
      fr: 'Avec `label`, le trait devient un `separator` annoncé. En horizontal, le libellé est visible au centre ; les deux filets grandissent (`flex-1`) pour remplir le parent. À réserver aux ruptures porteuses de sens (« fin des résultats pertinents »), pas à chaque ligne d’une liste.',
      en: 'With `label`, the rule becomes an announced `separator`. Horizontally, the label is visible in the centre; both rules grow (`flex-1`) to fill the parent. Reserve it for meaningful breaks (“end of relevant results”), not every list row.',
    },
    a11yBody: {
      fr: 'Sans `label` : `role="none"` et `aria-hidden`. Avec `label` : `role="separator"`, `aria-orientation` et `aria-label`. Le texte visible en horizontal est `aria-hidden` pour ne pas doubler l’annonce.',
      en: 'Without `label`: `role="none"` and `aria-hidden`. With `label`: `role="separator"`, `aria-orientation` and `aria-label`. The visible horizontal text is `aria-hidden` so it is not announced twice.',
    },
    doPlain: {
      fr: '`<Divider />` entre deux blocs visuels',
      en: '`<Divider />` between two visual blocks',
    },
    doLabel: {
      fr: '`<Divider label="Fin des résultats" />` seulement si la rupture a un sens',
      en: '`<Divider label="End of results" />` only if the break is meaningful',
    },
    dontBorder: {
      fr: 'Un `border-border` sur un `div` bricolé',
      en: 'A homemade `div` with `border-border`',
    },
    dontEvery: {
      fr: 'Labelliser chaque filet décoratif',
      en: 'Labelling every decorative rule',
    },
    props: {
      fr: 'Les attributs natifs (`className`, `data-*`) sont transmis **avant** la sémantique a11y, qui ne peut pas être écrasée.',
      en: 'Native attributes (`className`, `data-*`) are forwarded **before** a11y semantics, which cannot be overwritten.',
    },
  },
  typography: {
    intro: {
      fr: 'Utilisez la typographie pour créer des hiérarchies visuelles claires, organiser l’information et guider les utilisateurs.',
      en: 'Use typography to create clear visual hierarchies, organize information, and guide users.',
    },
    typefaces: { fr: 'Polices', en: 'Typefaces' },
    typefacesBody: {
      fr: 'Le design system utilise volontairement les polices système par défaut : moins de poids à charger, et le bénéfice d’accessibilité des polices natives (`--d-ui-font-sans`).',
      en: 'The design system intentionally uses default system fonts, avoiding extra weight and loading time, plus the accessibility of native system fonts (`--d-ui-font-sans`).',
    },
    fontsBySystem: { fr: 'Polices par système', en: 'Fonts by system' },
    colSystem: { fr: 'Système', en: 'System' },
    colFont: { fr: 'Police', en: 'Font' },
    sysWindows: { fr: 'Windows', en: 'Windows' },
    fontWindows: { fr: 'Segoe UI', en: 'Segoe UI' },
    sysMac: { fr: 'macOS', en: 'macOS' },
    fontMac: { fr: 'SF Pro', en: 'SF Pro' },
    sysLinux: { fr: 'Linux', en: 'Linux' },
    fontLinux: { fr: 'system-ui', en: 'system-ui' },
    sysChrome: { fr: 'Chrome OS', en: 'Chrome OS' },
    fontChrome: { fr: 'Roboto', en: 'Roboto' },
    styles: { fr: 'Styles', en: 'Styles' },
    stylesBody: {
      fr: 'Le choix des styles dépend de la structure de la mise en page. Une interface peut avoir plusieurs niveaux d’architecture. Les bons styles gardent le contenu utile, simple et efficace.',
      en: 'Selecting appropriate text styles is determined by layout structure. Layouts may have several levels of architecture. The right text styles keep content useful, simple, and effective.',
    },
    basic: { fr: 'Styles de base', en: 'Basic styles' },
    basicBody: {
      fr: 'Les styles de base sont le choix par défaut pour toute pièce d’interface. Ils sont cohérents dans toute l’UI et ne se personnalisent pas au-delà de la famille de polices. Utilisez `Heading` (`display`, `title`, `subtitle`, `body`) et `Text` (`body`, `body-sm`, `caption`).',
      en: 'Basic text styles are the default choice for any piece of UI. They stay consistent throughout the interface and cannot be customized further than the font family. Use `Heading` (`display`, `title`, `subtitle`, `body`) and `Text` (`body`, `body-sm`, `caption`).',
    },
    custom: { fr: 'Styles personnalisés', en: 'Custom styles' },
    customBody: {
      fr: 'Les styles personnalisés se règlent par token ou par prop, pour une identité (page, widget). Ils sont les mêmes dans toute l’app par défaut ; la surcharge cible un contexte.',
      en: 'Custom text styles are overridable by token or prop, for pieces of UI that need to reflect an identity (usually a widget or page). They are the same app-wide by default; the override can target a context.',
    },
    customFont: {
      fr: '`font-family` — token `--d-ui-font-sans`',
      en: '`font-family` — `--d-ui-font-sans` token',
    },
    customSize: {
      fr: '`size` — `Heading` (`display`, `title`, `subtitle`, `body`) et `Text` (`body`, `body-sm`, `caption`)',
      en: '`size` — `Heading` (`display`, `title`, `subtitle`, `body`) and `Text` (`body`, `body-sm`, `caption`)',
    },
    customWeight: {
      fr: '`weight` — `Text` (`regular`, `medium`, `semibold`). `Heading` est `font-normal` par défaut ; passez `bold` pour du gras.',
      en: '`weight` — `Text` (`regular`, `medium`, `semibold`). `Heading` is `font-normal` by default; pass `bold` for bold.',
    },
    a11yBody: {
      fr: '`Heading` rend un vrai `h1`…`h6`. Le niveau porte la structure, `size` l’apparence (WCAG 1.3.1). `Text` est du texte courant, pas un titre. Les pages détaillées sont sous **Components** : Text, Heading, Link, Divider.',
      en: '`Heading` renders a real `h1`…`h6`. Level carries structure, `size` appearance (WCAG 1.3.1). `Text` is running text, not a heading. Detail pages live under **Components**: Text, Heading, Link, Divider.',
    },
    a11yMuted: {
      fr: '`tone="muted"` reste au-dessus de 4.5:1. Le test `tokens.contrast.test.ts` le vérifie.',
      en: '`tone="muted"` stays above 4.5:1. The `tokens.contrast.test.ts` test checks it.',
    },
    doHeading: {
      fr: '`<Heading level={2} size="display">` pour un titre visuellement large sans sauter de niveau',
      en: '`<Heading level={2} size="display">` for a visually large title without skipping a level',
    },
    doMuted: {
      fr: '`<Text tone="muted">` pour une métadonnée',
      en: '`<Text tone="muted">` for metadata',
    },
    doToken: {
      fr: 'Surcharger `--d-ui-font-sans` pour une identité, pas une classe Tailwind ad hoc',
      en: 'Override `--d-ui-font-sans` for an identity, not an ad-hoc Tailwind class',
    },
    dontTwoH1: {
      fr: '`<Heading level={1}>` deux fois sur une page',
      en: '`<Heading level={1}>` twice on a page',
    },
    dontClass: {
      fr: '`<Text className="text-slate-400">` ou `text-[17px]`',
      en: '`<Text className="text-slate-400">` or `text-[17px]`',
    },
    dontFakeHeading: {
      fr: '`<Text size="body" weight="semibold">` à la place d’un `Heading`',
      en: '`<Text size="body" weight="semibold">` instead of a `Heading`',
    },
  },
  iconPage: {
    intro: {
      fr: 'Enveloppe un SVG pour une taille alignée sur `Button` et la bonne sémantique d’accessibilité. `d-ui` **ne dépend d’aucune librairie d’icônes** : on passe le composant (`as`), il n’est jamais importé en bloc.',
      en: 'Wraps an SVG for a size aligned with `Button` and the right accessibility semantics. `d-ui` **does not depend on any icon library**: you pass the component (`as`); it is never imported as a bundle.',
    },
    sizes: { fr: 'Tailles', en: 'Sizes' },
    sizesBody: {
      fr: '`size` suit les hauteurs de `Button` : `sm` 16 px, `md` 20 px (défaut), `lg` 24 px. Utilisez `sm` dans un bouton, `lg` sur un état vide ou un titre.',
      en: '`size` follows `Button` heights: `sm` 16 px, `md` 20 px (default), `lg` 24 px. Use `sm` in a button, `lg` on an empty state or a title.',
    },
    color: { fr: 'Couleur', en: 'Color' },
    colorBody: {
      fr: 'Aucune prop de couleur : le SVG hérite de `currentColor`, donc du texte qui le porte, et suit le thème sans token dédié. Pour le colorer, colorez le conteneur.',
      en: 'No colour prop: the SVG inherits `currentColor` from surrounding text, and follows the theme without a dedicated token. To colour it, colour the container.',
    },
    set: { fr: 'Jeu recommandé', en: 'Recommended set' },
    setBody: {
      fr: 'Le jeu recommandé est **Heroicons** (MIT, Tailwind Labs). Il n’est ici qu’une `devDependency`, pour les stories.',
      en: 'The recommended set is **Heroicons** (MIT, Tailwind Labs). It is only a `devDependency` here, for stories.',
    },
    setOutline: {
      fr: 'Heroicons ne fournit l’**outline qu’en 24 px**. Les jeux 20 et 16 sont **solid uniquement**. Mapper `size="sm"` sur `@heroicons/react/16/solid` ferait basculer la silhouette en plein sans prévenir.',
      en: 'Heroicons ships **outline only at 24 px**. The 20 and 16 sets are **solid only**. Mapping `size="sm"` to `@heroicons/react/16/solid` would silently switch the silhouette to filled.',
    },
    setImport: {
      fr: 'Importer depuis `24/outline` et laisser `size` réduire en CSS. Ne descendre sur `20/solid` ou `16/solid` que lorsqu’on veut explicitement du solid.',
      en: 'Import from `24/outline` and let `size` scale in CSS. Drop to `20/solid` or `16/solid` only when you explicitly want solid.',
    },
    a11yBody: {
      fr: 'Sans `label`, l’icône est décorative : `aria-hidden` et `focusable="false"` (retire le SVG de l’ordre de tabulation, y compris sur les anciens Edge). Avec `label`, elle devient une image nommée (`role="img"`). Ces attributs sont **réaffirmés après** les props consommateur.',
      en: 'Without `label`, the icon is decorative: `aria-hidden` and `focusable="false"` (removes the SVG from the tab order, including on older Edge). With `label`, it becomes a named image (`role="img"`). These attributes are **reasserted after** consumer props.',
    },
    a11yButton: {
      fr: 'Dans un `Button`, ne passez **jamais** `label` : le slot `icon` est déjà `aria-hidden` et le bouton porte son nom. `IconButton` porte le nom sur le bouton (`aria-label` obligatoire), pas sur l’icône.',
      en: 'Inside a `Button`, **never** pass `label`: the `icon` slot is already `aria-hidden` and the button carries the name. `IconButton` names the button (`aria-label` required), not the icon.',
    },
    doBeside: {
      fr: '`<Icon as={BellIcon} />` à côté d’un libellé visible',
      en: '`<Icon as={BellIcon} />` next to a visible label',
    },
    doIconButton: {
      fr: '`<IconButton icon={<Icon as={TrashIcon} />} aria-label="Supprimer" />`',
      en: '`<IconButton icon={<Icon as={TrashIcon} />} aria-label="Delete" />`',
    },
    doOutline: {
      fr: 'Import depuis `@heroicons/react/24/outline` pour garder la même silhouette',
      en: 'Import from `@heroicons/react/24/outline` to keep the same silhouette',
    },
    dontLabel: {
      fr: '`<Icon as={BellIcon} label="Notifications" />` à côté du même mot',
      en: '`<Icon as={BellIcon} label="Notifications" />` next to the same word',
    },
    dontNameless: {
      fr: '`IconButton` sans `aria-label`',
      en: '`IconButton` without `aria-label`',
    },
    dontSolid: {
      fr: 'Import `@heroicons/react/16/solid` uniquement pour obtenir une petite taille',
      en: 'Import `@heroicons/react/16/solid` only to get a small size',
    },
    dontFill: {
      fr: '`fill` ou `stroke` en dur à la place de `currentColor`',
      en: 'Hard-coded `fill` or `stroke` instead of `currentColor`',
    },
    props: {
      fr: 'Les attributs SVG natifs (`className`, `data-*`, …) sont transmis. `role`, `aria-hidden`, `aria-label` et `focusable` ne peuvent pas être écrasés.',
      en: 'Native SVG attributes (`className`, `data-*`, …) are forwarded. `role`, `aria-hidden`, `aria-label` and `focusable` cannot be overwritten.',
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
    radiusBody: {
      fr: '`radius` règle l’arrondi des coins (`none`, `sm`, `md`, `lg`, `xl`). Défaut : `md`. S’applique aussi à `IconButton`.',
      en: '`radius` sets the corner rounding (`none`, `sm`, `md`, `lg`, `xl`). Default: `md`. Also applies to `IconButton`.',
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
      fr: '`IconButton` exige `aria-label`. `icon`, `variant`, `size`, `radius`, `loading`, `loadingIndicator`, `fullWidth` et `isSelected` sont les mêmes que `Button`.',
      en: '`IconButton` requires `aria-label`. `icon`, `variant`, `size`, `radius`, `loading`, `loadingIndicator`, `fullWidth`, and `isSelected` match `Button`.',
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
      fr: '`TextInput` est le champ de saisie d’une ligne, en pleine largeur. Pour plusieurs lignes, utilisez `Textarea`. Pour composer un contrôle custom (libellé, aide, erreur), importez `Field` (`useFieldControl`).',
      en: '`TextInput` is the single-line text field, full width. For several lines, use `Textarea`. To compose a custom control (label, help, error), import `Field` (`useFieldControl`).',
    },
    labelProp: {
      fr: '`label` est une prop du composant : le libellé s’affiche au-dessus du cadre. Vous pouvez aussi attacher un `<label htmlFor>` externe ou `aria-labelledby` (par exemple via `Field`).',
      en: '`label` is a component prop: the label renders above the field. You can also attach an external `<label htmlFor>` or `aria-labelledby` (for example via `Field`).',
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
  tooltip: {
    title: { fr: 'Tooltip', en: 'Tooltip' },
    intro: {
      fr: '`Tooltip` affiche un libellé court au survol ou au focus, avec une flèche vers le déclencheur. Il n’est pas interactif : pour un panneau cliquable, utilisez `Popover`.',
      en: '`Tooltip` shows a short label on hover or focus, with an arrow toward the trigger. It is not interactive: use `Popover` for a clickable panel.',
    },
    usePlacement: {
      fr: '`placement` choisit le côté préféré (`top`, `bottom`, `left`, `right`, et variantes `-start` / `-end`). Près d’un bord, le panneau bascule (flip) et se décale (shift).',
      en: '`placement` picks the preferred side (`top`, `bottom`, `left`, `right`, and `-start` / `-end` variants). Near an edge, the panel flips and shifts.',
    },
    useControlled: {
      fr: 'Passez `open` et `onOpenChange` pour un état contrôlé, ou `defaultOpen` pour un état non contrôlé.',
      en: 'Pass `open` and `onOpenChange` for controlled state, or `defaultOpen` for uncontrolled state.',
    },
    useCollision: {
      fr: 'Près du bord du viewport, Floating UI retourne le tooltip pour qu’il reste visible.',
      en: 'Near the viewport edge, Floating UI flips the tooltip so it stays visible.',
    },
    usePortal: {
      fr: 'Le tooltip est rendu dans un portail (hors du flux). Il recopie `data-d-ui-theme` pour rester lisible en sombre et dans un `Dialog`.',
      en: 'The tooltip renders in a portal (out of flow). It copies `data-d-ui-theme` so it stays readable in dark mode and inside a `Dialog`.',
    },
    useRadius: {
      fr: '`radius` règle l’arrondi du panneau (`none`, `sm`, `md`, `lg`, `xl`). Défaut : `md`.',
      en: '`radius` sets the panel corner rounding (`none`, `sm`, `md`, `lg`, `xl`). Default: `md`.',
    },
    a11yBody: {
      fr: 'Le panneau a `role="tooltip"`. Le déclencheur reçoit `aria-describedby` tant que le tooltip est ouvert. Le contenu n’est pas focusable (`pointer-events-none`).',
      en: 'The panel has `role="tooltip"`. The trigger gets `aria-describedby` while the tooltip is open. The content is not focusable (`pointer-events-none`).',
    },
    a11yKeys: {
      fr: 'Survol, focus et Escape. `delayMs` passe à `0` si `prefers-reduced-motion`. Le focus visible du déclencheur utilise l’anneau du bouton.',
      en: 'Hover, focus, and Escape. `delayMs` becomes `0` when `prefers-reduced-motion`. The trigger’s visible focus uses the button ring.',
    },
    doHover: {
      fr: 'Un complément court (raccourci, précision) sur un contrôle déjà nommé',
      en: 'A short supplement (shortcut, clarification) on an already named control',
    },
    doDescribed: {
      fr: 'Laisser `aria-describedby` relier le tooltip au déclencheur',
      en: 'Let `aria-describedby` associate the tooltip with the trigger',
    },
    doEscape: {
      fr: 'Escape ferme le tooltip',
      en: 'Escape dismisses the tooltip',
    },
    dontInteractive: {
      fr: 'Bouton, lien ou champ **dans** le tooltip — utilisez `Popover`',
      en: 'A button, link, or field **inside** the tooltip — use `Popover`',
    },
    dontEssential: {
      fr: 'Information indispensable uniquement dans le tooltip (elle disparaît sans pointeur)',
      en: 'Essential information only in the tooltip (it vanishes without a pointer)',
    },
    dontTitle: {
      fr: '`title` natif en plus du tooltip (doublon, délai imprévisible)',
      en: 'A native `title` in addition to the tooltip (duplicate, unpredictable delay)',
    },
    propsBody: {
      fr: '`children` doit être un seul élément React (le déclencheur). `content` est le texte du tooltip.',
      en: '`children` must be a single React element (the trigger). `content` is the tooltip text.',
    },
  },
  dialog: {
    title: { fr: 'Dialog', en: 'Dialog' },
    intro: {
      fr: '`Dialog` interrompt : il pose une couche modale au-dessus de la page, y enferme le focus et rend le reste inerte tant qu’il est ouvert. Il est **contrôlé** — `open` et `onOpenChange`, jamais de `defaultOpen` : on n’interrompt pas quelqu’un par accident.',
      en: '`Dialog` interrupts: it lays a modal layer over the page, traps focus inside it, and makes the rest inert while it is open. It is **controlled** — `open` and `onOpenChange`, never `defaultOpen`: nobody should be interrupted by accident.',
    },
    composition: { fr: 'Composition', en: 'Composition' },
    compositionBody: {
      fr: 'Le panneau se compose en deux zones : le corps (titre, description, contenu) et le pied de page fixe (`DialogActions`). `DialogTitle` et `DialogDescription` s’enregistrent auprès du `Dialog`, qui pose alors lui-même `aria-labelledby` et `aria-describedby` — il n’y a pas d’identifiant à écrire à la main.',
      en: 'The panel has two zones: the body (title, description, content) and the fixed footer (`DialogActions`). `DialogTitle` and `DialogDescription` register with the `Dialog`, which then sets `aria-labelledby` and `aria-describedby` itself — no ids to write by hand.',
    },
    colPart: { fr: 'Pièce', en: 'Part' },
    colRole: { fr: 'Rôle', en: 'Role' },
    partTitle: { fr: '`DialogTitle`', en: '`DialogTitle`' },
    partTitleRole: {
      fr: 'Rend un `h2` et devient le nom accessible du dialogue.',
      en: 'Renders an `h2` and becomes the dialog’s accessible name.',
    },
    partDescription: { fr: '`DialogDescription`', en: '`DialogDescription`' },
    partDescriptionRole: {
      fr: 'Une phrase sur la conséquence. Annoncée avec le titre à l’ouverture.',
      en: 'One sentence on the consequence. Announced with the title on opening.',
    },
    partBody: { fr: '`DialogBody`', en: '`DialogBody`' },
    partBodyRole: {
      fr: 'Le contenu long : formulaire, liste, texte.',
      en: 'The long content: a form, a list, prose.',
    },
    partActions: { fr: '`DialogActions`', en: '`DialogActions`' },
    partActionsRole: {
      fr: 'La barre d’actions. L’action de confirmation est le dernier enfant.',
      en: 'The action bar. The confirming action is the last child.',
    },
    kinds: { fr: 'Les types de dialogues', en: 'Kinds of dialog' },
    kindsBody: {
      fr: 'Les variantes ci-dessous ne sont pas des `variant` du composant : ce sont des **compositions** des mêmes quatre pièces. Ce qui change vraiment le comportement, ce sont trois propriétés : `alert`, `dismissible` et `size`.',
      en: 'The variants below are not component `variant`s: they are **compositions** of the same four parts. Only three props actually change behaviour: `alert`, `dismissible`, and `size`.',
    },
    tintedFooter: { fr: 'Pied de page fixe', en: 'Fixed footer' },
    useTintedFooter: {
      fr: '`surface` sur `DialogActions` aligne le pied de page sur les coins inférieurs du panneau (`radius`). Utile dès que le corps défile entre l’en-tête et les actions.',
      en: '`surface` on `DialogActions` aligns the footer with the panel’s bottom corners (`radius`). Useful once the body scrolls between header and actions.',
    },
    centered: { fr: 'Centré, action unique', en: 'Centered, single action' },
    useCentered: {
      fr: 'Une icône, un titre, une phrase, un seul bouton : la forme de l’accusé de réception. Il n’y a rien à décider, donc rien à annuler — un seul bouton, et il ferme.',
      en: 'An icon, a title, a sentence, one button: the acknowledgement shape. There is nothing to decide, so nothing to cancel — one button, and it closes.',
    },
    wideButtons: { fr: 'Actions pleine largeur', en: 'Wide buttons' },
    useWideButtons: {
      fr: '`align="stacked"` empile les actions sur toute la largeur. L’ordre visuel reste l’ordre du DOM : aucune variante n’inverse la pile, sans quoi l’ordre de tabulation cesserait de suivre l’ordre de lecture (WCAG 2.4.3).',
      en: '`align="stacked"` stacks the actions full width. Visual order stays DOM order: no variant reverses the stack, otherwise tab order would stop following reading order (WCAG 2.4.3).',
    },
    alert: { fr: 'Alerte', en: 'Alert' },
    useAlert: {
      fr: '`alert` bascule le rôle sur `alertdialog` : la description est annoncée d’emblée avec le titre. Le clic sur l’arrière-plan et la croix disparaissent — on ne sort que par une action explicite. `Escape` reste actif : un dialogue dont on ne peut pas sortir au clavier serait un piège (WCAG 2.1.2). Le focus va sur la **première** action, celle qui ne détruit rien. `Button` n’a pas encore de variante destructive : ici, ce sont le rôle et le libellé qui portent la conséquence, pas la couleur (WCAG 1.4.1).',
      en: '`alert` switches the role to `alertdialog`: the description is announced up front with the title. Outside click and the dismiss button are gone — you only leave through an explicit action. `Escape` stays live: a dialog you cannot leave with the keyboard would be a trap (WCAG 2.1.2). Focus lands on the **first** action, the one that destroys nothing. `Button` has no destructive variant yet: here the role and the label carry the consequence, not the colour (WCAG 1.4.1).',
    },
    dismiss: { fr: 'Avec croix de fermeture', en: 'With dismiss button' },
    useDismiss: {
      fr: '`dismissible` ajoute une croix en haut à droite du panneau. Les actions restent dans le pied de page (`DialogActions`). Réservez-la aux dialogues sans conséquence. Ignorée si `alert`.',
      en: '`dismissible` adds a close cross at the top right of the panel. Actions stay in the footer (`DialogActions`). Keep it for dialogs without consequence. It is ignored when `alert` is set.',
    },
    alertStart: { fr: 'Alerte, actions à gauche', en: 'Alert, left-aligned actions' },
    useAlertStart: {
      fr: '`align="start"` range les actions à gauche. Le choix est purement visuel : la barre garde le même ordre, donc le même ordre de tabulation.',
      en: '`align="start"` puts the actions on the left. The choice is purely visual: the bar keeps the same order, so the same tab order.',
    },
    withForm: { fr: 'Avec formulaire', en: 'With a form' },
    useWithForm: {
      fr: 'Un `form` dans le `DialogBody`, le bouton de soumission dans `DialogActions` via `form="…"`. Le premier champ prend le focus à l’ouverture : c’est le comportement par défaut, le premier contrôle focusable. Les dialogues à formulaire long sont un signal — au-delà de quelques champs, une page vaut mieux qu’une couche modale.',
      en: 'A `form` inside `DialogBody`, its submit button in `DialogActions` through `form="…"`. The first field takes focus on opening: that is the default, the first focusable control. Long-form dialogs are a signal — past a few fields, a page beats a modal layer.',
    },
    useSizes: {
      fr: '`size` fixe une largeur maximale LumApps : `tiny` (400 dp), `regular` (600 dp), `big` (800 dp), `huge` (plein écran). Sous le point de rupture `sm`, toutes les tailles occupent la largeur disponible.',
      en: '`size` sets a LumApps maximum width: `tiny` (400 dp), `regular` (600 dp), `big` (800 dp), `huge` (full screen). Below the `sm` breakpoint every size takes the available width.',
    },
    confirm: { fr: 'Dialogue de confirmation', en: 'Confirm dialog' },
    useConfirm: {
      fr: '`AlertDialog` sans `kind` : deux actions (`cancelLabel` + `confirmLabel`). Le dialogue ne se ferme pas au clic extérieur ni à la croix — seulement par une action explicite. `Escape` reste actif (WCAG 2.1.2).',
      en: '`AlertDialog` without `kind`: two actions (`cancelLabel` + `confirmLabel`). The dialog does not close on outside click or the dismiss button — only through an explicit action. `Escape` stays live (WCAG 2.1.2).',
    },
    alertKinds: { fr: 'Alerte par variante', en: 'Alert by kind' },
    useAlertKinds: {
      fr: '`AlertDialog` avec `kind` (`warning`, `error`, `success`) : icône teintée à gauche et une seule action `confirmLabel`. Interrompt l’utilisateur avec une information urgente.',
      en: '`AlertDialog` with `kind` (`warning`, `error`, `success`): tinted icon on the left and a single `confirmLabel` action. Interrupts the user with urgent information.',
    },
    processing: { fr: 'État de traitement', en: 'Processing state' },
    useProcessing: {
      fr: '`processing` pose un calque semi-opaque et un spinner au-dessus du panneau. Escape, le clic extérieur et la croix sont désactivés tant que la soumission est en cours — le dialogue reste ouvert jusqu’à la fin.',
      en: '`processing` lays a semi-opaque layer and spinner over the panel. Escape, outside click, and the dismiss button are disabled while submission is in progress — the dialog stays open until it finishes.',
    },
    panelChrome: { fr: 'Bordure et coins', en: 'Border and corners' },
    usePanelChrome: {
      fr: '`bordered` ajoute une bordure `border-border` autour du panneau. `radius` règle l’arrondi (`none`, `sm`, `md`, `lg`, `xl`) — le pied de page teinté (`DialogActions` avec `surface`) suit le même rayon en bas.',
      en: '`bordered` adds a `border-border` outline around the panel. `radius` sets the corner rounding (`none`, `sm`, `md`, `lg`, `xl`) — a tinted footer (`DialogActions` with `surface`) matches the same bottom radius.',
    },
    scrollable: { fr: 'En-tête et pied de page fixes', en: 'Fixed header and footer' },
    useScrollable: {
      fr: 'Assemblez `DialogHeader`, `DialogBody` et `DialogActions` : au défilement, l’en-tête reste en haut et le pied de page en bas ; seul le corps défile.',
      en: 'Assemble `DialogHeader`, `DialogBody`, and `DialogActions`: on scroll, the header stays at the top and the footer at the bottom; only the body scrolls.',
    },
    partHeader: { fr: '`DialogHeader`', en: '`DialogHeader`' },
    partHeaderRole: {
      fr: 'En-tête fixe (LumApps Toolbar). Contient le titre.',
      en: 'Fixed header (LumApps Toolbar). Holds the title.',
    },
    animation: { fr: 'Animation', en: 'Animation' },
    useAnimation: {
      fr: 'Le fond apparaît en opacité, le panneau monte de quelques pixels et grandit très légèrement — assez pour dire « ceci arrive par-dessus », assez court pour ne pas retarder la lecture. Les deux animations sont retirées quand le système demande `prefers-reduced-motion: reduce`.',
      en: 'The backdrop fades in, the panel rises a few pixels and grows very slightly — enough to say “this arrives on top”, short enough not to delay reading. Both animations are dropped when the system asks for `prefers-reduced-motion: reduce`.',
    },
    a11yBody: {
      fr: 'Le panneau a `role="dialog"` (ou `alertdialog` avec `alert`), un nom pris sur `DialogTitle` et, s’il y en a une, une description prise sur `DialogDescription`. Le focus est enfermé dans le panneau, le reste de la page devient inerte, le défilement du fond est bloqué, et le focus revient à l’élément déclencheur à la fermeture.',
      en: 'The panel has `role="dialog"` (or `alertdialog` with `alert`), a name taken from `DialogTitle`, and, when present, a description taken from `DialogDescription`. Focus is trapped in the panel, the rest of the page turns inert, background scrolling is locked, and focus returns to the trigger on close.',
    },
    a11yKeys: {
      fr: 'Tab et Maj+Tab tournent dans le panneau. `Escape` ferme, toujours — y compris sur une alerte. Le clic extérieur ferme, sauf sur une alerte. Le portail recopie `data-d-ui-theme`.',
      en: 'Tab and Shift+Tab cycle inside the panel. `Escape` closes, always — including on an alert. Outside click closes, except on an alert. The portal copies `data-d-ui-theme`.',
    },
    doTitle: {
      fr: 'Un `DialogTitle`, ou à défaut `aria-label` sur le `Dialog`',
      en: 'A `DialogTitle`, or failing that `aria-label` on the `Dialog`',
    },
    doConsequence: {
      fr: 'Une description qui dit la conséquence, pas qui répète le titre',
      en: 'A description that states the consequence rather than repeating the title',
    },
    doAlert: {
      fr: '`alert` dès que la décision est destructive ou irréversible',
      en: '`alert` as soon as the decision is destructive or irreversible',
    },
    dontStack: {
      fr: 'Ouvrir un `Dialog` depuis un `Dialog` : l’empilement n’est pas supporté',
      en: 'Opening a `Dialog` from a `Dialog`: stacking is not supported',
    },
    dontTrap: {
      fr: 'Retirer `Escape` pour « forcer » une décision — c’est un piège clavier',
      en: 'Removing `Escape` to “force” a decision — that is a keyboard trap',
    },
    dontLongForm: {
      fr: 'Un formulaire long dans une couche modale : préférez une page',
      en: 'A long form in a modal layer: prefer a page',
    },
    propsBody: {
      fr: '`Dialog` est contrôlé : `open` et `onOpenChange` sont obligatoires. `onOpenChange` reçoit `false` sur `Escape`, clic extérieur ou croix — c’est vous qui refermez.',
      en: '`Dialog` is controlled: `open` and `onOpenChange` are required. `onOpenChange` receives `false` on `Escape`, outside click, or the dismiss button — you are the one who closes it.',
    },
    actionsProps: { fr: 'Propriétés de DialogActions', en: 'DialogActions props' },
    actionsPropsBody: {
      fr: '`align` et `surface` ne changent que la disposition. L’ordre des enfants, lui, est un contrat : la confirmation en dernier.',
      en: '`align` and `surface` only change layout. The order of the children, on the other hand, is a contract: confirmation last.',
    },
    colProp: { fr: 'Propriété', en: 'Prop' },
    colMeaning: { fr: 'Effet', en: 'Effect' },
    propAlign: { fr: '`align`', en: '`align`' },
    propAlignMeaning: {
      fr: '`end` (défaut), `start`, ou `stacked` — empilé, pleine largeur.',
      en: '`end` (default), `start`, or `stacked` — stacked, full width.',
    },
    propSurface: { fr: '`surface`', en: '`surface`' },
    propSurfaceMeaning: {
      fr: 'Aligne les coins inférieurs du pied de page sur le `radius` du `Dialog`.',
      en: 'Aligns the footer’s bottom corners with the `Dialog` `radius`.',
    },
  },
  popover: {
    title: { fr: 'Popover', en: 'Popover' },
    intro: {
      fr: '`Popover` ouvre un panneau au clic, avec une flèche vers le déclencheur. Contrairement à `Tooltip`, il peut contenir des actions. `Dialog` (plein écran modal) est hors périmètre.',
      en: '`Popover` opens a panel on click, with an arrow toward the trigger. Unlike `Tooltip`, it can contain actions. `Dialog` (full-screen modal) is out of scope.',
    },
    usePlacement: {
      fr: '`placement` choisit le côté (`top`, `right`, `bottom`, `left`). Près d’un bord, le panneau bascule (flip) et se décale (shift).',
      en: '`placement` picks the side (`top`, `right`, `bottom`, `left`). Near an edge, the panel flips and shifts.',
    },
    useAlignments: {
      fr: 'Les variantes `-start` et `-end` alignent le panneau sur le bord du déclencheur. La flèche reste pointée vers l’ancre.',
      en: '`-start` and `-end` variants align the panel to the trigger edge. The arrow stays pointed at the anchor.',
    },
    useControlled: {
      fr: 'Passez `open` et `onOpenChange` pour un état contrôlé, ou `defaultOpen` pour un état non contrôlé.',
      en: 'Pass `open` and `onOpenChange` for controlled state, or `defaultOpen` for uncontrolled state.',
    },
    focusTrap: { fr: 'Piège de focus', en: 'Focus trap' },
    useFocusTrap: {
      fr: 'Passez `trapFocus` lorsque le panneau contient des éléments focusables. Le panneau devient un `dialog` modal. Sans `trapFocus`, Tab quitte le panneau.',
      en: 'Pass `trapFocus` when the panel contains focusable elements. The panel becomes a modal `dialog`. Without `trapFocus`, Tab leaves the panel.',
    },
    useCollision: {
      fr: 'Près du bord du viewport, le panneau bascule pour rester visible.',
      en: 'Near the viewport edge, the panel flips to stay visible.',
    },
    useRadius: {
      fr: '`radius` règle l’arrondi du panneau (`none`, `sm`, `md`, `lg`, `xl`). Défaut : `md`. Fonctionne aussi en mode `unstyled` (ex. `EmojiPopover`).',
      en: '`radius` sets the panel corner rounding (`none`, `sm`, `md`, `lg`, `xl`). Default: `md`. Also applies in `unstyled` mode (e.g. `EmojiPopover`).',
    },
    a11yBody: {
      fr: 'Le déclencheur pose `aria-expanded`, `aria-haspopup` et `aria-controls`. Avec `trapFocus`, le panneau a `role="dialog"` et un nom (`aria-label` ou `aria-labelledby`).',
      en: 'The trigger sets `aria-expanded`, `aria-haspopup`, and `aria-controls`. With `trapFocus`, the panel has `role="dialog"` and a name (`aria-label` or `aria-labelledby`).',
    },
    a11yKeys: {
      fr: 'Clic (ou Entrée/Espace sur le bouton) ouvre. Escape et clic extérieur ferment. Le portail recopie `data-d-ui-theme`.',
      en: 'Click (or Enter/Space on the button) opens. Escape and outside click close. The portal copies `data-d-ui-theme`.',
    },
    doLabel: {
      fr: '`aria-label` ou `aria-labelledby` sur le panneau',
      en: '`aria-label` or `aria-labelledby` on the panel',
    },
    doTrap: {
      fr: '`trapFocus` si le contenu est interactif',
      en: '`trapFocus` if the content is interactive',
    },
    doEscape: {
      fr: 'Escape et clic extérieur ferment le panneau',
      en: 'Escape and outside click dismiss the panel',
    },
    dontTooltip: {
      fr: 'Un tooltip pour un contenu interactif',
      en: 'A tooltip for interactive content',
    },
    dontTrapEmpty: {
      fr: '`trapFocus` sur un panneau sans contrôle focusable',
      en: '`trapFocus` on a panel with no focusable control',
    },
    dontDialog: {
      fr: 'Remplacer un `Dialog` d’interruption (hors périmètre DS-037) par un popover',
      en: 'Replacing an interrupting `Dialog` (out of scope DS-037) with a popover',
    },
    propsBody: {
      fr: '`children` doit être un seul élément React (le déclencheur). `content` est le panneau.',
      en: '`children` must be a single React element (the trigger). `content` is the panel.',
    },
  },
  emojiPopover: {
    title: { fr: 'EmojiPopover', en: 'EmojiPopover' },
    intro: {
      fr: '`EmojiPopover` ouvre une barre de réactions au clic, avec les neuf emojis de Google Meet (`💖 👍 🎉 👏 😂 😮 😢 🤔 👎`). `onSelect` reçoit l’emoji choisi et le panneau se ferme.',
      en: '`EmojiPopover` opens a reaction bar on click, with Google Meet’s nine emojis (`💖 👍 🎉 👏 😂 😮 😢 🤔 👎`). `onSelect` receives the chosen emoji and the panel closes.',
    },
    a11yBody: {
      fr: 'Le déclencheur pose `aria-expanded` / `aria-haspopup` / `aria-controls`. La barre a `role="dialog"` et un nom (`aria-label`, défaut « Réactions »). Chaque emoji est un bouton nommé.',
      en: 'The trigger sets `aria-expanded` / `aria-haspopup` / `aria-controls`. The bar has `role="dialog"` and a name (`aria-label`, default “Reactions”). Each emoji is a named button.',
    },
    a11yKeys: {
      fr: 'Clic (ou Entrée/Espace) ouvre. Tab parcourt les emojis. Escape et clic extérieur ferment. Choisir un emoji ferme la barre.',
      en: 'Click (or Enter/Space) opens. Tab moves through emojis. Escape and outside click close. Choosing an emoji dismisses the bar.',
    },
    doLabel: {
      fr: 'Un nom accessible sur le déclencheur (bouton icône) et sur la barre',
      en: 'An accessible name on the trigger (icon button) and on the bar',
    },
    doSelect: {
      fr: 'Réagir à `onSelect` (envoyer la réaction, animer, …)',
      en: 'Handle `onSelect` (send the reaction, animate, …)',
    },
    doEscape: {
      fr: 'Escape et clic extérieur ferment la barre',
      en: 'Escape and outside click dismiss the bar',
    },
    dontUnnamed: {
      fr: 'Déclencheur icône sans `aria-label`',
      en: 'An icon trigger without `aria-label`',
    },
    dontTooltip: {
      fr: 'Un `Tooltip` pour choisir une réaction',
      en: 'A `Tooltip` to pick a reaction',
    },
    dontFullPicker: {
      fr: 'En faire un clavier emoji complet — le jeu est fixe (neuf réactions)',
      en: 'Turning it into a full emoji keyboard — the set is fixed (nine reactions)',
    },
    propsBody: {
      fr: '`children` est le déclencheur. `labels` surcharge les noms accessibles des emojis (français par défaut).',
      en: '`children` is the trigger. `labels` overrides the emoji accessible names (French by default).',
    },
  },
  select: {
    title: { fr: 'Select', en: 'Select' },
    intro: {
      fr: '`Select` ouvre une liste fermée d’options. Pour filtrer en tapant, utilisez `Combobox`. Les deux partagent `options`, les groupes et `onValueChange`.',
      en: '`Select` opens a closed list of options. To filter while typing, use `Combobox`. Both share `options`, groups, and `onValueChange`.',
    },
    useInvalid: {
      fr: '`invalid` et `error` posent `aria-invalid` et remplacent `helper`. L’erreur ne repose pas sur la couleur seule.',
      en: '`invalid` and `error` set `aria-invalid` and replace `helper`. The error does not rely on colour alone.',
    },
    useRequired: {
      fr: '`required` affiche un astérisque à côté du libellé et pose `aria-required`.',
      en: '`required` shows an asterisk next to the label and sets `aria-required`.',
    },
    groups: { fr: 'Groupes d’options', en: 'Option groups' },
    useGroups: {
      fr: 'Passez `{ label, options }` pour regrouper. Le libellé du groupe est exposé via `role="group"`.',
      en: 'Pass `{ label, options }` to group items. The group label is exposed via `role="group"`.',
    },
    disabledOptions: { fr: 'Options désactivées', en: 'Disabled options' },
    useDisabledOptions: {
      fr: '`disabled: true` sur une option la rend non sélectionnable. Les flèches la sautent.',
      en: '`disabled: true` on an option makes it unselectable. Arrow keys skip it.',
    },
    a11yBody: {
      fr: 'Le déclencheur a `role="combobox"` (`aria-autocomplete="none"`), `aria-expanded`, `aria-controls` et `aria-activedescendant`. La liste a `role="listbox"` et le même nom que le champ.',
      en: 'The trigger has `role="combobox"` (`aria-autocomplete="none"`), `aria-expanded`, `aria-controls`, and `aria-activedescendant`. The list has `role="listbox"` and the same name as the field.',
    },
    a11yKeys: {
      fr: 'Flèches, Début/Fin, saisie prédictive, Entrée/Espace pour choisir, Escape pour fermer. L’option active est défilée dans la vue.',
      en: 'Arrows, Home/End, typeahead, Enter/Space to choose, Escape to close. The active option is scrolled into view.',
    },
    a11yForm: {
      fr: '`name` et `form` sont posés sur un `<select>` natif visuellement masqué, pour la soumission HTML. Documentez-les dans le formulaire hôte.',
      en: '`name` and `form` are set on a visually hidden native `<select>` for HTML submission. Document them on the host form.',
    },
    doLabel: {
      fr: 'Un libellé visible (`label`, `aria-labelledby`, ou `<label for>`)',
      en: 'A visible label (`label`, `aria-labelledby`, or `<label for>`)',
    },
    doName: {
      fr: '`name` (et `form` si le champ est hors du `<form>`) pour la soumission native',
      en: '`name` (and `form` if the field sits outside the `<form>`) for native submit',
    },
    doDisabled: {
      fr: '`disabled` sur l’option plutôt que de la retirer sans explication',
      en: '`disabled` on the option rather than removing it without explanation',
    },
    dontTitle: {
      fr: '`title` natif à la place d’un libellé',
      en: 'A native `title` instead of a label',
    },
    dontMulti: {
      fr: 'La sélection multiple — hors périmètre',
      en: 'Multi-select — out of scope',
    },
    dontNativeOnly: {
      fr: 'Un `<select>` nu sans les tokens et états d-ui lorsque le design system s’applique',
      en: 'A bare `<select>` without d-ui tokens and states when the design system applies',
    },
    propsBody: {
      fr: '`options` est la liste (plate ou groupée). `value` / `onValueChange` pour un état contrôlé.',
      en: '`options` is the list (flat or grouped). `value` / `onValueChange` for controlled state.',
    },
  },
  combobox: {
    title: { fr: 'Combobox', en: 'Combobox' },
    intro: {
      fr: '`Combobox` est un champ texte filtrable. `multiple` pose des chips dans le champ. `listStatus` couvre chargement, pagination et erreur de liste. `filter` choisit le filtrage (`auto`, `manual`, `off`). Pour une liste fermée sans saisie, importez `Select` (même contrat `options` / `value`, sans recherche).',
      en: '`Combobox` is a filterable text field. `multiple` shows chips in the field. `listStatus` covers loading, pagination, and list error. `filter` chooses filtering (`auto`, `manual`, `off`). For a closed list without typing, import `Select` (same `options` / `value` contract, no search).',
    },
    single: { fr: 'Sélection unique', en: 'Single selection' },
    useSingle: {
      fr: 'Une valeur. Taper filtre la liste ; le chevron ouvre les suggestions.',
      en: 'One value. Typing filters the list; the chevron opens suggestions.',
    },
    multiple: { fr: 'Sélection multiple', en: 'Multiple selection' },
    useMultiple: {
      fr: '`multiple` autorise plusieurs valeurs. Les choix s’affichent en chips dans le champ, avec un bouton de retrait nommé (`chipRemoveLabel`).',
      en: '`multiple` allows several values. Choices show as chips in the field, with a named remove button (`chipRemoveLabel`).',
    },
    descriptions: { fr: 'Descriptions', en: 'Descriptions' },
    useDescriptions: {
      fr: '`description` sur une option affiche une seconde ligne sous le nom, dans la liste.',
      en: '`description` on an option shows a second line under the name, in the list.',
    },
    custom: { fr: 'Rendu personnalisé', en: 'Custom rendering' },
    useCustom: {
      fr: '`renderOption`, `renderSectionTitle` et `renderChip` personnalisent la liste, les groupes et les chips. Posez `icon` sur l’option : la même icône apparaît dans la liste et dans la valeur choisie. `beforeOptions` injecte une action en tête de liste (par exemple **Créer**).',
      en: '`renderOption`, `renderSectionTitle`, and `renderChip` customize the list, groups, and chips. Set `icon` on the option: the same icon appears in the list and on the chosen value. `beforeOptions` injects an action at the top of the list (for example **Create**).',
    },
    inputOptions: { fr: 'Options du champ', en: 'Input options' },
    useInputOptions: {
      fr: 'Même chrome que `TextInput` : `disabled`, `invalid` / `error`, `valid`, `required`, `helper`, `size`.',
      en: 'Same chrome as `TextInput`: `disabled`, `invalid` / `error`, `valid`, `required`, `helper`, `size`.',
    },
    listStates: { fr: 'États de liste', en: 'List states' },
    useListStates: {
      fr: '`listStatus` pilote le contenu du panneau pour un listing distant. Le champ reste un combobox ; le client HTTP reste chez le consommateur (`onSearch`).',
      en: '`listStatus` drives the panel contents for a remote listing. The field stays a combobox; the HTTP client stays with the consumer (`onSearch`).',
    },
    loading: { fr: 'Chargement', en: 'Loading' },
    useLoading: {
      fr: '`listStatus="loading"` affiche des placeholders. Les options sont masquées. `loadingMessage` est annoncé (région live).',
      en: '`listStatus="loading"` shows placeholders. Options are hidden. `loadingMessage` is announced (live region).',
    },
    loadingMore: { fr: 'Chargement de la suite', en: 'Loading more' },
    useLoadingMore: {
      fr: '`listStatus="loadingMore"` ajoute un placeholder sous les options déjà visibles (pagination).',
      en: '`listStatus="loadingMore"` appends a placeholder under options already visible (pagination).',
    },
    empty: { fr: 'État vide', en: 'Empty state' },
    useEmpty: {
      fr: '`emptyMessage` s’affiche lorsque la requête ne correspond à aucune option (ou si `options` est vide). Chaîne, nœud, ou fonction `(query) => …`.',
      en: '`emptyMessage` shows when the query matches no option (or when `options` is empty). String, node, or `(query) => …` function.',
    },
    listError: { fr: 'Erreur', en: 'Error' },
    useListError: {
      fr: '`listStatus="error"` remplace la liste par `listErrorMessage` (et `listErrorRetryMessage` en secondaire).',
      en: '`listStatus="error"` replaces the list with `listErrorMessage` (and `listErrorRetryMessage` as secondary text).',
    },
    filters: { fr: 'Types de filtre', en: 'Filter types' },
    useFilters: {
      fr: '`filter="auto"` masque les options qui ne correspondent pas. `"manual"` laisse toutes les options visibles (`onSearch` chez le consommateur). `"off"` rend le champ en lecture seule : ouverture au focus, sans saisie.',
      en: '`filter="auto"` hides options that do not match. `"manual"` leaves every option visible (`onSearch` on the consumer). `"off"` makes the field read-only: opens on focus, no typing.',
    },
    a11yBody: {
      fr: 'Le champ a `role="combobox"` et `aria-autocomplete="list"` (`none` si `filter="off"`). La listbox est nommée comme le champ. En `multiple`, `aria-multiselectable` et un groupe de chips nommé (`chipGroupLabel`). Chaque chip a un bouton de retrait (`chipRemoveLabel`). `loadingMessage` est annoncé via une région live. Le chevron est un bouton `tabIndex={-1}` nommé (`toggleLabel`).',
      en: 'The field has `role="combobox"` and `aria-autocomplete="list"` (`none` if `filter="off"`). The listbox is named like the field. In `multiple`, `aria-multiselectable` and a named chip group (`chipGroupLabel`). Each chip has a remove button (`chipRemoveLabel`). `loadingMessage` is announced via a live region. The chevron is a `tabIndex={-1}` named button (`toggleLabel`).',
    },
    a11yKeys: {
      fr: 'Taper filtre (`auto`). Flèches parcourent les résultats. Entrée choisit (bascule en `multiple`). Escape ferme et rétablit la recherche.',
      en: 'Typing filters (`auto`). Arrows move through results. Enter chooses (toggles in `multiple`). Escape closes and restores the search.',
    },
    doFilter: {
      fr: '`filter="auto"` pour une liste déjà chargée ; `"manual"` + `onSearch` pour un listing distant',
      en: '`filter="auto"` for an already loaded list; `"manual"` + `onSearch` for a remote listing',
    },
    doChips: {
      fr: '`chipGroupLabel` et `chipRemoveLabel` dès que `multiple` est posé',
      en: '`chipGroupLabel` and `chipRemoveLabel` as soon as `multiple` is set',
    },
    dontAsync: {
      fr: 'Un client d’API dans le composant — passez `listStatus` / `onSearch` depuis l’hôte',
      en: 'An API client inside the component — pass `listStatus` / `onSearch` from the host',
    },
    dontPlaceholder: {
      fr: 'Un placeholder à la place du libellé',
      en: 'A placeholder instead of the label',
    },
    propsBody: {
      fr: '`options` (plate, groupée, `icon`, `description`). `multiple` + chips dans le champ. `listStatus`, `filter`, `renderOption` / `beforeOptions`. `placeholder` ne nomme pas le champ.',
      en: '`options` (flat, grouped, `icon`, `description`). `multiple` + chips in the field. `listStatus`, `filter`, `renderOption` / `beforeOptions`. `placeholder` does not name the field.',
    },
  },
  calendar: {
    title: { fr: 'Calendar', en: 'Calendar' },
    intro: {
      fr: '`Calendar` est une grille de mois headless : navigation clavier, dates min/max, jours indisponibles, début de semaine paramétrable. Ce n’est pas un DatePicker ni un calendrier d’événements LMS.',
      en: '`Calendar` is a headless month grid: keyboard navigation, min/max dates, unavailable days, configurable week start. It is not a DatePicker or an LMS event calendar.',
    },
    restricted: { fr: 'Dates restreintes', en: 'Restricted dates' },
    restrictedBody: {
      fr: '`minValue` / `maxValue` bornent la sélection (dates min et max). `isDateUnavailable` exclut des jours précis (week-ends, jours fériés). Ces jours restent visibles, avec `aria-disabled`.',
      en: '`minValue` / `maxValue` bound selection (min and max dates). `isDateUnavailable` excludes specific days (weekends, holidays). Those days stay visible, with `aria-disabled`.',
    },
    year: { fr: 'Année', en: 'Year' },
    yearBody: {
      fr: 'Le sélecteur **Année** (et **Mois**) dans l’en-tête change le mois affiché. Les années proposées suivent `minValue` / `maxValue` lorsqu’ils sont posés.',
      en: 'The **Year** (and **Month**) select in the header changes the displayed month. Offered years follow `minValue` / `maxValue` when set.',
    },
    range: { fr: 'Plage de dates', en: 'Date range' },
    rangeBody: {
      fr: '`selectionMode="range"` : premier clic = début, second = fin (réordonnés si besoin), y compris dans deux mois différents. Deux mois s’affichent par défaut (`numberOfMonths={2}`) ; les flèches et **Mois** / **Année** déplacent la vue. Un troisième clic recommence. `minValue` / `maxValue` bornent la plage si besoin. `name` / `nameEnd` pour la soumission HTML.',
      en: '`selectionMode="range"`: first click = start, second = end (reordered if needed), including across two different months. Two months show by default (`numberOfMonths={2}`); arrows and **Month** / **Year** move the view. A third click starts over. `minValue` / `maxValue` bound the range if needed. `name` / `nameEnd` for HTML submit.',
    },
    weekStart: { fr: 'Début de semaine', en: 'Week start' },
    weekStartBody: {
      fr: '`weekStartsOn` fixe le premier jour (0 = dimanche, 1 = lundi). Sans valeur, le début suit `weekStartFromLocale(locale)` (`Intl.Locale`).',
      en: '`weekStartsOn` sets the first day (0 = Sunday, 1 = Monday). If omitted, the start follows `weekStartFromLocale(locale)` (`Intl.Locale`).',
    },
    locale: { fr: 'Langue', en: 'Locale' },
    localeBody: {
      fr: '`locale` formate les jours et le mois via `Intl`, et pose `lang` (WCAG 3.1.2). Les libellés des flèches suivent le français par défaut, l’anglais si `locale` commence par `en`.',
      en: '`locale` formats days and the month via `Intl`, and sets `lang` (WCAG 3.1.2). Arrow labels default to French, English if `locale` starts with `en`.',
    },
    multipleMonths: { fr: 'Plusieurs mois', en: 'Multiple months' },
    multipleMonthsBody: {
      fr: '`numberOfMonths` (1 à 3) affiche des grilles côte à côte. Les flèches décalent le premier mois.',
      en: '`numberOfMonths` (1 to 3) shows grids side by side. The arrows shift the first month.',
    },
    adapter: { fr: 'Adaptateur de dates', en: 'Date adapter' },
    adapterBody: {
      fr: 'L’API publique est une date civile `{ year, month, day }` (mois 1–12), sans bibliothèque de fuseau. Convertissez un `Date` avec `toCalendarDate(date, "local" | "utc")` et l’inverse avec `fromCalendarDate`.',
      en: 'The public API is a civil date `{ year, month, day }` (month 1–12), with no timezone library. Convert a `Date` with `toCalendarDate(date, "local" | "utc")` and the reverse with `fromCalendarDate`.',
    },
    a11yBody: {
      fr: 'La grille a `role="grid"`, nommée par le mois. Les sélecteurs **Mois** et **Année** sont des `<select>` natifs nommés. Le jour choisi a `aria-selected` ; aujourd’hui a `aria-current="date"`. En `range`, `aria-multiselectable`. Un seul jour est tabulable ; le nom accessible est la date complète.',
      en: 'The grid has `role="grid"`, named by the month. **Month** and **Year** are named native `<select>`s. The chosen day has `aria-selected`; today has `aria-current="date"`. In `range`, `aria-multiselectable`. Only one day is in the tab order; the accessible name is the full date.',
    },
    a11yKeys: {
      fr: 'Flèches : jour / semaine. Début / Fin : semaine. Page préc. / suiv. : mois (Maj : année). Entrée ou clic : sélection.',
      en: 'Arrows: day / week. Home / End: week. Page Up / Down: month (Shift: year). Enter or click: select.',
    },
    doGrid: {
      fr: 'Laisser le focus sur un `button` dans une `gridcell`, pas un `div` cliquable',
      en: 'Keep focus on a `button` inside a `gridcell`, not a clickable `div`',
    },
    doAdapter: {
      fr: '`toCalendarDate` / `fromCalendarDate` au bord de l’app, jamais un instant ISO ambigu dans la grille',
      en: '`toCalendarDate` / `fromCalendarDate` at the app boundary, never an ambiguous ISO instant in the grid',
    },
    doUnavailable: {
      fr: '`isDateUnavailable` + `minValue` / `maxValue` plutôt que de retirer des jours de la grille',
      en: '`isDateUnavailable` + `minValue` / `maxValue` rather than removing days from the grid',
    },
    dontEvents: {
      fr: 'Le rendu d’événements LMS — c’est DS-050, hors de `d-ui`',
      en: 'LMS event rendering — that is DS-050, outside `d-ui`',
    },
    dontPicker: {
      fr: 'Un champ texte + overlay — c’est le DatePicker (DS-028), qui réutilisera `Calendar`',
      en: 'A text field + overlay — that is DatePicker (DS-028), which will reuse `Calendar`',
    },
    dontTimezone: {
      fr: 'Luxon, date-fns-tz ou un `Date` local implicite dans les props',
      en: 'Luxon, date-fns-tz, or an implicit local `Date` in the props',
    },
    propsBody: {
      fr: '`value` / `onValueChange` pour un état contrôlé (`CalendarDate` ou `{ start, end }`). `selectionMode="range"` pour une plage. `today` pour figer « aujourd’hui » dans les tests. `name` / `nameEnd` posent des champs masqués `YYYY-MM-DD`.',
      en: '`value` / `onValueChange` for controlled state (`CalendarDate` or `{ start, end }`). `selectionMode="range"` for a range. `today` to freeze “today” in tests. `name` / `nameEnd` set hidden `YYYY-MM-DD` fields.',
    },
  },
  fileUpload: {
    intro: {
      fr: '`FileUpload` est un sélecteur de fichiers accessible : clic, dépôt optionnel, liste suppressible. Il ne téléverse rien — l’app envoie les `File`. Pour recadrer une image, voir plus tard DS-043.',
      en: '`FileUpload` is an accessible file picker: click, optional drop, removable list. It does not upload — the app sends the `File`s. To crop an image, see DS-043 later.',
    },
    dropzone: { fr: 'Zone de dépôt', en: 'Dropzone' },
    dropzoneBody: {
      fr: '`dropzone` (défaut : oui) ajoute une zone de glisser-déposer. Le clavier n’en a pas besoin : le bouton **Choisir un fichier** ouvre le sélecteur natif.',
      en: '`dropzone` (default: on) adds a drag-and-drop zone. The keyboard does not need it: the **Choose file** button opens the native picker.',
    },
    browseOnly: { fr: 'Clic seul', en: 'Click only' },
    browseOnlyBody: {
      fr: '`dropzone={false}` n’affiche que le bouton. Utile dans un formulaire dense.',
      en: '`dropzone={false}` shows only the button. Useful in a dense form.',
    },
    multiple: { fr: 'Plusieurs fichiers', en: 'Multiple files' },
    multipleBody: {
      fr: '`multiple` autorise plusieurs fichiers. Chaque nom est listé et peut être retiré.',
      en: '`multiple` allows several files. Each name is listed and can be removed.',
    },
    invalidBody: {
      fr: 'Utilisez `invalid` (et `error` pour le message) lorsque le fichier est requis ou refusé. `invalid` pose `aria-invalid` ; un refus `accept` / `maxSize` invalide aussi le champ.',
      en: 'Use `invalid` (and `error` for the message) when the file is required or rejected. `invalid` sets `aria-invalid`; an `accept` / `maxSize` rejection also invalidates the field.',
    },
    constraints: { fr: 'Accept et taille max', en: 'Accept and max size' },
    constraintsBody: {
      fr: '`accept` filtre le type (extensions ou MIME). `maxSize` (octets) refuse un fichier trop lourd. Les refus s’affichent sous le champ (`role="alert"`), pas seulement en couleur.',
      en: '`accept` filters the type (extensions or MIME). `maxSize` (bytes) rejects an oversized file. Rejections show under the field (`role="alert"`), not by colour alone.',
    },
    progress: { fr: 'Progression', en: 'Progress' },
    progressBody: {
      fr: '`progress` est un slot : un nœud sous la liste, ou une fonction par fichier. Aucun client HTTP dans `d-ui`.',
      en: '`progress` is a slot: a node under the list, or a function per file. No HTTP client in `d-ui`.',
    },
    a11yBody: {
      fr: 'L’input fichier natif est masqué visuellement (`d-ui-visually-hidden`) et sorti de la tabulation : le bouton visible est le contrôle clavier. Le libellé est associé par `htmlFor`. `invalid` pose `aria-invalid` ; l’erreur est liée par `aria-describedby`. La liste a un nom accessible. Le bouton de retrait est une `IconButton` nommée.',
      en: 'The native file input is visually hidden (`d-ui-visually-hidden`) and taken out of the tab order: the visible button is the keyboard control. The label is associated with `htmlFor`. `invalid` sets `aria-invalid`; the error is linked with `aria-describedby`. The list has an accessible name. The remove control is a named `IconButton`.',
    },
    doButton: {
      fr: 'Laisser le bouton « Choisir un fichier » pour le clavier, même avec une zone de dépôt',
      en: 'Keep the “Choose file” button for the keyboard, even with a dropzone',
    },
    doAccept: {
      fr: '`<FileUpload accept=".pdf,application/pdf" maxSize={5 * 1024 * 1024}>`',
      en: '`<FileUpload accept=".pdf,application/pdf" maxSize={5 * 1024 * 1024}>`',
    },
    dontDiv: {
      fr: 'Un `div` cliquable à la place du bouton ou de l’input fichier',
      en: 'A clickable `div` instead of the button or the file input',
    },
    dontUpload: {
      fr: 'Appeler Laravel / `fetch` depuis le composant',
      en: 'Calling Laravel / `fetch` from the component',
    },
    props: {
      fr: 'Les attributs natifs de l’`<input type="file">` (`name`, `accept`, `required`, …) sont transmis. `value` n’est pas contrôlable (limitation HTML) : utilisez `files` / `onFilesChange`.',
      en: 'Native `<input type="file">` attributes (`name`, `accept`, `required`, …) are forwarded. `value` is not controllable (HTML limitation): use `files` / `onFilesChange`.',
    },
  },
  datePicker: {
    intro: {
      fr: '`DatePicker` compose `TextInput`, `Popover` et `Calendar` : une date civile se saisit ou se choisit. Pour une grille sans champ, utilisez `Calendar`. Pour une heure seule, `TimePicker`.',
      en: '`DatePicker` composes `TextInput`, `Popover`, and `Calendar`: a civil date is typed or picked. For a grid without a field, use `Calendar`. For time only, `TimePicker`.',
    },
    keyboard: { fr: 'Saisie au clavier', en: 'Keyboard entry' },
    keyboardBody: {
      fr: 'Le champ accepte `JJ/MM/AAAA` (ou `MM/DD/YYYY` en anglais) et `YYYY-MM-DD`. La valeur se valide à la sortie du champ. **Alt+↓** ouvre le calendrier.',
      en: 'The field accepts `DD/MM/YYYY` (or `MM/DD/YYYY` in English) and `YYYY-MM-DD`. The value is parsed on blur. **Alt+↓** opens the calendar.',
    },
    calendar: { fr: 'Calendrier', en: 'Calendar' },
    calendarBody: {
      fr: 'Le bouton nommé ouvre un `Popover` (`trapFocus`, rôle `dialog`). Choisir un jour ferme le panneau. Escape aussi.',
      en: 'The named button opens a `Popover` (`trapFocus`, `dialog` role). Picking a day closes the panel. Escape does too.',
    },
    restricted: { fr: 'Dates restreintes', en: 'Restricted dates' },
    restrictedBody: {
      fr: '`minValue` / `maxValue` / `isDateUnavailable` s’appliquent au calendrier et à la saisie. Une date hors plage invalide le champ.',
      en: '`minValue` / `maxValue` / `isDateUnavailable` apply to the calendar and typed input. A date out of range invalidates the field.',
    },
    clearableBody: {
      fr: '`clearable` (défaut : oui) pose le bouton **Effacer**, comme `TextInput`.',
      en: '`clearable` (default: on) sets the **Clear** button, like `TextInput`.',
    },
    invalidBody: {
      fr: 'Une date illisible ou hors plage pose `aria-invalid` et le message sous le champ (via `Field` / `error`).',
      en: 'An unreadable or out-of-range date sets `aria-invalid` and the message under the field (via `Field` / `error`).',
    },
    a11yBody: {
      fr: 'Le champ est un `<input>` nommé. Le déclencheur du calendrier a un nom accessible (`openCalendarLabel`). Le panneau est un `dialog` piégé. `name` pose un champ masqué `YYYY-MM-DD`.',
      en: 'The field is a named `<input>`. The calendar trigger has an accessible name (`openCalendarLabel`). The panel is a trapped `dialog`. `name` sets a hidden `YYYY-MM-DD` field.',
    },
    doParse: {
      fr: 'Laisser saisir `12/03/2026` ou `2026-03-12` sans ouvrir le calendrier',
      en: 'Allow typing `12/03/2026` or `2026-03-12` without opening the calendar',
    },
    doCalendar: {
      fr: 'Fermer le `Popover` à la sélection et sur Escape',
      en: 'Close the `Popover` on selection and Escape',
    },
    dontDate: {
      fr: 'Exposer un `Date` JS comme valeur — utiliser `{ year, month, day }`',
      en: 'Exposing a JS `Date` as the value — use `{ year, month, day }`',
    },
    dontTimezone: {
      fr: 'Un sélecteur de fuseau horaire (hors périmètre)',
      en: 'A time-zone picker (out of scope)',
    },
    props: {
      fr: '`value` / `onValueChange` pour un état contrôlé (`CalendarDate | null`). `locale` pilote le format affiché. `name` poste `YYYY-MM-DD`.',
      en: '`value` / `onValueChange` for controlled state (`CalendarDate | null`). `locale` drives the displayed format. `name` posts `YYYY-MM-DD`.',
    },
  },
  timePicker: {
    intro: {
      fr: '`TimePicker` saisit une heure civile `{ hour, minute }` (24 h). Pour une date, voir `DatePicker`.',
      en: '`TimePicker` enters a civil time `{ hour, minute }` (24-hour). For a date, see `DatePicker`.',
    },
    spinners: { fr: 'Compteurs', en: 'Spinbuttons' },
    spinnersBody: {
      fr: 'Le panneau expose deux `role="spinbutton"` (heure, minutes). Flèches, Début/Fin, Page préc./suiv. Les boutons plus/moins sont nommés.',
      en: 'The panel exposes two `role="spinbutton"` (hour, minutes). Arrows, Home/End, Page up/down. Plus/minus buttons are named.',
    },
    invalidBody: {
      fr: 'Une heure illisible (`24:00`) ou hors `minValue` / `maxValue` pose `aria-invalid`.',
      en: 'An unreadable time (`24:00`) or one outside `minValue` / `maxValue` sets `aria-invalid`.',
    },
    a11yBody: {
      fr: 'Le champ est un `<input>` nommé. Le déclencheur ouvre un `dialog`. Chaque unité est un spinbutton avec `aria-valuenow` / `min` / `max`. `name` poste `HH:mm`.',
      en: 'The field is a named `<input>`. The trigger opens a `dialog`. Each unit is a spinbutton with `aria-valuenow` / `min` / `max`. `name` posts `HH:mm`.',
    },
    doSpin: {
      fr: 'Garder les spinbuttons (ou un équivalent natif), pas une liste d’heures non nommée',
      en: 'Keep spinbuttons (or a native equivalent), not an unnamed list of times',
    },
    doParse: {
      fr: 'Accepter `14:30` et `14h30` à la saisie',
      en: 'Accept `14:30` and `14h30` when typing',
    },
    dontNative: {
      fr: '`<input type="time">` seul — le chrome et les messages d’erreur ne seraient plus ceux de `d-ui`',
      en: '`<input type="time">` alone — chrome and error messages would no longer be `d-ui`',
    },
    dontTimezone: {
      fr: 'Une conversion de fuseau : la valeur reste `{ hour, minute }`',
      en: 'A time-zone conversion: the value stays `{ hour, minute }`',
    },
    props: {
      fr: '`value` / `onValueChange` (`ClockTime | null`). `minValue` / `maxValue` en `{ hour, minute }`.',
      en: '`value` / `onValueChange` (`ClockTime | null`). `minValue` / `maxValue` as `{ hour, minute }`.',
    },
  },
  dateTimePicker: {
    intro: {
      fr: '`DateTimePicker` réunit date et heure civiles (`DateTimeValue`). Pas d’instant UTC : l’app convertit si besoin via `fromCalendarDate`.',
      en: '`DateTimePicker` combines civil date and time (`DateTimeValue`). No UTC instant: the app converts if needed via `fromCalendarDate`.',
    },
    compose: { fr: 'Calendrier et heure', en: 'Calendar and time' },
    composeBody: {
      fr: 'Le panneau affiche `Calendar` puis les spinbuttons. Choisir un jour garde l’heure courante (minuit si vide).',
      en: 'The panel shows `Calendar` then the spinbuttons. Picking a day keeps the current time (midnight if empty).',
    },
    invalidBody: {
      fr: 'Saisie illisible ou hors `minValue` / `maxValue` (`DateTimeValue`) : `aria-invalid` et le message sous le champ.',
      en: 'Unreadable input or outside `minValue` / `maxValue` (`DateTimeValue`): `aria-invalid` and the message under the field.',
    },
    a11yBody: {
      fr: 'Même contrat que `DatePicker` + spinbuttons de `TimePicker`. `name` poste `YYYY-MM-DDTHH:mm` (civil, sans `Z`).',
      en: 'Same contract as `DatePicker` plus `TimePicker` spinbuttons. `name` posts `YYYY-MM-DDTHH:mm` (civil, no `Z`).',
    },
    doParse: {
      fr: 'Accepter `12/03/2026 09:15` dans un seul champ',
      en: 'Accept `12/03/2026 09:15` in a single field',
    },
    doPopover: {
      fr: 'Fermer le `Popover` sur Escape',
      en: 'Close the `Popover` on Escape',
    },
    dontJsDate: {
      fr: 'Un `Date` unique comme API — garder `{ date, time }`',
      en: 'A single `Date` as the API — keep `{ date, time }`',
    },
    dontTimezone: {
      fr: 'Un sélecteur de fuseau ou des événements LMS récurrents',
      en: 'A time-zone picker or recurring LMS events',
    },
    props: {
      fr: '`value` / `onValueChange` (`DateTimeValue | null`). `minValue` / `maxValue` comparent date puis heure.',
      en: '`value` / `onValueChange` (`DateTimeValue | null`). `minValue` / `maxValue` compare date then time.',
    },
  },
  tabs: {
    intro: {
      fr: '`Tabs` organise des vues in-page (admin, cours). Ce n’est pas un menu de navigation ni un routeur. Pour un fil de pages, `Breadcrumb` ; pour une liste paginée, `Pagination`.',
      en: '`Tabs` organises in-page views (admin, course). It is not a navigation menu or a router. For a trail of pages, use `Breadcrumb`; for a paged list, `Pagination`.',
    },
    activation: { fr: 'Activation manuelle', en: 'Manual activation' },
    activationBody: {
      fr: '`activation="automatic"` (défaut) : les flèches sélectionnent l’onglet (WAI-ARIA). `manual` : les flèches déplacent le focus ; **Entrée** ou **Espace** activent — utile si le panneau est coûteux.',
      en: '`activation="automatic"` (default): arrow keys select the tab (WAI-ARIA). `manual`: arrows move focus; **Enter** or **Space** activate — useful when the panel is expensive.',
    },
    vertical: { fr: 'Onglets verticaux', en: 'Vertical tabs' },
    verticalBody: {
      fr: '`orientation="vertical"` aligne la `tablist` à gauche. Flèches haut / bas. Pose `aria-orientation`.',
      en: '`orientation="vertical"` stacks the `tablist` on the left. Up / down arrows. Sets `aria-orientation`.',
    },
    cluster: { fr: 'Alignés à gauche', en: 'Justify left' },
    clusterBody: {
      fr: '`layout="cluster"` colle les onglets à gauche. Le filet 2px (gris au repos, marque si sélectionné) reste le même que l’exemple par défaut, qui étire les onglets (`layout="stretch"`).',
      en: '`layout="cluster"` packs tabs to the left. The 2px rule (muted at rest, brand when selected) is the same as the default, which stretches tabs (`layout="stretch"`).',
    },
    detached: { fr: 'Détachés', en: 'Detached' },
    detachedBody: {
      fr: '`variant="detached"` pose des pastilles **séparées** au-dessus du panneau (pas de filet, pas de piste). Au repos : contour gris (`border-subtle`). Sélection : contour `fg`. Passez une `icon` décorative sur `Tab`.',
      en: '`variant="detached"` lays out **separate** chips above the panel (no rule, no track). Idle: grey `border-subtle` outline. Selected: `fg` outline. Pass a decorative `icon` on `Tab`.',
    },
    a11yBody: {
      fr: 'Pattern WAI-ARIA onglets : `tablist` nommée, `tab` / `tabpanel` liés par `id`. Un seul onglet tabulable (`tabIndex={0}`). Flèches, Début / Fin. L’onglet désactivé est sauté. Le panneau sélectionné est focusable.',
      en: 'WAI-ARIA tabs pattern: named `tablist`, `tab` / `tabpanel` linked by `id`. Only one tab is tabbable (`tabIndex={0}`). Arrows, Home / End. A disabled tab is skipped. The selected panel is focusable.',
    },
    doPattern: {
      fr: 'Une `tablist` avec `Tab` + `TabPanel` de même `value`',
      en: 'A `tablist` with `Tab` + `TabPanel` sharing the same `value`',
    },
    doLabel: {
      fr: '`label` (ou `aria-label`) sur `Tabs` pour nommer la liste',
      en: '`label` (or `aria-label`) on `Tabs` to name the list',
    },
    dontDisplay: {
      fr: 'Des boutons `aria-pressed` pour simuler des onglets',
      en: '`aria-pressed` buttons to fake tabs',
    },
    dontRouter: {
      fr: '`usePathname` / le routeur Next.js dans le package',
      en: '`usePathname` / the Next.js router inside the package',
    },
    props: {
      fr: '`value` / `onValueChange` pour un état contrôlé. `variant` (`line` / `detached`) et `layout` (`stretch` / `cluster`) changent le chrome, pas le pattern ARIA. `label` nomme la `tablist`.',
      en: '`value` / `onValueChange` for controlled state. `variant` (`line` / `detached`) and `layout` (`stretch` / `cluster`) change the chrome, not the ARIA pattern. `label` names the `tablist`.',
    },
  },
  alert: {
    intro: {
      fr: '`Alert` correspond au **Message** LumApps : feedback inline permanent. Variantes `info`, `success`, `warning`, `danger` (LumApps `error`). Distinct de `Notification` (coin d’écran) et de Toast (DS-033).',
      en: '`Alert` maps to LumApps **Message**: permanent inline feedback. Variants `info`, `success`, `warning`, `danger` (LumApps `error`). Distinct from `Notification` (screen corner) and Toast (DS-033).',
    },
    variants: { fr: 'Variantes', en: 'Variants' },
    variantsBody: {
      fr: 'Chaque variante apporte une icône et une couleur sémantique. `warning` et `danger` utilisent `role="alert"` ; `info` et `success` utilisent `role="status"`.',
      en: 'Each variant brings an icon and semantic colour. `warning` and `danger` use `role="alert"`; `info` and `success` use `role="status"`.',
    },
    titled: { fr: 'Avec titre', en: 'With title' },
    titledBody: {
      fr: 'Combinez `title` et le corps pour séparer le sujet du détail.',
      en: 'Combine `title` and body to separate subject from detail.',
    },
    dismissible: { fr: 'Fermable', en: 'Dismissible' },
    dismissibleBody: {
      fr: 'Comme LumApps Message : `dismissible` n’affiche le bouton fermer que pour `info` + `hasBackground`. Passez `dismissLabel`, `onDismiss`, ou `open` / `onOpenChange`.',
      en: 'Like LumApps Message: `dismissible` shows the close button only for `info` + `hasBackground`. Pass `dismissLabel`, `onDismiss`, or `open` / `onOpenChange`.',
    },
    trimmed: { fr: 'Sans fond', en: 'Without background' },
    trimmedBody: {
      fr: '`hasBackground={false}` retire le fond teinté et le filet (variante trimmed LumApps Message).',
      en: '`hasBackground={false}` removes the tinted background and border (LumApps Message trimmed variant).',
    },
    action: { fr: 'Avec action', en: 'With action' },
    actionBody: {
      fr: 'Passez `actions` avec un ou plusieurs `Button` / `Link` sous le message.',
      en: 'Pass `actions` with one or more `Button` / `Link` components below the message.',
    },
    a11yBody: {
      fr: 'Ne confondez pas `Alert`, `Notification` et Toast. Icône + texte, pas la couleur seule. Fermeture : bouton nommé.',
      en: 'Do not confuse `Alert`, `Notification`, and Toast. Icon + text, not colour alone. Dismiss: named button.',
    },
    doInline: {
      fr: 'Un `Alert` près du contenu concerné (formulaire, section)',
      en: 'An `Alert` next to the affected content (form, section)',
    },
    doRole: {
      fr: '`warning` / `danger` pour les problèmes ; `info` / `success` pour le reste',
      en: '`warning` / `danger` for problems; `info` / `success` otherwise',
    },
    dontToast: {
      fr: 'Remplacer un Toast éphémère par `Alert` dans un coin d’écran',
      en: 'Replace a fleeting Toast with `Alert` in a screen corner',
    },
    dontColor: {
      fr: 'Un message sans texte ni icône, seulement une couleur de fond',
      en: 'A message with background colour only, no text or icon',
    },
    props: {
      fr: '`variant`, `hasBackground`, `title`, `actions`, `dismissible`, `dismissLabel`, `open` / `onOpenChange`. Corps : `children`.',
      en: '`variant`, `hasBackground`, `title`, `actions`, `dismissible`, `dismissLabel`, `open` / `onOpenChange`. Body: `children`.',
    },
  },
  notification: {
    intro: {
      fr: '`Notification` correspond au toast LumApps (processus applicatif, coin inférieur droit). Toujours `role="alert"`. La file et l’auto-dismiss relèvent de Toast (DS-033).',
      en: '`Notification` maps to the LumApps toast (app process, bottom-right corner). Always `role="alert"`. Queue and auto-dismiss belong to Toast (DS-033).',
    },
    variants: { fr: 'Variantes', en: 'Variants' },
    variantsBody: {
      fr: '`info`, `success`, `warning`, `danger` — bandeau icône coloré, fond blanc, ombre portée (pas de fond teinté Message).',
      en: '`info`, `success`, `warning`, `danger` — colored icon rail, white background, drop shadow (not a tinted Message surface).',
    },
    action: { fr: 'Avec action', en: 'With action' },
    actionBody: {
      fr: 'Comme « Info with callback » LumApps : `actionLabel` + `onActionClick` affichent un bouton secondaire sur la même ligne.',
      en: 'Like LumApps « Info with callback »: `actionLabel` + `onActionClick` show a secondary button on the same row.',
    },
    a11yBody: {
      fr: 'Toujours `role="alert"`. LumApps recommande de déplacer le focus vers l’action cliquable si besoin, puis de le restaurer à la fermeture.',
      en: 'Always `role="alert"`. LumApps recommends moving focus to a clickable action when needed, then restoring it on dismiss.',
    },
    doCorner: {
      fr: 'Positionner la notification en bas à droite (l’app ou le futur `ToastProvider`)',
      en: 'Place the notification bottom-right (app or future `ToastProvider`)',
    },
    doAction: {
      fr: '`actionLabel` localisé + handler `onActionClick` pour un rappel non bloquant',
      en: 'Localized `actionLabel` + `onActionClick` handler for a non-blocking follow-up',
    },
    dontInline: {
      fr: 'Un `Notification` au milieu d’un formulaire — utilisez `Alert`',
      en: 'A `Notification` in the middle of a form — use `Alert`',
    },
    dontOnly: {
      fr: 'Une `Notification` comme seul retour d’erreur de formulaire',
      en: 'A `Notification` as the only form error feedback',
    },
    props: {
      fr: '`variant`, `actionLabel`, `onActionClick`, `dismissible`, `dismissLabel`, `open` / `onOpenChange`. Corps : `children`.',
      en: '`variant`, `actionLabel`, `onActionClick`, `dismissible`, `dismissLabel`, `open` / `onOpenChange`. Body: `children`.',
    },
  },
  toast: {
    intro: {
      fr: '`ToastProvider` + `useToast()` affichent des toasts transitoires en bas à droite via le composant `Notification`. File d’attente, durée par défaut (~6 s) et `maxVisible` configurables.',
      en: '`ToastProvider` + `useToast()` show transient bottom-right toasts via the `Notification` component. Queue, default duration (~6 s), and `maxVisible` are configurable.',
    },
    default: { fr: 'Par défaut', en: 'Default' },
    defaultBody: {
      fr: 'Appelez `toast({ message, variant })` depuis un handler. Le focus reste sur le déclencheur.',
      en: 'Call `toast({ message, variant })` from a handler. Focus stays on the trigger.',
    },
    variants: { fr: 'Variantes', en: 'Variants' },
    variantsBody: {
      fr: 'Même sémantique que `Notification` : `info`, `success`, `warning`, `danger`.',
      en: 'Same semantics as `Notification`: `info`, `success`, `warning`, `danger`.',
    },
    action: { fr: 'Avec action', en: 'With action' },
    actionBody: {
      fr: '`actionLabel` + `onActionClick` pour un rappel non bloquant (comme LumApps « Info with callback »).',
      en: '`actionLabel` + `onActionClick` for a non-blocking follow-up (like LumApps « Info with callback »).',
    },
    queue: { fr: 'File d’attente', en: 'Queue' },
    queueBody: {
      fr: '`maxVisible` limite les toasts affichés ; les suivants attendent et apparaissent au dismiss ou à l’auto-dismiss du précédent.',
      en: '`maxVisible` caps visible toasts; extras wait and appear when a toast is dismissed or auto-dismissed.',
    },
    dismissible: { fr: 'Fermable', en: 'Dismissible' },
    dismissibleBody: {
      fr: '`toast({ dismissible: true })` affiche le bouton fermer de `Notification`. Combinez avec `duration: 0` pour un toast persistant, ou laissez l’auto-dismiss (~6 s).',
      en: '`toast({ dismissible: true })` shows the `Notification` close button. Pair with `duration: 0` for a persistent toast, or keep auto-dismiss (~6 s).',
    },
    a11yBody: {
      fr: 'Annonce via `role="alert"` sur `Notification`, sans voler le focus. `duration: 0` garde le toast jusqu’à fermeture manuelle (`dismissible`). `prefers-reduced-motion` n’empêche pas le dismiss.',
      en: 'Announced via `Notification`’s `role="alert"` without stealing focus. `duration: 0` keeps the toast until manual dismiss (`dismissible`). `prefers-reduced-motion` does not block dismiss.',
    },
    doProvider: {
      fr: 'Monter `ToastProvider` près de la racine (avec `ThemeProvider`)',
      en: 'Mount `ToastProvider` near the root (with `ThemeProvider`)',
    },
    doQueue: {
      fr: 'Documenter `maxVisible` si l’app peut enfiler plusieurs processus',
      en: 'Document `maxVisible` when the app can enqueue several processes',
    },
    dontInline: {
      fr: 'Un toast comme seul retour d’erreur de formulaire — utilisez `Alert` ou `FieldError`',
      en: 'A toast as the only form error feedback — use `Alert` or `FieldError`',
    },
    dontCenter: {
      fr: 'Un toast au centre de l’écran — le viewport est coin inférieur droit',
      en: 'A toast in the screen center — the viewport is bottom-right',
    },
    props: {
      fr: '`maxVisible`, `defaultDuration`, `defaultDismissible`, `label`. API : `toast({ message, variant, dismissible, dismissLabel, duration, … })`, `dismiss(id)`, `dismissAll()`.',
      en: '`maxVisible`, `defaultDuration`, `defaultDismissible`, `label`. API: `toast({ message, variant, dismissible, dismissLabel, duration, … })`, `dismiss(id)`, `dismissAll()`.',
    },
  },
  emptyState: {
    intro: {
      fr: '`EmptyState` compose icône (ou illustration), titre, description et actions (`Button`, `Link`). Pour une liste ou une vue sans données.',
      en: '`EmptyState` composes icon (or illustration), title, description, and actions (`Button`, `Link`). For a list or view with no data.',
    },
    actions: { fr: 'Avec actions', en: 'With actions' },
    actionsBody: {
      fr: 'Passez `actions` avec un ou plusieurs `Button`. L’app décide des libellés et des handlers.',
      en: 'Pass `actions` with one or more `Button`s. The app owns labels and handlers.',
    },
    a11yBody: {
      fr: 'Le titre est un `h2` qui nomme la région (`aria-labelledby`). Pas de live region : le placeholder est statique.',
      en: 'The title is an `h2` naming the region (`aria-labelledby`). No live region: the placeholder is static.',
    },
    doActions: {
      fr: 'Une action principale (`Button`) et éventuellement une secondaire',
      en: 'A primary action (`Button`) and optionally a secondary one',
    },
    doIcon: {
      fr: 'Une icône décorative (`Icon`) ou une illustration via `illustration`',
      en: 'A decorative icon (`Icon`) or an illustration via `illustration`',
    },
    dontFetch: {
      fr: 'Un fetch ou un mapping d’erreur HTTP dans le package',
      en: 'A fetch or HTTP error mapping inside the package',
    },
    dontLive: {
      fr: 'Annoncer un empty state avec `role="alert"`',
      en: 'Announce an empty state with `role="alert"`',
    },
    props: {
      fr: '`title`, `description`, `icon`, `illustration`, `actions`.',
      en: '`title`, `description`, `icon`, `illustration`, `actions`.',
    },
  },
  errorState: {
    intro: {
      fr: '`ErrorState` est un placeholder d’échec (chargement, action). Même layout qu’`EmptyState`, icône d’alerte par défaut.',
      en: '`ErrorState` is a failure placeholder (load, action). Same layout as `EmptyState`, default alert icon.',
    },
    live: { fr: 'Annonce dynamique', en: 'Live announcement' },
    liveBody: {
      fr: '`live` pose `role="alert"` quand l’erreur apparaît **après** le rendu initial. Laissez `false` pour une page d’erreur statique.',
      en: '`live` sets `role="alert"` when the error appears **after** the initial render. Leave `false` for a static error page.',
    },
    a11yBody: {
      fr: 'Comme `EmptyState`, le titre structure la zone. `live` seulement si l’échec surgit dynamiquement (équivalent d’un message de champ `role="alert"`).',
      en: 'Like `EmptyState`, the title structures the region. `live` only when failure appears dynamically (same idea as a field message with `role="alert"`).',
    },
    doRetry: {
      fr: 'Une action `Réessayer` en `Button variant="secondary"`',
      en: 'A `Retry` action as `Button variant="secondary"`',
    },
    doStatic: {
      fr: 'Sans `live` pour un écran d’erreur plein page',
      en: 'Without `live` for a full-page error screen',
    },
    dontHttp: {
      fr: 'Traduire des codes HTTP Laravel dans le package',
      en: 'Map Laravel HTTP codes inside the package',
    },
    dontOnlyColor: {
      fr: 'Une icône rouge sans titre ni description',
      en: 'A red icon with no title or description',
    },
    props: {
      fr: '`title`, `description`, `icon`, `actions`, `live`.',
      en: '`title`, `description`, `icon`, `actions`, `live`.',
    },
  },
  breadcrumb: {
    intro: {
      fr: '`Breadcrumb` est le fil d’Ariane d’une vue (cours, devoir). Le **dernier** item est la page courante : texte, pas un lien. Les items précédents sont des `Link` si `href` est passé. Pas de routeur dans le package.',
      en: '`Breadcrumb` is the trail for a view (course, assignment). The **last** item is the current page: text, not a link. Earlier items are `Link`s when `href` is set. No router in the package.',
    },
    a11yBody: {
      fr: 'Un `<nav>` nommé contient une liste ordonnée. Le dernier item pose `aria-current="page"`. Les séparateurs sont masqués aux technologies d’assistance. Utilisez `Link` (soulignement) pour les pages parentes.',
      en: 'A named `<nav>` contains an ordered list. The last item sets `aria-current="page"`. Separators are hidden from assistive technology. Use `Link` (underline) for parent pages.',
    },
    doLast: {
      fr: 'Laisser le dernier `BreadcrumbItem` sans `href` (page courante)',
      en: 'Leave the last `BreadcrumbItem` without `href` (current page)',
    },
    doNav: {
      fr: '`<Breadcrumb label="Fil d’Ariane">` pour un nom distinct si la page a plusieurs `nav`',
      en: '`<Breadcrumb label="Breadcrumb">` for a distinct name when the page has several `nav`s',
    },
    dontLinkCurrent: {
      fr: 'Un lien sur la page courante — le dernier item n’est jamais un `<a>`',
      en: 'A link on the current page — the last item is never an `<a>`',
    },
    dontRouter: {
      fr: '`usePathname` pour remplir le fil depuis le package',
      en: '`usePathname` to fill the trail from the package',
    },
    props: {
      fr: '`label` nomme le `nav`. `size` aligne la typo. Chaque `BreadcrumbItem` accepte `href` (pages parentes).',
      en: '`label` names the `nav`. `size` aligns type. Each `BreadcrumbItem` accepts `href` (parent pages).',
    },
  },
  pagination: {
    intro: {
      fr: '`Pagination` est **contrôlée** : `page` / `onPageChange`. Pas de défilement infini ni de routeur. Les pages trop nombreuses sont collapsées avec une ellipse.',
      en: '`Pagination` is **controlled**: `page` / `onPageChange`. No infinite scroll and no router. Long ranges collapse with an ellipsis.',
    },
    many: { fr: 'Beaucoup de pages', en: 'Many pages' },
    manyBody: {
      fr: '`siblingCount` (défaut `1`) garde des numéros autour de la page courante, plus la première et la dernière. Un trou d’une seule page n’affiche pas d’ellipse.',
      en: '`siblingCount` (default `1`) keeps numbers around the current page, plus first and last. A one-page hole does not show an ellipsis.',
    },
    a11yBody: {
      fr: 'Un `<nav>` nommé. Le bouton de la page courante pose `aria-current="page"` et un nom du type « Page 3, page courante ». Précédent / suivant sont des `IconButton` nommées. Localisez `previousLabel`, `nextLabel` et `pageLabel`.',
      en: 'A named `<nav>`. The current page button sets `aria-current="page"` and a name such as “Page 3, current page”. Previous / next are named `IconButton`s. Localize `previousLabel`, `nextLabel`, and `pageLabel`.',
    },
    doCurrent: {
      fr: 'Laisser `aria-current="page"` sur le bouton de la page active',
      en: 'Keep `aria-current="page"` on the active page button',
    },
    doLabels: {
      fr: 'Passer `previousLabel` / `nextLabel` dans la langue de l’app',
      en: 'Pass `previousLabel` / `nextLabel` in the app language',
    },
    dontInfinite: {
      fr: 'Un défilement infini à la place de la pagination',
      en: 'Infinite scroll instead of pagination',
    },
    dontRouter: {
      fr: '`usePathname` ou `href` Next.js dans le composant',
      en: '`usePathname` or Next.js `href`s inside the component',
    },
    props: {
      fr: '`page` (1-indexée) et `pageCount` sont obligatoires. `onPageChange` reçoit le numéro demandé. `pageLabel` personnalise le nom accessible.',
      en: '`page` (1-based) and `pageCount` are required. `onPageChange` receives the requested number. `pageLabel` customises the accessible name.',
    },
  },
  menu: {
    intro: {
      fr: '`Menu` est un menu d’actions sous un déclencheur (`aria-haspopup="menu"`). `ContextMenu` ouvre le même pattern au clic droit et via **Maj+F10**. Pour une liste de **sélection**, utilisez `Select`. Ce n’est pas une palette de commandes (`Command Menu`, DS-045) ni un `Popover`.',
      en: '`Menu` is an action menu from a trigger (`aria-haspopup="menu"`). `ContextMenu` opens the same pattern on right-click and via **Shift+F10**. For a **selection** list, use `Select`. It is not a command palette (`Command Menu`, DS-045) or a `Popover`.',
    },
    triggerVariants: { fr: 'Variantes de déclencheur', en: 'Trigger variants' },
    triggerVariantsBody: {
      fr: 'Le déclencheur est interchangeable : passez un `Button` (emphase, taille, chevron), un `IconButton` nommé, un `Link`, ou un `Button` compact en pastille. Pas de composant `Chip` dans d-ui — la pastille reprend le `Button` secondaire arrondi.',
      en: 'The trigger is interchangeable: pass a `Button` (emphasis, size, chevron), a named `IconButton`, a `Link`, or a compact pill `Button`. There is no `Chip` in d-ui — the pill is a rounded secondary `Button`.',
    },
    items: { fr: 'Éléments du menu', en: 'Menu items' },
    itemsBody: {
      fr: 'Chaque `MenuItem` a un libellé, un slot `icon` (avant) et `iconEnd` (après). `shortcut` est un rappel visuel. Pour naviguer vers une page, passez `href` : l’item est un vrai `<a>` (clic droit, nouvel onglet), pas un bouton.',
      en: 'Each `MenuItem` has a label, an `icon` slot (before) and `iconEnd` (after). `shortcut` is a visual hint. To navigate to a page, pass `href`: the item is a real `<a>` (right-click, new tab), not a button.',
    },
    shortcuts: { fr: 'Raccourcis', en: 'Shortcuts' },
    shortcutsBody: {
      fr: '`shortcut` affiche un rappel visuel (`kbd`). Il ne pose pas de raccourci clavier réel : l’app reste responsable de `keydown`.',
      en: '`shortcut` shows a visual hint (`kbd`). It does not bind a real keyboard shortcut: the app still handles `keydown`.',
    },
    disabledItems: { fr: 'Éléments désactivés', en: 'Disabled items' },
    disabledItemsBody: {
      fr: '`disabled` sur `MenuItem` (ou `MenuSub`) saute l’entrée au clavier et au typeahead. L’item reste visible.',
      en: '`disabled` on `MenuItem` (or `MenuSub`) skips the entry for keyboard and typeahead. The item stays visible.',
    },
    submenu: { fr: 'Sous-menu', en: 'Submenu' },
    submenuBody: {
      fr: '`MenuSub` ouvre un menu imbriqué. **Flèche droite** ouvre, **flèche gauche** ferme. Souris : survol avec un délai court.',
      en: '`MenuSub` opens a nested menu. **Right arrow** opens, **left arrow** closes. Mouse: hover with a short delay.',
    },
    context: { fr: 'Menu contextuel', en: 'Context menu' },
    contextBody: {
      fr: '`ContextMenu` s’ouvre au clic droit et au clavier (**Maj+F10** / touche Menu). Les mêmes actions doivent aussi être dans un `Menu` bouton : le contextuel n’est jamais le seul chemin.',
      en: '`ContextMenu` opens on right-click and from the keyboard (**Shift+F10** / Menu key). The same actions must also live in a button `Menu`: context menu is never the only path.',
    },
    a11yBody: {
      fr: 'Pattern WAI-ARIA menu : déclencheur `aria-haspopup="menu"`, panneau `role="menu"` nommé (`label`), items `menuitem`. Flèches, Début / Fin, Escape, typeahead. Tab sort et ferme. Focus rendu au déclencheur. Un item de navigation est un `<a href>`. Le portail recopie `data-d-ui-theme`.',
      en: 'WAI-ARIA menu pattern: trigger `aria-haspopup="menu"`, named `role="menu"` panel (`label`), `menuitem` items. Arrows, Home / End, Escape, typeahead. Tab leaves and closes. Focus returns to the trigger. A navigation item is an `<a href>`. The portal copies `data-d-ui-theme`.',
    },
    doTrigger: {
      fr: 'Un `Button`, `IconButton` ou `Link` nommé comme `trigger`',
      en: 'A named `Button`, `IconButton`, or `Link` as `trigger`',
    },
    doHref: {
      fr: '`href` sur `MenuItem` pour une navigation (vrai `<a>`)',
      en: '`href` on `MenuItem` for navigation (a real `<a>`)',
    },
    doContext: {
      fr: 'Les mêmes actions dans un `Menu` **et** un `ContextMenu`',
      en: 'The same actions in a `Menu` **and** a `ContextMenu`',
    },
    doTypeahead: {
      fr: '`textValue` si le libellé de l’item n’est pas une chaîne',
      en: '`textValue` when the item label is not a string',
    },
    dontDiv: {
      fr: 'Un `div` + `onClick` à la place de `MenuItem`',
      en: 'A `div` + `onClick` instead of `MenuItem`',
    },
    dontNavigate: {
      fr: '`onSelect` + `window.location` à la place d’un `href`',
      en: '`onSelect` + `window.location` instead of `href`',
    },
    dontOnlyContext: {
      fr: 'Un contextuel comme **seul** moyen d’atteindre l’action',
      en: 'A context menu as the **only** way to reach the action',
    },
    dontPalette: {
      fr: 'Un menu pour une palette de commandes (DS-045)',
      en: 'A menu for a command palette (DS-045)',
    },
    props: {
      fr: '`label` nomme le `menu`. `trigger` est n’importe quel élément focusable (`Button`, `IconButton`, `Link`…). `open` / `onOpenChange` pour un état contrôlé. `MenuItem` : `onSelect`, `href` (lien), `icon` / `iconEnd`, `shortcut`, `disabled`.',
      en: '`label` names the `menu`. `trigger` is any focusable element (`Button`, `IconButton`, `Link`…). `open` / `onOpenChange` for controlled state. `MenuItem`: `onSelect`, `href` (link), `icon` / `iconEnd`, `shortcut`, `disabled`.',
    },
  },
  navbar: {
    intro: {
      fr: '`Navbar` est la barre supérieure d’une coquille : slots `brand`, `actions` et `user`. Ce n’est pas une toolbar de dialogue (LumApps Toolbar) ni un fil d’Ariane. Pas de liens LMS ni de logique d’auth.',
      en: '`Navbar` is the top bar of an app shell: `brand`, `actions`, and `user` slots. It is not a dialog toolbar (LumApps Toolbar) or a breadcrumb. No LMS links and no auth logic.',
    },
    menuButton: { fr: 'Bouton menu', en: 'Menu button' },
    menuButtonBody: {
      fr: 'Passez `onMenuOpenChange` pour afficher le hamburger (`aria-haspopup="dialog"`). Branchez-le sur `Sidebar` en `overlay`. Voir la story **Superposition** de `Sidebar`.',
      en: 'Pass `onMenuOpenChange` to show the hamburger (`aria-haspopup="dialog"`). Wire it to `Sidebar` with `overlay`. See the **Overlay** story on `Sidebar`.',
    },
    a11yBody: {
      fr: 'Un `<header>` (bannière). Le bouton menu n’apparaît que si `onMenuOpenChange` est passé : `aria-expanded`, `aria-controls`, `aria-haspopup="dialog"`. Placez `SkipLink` **avant** la barre. `IconButton` dans `actions` doit avoir un `aria-label`.',
      en: 'A `<header>` (banner). The menu button appears only when `onMenuOpenChange` is passed: `aria-expanded`, `aria-controls`, `aria-haspopup="dialog"`. Place `SkipLink` **before** the bar. An `IconButton` in `actions` must have an `aria-label`.',
    },
    doSlots: {
      fr: '`brand` / `actions` / `user` pour composer la barre',
      en: '`brand` / `actions` / `user` to compose the bar',
    },
    doMenu: {
      fr: '`menuLabel` localisé et `menuControls` égal à l’`id` du `Sidebar` overlay',
      en: 'A localized `menuLabel` and `menuControls` equal to the overlay `Sidebar` `id`',
    },
    doSkip: {
      fr: '`SkipLink` puis `Navbar`, puis `<main id="main" tabIndex={-1}>`',
      en: '`SkipLink` then `Navbar`, then `<main id="main" tabIndex={-1}>`',
    },
    dontAuth: {
      fr: 'Un appel session / profil dans le package',
      en: 'A session / profile call inside the package',
    },
    dontLinks: {
      fr: 'Des href LMS figés (`/courses`) dans `Navbar`',
      en: 'Hardcoded LMS hrefs (`/courses`) inside `Navbar`',
    },
    dontNext: {
      fr: 'Un fichier `layout.tsx` Next.js dans d-ui',
      en: 'A Next.js `layout.tsx` file inside d-ui',
    },
    props: {
      fr: '`brand`, `actions`, `user` sont des nœuds React. `onMenuOpenChange` affiche le bouton hamburger. `menuLabel` nomme ce bouton.',
      en: '`brand`, `actions`, and `user` are React nodes. `onMenuOpenChange` shows the hamburger button. `menuLabel` names that button.',
    },
  },
  sidebar: {
    intro: {
      fr: '`Sidebar` est la navigation latérale d’une coquille (`<nav>` + liste). Les items viennent de l’app (`href`). Pour une superposition mobile, `overlay` + `Navbar` (bouton menu). Ce n’est pas un `Drawer` (DS-038).',
      en: '`Sidebar` is the shell side navigation (`<nav>` + list). Items come from the app (`href`). For a mobile overlay, `overlay` + `Navbar` (menu button). It is not a `Drawer` (DS-038).',
    },
    iconsBody: {
      fr: '`icon` est décorative. Le libellé reste le nom accessible. En mode replié, le texte passe dans `VisuallyHidden` : l’item icône seule garde un nom.',
      en: '`icon` is decorative. The label stays the accessible name. When collapsed, the text moves into `VisuallyHidden`: the icon-only item still has a name.',
    },
    collapsed: { fr: 'Replié', en: 'Collapsed' },
    collapsedBody: {
      fr: '`collapsed` réduit le rail aux icônes. `collapsible` affiche le bouton replier / déployer (libellés `collapseLabel` / `expandLabel`).',
      en: '`collapsed` shrinks the rail to icons. `collapsible` shows the collapse / expand button (`collapseLabel` / `expandLabel`).',
    },
    nested: { fr: 'Imbriqués', en: 'Nested' },
    nestedBody: {
      fr: '`SidebarGroup` est un divulgage (`aria-expanded`). Les enfants sont une liste imbriquée, comme la side navigation LumApps.',
      en: '`SidebarGroup` is a disclosure (`aria-expanded`). Children are a nested list, like LumApps side navigation.',
    },
    overlay: { fr: 'Superposition', en: 'Overlay' },
    overlayBody: {
      fr: 'Sur petit écran, passez `overlay` et pilotez `open` depuis le bouton menu de `Navbar`. Le panneau est un `dialog` modal : Escape, fond, bouton fermer. `SkipLink` reste le premier focus.',
      en: 'On small screens, pass `overlay` and drive `open` from the `Navbar` menu button. The panel is a modal `dialog`: Escape, backdrop, close button. `SkipLink` stays first in the focus order.',
    },
    a11yBody: {
      fr: 'Landmark `navigation` nommé (`label`). Items : vrais `<a href>` (ou bouton sans `href`). Page courante : `aria-current="page"`. Overlay : `role="dialog"` + piège de focus. Pas de `usePathname`.',
      en: 'Named `navigation` landmark (`label`). Items: real `<a href>`s (or a button without `href`). Current page: `aria-current="page"`. Overlay: `role="dialog"` + focus trap. No `usePathname`.',
    },
    doNav: {
      fr: '`<Sidebar label="Navigation principale">` pour nommer le `nav`',
      en: '`<Sidebar label="Main navigation">` to name the `nav`',
    },
    doCurrent: {
      fr: '`current` sur l’item de la page (l’app calcule la route)',
      en: '`current` on the page item (the app computes the route)',
    },
    doCollapsed: {
      fr: 'Un `icon` + un libellé (visible ou `VisuallyHidden`) sur chaque item replié',
      en: 'An `icon` plus a label (visible or `VisuallyHidden`) on each collapsed item',
    },
    doSkip: {
      fr: '`SkipLink` + `<main id="main" tabIndex={-1}>` avec la coquille',
      en: '`SkipLink` + `<main id="main" tabIndex={-1}>` with the shell',
    },
    dontSitemap: {
      fr: 'Un sitemap Dudalo figé dans le package',
      en: 'A hardcoded Dudalo sitemap in the package',
    },
    dontDiv: {
      fr: 'Un `div` + `onClick` à la place de `SidebarItem`',
      en: 'A `div` + `onClick` instead of `SidebarItem`',
    },
    dontNext: {
      fr: '`usePathname` / `layout.tsx` Next.js dans le package',
      en: '`usePathname` / Next.js `layout.tsx` inside the package',
    },
    props: {
      fr: '`label` nomme le `nav`. `collapsed` / `collapsible` pour le rail. `overlay` + `open` / `onOpenChange` pour le mobile. `SidebarItem` : `href`, `icon`, `current`.',
      en: '`label` names the `nav`. `collapsed` / `collapsible` for the rail. `overlay` + `open` / `onOpenChange` for mobile. `SidebarItem`: `href`, `icon`, `current`.',
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
