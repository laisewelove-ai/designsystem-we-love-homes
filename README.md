# We Love Homes — Design System

> **We Love Homes (WLH)** is an apartment-rental platform (think Airbnb, but built for Brazilian travelers heading abroad — initial focus: **Chile / Santiago**). The brand is warm, hand-crafted, and travel-romantic. Personality: a friend who already lived there for a year and is now lending you the keys, the umbrella, and the coffee.

This design system gives a designer — human or agent — everything needed to make on-brand WLH artifacts: marketing pages, app screens, decks, social posts, welcome kits.

---

## Sources used to build this system

| Source | Status |
|---|---|
| `uploads/wlh-identidade-visual.zip` | ✅ Provided & extracted |
| Original brand guide (Portuguese) | Preserved at `reference/guia-identidade-original.md` |
| Codebase / Figma / live product | ❌ **Not provided** — UI kits below are best-effort recreations driven by the brand kit; pixel-fidelity to a real product is not guaranteed. Please attach a codebase or Figma file if you want UI kits to mirror real screens. |

The kit shipped with: 14 logo variants, 9 brand icons (PNG, hand-illustrated style), 3 illustrated stamps/patterns (Santiago + Chile motifs), 2 collage illustrations, and a Markdown style guide with the official palette + typography stack.

---

## Index — what's in this repo

| Path | What it is |
|---|---|
| `README.md` | You are here. |
| `tokens/colors-and-type.css` | All design tokens as CSS custom properties. **Import this first.** |
| `assets/logos/` | 22 logo lockups (mark, vertical seal, horizontal on every backdrop). |
| `assets/icons/` | 36 SVGs + 1 PNG brand icons. |
| `assets/patterns/` | 3 illustrated stamps for backgrounds & social. |
| `assets/illustrations/` | Two large collage murals (`icon-collage.png`, `mosaic-mural.png`) — use as full-bleed hero backgrounds. |
| `assets/photos/` | 5 real apartment photos. |
| `reference/guia-identidade-original.md` | Original Portuguese brand guide, untouched. |
| `preview/` | 47 HTML component previews from the design system. |
| `ui-kits/marketing-site/` | Marketing site recreation (homepage, listing page, listing detail). |
| `ui-kits/mobile-app/` | Mobile app recreation (search, listing, booking, trip). |
| `design-canvas.jsx` | React canvas with all design tokens wired up. |
| `logo-workshop.html` | Interactive logo explorer. |
| `paletas-amarelo.html` | Yellow palette explorer. |
| `WeLove Homes - Brand Applications.html` | Full brand applications reference. |

---

## ⚠️ Font substitutions (please review)

The brand calls for three fonts that are **not** Google-Fonts-available:

| Original | Used here (Google Fonts substitute) | Rationale |
|---|---|---|
| **Lufga** (geometric sans, friendly) | `Plus Jakarta Sans` | Same humanist-geometric feel, generous bowls, a friendly `a`. |
| **Summer** (chunky brushy display, used in the wordmark) | `Caveat Brush` | Hand-painted brush feel; closest free match to the logo's painterly weight. |
| **Caferus Slim Regular** (light slab body) | `Mulish` | Caferus Slim isn't free; Mulish is a slim-stem humanist sans that holds up at body size and pairs cleanly with Plus Jakarta Sans. A serif-body alternative would be **Newsreader** if you'd rather lean editorial. |

**Action for the user:** if you have license files for Lufga, Summer, and Caferus Slim, drop the `.woff2` / `.ttf` files into `fonts/` and update the `@font-face` block in `tokens/colors-and-type.css`. The CSS already declares the originals as the first `font-family` fallback, so swapping is a one-step replacement.

The `fonts/` directory ships with **Lufga** (8 weights: Light through Black) and **Chalkiez Regular** — the actual brand faces. The `tokens/colors-and-type.css` `@font-face` declarations reference these files directly.

---

## Content fundamentals

**Language.** Primary copy is **Brazilian Portuguese**. Secondary (for international guest-facing flows) is English. Spanish is welcome where it adds local color (e.g. street names in Santiago) but is never the primary voice.

**Voice.** A trusted friend who has already done the trip. Practical, generous, never sales-y. Talks *with* you, not *at* you.

**Pronouns.** Address the reader directly as **você** ("você vai amar acordar aqui"). First-person singular (*eu*) for testimonials/founder voice; first-person plural (*nós / a gente*) for the brand ("a gente cuida da chave, você cuida do café"). Never corporate "WLH oferece…".

