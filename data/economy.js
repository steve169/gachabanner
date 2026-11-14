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
 * `daily` / `passDaily` may be an object keyed by server ({ JP: 50, EN: 75 }).
 *
 * FGO is special (fgo: true): only the daily login bonus is counted, with Saint
 * Quartz and Summon Tickets tracked separately per 7-day login cycle per server,
 * plus the recurring 50-day cumulative login reward averaged per day.
 *
 * Sources: community wikis and guides as of Nov 2026 (Game8, Fandom wikis,
 * pitycalculator.com, kamigame.jp, sekaipedia, bwiki). Values marked with a
 * note come from a single source — please correct them if you know better.
 */
const COMMUNITY = { en: "Values from community guides; may be slightly off.", zh: "数值来自社区攻略，可能略有出入。" };

window.ECONOMY = {
  genshin: {
    currency: { en: "Primogems", zh: "原石" }, perPull: 160, daily: 60,
    pass: { en: "Welkin Moon", zh: "空月祝福" }, passDaily: 90,
  },
  hsr: {
    currency: { en: "Stellar Jade", zh: "星琼" }, perPull: 160, daily: 60,
    pass: { en: "Express Supply Pass", zh: "列车补给凭证" }, passDaily: 90,
  },
  zzz: {
    currency: { en: "Polychrome", zh: "菲林" }, perPull: 160, daily: 60,
    pass: { en: "Inter-Knot Membership", zh: "绳网会员" }, passDaily: 90,
  },
  wuwa: {
    currency: { en: "Astrite", zh: "星声" }, perPull: 160, daily: 60,
    pass: { en: "Lunite Subscription", zh: "月相观测卡" }, passDaily: 90,
  },
  endfield: {
    currency: { en: "Oroberyl", zh: "嵌晶玉" }, perPull: 500, daily: 200,
    pass: { en: "Monthly Pass", zh: "月卡" }, passDaily: 200,
  },
  nte: {
    currency: { en: "Annulith", zh: "环石" }, perPull: 160, daily: 60,
    pass: { en: "Monthly Pass", zh: "月卡" }, passDaily: 90,
    note: { en: "Pass value from Global guides; one CN source lists 50/day for the CN card.", zh: "月卡数值来自国际服攻略；有国服来源称国服小月卡为每日50。" },
  },
  gfl2: {
    currency: { en: "Collapse Pieces", zh: "坍塌晶条" }, perPull: 150, daily: 60,
    pass: { en: "Monthly Card", zh: "月卡" }, passDaily: 80,
    note: COMMUNITY,
  },
  exedra: {
    currency: { en: "Magica Stones", zh: "魔法石" }, perPull: 300, daily: 50,
    note: { en: "No daily-drip monthly card; the Exedra Pass is a battle pass and isn't counted.", zh: "没有按日发放的月卡；Exedra通行证为战令，不计入。" },
  },
  uma: {
    currency: { en: "Carats", zh: "宝石" }, perPull: 150, daily: { JP: 50, EN: 75 },
    pass: { en: "Daily Carat Pack", zh: "每日宝石礼包" }, passDaily: 50,
    note: COMMUNITY,
  },
  bluearchive: {
    currency: { en: "Pyroxene", zh: "青辉石" }, perPull: 120, daily: 20,
    pass: { en: "Monthly Pyroxene Package", zh: "月度青辉石礼包" }, passDaily: 40,
    note: COMMUNITY,
  },
  fgo: {
    fgo: true,
    currency: { en: "Saint Quartz", zh: "圣晶石" }, perPull: 3,
    ticket: { en: "Summon Tickets", zh: "呼符" },
    // Consecutive-login cycle: day 2 = 1 SQ, day 4 = 1 SQ, day 6 = 2 SQ, day 7 = 1 ticket; every 50 days = 30 SQ.
    servers: {
      JP: { weeklySQ: 4, weeklyTickets: 1, per50SQ: 30 },
      EN: { weeklySQ: 4, weeklyTickets: 1, per50SQ: 30 },
      CN: { weeklySQ: 4, weeklyTickets: 1, per50SQ: 30 },
    },
    note: { en: "Login cycle: 1 SQ on days 2 and 4, 2 SQ on day 6, 1 ticket on day 7, plus 30 SQ every 50 login days (averaged). No monthly pass.", zh: "登录周期：第2、4天各1圣晶石，第6天2圣晶石，第7天1呼符；每累计登录50天30圣晶石（按日平均）。无月卡。" },
  },
  gbp: {
    currency: { en: "Stars", zh: "星石" }, perPull: 250, daily: 150 / 7,
    note: { en: "Login gives 50 stars on days 2, 4 and 7 (averaged per day). The GBP Pass gives stars only on purchase, so it isn't counted.", zh: "登录第2、4、7天各50星石（按日平均）。通行证只在购买时发放星石，不计入。" },
  },
  arknights: {
    currency: { en: "Orundum", zh: "合成玉" }, perPull: 600, daily: 100,
    pass: { en: "Monthly Card", zh: "月卡" }, passDaily: 200,
  },
  pcr: {
    currency: { en: "Jewels", zh: "宝石" }, perPull: 150, daily: 20,
    pass: { en: "Daily Jewel Pack", zh: "每日宝石礼包" }, passDaily: 50,
    note: COMMUNITY,
  },
  pjsk: {
    currency: { en: "Crystals", zh: "水晶" }, perPull: 300, daily: 50,
    pass: { en: "Colorful Pass (Basic)", zh: "缤纷通行证（基础）" }, passDaily: { JP: 25, EN: 50 },
    note: { en: "Daily login gives 50 crystals every day.", zh: "每日登录可获得50水晶。" },
  },
  r1999: {
    currency: { en: "Clear Drops", zh: "纯雨滴" }, perPull: 180, daily: 90,
    pass: { en: "Roaring Month", zh: "咆哮的一月" }, passDaily: 90,
    note: COMMUNITY,
  },
  azurlane: {
    unsupported: { en: "Azur Lane builds use Wisdom Cubes (2 per limited build), which come from weeklies, the login calendar and commissions rather than a fixed daily amount, so there's no daily estimate.", zh: "碧蓝航线建造消耗心智魔方（限时建造每次2个），魔方主要来自周常、签到日历和委托，没有固定的每日数量，因此不做每日估算。" },
  },
  holodori: {
    unsupported: { en: "A pull costs 250 Red Diamonds, but daily diamond income isn't documented reliably yet, so there's no daily estimate.", zh: "单抽消耗250红钻，但每日钻石收入暂无可靠资料，因此不做每日估算。" },
  },
  // BanG Dream! Our Notes: daily star amounts not documented yet.
};
