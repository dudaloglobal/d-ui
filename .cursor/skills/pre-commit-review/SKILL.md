---
name: pre-commit-review
description: >-
  Local pre-commit review of staged d-ui changes against YAGNI, SOLID, KISS, DRY,
  digital accessibility (WCAG 2.2 AA), semantic HTML, and Storybook option
  coverage (every public prop/state has a documented canvas; propose missing
  options such as Button + icon). Use before every git commit, when reviewing a
  component, or when the user mentions qualité, YAGNI, SOLID, KISS, DRY,
  accessibilité, HTML sémantique, or options manquantes. Never run this in
  GitHub Actions.
---

# Pre-commit review

Local-only gate. The git hook `.githooks/pre-commit` runs this skill via the
developer’s **local** Claude Code (`claude`) or Cursor (`agent`) CLI. There is
**no** GitHub Actions job and **no** cloud AI token.

When writing or reviewing a component, apply the same bar even before commit.

## Verdict (required)

End the review with exactly one of these lines, alone:

```
VERDICT: PASS
```

```
VERDICT: FAIL
```

Print findings first. `FAIL` blocks the commit. `PASS` allows it.

## Scope

Review **staged** changes (`git diff --cached`) plus the nearby files needed to
judge a component (TSX, tests, stories, MDX, ArgTypes, `docs-locale`).

Skip merge/rebase commits, `CI=true`, and `SKIP_COMMIT_REVIEW=1` (hook does this).

## 1. YAGNI, SOLID, KISS, DRY

Judge the diff, not a wish list. Match existing d-ui patterns.

| Principle | FAIL when                                                                                                                     | PASS when                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **YAGNI** | Abstraction, config flag, `asChild`, generic layer, or Education domain for a case that does not exist yet                    | The ticket’s API only; three similar lines beat a premature helper                  |
| **SOLID** | God component (fetch + business + chrome), new module that does two jobs, logic that belongs in `lib/` or a sibling primitive | One job per module; UI stays presentational; tokens / `cx` / `ThemeProvider` reused |
| **KISS**  | Clever indirection, extra wrapper, or new pattern when `Button` / `Field` / `TextInput` already show how                      | Smallest code that matches gold-standard components                                 |
| **DRY**   | Copy-pasted tokens, classNames, validation, or a second primitive that already exists (`grep` first)                          | Reuse `cx`, tokens, `docs-locale`, ArgTypes helpers, shared chrome                  |

Suggestions that are not violations go under **Proposals**, not FAIL.

## 2. Accessibilité numérique et HTML sémantique

Bar: `docs/accessibility.md` (WCAG 2.2 AA / RGAA). Applies to every staged
UI change, not only a dedicated a11y ticket.

| Rule                | FAIL when                                                                                               | PASS when                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **HTML sémantique** | `div` / `span` with `onClick` / `onKeyDown` where `button`, `a`, `label`, `summary`, or `dialog` exists | Native element for the job; headings in order (`h1`–`h6`, `Heading` `level`) |
| **Nom accessible**  | Icon-only or control with no name (`aria-label`, visible text, or `VisuallyHidden`)                     | `getByRole(…, { name })` can find it                                         |
| **ARIA**            | `role="button"` on a `div`, or `aria-*` duplicating what the native tag already exposes                 | `aria-*` only when HTML is not enough                                        |
| **Clavier / focus** | Untabbable control, `outline: none` without `:focus-visible` replacement, overlay without Escape        | Tab / Shift+Tab / Enter / Space / Escape match `docs/accessibility.md`       |
| **Couleur**         | Error / required / selected by color alone                                                              | Text, icon, or attribute in addition to color                                |
| **Tests**           | Interactive component tests query by class or placeholder only                                          | Testing Library `getByRole` (and keyboard where the widget needs it)         |

Do not FAIL a docs-only / hooks-only diff that does not render UI.

## 3. Documented options must exist

Gold standard: `Button.mdx` / `Button.stories.tsx` (emphasis, loading, size,
full width, icon, icon-only / `IconButton`, a11y). Autodocs-only is not enough.

For every **component** in the staged files:

1. List **public props and states** from the TSX (`variant`, `size`, `disabled`,
   `loading`, `icon`, `iconPosition`, `invalid`, …).
2. List **MDX sections** (or `docs-copy` keys) and **stories**.
3. Cross-check:

| Check                                                           | FAIL                       |
| --------------------------------------------------------------- | -------------------------- |
| Public option with no story + MDX/canvas                        | Undocumented API           |
| MDX/story that shows a prop the component does not implement    | Docs lie                   |
| Default-only story while the TSX already has other options      | Options not demonstrated   |
| Missing Accessibilité / À faire / À éviter / ArgTypes `include` | Below `storybook-docs` bar |

Native HTML that is forwarded (`disabled`, `aria-*` on the real element) still
needs a canvas when the docs talk about that state.

### Propose missing options

Always output a **Missing options** list for component diffs, even on PASS.

Think like a design-system consumer, not only like the ticket:

- Control with a label → also disabled, invalid, readonly if they exist on the API
- Button-like → label only, **+ icon**, icon at start/end, **icon-only**, loading,
  sizes, full width, pressed/toggle if the API has it
- Input-like → error, hint, prefix/suffix, disabled
- Overlay → closed, open, keyboard dismiss, labelled title

Do **not** FAIL solely because a _new_ API (e.g. `icon`) is absent when the
ticket and YAGNI say not yet — **propose** it. FAIL when the option **already
exists** (prop, sibling export like `IconButton`, or MDX claim) and is not
shown, or when a new component ships as “done” with only a Default canvas.

## Output format

```markdown
## Findings

- [FAIL] …
- [OK] …

## Missing options

- …

## Proposals

- …

VERDICT: PASS
```

Use `[FAIL]` only for blocking issues. If any `[FAIL]` exists, verdict is FAIL.

## Do not

- Invent GitHub Actions, `ANTHROPIC_API_KEY` on CI, or a remote review bot
- Ask the user to paste the review for approval — the hook prints it
- Mention Cursor, Claude, or agents in commit messages
- Expand Education / métier into `d-ui`
