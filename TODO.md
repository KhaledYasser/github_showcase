# TODO

- [x] Read CategorySection.jsx, index.css, HomePage.jsx
- [x] Confirm plan with user
- [x] First attempt: stack categories in single column, flush
- [x] Second attempt: 2-col grid, flush borders
- [x] Third attempt: 2-col grid with column gap, tight rows
- [x] Final: switched `.directory` to CSS multi-column (`column-count: 2`) so columns flow independently like masonry
- [x] Verified visually in browser — left and right columns now pack categories independently with no aligned-row gaps
- [x] Force only the top two categories to start at the same level (2nd category gets `break-before: column`)
- [x] Reverted that approach (column-balance ignored the forced break and put the wrong category at the top of column 2)
- [x] Final approach: render the first two categories in a dedicated `.directory-top` 2-col grid, render the rest in `.directory` (CSS multi-column masonry). Top two categories now start exactly at the same level; remaining 18 flow as masonry; responsive (≤720px) collapses both to single column; "no results" state still renders.