**Casing.** Sentence case for everything — buttons, headings, nav. Never ALL CAPS except in the eyebrow/category style (tracked +12% letter-spacing). Title Case is a red flag — feels too American-corporate.

**Tone examples.**

| ✅ Sounds like WLH | ❌ Doesn't |
|---|---|
| "Sua casa em Santiago está te esperando." | "Reserve já o seu apartamento premium." |
| "A gente entrega a chave. Você entrega o coração." | "Booking management simplified." |
| "Café quentinho na chegada — promessa." | "Complimentary welcome amenities included." |
| "5 noites, 2 hóspedes, infinitas histórias." | "5 nights / 2 guests — confirm your reservation." |
| "Bairro Lastarria — o que a vizinhança recomenda" | "Lastarria neighborhood — top-rated nearby places" |

**Numbers as personality.** Big golden-yellow numerals are a WLH signature. Hero stats love being in `--font-display` or extra-bold display sizes ("**3 noites**", "**R$ 480**", "**4,9 ★**"). Small body numbers stay in body weight.

**Emoji.** Sparingly, and only in user-generated / casual contexts (host messages, push notifications, social captions). The brand's *real* "emoji" is the icon set in `assets/icons/`. Prefer those over Unicode.

**Length.** Headlines: 2–7 words. Body paragraphs: 1–3 sentences. Bullet points are encouraged. Long pages don't fit the brand — the vibe is a hand-written postcard, not a brochure.

---

## Visual foundations

### Palette behavior
The brand runs on the **60-30-10 rule**: ~60% off-white bege backdrop, ~30% one dominant brand color (varies per surface — coral for marketing, navy for product UI, aqua for content modules), ~10% an illustrated/colorful element (icon, stamp, or chunky display number). **Never** more than two strong brand colors competing on the same screen.

- **Off-White `#F5EFE8`** is the canonical canvas. Pure white only inside cards/elevated surfaces.
- **Coral Red `#E74041`** is reserved for primary CTAs and the wordmark — don't body-text in it.
- **Navy Dark `#242258`** is the default ink for headlines and body. (Pure black is off-limits.)
- **Golden Yellow `#FCB415`** is the "hero number" color — big stats, prices, ratings.

### Typography motif
Three voices: **Chalkiez** (brushy display) used sparingly for soulful, hand-written hero moments; **Lufga** (friendly geometric sans) for headings, UI, and body. Never mix display + heading on the same line.

**No italics — ever.** This is a brand rule. The kit ships only the upright cuts of Lufga (300/400/500/600/700/800/900). The CSS in `tokens/colors-and-type.css` enforces `font-style: normal !important` globally. Do not use `<em>`, `<i>` (for emphasis), or `font-style: italic` anywhere — for emphasis, use weight (semibold/bold) or color instead.

### Backgrounds
- Default: flat off-white (`#F5EFE8`).
- Hero / section breaks: full-bleed **illustrated mural** from `assets/illustrations/` or a **stamp** from `assets/patterns/` at low opacity (0.08–0.18) behind navy/coral text.
- Repeating patterns are an option but use sparingly — the murals already do the heavy lifting.
- **No gradients** in product UI. Subtle 1-stop tints (coral → soft-coral) are okay on marketing hero overlays only.

### Animation
- Easing default: `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-out`) — a gentle settle, never spring-bouncy in product UI.
- Bounce easing (`--ease-bounce`) is reserved for marketing micro-delight (a heart filling in, an icon entering on a hero).
- Durations: `140ms` for button press, `220ms` standard, `420ms` for layout transitions.
- Fades preferred over slides. Avoid swooshy parallax.

### Hover / press states
- Hover (links, primary buttons): darken by ~8% (`--accent-hover #D03435` for coral) — never lighten.
- Press: darken further (~16%) **and** scale `0.98`. No color flash.
- Cards: lift on hover via `--sh-md` → `--sh-lg` and a `1px` translate-Y (-2px feels right).
- Icons inside chips: tint the chip background a touch (e.g. aqua → +5% saturation) instead of moving anything.

### Borders & shadows
- Border default `1px solid #E3DCD1` (warm bege border) — cool grays look out of place.
- Shadows are **soft, warm, navy-tinted**. The system is `--sh-xs` through `--sh-xl`. Avoid hard black drop shadows.
- A signature **coral glow** (`--sh-glow-coral`) lives on the primary CTA at hover only.

