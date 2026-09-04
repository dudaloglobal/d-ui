---
'd-ui': minor
---

Add DataTable, and open Pagination to composition.

DataTable composes `Table` rather than drawing its own markup: sorting, search, selection and pagination sit on top of the semantic table DS-041 already ships, which is the boundary `Table`'s own docs announce. It inherits the scroll container that becomes a named, keyboard-reachable region when the table is genuinely too wide (WCAG 2.1.1) — the previous private `<div>` was unreachable — along with the shared `size` scale and the `align` / `numeric` pair on cells.

Three consequences worth naming. Cell density now follows `Table`: the default `md` is roomier than the old hard-coded padding, and `size="sm"` is the closest match to what DataTable looked like before. `align: "end"` positions only — tabular figures now come from `numeric`, which is `Table`'s rule; a money column wants `numeric`. And `DataTableAlign` widens to `Table`'s three values, `center` included.

DataTable renders a real `<table>` named by its `<caption>`, with `th scope="col"` rather than ARIA, sorting through a real button that cycles ascending → descending → none, `aria-sort` on a single column, row selection with checkboxes named after the row, a mixed header state, locked rows that carry a reason in text, and a polite status region announcing how many rows are left. Sort, search, page and selection each accept a controlled prop and otherwise fall back to internal state, the same way Tabs does.

The component builds no file: `toolbar` receives the visible rows, the search and its setter, and the checked ids, so export, filters and bulk actions live in the page where their rules belong.

Pagination gains `PaginationPrevious`, `PaginationPages`, `PaginationNext` and `PaginationStatus`, plus an optional `children` for free layouts. `Pagination` is now written on top of those parts, so there is one implementation rather than two, and its default rendering keeps the single `<ul>` with previous and next as list items — a screen reader still counts every control in "list, 7 items".

The chevron glyphs Calendar and Pagination each drew a private copy of now live in one shared module.

`Table` itself gains one fix this release: `TableHead` and `TableCell` now omit the native `align` attribute before redeclaring it. React types the HTML attribute as `"center"`, so the intersection silently narrowed `TableAlign` to that single value and `align="start"` / `align="end"` would not compile, even though the props documented them. Its last body row also stops drawing a bottom rule, which doubled the border of any bordered container.
