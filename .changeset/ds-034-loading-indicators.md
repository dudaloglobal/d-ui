---
'd-ui': minor
---

Add Spinner, Skeleton (+ SkeletonText), Progress, and Stepper, the four loading and progress primitives.

Spinner is now the single spinner in the design system: Button's private one and Dialog's `processing` overlay both consume it, and the `.d-ui-button-spinner` class is replaced by `.d-ui-spinner`. SelectListbox's private list skeleton is replaced by SkeletonText.

Progress is a named `progressbar` with clamped values; omitting `value` makes it indeterminate and drops `aria-valuenow`, which is what tells "unknown" apart from "0 %". `variant="circular"` requires a value at the type level — a ring with no value is a Spinner.

Stepper renders an `<ol>` with `aria-current="step"` on the current item and spells out each status through a visually hidden label, so completion is never carried by colour alone.
