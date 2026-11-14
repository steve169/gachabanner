/*
 * Banner data for the calendar. Edit this file and push — the page renders from it.
 *
 * Any text field can be a plain string (shown in every language) or a
 * translated object { en: "...", zh: "..." }. Missing translations fall back
 * to English.
 *
 * Fields per banner:
 *   game     key from GAMES below
 *   version  version string, e.g. "7.2"           (optional)
 *   phase    1 or 2 (first / second half)          (optional)
 *   label    custom pill text, used instead of version/phase (optional)
 *   start    first day, "YYYY-MM-DD" (approx. server day)
 *   end      last day,  "YYYY-MM-DD"
 *   status   "confirmed" | "projected" | "leak"
 *   featured list of rate-up units: { name, zh?, isNew?, element? , note? }
 *   weapons  optional list of featured weapons / support cards (strings or {en, zh})
 *   note     optional free text
 *
 * Element keys (avatar colour): pyro, hydro, electro, cryo, anemo, geo, dendro,
 * physical, fire, ice, lightning, wind, quantum, imaginary, ether, spectro.
 */

window.GAMES = {
  genshin:  { name: { en: "Genshin Impact",       zh: "原神" },                  glyph: "原", color: "#f2b35b", short: "GI" },
  hsr:      { name: { en: "Honkai: Star Rail",    zh: "崩坏：星穹铁道" },         glyph: "穹", color: "#5aa7ff", short: "HSR" },
  zzz:      { name: { en: "Zenless Zone Zero",    zh: "绝区零" },                 glyph: "零", color: "#ff7a45", short: "ZZZ" },
  wuwa:     { name: { en: "Wuthering Waves",      zh: "鸣潮" },                   glyph: "鸣", color: "#3fd0c9", short: "WuWa" },
  endfield: { name: { en: "Arknights: Endfield",  zh: "明日方舟：终末地" },       glyph: "终", color: "#e8d36a", short: "AKE" },
  nte:      { name: { en: "Neverness to Everness", zh: "异环" },                  glyph: "环", color: "#c77dff", short: "NTE" },
  gfl2:     { name: { en: "Girls' Frontline 2",   zh: "少女前线2：追放" },        glyph: "追", color: "#ef4f5f", short: "GFL2" },
  exedra:   { name: { en: "Madoka Magica Exedra", zh: "魔法少女小圆 Exedra" },    glyph: "魔", color: "#ff8fc8", short: "MMX" },
  uma:      { name: { en: "Uma Musume (JP)",      zh: "赛马娘（日服）" },         glyph: "马", color: "#7ddc6a", short: "UMA" },
};

const NEW_VERSION = { en: "New version launch", zh: "新版本上线" };
const RERUNS = { en: "Rerun banners", zh: "复刻卡池" };

