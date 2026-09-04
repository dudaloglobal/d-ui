# d-ui

## 0.1.0

### Minor Changes

- 8276343: Add Alert (LumApps Message), Notification (LumApps toast), EmptyState, and ErrorState feedback primitives with semantic variants, trimmed/closable alerts, action callbacks, and placeholder action slots.
- e86f9cc: Add Button fullWidth and isSelected, and document emphasis levels to match the product Button page.
- 6c82f54: Add Button `loadingIndicator` (`spinner` | `bounce`) for the loading state.
- 49d40b2: Add Calendar: civil-date month grid, year/month header selects, single or range selection (`minValue` / `maxValue` or `selectionMode="range"`), keyboard navigation, and a documented Date adapter (`toCalendarDate` / `fromCalendarDate`).
- be3185f: Add Checkbox, CheckboxGroup, Radio, RadioGroup, and Switch as native selection controls with labelled groups and accessible switch state.
- 863802a: Add DatePicker, TimePicker, and DateTimePicker: typed civil values, Calendar/time popovers, min/max, clear, and form-hidden ISO fields (no time zone picker).
- 9d088df: Add Skeleton (+ SkeletonText), Progress, and Stepper, the loading and progress primitives.

  The spinning ring is a stylesheet mechanic (`.d-ui-spinner`), not an exported component: `Button`'s loading state and `Dialog`'s `processing` overlay each render one decorative span, and the old `.d-ui-button-spinner` class is gone. `SelectListbox`'s private list skeleton is replaced by `SkeletonText`.

  Progress is a named `progressbar` with clamped values; omitting `value` makes it indeterminate and drops `aria-valuenow`, which is what tells "unknown" apart from "0 %". `variant="circular"` requires a value at the type level — only `linear` can be indeterminate.

  Stepper renders an `<ol>` with `aria-current="step"` on the current item and spells out each status through a visually hidden label, so completion is never carried by colour alone.

  Progress and Stepper take `size` on the shared `UiSize` scale (`xxs` … `xxl`), the same scale Avatar, Badge, and Card already use. Skeleton keeps CSS lengths for `width`, `height`, and `size` — it has to match the exact block it stands in for — and gains only `color`. All three take `color` on the shared `UiColor` scale.

- caf3d60: Add TimeAgo for accessible relative timestamps, with injectable locale and optional silent live updates.
- 13f2356: Add Dialog with DialogTitle, DialogDescription, DialogBody, and DialogActions: a controlled modal overlay with trapped focus, focus restoration, scroll lock, automatic `aria-labelledby` / `aria-describedby`, an `alert` mode (`alertdialog`, no outside dismiss, focus on the first non-destructive action, Escape still closes), an optional dismiss button, six widths that all fall back to full width below `sm`, a tinted action footer, and an opening animation dropped under `prefers-reduced-motion`.
- c6747ee: Split Tag (labelled status pill, TagGroup, controlled dismiss) from Badge (count/dot overlay on a host). `<Badge>Nouveau</Badge>` is no longer valid — use `Tag`. A coloured span on its own is not a design-system component.
- b5541d2: Add Table: a semantic compound table (caption, numeric alignment, keyboard-reachable overflow, EmptyState slot, sticky header, footer) — not a div grid.
- 4a72283: Add Field system: Field, Label, FieldDescription, FieldError, and useFieldControl
- a4cb325: Add FileUpload: accessible file picker with optional dropzone, accept/maxSize validation, removable file list, and a progress slot (no HTTP client).
- 3809e5e: Add Text, Heading, Link, and Divider typography primitives.

  Fix dark mode: `@theme` is now declared `inline`. Without it Tailwind emits the
  color variables on `:root`, where they resolve against the light palette — the
  `[data-d-ui-theme='dark']` override that `ThemeProvider` sets further down the
  tree never reaches them, and every color utility stays frozen on light values.

  **Visible change:** `--d-ui-color-border` moves from `#cbd5e1` to `#64748b`
  (`#475569` to `#64748b` in dark). The old value sat at 1.48:1 against `bg` in
  light and 2.47:1 in dark, where WCAG 2.2 AA 1.4.11 requires 3:1 for the visual
  boundary of a control — `Button` variant `secondary` had no perceivable outline.
  The new value measures 4.76:1 and 3.93:1. Purely decorative rules now use
  `--d-ui-color-border-subtle`, which is not subject to that threshold.

  A test parses `tokens.css` and checks every role pair in both themes, so a future
  palette cannot silently break a ratio.

