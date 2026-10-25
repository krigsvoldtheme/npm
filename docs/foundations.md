# Krigsvold foundations specification

Version 0.1 · Working specification · October 21, 2026

The [adopted charter](charter.md) governs this specification. The values below describe the shipped `@krigsvold/theme` 2.1.0 foundation and layout contracts. Normative requirements describe what new components must satisfy; they do not certify existing components. Application-specific experiments must remain identifiable until real usage validates them.

## Character and hierarchy

Krigsvold makes substantial work feel clear and composed. Roboto supports continuous interface work; Roboto Slab establishes strong headings. Use aligned regions, precise rules, explicit metadata, restrained ice surfaces, and space between tasks. Precision must never become terse or hostile error copy.

A page identifies its purpose, then its primary task, then supporting information. Use one main landmark and a descriptive h1. Related controls form a group with a visible heading or legend. Put explanations close to the decisions they explain. Do not communicate hierarchy, selection, validation, or maturity through color alone.

## Shipped measurements

All CSS properties carry the `--krigsvold-` prefix. Numbers in spacing token names are family-local identifiers, not interchangeable units. In particular, `space-3` differs between Martlet and Krigsvold. Cross-family components use semantic relationships and family adapters rather than copying numeric token names.

| Token | Shipped value |
| --- | --- |
| `space-1` | `.25rem` |
| `space-2` | `.5rem` |
| `space-3` | `.75rem` |
| `space-4` | `1rem` |
| `space-6` | `1.5rem` |
| `space-8` | `2rem` |
| `space-12` | `3rem` |
| `space-16` | `4rem` |
| `space-24` | `6rem` |
| `reading-width` | `760px` |
| `content-width` | `1320px` |
| `archive-width` | `1320px` |
| `radius-control` | `.15rem` |
| `radius-card` | `0` |
| `motion-duration` | `.15s` |
| `text-body` | `1.06rem` |
| `text-h1` | `clamp(2.8rem, 6vw, 5.5rem)` |
| `text-h2` | `2.1rem` |
| `text-h3` | `1.42rem` |
| `text-display` | `clamp(3.4rem, 7vw, 6.8rem)` |
| `text-section` | `clamp(2rem, 4vw, 3.5rem)` |
| `leading-body` | `1.65` |
| `leading-heading` | `1.13` |
| `leading-display` | `.98` |
| `focus-width` | `3px` |
| `focus-gap` | `3px` |
| `gutter` | `.75rem` |
| `control-height` | `2.75rem` |
| `control-padding` | `.9rem` |
| `button-padding` | `.625rem 1.5rem` |
| `text-button` | `.75rem` |
| `leading-button` | `1.667` |
| `layout-gap` | `2rem` |
| `layout-gap-small` | `1rem` |
| `layout-gap-large` | `3rem` |
| `layout-sidebar-width` | `20rem` |
| `layout-main-min` | `30rem` |
| `layout-grid-min` | `20rem` |
| `layout-split-min` | `22rem` |
| `layout-section-space` | `clamp(4.5rem, 8vw, 7.5rem)` |

The complete [foundation JSON](../dist/foundation.json) and [layout contract](../dist/layout.json) remain the machine-readable sources for shipped values. Typography roles are Cambo/Lato/Cinzel/IBM Plex Mono for Martlet and Roboto/Roboto Slab/Roboto Mono for Krigsvold. A missing font must leave the page readable using the supplied fallback stacks. Font loading must not hide controls or critical instructions.

## Spacing relationships

Use small layout spacing inside a related group, regular spacing between sibling groups, and large spacing between distinct tasks. Public reading pages use the shipped section spacing; an application does not inherit a public hero's vertical padding merely because it has a title. Margins on content must not double the parent's layout gap. A nested layout establishes its own spacing context.

The initial React workbench proposes `field-gap`, `group-gap`, `region-gap`, `page-gutter`, and `row-padding` as application roles. The 2.2.0 candidate also exposes the field/group/region aliases in an opt-in source profile. These assignments remain experimental and do not alter the stable reference scale. Measure the distinction between fields, groups, and regions during real registry work before promoting them. Never compress an interface simply to fit more rows.

## Responsive composition

Containers are bounded by reading, content, or archive measure. Layout primitives wrap according to their content minima: grids use their minimum cell size; sidebar and split regions wrap without changing source order. The smallest viewport must have one coherent reading and focus order. Breakpoints are consequences of content, not device names.

