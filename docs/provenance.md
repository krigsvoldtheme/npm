# Krigsvold design extraction

Origin: https://krigsvold.org/, repository basuhoward/krigsvold.org, commit e92e989b6e850b3a9cd8fbb565edb7eba6d3a6f7. references/krigsvold-origin.css records the source CSS. source.json is the canonical package input.

| Design | Source | Package treatment |
| --- | --- | --- |
| Navy, ice, paper, ink, muted, rule, gold | krigsvold.css root variables | Exact foundation identity values; semantic Light/Dark colors preserved separately |
| Roboto body and UI | body, navbar links, head font import | Sans role; local 400/500/700 normal and italic |
| Roboto Slab display | home-hero h1, home-hero__title, page-masthead h1 | Separate display role, 700; original responsive scale, tracking, and line-height |
| Roboto Slab editorial | editorial-content h2/h3, introduction and quotations | Serif role sharing display family; body remains sans |
| Roboto Mono | Newly agreed public companion | Monospace code, terminal and keyboard notation |
| Spacing | Recurring source quarter-rem values and 1.5rem/2rem gaps | Named quarter-rem scale organizing source values |
| Content width | Material Kit Bootstrap container maximums | 1320px maximum; 760px text measure generalized from source hero/subtitle limits; fluid widths |
| Corners | btn, site-search-input, dropdown and navbar | .15rem controls, .3rem dropdowns, .4rem larger corners; flat editorial cards |
| Depth | Navbar, dropdown, fellow-feature container | Three separate source shadows; no shadow on flat work cards |
| Borders | work-card, editorial tables, root rule color | 1px rules, 3px editorial accent rule |
| Motion | Material Kit compiled btn, reduced-motion override | .15s ease-in, zero with reduced motion |
| Interaction | Source buttons, hover states and skip link | Native semantics, semantic hover/disabled colors; explicit 3px focus ring and 44px minimum control target are accessibility additions |
| Breakpoints | Material Kit Bootstrap SCSS | 576, 768, 992, 1200, 1400px in design JSON; primitives reflow without fixed page widths |

These values come from assets/css/krigsvold.css, _includes/head.html, assets/css/material-kit.css and assets/scss/material-kit/bootstrap/_variables.scss. The package does not copy Material Kit or Bootstrap implementation code. Arms, content, navigation structure, analytics, consent and icons remain site responsibilities.

Font licenses ship verbatim in dist/licenses/: Roboto Slab is Apache-2.0; Roboto and Roboto Mono are OFL-1.1 in the selected pinned packages.

## Migration gate

Publish and verify the core and Astro packages, deploy krigsvoldtheme.dev against the registry releases, then begin the originating site's migration. Preserve its content, routes, metadata, redirects, feeds and behavior as separate migration requirements.
