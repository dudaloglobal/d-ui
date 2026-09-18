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
- 8d5dc65: Add Drawer, a Dialog anchored to a screen edge.

  `Drawer` is the panel for what you consult without leaving the page: filters, a mobile navigation, a detail sheet. It is `Dialog` with a different position and motion, and it is built that way: the same `@floating-ui/react` layer (trapped focus, inert page, locked scroll, focus returned to the trigger, `Escape` and backdrop close), and the same interior, now extracted into a shared `DialogFrame` so the two overlays cannot drift apart. The parts are the Dialog parts under their panel name — `DrawerHeader`, `DrawerTitle`, `DrawerDescription`, `DrawerBody`, `DrawerActions` — the same components, so a title still names the panel and the confirming action still comes last.

  `side` anchors the panel to `right` (default), `left`, `top` or `bottom`; it spans the whole edge and slides in from it, with the animation dropped under `prefers-reduced-motion`. `size` reuses the Dialog scale — `tiny`, `regular`, `big`, `huge` — as a width for side panels and a height for top and bottom ones; on a small screen the panel fills its edge.

  The dismiss button is on by default, unlike `Dialog`: a side panel usually has no actions, and the cross is its visible exit for mouse and touch, where a modal with a footer never needed one. `dismissible={false}` hands the exit to `DrawerActions`. `id` is forwarded so a `Navbar` menu button can point at the panel with `aria-controls`.

  Out of scope, on purpose: stacked drawers, swipe-to-close and sheet physics. `Sidebar` keeps its own `overlay` mode for the application shell.

- c6747ee: Split Tag (labelled status pill, TagGroup, controlled dismiss) from Badge (count/dot overlay on a host). `<Badge>Nouveau</Badge>` is no longer valid — use `Tag`. A coloured span on its own is not a design-system component.
- b5541d2: Add Table: a semantic compound table (caption, numeric alignment, keyboard-reachable overflow, EmptyState slot, sticky header, footer) — not a div grid.
- 3d92ee2: Add data-table behaviour as props on `Table`, and open Pagination to composition.

  `Table` already shipped the semantic markup (caption, numeric cells, keyboard overflow). Sort, search, selection and pagination now sit on that same component when you pass `columns`, `rows` and `rowId` — there is no second `DataTable` public API. Cell density, `align` / `numeric`, and the scroll region that becomes a named, keyboard-reachable region when the table overflows stay in one place.

  Each of sort, search, page and selection accepts a controlled prop and otherwise falls back to internal state, like `Tabs`. The page is clamped in one place so a shrinking dataset cannot leave someone on a page that no longer exists. `toolbar` receives the visible rows, the search and its setter, and the checked ids: the component builds no file. `loading` replaces the body with a skeleton and sets `aria-busy`; `empty` is a slot for `EmptyState` / `ErrorState` so the table does not own those product states.

  Pagination gains `PaginationPrevious`, `PaginationPages`, `PaginationNext` and `PaginationStatus`, plus optional `children` for free layouts. The default rendering keeps the original single `<ul>`, previous and next included.

  The chevron glyphs Calendar and Pagination each drew privately now live in one shared module. `TableHead` / `TableCell` omit the native `align` attribute so `start` / `end` type-check, and the last body row no longer doubles a bordered container’s rule.

- 6c35511: Add Image and FilePreview, and give FileUpload a `preview` shape.

  The ticket lists six Preline variants and four component names. Three of the variants — default upload, size validation, input-style picker — are settings `FileUpload` has had since DS-025, and "destroy and reinitialize" is Preline's imperative lifecycle, which in React is unmounting the component or clearing `files`. What was genuinely missing is the image side.

  `Image` frames a picture and owns the two states every page rewrote by hand. `alt` is required, and `""` is a legitimate value: that is how a decorative image is declared, where leaving `alt` out has a screen reader read the file name instead (1.1.1). With `ratio` — or `width` and `height` together — the frame reserves the space before the file arrives, so the page does not jump; `ratio="auto"` with no height cannot, and says so. When the file fails, no broken `<img>` is rendered: the fallback becomes a `role="img"` carrying the same name, and a decorative image stays silent. Lazy by default.

  `FilePreview` describes one chosen file — thumbnail for an image, extension otherwise, then name, weight, a progress slot and a remove button that names the file. Its object URL is created **and revoked** by the component; that is its reason to exist, since every hand-rolled preview forgot the `revokeObjectURL` and held the file in memory until a reload.

  `FileUpload` renders its file list through `FilePreview` instead of its own inline markup, and takes `preview`: `list` (default), `grid` for a gallery of thumbnails, or `none` when the page draws its own. The list stays a named `<ul>` in every shape, so a screen reader still counts the files. Rows now carry a thumbnail or a file-type chip, which the previous list did not show; rejection behaviour is unchanged — an oversized or wrong-typed file still never enters `files`.

  It now also follows its form's `reset`, and only when the reset actually happens: a form that asks for confirmation calls `preventDefault()` in a handler that runs after this one, so the decision is read once the event is over. Picking the same file twice adds one row, not two — the second used to land as a duplicate React key and as a second button reading out the same name.

  `Thumbnail` and `ImageUploader` are not components: the first is `Image` at a small size, the second is `FileUpload` with `accept="image/*"` and `preview="grid"`. Both ship as stories.

- a82b636: Add CommandMenu: a controlled command palette composed of Dialog, TextInput, and List, with groups, keywords, case- and accent-insensitive filtering, a custom `filter`, `onQueryChange` for remote search, and Skeleton loading and empty states.
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