At 320 CSS pixels and at 400% zoom on a 1280-pixel viewport, navigation wraps, forms become one column, and action groups wrap. Long identifiers and translated copy cannot force page-wide overflow. A genuinely two-dimensional table may scroll inside a labelled, keyboard-focusable region. Keep captions, selection controls, and row actions discoverable. Do not remove columns solely to conceal overflow.

## Type and density

Use the documented font roles and unitless line heights. Application fields, tables, and navigation use the sans family. Preserve a clear heading-to-body hierarchy without applying public hero sizes to an editor panel. Text must remain usable at 200% resizing and with user text-spacing overrides. Labels remain visible when a field contains a value.

This specification recognizes comfortable density only. Compact density is proposed and requires a real high-volume task before adoption. New standalone actions should target 44 by 44 CSS pixels where practical. This is a design target, not a measured claim about every existing link or control. Assess WCAG 2.2 target sizing at 24 by 24 CSS pixels or a documented exception; inspect adjacent target spacing and inline/native exceptions in the actual composition. A denser row changes padding and hierarchy, never silently shrinks interaction targets or body text. Existing smaller legacy controls need review rather than retrospective certification.

## Surfaces and layering

Use semantic canvas, subtle, sunken, and overlay colors from the theme. Flat surfaces and rules establish most structure. Shadow tokens exist but do not justify elevating every section. Modal dialog content needs an accessible name, a clear dismissal path and modal background treatment. Non-modal popups and disclosures retain their own interaction contracts; they do not automatically require a backdrop or focus trap.

Proposed application layers are base 0, sticky context 10, and transient non-modal feedback 20. Native modal dialogs use the browser top layer and must not depend on a fabricated large z-index. Sticky regions may not obscure focused controls or error summaries. Avoid sticky layout on small screens unless it remains usable at zoom.

## Motion

Use the shipped duration and easing for brief state changes. Motion communicates a change; it must not delay submitting, saving, navigating, or reading feedback. With `prefers-reduced-motion: reduce`, remove nonessential transitions, smooth scrolling, and decorative animation. Never require animation to understand a saved or failed state. Loading and saving states include text and remain announced without repeated alerts.

## Accessibility and interaction contracts

Target WCAG 2.2 AA. Verify normal text contrast of 4.5:1, large text 3:1, and essential control boundaries and focus indicators 3:1 against adjacent colors. Measure actual combinations in both light and dark modes. Tokens alone cannot certify a composition. Retain a visible focus ring, logical keyboard order, a skip link, native form semantics, and meaningful names.

Validation associates field errors with controls, marks invalid controls, and offers an error summary that can receive focus. Keep entered values after failure. Announce successful saves with a polite status; use an alert for blocking failures. A modal traps focus through native dialog behavior, supports Escape, and returns focus to its trigger. Disabled and read-only are distinct states. Loading, empty, no-match, invalid, unavailable, saving, saved, failed, conflict, and unsaved-navigation states must be explicitly designed.

## Evidence and change control

The live baseline is https://krigsvold.org/. It supplies evidence for publishing and public navigation. The [design workbench](https://github.com/howardjp/design-workbench) supplies an experimental administration consumer. Its existence is not proof of sustained use or complete accessibility. Record the task, observed failure, proposed change, tests, and result in real use. Replace an inherited decision when generalization fails, then update the original site and verify the result there.

Before a foundation becomes stable, document its consumers, browser and assistive-technology coverage, responsive and contrast checks, migration impact, and acceptance criteria. Review same-content article, substantial form, searchable collection, and dashboard experiences across both families. Promote aliases only after evidence; version public changes and publish migrations. The current React packages and workbench remain experimental. The construction plan and registry contract describe the remaining work.

## Source reconciliation and consolidation

The October 23 source audit refines this working specification. Use [source decisions](source-decisions.md) for observed objects, [grammar](grammar.md) for experimental application relationships, and [consolidation](consolidation.md) for opt-in profiles and framework support. The shipped 2.1.0 measurements above are historical baseline values, not proof that all defaults match the observed source cascade. The 2.2.0 candidate adds opt-in relationship aliases without promoting them to stable foundation requirements.

## Coverage review 0.3

The [coverage ledger](coverage.md) records the reviewed domains, corrections, focused form/results contracts and remaining evidence. The new references supply controlled state coverage, not sustained production use. Target-sizing interpretation follows [W3C SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
