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
 *   featured list of rate-up units: { name, zh?, img?, isNew?, element?, note? }
 *              img = path under assets/characters/ without extension, e.g. "hsr/acheron"
 *   weapons  optional list of featured weapons / support cards (strings or {en, zh})
 *   note     optional free text
 *
 * GAMES entries for games split by server set server: "CN" | "EN" | "JP" (EN = Global/NA);
 * the Server filter only applies to those.
 *
 * Element keys (avatar colour): pyro, hydro, electro, cryo, anemo, geo, dendro,
 * physical, fire, ice, lightning, wind, quantum, imaginary, ether, spectro.
 */

// icon = app icon shown on each card (falls back to glyph if missing)
window.GAMES = {
  genshin:  { name: { en: "Genshin Impact",       zh: "原神" },                  glyph: "原", icon: "assets/icons/genshin.webp", color: "#f2b35b", short: "GI" },
  hsr:      { name: { en: "Honkai: Star Rail",    zh: "崩坏：星穹铁道" },         glyph: "穹", icon: "assets/icons/hsr.webp", color: "#5aa7ff", short: "HSR" },
  zzz:      { name: { en: "Zenless Zone Zero",    zh: "绝区零" },                 glyph: "零", icon: "assets/icons/zzz.webp", color: "#ff7a45", short: "ZZZ" },
  wuwa:     { name: { en: "Wuthering Waves",      zh: "鸣潮" },                   glyph: "鸣", icon: "assets/icons/wuwa.webp", color: "#3fd0c9", short: "WuWa" },
  endfield: { name: { en: "Arknights: Endfield",  zh: "明日方舟：终末地" },       glyph: "终", icon: "assets/icons/endfield.webp", color: "#e8d36a", short: "AKE" },
  nte:      { name: { en: "Neverness to Everness", zh: "异环" },                  glyph: "环", icon: "assets/icons/nte.webp", color: "#c77dff", short: "NTE" },
  gfl2:     { name: { en: "Girls' Frontline 2",   zh: "少女前线2：追放" },        glyph: "追", icon: "assets/icons/gfl2.webp", color: "#ef4f5f", short: "GFL2" },
  exedra:   { name: { en: "Madoka Magica Exedra", zh: "魔法少女小圆 Exedra" },    glyph: "魔", icon: "assets/icons/exedra.webp", color: "#ff8fc8", short: "MMX" },
  uma:      { name: { en: "Uma Musume (JP)",      zh: "赛马娘（日服）" }, server: "JP",         glyph: "马", icon: "assets/icons/uma.webp", color: "#7ddc6a", short: "UMA" },
  uma_gl:   { name: { en: "Uma Musume (Global)",  zh: "赛马娘（国际服）" }, server: "EN",       glyph: "马", icon: "assets/icons/uma_gl.webp", color: "#a8e86b", short: "UMA-GL" },
  bluearchive: { name: { en: "Blue Archive (Global)", zh: "蔚蓝档案（国际服）" }, glyph: "蔚", icon: "assets/icons/bluearchive.webp", color: "#38c2f2", short: "BA" },
  fgo_jp:   { name: { en: "FGO (JP)",             zh: "FGO（日服）" }, server: "JP",             glyph: "冠", icon: "assets/icons/fgo_jp.webp", color: "#d9b44a", short: "FGO-JP" },
  fgo_cn:   { name: { en: "FGO (CN)",             zh: "FGO（国服）" }, server: "CN",             glyph: "冠", icon: "assets/icons/fgo_cn.webp", color: "#e8c15a", short: "FGO-CN" },
  fgo_na:   { name: { en: "FGO (NA)",             zh: "FGO（美服）" }, server: "EN",             glyph: "冠", icon: "assets/icons/fgo_na.webp", color: "#c7a23c", short: "FGO-NA" },
  gbp_jp:   { name: { en: "BanG Dream! GBP (JP)", zh: "梦想协奏曲！少女乐团派对！（日服）" }, server: "JP", glyph: "邦", icon: "assets/icons/gbp_jp.webp", color: "#ff3377", short: "GBP-JP" },
  gbp_en:   { name: { en: "BanG Dream! GBP (EN)", zh: "梦想协奏曲！少女乐团派对！（国际服）" }, server: "EN", glyph: "邦", icon: "assets/icons/gbp_en.webp", color: "#ff5c93", short: "GBP-EN" },
  gbp_cn:   { name: { en: "BanG Dream! GBP (CN)", zh: "梦想协奏曲！少女乐团派对！（国服）" }, server: "CN", glyph: "邦", icon: "assets/icons/gbp_cn.webp", color: "#ff7aa8", short: "GBP-CN" },
  arknights_en: { name: { en: "Arknights (EN)", zh: "明日方舟（国际服）" }, server: "EN", glyph: "舟", icon: "assets/icons/arknights_en.webp", color: "#4cc3d9", short: "AK-EN" },
  arknights_cn: { name: { en: "Arknights (CN)", zh: "明日方舟（国服）" }, server: "CN", glyph: "舟", icon: "assets/icons/arknights_cn.webp", color: "#6fd4e6", short: "AK-CN" },
  pcr_jp:   { name: { en: "Princess Connect! Re:Dive (JP)", zh: "公主连结Re:Dive（日服）" }, server: "JP", glyph: "公", icon: "assets/icons/pcr_jp.webp", color: "#f59ac0", short: "PCR-JP" },
  pcr_cn:   { name: { en: "Princess Connect! Re:Dive (CN)", zh: "公主连结Re:Dive（国服）" }, server: "CN", glyph: "公", icon: "assets/icons/pcr_cn.webp", color: "#f7b2cf", short: "PCR-CN" },
  pjsk_jp:  { name: { en: "Project Sekai (JP)", zh: "世界计划 缤纷舞台！（日服）" }, server: "JP", glyph: "世", icon: "assets/icons/pjsk_jp.webp", color: "#33ccbb", short: "PJSK-JP" },
  pjsk_en:  { name: { en: "Project Sekai (EN)", zh: "世界计划 缤纷舞台！（国际服）" }, server: "EN", glyph: "世", icon: "assets/icons/pjsk_en.webp", color: "#5fd9cb", short: "PJSK-EN" },
  r1999:    { name: { en: "Reverse: 1999 (Global)", zh: "重返未来：1999（国际服）" }, glyph: "返", icon: "assets/icons/r1999_en.webp", color: "#c9a46b", short: "R1999" },
  holodori: { name: { en: "hololive Dreams", zh: "hololive Dreams" }, glyph: "ホ", icon: "assets/icons/holodori.webp", color: "#4fc3f7", short: "HOLODORI" },
  azurlane_en: { name: { en: "Azur Lane (EN)", zh: "碧蓝航线（国际服）" }, server: "EN", glyph: "碧", icon: "assets/icons/azurlane_en.webp", color: "#5b8cff", short: "AL-EN" },
  azurlane_cn: { name: { en: "Azur Lane (CN)", zh: "碧蓝航线（国服）" }, server: "CN", glyph: "碧", icon: "assets/icons/azurlane_cn.webp", color: "#7aa6ff", short: "AL-CN" },
  ournotes: { name: { en: "BanG Dream! Our Notes", zh: "BanG Dream! Our Notes" },  glyph: "音", icon: "assets/icons/ournotes.webp", color: "#7aa2ff", short: "BDON" },
};

const NEW_VERSION = { en: "New version launch", zh: "新版本上线" };
const RERUNS = { en: "Rerun banners", zh: "复刻卡池" };

