# Figma Build — Lessons Log (do not repeat these)

> **Standing rule (set 2026-07-25):** the user does not want the same mistake made twice.
> Before every `use_figma` build call, scan this list. After every bug the user catches (or
> I catch myself), add a new entry here — a rule terse enough to actually check against, not
> just a story. This file is the checklist; `docs/06-high-fidelity-mockups.md` etc. keep the
> full narrative for the case study.

## Active checklist — verify before every build call

1. **`figma.createAutoLayout()` defaults to a WHITE fill.** Every wrapper/row/group frame that
   isn't meant to be a visible white card MUST have `fills = []` (or the correct color) set
   explicitly — never leave it unset and assume it's transparent. Applies to: hero sections,
   button rows, card-grid wrappers, title rows, any purely-structural container.
2. **Padding must never exceed the frame's own fixed height/width.** Before setting
   `paddingTop`/`paddingBottom` (or left/right) on a frame with a small fixed size, check
   `padding total < frame dimension`. Negative available space silently pushes/misplaces
   children (caused the "Prompt Library" text rendering above its container).
3. **After ANY visual build step, verify with real data — `get_metadata` for positions/sizes,
   `get_screenshot` for the actual render — before calling it done.** Don't eyeball a
   description of the code and assume it's right.
4. **When the user reports ONE instance of a bug, audit the WHOLE build for the same root
   cause before calling it fixed** — don't patch only the reported spot. (Rule 1 above was
   found this way: one white sliver in a footer led to auditing all 3 screens, finding 12
   instances total.)
5. **Sora font has no "Medium" weight** — available styles are Regular/SemiBold/Bold/ExtraBold/
   Light/Thin/ExtraLight. Always verify exact font style strings via
   `listAvailableFontsAsync()` before use, never guess from memory.
6. **Emoji glyphs render inconsistently in Figma's server-side screenshot engine** (e.g. 🤖
   showed as an unrelated glyph). Don't rely on emoji for anything that needs to look correct
   in a Figma screenshot — use real icon vectors instead once we're past rough wireframing.
7. **`resize()` on a VERTICAL auto-layout frame can leave `primaryAxisSizingMode` stuck at
   FIXED, silently clipping content that needs to grow taller than the resize value.** Caused
   the Home Desktop hero section (headline+subhead+buttons) to be clipped to a fixed 100px,
   hiding everything past line 1 of the headline. **Fix:** after `resize(w, h)` on a wrapper
   that should hug its content height, explicitly set `primaryAxisSizingMode = "AUTO"` — don't
   assume resize() alone is enough, and don't assume it "must be FIXED" either (empirically one
   sibling frame with the identical code pattern stayed AUTO on its own — verify with
   `get_metadata`, don't guess).
8. **`primaryAxisSizingMode` vs `counterAxisSizingMode` control DIFFERENT physical dimensions
   depending on `layoutMode` — primary = the layout direction's axis, counter = the cross axis.**
   For a HORIZONTAL frame, primary = width, counter = height (opposite of a VERTICAL frame).
   Setting `primaryAxisSizingMode = "AUTO"` on a HORIZONTAL frame to try to hug its HEIGHT is
   wrong — it hugs WIDTH instead, breaking an intended `layoutSizingHorizontal = "FILL"`. This
   directly caused a regression (the trust strip and footer lost their full-width fill and
   left-aligned) while fixing rule 7 above. **Fix:** always confirm `layoutMode` first, and use
   `counterAxisSizingMode` to control the cross-axis dimension, never assume "AUTO" is safe to
   apply to the same property name across frames with different layout directions.

9. **Never wire a prototype click-connection across mismatched screen sizes.** Home Desktop
   (1440px) was linked to Tools Index/Prompt Tool/etc. (all 375px mobile-only screens), so
   clicking a desktop button snapped the presenter down to a tiny phone frame mid-flow — a real,
   user-caught UX bug, not just a code error. **Before wiring any `setReactionsAsync` link,
   confirm the destination frame's width roughly matches the source frame's width** (or
   deliberately accept/document the jump if there's a real reason for it). If no same-size
   destination exists, leave it unlinked rather than connect to the wrong breakpoint.

10. **Rule 7's `resize()`-clips-height bug applies to EVERY nested VERTICAL wrapper in a
    hierarchy, not just the one that visually looks broken.** Self-caught while building Tools
    Index Desktop: fixed the innermost `grid` wrapper first (assumed that was the clipped one),
    but the frame height was still wrong — turned out the OUTER `body` wrapper (one level up)
    had the same `resize()`-forced-FIXED-height bug, silently capping everything inside it to
    ~100px regardless of the inner grid being correctly sized. **Standing practice: whenever
    creating a VERTICAL auto-layout wrapper via `resize(w,h)` + `layoutSizingHorizontal="FILL"`,
    immediately also set `primaryAxisSizingMode = "AUTO"` right there in the same block — don't
    wait to discover it's broken via a wrong total frame height and debug backwards.**

11. **A centered paragraph text node with NO explicit `textAutoResize`/width setting defaults
    to `WIDTH_AND_HEIGHT` (hug both) — it renders as ONE unwrapped line at its natural full
    width, not wrapped to its visual column.** On About Desktop this rendered at 943px wide
    inside a 680px column; with `textAlignHorizontal="CENTER"` it centered on that oversized
    width and got clipped symmetrically on both left and right edges by the parent's bounds —
    visually indistinguishable from a random mid-sentence crop, easy to misdiagnose. **Every
    paragraph/body text node needs `textAutoResize = "HEIGHT"` + an explicit `resize(width, h)`
    — never leave a multi-word text node on its default sizing mode**, verified by checking
    `node.width` isn't suspiciously larger than its visual container after creation.

12. **Setting `primaryAxisSizingMode` AFTER `layoutSizingHorizontal = "FILL"` on a HORIZONTAL
    frame silently reverts it back to HUG — even though rule #8 already documented that
    `primaryAxisSizingMode` governs WIDTH on a horizontal frame.** User-caught: the AI Prompt
    Tool Desktop honesty-note box rendered at 376px inside a 600px column (visibly left-aligned,
    not centered/full-width) — a self-inflicted regression from over-applying the rules #7/#10
    "always add `primaryAxisSizingMode = 'AUTO'` after resize" habit to HORIZONTAL frames, where
    that property fights FILL instead of complementing it (rule #8's exact warning, not applied
    here despite being documented). A full-file audit (every HORIZONTAL frame with a solid fill
    and `layoutSizingHorizontal !== "FILL"`) found one more silent instance (Subscription
    Calculator Desktop's "looks unused" suggestion box, 357px inside a 400px column) that hadn't
    been visually reported yet. **Fix:** for a HORIZONTAL frame that must FILL its parent's
    width, set `layoutSizingHorizontal = "FILL"` as the LAST write, and only touch
    `counterAxisSizingMode` (never `primaryAxisSizingMode`) if that frame's height also needs
    to hug content. **Meta-lesson: writing a rule down (#8) doesn't prevent violating it later
    under a different name (#10's height-fix habit) — re-read the lessons file's existing rules
    before adding a new blanket practice, don't just add more rules on top.**

## How this gets used going forward
- Before writing a new `use_figma` script that creates frames/wrappers: mentally check items
  1–2 against the code being written.
- After every screenshot/metadata check: if a NEW mistake is found, add it here immediately
  with the same terse "rule" format, not just fixed silently.
- If a future mistake matches an existing rule here, that's a signal the checklist isn't
  actually being applied — stop and re-read this file before continuing, don't just fix and move on.
