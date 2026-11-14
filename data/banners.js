/*
 * Banner data for the calendar.
 *
 * Edit this file to add / update banners — the page re-renders from it.
 *
 * Fields per banner phase:
 *   game     "genshin" | "hsr" | "zzz"            (see GAMES below)
 *   version  version string, e.g. "7.2"
 *   phase    1 or 2 (first / second half)
 *   start    first day of the phase, "YYYY-MM-DD" (server-day, approx.)
 *   end      last day of the phase, "YYYY-MM-DD"
 *   status   "confirmed" | "projected" | "leak"
 *              confirmed = officially announced
 *              projected = date / lineup extrapolated from the usual 6-week cycle
 *              leak      = lineup based on leaks, subject to change
 *   featured list of rate-up 5★ units:
 *              { name, isNew?, element?, note? }
 *   weapons  optional list of featured weapon / light cone / W-engine names
 *   note     optional free text shown on the card
 *
 * Element keys (for avatar colour): pyro, hydro, electro, cryo, anemo, geo,
 * dendro, physical, fire, ice, lightning, wind, quantum, imaginary, ether.
 */

window.GAMES = {
  genshin: { name: "Genshin Impact",    short: "GI",  glyph: "原", color: "#f2b35b" },
  hsr:     { name: "Honkai: Star Rail", short: "HSR", glyph: "穹", color: "#5aa7ff" },
  zzz:     { name: "Zenless Zone Zero", short: "ZZZ", glyph: "零", color: "#ff7a45" },
};

window.BANNERS = [
  /* ───────────── Genshin Impact ───────────── */
  {
    game: "genshin", version: "7.2", phase: 1,
    start: "2026-11-04", end: "2026-11-24", status: "confirmed",
    featured: [
      { name: "Mitya", isNew: true, element: "electro" },
      { name: "Furina", element: "hydro" },
    ],
    weapons: ["Starsealed Edict", "Splendor of Tranquil Waters"],
    note: "New version launch",
  },
  {
    game: "genshin", version: "7.2", phase: 2,
    start: "2026-11-24", end: "2026-12-15", status: "projected",
    featured: [{ name: "Linnea" }, { name: "Zibai" }],
    weapons: ["Lightbearing Moonshard"],
    note: "Rerun banners",
  },
  {
    game: "genshin", version: "7.3", phase: 1,
    start: "2026-12-16", end: "2027-01-05", status: "leak",
    featured: [
      { name: "Tsaritsa", isNew: true, element: "cryo" },
      { name: "Danica", isNew: true },
    ],
    note: "New version launch",
  },
  {
    game: "genshin", version: "7.3", phase: 2,
    start: "2027-01-05", end: "2027-01-26", status: "leak",
    featured: [{ name: "Sandrone" }, { name: "Lohen" }],
  },
  {
    game: "genshin", version: "7.4", phase: 1,
    start: "2027-01-27", end: "2027-02-16", status: "projected",
    featured: [{ name: "TBA" }],
    note: "New version launch",
  },

  /* ───────────── Honkai: Star Rail ───────────── */
  {
    game: "hsr", version: "4.7", phase: 1,
    start: "2026-11-11", end: "2026-12-01", status: "confirmed",
    featured: [
      { name: "Aha", isNew: true, note: "banner runs until Dec 22" },
      { name: "Silver Wolf LV.999" },
      { name: "Sparxie" },
      { name: "Yao Guang" },
    ],
    weapons: ["Upon the First Echo of Aha"],
    note: "New version launch",
  },
  {
    game: "hsr", version: "4.7", phase: 2,
    start: "2026-12-02", end: "2026-12-22", status: "leak",
    featured: [
      { name: "Acheron", element: "lightning" },
      { name: "Dan Heng • Imbibitor Lunae", element: "imaginary" },
      { name: "Jing Yuan", element: "lightning" },
    ],
    note: "Rerun banners",
  },
  {
    game: "hsr", version: "4.8", phase: 1,
    start: "2026-12-23", end: "2027-01-12", status: "leak",
    featured: [{ name: "Astra Yao" }, { name: "Ellen Joe" }],
    note: "ZZZ crossover (expected)",
  },
  {
    game: "hsr", version: "4.8", phase: 2,
    start: "2027-01-13", end: "2027-02-02", status: "projected",
    featured: [{ name: "TBA" }],
  },

  /* ───────────── Zenless Zone Zero ───────────── */
  {
    game: "zzz", version: "3.3", phase: 2,
    start: "2026-11-11", end: "2026-12-01", status: "confirmed",
    featured: [
      { name: "Severian", isNew: true, element: "wind" },
      { name: "Norma" },
    ],
    weapons: ["Incarcerating Grip", "Chief Sidekick"],
  },
  {
    game: "zzz", version: "3.4", phase: 1,
    start: "2026-12-02", end: "2026-12-22", status: "leak",
    featured: [{ name: "Sunbringer", isNew: true }],
    note: "New version launch",
  },
  {
    game: "zzz", version: "3.4", phase: 2,
    start: "2026-12-23", end: "2027-01-12", status: "leak",
    featured: [
      { name: "Kafka", isNew: true },
      { name: "Robin", isNew: true },
    ],
    note: "HSR crossover (expected)",
  },
  {
    game: "zzz", version: "3.5", phase: 1,
    start: "2027-01-13", end: "2027-02-02", status: "projected",
    featured: [{ name: "TBA" }],
    note: "New version launch",
  },
];

window.LAST_UPDATED = "2026-11-14";