- 91635d6: Add Icon wrapper with consistent sizes and accessible naming
- 0617140: Add TextInput and Textarea as full-width filled text fields with built-in label, helper, valid/invalid states, optional clear, and remaining-character count.
- a4331f8: Add Link `color` (`default`, `dark`, `light`) and decorative `icon` / `iconPosition`, matching the LumApps Link demos.
- c8f93ca: Add List and Accordion: semantic lists with leading/trailing slots, and WAI-ARIA accordion (single/multiple, disabled sections).
- 3921821: Add Menu and ContextMenu with interchangeable triggers (button, icon button, link, pill), nested submenus, item icons, `href` navigation items, disabled items, separators, shortcut display, typeahead, and a keyboard path (Shift+F10) for context menus.
- cd0dc04: Add Select and Combobox with shared options (groups, disabled items, descriptions), Combobox multiple chips, listStatus, filter modes, custom rendering, keyboard typeahead/filter, and native `name`/`form` submit via a visually hidden `<select>`.
- 2a6f137: Add Navbar and Sidebar app-shell primitives with brand/actions/user slots, collapsible icon rail, nested groups, and a mobile overlay dialog wired to SkipLink.
- 9374478: Add `SortableList`, `SortableItem`, and `DragHandle` (dnd-kit, ADR 0001): pointer, touch, and keyboard reordering with live-region announcements (`messages`, English fallback), `orientation` vertical / horizontal / grid, `as="ol"`, locked items, and `moveSortableItem` for the non-drag alternative required by WCAG 2.2 2.5.7.
- c8fc4d0: Add Tabs, Breadcrumb, and Pagination: WAI-ARIA tabs (manual/automatic), current-page breadcrumb, and controlled pagination (no router, no infinite scroll).
- 5d771c2: Add Text `color` / `colorVariant` (Color page families) and `noWrap` / `truncate` wrap-and-overflow props, matching the LumApps Text API.
- 2077b58: Add ToastProvider and useToast with queued bottom-right notifications built on Notification, auto-dismiss, and LumApps-aligned docs.
- dd45c81: Add SkipLink, system and brand ThemeProvider options, and public token names.
- e4813e4: Add Tooltip, Popover, and EmojiPopover as Floating UI overlays with collision handling, portaled themed surfaces, optional focus trapping, and Google Meet’s nine reaction emojis.

### Patch Changes

- a4331f8: Restore Properties (ArgTypes) table padding, borders, and column widths so Tailwind preflight no longer flattens the docs tables.
- a4331f8: Add a Color foundations page with LumApps-style ramps of the semantic tokens, plus warning, info, and violet families.
- a4331f8: Restore Storybook’s default 700 font-weight on docs headings so Tailwind preflight no longer flattens Heading and Typography section titles.
- a4331f8: Drop the Field Storybook docs page. TextInput documents labelled fields; `Field` stays in the public API.
- e549a5f: Use French defaults for TextInput and Textarea built-in labels (clear, password toggle, remaining-character count).
- a4331f8: Heading is `font-normal` by default. Pass `bold` for `font-bold`.
- 0b25bdc: Heading uses `font-bold` (700) to match Storybook docs titles. Docs canvas frames use the decorative border token again.
- a4331f8: Drop the Select Storybook docs page. Combobox documents the shared list patterns; `Select` stays in the public API.
- a4331f8: Style the Select/Combobox list with a drop shadow and no border, and position it with `fixed` so opening one overlay does not scroll the page.
- 29c3daa: Add an opt-in `focusShadow` prop on TextInput and Textarea for a soft brand-green focus glow.
- a4331f8: Restyle the Typography foundations page after LumApps: system font table, basic and custom style specimens.
