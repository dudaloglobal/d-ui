---
name: storybook-docs
description: Writes Storybook MDX, stories, ArgTypes, and Show code snippets to the d-ui documentation bar (French, sectioned, Canvas per capability). Use when adding or editing a component, MDX, stories, ArgTypes, docs-locale copy, or when the user mentions documentation, Storybook docs, autodocs, or qualité de doc.
---

# Storybook docs

Gold standard on `main`: `Button.mdx`, `TextInput.mdx`, `TimeAgo.mdx` (PRs #80 / #84). Match that depth. Autodocs tags are not enough.

Also follow `.cursor/skills/docs-locale/SKILL.md` (French MDX, bilingual canvas copy).

## File layout

```
packages/ui/src/components/Name/
  Name.tsx
  Name.test.tsx
  Name.stories.tsx
  Name.mdx
```

A11y primitives live under `src/a11y/` with the same four files. Foundations (tokens, theme) get an MDX page under `src/foundations/` or next to the module.

Update `docs/component-conventions.md` / `docs/accessibility.md` only when the **contract** changes, not to repeat the MDX.

## MDX shape

```mdx
import { Meta, Canvas, ArgTypes } from '@storybook/addon-docs/blocks';
import * as NameStories from './Name.stories';

<Meta of={NameStories} />

# Name

One paragraph: what it is, when to use it, what to use instead.

Les exemples suivent la **langue** de la barre d’outils Storybook (**Français** par défaut).

<Canvas of={NameStories.Default} />

## Section in French

Why this exists, then the prop. One idea per heading.

<Canvas of={NameStories.SomeState} />

## Accessibilité

Native element, accessible name, keyboard, what not to do.

### À faire

### À éviter

## Propriétés

Which native attributes are forwarded.

<ArgTypes of={NameStories} include={['the', 'public', 'props']} />
```

Close with: Thème sombre = barre **Thème**. Langue des exemples = barre **Langue**.

### Required sections

| Block                 | Rule                                                             |
| --------------------- | ---------------------------------------------------------------- |
| Opening               | Purpose + sibling component if any (`TextInput` vs `Textarea`)   |
| Default canvas        | First thing after the toolbar note                               |
| One H2 per capability | Not a dump of variants. Explain **when** to use it               |
| Accessibilité         | Native tag, name, `aria-*` only when HTML is not enough          |
| À faire / À éviter    | Concrete JSX, not slogans                                        |
| Propriétés            | `ArgTypes` with an explicit `include` list (never the full dump) |

Do **not** title sections in English (`Special states`, `Properties`, `Do` / `Don't`). `docs-locale.test.ts` fails the PR.

## Stories

1. `title` is `Components/Name`, `Foundations/Name`, or `Accessibility/Name`.
2. `export const Default` (and other **English** export ids) so e2e ids stay stable.
3. `name: 'Par défaut'` (French) for the sidebar/canvas label.
4. Canvas strings go through `docs-locale.ts` (`fr` **and** `en`, same keys). Add a `*Copy()` helper per component family.
5. `argTypes` imported from `.storybook/arg-types.ts` (French `description`).
6. `parameters: componentSource("import { Name } from 'd-ui';", '<Name … />')` so **Show code** shows the public package, not the story wrapper. Snippet copy is French.
7. Cover the states the MDX talks about. If the MDX has a section, there is a story for it.

## ArgTypes

In `packages/ui/.storybook/arg-types.ts`:

- Descriptions in French.
- Say what the prop **does** and the a11y side effect (`pose aria-invalid`, `n’utilise pas aria-live`).
- Prop **names** stay English.

## Tests that must stay green

```bash
pnpm --filter d-ui test
```

Includes `src/docs-locale.test.ts`:

- `fr` / `en` copy keys match
- no English MDX headings
- ArgTypes descriptions stay French

If you add a component, add its copy helper to the keys assertion.

## Do / don't

| Do                                                   | Don't                                       |
| ---------------------------------------------------- | ------------------------------------------- |
| French headings, French ArgTypes, bilingual canvas   | English leftover in default Langue=Français |
| `Canvas of={Stories.X}` under each H2                | Autodocs-only page with no MDX              |
| `componentSource` from `d-ui`                        | Show code leaking `DefaultDemo` / `Labeled` |
| Explicit `ArgTypes include={…}`                      | Dump every HTML attribute                   |
| Point to WCAG in Accessibilité when it drives an API | “Accessible” with no native element named   |
