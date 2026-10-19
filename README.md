# Krigsvold for web projects

Package name: `@krigsvoldtheme/theme`. **Prepared for publishing; not yet published to the npm registry.** The npm organization/scope is separate from GitHub and must be configured before publication.

## Install the local archive

Run `npm run build && npm test && npm pack` in this repository, then in your application:

```sh
npm install /path/to/krigsvoldtheme-theme-1.0.0.tgz
```

## Use

```js
import '@krigsvoldtheme/theme/css';
import { light, dark } from '@krigsvoldtheme/theme';
console.log(dark.tokens.accent);
```

Set `data-krigsvold="light"` or `data-krigsvold="dark"` on the element to theme. Both can be used on different elements on one page.

```css
.panel { background: var(--krigsvold-panel); color: var(--krigsvold-text); }
```

CommonJS uses `const { dark } = require('@krigsvoldtheme/theme');`. CSS, per-mode JSON, complete JSON tokens, and highlight.js styles have explicit package exports; TypeScript declarations are included. For highlight.js, import `@krigsvoldtheme/theme/highlight-dark.css` (or light) instead of its default stylesheet. There are no runtime dependencies.

## Publishing later

After configuring the npm scope and signing in, review `npm pack --dry-run` and publish deliberately with `npm publish --access public`. CI only builds and tests; it never publishes.

These are generated distributions of [Krigsvold Theme](https://krigsvoldtheme.dev/), version 1.0.0. Canonical colors and generators live in [krigsvoldtheme/krigsvoldtheme](https://github.com/krigsvoldtheme/krigsvoldtheme). The source repository may require maintainer access. This repository includes a complete color snapshot in source.json and can build without access to that repository.

MIT license. Copyright 2026 James P. Howard, II.

## Maintenance

Edit the canonical palette and generator upstream, then run npm run build there. The complete distribution directories are emitted under artifacts/repositories/. Sync the relevant directory into this repository. To reproduce a snapshot here, run npm run build, then npm test. Node.js 22 or newer is used in CI. No registry publication runs automatically.