### Corner radii
Generous and friendly, but not pillowy. Cards `--r-lg` (20px), small chips `--r-pill`, modals `--r-xl` (28px), images `--r-md` (14px). Square corners are fine for full-bleed sections; never on interactive elements.

### Cards
White on bege, `--r-lg`, `--sh-sm` at rest, lifted to `--sh-md` on hover. A 1px warm border keeps them defined against the bege without needing heavy shadow. Photo cards lose the border; the photo itself is the boundary.

### Transparency & blur
Used carefully. Modal backdrops: `rgba(36, 34, 88, 0.55)` + 8px blur. Floating top nav on scroll: `rgba(245, 239, 232, 0.85)` + 14px blur. Never blur over a busy mural — the icons want to be readable.

### Imagery treatment
Photos lean **warm, golden-hour, slightly desaturated** — never cold or clinical. A faint warm overlay (`rgba(245, 239, 232, 0.06)` multiply) is the signature finish. Black-and-white is off-brand. Avoid stock-photo gloss; prefer real apartment photography with visible texture (a rumpled bed, light through a curtain, a street corner).

### Layout rules
- 12-column grid on desktop, 4-column on mobile, 24px gutter.
- Max content width 1240px; hero / mural sections go full-bleed.
- Generous whitespace — never edge-to-edge text. Left/right padding minimum 24px mobile, 64px desktop.
- Sticky elements: top nav on scroll (translucent), and on the listing detail page a sticky "Reservar" CTA that docks to the bottom on mobile / right column on desktop.

### Iconography
**The brand icons in `assets/icons/` are the iconography.** They're used as story-telling motifs, never as functional UI affordances (use a generic line-icon set for that — see "Iconography" section below).

---

## Iconography

WLH ships **two parallel icon vocabularies**:

### 1. Brand icons (illustrated, hero-sized)
The hand-illustrated icons in `assets/icons/` (36 SVGs + 1 PNG). Use them for:

- Marketing hero collages (combined into the wordmark itself)
- Section dividers in posts/decks ("Chegada → Estadia → Despedida" with passport / coffee / heart)
- Welcome-kit illustrations
- Empty states ("nenhum favorito ainda" + heart icon)

Rendered large (40px+) and full-color. **Never recolored** outside the official palette.

### 2. Functional UI icons (line, neutral)
For chrome — search, filter, close, chevron, calendar, share, user, etc. — the brand kit doesn't ship its own line set. **We substitute [Lucide](https://lucide.dev) (CDN-loadable, MIT)** at 1.75–2px stroke. This is a **flagged substitution**: if WLH builds out a custom UI icon set, swap it here.

```html
<!-- CDN -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="search"></i>
```

### Emoji
Allowed in user-generated content (host messages, reviews) and casual social copy. Never in product UI chrome, button labels, or marketing headlines — that's what the brand icons are for.

### Unicode glyphs
The star ★ for ratings is acceptable as a fallback when the illustrated star is too heavy (e.g. "4.9 ★" in a card meta row at 14px). The brand-colored Golden-Yellow ★ glyph is the canonical short-form rating.

---

## Quick start

```html
<link rel="stylesheet" href="tokens/colors-and-type.css">

<h1 style="font-family: var(--font-display); color: var(--accent)">
  Sua casa em Santiago.
</h1>
<p>A gente cuida da chave. Você cuida do café.</p>
<button class="wlh-bg-coral" style="border-radius: var(--r-pill); padding: 12px 24px; border: 0; color: white; font-weight: 600;">
  Encontrar apartamento
</button>
```

---

## Caveats & open questions
- **No codebase / Figma was attached** → UI kits are inferred from the brand kit, not pixel-perfect to a shipping product.
- **3 of 3 fonts substituted** → Lufga, Summer, Caferus Slim are paid faces. Drop license files in `fonts/` to swap. (The `fonts/` folder in this repo ships Lufga OTF files + Chalkiez — verify licensing before redistributing.)
- **Lucide line-icon set** is a stand-in for an as-yet-undefined functional UI icon system.
- The Portuguese guide mentions Chile/Santiago heavily — **assumption: WLH starts in Chile**. If you're expanding to other destinations, the patterns/illustrations need new variants.
