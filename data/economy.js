/*
 * Daily premium-currency income per game, used by the banner details panel.
 *
 * Keys match GAMES keys; a server-suffixed key (fgo_jp, uma_gl, …) falls back
 * to its base key (fgo, uma, …), or set `economy: "<key>"` on the GAMES entry.
 *
 *   currency   premium currency name { en, zh }
 *   perPull    currency per single pull on a limited/character banner
 *   daily      currency per day from repeating dailies (missions/commissions/login)
 *   pass       monthly pass name { en, zh } (optional)
 *   passDaily  extra currency per day while the pass is active (upfront bonus not counted)
 *   note       optional caveat shown in the panel
 *
 * FGO is special (fgo: true): only the daily login bonus is counted, with Saint
 * Quartz and Summon Tickets tracked separately per 7-day login cycle per server.
 */
window.ECONOMY = {
  genshin: {
    currency: { en: "Primogems", zh: "原石" }, perPull: 160, daily: 60,
    pass: { en: "Welkin Moon", zh: "空月祝福" }, passDaily: 90,
  },
};
