---
name: docs-locale
description: Keeps Storybook docs and example copy in French by default, with English only via the Langue toolbar and docs-locale.ts. Use when writing MDX, stories, docs-locale copy, Show code snippets, or when the user mentions traduction, français, locale, or English leftovers in Storybook.
---

# Docs locale

Storybook documentation language is **French**. The **Langue** toolbar only switches **example strings** in the canvas, not MDX.

## Rules

1. **MDX headings and prose** are French (`États particuliers`, not `Special states`; `Accessibilité`, not `Accessibility concerns`; `À faire` / `À éviter`, not `Do` / `Don't`).
2. **Example labels** in stories go through `packages/ui/.storybook/docs-locale.ts` (`buttonCopy` / `inputCopy` / `timeAgoCopy`). Add every new string to **both** `fr` and `en` with the **same keys**.
3. **Show code** snippets use the default docs language (French). Do not leave English UI copy in a story named for the French toolbar.
4. **Prop names and public API** stay English (`disabled`, `invalid`, `label`). ArgTypes **descriptions** in `.storybook/arg-types.ts` are French.
5. Story `name` (sidebar / canvas) is French. Story **export ids** stay English so e2e URLs do not break (`components-textinput--default`).
6. Theme toolbar titles are French (`Clair` / `Sombre`).

## After changing docs

Run `pnpm --filter d-ui test` (includes `src/docs-locale.test.ts`). It fails if an English MDX heading comes back or if `fr`/`en` copy keys diverge.

## Out of scope

Storybook chrome (`Show code`, Controls) is the manager UI, not d-ui copy.