window.BANNERS = [
  /* ───────────── Genshin Impact ───────────── */
  {
    game: "genshin", version: "7.2", phase: 1,
    start: "2026-11-04", end: "2026-11-24", status: "confirmed",
    featured: [
      { name: "Mitya", zh: "米提亚", isNew: true, element: "electro" },
      { name: "Furina", zh: "芙宁娜", element: "hydro" },
    ],
    weapons: ["Starsealed Edict", "Splendor of Tranquil Waters"],
    note: NEW_VERSION,
  },
  {
    game: "genshin", version: "7.2", phase: 2,
    start: "2026-11-24", end: "2026-12-15", status: "projected",
    featured: [{ name: "Linnea" }, { name: "Zibai", zh: "兹白" }],
    weapons: ["Lightbearing Moonshard"],
    note: RERUNS,
  },
  {
    game: "genshin", version: "7.3", phase: 1,
    start: "2026-12-16", end: "2027-01-05", status: "leak",
    featured: [
      { name: "Tsaritsa", zh: "冰之女皇", isNew: true, element: "cryo" },
      { name: "Danica", isNew: true },
    ],
    note: NEW_VERSION,
  },
  {
    game: "genshin", version: "7.3", phase: 2,
    start: "2027-01-05", end: "2027-01-26", status: "leak",
    featured: [{ name: "Sandrone", zh: "桑多涅" }, { name: "Lohen" }],
  },
  {
    game: "genshin", version: "7.4", phase: 1,
    start: "2027-01-27", end: "2027-02-16", status: "projected",
    featured: [{ name: "TBA" }],
    note: NEW_VERSION,
  },

  /* ───────────── Honkai: Star Rail ───────────── */
  {
    game: "hsr", version: "4.7", phase: 1,
    start: "2026-11-11", end: "2026-12-01", status: "confirmed",
    featured: [
      { name: "Aha", zh: "阿哈", isNew: true, note: { en: "banner runs until Dec 22", zh: "卡池持续至12月22日" } },
      { name: "Silver Wolf LV.999", zh: "银狼LV.999" },
      { name: "Sparxie", zh: "火花" },
      { name: "Yao Guang", zh: "爻光" },
    ],
    weapons: ["Upon the First Echo of Aha"],
    note: NEW_VERSION,
  },
  {
    game: "hsr", version: "4.7", phase: 2,
    start: "2026-12-02", end: "2026-12-22", status: "leak",
    featured: [
      { name: "Acheron", zh: "黄泉", element: "lightning" },
      { name: "Dan Heng • Imbibitor Lunae", zh: "丹恒•饮月", element: "imaginary" },
      { name: "Jing Yuan", zh: "景元", element: "lightning" },
    ],
    note: RERUNS,
  },
  {
    game: "hsr", version: "4.8", phase: 1,
    start: "2026-12-23", end: "2027-01-12", status: "leak",
    featured: [{ name: "Astra Yao", zh: "耀嘉音" }, { name: "Ellen Joe", zh: "艾莲" }],
    note: { en: "ZZZ crossover (expected)", zh: "绝区零联动（预计）" },
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
      { name: "Severian", zh: "赛维里安", isNew: true, element: "wind" },
      { name: "Norma" },
    ],
    weapons: ["Incarcerating Grip", "Chief Sidekick"],
  },
  {
    game: "zzz", version: "3.4", phase: 1,
    start: "2026-12-02", end: "2026-12-22", status: "leak",
    featured: [{ name: "Sunbringer", isNew: true }],
    note: NEW_VERSION,
  },
  {
    game: "zzz", version: "3.4", phase: 2,
    start: "2026-12-23", end: "2027-01-12", status: "leak",
    featured: [
      { name: "Kafka", zh: "卡芙卡", isNew: true },
      { name: "Robin", zh: "知更鸟", isNew: true },
    ],
    note: { en: "HSR crossover (expected)", zh: "星铁联动（预计）" },
  },
  {
    game: "zzz", version: "3.5", phase: 1,
    start: "2027-01-13", end: "2027-02-02", status: "projected",
    featured: [{ name: "TBA" }],
    note: NEW_VERSION,
  },

  /* ───────────── Wuthering Waves ───────────── */
  {
    game: "wuwa", version: "3.8", phase: 1,
    start: "2026-11-12", end: "2026-12-03", status: "confirmed",
    featured: [
      { name: "Lily", zh: "莉莉", isNew: true, element: "spectro" },
      { name: "Sigrika" },
      { name: "Qiuyuan", zh: "仇远" },
    ],
    weapons: ["Lullaby"],
    note: NEW_VERSION,
  },
  {
    game: "wuwa", version: "3.8", phase: 2,
    start: "2026-12-03", end: "2026-12-21", status: "confirmed",
    featured: [{ name: "Yangyang: Xuanling" }, { name: "Suisui" }, { name: "Hiyuki" }],
    note: RERUNS,
  },
  {
    game: "wuwa", version: "3.9", phase: 1,
    start: "2026-12-22", end: "2027-01-12", status: "projected",
    featured: [{ name: "TBA" }],
    note: NEW_VERSION,
  },

  /* ───────────── Arknights: Endfield ───────────── */
  {
    game: "endfield", version: "1.6",
    start: "2026-10-29", end: "2026-11-19", status: "confirmed",
    featured: [{ name: "Tangtang", zh: "汤汤" }],
    note: { en: "Rerun: Ancestral Spring Flows Anew", zh: "复刻卡池" },
  },
  {
    game: "endfield", version: "1.6", phase: 2,
    start: "2026-11-05", end: "2026-11-25", status: "confirmed",
    featured: [{ name: "Argent Flow", isNew: true }],
    weapons: ["Lunar Calling"],
  },
  {
    game: "endfield", version: "1.7", phase: 1,
    start: "2026-11-25", end: "2026-12-16", status: "projected",
    featured: [{ name: "Kay", isNew: true }],
    note: NEW_VERSION,
  },

  /* ───────────── Neverness to Everness ───────────── */
  {
    game: "nte", version: "1.5", phase: 1,
    start: "2026-11-11", end: "2026-12-01", status: "confirmed",
    featured: [{ name: "Elyms", isNew: true }, { name: "Shinku" }],
    weapons: ["Echoes on Hold", "Blushing Mirage"],
    note: NEW_VERSION,
  },
  {
    game: "nte", version: "1.5", phase: 2,
    start: "2026-12-02", end: "2026-12-22", status: "projected",
    featured: [{ name: "Exe", isNew: true }, { name: "Chaos" }],
  },

  /* ───────────── Girls' Frontline 2 (Global) ───────────── */
  {
    game: "gfl2", label: { en: "Targeted Procurement", zh: "限定采购" },
    start: "2026-10-29", end: "2026-11-18", status: "confirmed",
    featured: [{ name: "Faelynn" }, { name: "Groza" }, { name: "Colphne", zh: "克罗丽科" }],
  },
  {
    game: "gfl2", label: { en: "2nd Anniversary", zh: "二周年" },
    start: "2026-11-19", end: "2026-12-09", status: "leak",
    featured: [{ name: "Koleda", isNew: true }],
    note: { en: "Siege of Iliad, Part 1", zh: "Siege of Iliad 上篇" },
  },
  {
    game: "gfl2", label: { en: "2nd Anniversary", zh: "二周年" },
    start: "2026-12-10", end: "2026-12-30", status: "leak",
    featured: [{ name: "Asteria", isNew: true }],
    note: { en: "Siege of Iliad, Part 2", zh: "Siege of Iliad 下篇" },
  },

  /* ───────────── Madoka Magica Magia Exedra ───────────── */
  {
    game: "exedra", label: { en: "Limited Kioku", zh: "限定记忆" },
    start: "2026-10-30", end: "2026-11-30", status: "confirmed",
    featured: [{ name: "Halloween Karin", zh: "万圣节花梨" }],
  },
  {
    game: "exedra", label: { en: "Limited Kioku", zh: "限定记忆" },
    start: "2026-11-06", end: "2026-11-30", status: "confirmed",
    featured: [{ name: "Halloween Kyoko", zh: "万圣节杏子", isNew: true }],
  },
  {
    game: "exedra", label: { en: "Limited Kioku", zh: "限定记忆" },
    start: "2026-11-16", end: "2026-12-18", status: "confirmed",
    featured: [{ name: "Lily Candy", isNew: true }],
    note: { en: "First 30 pulls free", zh: "首次30连免费" },
  },

  /* ───────────── Uma Musume (JP server) ───────────── */
  {
    game: "uma", label: { en: "Pick-up", zh: "UP卡池" },
    start: "2026-11-10", end: "2026-11-19", status: "confirmed",
    featured: [{ name: "Yukino Bijin (new outfit)", zh: "雪之美人（新衣装）", isNew: true }],
    weapons: [
      "SSR No Reason",
      { en: "SR Stay Gold", zh: "SR 黄金旅程" },
    ],
  },
  {
    game: "uma", label: { en: "Pick-up", zh: "UP卡池" },
    start: "2026-11-19", end: "2026-11-30", status: "projected",
    featured: [{ name: "TBA" }],
    note: { en: "Next pick-up, details not yet announced", zh: "下一期卡池，详情待公布" },
  },
];

window.LAST_UPDATED = "2026-11-14";
