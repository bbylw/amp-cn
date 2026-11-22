/**
 * The site's mark, drawn once for every place it appears: the header, the docs
 * layout (Logo.astro) and the social cards (src/pages/og/_card.ts).
 *
 * A lightning bolt, for Amp. Single colour; each caller fills it with its own
 * text colour.
 */
export const logo = {
  /** The drawing's box; callers size it by height and keep the ratio. */
  width: 24,
  height: 24,
  paths: ["M13.4 1.2 4 13.1h5.6L8.9 22.8 20 9.6h-6.2l-.4-8.4Z"],
};
