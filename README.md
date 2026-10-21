# Krigsvold core

`@krigsvold/theme` is the framework-independent source of truth for Krigsvold. It contains Light/Dark semantic colors and the typography, spacing, shape, depth, and interaction definitions extracted from krigsvold.org.

## Choose what to adopt

| Import | Effect |
| --- | --- |
| `@krigsvold/theme/css` | Original scoped Light/Dark color variables only; unchanged from v1 |
| `@krigsvold/theme/foundation.css` | Namespaced design variables; no font loading or element styles |
| `@krigsvold/theme/typography.css` | Text roles inside `.krigsvold`; requires foundation variables |
| `@krigsvold/theme/fonts.css` | Optional, locally bundled Roboto, Roboto Slab, and Roboto Mono assets through Fontsource |
| `@krigsvold/theme/components.css` | Optional namespaced interface primitives; requires colors and foundation |
| `@krigsvold/theme/full.css` | Colors, foundation, typography, and components; fonts remain optional |
| `@krigsvold/theme/legacy.css` | Optional variable aliases for incremental website migration |

```js
import '@krigsvold/theme/full.css';
import '@krigsvold/theme/fonts.css';
import { light, dark, foundation, design, capabilities } from '@krigsvold/theme';
```

Set `data-krigsvold="light"` or `data-krigsvold="dark"` on the element to theme; add `class="krigsvold"` to opt into typography and interface styling. Modes may coexist on the same page. CSS remains available without JavaScript; font package imports require a CSS-capable bundler. ESM and CommonJS exports, TypeScript declarations, per-mode JSON, `tokens.json`, `foundation.json`, `design.json`, `capabilities.json`, and highlight.js styles are explicit package exports.

## Typography and overrides

- Serif: Roboto Slab, for editorial headings, introductory text, and quotations.
- Sans: Roboto, for body prose, controls, navigation, and metadata.
- Display: Roboto Slab, for hero text and titles. Its role is independent even though it shares the serif family.
- Monospace: Roboto Mono, the agreed public companion for code and terminal text.

The serif, display, and sans roles are extracted from the originating krigsvold.org website. Roboto Mono is a new companion chosen for the Roboto family. See [the provenance record](docs/provenance.md) for source selectors, exact commit, inherited Material Kit values, and accessibility normalizations. Each role can be overridden independently through its namespaced CSS variable. See NOTICE.md for font licenses.

The optional full stylesheet is not a site template: it includes no personal identity, content, analytics, or consent policy. See [`@krigsvold/astro`](https://github.com/krigsvoldtheme/astro) for Astro composition and a neutral starter.

## Source and releases

Edit `source.json` here; run `npm ci --ignore-scripts`, `npm run build`, `npm test`, and `npm pack`. Generated `dist/` is committed for review and reproducibility. Fontsource dependencies are pinned; lockfiles retain their integrity. The source website's original colors are retained as separate identity tokens rather than silently replacing existing semantic app colors. Reduced-motion preferences zero the shared motion tokens.

The `capabilities` export records what each integration applies, requires separate configuration for, or cannot support. A browser color theme does not change fonts. Editors and terminals use the monospace role only where their host allows it.

The npm scope is `krigsvold`. Install the published core with `npm install @krigsvold/theme`. Package versions are independent of application-port versions.

Application port generators in `krigsvoldtheme/krigsvoldtheme` consume this package. They must not regenerate it. CI never publishes automatically.

## Layouts

Version 2.1 adds optional [`layout.css`](docs/layout.md), the `layout` JavaScript export, and `layout.json`. Layout primitives cover containers, vertical stacks, wrapping clusters, bounded grids, sidebars, and paired regions. Import `@krigsvold/theme/full.css` for the complete styling layer or add `@krigsvold/theme/layout.css` after `foundation.css` for structural classes alone. See [source observations and responsive rules](docs/layout.md).
