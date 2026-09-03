---
'd-ui': minor
---

Add Skeleton (+ SkeletonText), Progress, and Stepper, the loading and progress primitives.

The spinning ring is a stylesheet mechanic (`.d-ui-spinner`), not an exported component: `Button`'s loading state and `Dialog`'s `processing` overlay each render one decorative span, and the old `.d-ui-button-spinner` class is gone. `SelectListbox`'s private list skeleton is replaced by `SkeletonText`.

Progress is a named `progressbar` with clamped values; omitting `value` makes it indeterminate and drops `aria-valuenow`, which is what tells "unknown" apart from "0 %". `variant="circular"` requires a value at the type level — only `linear` can be indeterminate.

Stepper renders an `<ol>` with `aria-current="step"` on the current item and spells out each status through a visually hidden label, so completion is never carried by colour alone.

Progress and Stepper take `size` on the shared `UiSize` scale (`xxs` … `xxl`), the same scale Avatar, Badge, and Card already use. Skeleton keeps CSS lengths for `width`, `height`, and `size` — it has to match the exact block it stands in for — and gains only `color`. All three take `color` on the shared `UiColor` scale.
