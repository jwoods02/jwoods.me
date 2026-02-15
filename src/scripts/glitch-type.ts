/**
 * Typewriter + glitch effect for a text element.
 * Types out text character-by-character, then periodically glitches random characters.
 * Cancels cleanly on Astro view transitions via AbortController.
 */

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export async function initTypewriter(
  el: HTMLElement,
  { charMs = 220, startDelay = 500 } = {},
) {
  const text = el.textContent ?? "";
  if (!text) return;

  const controller = new AbortController();
  const { signal } = controller;
  document.addEventListener("astro:before-swap", () => controller.abort(), { once: true });

  // Type
  el.textContent = "";
  el.classList.add("typing");
  await wait(startDelay);

  for (let i = 1; i <= text.length; i++) {
    if (signal.aborted) return;
    // Trailing spaces collapse in textContent — use non-breaking space so the cursor moves
    el.textContent = text.slice(0, i).replace(/ $/, "\u00A0");
    await wait(charMs);
  }
  el.textContent = text;

  // Glitch
  const glitchable = [...text].flatMap((c, i) => (c !== " " ? [i] : []));
  if (!glitchable.length) return;

  while (!signal.aborted) {
    await wait(1000 + Math.random() * 4000);
    if (signal.aborted) return;

    const chars = [...text];
    const count = Math.random() < 0.6 ? 1 : 2;
    const pool = [...glitchable];

    for (let i = 0; i < count && pool.length; i++) {
      const pick = Math.floor(Math.random() * pool.length);
      chars[pool[pick]] = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
      pool.splice(pick, 1);
    }

    el.textContent = chars.join("");
    await wait(80 + Math.random() * 70);
    if (signal.aborted) return;
    el.textContent = text;
  }
}