window.BANNERS = [
  /* ───────────── Genshin Impact ───────────── */
  {
    game: "genshin", version: "7.2", phase: 1,
    start: "2026-11-04", end: "2026-11-24", status: "confirmed",
    featured: [
      { name: "Mitya", img: "genshin/mitya", zh: "米提亚", isNew: true, element: "electro" },
      { name: "Furina", img: "genshin/furina", zh: "芙宁娜", element: "hydro" },
    ],
    weapons: ["Starsealed Edict", "Splendor of Tranquil Waters"],
    note: NEW_VERSION,
  },
  {
    game: "genshin", version: "7.2", phase: 2,
    start: "2026-11-24", end: "2026-12-15", status: "projected",
    featured: [{ name: "Linnea", zh: "莉奈娅", img: "genshin/linnea" }, { name: "Zibai", img: "genshin/zibai", zh: "兹白" }],
    weapons: ["Lightbearing Moonshard"],
    note: RERUNS,
  },
  {
    game: "genshin", version: "7.3", phase: 1,
    start: "2026-12-16", end: "2027-01-05", status: "leak",
    featured: [
      { name: "Tsaritsa", img: "genshin/tsaritsa", zh: "安娜丝塔夏", isNew: true, element: "cryo" },
      { name: "Danica", zh: "达妮卡", img: "genshin/danica", isNew: true },
    ],
    note: NEW_VERSION,
  },
  {
    game: "genshin", version: "7.3", phase: 2,
    start: "2027-01-05", end: "2027-01-26", status: "leak",
    featured: [{ name: "Sandrone", img: "genshin/sandrone", zh: "桑多涅" }, { name: "Lohen", zh: "洛恩", img: "genshin/lohen" }],
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
      { name: "Aha", img: "hsr/aha", zh: "阿哈", isNew: true, note: { en: "banner runs until Dec 22", zh: "卡池持续至12月22日" } },
      { name: "Silver Wolf LV.999", img: "hsr/silver-wolf-lv999", zh: "银狼LV.999" },
      { name: "Sparxie", img: "hsr/sparxie", zh: "火花" },
      { name: "Yao Guang", img: "hsr/yao-guang", zh: "爻光" },
    ],
    weapons: ["Upon the First Echo of Aha"],
    note: NEW_VERSION,
  },
  {
    game: "hsr", version: "4.7", phase: 2,
    start: "2026-12-02", end: "2026-12-22", status: "leak",
    featured: [
      { name: "Acheron", img: "hsr/acheron", zh: "黄泉", element: "lightning" },
      { name: "Dan Heng • Imbibitor Lunae", img: "hsr/dan-heng-il", zh: "丹恒•饮月", element: "imaginary" },
      { name: "Jing Yuan", img: "hsr/jing-yuan", zh: "景元", element: "lightning" },
    ],
    note: RERUNS,
  },
  {
    game: "hsr", version: "4.8", phase: 1,
    start: "2026-12-23", end: "2027-01-12", status: "leak",
    featured: [{ name: "Astra Yao", img: "zzz/astra-yao", zh: "耀嘉音" }, { name: "Ellen Joe", img: "zzz/ellen-joe", zh: "艾莲" }],
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
      { name: "Severian", img: "zzz/severian", zh: "赛维里安", isNew: true, element: "wind" },
      { name: "Norma", zh: "诺姆", img: "zzz/norma" },
    ],
    weapons: ["Incarcerating Grip", "Chief Sidekick"],
  },
  {
    game: "zzz", version: "3.4", phase: 1,
    start: "2026-12-02", end: "2026-12-22", status: "leak",
    featured: [{ name: "Sunbringer", zh: "挽昼", img: "zzz/sunbringer", isNew: true }],
    note: NEW_VERSION,
  },
  {
    game: "zzz", version: "3.4", phase: 2,
    start: "2026-12-23", end: "2027-01-12", status: "leak",
    featured: [
      { name: "Kafka", img: "hsr/kafka", zh: "卡芙卡", isNew: true },
      { name: "Robin", img: "hsr/robin", zh: "知更鸟", isNew: true },
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
      { name: "Lily", img: "wuwa/lily", zh: "莉莉", isNew: true, element: "spectro" },
      { name: "Sigrika", zh: "西格莉卡", img: "wuwa/sigrika" },
      { name: "Qiuyuan", img: "wuwa/qiuyuan", zh: "仇远" },
    ],
    weapons: ["Lullaby"],
    note: NEW_VERSION,
  },
  {
    game: "wuwa", version: "3.8", phase: 2,
    start: "2026-12-03", end: "2026-12-21", status: "confirmed",
    featured: [{ name: "Yangyang: Xuanling", zh: "秧秧·玄翎", img: "wuwa/yangyang-xuanling" }, { name: "Suisui", zh: "穗穗", img: "wuwa/suisui" }, { name: "Hiyuki", zh: "绯雪", img: "wuwa/hiyuki" }],
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
    featured: [{ name: "Tangtang", img: "endfield/tangtang", zh: "汤汤" }],
    note: { en: "Rerun: Ancestral Spring Flows Anew", zh: "复刻卡池" },
  },
  {
    game: "endfield", version: "1.6", phase: 2,
    start: "2026-11-05", end: "2026-11-25", status: "confirmed",
    featured: [{ name: "Argent Flow", zh: "明河", img: "endfield/argent-flow", isNew: true }],
    weapons: ["Lunar Calling"],
  },
  {
    game: "endfield", version: "1.7", phase: 1,
    start: "2026-11-25", end: "2026-12-16", status: "projected",
    featured: [{ name: "Kay", img: "endfield/kay", isNew: true }],
    note: NEW_VERSION,
  },

  /* ───────────── Neverness to Everness ───────────── */
  {
    game: "nte", version: "1.5", phase: 1,
    start: "2026-11-11", end: "2026-12-01", status: "confirmed",
    featured: [{ name: "Elyms", zh: "曳尔沐", img: "nte/elyms", isNew: true }, { name: "Shinku", zh: "真红", img: "nte/shinku" }],
    weapons: ["Echoes on Hold", "Blushing Mirage"],
    note: NEW_VERSION,
  },
  {
    game: "nte", version: "1.5", phase: 2,
    start: "2026-12-02", end: "2026-12-22", status: "projected",
    featured: [{ name: "Exe", img: "nte/exe", isNew: true }, { name: "Chaos", zh: "卡厄斯", img: "nte/chaos" }],
  },

  /* ───────────── Girls' Frontline 2 (Global) ───────────── */
  {
    game: "gfl2", label: { en: "Targeted Procurement", zh: "限定采购" },
    start: "2026-10-29", end: "2026-11-18", status: "confirmed",
    featured: [{ name: "Faelynn", zh: "芙铃", img: "gfl2/faelynn" }, { name: "Groza", zh: "OTs-14", img: "gfl2/groza" }, { name: "Colphne", zh: "寇尔芙", img: "gfl2/colphne" }],
  },
  {
    game: "gfl2", label: { en: "2nd Anniversary", zh: "二周年" },
    start: "2026-11-19", end: "2026-12-09", status: "leak",
    featured: [{ name: "Koleda", zh: "克莱妲", isNew: true }],
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
    featured: [{ name: "Halloween Karin", img: "exedra/karin", zh: "万圣节花凛" }],
  },
  {
    game: "exedra", label: { en: "Limited Kioku", zh: "限定记忆" },
    start: "2026-11-06", end: "2026-11-30", status: "confirmed",
    featured: [{ name: "Halloween Kyoko", img: "exedra/kyoko", zh: "万圣节杏子", isNew: true }],
  },
  {
    game: "exedra", label: { en: "Limited Kioku", zh: "限定记忆" },
    start: "2026-11-16", end: "2026-12-18", status: "confirmed",
    featured: [{ name: "Lily Candy", img: "exedra/lily-candy", isNew: true }],
    note: { en: "First 30 pulls free", zh: "首次30连免费" },
  },

  /* ───────────── Uma Musume (JP server) ───────────── */
  {
    game: "uma", label: { en: "Pick-up", zh: "UP卡池" },
    start: "2026-11-10", end: "2026-11-19", status: "confirmed",
    featured: [{ name: "Yukino Bijin (new outfit)", img: "uma/yukino-bijin", zh: "雪之美人（新衣装）", isNew: true }],
    weapons: [
      { en: "SSR No Reason", zh: "SSR 莫名其妙" },
      { en: "SR Stay Gold", zh: "SR 黄金旅程" },
    ],
  },
  {
    game: "uma", label: { en: "Pick-up", zh: "UP卡池" },
    start: "2026-11-19", end: "2026-11-30", status: "projected",
    featured: [{ name: "TBA" }],
    note: { en: "Next pick-up, details not yet announced", zh: "下一期卡池，详情待公布" },
  },
  /* ───────────── Uma Musume (Global server) ───────────── */
  {
    game: "uma_gl", label: { en: "Pick-up", zh: "UP卡池" },
    start: "2026-11-05", end: "2026-11-15", status: "confirmed",
    featured: [{ name: "Daitaku Helios", zh: "大拓太阳神", img: "uma/daitaku-helios", isNew: true }],
    weapons: ["K.S. Miracle", "Aston Machan"],
  },
  {
    game: "uma_gl", label: { en: "Pick-up", zh: "UP卡池" },
    start: "2026-11-09", end: "2026-11-23", status: "confirmed",
    featured: [
      { name: "Ines Fujin (Valentine)", img: "uma/ines-fujin-valentine", isNew: true },
      { name: "Mejiro Ryan (Valentine)", zh: "目白赖恩（情人节）", img: "uma/mejiro-ryan-valentine", isNew: true },
    ],
    weapons: ["SSR Biko Pegasus", "SSR Marvelous Sunday"],
  },
  {
    game: "uma_gl", label: { en: "Pick-up", zh: "UP卡池" },
    start: "2026-11-21", end: "2026-12-02", status: "projected",
    featured: [{ name: "Shinko Windy", zh: "新光风", img: "uma/shinko-windy", isNew: true }],
    weapons: ["SSR Nishino Flower", "SSR Maruzensky"],
    note: { en: "2nd Anniversary Part 1", zh: "二周年庆典 第1弹" },
  },

  /* ───────────── Blue Archive (Global server) ───────────── */
  {
    game: "bluearchive", label: { en: "Pick-Up", zh: "招募UP" },
    start: "2026-11-10", end: "2026-11-17", status: "confirmed",
    featured: [
      { name: "Makoto (Swimsuit)", zh: "真琴（泳装）", img: "ba/makoto-swimsuit", isNew: true },
      { name: "Satsuki (Swimsuit)", zh: "皋月（泳装）", img: "ba/satsuki-swimsuit", isNew: true },
    ],
    note: { en: "5th Anniversary", zh: "五周年" },
  },
  {
    game: "bluearchive", label: { en: "Fes", zh: "Fes招募" },
    start: "2026-11-17", end: "2026-11-24", status: "projected",
    featured: [
      { name: "Iroha (Swimsuit)", zh: "伊吕波（泳装）", img: "ba/iroha-swimsuit", isNew: true },
      { name: "Ibuki (Swimsuit)", zh: "伊吹（泳装）", img: "ba/ibuki-swimsuit", isNew: true },
      { name: "Rio", zh: "莉音", img: "ba/rio" },
      { name: "Neru (School)", zh: "妮露（制服）", img: "ba/neru-school" },
    ],
    note: { en: "5th Anniversary", zh: "五周年" },
  },
  {
    game: "bluearchive", label: { en: "Pick-Up", zh: "招募UP" },
    start: "2026-11-24", end: "2026-12-08", status: "projected",
    featured: [
      { name: "Sena (Casual)", zh: "濑名（便服）", img: "ba/sena-casual" },
      { name: "Juri (Part-Timer)", zh: "朱莉（打工）", img: "ba/juri-part-timer" },
      { name: "Nagusa", zh: "名草", img: "ba/nagusa" },
      { name: "Niya", zh: "尼娅", img: "ba/niya" },
    ],
    note: RERUNS,
  },

  /* ───────────── Fate/Grand Order (JP) ───────────── */
  {
    game: "fgo_jp", label: { en: "GUDAGUDA prerelease", zh: "唠唠叨叨开幕前夕" },
    start: "2026-11-04", end: "2026-11-18", status: "confirmed",
    featured: [
      { name: "Kondo Isami", zh: "近藤勇", img: "fgo/kondo" },
      { name: "Hijikata Toshizo", zh: "土方岁三", img: "fgo/hijikata" },
      { name: "Okita Souji", zh: "冲田总司", img: "fgo/okita" },
    ],
    note: { en: "Daily rotating pick-ups", zh: "每日替换" },
  },
  {
    game: "fgo_jp", label: { en: "100M Downloads", zh: "全世界1亿下载纪念" },
    start: "2026-11-07", end: "2026-11-21", status: "confirmed",
    featured: [{ name: "Merlin", zh: "梅林", img: "fgo/merlin" }],
    note: { en: "42 servants across 21 banners", zh: "21个卡池共42骑" },
  },
  {
    game: "fgo_jp", label: { en: "GUDAGUDA Midwinter Swimsuit", zh: "严冬泳装特辑 唠唠叨叨" },
    start: "2026-11-11", end: "2026-12-02", status: "confirmed",
    featured: [
      { name: "Himiko & Iyo", zh: "卑弥呼＆壹与", img: "fgo/himiko-iyo", isNew: true },
      { name: "Saika Magoichi (Rider)", zh: "杂贺孙一(Rider)", img: "fgo/saika-rider", isNew: true },
    ],
    note: { en: "New event", zh: "新活动" },
  },
  {
    game: "fgo_jp", label: { en: "GUDAGUDA Pick-up 2", zh: "唠唠叨叨 推荐召唤2" },
    start: "2026-11-13", end: "2026-12-02", status: "confirmed",
    featured: [
      { name: "Takasugi Shinsaku", zh: "高杉晋作", img: "fgo/takasugi" },
      { name: "Okita Souji (Alter) (Saber)", zh: "冲田总司〔Alter〕(Saber)", img: "fgo/okita-alter-saber" },
      { name: "Okita J. Souji", zh: "冲田·J·总司", img: "fgo/okita-j" },
      { name: "Saito Hajime", zh: "斋藤一", img: "fgo/saito" },
    ],
    note: { en: "Daily rotating pick-ups", zh: "每日替换" },
  },

  /* ───────────── Fate/Grand Order (CN) ───────────── */
  {
    game: "fgo_cn", label: { en: "Grand Duel: Archer", zh: "冠位戴冠战：Archer" },
    start: "2026-11-05", end: "2026-11-21", status: "confirmed",
    featured: [{ name: "Archer-class servants", zh: "Archer职阶从者" }],
  },
  {
    game: "fgo_cn", label: { en: "100M Downloads", zh: "全世界1亿下载纪念" },
    start: "2026-11-07", end: "2026-11-21", status: "confirmed",
    featured: [{ name: "Merlin", zh: "梅林", img: "fgo/merlin" }],
    note: { en: "Many servants across several banners", zh: "多个卡池" },
  },
  {
    game: "fgo_cn", label: { en: "Road to Finale #7", zh: "Road to 终章 第7章篇纪念" },
    start: "2026-11-10", end: "2026-11-17", status: "confirmed",
    featured: [{ name: "Tezcatlipoca", zh: "特斯卡特利波卡", img: "fgo/tezcatlipoca" }, { name: "Nitocris (Alter)", zh: "尼托克丽丝〔Alter〕", img: "fgo/nitocris-alter" }],
  },
  {
    game: "fgo_cn", label: { en: "Road to Finale", zh: "Road to 终章 奏章Ⅰ篇纪念" },
    start: "2026-11-17", end: "2026-11-24", status: "confirmed",
    featured: [{ name: "Medusa (Saber)", zh: "美杜莎(Saber)", img: "fgo/medusa-saber" }, { name: "Duryodhana", zh: "难敌", img: "fgo/duryodhana" }],
  },
  {
    game: "fgo_cn", label: { en: "Grand Duel: Rider & Assassin", zh: "冠位戴冠战：Rider＆Assassin" },
    start: "2026-11-21", end: "2026-11-28", status: "projected",
    featured: [{ name: "Rider & Assassin servants", zh: "Rider/Assassin职阶从者" }],
  },
  {
    game: "fgo_cn", label: { en: "Road to Finale #8", zh: "Road to 终章 第8次发布纪念" },
    start: "2026-11-24", end: "2026-12-01", status: "projected",
    featured: [
      { name: "The Count of Monte Cristo", zh: "岩窟王 基督山", img: "fgo/monte-cristo" },
      { name: "Alessandro di Cagliostro", zh: "亚历山德罗·迪·卡利奥斯特罗", img: "fgo/cagliostro" },
    ],
  },
  {
    game: "fgo_cn", label: { en: "Grand Duel: Caster", zh: "冠位戴冠战：Caster" },
    start: "2026-11-24", end: "2026-12-10", status: "projected",
    featured: [{ name: "Caster-class servants", zh: "Caster职阶从者" }],
  },
  {
    game: "fgo_cn", label: { en: "Road to Finale #9", zh: "Road to 终章 第9次发布纪念" },
    start: "2026-12-01", end: "2026-12-08", status: "projected",
    featured: [{ name: "BB Dubai", zh: "BB迪拜", img: "fgo/bb-dubai" }, { name: "Tenochtitlan", zh: "特诺奇蒂特兰", img: "fgo/tenochtitlan" }],
  },
  {
    game: "fgo_cn", label: { en: "Road to Finale #10", zh: "Road to 终章 第10次发布纪念" },
    start: "2026-12-08", end: "2026-12-15", status: "projected",
    featured: [{ name: "Lilith", zh: "莉莉丝", img: "fgo/lilith" }, { name: "Martha (Ruler)", zh: "玛尔达(Ruler)", img: "fgo/martha-ruler" }],
  },
  {
    game: "fgo_cn", label: { en: "Part 2 Final Chapter", zh: "「第2部 终章」开幕！" },
    start: "2026-12-10", end: "2026-12-20", status: "projected",
    featured: [{ name: "TBA" }],
    note: { en: "Finale launch pick-ups", zh: "英灵极点推荐召唤" },
  },

  /* ───────────── Fate/Grand Order (NA) ───────────── */
  {
    game: "fgo_na", label: { en: "Mystery House Crafters prerelease", zh: "Mystery House Crafters 开幕前夕" },
    start: "2026-11-05", end: "2026-11-14", status: "confirmed",
    featured: [{ name: "Ishtar", zh: "伊什塔尔", img: "fgo/ishtar" }, { name: "Ozymandias", zh: "奥斯曼狄斯", img: "fgo/ozymandias" }],
    note: { en: "Daily rotating pick-ups", zh: "每日替换" },
  },
  {
    game: "fgo_na", label: { en: "100M Downloads", zh: "全世界1亿下载纪念" },
    start: "2026-11-07", end: "2026-11-20", status: "confirmed",
    featured: [{ name: "Merlin", zh: "梅林", img: "fgo/merlin" }],
    note: { en: "42 servants across 21 banners", zh: "21个卡池共42骑" },
  },
  {
    game: "fgo_na", label: { en: "Mystery House Crafters", zh: "Mystery House Crafters" },
    start: "2026-11-13", end: "2026-12-03", status: "confirmed",
    featured: [{ name: "Tutankhamun", zh: "图坦卡蒙", img: "fgo/tutankhamun", isNew: true }],
    note: { en: "New event", zh: "新活动" },
  },
  /* ───────────── BanG Dream! Girls Band Party (JP) — data from bestdori.com ───────────── */
  {
    game: "gbp_jp", label: { en: "Collab Part 1", zh: "联动卡池 Part1" },
    start: "2026-11-06", end: "2026-11-18", status: "confirmed",
    featured: [
      { name: "Yukina Minato", zh: "凑友希那", img: "gbp/2525", isNew: true },
      { name: "Sayo Hikawa", zh: "冰川纱夜", img: "gbp/2526", isNew: true },
    ],
    note: { en: "Magical Girl Witch Trials collab (limited)", zh: "魔法少女的魔女审判 联动（限定）" },
  },
  {
    game: "gbp_jp", label: { en: "Event gacha", zh: "活动卡池" },
    start: "2026-11-10", end: "2026-11-19", status: "confirmed",
    featured: [
      { name: "Rokka Asahi", zh: "朝日六花", img: "gbp/2554", isNew: true },
      { name: "Rei Wakana", zh: "和奏瑞依", img: "gbp/2555", isNew: true },
      { name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/2558" },
    ],
  },

  /* ───────────── BanG Dream! Girls Band Party (EN) — data from bestdori.com ───────────── */
  {
    game: "gbp_en", label: { en: "Limited", zh: "限定卡池" },
    start: "2026-11-06", end: "2026-11-14", status: "confirmed",
    featured: [
      { name: "Eve Wakamiya", zh: "若宫伊芙", img: "gbp/2010", isNew: true },
      { name: "Kanon Matsubara", zh: "松原花音", img: "gbp/2011", isNew: true },
      { name: "Tsukushi Futaba", zh: "二叶筑紫", img: "gbp/2014" },
    ],
  },
  {
    game: "gbp_en", label: { en: "Event gacha", zh: "活动卡池" },
    start: "2026-11-11", end: "2026-11-19", status: "confirmed",
    featured: [
      { name: "Kanon Matsubara", zh: "松原花音", img: "gbp/2408", isNew: true },
      { name: "Misaki Okusawa (Michelle)", zh: "米歇尔", img: "gbp/2409", isNew: true },
      { name: "Hagumi Kitazawa", zh: "北泽育美", img: "gbp/2412" },
    ],
  },
  {
    game: "gbp_en", label: { en: "Birthday", zh: "生日卡池" },
    start: "2026-11-19", end: "2026-11-26", status: "confirmed",
    featured: [{ name: "Rui Yashio", zh: "八潮瑠唯", img: "gbp/1991" }],
  },
  {
    game: "gbp_en", label: { en: "Birthday", zh: "生日卡池" },
    start: "2026-11-22", end: "2026-11-29", status: "confirmed",
    featured: [{ name: "Tomori Takamatsu", zh: "高松灯", img: "gbp/2100" }],
  },

  /* ───────────── BanG Dream! Girls Band Party (CN) — data from bestdori.com ───────────── */
  {
    game: "gbp_cn", label: { en: "Dream Festival", zh: "Dream Festival 招募" },
    start: "2026-11-13", end: "2026-11-17", status: "confirmed",
    featured: [
      { name: "Kanon Matsubara", zh: "松原花音", img: "gbp/2445" },
      { name: "Tsukushi Futaba", zh: "二叶筑紫", img: "gbp/2446" },
      { name: "Rokka Asahi", zh: "朝日六花", img: "gbp/2440" },
      { name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/2441" },
    ],
    note: { en: "7.5th Anniversary", zh: "7.5周年纪念" },
  },
  {
    game: "gbp_cn", label: { en: "Event gacha", zh: "活动卡池" },
    start: "2026-11-17", end: "2026-11-24", status: "confirmed",
    featured: [
      { name: "Rokka Asahi", zh: "朝日六花", img: "gbp/2440" },
      { name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/2441" },
      { name: "Reona Nyubara", zh: "鳰原令王那", img: "gbp/2444" },
    ],
  },
  {
    game: "gbp_cn", label: { en: "Birthday", zh: "生日卡池" },
    start: "2026-11-18", end: "2026-11-21", status: "confirmed",
    featured: [{ name: "Rui Yashio", zh: "八潮瑠唯", img: "gbp/1991" }],
  },
  {
    game: "gbp_cn", label: { en: "Birthday", zh: "生日卡池" },
    start: "2026-11-21", end: "2026-11-24", status: "confirmed",
    featured: [{ name: "Tomori Takamatsu", zh: "高松灯", img: "gbp/2100" }],
  },

  /* ───────────── Arknights (EN / CN) — from the Arknights Terra Wiki and official notices ───────────── */
  {
    game: "arknights_cn", label: {"en": "Limited (Celebration): Cinders of Snow", "zh": "限定寻访·庆典「将雪投火」"},
    start: "2026-11-01", end: "2026-11-15", status: "confirmed",
    featured: [
      { name: "Talulah", zh: "塔露拉", img: "arknights/talulah", isNew: true },
      { name: "Toska", zh: "冻河", img: "arknights/toska", isNew: true },
      { name: "SilverAsh the Reignfrost", zh: "凛御银灰", img: "arknights/silverash-the-reignfrost" },
      { name: "Exusiai the New Covenant", zh: "新约能天使", img: "arknights/exusiai-the-new-covenant" },
      { name: "Lappland the Decadenza", zh: "荒芜拉普兰德", img: "arknights/lappland-the-decadenza" },
      { name: "Olga", zh: "奥尔佳", img: "arknights/olga", isNew: true },
    ],
    note: {"en": "Talulah (limited) + Toska share 70% of 6★; free Talulah at 300 pulls", "zh": "塔露拉[限定]与冻河占6★出率70%；累计300抽赠送塔露拉"},
  },
  {
    game: "arknights_cn", label: {"en": "Stronghold Headhunting 01", "zh": "卫戍寻访01"},
    start: "2026-11-08", end: "2026-12-02", status: "confirmed",
    featured: [
      { name: "Młynar", zh: "玛恩纳", img: "arknights/mlynar" },
      { name: "Stainless", zh: "白铁", img: "arknights/stainless" },
      { name: "Ulpianus", zh: "乌尔比安", img: "arknights/ulpianus" },
      { name: "Mon3tr", zh: "Mon3tr", img: "arknights/mon3tr" },
      { name: "Thorns the Lodestar", zh: "引星棘刺", img: "arknights/thorns-the-lodestar" },
      { name: "Vulpisfoglia", zh: "忍冬", img: "arknights/vulpisfoglia" },
      { name: "Degenbrecher", zh: "锏", img: "arknights/degenbrecher" },
      { name: "Mantra", zh: "真言", img: "arknights/mantra" },
      { name: "Logos", zh: "逻各斯", img: "arknights/logos" },
      { name: "Blaze the Igniting Spark", zh: "烛煌", img: "arknights/blaze-the-igniting-spark" },
    ],
    note: {"en": "Tied to Stronghold Protocol season. 6★ pulls only from these 10 operators (2% 6★ rate).", "zh": "配合「卫戍协议」；6★仅出现以上10名干员。"},
  },
  {
    game: "arknights_cn", label: {"en": "Joint Operation (Selected Operators)", "zh": "联合行动·特选干员定向寻访"},
    start: "2026-11-15", end: "2026-11-29", status: "confirmed",
    featured: [
      { name: "Lin", zh: "林", img: "arknights/lin" },
      { name: "Ch'en the Dawnstreak", zh: "赤刃明霄陈", img: "arknights/chen-the-dawnstreak" },
      { name: "Closure", zh: "可露希尔", img: "arknights/closure" },
      { name: "Reed the Flame Shadow", zh: "焰影苇草", img: "arknights/reed-the-flame-shadow" },
      { name: "Wulfenite", zh: "钼铅", img: "arknights/wulfenite" },
      { name: "Pedro", zh: "佩德洛", img: "arknights/pedro" },
      { name: "Vendela", zh: "刺玫", img: "arknights/vendela" },
      { name: "Fang the Fire-Sharpened", zh: "历阵锐枪芬", img: "arknights/fang-the-fire-sharpened" },
      { name: "Nowell", zh: "诺威尔", img: "arknights/nowell" },
      { name: "Poncirus", zh: "青枳", img: "arknights/poncirus" },
    ],
    note: {"en": "2026 Thank-You Celebration Part 2. 6★/5★ pulls only from these operators.", "zh": "2026感谢庆典Part 2；6★/5★仅出现以上干员。"},
  },
  {
    game: "arknights_en", label: {"en": "Orienteering Headhunting #7", "zh": "定向寻访 #7"},
    start: "2026-10-28", end: "2026-11-11", status: "confirmed",
    featured: [
      { name: "Leizi the Thunderbringer", zh: "司霆惊蛰", img: "arknights/leizi-the-thunderbringer" },
      { name: "Pramanix the Prerita", zh: "圣聆初雪", img: "arknights/pramanix-the-prerita" },
      { name: "Typhon", zh: "提丰", img: "arknights/typhon" },
      { name: "Logos", zh: "逻各斯", img: "arknights/logos" },
      { name: "Thorns the Lodestar", zh: "引星棘刺", img: "arknights/thorns-the-lodestar" },
      { name: "Penance", zh: "斥罪", img: "arknights/penance" },
      { name: "Perfumer the Distilled", zh: "撷英调香师", img: "arknights/perfumer-the-distilled" },
      { name: "Bobbing", zh: "波卜", img: "arknights/bobbing" },
      { name: "Aroma", zh: "阿罗玛", img: "arknights/aroma" },
      { name: "Alanna", zh: "阿兰娜", img: "arknights/alanna" },
      { name: "Mitm", zh: "渡桥", img: "arknights/mitm" },
      { name: "Santalla", zh: "寒檀", img: "arknights/santalla" },
    ],
    note: {"en": "Player locks 3 of these 6★ and 3 of these 5★; only chosen 6★ can drop.", "zh": "玩家从中自选3名6★与3名5★。"},
  },
  {
    game: "arknights_en", label: {"en": "Standard Headhunting #178", "zh": "标准寻访 #178"},
    start: "2026-10-23", end: "2026-11-06", status: "confirmed",
    featured: [
      { name: "Ines", zh: "伊内丝", img: "arknights/ines" },
      { name: "Zuo Le", zh: "左乐", img: "arknights/zuo-le" },
      { name: "Proviso", zh: "但书", img: "arknights/proviso" },
      { name: "Record Keeper", zh: "录武官", img: "arknights/record-keeper" },
      { name: "Spuria", zh: "空构", img: "arknights/spuria" },
    ],
    note: {"en": "Standard pool rotation.", "zh": "常驻标准寻访轮换。"},
  },
  {
    game: "arknights_en", label: {"en": "Kernel Headhunting #64", "zh": "中坚寻访 #64"},
    start: "2026-11-03", end: "2026-11-17", status: "confirmed",
    featured: [
      { name: "Eunectes", zh: "森蚺", img: "arknights/eunectes" },
      { name: "Saileach", zh: "琴柳", img: "arknights/saileach" },
      { name: "Ashlock", zh: "灰毫", img: "arknights/ashlock" },
      { name: "Franka", zh: "芙兰卡", img: "arknights/franka" },
      { name: "Whisperain", zh: "絮雨", img: "arknights/whisperain" },
    ],
    note: {"en": "Kernel pool rotation.", "zh": "中坚寻访轮换。"},
  },
  {
    game: "arknights_en", label: {"en": "Standard Headhunting #179", "zh": "标准寻访 #179"},
    start: "2026-11-06", end: "2026-11-20", status: "confirmed",
    featured: [
      { name: "Pozëmka", zh: "鸿雪", img: "arknights/pozemka" },
      { name: "Viviana", zh: "薇薇安娜", img: "arknights/viviana" },
      { name: "Lunacub", zh: "子月", img: "arknights/lunacub" },
      { name: "Poncirus", zh: "青枳", img: "arknights/poncirus" },
      { name: "Taraxacum", zh: "风絮", img: "arknights/taraxacum" },
    ],
    note: {"en": "Standard pool rotation.", "zh": "常驻标准寻访轮换。"},
  },
  {
    game: "arknights_en", label: {"en": "Limited (Collab): Hunters of the Umbral Wilds", "zh": "限定寻访「泡影苍霆」联动（怪物猎人）"},
    start: "2026-11-16", end: "2026-11-30", status: "confirmed",
    featured: [
      { name: "Violet Mizutsune Orchid", zh: "焰狐龙梓兰", img: "arknights/violet-mizutsune-orchid", isNew: true },
      { name: "Zinogre S Catapult", zh: "雷狼龙S空爆", img: "arknights/zinogre-s-catapult", isNew: true },
    ],
    note: {"en": "Monster Hunter collab #2, with SideStory Thunder in the Azure Dream.", "zh": "《怪物猎人》第二次联动，配合SideStory「泡影苍霆」。"},
  },
  {
    game: "arknights_en", label: {"en": "Limited (Collab rerun): Sharpened by Flame", "zh": "联动复刻寻访（怪物猎人 第一期）"},
    start: "2026-11-30", end: "2026-12-14", status: "projected",
    featured: [
      { name: "Kirin R Yato", zh: "麒麟R夜刀", img: "arknights/kirin-r-yato" },
      { name: "Rathalos S Noir Corne", zh: "火龙S黑角", img: "arknights/rathalos-s-noir-corne" },
    ],
    note: {"en": "Projected from CN (2026-06-15) + ~168-day Global offset.", "zh": "按国服日期+约168天推算。"},
  },
  {
    game: "arknights_en", label: {"en": "Joint Operation 22", "zh": "联合行动 22"},
    start: "2026-12-11", end: "2026-12-25", status: "projected",
    featured: [
      { name: "Ines", zh: "伊内丝", img: "arknights/ines" },
      { name: "Ho'olheyak", zh: "霍尔海雅", img: "arknights/hoolheyak" },
      { name: "Nasti", zh: "娜斯提", img: "arknights/nasti" },
      { name: "Lemuen", zh: "蕾缪安", img: "arknights/lemuen" },
      { name: "Ripresa", zh: "复奏", img: "arknights/ripresa" },
      { name: "Melanite", zh: "玫拉", img: "arknights/melanite" },
      { name: "Santalla", zh: "寒檀", img: "arknights/santalla" },
      { name: "Snow Hunter", zh: "雪猎", img: "arknights/snow-hunter" },
      { name: "Gracebearer", zh: "聆音", img: "arknights/gracebearer" },
      { name: "Firewhistle", zh: "火哨", img: "arknights/firewhistle" },
    ],
    note: {"en": "Projected from CN (2026-06-26, with CC#5). Roster may change on Global.", "zh": "按国服推算，阵容可能调整。"},
  },
  {
    game: "arknights_en", label: {"en": "Special Headhunting: Deterministic Chaos", "zh": "限时寻访「Deterministic Chaos」"},
    start: "2026-12-25", end: "2027-01-08", status: "projected",
    featured: [
      { name: "Aphrissa", zh: "谬因", img: "arknights/aphrissa", isNew: true },
      { name: "Pedro", zh: "佩德洛", img: "arknights/pedro", isNew: true },
      { name: "Wulfenite", zh: "钼铅", img: "arknights/wulfenite" },
    ],
    note: {"en": "Projected from CN (2026-07-10).", "zh": "按国服推算。"},
  },
  {
    game: "arknights_en", label: {"en": "Rerun Headhunting: Dithyramb Unending", "zh": "复刻寻访「Dithyramb Unending」"},
    start: "2027-01-04", end: "2027-01-18", status: "projected",
    featured: [
      { name: "Tragodia", zh: "酒神", img: "arknights/tragodia" },
      { name: "Tippi", zh: "蒂比", img: "arknights/tippi" },
      { name: "Alanna", zh: "阿兰娜", img: "arknights/alanna" },
    ],
    note: {"en": "Projected from CN (2026-07-20).", "zh": "按国服推算。"},
  },

  /* ───────────── Princess Connect! Re:Dive (JP / CN) ───────────── */
  {
    game: "pcr_jp", label: { en: "Pick-up", zh: "UP卡池" },
    start: "2026-10-31", end: "2026-11-30", status: "confirmed",
    featured: [{ name: "Almond Eye", zh: "杏目", img: "pcr/almond-eye", isNew: true }],
    note: { en: "Uma Musume collab (limited)", zh: "赛马娘联动（限定）" },
  },
  {
    game: "pcr_jp", label: { en: "Pick-up", zh: "UP卡池" },
    start: "2026-11-10", end: "2026-11-30", status: "confirmed",
    featured: [{ name: "Lucky Lilac", zh: "旺紫丁", img: "pcr/lucky-lilac", isNew: true }],
    note: { en: "Uma Musume collab (limited)", zh: "赛马娘联动（限定）" },
  },
  {
    game: "pcr_jp", label: { en: "Pick-up", zh: "UP卡池" },
    start: "2026-11-16", end: "2026-11-30", status: "projected",
    featured: [{ name: "Daring Tact", zh: "谋勇兼备", isNew: true }],
    note: { en: "Uma Musume collab (limited); start date estimated", zh: "赛马娘联动（限定），开始日期为预估" },
  },
  {
    game: "pcr_cn", label: { en: "Princess Fes", zh: "公主庆典" },
    start: "2026-10-30", end: "2026-11-06", status: "projected",
    featured: [{ name: "Arachne", zh: "阿拉克涅", img: "pcr/arachne", isNew: true }],
    note: { en: "Limited; end date estimated", zh: "期间限定，结束日期为预估" },
  },
  {
    game: "pcr_cn", label: { en: "Pick-up", zh: "精选扭蛋" },
    start: "2026-11-02", end: "2026-11-12", status: "projected",
    featured: [{ name: "Kasumi (Sister)", zh: "香澄（修女）", img: "pcr/kasumi-sister", isNew: true }],
    note: { en: "Limited; end date estimated", zh: "期间限定，结束日期为预估" },
  },
  {
    game: "pcr_cn", label: { en: "Pick-up", zh: "精选扭蛋" },
    start: "2026-11-13", end: "2026-11-27", status: "projected",
    featured: [{ name: "Nana", zh: "纳娜", img: "pcr/nana", isNew: true }],
    note: { en: "New character; end date estimated", zh: "新角色，结束日期为预估" },
  },

  /* ───────────── Project Sekai (JP / EN) — from the Sekai-World master data ───────────── */
  {
    game: "pjsk_jp", label: {"en": "Event Pick-Up", "zh": "活动招募"},
    start: "2026-10-31", end: "2026-11-11", status: "confirmed",
    featured: [
      { name: "Kanade Yoisaki", zh: "宵崎奏", img: "pjsk/1489", isNew: true },
      { name: "Mafuyu Asahina", zh: "朝比奈真冬", img: "pjsk/1490", isNew: true },
      { name: "Luka Megurine", zh: "巡音流歌", img: "pjsk/1491", isNew: true },
    ],
    note: {"en": "Lit in the Dark", "zh": "Lit in the Dark"},
  },
  {
    game: "pjsk_jp", label: {"en": "Birthday", "zh": "生日招募"},
    start: "2026-11-01", end: "2026-11-07", status: "confirmed",
    featured: [
      { name: "MEIKO", zh: "MEIKO", img: "pjsk/1494", isNew: true },
    ],
    note: {"en": "MEIKO Happy Anniversary 2026", "zh": "MEIKO 周年纪念 2026"},
  },
  {
    game: "pjsk_jp", label: {"en": "Birthday", "zh": "生日招募"},
    start: "2026-11-08", end: "2026-11-14", status: "confirmed",
    featured: [
      { name: "Akito Shinonome", zh: "东云彰人", img: "pjsk/1495", isNew: true },
    ],
    note: {"en": "Akito Shinonome Happy Birthday 2026", "zh": "东云彰人 生日 2026"},
  },
  {
    game: "pjsk_jp", label: {"en": "Event Pick-Up", "zh": "活动招募"},
    start: "2026-11-11", end: "2026-11-20", status: "confirmed",
    featured: [
      { name: "Shizuku Hinomori", zh: "日野森雫", img: "pjsk/1496", isNew: true },
      { name: "Airi Momoi", zh: "桃井爱莉", img: "pjsk/1497", isNew: true },
      { name: "Rin Kagamine", zh: "镜音铃", img: "pjsk/1498", isNew: true },
    ],
    note: {"en": "Captivate YOU!", "zh": "Captivate YOU!"},
  },
  {
    game: "pjsk_jp", label: {"en": "Limited Rerun", "zh": "限定复刻招募"},
    start: "2026-11-12", end: "2026-11-21", status: "confirmed",
    featured: [
      { name: "Ena Shinonome", zh: "东云绘名", img: "pjsk/1272" },
      { name: "Kanade Yoisaki", zh: "宵崎奏", img: "pjsk/1273" },
      { name: "KAITO", zh: "KAITO", img: "pjsk/1274" },
    ],
    note: {"en": "Hues of the Self (limited cards)", "zh": "Hues of the Self（期间限定卡）"},
  },
  {
    game: "pjsk_jp", label: {"en": "Limited Rerun", "zh": "限定复刻招募"},
    start: "2026-11-12", end: "2026-11-21", status: "confirmed",
    featured: [
      { name: "Saki Tenma", zh: "天马咲希", img: "pjsk/1127" },
      { name: "Emu Otori", zh: "凤笑梦", img: "pjsk/1128" },
      { name: "Rin Kagamine", zh: "镜音铃", img: "pjsk/1129" },
    ],
    note: {"en": "Eternal Combat Guardians (limited cards)", "zh": "果てなき護るための戦い（期间限定卡）"},
  },
  {
    game: "pjsk_en", label: {"en": "Limited", "zh": "限定招募"},
    start: "2026-10-31", end: "2026-11-10", status: "confirmed",
    featured: [
      { name: "Ena Shinonome", zh: "东云绘名", img: "pjsk/1272", isNew: true },
      { name: "Kanade Yoisaki", zh: "宵崎奏", img: "pjsk/1273", isNew: true },
      { name: "KAITO", zh: "KAITO", img: "pjsk/1274", isNew: true },
    ],
    note: {"en": "Hues of the Self (limited cards)", "zh": "Hues of the Self（期间限定卡）"},
  },
  {
    game: "pjsk_en", label: {"en": "Birthday", "zh": "生日招募"},
    start: "2026-11-01", end: "2026-11-08", status: "confirmed",
    featured: [
      { name: "MEIKO", zh: "MEIKO", img: "pjsk/1277", isNew: true },
    ],
    note: {"en": "MEIKO Happy Anniversary 2026", "zh": "MEIKO 周年纪念 2026"},
  },
  {
    game: "pjsk_en", label: {"en": "Limited Rerun", "zh": "限定复刻招募"},
    start: "2026-11-05", end: "2026-11-14", status: "confirmed",
    featured: [
      { name: "Saki Tenma", zh: "天马咲希", img: "pjsk/1022" },
      { name: "Ichika Hoshino", zh: "星乃一歌", img: "pjsk/1023" },
      { name: "Honami Mochizuki", zh: "望月穗波", img: "pjsk/1024" },
    ],
    note: {"en": "Musical Street Corner (limited cards)", "zh": "Musical Street Corner（期间限定卡）"},
  },
  {
    game: "pjsk_en", label: {"en": "Birthday", "zh": "生日招募"},
    start: "2026-11-08", end: "2026-11-15", status: "confirmed",
    featured: [
      { name: "Akito Shinonome", zh: "东云彰人", img: "pjsk/1278", isNew: true },
    ],
    note: {"en": "Akito Shinonome Happy Birthday 2026", "zh": "东云彰人 生日 2026"},
  },
  {
    game: "pjsk_en", label: {"en": "Event Pick-Up", "zh": "活动招募"},
    start: "2026-11-10", end: "2026-11-20", status: "confirmed",
    featured: [
      { name: "Nene Kusanagi", zh: "草薙宁宁", img: "pjsk/1279", isNew: true },
      { name: "Emu Otori", zh: "凤笑梦", img: "pjsk/1280", isNew: true },
      { name: "Rin Kagamine", zh: "镜音铃", img: "pjsk/1281", isNew: true },
    ],
    note: {"en": "Get My Bright Wings", "zh": "Get My Bright Wings"},
  },
  {
    game: "pjsk_en", label: {"en": "Limited Rerun", "zh": "限定复刻招募"},
    start: "2026-11-14", end: "2026-11-23", status: "confirmed",
    featured: [
      { name: "An Shiraishi", zh: "白石杏", img: "pjsk/915" },
      { name: "Kohane Azusawa", zh: "小豆泽心羽", img: "pjsk/916" },
      { name: "Toya Aoyagi", zh: "青柳冬弥", img: "pjsk/917" },
    ],
    note: {"en": "Eternal Bout (limited cards)", "zh": "Eternal Bout（期间限定卡）"},
  },
  {
    game: "pjsk_en", label: {"en": "Event Pick-Up", "zh": "活动招募"},
    start: "2026-11-20", end: "2026-11-30", status: "confirmed",
    featured: [
      { name: "Akito Shinonome", zh: "东云彰人", img: "pjsk/1284", isNew: true },
      { name: "Kohane Azusawa", zh: "小豆泽心羽", img: "pjsk/1285", isNew: true },
      { name: "An Shiraishi", zh: "白石杏", img: "pjsk/1286", isNew: true },
    ],
    note: {"en": "Good to Go!", "zh": "Good to Go!"},
  },
  {
    game: "pjsk_en", label: {"en": "Limited", "zh": "限定招募"},
    start: "2026-11-30", end: "2026-12-10", status: "confirmed",
    featured: [
      { name: "Saki Tenma", zh: "天马咲希", img: "pjsk/1289", isNew: true },
      { name: "Ichika Hoshino", zh: "星乃一歌", img: "pjsk/1290", isNew: true },
      { name: "Honami Mochizuki", zh: "望月穗波", img: "pjsk/1291", isNew: true },
    ],
    note: {"en": "Longing Star Chasers (limited cards)", "zh": "Longing Star Chasers（期间限定卡）"},
  },
  {
    game: "pjsk_en", label: {"en": "Birthday", "zh": "生日招募"},
    start: "2026-12-02", end: "2026-12-09", status: "confirmed",
    featured: [
      { name: "Shizuku Hinomori", zh: "日野森雫", img: "pjsk/1294", isNew: true },
    ],
    note: {"en": "Shizuku Hinomori Happy Birthday 2026", "zh": "日野森雫 生日 2026"},
  },

  /* ───────────── Reverse: 1999 (Global) — from the Reverse: 1999 fandom wiki ───────────── */
  {
    game: "r1999", label: {"en": "Version 3.8", "zh": "3.8版本"},
    start: "2026-10-15", end: "2026-11-04", status: "confirmed",
    featured: [
      { name: "Cornerstone", zh: "奠基石", img: "r1999/cornerstone", isNew: true },
      { name: "Diggers", zh: "挖掘艺术", img: "r1999/diggers" },
      { name: "Desert Flannel", zh: "沙丝绒", img: "r1999/desert-flannel" },
    ],
    note: {"en": "The Future's Foundation", "zh": "奠基石 限时征集"},
  },
  {
    game: "r1999", label: {"en": "Rerun", "zh": "复刻征集"},
    start: "2026-10-20", end: "2026-11-02", status: "confirmed",
    featured: [
      { name: "Aleph", zh: "阿莱夫", img: "r1999/aleph" },
      { name: "Kanjira", zh: "坎吉拉", img: "r1999/kanjira" },
      { name: "Loggerhead", zh: "空脑袋", img: "r1999/loggerhead" },
    ],
    note: {"en": "The Shattered Product", "zh": "阿莱夫 复刻征集"},
  },
  {
    game: "r1999", label: {"en": "Rerun", "zh": "复刻征集"},
    start: "2026-11-03", end: "2026-11-16", status: "confirmed",
    featured: [
      { name: "Ulrich", zh: "乌尔里希", img: "r1999/ulrich" },
      { name: "Charlie", zh: "夏利", img: "r1999/charlie" },
      { name: "Sweetheart", zh: "玛丽莲", img: "r1999/sweetheart" },
    ],
    note: {"en": "Cognitive Dynamics", "zh": "乌尔里希 复刻征集"},
  },
  {
    game: "r1999", label: {"en": "Version 3.9", "zh": "3.9版本"},
    start: "2026-11-05", end: "2026-11-25", status: "confirmed",
    featured: [
      { name: "Hedone", zh: "赫多涅", img: "r1999/hedone", isNew: true },
      { name: "Blonney", zh: "金蜜儿", img: "r1999/blonney" },
      { name: "Ulu", zh: "和平乌鲁", img: "r1999/ulu" },
    ],
    note: {"en": "The Reign of Flames Undying", "zh": "赫多涅 限时征集"},
  },
  {
    game: "r1999", label: {"en": "Rerun", "zh": "复刻征集"},
    start: "2026-11-17", end: "2026-11-30", status: "projected",
    featured: [
      { name: "Brume", zh: "灰调蓝", img: "r1999/brume" },
      { name: "Horropedia", zh: "恐怖通", img: "r1999/horropedia" },
      { name: "Name Day", zh: "命名日", img: "r1999/name-day" },
    ],
    note: {"en": "The Brilliance Within", "zh": "灰调蓝 复刻征集"},
  },
  {
    game: "r1999", label: {"en": "Version 3.9", "zh": "3.9版本"},
    start: "2026-11-26", end: "2026-12-16", status: "confirmed",
    featured: [
      { name: "Narcissus", zh: "纳西索斯", img: "r1999/narcissus", isNew: true },
      { name: "Avgust", zh: "阿夫西维", img: "r1999/avgust" },
      { name: "X", zh: "X", img: "r1999/x" },
    ],
    note: {"en": "Lend an Ear to the Pond", "zh": "纳西索斯 限时征集"},
  },
  {
    game: "r1999", label: {"en": "Rerun", "zh": "复刻征集"},
    start: "2026-12-01", end: "2026-12-14", status: "projected",
    featured: [
      { name: "Enigma", zh: "哑谜", img: "r1999/enigma" },
      { name: "Brimley", zh: "宽檐帽", img: "r1999/brimley" },
      { name: "Balloon Party", zh: "气球派对", img: "r1999/balloon-party" },
    ],
    note: {"en": "Deciphering Reality", "zh": "哑谜 复刻征集"},
  },
  {
    game: "r1999", label: {"en": "Rerun", "zh": "复刻征集"},
    start: "2026-12-15", end: "2026-12-28", status: "projected",
    featured: [
      { name: "Flutterpage", zh: "纸信圈儿", img: "r1999/flutterpage" },
      { name: "Necrologist", zh: "讣告人", img: "r1999/necrologist" },
      { name: "Satsuki", zh: "五色月", img: "r1999/satsuki" },
    ],
    note: {"en": "The Book of Whys", "zh": "纸信圈儿 复刻征集"},
  },
  {
    game: "r1999", label: {"en": "Version 4.0", "zh": "4.0版本"},
    start: "2026-12-17", end: "2027-01-06", status: "projected",
    featured: [
      { name: "Huntsworn Lilya", zh: "狩勋女巫红弩箭", img: "r1999/huntsworn-lilya", isNew: true },
    ],
    note: {"en": "Projected from the CN 4.0 schedule", "zh": "据国服4.0推算"},
  },
  {
    game: "r1999", label: {"en": "Version 4.0", "zh": "4.0版本"},
    start: "2027-01-07", end: "2027-01-27", status: "projected",
    featured: [
      { name: "Drake", zh: "德雷克", img: "r1999/drake", isNew: true },
    ],
    note: {"en": "Projected from the CN 4.0 schedule", "zh": "据国服4.0推算"},
  },

  /* ───────────── hololive Dreams — from Game8 (JP) ───────────── */
  {
    game: "holodori", label: { en: "Limited", zh: "限定卡池" },
    start: "2026-11-06", end: "2026-11-14", status: "confirmed",
    featured: [
      { name: "Ayunda Risu", img: "holodori/ayunda-risu", isNew: true },
      { name: "Moona Hoshinova", img: "holodori/moona-hoshinova", isNew: true },
      { name: "Airani Iofifteen", img: "holodori/airani-iofifteen", isNew: true },
    ],
    note: { en: "Cozy Chill Time (AREA15 pajamas)", zh: "ぬくもりのチルタイム（AREA15 睡衣）" },
  },
  {
    game: "holodori", label: { en: "Limited", zh: "限定卡池" },
    start: "2026-11-14", end: "2026-11-26", status: "confirmed",
    featured: [
      { name: "IRyS", img: "holodori/irys", isNew: true },
      { name: "Usada Pekora", zh: "兔田佩克拉", img: "holodori/usada-pekora", isNew: true },
      { name: "Roboco", zh: "萝卜子", img: "holodori/roboco-san", isNew: true },
      { name: "Momosuzu Nene", zh: "桃铃音音", img: "holodori/momosuzu-nene", isNew: true },
      { name: "Pavolia Reine", img: "holodori/pavolia-reine", isNew: true },
    ],
    note: { en: "Autumn Outing (autumn outfits)", zh: "うららかな秋におでかけ（秋装）" },
  },

  /* ───────────── Azur Lane (EN / CN) — events now release on both servers together ───────────── */
  {
    game: "azurlane_en", label: { en: "Event construction", zh: "限时建造" },
    start: "2026-10-22", end: "2026-11-04", status: "confirmed",
    featured: [
      { name: "Merkuriy", zh: "水星号", img: "azurlane/merkuriy", isNew: true },
      { name: "Selimiye", zh: "塞利米耶号", img: "azurlane/selimiye", isNew: true },
      { name: "Ormrinn Langi", zh: "长蛇号", img: "azurlane/ormrinn-langi", isNew: true },
      { name: "Járnbarðinn", zh: "铁角号", img: "azurlane/jarnbardinn", isNew: true },
    ],
    note: { en: "Tempesta and the Corridor of Fog", zh: "飓风与雾霭回廊" },
  },
  {
    game: "azurlane_cn", label: { en: "Event construction", zh: "限时建造" },
    start: "2026-10-22", end: "2026-11-05", status: "confirmed",
    featured: [
      { name: "Merkuriy", zh: "水星号", img: "azurlane/merkuriy", isNew: true },
      { name: "Selimiye", zh: "塞利米耶号", img: "azurlane/selimiye", isNew: true },
      { name: "Ormrinn Langi", zh: "长蛇号", img: "azurlane/ormrinn-langi", isNew: true },
      { name: "Járnbarðinn", zh: "铁角号", img: "azurlane/jarnbardinn", isNew: true },
    ],
    note: { en: "Tempesta and the Corridor of Fog", zh: "飓风与雾霭回廊" },
  },
  {
    game: "azurlane_en", label: { en: "Event construction", zh: "限时建造" },
    start: "2026-12-17", end: "2027-01-06", status: "projected",
    featured: [{ name: "TBA" }],
    note: { en: "New Year UR event (ships not announced yet)", zh: "新年UR大型活动（舰船待公布）" },
  },
  {
    game: "azurlane_cn", label: { en: "Event construction", zh: "限时建造" },
    start: "2026-12-17", end: "2027-01-07", status: "projected",
    featured: [{ name: "TBA" }],
    note: { en: "New Year UR event (ships not announced yet)", zh: "新年UR大型活动（舰船待公布）" },
  },

  /* ───────────── BanG Dream! Our Notes (Global) ───────────── */
  {
    game: "ournotes", label: { en: "Halloween limited", zh: "万圣节限定" },
    start: "2026-10-28", end: "2026-11-07", status: "confirmed",
    featured: [{ name: "Taki Shiina", zh: "椎名立希", isNew: true }, { name: "Uika Misumi", zh: "三角初华", isNew: true }],
  },
  {
    game: "ournotes", label: { en: "Mugendai MewType anniversary", zh: "梦限大MewType 周年" },
    start: "2026-11-18", end: "2026-11-20", status: "projected",
    featured: [{ name: "TBA" }],
    note: { en: "Anniversary campaign; gacha lineup not announced yet", zh: "周年活动，卡池阵容尚未公布" },
  },
];

window.LAST_UPDATED = "2026-11-15";
