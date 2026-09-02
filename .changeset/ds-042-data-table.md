---
'd-ui': minor
---

Add DataTable, and open Pagination to composition.

DataTable renders a real `<table>` named by its `<caption>`, with `th scope="col"` rather than ARIA, sorting through a real button that cycles ascending → descending → none, `aria-sort` on a single column, row selection with checkboxes named after the row, a mixed header state, locked rows that carry a reason in text, and a polite status region announcing how many rows are left. Sort, search, page and selection each accept a controlled prop and otherwise fall back to internal state, the same way Tabs does.

The component builds no file: `toolbar` receives the visible rows, the search and its setter, and the checked ids, so export, filters and bulk actions live in the page where their rules belong.

Pagination gains `PaginationPrevious`, `PaginationPages`, `PaginationNext` and `PaginationStatus`, plus an optional `children` for free layouts. `Pagination` is now written on top of those parts, so there is one implementation rather than two, and its default rendering keeps the single `<ul>` with previous and next as list items — a screen reader still counts every control in "list, 7 items".

The chevron glyphs Calendar and Pagination each drew a private copy of now live in one shared module.
