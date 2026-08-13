# Hey AI Help — Design System

The design language for **Hey AI Help**: the warmest, most editorial interface in the AI-product category. A tinted-cream canvas, a signature coral accent, slab-ish serif display type, and dark navy product surfaces that show real product chrome.

> **Provenance & substitutions.** This system was built from a written brand specification (no codebase or Figma was attached). The aesthetic direction — warm cream + coral + dark-navy, editorial serif display — is realized here as the original **Hey AI Help** brand: an original chat-bubble logo mark, and open-source webfont substitutes for the licensed display/body faces (see Typography). If you have the real brand fonts, logo files, or a product codebase, attach them and I'll swap them in.

---

## Content Fundamentals

**Voice.** Warm, literary, considered — Hey AI Help reads like a long-form magazine column, not a SaaS template. Confident but never hype-y. Plain language over jargon.

**Person.** Speaks to **you** ("Meet your thinking partner", "Connect everything you work in"). Refers to the product by name ("Hey AI Help works alongside you"), rarely "we".

**Casing.** Sentence case everywhere — headlines, buttons, nav. The only all-caps are tracked category labels and NEW/BETA badges (`caption-uppercase`, +1.5px tracking). Never Title Case headlines.

**Tone examples.**
- Hero: *"Meet your thinking partner"* / *"Built to do the work"* — short, declarative, a touch poetic.
- Body: *"Not a chatbot bolted onto a search box."* — plain, a little dry, confident.
- CTA: *"Start with Hey AI Help today"* / *"Free to try. Bring your own tools. Cancel anytime."* — direct, low-pressure.

**Punctuation & rhythm.** Em-dashes and short fragments are welcome. Lead with the claim, then qualify. Avoid exclamation marks.

**Emoji.** None. The brand never uses emoji. Iconography is restrained line/geometric glyphs (see Iconography).

---

## Visual Foundations

**Color.** The trinity is **cream canvas (`#faf9f5`) + coral (`#cc785c`) + dark navy (`#181715`)**. Cream is the brand differentiator — never pure white, never cool gray. Coral is the voltage: scarce on individual elements (primary CTA only), generous on full-bleed callout cards. Dark navy carries product chrome (code windows, model cards, footer). Never introduce a fourth surface tone. Teal and amber are tiny accents (status dots, badges) used sparingly.

**Type.** Editorial split — **serif display** (Newsreader, weight 400, negative letter-spacing) for every headline; **humanist sans** (Inter, 400–500) for body/UI; **JetBrains Mono** for code. Display is *never bold* and negative tracking is mandatory — serif character at weight 400 is the literary voice. See `tokens/typography.css` for the full scale.

**Spacing.** 4px base unit. 96px (`section`) rhythm between major bands; generous 32px (`xl`) internal card padding. Whitespace inside cards lets type breathe.

**Backgrounds.** Flat color blocks — no gradients, no photographic backgrounds, no repeating textures. Depth is color-block-first. Hero "art" is a dark code-window mockup, not an illustration.

**Borders & elevation.** 1px hairline (`#e6dfd8`) on cream surfaces — borders read as one elevation step, not ink lines. **Shadows are rare**; the single hover-elevation shadow is `0 1px 3px rgba(20,20,19,0.08)`. Most depth comes from cream-vs-dark surface contrast.

**Corner radius.** Hierarchical — 8px buttons/inputs, 12px cards, 16px hero container, pill badges.

**Cards.** Cream feature cards (`surface-card`, no shadow), dark product cards (`surface-dark`), full-bleed coral callout cards. No coloured-left-border cards, no glassmorphism.

**Animation.** Restrained. Coral primary darkens to `primary-active` on press — that's the only encoded state change. No hover styling beyond that; no bounces. (Marketing motion timings are out of scope.)

**Pacing.** Bands alternate surface modes — cream → cream-card → dark mockup → cream → coral callout → dark footer. Never repeat the same surface in two consecutive bands.

---

## Iconography

- **Approach:** restrained, geometric/line glyphs at the same visual weight as the type. No emoji, ever. No multicolor or skeuomorphic icons.
- **Brand mark:** an original **coral chat-bubble glyph** with a three-dot "say hey" spark — `assets/logo-mark.svg`, `assets/logo-wordmark.svg`, `assets/logo-wordmark-on-dark.svg`. The coral glyph never inverts to white within the wordmark. Available as the `Logo` component.
- **UI icons:** the kits currently use a small set of unicode geometric glyphs (◍ ⌘ ❖ → ✓) as placeholders at the brand's line weight. **Substitution flag:** no production icon set was provided. For real work, drop in a single-weight outline set — **Lucide** (CDN, ~1.5px stroke) is the closest match to the restrained line aesthetic — or attach the brand's own icon assets and I'll wire them in.
- **Status dots:** small filled circles in `accent-teal` (connected/active) and `success` green.

---

## Index / Manifest

**Root**
- `styles.css` — the global entry point consumers link. `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css` (+ `.t-*` utility classes), `spacing.css`, `radius.css`, `elevation.css`.
- `assets/` — `logo-mark.svg`, `logo-wordmark.svg`, `logo-wordmark-on-dark.svg`.
- `SKILL.md` — Agent-Skills-compatible entry for downloaded use.

**Components** (`window.HeyAIHelpDesignSystem_4583aa.*`)
- `components/core/` — `Button`, `IconButton`, `Badge`, `Input`, `Tabs`.
- `components/surfaces/` — `FeatureCard`, `CalloutCard`, `CodeWindow`, `PricingCard`.
- `components/brand/` — `Logo`.

**UI kits**
- `ui_kits/marketing-site/` — interactive Home / Pricing / Connectors click-through composing the primitives.

**Foundations** (Design System tab cards)
- `guidelines/` — color, type, spacing, radius, elevation, and brand specimen cards.

---

## Working with this system
- Reference tokens via `var(--token)` — never inline hex.
- Use the `.t-display-*`, `.t-title-*`, `.t-body-*`, `.t-caption*`, `.t-code` utility classes for type, or the raw size/weight/lh/ls vars.
- Compose UIs from the components; don't re-implement them.
- Honor the don'ts: no pure white, no bold serif, no coral everywhere, no fourth surface tone, no emoji.
