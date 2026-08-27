---
name: docs-locale
description: Keeps Storybook docs and example copy in French by default, with English via the Langue toolbar, docs-copy.ts, and docs-locale.ts. Use when writing MDX, stories, docs-locale copy, Show code snippets, or when the user mentions traduction, français, locale, or English leftovers in Storybook.
---

# Docs locale

Storybook documentation language is **French** by default. The **Langue** toolbar switches **docs prose**, **sidebar story names**, **canvas example strings**, and **toolbar labels** (Theme / Light / Dark).

## Rules

1. **MDX** uses `H1` / `H2` / `H3` / `P` / `Ul` / `Ol` from `.storybook/docs-i18n` with keys into `.storybook/docs-copy.ts`. Do not hard-code headings or paragraphs in one language.
2. **Every docs-copy leaf** has both `fr` and `en` (same key). Inline `code` with backticks and **bold** with `**...**`.
3. **Example labels** in stories go through `packages/ui/.storybook/docs-locale.ts` (`buttonCopy` / `inputCopy` / `timeAgoCopy` / `selectionCopy` / `skipLinkCopy` / `visuallyHiddenCopy` / `themeCopy` / `typographyCopy` / `iconCopy` / `fieldCopy` / `calendarCopy`). Add every new string to **both** `fr` and `en` with the **same keys**.
4. **Show code** snippets use the default docs language (French).
5. **Prop names and public API** stay English (`disabled`, `invalid`, `label`). ArgTypes **descriptions** in `.storybook/arg-types.ts` are French (Properties table is not switched yet).
6. Story `name` (sidebar source) is French. Add the English label to `storyNameEn`. Story **export ids** stay English so e2e URLs do not break (`components-textinput--default`).
7. Theme toolbar source titles are French (`Clair` / `Sombre`). Add the English labels to `toolbarLabelEn`.
8. The **Components** sidebar group is always alphabetical by English title (`Button`, `Calendar`, `Checkbox`, …). `sortSidebarStories` in `.storybook/story-sort.ts` — do not rely on glob / folder order.

## After changing docs

Run `pnpm --filter d-ui test` (includes `src/docs-locale.test.ts`). It fails if an English markdown heading comes back, if `fr`/`en` copy keys diverge, or if a story name has no English mapping.

## Out of scope

Storybook chrome (`Show code`, Controls column headers) is the manager UI, not d-ui copy.
