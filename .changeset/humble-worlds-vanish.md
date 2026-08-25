---
'd-ui': minor
---

Add Text, Heading, Link, and Divider typography primitives.

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
