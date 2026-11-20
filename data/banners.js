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
 *   featured list of rate-up units: { name, zh?, img?, icon?, isNew?, element?, note? }
 *              icon = true for emblems (e.g. FGO class icons) shown whole instead of cropped
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
  gfl2_cn:  { name: { en: "Girls' Frontline 2 (CN)", zh: "少女前线2：追放（国服）" }, server: "CN", glyph: "追", icon: "assets/icons/gfl2_cn.webp", color: "#f2707d", short: "GFL2-CN" },
  gfl2:     { name: { en: "Girls' Frontline 2 (Global)", zh: "少女前线2：追放（国际服）" }, server: "EN", glyph: "追", icon: "assets/icons/gfl2.webp", color: "#ef4f5f", short: "GFL2" },
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


window.BANNERS = [
  /* ───────────── Genshin Impact ───────────── */
  {
    game: "genshin", version: "7.2", phase: 1,
    start: "2026-11-04", end: "2026-11-23", status: "confirmed",
    featured: [
      { name: "Mitya", zh: "米提亚", img: "genshin/mitya", isNew: true, element: "electro" },
      { name: "Furina", zh: "芙宁娜", img: "genshin/furina", element: "hydro" },
    ],
    weapons: ["Starsealed Edict", "Splendor of Tranquil Waters"],
    note: {en: "New version launch · ends Nov 24, 17:59", zh: "新版本上线 · 11月24日17:59结束"},
  },
  {
    game: "genshin", version: "7.2", phase: 2,
    start: "2026-11-24", end: "2026-12-15", status: "confirmed",
    featured: [
      { name: "Linnea", zh: "莉奈娅", img: "genshin/linnea", element: "geo" },
      { name: "Zibai", zh: "兹白", img: "genshin/zibai", element: "geo" },
    ],
    weapons: ["Lightbearing Moonshard", "Golden Frostbound Oath"],
    note: {en: "Rerun banners · Chronicled Wish: Varesa, Chasca, Xilonen, Mualani, Kinich", zh: "复刻卡池 · 集录祈愿：瓦蕾莎、恰斯卡、希诺宁、玛拉妮、基尼奇"},
  },
  {
    game: "genshin", version: "7.3", phase: 1,
    start: "2026-12-16", end: "2027-01-04", status: "leak",
    featured: [
      { name: "Anastasya", zh: "安娜丝塔夏", img: "genshin/tsaritsa", isNew: true, element: "cryo", note: {en: "the Tsaritsa", zh: "冰之女皇"} },
      { name: "Danica", zh: "达妮卡", img: "genshin/danica", isNew: true, element: "electro" },
    ],
    note: {en: "New version launch (date estimated; lineup from leaks, characters officially revealed)", zh: "新版本上线（日期为预计；卡池来自爆料，角色已官方公布）"},
  },
  {
    game: "genshin", version: "7.3", phase: 2,
    start: "2027-01-05", end: "2027-01-26", status: "leak",
    featured: [
      { name: "Sandrone", zh: "桑多涅", img: "genshin/sandrone", element: "cryo" },
      { name: "Lohen", zh: "洛恩", img: "genshin/lohen", element: "cryo" },
    ],
    note: {en: "Rerun banners (leak)", zh: "复刻卡池（爆料）"},
  },
  {
    game: "genshin", version: "7.4", phase: 1,
    start: "2027-01-27", end: "2027-02-16", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "New version launch", zh: "新版本上线"},
  },

  /* ───────────── Honkai: Star Rail ───────────── */
  {
    game: "hsr", version: "4.6", phase: 2,
    start: "2026-10-21", end: "2026-11-10", status: "confirmed",
    featured: [{ name: "Mortenax Blade", zh: "千冶•刃", img: "hsr/mortenax-blade", element: "fire" }],
    weapons: ["Reforged in Hellfire"],
    note: {en: "Rerun · Pearl's 4.6 banner also ran until Nov 10", zh: "复刻 · 4.6版本Pearl卡池同样持续至11月10日"},
  },
  {
    game: "hsr", version: "4.7", phase: 1,
    start: "2026-11-11", end: "2026-12-01", status: "confirmed",
    featured: [
      { name: "Aha", zh: "阿哈", img: "hsr/aha", isNew: true, element: "quantum", note: {en: "banner runs until Dec 22", zh: "卡池持续至12月22日"} },
      { name: "Silver Wolf LV.999", zh: "银狼LV.999", img: "hsr/silver-wolf-lv999" },
      { name: "Sparxie", zh: "火花", img: "hsr/sparxie" },
      { name: "Yao Guang", zh: "爻光", img: "hsr/yao-guang" },
    ],
    weapons: ["Upon the First Echo of \"Aha\"", "Welcome to the Cosmic City", "Dazzled by a Flowery World", "When She Decided to See"],
    note: {en: "New version launch", zh: "新版本上线"},
  },
  {
    game: "hsr", version: "4.7", phase: 2,
    start: "2026-12-02", end: "2026-12-22", status: "confirmed",
    featured: [
      { name: "Acheron", zh: "黄泉", img: "hsr/acheron", element: "lightning" },
      { name: "Dan Heng • Imbibitor Lunae", zh: "丹恒•饮月", img: "hsr/dan-heng-il", element: "imaginary" },
      { name: "Jing Yuan", zh: "景元", img: "hsr/jing-yuan", element: "lightning" },
    ],
    weapons: ["Along the Passing Shore", "Brighter Than the Sun", "Before Dawn"],
    note: {en: "Rerun banners · Aha's banner continues", zh: "复刻卡池 · 阿哈卡池继续开放"},
  },
  {
    game: "hsr", version: "4.8", phase: 1,
    start: "2026-12-23", end: "2027-01-12", status: "projected",
    featured: [{ name: "Ellen", zh: "艾莲", img: "zzz/ellen-joe", isNew: true, element: "ice" }],
    note: {en: "ZZZ crossover (characters official; phase split expected)", zh: "绝区零联动（角色已官宣，分期为预计）"},
  },
  {
    game: "hsr", version: "4.8", phase: 2,
    start: "2027-01-13", end: "2027-02-02", status: "projected",
    featured: [{ name: "Astra Yao", zh: "耀嘉音", img: "zzz/astra-yao", isNew: true, element: "quantum" }],
    note: {en: "ZZZ crossover (phase split expected)", zh: "绝区零联动（分期为预计）"},
  },

  /* ───────────── Zenless Zone Zero ───────────── */
  {
    game: "zzz", version: "3.3", phase: 1,
    start: "2026-10-21", end: "2026-11-10", status: "confirmed",
    featured: [
      { name: "Phoenix", zh: "菲欧妮", img: "zzz/phoenix", isNew: true },
      { name: "Velina", zh: "维琳娜", img: "zzz/velina" },
    ],
    weapons: ["Plume of Rebirth", "Joyau Dore"],
    note: {en: "New version launch", zh: "新版本上线"},
  },
  {
    game: "zzz", version: "3.3", phase: 2,
    start: "2026-11-11", end: "2026-12-01", status: "confirmed",
    featured: [
      { name: "Severian", zh: "赛维里安", img: "zzz/severian", isNew: true, element: "wind" },
      { name: "Norma", zh: "诺姆", img: "zzz/norma" },
    ],
    weapons: ["Incarcerating Grip", "Chief Sidekick"],
  },
  {
    game: "zzz", version: "3.4", phase: 1,
    start: "2026-12-02", end: "2027-01-12", status: "confirmed",
    featured: [
      { name: "Sunbringer", zh: "挽昼", img: "zzz/sunbringer", isNew: true },
      { name: "Robin", zh: "知更鸟", img: "hsr/robin", isNew: true, note: {en: "free via login event", zh: "登录活动免费领取"} },
    ],
    weapons: ["Dragonfire Mirage", "Iridescent Starsong"],
    note: {en: "New version launch · both banners last the whole version · HSR crossover", zh: "新版本上线 · 两个卡池持续整个版本 · 星铁联动"},
  },
  {
    game: "zzz", version: "3.4", phase: 2,
    start: "2027-01-01", end: "2027-01-21", status: "confirmed",
    featured: [
      { name: "Kafka", zh: "卡芙卡", img: "hsr/kafka", isNew: true },
      { name: "Alice", zh: "爱丽丝", img: "zzz/alice", note: {en: "rerun until Jan 12", zh: "复刻至1月12日"} },
    ],
    weapons: ["Requiem Araneae", "Practiced Perfection"],
    note: {en: "HSR crossover · Kafka until Jan 21", zh: "星铁联动 · 卡芙卡卡池至1月21日"},
  },
  {
    game: "zzz", version: "3.5", phase: 1,
    start: "2027-01-13", end: "2027-02-02", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "New version launch", zh: "新版本上线"},
  },

  /* ───────────── Wuthering Waves ───────────── */
  {
    game: "wuwa", version: "3.7", phase: 2,
    start: "2026-10-22", end: "2026-11-11", status: "confirmed",
    featured: [
      { name: "Suoming", zh: "锁暝", img: "wuwa/suoming", isNew: true },
      { name: "Lucilla", zh: "洛瑟菈", img: "wuwa/lucilla" },
      { name: "Lynae", zh: "琳奈", img: "wuwa/lynae", element: "spectro" },
    ],
    weapons: ["Unspoken Rue", "Freeze Frame", "Spectrum Blaster"],
  },
  {
    game: "wuwa", version: "3.8", phase: 1,
    start: "2026-11-12", end: "2026-12-02", status: "confirmed",
    featured: [
      { name: "Lily", zh: "莉莉", img: "wuwa/lily", isNew: true, element: "spectro" },
      { name: "Sigrika", zh: "西格莉卡", img: "wuwa/sigrika" },
      { name: "Qiuyuan", zh: "仇远", img: "wuwa/qiuyuan" },
    ],
    weapons: ["Lullaby", "Emerald Sentence", "Solsworn Ciphers"],
    note: {en: "New version launch", zh: "新版本上线"},
  },
  {
    game: "wuwa", version: "3.8", phase: 2,
    start: "2026-12-03", end: "2026-12-20", status: "confirmed",
    featured: [
      { name: "Yangyang: Xuanling", zh: "秧秧·玄翎", img: "wuwa/yangyang-xuanling" },
      { name: "Suisui", zh: "穗穗", img: "wuwa/suisui" },
      { name: "Hiyuki", zh: "绯雪", img: "wuwa/hiyuki" },
    ],
    weapons: ["Azure Oath", "Frostburn", "Firstlight's Herald"],
    note: {en: "Rerun banners", zh: "复刻卡池"},
  },
  {
    game: "wuwa", version: "3.9", phase: 1,
    start: "2026-12-21", end: "2027-01-10", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "New version launch", zh: "新版本上线"},
  },
  {
    game: "wuwa", version: "3.9", phase: 2,
    start: "2027-01-11", end: "2027-01-31", status: "projected",
    featured: [{ name: "TBA" }],
  },

  /* ───────────── Arknights: Endfield ───────────── */
  {
    game: "endfield", version: "1.6", phase: 1,
    start: "2026-10-15", end: "2026-11-04", status: "confirmed",
    featured: [{ name: "Si", zh: "祀", img: "endfield/si", isNew: true }],
    note: {en: "New version launch", zh: "新版本上线"},
  },
  {
    game: "endfield", version: "1.6",
    start: "2026-10-29", end: "2026-11-19", status: "confirmed",
    featured: [{ name: "Tangtang", zh: "汤汤", img: "endfield/tangtang" }],
    note: {en: "Rerun: Ancestral Spring Flows Anew", zh: "复刻卡池"},
  },
  {
    game: "endfield", version: "1.6", phase: 2,
    start: "2026-11-05", end: "2026-11-24", status: "confirmed",
    featured: [{ name: "Argent Flow", zh: "明河", img: "endfield/argent-flow", isNew: true }],
    weapons: ["Lunar Calling"],
    note: {en: "Chartered Headhunting: The Hearth Fire Beckons the Starry Flow"},
  },
  {
    game: "endfield", version: "1.7", phase: 1,
    start: "2026-11-25", end: "2026-12-15", status: "projected",
    featured: [{ name: "Kay", img: "endfield/kay", isNew: true }],
    note: {en: "New version launch", zh: "新版本上线"},
  },
  {
    game: "endfield", version: "1.7", phase: 2,
    start: "2026-12-16", end: "2027-01-05", status: "projected",
    featured: [{ name: "TBA" }],
  },
  {
    game: "endfield", version: "1.8", phase: 1,
    start: "2027-01-06", end: "2027-01-26", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "New version launch", zh: "新版本上线"},
  },

  /* ───────────── Neverness to Everness ───────────── */
  {
    game: "nte", version: "1.4", phase: 2,
    start: "2026-10-21", end: "2026-11-10", status: "confirmed",
    featured: [{ name: "Akane Rin", zh: "明音凛", img: "nte/akane-rin", isNew: true }],
    note: {en: "Dazzling Star", zh: "Dazzling Star"},
  },
  {
    game: "nte", version: "1.5", phase: 1,
    start: "2026-11-11", end: "2026-12-01", status: "confirmed",
    featured: [
      { name: "Elyms", zh: "曳尔沐", img: "nte/elyms", isNew: true },
      { name: "Shinku", zh: "真红", img: "nte/shinku" },
    ],
    weapons: ["Echoes on Hold", "Blushing Mirage"],
    note: {en: "New version launch", zh: "新版本上线"},
  },
  {
    game: "nte", version: "1.5", phase: 2,
    start: "2026-12-02", end: "2026-12-22", status: "confirmed",
    featured: [
      { name: "Exe", img: "nte/exe", isNew: true },
      { name: "Chaos", zh: "卡厄斯", img: "nte/chaos" },
    ],
    note: {en: "Announced in the 1.5 preview; Chaos is a rerun (Forsaken Path)", zh: "1.5版本前瞻公布；卡厄斯为复刻"},
  },
  {
    game: "nte", version: "1.6", phase: 1,
    start: "2026-12-23", end: "2027-01-12", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "New version launch", zh: "新版本上线"},
  },
  {
    game: "nte", version: "1.6", phase: 2,
    start: "2027-01-13", end: "2027-02-02", status: "projected",
    featured: [{ name: "TBA" }],
  },

  /* ───────────── Girls' Frontline 2 (CN) ───────────── */
  {
    game: "gfl2_cn", label: {en: "Targeted Procurement", zh: "定向采购"},
    start: "2026-11-03", end: "2026-11-23", status: "confirmed",
    featured: [
      { name: "Destroyer", zh: "破坏者", img: "gfl2/destroyer", isNew: true },
      { name: "Cecilia", zh: "希丽雅", img: "gfl2/cecilia" },
      { name: "Soppo", zh: "索普", img: "gfl2/soppo" },
      { name: "Suomi", zh: "索米", img: "gfl2/suomi" },
    ],
    note: {en: "Heat Death Paradox", zh: "热寂悖论"},
  },
  {
    game: "gfl2_cn", label: {en: "Targeted Procurement", zh: "定向采购"},
    start: "2026-11-24", end: "2026-12-14", status: "projected",
    featured: [{ name: "Kuro", zh: "卡萝", img: "gfl2/kuro", isNew: true }],
    note: {en: "New doll Kuro revealed Nov 18; banner dates estimated (previous banner ends Nov 24 08:59)", zh: "新人形卡萝已于11月18日公布；日期为推测（上期11月24日08:59结束）"},
  },
  {
    game: "gfl2_cn", label: {en: "Collab", zh: "联动"},
    start: "2026-12-15", end: "2027-01-04", status: "projected",
    featured: [
      { name: "Rikka Takarada", zh: "宝多六花", img: "gfl2/rikka-takarada", isNew: true },
      { name: "Akane Shinjo", zh: "新条茜", img: "gfl2/akane-shinjo", isNew: true },
    ],
    note: {en: "SSSS.GRIDMAN collab (characters revealed Nov 12; dates not yet announced, estimated)", zh: "《SSSS.古立特》联动（11月12日公布联动角色，日期未公布，为推测）"},
  },
  {
    game: "gfl2_cn", label: {en: "Targeted Procurement", zh: "定向采购"},
    start: "2027-01-05", end: "2027-01-25", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "Estimated from the usual 3-week cycle; dolls not announced", zh: "按三周节奏推测，人形待公布"},
  },

  /* ───────────── Girls' Frontline 2 (Global) ───────────── */
  {
    game: "gfl2", label: {en: "Targeted Procurement", zh: "定向采购"},
    start: "2026-10-29", end: "2026-11-18", status: "confirmed",
    featured: [
      { name: "Faelynn", zh: "芙铃", img: "gfl2/faelynn", isNew: true },
      { name: "Welrod", zh: "维尔德", img: "gfl2/welrod", isNew: true },
      { name: "Sextans", zh: "六分仪", img: "gfl2/sextans" },
      { name: "Phaetusa", zh: "翡图萨", img: "gfl2/phaetusa" },
    ],
    weapons: ["Feral Fang", "Silent Sanction", "Twilight Rose", "Cause and Effect"],
    note: {en: "Targeted Procurement & Military Upgrade (Update 10/28)", zh: "定向采购与军备提升（10/28更新）"},
  },
  {
    game: "gfl2", label: {en: "2nd Anniversary", zh: "二周年"},
    start: "2026-11-19", end: "2026-12-09", status: "confirmed",
    featured: [
      { name: "Koleda", zh: "克莱妲", img: "gfl2/koleda", isNew: true },
      { name: "Groza", zh: "OTs-14", img: "gfl2/groza" },
      { name: "Nikketa", zh: "妮基塔", img: "gfl2/nikketa" },
    ],
    weapons: ["Chernobog", "Capitoline", "Guardian Silverwing"],
    note: {en: "Iliad, Part 1 (Update 11/18)", zh: "Iliad 上篇（11/18更新）"},
  },
  {
    game: "gfl2", label: {en: "2nd Anniversary", zh: "二周年"},
    start: "2026-12-10", end: "2026-12-30", status: "leak",
    featured: [{ name: "Asteria", zh: "阿斯缇亚", img: "gfl2/asteria", isNew: true }],
    note: {en: "Iliad, Part 2 (lineup leaked; next update Dec 30)", zh: "Iliad 下篇（阵容为爆料；12月30日更新）"},
  },
  {
    game: "gfl2", label: {en: "Targeted Procurement", zh: "定向采购"},
    start: "2026-12-31", end: "2027-01-20", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "Estimated from the 3-week cycle after the Dec 30 update", zh: "按12月30日更新后三周节奏推测"},
  },

  /* ───────────── Madoka Magica Exedra ───────────── */
  {
    game: "exedra", label: {en: "Limited Kioku", zh: "限定记忆"},
    start: "2026-10-30", end: "2026-11-30", status: "confirmed",
    featured: [{ name: "Halloween Karin", zh: "万圣节花凛", img: "exedra/karin" }],
  },
  {
    game: "exedra", label: {en: "Limited Kioku", zh: "限定记忆"},
    start: "2026-11-06", end: "2026-11-30", status: "confirmed",
    featured: [{ name: "Halloween Kyoko", zh: "万圣节杏子", img: "exedra/kyoko", isNew: true }],
  },
  {
    game: "exedra", label: {en: "Limited Kioku", zh: "限定记忆"},
    start: "2026-11-16", end: "2026-12-18", status: "confirmed",
    featured: [{ name: "Lily Candy", img: "exedra/lily-candy", isNew: true }],
    note: {en: "First 30 pulls free", zh: "首次30连免费"},
  },

  /* ───────────── Uma Musume (JP) ───────────── */
  {
    game: "uma", label: {en: "Pick-up", zh: "UP卡池"},
    start: "2026-11-10", end: "2026-11-19", status: "confirmed",
    featured: [
      { name: "Yukino Bijin (new outfit)", zh: "雪之美人（新衣装）", img: "uma/yukino-bijin", isNew: true },
    ],
    weapons: [{en: "SSR No Reason", zh: "SSR 莫名其妙"}, {en: "SR Stay Gold", zh: "SR 黄金旅程"}],
  },
  {
    game: "uma", label: {en: "Limited", zh: "限定卡池"},
    start: "2026-11-16", end: "2026-12-21", status: "confirmed",
    featured: [{ name: "Daring Tact", zh: "谋勇兼备", img: "uma/daring-tact", isNew: true }],
    note: {en: "★3 [白光のレガリア] Daring Tact; ★3 rates ×1.5. Select pick-up support gacha Nov 16–30.", zh: "★3［白光のレガリア］谋勇兼备；★3出率1.5倍。自选UP支援卡卡池11月16日–30日。"},
  },

  /* ───────────── Uma Musume (Global) ───────────── */
  {
    game: "uma_gl", label: {en: "Pick-up", zh: "UP卡池"},
    start: "2026-11-05", end: "2026-11-15", status: "confirmed",
    featured: [{ name: "Daitaku Helios", zh: "大拓太阳神", img: "uma/daitaku-helios", isNew: true }],
    weapons: ["K.S. Miracle", "Aston Machan"],
  },
  {
    game: "uma_gl", label: {en: "Pick-up", zh: "UP卡池"},
    start: "2026-11-09", end: "2026-11-23", status: "confirmed",
    featured: [
      { name: "Ines Fujin (Valentine)", img: "uma/ines-fujin-valentine", isNew: true },
      { name: "Mejiro Ryan (Valentine)", zh: "目白赖恩（情人节）", img: "uma/mejiro-ryan-valentine", isNew: true },
    ],
    weapons: ["SSR Biko Pegasus", "SSR Marvelous Sunday"],
  },
  {
    game: "uma_gl", label: {en: "Pick-up", zh: "UP卡池"},
    start: "2026-11-21", end: "2026-12-02", status: "projected",
    featured: [{ name: "Shinko Windy", zh: "新光风", img: "uma/shinko-windy", isNew: true }],
    weapons: ["SSR Nishino Flower", "SSR Maruzensky"],
    note: {en: "2nd Anniversary Part 1", zh: "二周年庆典 第1弹"},
  },

  /* ───────────── Blue Archive (Global) ───────────── */
  {
    game: "bluearchive", label: {en: "Pick-Up", zh: "招募UP"},
    start: "2026-11-10", end: "2026-11-17", status: "confirmed",
    featured: [
      { name: "Makoto (Swimsuit)", zh: "真琴（泳装）", img: "ba/makoto-swimsuit", isNew: true },
      { name: "Satsuki (Swimsuit)", zh: "皋月（泳装）", img: "ba/satsuki-swimsuit", isNew: true },
    ],
    note: {en: "5th Anniversary", zh: "五周年"},
  },
  {
    game: "bluearchive", label: {en: "Fes", zh: "Fes招募"},
    start: "2026-11-17", end: "2026-11-24", status: "projected",
    featured: [
      { name: "Iroha (Swimsuit)", zh: "伊吕波（泳装）", img: "ba/iroha-swimsuit", isNew: true },
      { name: "Ibuki (Swimsuit)", zh: "伊吹（泳装）", img: "ba/ibuki-swimsuit", isNew: true },
      { name: "Rio", zh: "莉音", img: "ba/rio" },
      { name: "Neru (School)", zh: "妮露（制服）", img: "ba/neru-school" },
    ],
    note: {en: "5th Anniversary", zh: "五周年"},
  },
  {
    game: "bluearchive", label: {en: "Pick-Up", zh: "招募UP"},
    start: "2026-11-24", end: "2026-12-08", status: "projected",
    featured: [
      { name: "Sena (Casual)", zh: "濑名（便服）", img: "ba/sena-casual" },
      { name: "Juri (Part-Timer)", zh: "朱莉（打工）", img: "ba/juri-part-timer" },
      { name: "Nagusa", zh: "名草", img: "ba/nagusa" },
      { name: "Niya", zh: "尼娅", img: "ba/niya" },
    ],
    note: {en: "Rerun banners", zh: "复刻卡池"},
  },

  /* ───────────── FGO (JP) ───────────── */
  {
    game: "fgo_jp", label: {en: "Samurai Remnant rerun: Raikou / Ushi Gozen", zh: "复刻 Fate/Samurai Remnant联动 源赖光／丑御前推荐召唤"},
    start: "2026-10-16", end: "2026-11-04", status: "confirmed",
    featured: [{ name: "Minamoto-no-Raikou / Ushi Gozen", zh: "源赖光／丑御前", img: "fgo/raikou-ushi-gozen" }],
  },
  {
    game: "fgo_jp", label: {en: "Grand Substitute: Tamamo Aria", zh: "冠位名代战 玉藻Aria推荐召唤"},
    start: "2026-10-23", end: "2026-11-11", status: "confirmed",
    featured: [{ name: "Tamamo Aria", img: "fgo/tamamo-aria", isNew: true }],
    note: {en: "New Rider", zh: "新从者"},
  },
  {
    game: "fgo_jp", label: {en: "FGO THE DRAMALOGUE pick-up", zh: "「FGO THE DRAMALOGUE」公演纪念推荐召唤"},
    start: "2026-10-30", end: "2026-11-06", status: "confirmed",
    featured: [
      { name: "U-Olga Marie", zh: "Ｕ－奥尔加玛丽", img: "fgo/u-olga-marie" },
      { name: "Tezcatlipoca", zh: "特斯卡特利波卡", img: "fgo/tezcatlipoca" },
      { name: "Medusa (Saber)", zh: "美杜莎(Saber)", img: "fgo/medusa-saber" },
    ],
    note: {en: "29 servants across 14 banners", zh: "14个卡池共29骑"},
  },
  {
    game: "fgo_jp", label: {en: "GUDAGUDA prerelease", zh: "唠唠叨叨开幕前夕"},
    start: "2026-11-04", end: "2026-11-18", status: "confirmed",
    featured: [
      { name: "Kondo Isami", zh: "近藤勇", img: "fgo/kondo" },
      { name: "Kawakami Gensai", zh: "河上彦斋", img: "fgo/kawakami-gensai" },
      { name: "Hijikata Toshizo", zh: "土方岁三", img: "fgo/hijikata" },
      { name: "Okita Souji", zh: "冲田总司", img: "fgo/okita" },
    ],
    note: {en: "9 servants across 4 banners", zh: "4个卡池共9骑"},
  },
  {
    game: "fgo_jp", label: {en: "100M Downloads", zh: "全世界1亿下载纪念"},
    start: "2026-11-07", end: "2026-11-21", status: "confirmed",
    featured: [{ name: "Merlin", zh: "梅林", img: "fgo/merlin" }],
    note: {en: "42 servants across 21 banners", zh: "21个卡池共42骑"},
  },
  {
    game: "fgo_jp", label: {en: "GUDAGUDA Midwinter Swimsuit", zh: "严冬泳装特辑 唠唠叨叨"},
    start: "2026-11-11", end: "2026-12-02", status: "confirmed",
    featured: [
      { name: "Himiko & Iyo", img: "fgo/himiko-iyo", isNew: true },
      { name: "Saika Magoichi (Rider)", img: "fgo/saika-rider", isNew: true },
    ],
    note: {en: "New event", zh: "新活动"},
  },
  {
    game: "fgo_jp", label: {en: "GUDAGUDA Pick-up 2", zh: "唠唠叨叨 推荐召唤2"},
    start: "2026-11-13", end: "2026-12-02", status: "confirmed",
    featured: [
      { name: "Takasugi Shinsaku", zh: "高杉晋作", img: "fgo/takasugi" },
      { name: "Okita Souji (Alter) (Saber)", img: "fgo/okita-alter-saber" },
      { name: "Okita J. Souji", img: "fgo/okita-j" },
      { name: "Saito Hajime", zh: "斋藤一", img: "fgo/saito" },
    ],
    note: {en: "Daily rotating pick-ups", zh: "每日替换"},
  },
  {
    game: "fgo_jp", label: {en: "GUDAGUDA: Dynamite Rikyu", zh: "唠唠叨叨 炸药利休推荐召唤"},
    start: "2026-11-16", end: "2026-12-02", status: "confirmed",
    featured: [
      { name: "Dynamite Rikyu", img: "fgo/dynamite-rikyu", isNew: true },
      { name: "Saika Magoichi (Rider)", img: "fgo/saika-rider", isNew: true },
    ],
    note: {en: "New Foreigner", zh: "新从者"},
  },
  {
    game: "fgo_jp", label: {en: "GUDAGUDA Pick-up 4", zh: "唠唠叨叨 推荐召唤4"},
    start: "2026-11-18", end: "2026-12-02", status: "confirmed",
    featured: [
      { name: "Sen-no-Rikyu", zh: "千利休", img: "fgo/sen-no-rikyu" },
      { name: "Uesugi Kenshin", zh: "上杉谦信", img: "fgo/uesugi-kenshin" },
      { name: "Takeda Harunobu", zh: "武田晴信", img: "fgo/takeda-harunobu" },
      { name: "Izumo-no-Okuni", zh: "出云阿国", img: "fgo/izumo-no-okuni" },
    ],
    note: {en: "8 servants across 5 banners", zh: "5个卡池共8骑"},
  },
  {
    game: "fgo_jp", label: {en: "Witch on the Holy Night movie", zh: "剧场版「魔法使之夜」公开纪念"},
    start: "2026-11-20", end: "2026-12-04", status: "confirmed",
    featured: [
      { name: "Aozaki Aoko", zh: "苍崎青子", img: "fgo/aozaki-aoko" },
      { name: "Kuonji Alice", zh: "久远寺有珠", img: "fgo/kuonji-alice" },
    ],
  },
  {
    game: "fgo_jp", label: {en: "Christmas 2026", zh: "圣诞节2026"},
    start: "2026-12-09", end: "2026-12-23", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "Estimated from past Christmas events", zh: "根据往年圣诞活动推测"},
  },
  {
    game: "fgo_jp", label: {en: "New Year 2027", zh: "新年2027"},
    start: "2027-01-01", end: "2027-01-14", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "New Year pick-up + Lucky Bag (estimated)", zh: "新年推荐召唤+福袋（推测）"},
  },

  /* ───────────── FGO (CN) ───────────── */
  {
    game: "fgo_cn", label: {en: "Final Halloween 2026", zh: "终结·万圣节2026"},
    start: "2026-10-22", end: "2026-11-13", status: "confirmed",
    featured: [
      { name: "Elisabeth Báthory (Lancer)", zh: "伊丽莎白·巴托里", img: "fgo/elisabeth-bathory-lancer", isNew: true },
    ],
    note: {en: "New SSR", zh: "新从者"},
  },
  {
    game: "fgo_cn", label: {en: "Road to Finale: Lostbelt 6", zh: "Road to 终章 第6章篇纪念"},
    start: "2026-11-03", end: "2026-11-09", status: "confirmed",
    featured: [
      { name: "Morgan", zh: "摩根", img: "fgo/morgan" },
      { name: "Tam Lin Gawain", zh: "妖精骑士高文", img: "fgo/tam-lin-gawain" },
    ],
  },
  {
    game: "fgo_cn", label: {en: "Grand Duel: Lancer & Extra", zh: "冠位戴冠战：Lancer＆Extra"},
    start: "2026-11-05", end: "2026-11-13", status: "confirmed",
    featured: [{ name: "Lancer-class servants", zh: "Lancer职阶从者", img: "fgo-class/lancer", icon: true }],
    note: {en: "Lancer and Extra-class servants", zh: "Lancer及Extra职阶从者"},
  },
  {
    game: "fgo_cn", label: {en: "Grand Duel: Archer", zh: "冠位戴冠战：Archer"},
    start: "2026-11-05", end: "2026-11-21", status: "confirmed",
    featured: [{ name: "Archer-class servants", zh: "Archer职阶从者", img: "fgo-class/archer", icon: true }],
  },
  {
    game: "fgo_cn", label: {en: "100M Downloads", zh: "全世界1亿下载纪念"},
    start: "2026-11-07", end: "2026-11-21", status: "confirmed",
    featured: [{ name: "Merlin", zh: "梅林", img: "fgo/merlin" }],
    note: {en: "Many servants across several banners", zh: "多个卡池"},
  },
  {
    game: "fgo_cn", label: {en: "Road to Finale: Lostbelt 7", zh: "Road to 终章 第7章篇纪念"},
    start: "2026-11-10", end: "2026-11-16", status: "confirmed",
    featured: [
      { name: "Tezcatlipoca", zh: "特斯卡特利波卡", img: "fgo/tezcatlipoca" },
      { name: "Nitocris (Alter)", zh: "尼托克丽丝〔Alter〕", img: "fgo/nitocris-alter" },
    ],
  },
  {
    game: "fgo_cn", label: {en: "Road to Finale: Ordeal Call I", zh: "Road to 终章 奏章Ⅰ篇纪念"},
    start: "2026-11-17", end: "2026-11-23", status: "confirmed",
    featured: [
      { name: "Medusa (Saber)", zh: "美杜莎(Saber)", img: "fgo/medusa-saber" },
      { name: "Duryodhana", zh: "难敌", img: "fgo/duryodhana" },
    ],
  },
  {
    game: "fgo_cn", label: {en: "Grand Duel: Rider & Assassin", zh: "冠位戴冠战：Rider＆Assassin"},
    start: "2026-11-21", end: "2026-11-28", status: "confirmed",
    featured: [
      { name: "Rider-class servants", zh: "Rider职阶从者", img: "fgo-class/rider", icon: true },
      { name: "Assassin-class servants", zh: "Assassin职阶从者", img: "fgo-class/assassin", icon: true },
    ],
  },
  {
    game: "fgo_cn", label: {en: "Road to Finale: Ordeal Call II", zh: "Road to 终章 奏章Ⅱ篇纪念"},
    start: "2026-11-24", end: "2026-11-30", status: "confirmed",
    featured: [
      { name: "The Count of Monte Cristo", zh: "岩窟王 基督山", img: "fgo/monte-cristo" },
      { name: "Alessandro di Cagliostro", zh: "亚历山德罗·迪·卡利奥斯特罗", img: "fgo/cagliostro" },
    ],
  },
  {
    game: "fgo_cn", label: {en: "Grand Duel: Caster", zh: "冠位戴冠战：Caster"},
    start: "2026-11-24", end: "2026-12-10", status: "confirmed",
    featured: [{ name: "Caster-class servants", zh: "Caster职阶从者", img: "fgo-class/caster", icon: true }],
  },
  {
    game: "fgo_cn", label: {en: "Road to Finale #9", zh: "Road to 终章 第9次发布纪念"},
    start: "2026-12-01", end: "2026-12-07", status: "projected",
    featured: [
      { name: "BB Dubai", zh: "ＢＢ迪拜", img: "fgo/bb-dubai" },
      { name: "Tenochtitlan", zh: "特诺奇蒂特兰", img: "fgo/tenochtitlan" },
    ],
  },
  {
    game: "fgo_cn", label: {en: "Road to Finale #10", zh: "Road to 终章 第10次发布纪念"},
    start: "2026-12-08", end: "2026-12-15", status: "projected",
    featured: [
      { name: "Lilith", zh: "莉莉丝", img: "fgo/lilith" },
      { name: "Martha (Ruler)", zh: "玛尔达(Ruler)", img: "fgo/martha-ruler" },
    ],
  },
  {
    game: "fgo_cn", label: {en: "Part 2 Final Chapter", zh: "「第2部 终章」开幕！"},
    start: "2026-12-10", end: "2026-12-20", status: "projected",
    featured: [
      { name: "Morgan", zh: "摩根", img: "fgo/morgan" },
      { name: "Lady Avalon", zh: "阿瓦隆女士", img: "fgo/lady-avalon" },
      { name: "Space Ishtar", zh: "太空伊什塔尔", img: "fgo/space-ishtar" },
    ],
    note: {en: "Servant Apex pick-ups (19 servants per JP); all-servant pick-up to Dec 31", zh: "英灵极点推荐召唤（日服19骑）；从者全骑推荐召唤至12/31"},
  },
  {
    game: "fgo_cn", label: {en: "New Year pick-up", zh: "新年推荐召唤"},
    start: "2026-12-31", end: "2027-01-14", status: "projected",
    featured: [
      { name: "Lord Logres", img: "fgo/lord-logres", isNew: true },
      { name: "Phantasmoon", zh: "Phantasmoon", img: "fgo/phantasmoon" },
      { name: "Arjuna (Alter)", zh: "阿周那〔Alter〕", img: "fgo/arjuna-alter" },
      { name: "Mélusine (Ruler)", zh: "梅柳齐娜", img: "fgo/melusine-ruler" },
    ],
    note: {en: "Daily rotation (15 servants) + New Year Lucky Bag", zh: "每日替换（15骑）+新年福袋"},
  },
  {
    game: "fgo_cn", label: {en: "Fate/strange Fake anime", zh: "TV动画「Fate/strange Fake」播放纪念"},
    start: "2027-01-03", end: "2027-01-16", status: "projected",
    featured: [
      { name: "Richard I", zh: "理查一世", img: "fgo/richard-i" },
      { name: "Gilgamesh", zh: "吉尔伽美什", img: "fgo/gilgamesh" },
      { name: "Enkidu", zh: "恩奇都", img: "fgo/enkidu" },
    ],
  },
  {
    game: "fgo_cn", label: {en: "Chaldea Flower Festival prerelease", zh: "「迦勒底·花神节」开幕前夕"},
    start: "2027-01-13", end: "2027-01-27", status: "projected",
    featured: [
      { name: "Merlin", zh: "梅林", img: "fgo/merlin" },
      { name: "Meltryllis", zh: "Meltryllis", img: "fgo/meltryllis" },
      { name: "Kama", zh: "迦摩", img: "fgo/kama" },
      { name: "Sen-no-Rikyu", zh: "千利休", img: "fgo/sen-no-rikyu" },
    ],
    note: {en: "Daily rotating pick-ups", zh: "每日替换"},
  },
  {
    game: "fgo_cn", label: {en: "Chaldea Satellite Station 2026", zh: "「FGO 迦勒底卫星基站 2026」举办纪念"},
    start: "2027-01-14", end: "2027-01-21", status: "projected",
    featured: [{ name: "Dante Alighieri", zh: "但丁·阿利吉耶里", img: "fgo/dante-alighieri" }],
  },

  /* ───────────── FGO (NA) ───────────── */
  {
    game: "fgo_na", label: {en: "GUDAGUDA 2023 rerun", zh: "复刻 唠唠叨叨2023 龙马危机一发"},
    start: "2026-10-16", end: "2026-11-05", status: "confirmed",
    featured: [
      { name: "Izumo-no-Okuni", zh: "出云阿国", img: "fgo/izumo-no-okuni" },
      { name: "Sakamoto Ryouma (Lancer)", zh: "坂本龙马", img: "fgo/sakamoto-ryouma-lancer" },
      { name: "Takasugi Shinsaku", zh: "高杉晋作", img: "fgo/takasugi" },
    ],
    note: {en: "Daily rotating pick-ups", zh: "每日替换"},
  },
  {
    game: "fgo_na", label: {en: "GUDAGUDA rerun: Hijikata", zh: "复刻 唠唠叨叨 土方岁三推荐召唤2"},
    start: "2026-10-18", end: "2026-10-25", status: "confirmed",
    featured: [{ name: "Hijikata Toshizo", zh: "土方岁三", img: "fgo/hijikata" }],
  },
  {
    game: "fgo_na", label: {en: "GUDAGUDA rerun FQ backup", zh: "复刻 唠唠叨叨 自由关卡支援"},
    start: "2026-10-25", end: "2026-11-05", status: "confirmed",
    featured: [
      { name: "Sen-no-Rikyu", zh: "千利休", img: "fgo/sen-no-rikyu" },
      { name: "Asagami Fujino", zh: "浅上藤乃", img: "fgo/asagami-fujino" },
    ],
  },
  {
    game: "fgo_na", label: {en: "Lostbelt 6 Clear Support", zh: "Lostbelt No.6 通关应援"},
    start: "2026-10-31", end: "2026-11-11", status: "confirmed",
    featured: [
      { name: "Morgan", zh: "摩根", img: "fgo/morgan" },
      { name: "Mélusine", zh: "妖精骑士兰斯洛特", img: "fgo/melusine" },
      { name: "Baobhan Sith", zh: "妖精骑士崔斯坦", img: "fgo/baobhan-sith" },
      { name: "Tam Lin Gawain", zh: "妖精骑士高文", img: "fgo/tam-lin-gawain" },
    ],
    note: {en: "Daily rotating pick-ups", zh: "每日替换"},
  },
  {
    game: "fgo_na", label: {en: "Mystery House Crafters prerelease", zh: "Mystery House Crafters 开幕前夕"},
    start: "2026-11-05", end: "2026-11-14", status: "confirmed",
    featured: [
      { name: "Ishtar", zh: "伊什塔尔", img: "fgo/ishtar" },
      { name: "Ozymandias", zh: "奥斯曼狄斯", img: "fgo/ozymandias" },
    ],
    note: {en: "Daily rotating pick-ups", zh: "每日替换"},
  },
  {
    game: "fgo_na", label: {en: "100M Downloads", zh: "全世界1亿下载纪念"},
    start: "2026-11-07", end: "2026-11-20", status: "confirmed",
    featured: [{ name: "Merlin", zh: "梅林", img: "fgo/merlin" }],
    note: {en: "42 servants across 21 banners", zh: "21个卡池共42骑"},
  },
  {
    game: "fgo_na", label: {en: "Mystery House Crafters", zh: "Mystery House Crafters"},
    start: "2026-11-13", end: "2026-12-03", status: "confirmed",
    featured: [{ name: "Tutankhamun", zh: "图坦卡蒙", img: "fgo/tutankhamun", isNew: true }],
    note: {en: "New event", zh: "新活动"},
  },
  {
    game: "fgo_na", label: {en: "Mystery House Crafters Pick-up 2", zh: "Mystery House Crafters 推荐召唤2"},
    start: "2026-11-14", end: "2026-11-24", status: "confirmed",
    featured: [
      { name: "Britomart", zh: "布里托玛特", img: "fgo/britomart" },
      { name: "Demon King Nobunaga", zh: "织田信长", img: "fgo/demon-king-nobunaga" },
      { name: "Nezha", zh: "莲偶", img: "fgo/nezha" },
    ],
    note: {en: "Daily rotating pick-ups", zh: "每日替换"},
  },
  {
    game: "fgo_na", label: {en: "Thanksgiving 2026", zh: "感恩节2026"},
    start: "2026-11-20", end: "2026-11-26", status: "confirmed",
    featured: [
      { name: "Ibuki-Douji (Berserker)", zh: "伊吹童子", img: "fgo/ibuki-douji-berserker" },
      { name: "Wandjina", zh: "旺吉娜", img: "fgo/wandjina" },
      { name: "Miss Crane", zh: "克莱恩小姐", img: "fgo/miss-crane" },
      { name: "Uesugi Kenshin", zh: "上杉谦信", img: "fgo/uesugi-kenshin" },
    ],
    note: {en: "Daily rotation, 7 servants", zh: "每日替换，共7骑"},
  },
  {
    game: "fgo_na", label: {en: "Interlude Campaign 21: Hai Bà Trưng", zh: "幕间物语活动21 征氏姐妹推荐召唤"},
    start: "2026-11-20", end: "2026-11-26", status: "confirmed",
    featured: [{ name: "Hai Bà Trưng", zh: "征氏姐妹", img: "fgo/hai-ba-trung" }],
  },
  {
    game: "fgo_na", label: {en: "Part 2 Clear Backup Guaranteed Summon Vol. 2", zh: "第2部通关应援 确定召唤 Vol.2"},
    start: "2026-11-20", end: "2026-12-19", status: "confirmed",
    featured: [{ name: "Mélusine", zh: "妖精骑士兰斯洛特", img: "fgo/melusine" }],
    note: {en: "Paid guaranteed limited Part 2 SSR", zh: "付费确定获得第2部限定★5"},
  },
  {
    game: "fgo_na", label: {en: "Interlude Campaign 21: Durgā", zh: "幕间物语活动21 杜尔伽推荐召唤"},
    start: "2026-11-22", end: "2026-11-29", status: "confirmed",
    featured: [{ name: "Durgā", zh: "杜尔伽", img: "fgo/durga" }],
  },
  {
    game: "fgo_na", label: {en: "Mystery House Crafters Pick-up 3", zh: "Mystery House Crafters 推荐召唤3"},
    start: "2026-11-24", end: "2026-12-03", status: "projected",
    featured: [
      { name: "Super Bunyan", zh: "超级班扬", img: "fgo/super-bunyan" },
      { name: "Van Gogh", zh: "梵高", img: "fgo/van-gogh" },
    ],
    note: {en: "Daily rotation; dates estimated from JP", zh: "每日替换；日期按日服推测"},
  },
  {
    game: "fgo_na", label: {en: "Lostbelt 7 Clear Campaign", zh: "Lostbelt No.7 通关纪念"},
    start: "2026-11-30", end: "2026-12-15", status: "projected",
    featured: [
      { name: "Tezcatlipoca", zh: "特斯卡特利波卡", img: "fgo/tezcatlipoca" },
      { name: "Kukulcan", zh: "库库尔坎", img: "fgo/kukulcan" },
      { name: "Tlāloc", zh: "特拉洛克", img: "fgo/tlaloc" },
    ],
    note: {en: "Daily rotating pick-ups", zh: "每日替换"},
  },
  {
    game: "fgo_na", label: {en: "Christmas 2026: Louhi", zh: "圣诞节2026 娄希推荐召唤"},
    start: "2026-12-10", end: "2026-12-23", status: "projected",
    featured: [{ name: "Louhi", zh: "娄希", img: "fgo/louhi", isNew: true }],
    note: {en: "New event (JP 2024 Christmas)", zh: "新活动（日服2024圣诞）"},
  },
  {
    game: "fgo_na", label: {en: "Christmas 2026 Pick-up 2", zh: "圣诞节2026 推荐召唤2"},
    start: "2026-12-12", end: "2026-12-19", status: "projected",
    featured: [{ name: "Sitonai", zh: "志度内", img: "fgo/sitonai" }],
  },
  {
    game: "fgo_na", label: {en: "Christmas 2026 Pick-up 3", zh: "圣诞节2026 推荐召唤3"},
    start: "2026-12-14", end: "2026-12-21", status: "projected",
    featured: [{ name: "Sima Yi (Reines)", zh: "莱妮丝", img: "fgo/sima-yi-reines" }],
  },
  {
    game: "fgo_na", label: {en: "Another Christmas: Phantasmoon", zh: "Another Christmas Phantasmoon推荐召唤"},
    start: "2026-12-24", end: "2026-12-30", status: "projected",
    featured: [{ name: "Phantasmoon", zh: "Phantasmoon", img: "fgo/phantasmoon", isNew: true }],
  },
  {
    game: "fgo_na", label: {en: "New Year 2027", zh: "新年2027"},
    start: "2027-01-01", end: "2027-01-14", status: "projected",
    featured: [
      { name: "Richard I", zh: "理查一世", img: "fgo/richard-i" },
      { name: "Aozaki Aoko", zh: "苍崎青子", img: "fgo/aozaki-aoko" },
      { name: "Kuonji Alice", zh: "久远寺有珠", img: "fgo/kuonji-alice" },
      { name: "Kyokutei Bakin", zh: "曲亭马琴", img: "fgo/kyokutei-bakin" },
    ],
    note: {en: "Daily rotation (15 servants) + Lucky Bag", zh: "每日替换（15骑）+福袋"},
  },

  /* ───────────── BanG Dream! GBP (JP) ───────────── */
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-17", end: "2026-10-19", status: "confirmed",
    featured: [{ name: "Rinko Shirokane", zh: "白金燐子", img: "gbp/1625" }],
  },
  {
    game: "gbp_jp", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-10-21", end: "2026-10-31", status: "confirmed",
    featured: [
      { name: "Himari Uehara", zh: "上原绯玛丽", img: "gbp/2542", isNew: true },
      { name: "Tomoe Udagawa", zh: "宇田川巴", img: "gbp/2543", isNew: true },
      { name: "Ran Mitake", zh: "美竹兰", img: "gbp/2546", isNew: true },
    ],
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-23", end: "2026-10-25", status: "confirmed",
    featured: [{ name: "Himari Uehara", zh: "上原绯玛丽", img: "gbp/1631" }],
  },
  {
    game: "gbp_jp", label: {en: "Limited", zh: "限定卡池"},
    start: "2026-10-23", end: "2026-10-31", status: "confirmed",
    featured: [
      { name: "Rokka Asahi", zh: "朝日六花", img: "gbp/2292" },
      { name: "Reona Nyubara", zh: "鳰原令王那", img: "gbp/2293" },
      { name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/2296" },
    ],
    note: {en: "RAS IN PALLガチャ", zh: "RAS IN PALLガチャ"},
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-26", end: "2026-10-28", status: "confirmed",
    featured: [{ name: "Yukina Minato", zh: "凑友希那", img: "gbp/1632" }],
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-27", end: "2026-10-29", status: "confirmed",
    featured: [{ name: "Arisa Ichigaya", zh: "市谷有咲", img: "gbp/1633" }],
  },
  {
    game: "gbp_jp", label: {en: "Dream Festival", zh: "Dream Festival 招募"},
    start: "2026-10-31", end: "2026-11-04", status: "confirmed",
    featured: [
      { name: "Tae Hanazono", zh: "花园多惠", img: "gbp/2547", isNew: true },
      { name: "Misaki Okusawa (Michelle)", zh: "米歇尔", img: "gbp/2548", isNew: true },
      { name: "Tsugumi Hazawa", zh: "羽泽鸫", img: "gbp/2552", isNew: true },
      { name: "Mashiro Kurata", zh: "仓田真白", img: "gbp/2553", isNew: true },
    ],
    note: {en: "ドリームフェスティバルガチャ", zh: "ドリームフェスティバルガチャ"},
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-11-03", end: "2026-11-05", status: "confirmed",
    featured: [{ name: "Maya Yamato", zh: "大和麻弥", img: "gbp/1639" }],
  },
  {
    game: "gbp_jp", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-11-04", end: "2026-11-10", status: "confirmed",
    featured: [
      { name: "Tae Hanazono", zh: "花园多惠", img: "gbp/2547" },
      { name: "Misaki Okusawa (Michelle)", zh: "米歇尔", img: "gbp/2548" },
      { name: "Eve Wakamiya", zh: "若宫伊芙", img: "gbp/2551" },
    ],
  },
  {
    game: "gbp_jp", label: {en: "Collab Part 1", zh: "联动卡池 Part1"},
    start: "2026-11-06", end: "2026-11-18", status: "confirmed",
    featured: [
      { name: "Yukina Minato", zh: "凑友希那", img: "gbp/2525", isNew: true },
      { name: "Sayo Hikawa", zh: "冰川纱夜", img: "gbp/2526", isNew: true },
    ],
    note: {en: "Magical Girl Witch Trials collab (limited)", zh: "魔法少女的魔女审判 联动（限定）"},
  },
  {
    game: "gbp_jp", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-11-10", end: "2026-11-19", status: "confirmed",
    featured: [
      { name: "Rokka Asahi", zh: "朝日六花", img: "gbp/2554", isNew: true },
      { name: "Rei Wakana", zh: "和奏瑞依", img: "gbp/2555", isNew: true },
      { name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/2558", isNew: true },
    ],
  },
  {
    game: "gbp_jp", label: {en: "Collab Part 2", zh: "联动卡池 Part2"},
    start: "2026-11-18", end: "2026-11-30", status: "confirmed",
    featured: [
      { name: "Lisa Imai", zh: "今井莉莎", img: "gbp/2527", isNew: true },
      { name: "Ako Udagawa", zh: "宇田川亚子", img: "gbp/2528", isNew: true },
      { name: "Rinko Shirokane", zh: "白金燐子", img: "gbp/2529", isNew: true },
    ],
    note: {en: "Magical Girl Witch Trials collab (limited)", zh: "魔法少女的魔女审判 联动（限定）"},
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-11-19", end: "2026-11-21", status: "confirmed",
    featured: [{ name: "Rui Yashio", zh: "八潮瑠唯", img: "gbp/1991" }],
  },
  {
    game: "gbp_jp", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-11-19", end: "2026-11-29", status: "confirmed",
    featured: [
      { name: "Eve Wakamiya", zh: "若宫伊芙", img: "gbp/2559", isNew: true },
      { name: "Hina Hikawa", zh: "冰川日菜", img: "gbp/2560", isNew: true },
      { name: "Maya Yamato", zh: "大和麻弥", img: "gbp/2563", isNew: true },
    ],
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-11-22", end: "2026-11-24", status: "confirmed",
    featured: [{ name: "Tomori Takamatsu", zh: "高松灯", img: "gbp/2100" }],
  },
  {
    game: "gbp_jp", label: {en: "Dream Festival", zh: "Dream Festival 招募"},
    start: "2026-11-30", end: "2026-12-04", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "Monthly Dream Festival, estimated from the usual end-of-month cycle", zh: "每月 Dream Festival，按月末惯例推算"},
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-04", end: "2026-12-06", status: "projected",
    featured: [{ name: "Tae Hanazono", zh: "花园多惠", img: "gbp/1654" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-07", end: "2026-12-09", status: "projected",
    featured: [{ name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/1655" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-16", end: "2026-12-18", status: "projected",
    featured: [{ name: "Toko Kirigaya", zh: "桐谷透子", img: "gbp/1659" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-27", end: "2026-12-29", status: "projected",
    featured: [{ name: "Aya Maruyama", zh: "丸山彩", img: "gbp/1663" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_jp", label: {en: "Dream Festival", zh: "Dream Festival 招募"},
    start: "2026-12-31", end: "2027-01-04", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "Monthly Dream Festival, estimated from the usual end-of-month cycle", zh: "每月 Dream Festival，按月末惯例推算"},
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2027-01-07", end: "2027-01-09", status: "projected",
    featured: [{ name: "Tsugumi Hazawa", zh: "羽泽鸫", img: "gbp/1672" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_jp", label: {en: "Birthday", zh: "生日卡池"},
    start: "2027-01-13", end: "2027-01-15", status: "projected",
    featured: [{ name: "Rei Wakana", zh: "和奏瑞依", img: "gbp/1676" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },

  /* ───────────── BanG Dream! GBP (EN) ───────────── */
  {
    game: "gbp_en", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-10-16", end: "2026-10-25", status: "confirmed",
    featured: [
      { name: "Kasumi Toyama", zh: "户山香澄", img: "gbp/2388", isNew: true },
      { name: "Arisa Ichigaya", zh: "市谷有咲", img: "gbp/2389", isNew: true },
      { name: "Tae Hanazono", zh: "花园多惠", img: "gbp/2392", isNew: true },
    ],
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-17", end: "2026-10-24", status: "confirmed",
    featured: [{ name: "Rinko Shirokane", zh: "白金燐子", img: "gbp/1625" }],
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-23", end: "2026-10-30", status: "confirmed",
    featured: [{ name: "Himari Uehara", zh: "上原绯玛丽", img: "gbp/1631" }],
  },
  {
    game: "gbp_en", label: {en: "Limited", zh: "限定卡池"},
    start: "2026-10-25", end: "2026-11-02", status: "confirmed",
    featured: [
      { name: "Tsukushi Futaba", zh: "二叶筑紫", img: "gbp/2063" },
      { name: "Toko Kirigaya", zh: "桐谷透子", img: "gbp/2064" },
      { name: "Nanami Hiromachi", zh: "广町七深", img: "gbp/2067" },
    ],
    note: {en: "Splendidly Wild Midnight Banquet", zh: "Splendidly Wild Midnight Banquet"},
  },
  {
    game: "gbp_en", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-10-25", end: "2026-11-03", status: "confirmed",
    featured: [
      { name: "Lisa Imai", zh: "今井莉莎", img: "gbp/2398", isNew: true },
      { name: "Ako Udagawa", zh: "宇田川亚子", img: "gbp/2399", isNew: true },
      { name: "Yukina Minato", zh: "凑友希那", img: "gbp/2402", isNew: true },
    ],
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-26", end: "2026-11-02", status: "confirmed",
    featured: [{ name: "Yukina Minato", zh: "凑友希那", img: "gbp/1632" }],
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-27", end: "2026-11-03", status: "confirmed",
    featured: [{ name: "Arisa Ichigaya", zh: "市谷有咲", img: "gbp/1633" }],
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-11-03", end: "2026-11-10", status: "confirmed",
    featured: [{ name: "Maya Yamato", zh: "大和麻弥", img: "gbp/1639" }],
  },
  {
    game: "gbp_en", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-11-03", end: "2026-11-11", status: "confirmed",
    featured: [
      { name: "Chisato Shirasagi", zh: "白鹭千圣", img: "gbp/2403", isNew: true },
      { name: "Hina Hikawa", zh: "冰川日菜", img: "gbp/2404", isNew: true },
      { name: "Eve Wakamiya", zh: "若宫伊芙", img: "gbp/2407", isNew: true },
    ],
  },
  {
    game: "gbp_en", label: {en: "Limited", zh: "限定卡池"},
    start: "2026-11-06", end: "2026-11-14", status: "confirmed",
    featured: [
      { name: "Eve Wakamiya", zh: "若宫伊芙", img: "gbp/2010" },
      { name: "Kanon Matsubara", zh: "松原花音", img: "gbp/2011" },
      { name: "Tsukushi Futaba", zh: "二叶筑紫", img: "gbp/2014" },
    ],
    note: {en: "Seaside Relaxation Time", zh: "Seaside Relaxation Time"},
  },
  {
    game: "gbp_en", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-11-11", end: "2026-11-19", status: "confirmed",
    featured: [
      { name: "Kanon Matsubara", zh: "松原花音", img: "gbp/2408", isNew: true },
      { name: "Misaki Okusawa (Michelle)", zh: "米歇尔", img: "gbp/2409", isNew: true },
      { name: "Hagumi Kitazawa", zh: "北泽育美", img: "gbp/2412", isNew: true },
    ],
  },
  {
    game: "gbp_en", label: {en: "Limited", zh: "限定卡池"},
    start: "2026-11-19", end: "2026-11-26", status: "confirmed",
    featured: [
      { name: "Hagumi Kitazawa", zh: "北泽育美", img: "gbp/1993" },
      { name: "Nanami Hiromachi", zh: "广町七深", img: "gbp/1994" },
      { name: "Rei Wakana", zh: "和奏瑞依", img: "gbp/1997" },
    ],
    note: {en: "Exciting Bridal Party!", zh: "Exciting Bridal Party!"},
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-11-19", end: "2026-11-26", status: "confirmed",
    featured: [{ name: "Rui Yashio", zh: "八潮瑠唯", img: "gbp/1991" }],
  },
  {
    game: "gbp_en", label: {en: "Dream & Kirameki Festival", zh: "Dream & Kirameki Festival 招募"},
    start: "2026-11-19", end: "2026-11-29", status: "confirmed",
    featured: [
      { name: "Tsukushi Futaba", zh: "二叶筑紫", img: "gbp/2413", isNew: true },
      { name: "Saya Yamabuki", zh: "山吹沙绫", img: "gbp/2414", isNew: true },
      { name: "Tomoe Udagawa", zh: "宇田川巴", img: "gbp/2415", isNew: true },
      { name: "Maya Yamato", zh: "大和麻弥", img: "gbp/2416", isNew: true },
      { name: "Aya Maruyama", zh: "丸山彩", img: "gbp/2421", isNew: true },
      { name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/2422", isNew: true },
    ],
    note: {en: "Dream & Kirameki Festival; also includes the Girls to Ladies limited cards", zh: "Dream & Kirameki Festival，同时登场 Girls to Ladies 限定卡"},
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-11-22", end: "2026-11-29", status: "confirmed",
    featured: [{ name: "Tomori Takamatsu", zh: "高松灯", img: "gbp/2100" }],
  },
  {
    game: "gbp_en", label: {en: "Limited", zh: "限定卡池"},
    start: "2026-11-29", end: "2026-12-04", status: "confirmed",
    featured: [
      { name: "Tsukushi Futaba", zh: "二叶筑紫", img: "gbp/2413" },
      { name: "Saya Yamabuki", zh: "山吹沙绫", img: "gbp/2414" },
      { name: "Tomoe Udagawa", zh: "宇田川巴", img: "gbp/2415" },
      { name: "Maya Yamato", zh: "大和麻弥", img: "gbp/2416" },
      { name: "Masuki Sato", zh: "佐藤益木", img: "gbp/2419" },
      { name: "Ako Udagawa", zh: "宇田川亚子", img: "gbp/2420" },
    ],
    note: {en: "Blessed Girls to Ladies", zh: "Blessed Girls to Ladies"},
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-04", end: "2026-12-11", status: "projected",
    featured: [{ name: "Tae Hanazono", zh: "花园多惠", img: "gbp/1654" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-07", end: "2026-12-14", status: "projected",
    featured: [{ name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/1655" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-16", end: "2026-12-23", status: "projected",
    featured: [{ name: "Toko Kirigaya", zh: "桐谷透子", img: "gbp/1659" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-27", end: "2027-01-03", status: "projected",
    featured: [{ name: "Aya Maruyama", zh: "丸山彩", img: "gbp/1663" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2027-01-07", end: "2027-01-14", status: "projected",
    featured: [{ name: "Tsugumi Hazawa", zh: "羽泽鸫", img: "gbp/1672" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_en", label: {en: "Birthday", zh: "生日卡池"},
    start: "2027-01-13", end: "2027-01-20", status: "projected",
    featured: [{ name: "Rei Wakana", zh: "和奏瑞依", img: "gbp/1676" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },

  /* ───────────── BanG Dream! GBP (CN) ───────────── */
  {
    game: "gbp_cn", label: {en: "Dream Festival", zh: "Dream Festival 招募"},
    start: "2026-10-16", end: "2026-10-20", status: "confirmed",
    featured: [
      { name: "Toko Kirigaya", zh: "桐谷透子", img: "gbp/2423", isNew: true },
      { name: "Nanami Hiromachi", zh: "广町七深", img: "gbp/2424", isNew: true },
      { name: "Rinko Shirokane", zh: "白金燐子", img: "gbp/2428", isNew: true },
      { name: "Rei Wakana", zh: "和奏瑞依", img: "gbp/2429", isNew: true },
    ],
    note: {en: "黄金周纪念·后篇Dream Festival招募", zh: "黄金周纪念·后篇Dream Festival招募"},
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-17", end: "2026-10-19", status: "confirmed",
    featured: [{ name: "Rinko Shirokane", zh: "白金燐子", img: "gbp/1625" }],
  },
  {
    game: "gbp_cn", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-10-20", end: "2026-10-26", status: "confirmed",
    featured: [
      { name: "Toko Kirigaya", zh: "桐谷透子", img: "gbp/2423" },
      { name: "Nanami Hiromachi", zh: "广町七深", img: "gbp/2424" },
      { name: "Rui Yashio", zh: "八潮瑠唯", img: "gbp/2427" },
    ],
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-23", end: "2026-10-25", status: "confirmed",
    featured: [{ name: "Himari Uehara", zh: "上原绯玛丽", img: "gbp/1631" }],
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-26", end: "2026-10-28", status: "confirmed",
    featured: [{ name: "Yukina Minato", zh: "凑友希那", img: "gbp/1632" }],
  },
  {
    game: "gbp_cn", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-10-26", end: "2026-11-05", status: "confirmed",
    featured: [
      { name: "Kaoru Seta", zh: "濑田薰", img: "gbp/2430", isNew: true },
      { name: "Chisato Shirasagi", zh: "白鹭千圣", img: "gbp/2431", isNew: true },
      { name: "Kanon Matsubara", zh: "松原花音", img: "gbp/2434", isNew: true },
    ],
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-10-27", end: "2026-10-29", status: "confirmed",
    featured: [{ name: "Arisa Ichigaya", zh: "市谷有咲", img: "gbp/1633" }],
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-11-03", end: "2026-11-05", status: "confirmed",
    featured: [{ name: "Maya Yamato", zh: "大和麻弥", img: "gbp/1639" }],
  },
  {
    game: "gbp_cn", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-11-05", end: "2026-11-13", status: "confirmed",
    featured: [
      { name: "Ran Mitake", zh: "美竹兰", img: "gbp/2435", isNew: true },
      { name: "Himari Uehara", zh: "上原绯玛丽", img: "gbp/2436", isNew: true },
      { name: "Moca Aoba", zh: "青叶摩卡", img: "gbp/2439", isNew: true },
    ],
  },
  {
    game: "gbp_cn", label: {en: "Dream Festival", zh: "Dream Festival 招募"},
    start: "2026-11-13", end: "2026-11-17", status: "confirmed",
    featured: [
      { name: "Rokka Asahi", zh: "朝日六花", img: "gbp/2440", isNew: true },
      { name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/2441", isNew: true },
      { name: "Kanon Matsubara", zh: "松原花音", img: "gbp/2445", isNew: true },
      { name: "Tsukushi Futaba", zh: "二叶筑紫", img: "gbp/2446", isNew: true },
    ],
    note: {en: "7.5th Anniversary", zh: "7.5周年纪念"},
  },
  {
    game: "gbp_cn", label: {en: "Event gacha", zh: "活动卡池"},
    start: "2026-11-17", end: "2026-11-24", status: "confirmed",
    featured: [
      { name: "Rokka Asahi", zh: "朝日六花", img: "gbp/2440" },
      { name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/2441" },
      { name: "Reona Nyubara", zh: "鳰原令王那", img: "gbp/2444" },
    ],
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-11-19", end: "2026-11-21", status: "confirmed",
    featured: [{ name: "Rui Yashio", zh: "八潮瑠唯", img: "gbp/1991" }],
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-11-22", end: "2026-11-24", status: "confirmed",
    featured: [{ name: "Tomori Takamatsu", zh: "高松灯", img: "gbp/2100" }],
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-04", end: "2026-12-06", status: "projected",
    featured: [{ name: "Tae Hanazono", zh: "花园多惠", img: "gbp/1654" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-07", end: "2026-12-09", status: "projected",
    featured: [{ name: "Chiyu Tamade", zh: "珠手知由", img: "gbp/1655" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-16", end: "2026-12-18", status: "projected",
    featured: [{ name: "Toko Kirigaya", zh: "桐谷透子", img: "gbp/1659" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2026-12-27", end: "2026-12-29", status: "projected",
    featured: [{ name: "Aya Maruyama", zh: "丸山彩", img: "gbp/1663" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2027-01-07", end: "2027-01-09", status: "projected",
    featured: [{ name: "Tsugumi Hazawa", zh: "羽泽鸫", img: "gbp/1386" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },
  {
    game: "gbp_cn", label: {en: "Birthday", zh: "生日卡池"},
    start: "2027-01-13", end: "2027-01-15", status: "projected",
    featured: [{ name: "Rei Wakana", zh: "和奏瑞依", img: "gbp/1676" }],
    note: {en: "Annual birthday gacha; dates from last year's schedule", zh: "年度生日卡池，日期按往年推算"},
  },

  /* ───────────── Arknights (EN) ───────────── */
  {
    game: "arknights_en", label: {en: "Standard Headhunting #178", zh: "标准寻访 #178"},
    start: "2026-10-23", end: "2026-11-05", status: "confirmed",
    featured: [
      { name: "Ines", zh: "伊内丝", img: "arknights/ines" },
      { name: "Zuo Le", zh: "左乐", img: "arknights/zuo-le" },
      { name: "Proviso", zh: "但书", img: "arknights/proviso" },
      { name: "Record Keeper", zh: "录武官", img: "arknights/record-keeper" },
      { name: "Spuria", zh: "空构", img: "arknights/spuria" },
    ],
    note: {en: "Standard pool rotation.", zh: "常驻标准寻访轮换。"},
  },
  {
    game: "arknights_en", label: {en: "Orienteering Headhunting #7", zh: "定向寻访 #7"},
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
    note: {en: "Player locks 3 of these 6★ and 3 of these 5★; only chosen 6★ can drop.", zh: "玩家从中自选3名6★与3名5★。"},
  },
  {
    game: "arknights_en", label: {en: "Kernel Headhunting #64", zh: "中坚寻访 #64"},
    start: "2026-11-03", end: "2026-11-16", status: "confirmed",
    featured: [
      { name: "Eunectes", zh: "森蚺", img: "arknights/eunectes" },
      { name: "Saileach", zh: "琴柳", img: "arknights/saileach" },
      { name: "Ashlock", zh: "灰毫", img: "arknights/ashlock" },
      { name: "Franka", zh: "芙兰卡", img: "arknights/franka" },
      { name: "Whisperain", zh: "絮雨", img: "arknights/whisperain" },
    ],
    note: {en: "Kernel pool rotation.", zh: "中坚寻访轮换。"},
  },
  {
    game: "arknights_en", label: {en: "Standard Headhunting #179", zh: "标准寻访 #179"},
    start: "2026-11-06", end: "2026-11-19", status: "confirmed",
    featured: [
      { name: "Pozëmka", zh: "鸿雪", img: "arknights/pozemka" },
      { name: "Viviana", zh: "薇薇安娜", img: "arknights/viviana" },
      { name: "Lunacub", zh: "子月", img: "arknights/lunacub" },
      { name: "Poncirus", zh: "青枳", img: "arknights/poncirus" },
      { name: "Taraxacum", zh: "风絮", img: "arknights/taraxacum" },
    ],
    note: {en: "Standard pool rotation.", zh: "常驻标准寻访轮换。"},
  },
  {
    game: "arknights_en", label: {en: "Limited (Collab): Hunters of the Umbral Wilds", zh: "限定寻访「泡影苍霆」联动（怪物猎人）"},
    start: "2026-11-16", end: "2026-11-30", status: "confirmed",
    featured: [
      { name: "Violet Mizutsune Orchid", zh: "焰狐龙梓兰", img: "arknights/violet-mizutsune-orchid", isNew: true },
      { name: "Zinogre S Catapult", zh: "雷狼龙S空爆", img: "arknights/zinogre-s-catapult", isNew: true },
    ],
    note: {en: "Monster Hunter collab #2, with SideStory Thunder in the Azure Dream.", zh: "《怪物猎人》第二次联动，配合SideStory「泡影苍霆」。"},
  },
  {
    game: "arknights_en", label: {en: "Kernel Headhunting #65", zh: "中坚寻访 #65"},
    start: "2026-11-17", end: "2026-12-01", status: "confirmed",
    featured: [
      { name: "Mr. Nothing", zh: "乌有", img: "arknights/mr-nothing" },
      { name: "Phantom", zh: "傀影", img: "arknights/phantom" },
      { name: "Provence", zh: "普罗旺斯", img: "arknights/provence" },
      { name: "Sora", zh: "空", img: "arknights/sora" },
      { name: "Weedy", zh: "温蒂", img: "arknights/weedy" },
    ],
    note: {en: "Kernel pool rotation.", zh: "中坚寻访轮换。"},
  },
  {
    game: "arknights_en", label: {en: "Standard Headhunting #180", zh: "标准寻访 #180"},
    start: "2026-11-20", end: "2026-12-04", status: "confirmed",
    featured: [
      { name: "Melanite", zh: "玫拉", img: "arknights/melanite" },
      { name: "Qiubai", zh: "仇白", img: "arknights/qiubai" },
      { name: "Sand Reckoner", img: "arknights/sand-reckoner" },
      { name: "Stainless", zh: "白铁", img: "arknights/stainless" },
      { name: "Wind Chimes", zh: "铎铃", img: "arknights/wind-chimes" },
    ],
    note: {en: "Standard pool rotation.", zh: "常驻标准寻访轮换。"},
  },
  {
    game: "arknights_en", label: {en: "Limited (Collab rerun): Sharpened by Flame", zh: "联动复刻寻访（怪物猎人 第一期）"},
    start: "2026-11-30", end: "2026-12-14", status: "projected",
    featured: [
      { name: "Kirin R Yato", zh: "麒麟R夜刀", img: "arknights/kirin-r-yato" },
      { name: "Rathalos S Noir Corne", zh: "火龙S黑角", img: "arknights/rathalos-s-noir-corne" },
    ],
    note: {en: "Projected from CN (2026-06-15) + ~168-day Global offset.", zh: "按国服日期+约168天推算。"},
  },
  {
    game: "arknights_en", label: {en: "Joint Operation 22", zh: "联合行动 22"},
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
    note: {en: "Projected from CN (2026-06-26, with CC#5). Roster may change on Global.", zh: "按国服推算，阵容可能调整。"},
  },
  {
    game: "arknights_en", label: {en: "Special Headhunting: Deterministic Chaos", zh: "限时寻访「Deterministic Chaos」"},
    start: "2026-12-25", end: "2027-01-08", status: "projected",
    featured: [
      { name: "Aphrissa", zh: "谬因", img: "arknights/aphrissa", isNew: true },
      { name: "Pedro", zh: "佩德洛", img: "arknights/pedro", isNew: true },
      { name: "Wulfenite", zh: "钼铅", img: "arknights/wulfenite" },
    ],
    note: {en: "Projected from CN (2026-07-10).", zh: "按国服推算。"},
  },
  {
    game: "arknights_en", label: {en: "Rerun Headhunting: Dithyramb Unending", zh: "复刻寻访「Dithyramb Unending」"},
    start: "2027-01-04", end: "2027-01-18", status: "projected",
    featured: [
      { name: "Tragodia", zh: "酒神", img: "arknights/tragodia" },
      { name: "Tippi", zh: "蒂比", img: "arknights/tippi" },
      { name: "Alanna", zh: "阿兰娜", img: "arknights/alanna" },
    ],
    note: {en: "Projected from CN (2026-07-20).", zh: "按国服推算。"},
  },

  /* ───────────── Arknights (CN) ───────────── */
  {
    game: "arknights_cn", label: {en: "Limited (Celebration): Cinders of Snow", zh: "限定寻访·庆典「将雪投火」"},
    start: "2026-11-01", end: "2026-11-15", status: "confirmed",
    featured: [
      { name: "Talulah", zh: "塔露拉", img: "arknights/talulah", isNew: true },
      { name: "Toska", zh: "冻河", img: "arknights/toska", isNew: true },
      { name: "SilverAsh the Reignfrost", zh: "凛御银灰", img: "arknights/silverash-the-reignfrost" },
      { name: "Exusiai the New Covenant", zh: "新约能天使", img: "arknights/exusiai-the-new-covenant" },
      { name: "Lappland the Decadenza", zh: "荒芜拉普兰德", img: "arknights/lappland-the-decadenza" },
      { name: "Olga", zh: "奥尔佳", img: "arknights/olga", isNew: true },
    ],
    note: {en: "Talulah (limited) + Toska share 70% of 6★; free Talulah at 300 pulls", zh: "塔露拉[限定]与冻河占6★出率70%；累计300抽赠送塔露拉"},
  },
  {
    game: "arknights_cn", label: {en: "Stronghold Headhunting 01", zh: "卫戍寻访01"},
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
    note: {en: "Tied to Stronghold Protocol season. 6★ pulls only from these 10 operators (2% 6★ rate).", zh: "配合「卫戍协议」；6★仅出现以上10名干员。"},
  },
  {
    game: "arknights_cn", label: {en: "Joint Operation (Selected Operators)", zh: "联合行动·特选干员定向寻访"},
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
    note: {en: "2026 Thank-You Celebration Part 2. 6★/5★ pulls only from these operators.", zh: "2026感谢庆典Part 2；6★/5★仅出现以上干员。"},
  },
  {
    game: "arknights_cn", label: {en: "Limited-time Headhunting (new SideStory)", zh: "限时寻访（SideStory「星星不愿入睡」）"},
    start: "2026-12-08", end: "2026-12-22", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "SideStory 星星不愿入睡 (Londinium) opens early December with new operators (Dev Newsletter #71); dates estimated.", zh: "制作组通讯#71：SideStory「星星不愿入睡」12月上旬开启，新干员登场；日期为预估。"},
  },
  {
    game: "arknights_cn", label: {en: "Rerun Headhunting: 600 Meters Over The Facts", zh: "复刻寻访「现实之上六百米」"},
    start: "2026-12-16", end: "2026-12-30", status: "projected",
    featured: [
      { name: "Cairn", img: "arknights/cairn" },
      { name: "Figurino", img: "arknights/figurino" },
      { name: "Nasti", zh: "娜斯提", img: "arknights/nasti" },
    ],
    note: {en: "Rerun with SideStory 未许之地 in mid-December (Dev Newsletter #71); exact dates TBA.", zh: "制作组通讯#71：12月中旬随SideStory「未许之地」复刻；具体日期待公布。"},
  },
  {
    game: "arknights_cn", label: {en: "New Year Special Headhunting", zh: "跨年限时寻访"},
    start: "2027-01-01", end: "2027-01-15", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "Projected from the 2026-01-01 Celebration & Hope linkup; New Year events announced for late December.", zh: "按2026年1月1日「庆典&希望」推算；跨年系列活动将于12月下旬开启。"},
  },

  /* ───────────── Princess Connect! Re:Dive (JP) ───────────── */
  {
    game: "pcr_jp", label: {en: "Princess Fes", zh: "公主庆典"},
    start: "2026-10-23", end: "2026-10-31", status: "confirmed",
    featured: [{ name: "Aglaea", img: "pcr/aglaea", isNew: true }],
    note: {en: "Limited; ★3 rate doubled", zh: "期间限定；★3出率2倍"},
  },
  {
    game: "pcr_jp", label: {en: "Pick-up", zh: "UP卡池"},
    start: "2026-10-31", end: "2026-11-30", status: "confirmed",
    featured: [{ name: "Almond Eye", zh: "杏目", img: "pcr/almond-eye", isNew: true }],
    note: {en: "Uma Musume collab (limited)", zh: "赛马娘联动（限定）"},
  },
  {
    game: "pcr_jp", label: {en: "Pick-up", zh: "UP卡池"},
    start: "2026-11-10", end: "2026-11-30", status: "confirmed",
    featured: [{ name: "Lucky Lilac", zh: "旺紫丁", img: "pcr/lucky-lilac", isNew: true }],
    note: {en: "Uma Musume collab (limited)", zh: "赛马娘联动（限定）"},
  },
  {
    game: "pcr_jp", label: {en: "Pick-up", zh: "UP卡池"},
    start: "2026-11-16", end: "2026-11-30", status: "confirmed",
    featured: [{ name: "Daring Tact", zh: "谋勇兼备", img: "pcr/daring-tact", isNew: true }],
    note: {en: "Uma Musume collab (limited)", zh: "赛马娘联动（限定）"},
  },
  {
    game: "pcr_jp", label: {en: "Pick-up", zh: "UP卡池"},
    start: "2026-11-30", end: "2026-12-15", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "Christmas limited; projected from the yearly cycle (2025: Nov 30 – Dec 15)", zh: "圣诞限定；按往年周期推算"},
  },
  {
    game: "pcr_jp", label: {en: "Pick-up", zh: "UP卡池"},
    start: "2026-12-15", end: "2026-12-21", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "Second Christmas limited; projected from the yearly cycle", zh: "第二位圣诞限定；按往年周期推算"},
  },
  {
    game: "pcr_jp", label: {en: "Princess Fes", zh: "公主庆典"},
    start: "2026-12-31", end: "2027-01-03", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "Year-end Princess Fes; projected from the yearly cycle", zh: "跨年公主庆典；按往年周期推算"},
  },
  {
    game: "pcr_jp", label: {en: "Pick-up", zh: "UP卡池"},
    start: "2027-01-03", end: "2027-01-15", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "New Year limited; projected from the yearly cycle", zh: "新年限定；按往年周期推算"},
  },

  /* ───────────── Princess Connect! Re:Dive (CN) ───────────── */
  {
    game: "pcr_cn", label: {en: "Princess Fes", zh: "公主庆典"},
    start: "2026-10-30", end: "2026-11-02", status: "projected",
    featured: [{ name: "Arachne", zh: "阿拉克涅", img: "pcr/arachne", isNew: true }],
    note: {en: "Limited; end date estimated from JP (3-day Fes)", zh: "期间限定，结束日期按日服推算"},
  },
  {
    game: "pcr_cn", label: {en: "Pick-up", zh: "精选扭蛋"},
    start: "2026-11-02", end: "2026-11-12", status: "projected",
    featured: [{ name: "Kasumi (Sister)", zh: "香澄（修女）", img: "pcr/kasumi-sister", isNew: true }],
    note: {en: "Limited; end date estimated", zh: "期间限定，结束日期为预估"},
  },
  {
    game: "pcr_cn", label: {en: "Pick-up", zh: "精选扭蛋"},
    start: "2026-11-13", end: "2026-11-28", status: "projected",
    featured: [{ name: "Nana", zh: "纳娜", img: "pcr/nana", isNew: true }],
    note: {en: "New character; end date estimated", zh: "新角色，结束日期为预估"},
  },
  {
    game: "pcr_cn", label: {en: "Pick-up", zh: "精选扭蛋"},
    start: "2026-11-29", end: "2026-12-13", status: "projected",
    featured: [{ name: "Yui (Christmas)", zh: "优衣（圣诞节）", img: "pcr/yui-christmas", isNew: true }],
    note: {en: "Projected from the JP schedule one year earlier", zh: "按日服一年前的排期推算"},
  },
  {
    game: "pcr_cn", label: {en: "Pick-up", zh: "精选扭蛋"},
    start: "2026-12-14", end: "2026-12-20", status: "projected",
    featured: [{ name: "Misora (Christmas)", img: "pcr/misora-christmas", isNew: true }],
    note: {en: "Projected from the JP schedule one year earlier", zh: "按日服一年前的排期推算"},
  },
  {
    game: "pcr_cn", label: {en: "Princess Fes", zh: "公主庆典"},
    start: "2026-12-30", end: "2027-01-02", status: "projected",
    featured: [{ name: "Kokkoro (Kyoudou Youkun)", img: "pcr/kokkoro-kyoudou-youkun", isNew: true }],
    note: {en: "Projected from the JP schedule one year earlier", zh: "按日服一年前的排期推算"},
  },
  {
    game: "pcr_cn", label: {en: "Pick-up", zh: "精选扭蛋"},
    start: "2027-01-02", end: "2027-01-13", status: "projected",
    featured: [{ name: "Shizuru (New Year)", zh: "静流（新年）", img: "pcr/shizuru-new-year", isNew: true }],
    note: {en: "Projected from the JP schedule one year earlier", zh: "按日服一年前的排期推算"},
  },
  {
    game: "pcr_cn", label: {en: "Pick-up", zh: "精选扭蛋"},
    start: "2027-01-14", end: "2027-01-29", status: "projected",
    featured: [{ name: "Rino (New Year)", zh: "璃乃（新年）", img: "pcr/rino-new-year", isNew: true }],
    note: {en: "Projected from the JP schedule one year earlier", zh: "按日服一年前的排期推算"},
  },

  /* ───────────── Project Sekai (JP) ───────────── */
  {
    game: "pjsk_jp", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-10-23", end: "2026-10-29", status: "confirmed",
    featured: [{ name: "Honami Mochizuki", zh: "望月穗波", img: "pjsk/1488", isNew: true }],
    note: {en: "Honami Mochizuki Happy Birthday 2026", zh: "望月穗波 生日 2026"},
  },
  {
    game: "pjsk_jp", label: {en: "Event Pick-Up", zh: "活动招募"},
    start: "2026-10-31", end: "2026-11-11", status: "confirmed",
    featured: [
      { name: "Kanade Yoisaki", zh: "宵崎奏", img: "pjsk/1489", isNew: true },
      { name: "Mafuyu Asahina", zh: "朝比奈真冬", img: "pjsk/1490", isNew: true },
      { name: "Luka Megurine", zh: "巡音流歌", img: "pjsk/1491", isNew: true },
    ],
    note: {en: "Lit in the Dark", zh: "Lit in the Dark"},
  },
  {
    game: "pjsk_jp", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-11-01", end: "2026-11-07", status: "confirmed",
    featured: [{ name: "MEIKO", zh: "MEIKO", img: "pjsk/1494", isNew: true }],
    note: {en: "MEIKO Happy Anniversary 2026", zh: "MEIKO 周年纪念 2026"},
  },
  {
    game: "pjsk_jp", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-11-08", end: "2026-11-14", status: "confirmed",
    featured: [{ name: "Akito Shinonome", zh: "东云彰人", img: "pjsk/1495", isNew: true }],
    note: {en: "Akito Shinonome Happy Birthday 2026", zh: "东云彰人 生日 2026"},
  },
  {
    game: "pjsk_jp", label: {en: "Event Pick-Up", zh: "活动招募"},
    start: "2026-11-11", end: "2026-11-20", status: "confirmed",
    featured: [
      { name: "Shizuku Hinomori", zh: "日野森雫", img: "pjsk/1496", isNew: true },
      { name: "Airi Momoi", zh: "桃井爱莉", img: "pjsk/1497", isNew: true },
      { name: "Rin Kagamine", zh: "镜音铃", img: "pjsk/1498", isNew: true },
    ],
    note: {en: "Captivate YOU！", zh: "Captivate YOU！"},
  },
  {
    game: "pjsk_jp", label: {en: "Limited Rerun", zh: "限定复刻招募"},
    start: "2026-11-12", end: "2026-11-21", status: "confirmed",
    featured: [
      { name: "Ena Shinonome", zh: "东云绘名", img: "pjsk/1272" },
      { name: "Kanade Yoisaki", zh: "宵崎奏", img: "pjsk/1273" },
      { name: "KAITO", zh: "KAITO", img: "pjsk/1274" },
    ],
    note: {en: "Hues of the Self (limited cards)", zh: "Hues of the Self（期间限定卡）"},
  },
  {
    game: "pjsk_jp", label: {en: "Limited Rerun", zh: "限定复刻招募"},
    start: "2026-11-12", end: "2026-11-21", status: "confirmed",
    featured: [
      { name: "Saki Tenma", zh: "天马咲希", img: "pjsk/1127" },
      { name: "Emu Otori", zh: "凤笑梦", img: "pjsk/1128" },
      { name: "Rin Kagamine", zh: "镜音铃", img: "pjsk/1129" },
    ],
    note: {en: "果てなき護るための戦い (limited cards)", zh: "果てなき護るための戦い（期间限定卡）"},
  },
  {
    game: "pjsk_jp", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-12-02", end: "2026-12-08", status: "projected",
    featured: [{ name: "Shizuku Hinomori", zh: "日野森雫", isNew: true }],
    note: {en: "Annual gacha; dates from last year's schedule", zh: "年度卡池，日期按往年推算"},
  },
  {
    game: "pjsk_jp", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-12-23", end: "2026-12-29", status: "projected",
    featured: [{ name: "Rin Kagamine", zh: "镜音铃", isNew: true }],
    note: {en: "Annual gacha; dates from last year's schedule", zh: "年度卡池，日期按往年推算"},
  },
  {
    game: "pjsk_jp", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-12-23", end: "2026-12-29", status: "projected",
    featured: [{ name: "Len Kagamine", zh: "镜音连", isNew: true }],
    note: {en: "Annual gacha; dates from last year's schedule", zh: "年度卡池，日期按往年推算"},
  },
  {
    game: "pjsk_jp", label: {en: "Bloom Festival", zh: "Bloom Festival 招募"},
    start: "2026-12-31", end: "2027-01-04", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "New Year Bloom Festival, estimated from last year", zh: "新春 Bloom Festival，按往年推算"},
  },
  {
    game: "pjsk_jp", label: {en: "Birthday", zh: "生日招募"},
    start: "2027-01-04", end: "2027-01-10", status: "projected",
    featured: [{ name: "Shiho Hinomori", zh: "日野森志步", isNew: true }],
    note: {en: "Annual gacha; dates from last year's schedule", zh: "年度卡池，日期按往年推算"},
  },

  /* ───────────── Project Sekai (EN) ───────────── */
  {
    game: "pjsk_en", label: {en: "Limited Rerun", zh: "限定复刻招募"},
    start: "2026-10-16", end: "2026-10-25", status: "confirmed",
    featured: [
      { name: "Kanade Yoisaki", zh: "宵崎奏", img: "pjsk/878" },
      { name: "Ichika Hoshino", zh: "星乃一歌", img: "pjsk/879" },
      { name: "Mafuyu Asahina", zh: "朝比奈真冬", img: "pjsk/880" },
    ],
    note: {en: "What Awaits After the Battle (limited cards)", zh: "What Awaits After the Battle（期间限定卡）"},
  },
  {
    game: "pjsk_en", label: {en: "Event Pick-Up", zh: "活动招募"},
    start: "2026-10-21", end: "2026-10-31", status: "confirmed",
    featured: [
      { name: "Shizuku Hinomori", zh: "日野森雫", img: "pjsk/1266", isNew: true },
      { name: "Airi Momoi", zh: "桃井爱莉", img: "pjsk/1267", isNew: true },
      { name: "MEIKO", zh: "MEIKO", img: "pjsk/1268", isNew: true },
    ],
    note: {en: "Flowers Reflected in Eyes", zh: "Flowers Reflected in Eyes"},
  },
  {
    game: "pjsk_en", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-10-23", end: "2026-10-29", status: "confirmed",
    featured: [{ name: "Honami Mochizuki", zh: "望月穗波", img: "pjsk/1271", isNew: true }],
    note: {en: "Honami Mochizuki Happy Birthday 2026", zh: "望月穗波 生日 2026"},
  },
  {
    game: "pjsk_en", label: {en: "Limited", zh: "限定招募"},
    start: "2026-10-31", end: "2026-11-10", status: "confirmed",
    featured: [
      { name: "Ena Shinonome", zh: "东云绘名", img: "pjsk/1272", isNew: true },
      { name: "Kanade Yoisaki", zh: "宵崎奏", img: "pjsk/1273", isNew: true },
      { name: "KAITO", zh: "KAITO", img: "pjsk/1274", isNew: true },
    ],
    note: {en: "Hues of the Self (limited cards)", zh: "Hues of the Self（期间限定卡）"},
  },
  {
    game: "pjsk_en", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-11-01", end: "2026-11-07", status: "confirmed",
    featured: [{ name: "MEIKO", zh: "MEIKO", img: "pjsk/1277", isNew: true }],
    note: {en: "MEIKO Happy Anniversary 2026", zh: "MEIKO 周年纪念 2026"},
  },
  {
    game: "pjsk_en", label: {en: "Limited Rerun", zh: "限定复刻招募"},
    start: "2026-11-05", end: "2026-11-14", status: "confirmed",
    featured: [
      { name: "Saki Tenma", zh: "天马咲希", img: "pjsk/1022" },
      { name: "Ichika Hoshino", zh: "星乃一歌", img: "pjsk/1023" },
      { name: "Honami Mochizuki", zh: "望月穗波", img: "pjsk/1024" },
    ],
    note: {en: "Musical Street Corner (limited cards)", zh: "Musical Street Corner（期间限定卡）"},
  },
  {
    game: "pjsk_en", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-11-08", end: "2026-11-14", status: "confirmed",
    featured: [{ name: "Akito Shinonome", zh: "东云彰人", img: "pjsk/1278", isNew: true }],
    note: {en: "Akito Shinonome Happy Birthday 2026", zh: "东云彰人 生日 2026"},
  },
  {
    game: "pjsk_en", label: {en: "Event Pick-Up", zh: "活动招募"},
    start: "2026-11-10", end: "2026-11-20", status: "confirmed",
    featured: [
      { name: "Nene Kusanagi", zh: "草薙宁宁", img: "pjsk/1279", isNew: true },
      { name: "Emu Otori", zh: "凤笑梦", img: "pjsk/1280", isNew: true },
      { name: "Rin Kagamine", zh: "镜音铃", img: "pjsk/1281", isNew: true },
    ],
    note: {en: "Get My Bright Wings", zh: "Get My Bright Wings"},
  },
  {
    game: "pjsk_en", label: {en: "Limited Rerun", zh: "限定复刻招募"},
    start: "2026-11-14", end: "2026-11-23", status: "confirmed",
    featured: [
      { name: "An Shiraishi", zh: "白石杏", img: "pjsk/915" },
      { name: "Kohane Azusawa", zh: "小豆泽心羽", img: "pjsk/916" },
      { name: "Toya Aoyagi", zh: "青柳冬弥", img: "pjsk/917" },
    ],
    note: {en: "Eternal Bout (limited cards)", zh: "Eternal Bout（期间限定卡）"},
  },
  {
    game: "pjsk_en", label: {en: "Event Pick-Up", zh: "活动招募"},
    start: "2026-11-20", end: "2026-11-30", status: "confirmed",
    featured: [
      { name: "Akito Shinonome", zh: "东云彰人", img: "pjsk/1284", isNew: true },
      { name: "Kohane Azusawa", zh: "小豆泽心羽", img: "pjsk/1285", isNew: true },
      { name: "An Shiraishi", zh: "白石杏", img: "pjsk/1286", isNew: true },
    ],
    note: {en: "Good to Go!", zh: "Good to Go!"},
  },
  {
    game: "pjsk_en", label: {en: "Collab Rerun", zh: "联动复刻招募"},
    start: "2026-11-23", end: "2026-12-07", status: "confirmed",
    featured: [
      { name: "Akito Shinonome", zh: "东云彰人", img: "pjsk/1115" },
      { name: "Toya Aoyagi", zh: "青柳冬弥", img: "pjsk/1116" },
      { name: "Tsukasa Tenma", zh: "天马司", img: "pjsk/1117" },
      { name: "Rui Kamishiro", zh: "神代类", img: "pjsk/1118" },
    ],
    note: {en: "Connecting SEKAI with Ensemble (Ensemble Stars!! collab cards)", zh: "偶像梦幻祭2 联动卡复刻"},
  },
  {
    game: "pjsk_en", label: {en: "Limited", zh: "限定招募"},
    start: "2026-11-30", end: "2026-12-10", status: "confirmed",
    featured: [
      { name: "Saki Tenma", zh: "天马咲希", img: "pjsk/1289", isNew: true },
      { name: "Ichika Hoshino", zh: "星乃一歌", img: "pjsk/1290", isNew: true },
      { name: "Honami Mochizuki", zh: "望月穗波", img: "pjsk/1291", isNew: true },
    ],
    note: {en: "Longing Star Chasers (limited cards)", zh: "Longing Star Chasers（期间限定卡）"},
  },
  {
    game: "pjsk_en", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-12-02", end: "2026-12-08", status: "confirmed",
    featured: [{ name: "Shizuku Hinomori", zh: "日野森雫", img: "pjsk/1294", isNew: true }],
    note: {en: "Shizuku Hinomori Happy Birthday 2026", zh: "日野森雫 生日 2026"},
  },
  {
    game: "pjsk_en", label: {en: "Bloom Festival", zh: "Bloom Festival 招募"},
    start: "2026-12-07", end: "2026-12-11", status: "confirmed",
    featured: [
      { name: "Minori Hanasato", zh: "花里实乃理", img: "pjsk/1252" },
      { name: "Akito Shinonome", zh: "东云彰人", img: "pjsk/1253" },
      { name: "An Shiraishi", zh: "白石杏", img: "pjsk/1254" },
      { name: "Saki Tenma", zh: "天马咲希", img: "pjsk/1255" },
      { name: "Haruka Kiritani", zh: "桐谷遥", img: "pjsk/1256" },
      { name: "Mizuki Akiyama", zh: "晓山瑞希", img: "pjsk/1257" },
    ],
    note: {en: "5th Anniversary Bloom Festival — Dream Pick-Up (rerun of earlier fes cards)", zh: "5周年 Bloom Festival 梦想甄选（往期 fes 卡复刻）"},
  },
  {
    game: "pjsk_en", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-12-23", end: "2026-12-29", status: "projected",
    featured: [{ name: "Rin Kagamine", zh: "镜音铃", img: "pjsk/1305", isNew: true }],
    note: {en: "Follows the JP schedule from a year earlier", zh: "按日服一年前的排期推算"},
  },
  {
    game: "pjsk_en", label: {en: "Birthday", zh: "生日招募"},
    start: "2026-12-23", end: "2026-12-29", status: "projected",
    featured: [{ name: "Len Kagamine", zh: "镜音连", img: "pjsk/1306", isNew: true }],
    note: {en: "Follows the JP schedule from a year earlier", zh: "按日服一年前的排期推算"},
  },
  {
    game: "pjsk_en", label: {en: "Birthday", zh: "生日招募"},
    start: "2027-01-04", end: "2027-01-10", status: "projected",
    featured: [{ name: "Shiho Hinomori", zh: "日野森志步", img: "pjsk/1314", isNew: true }],
    note: {en: "Follows the JP schedule from a year earlier", zh: "按日服一年前的排期推算"},
  },

  /* ───────────── Reverse: 1999 (Global) ───────────── */
  {
    game: "r1999", label: {en: "Version 3.8", zh: "3.8版本"},
    start: "2026-10-15", end: "2026-11-04", status: "confirmed",
    featured: [
      { name: "Cornerstone", zh: "奠基石", img: "r1999/cornerstone", isNew: true },
      { name: "Diggers", zh: "挖掘艺术", img: "r1999/diggers" },
      { name: "Desert Flannel", zh: "沙丝绒", img: "r1999/desert-flannel" },
    ],
    note: {en: "The Future's Foundation", zh: "奠基石 限时征集"},
  },
  {
    game: "r1999", label: {en: "Rerun", zh: "复刻征集"},
    start: "2026-10-20", end: "2026-11-02", status: "confirmed",
    featured: [
      { name: "Aleph", zh: "阿莱夫", img: "r1999/aleph" },
      { name: "Kanjira", zh: "坎吉拉", img: "r1999/kanjira" },
      { name: "Loggerhead", zh: "空脑袋", img: "r1999/loggerhead" },
    ],
    note: {en: "The Shattered Product", zh: "阿莱夫 复刻征集"},
  },
  {
    game: "r1999", label: {en: "Rerun", zh: "复刻征集"},
    start: "2026-11-03", end: "2026-11-16", status: "confirmed",
    featured: [
      { name: "Ulrich", zh: "乌尔里希", img: "r1999/ulrich" },
      { name: "Charlie", zh: "夏利", img: "r1999/charlie" },
      { name: "Sweetheart", zh: "玛丽莲", img: "r1999/sweetheart" },
    ],
    note: {en: "Cognitive Dynamics", zh: "乌尔里希 复刻征集"},
  },
  {
    game: "r1999", label: {en: "Version 3.9", zh: "3.9版本"},
    start: "2026-11-05", end: "2026-11-25", status: "confirmed",
    featured: [
      { name: "Hedone", zh: "赫多涅", img: "r1999/hedone", isNew: true },
      { name: "Blonney", zh: "金蜜儿", img: "r1999/blonney" },
      { name: "Ulu", zh: "和平乌鲁", img: "r1999/ulu" },
    ],
    note: {en: "The Reign of Flames Undying", zh: "赫多涅 限时征集"},
  },
  {
    game: "r1999", label: {en: "Special: Ripples on the Water", zh: "特殊征集（3.9自选·6选1）"},
    start: "2026-11-05", end: "2026-12-16", status: "confirmed",
    featured: [
      { name: "Moldir", img: "r1999/moldir" },
      { name: "Noire", img: "r1999/noire" },
      { name: "Regulus", zh: "星锑", img: "r1999/regulus" },
      { name: "Melania", zh: "梅兰妮", img: "r1999/melania" },
      { name: "Recoleta", img: "r1999/recoleta" },
      { name: "Hissabeth", img: "r1999/hissabeth" },
    ],
    note: {en: "3.9 selector: pick 1 of 6 to rate up", zh: "3.9自选：6选1提升概率"},
  },
  {
    game: "r1999", label: {en: "Rerun", zh: "复刻征集"},
    start: "2026-11-17", end: "2026-11-30", status: "confirmed",
    featured: [
      { name: "Brume", zh: "灰调蓝", img: "r1999/brume" },
      { name: "Horropedia", zh: "恐怖通", img: "r1999/horropedia" },
      { name: "Name Day", zh: "命名日", img: "r1999/name-day" },
    ],
    note: {en: "The Brilliance Within", zh: "灰调蓝 复刻征集"},
  },
  {
    game: "r1999", label: {en: "Version 3.9", zh: "3.9版本"},
    start: "2026-11-26", end: "2026-12-16", status: "confirmed",
    featured: [
      { name: "Narcissus", zh: "纳西索斯", img: "r1999/narcissus", isNew: true },
      { name: "Avgust", zh: "阿夫西维", img: "r1999/avgust" },
      { name: "X", zh: "X", img: "r1999/x" },
    ],
    note: {en: "Lend an Ear to the Pond", zh: "纳西索斯 限时征集"},
  },
  {
    game: "r1999", label: {en: "Rerun", zh: "复刻征集"},
    start: "2026-12-01", end: "2026-12-14", status: "projected",
    featured: [
      { name: "Enigma", zh: "哑谜", img: "r1999/enigma" },
      { name: "Brimley", zh: "宽檐帽", img: "r1999/brimley" },
      { name: "Balloon Party", zh: "气球派对", img: "r1999/balloon-party" },
    ],
    note: {en: "Deciphering Reality", zh: "哑谜 复刻征集"},
  },
  {
    game: "r1999", label: {en: "Special: Boon of the Water", zh: "特殊征集（3.9自选·9选3）"},
    start: "2026-12-01", end: "2026-12-16", status: "confirmed",
    featured: [
      { name: "Ulrich", zh: "乌尔里希", img: "r1999/ulrich" },
      { name: "Corvus", img: "r1999/corvus" },
      { name: "Igor", img: "r1999/igor" },
      { name: "Marsha", img: "r1999/marsha" },
      { name: "Barcarola", img: "r1999/barcarola" },
      { name: "Aleph", zh: "阿莱夫", img: "r1999/aleph" },
      { name: "Lorentz Butterfly", img: "r1999/lorentz-butterfly" },
      { name: "Charon", img: "r1999/charon" },
      { name: "Recoleta", img: "r1999/recoleta" },
    ],
    note: {en: "3.9 selector: pick 3 of 9 to rate up", zh: "3.9自选：9选3提升概率"},
  },
  {
    game: "r1999", label: {en: "Rerun", zh: "复刻征集"},
    start: "2026-12-15", end: "2026-12-28", status: "projected",
    featured: [
      { name: "Flutterpage", zh: "纸信圈儿", img: "r1999/flutterpage" },
      { name: "Necrologist", zh: "讣告人", img: "r1999/necrologist" },
      { name: "Satsuki", zh: "五色月", img: "r1999/satsuki" },
    ],
    note: {en: "The Book of Whys", zh: "纸信圈儿 复刻征集"},
  },
  {
    game: "r1999", label: {en: "Version 4.0", zh: "4.0版本"},
    start: "2026-12-17", end: "2027-01-06", status: "projected",
    featured: [{ name: "Huntsworn Lilya", zh: "狩勋女巫红弩箭", img: "r1999/huntsworn-lilya", isNew: true }],
    note: {en: "Projected from the CN 4.0 schedule", zh: "据国服4.0推算"},
  },
  {
    game: "r1999", label: {en: "Version 4.0", zh: "4.0版本"},
    start: "2027-01-07", end: "2027-01-27", status: "projected",
    featured: [{ name: "Drake", zh: "德雷克", img: "r1999/drake", isNew: true }],
    note: {en: "Projected from the CN 4.0 schedule", zh: "据国服4.0推算"},
  },

  /* ───────────── hololive Dreams ───────────── */
  {
    game: "holodori", label: {en: "Limited", zh: "限定卡池"},
    start: "2026-11-06", end: "2026-11-14", status: "confirmed",
    featured: [
      { name: "Ayunda Risu", img: "holodori/ayunda-risu", isNew: true },
      { name: "Moona Hoshinova", img: "holodori/moona-hoshinova", isNew: true },
      { name: "Airani Iofifteen", img: "holodori/airani-iofifteen", isNew: true },
    ],
    note: {en: "Cozy Chill Time (AREA15 pajamas)", zh: "ぬくもりのチルタイム（AREA15 睡衣）"},
  },
  {
    game: "holodori", label: {en: "Limited", zh: "限定卡池"},
    start: "2026-11-14", end: "2026-11-26", status: "confirmed",
    featured: [
      { name: "IRyS", img: "holodori/irys", isNew: true },
      { name: "Usada Pekora", zh: "兔田佩克拉", img: "holodori/usada-pekora", isNew: true },
      { name: "Roboco", zh: "萝卜子", img: "holodori/roboco-san", isNew: true },
      { name: "Momosuzu Nene", zh: "桃铃音音", img: "holodori/momosuzu-nene", isNew: true },
      { name: "Pavolia Reine", img: "holodori/pavolia-reine", isNew: true },
    ],
    note: {en: "Autumn Outing (autumn outfits)", zh: "うららかな秋におでかけ（秋装）"},
  },

  /* ───────────── Azur Lane (EN) ───────────── */
  {
    game: "azurlane_en", label: {en: "Event construction", zh: "限时建造"},
    start: "2026-10-22", end: "2026-11-04", status: "confirmed",
    featured: [
      { name: "Merkuriy", zh: "水星号", img: "azurlane/merkuriy", isNew: true },
      { name: "Selimiye", zh: "塞利米耶号", img: "azurlane/selimiye", isNew: true },
      { name: "Ormrinn Langi", zh: "长蛇号", img: "azurlane/ormrinn-langi", isNew: true },
      { name: "Járnbarðinn", zh: "铁角号", img: "azurlane/jarnbardinn", isNew: true },
    ],
    note: {en: "Tempesta and the Corridor of Fog", zh: "飓风与雾霭回廊"},
  },
  {
    game: "azurlane_en", label: {en: "Event construction", zh: "限时建造"},
    start: "2026-12-17", end: "2027-01-06", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "New Year UR event (projected from last year's Dec 18 – Jan 7 cycle; ships not announced yet)", zh: "新年UR大型活动（按去年周期推算，舰船待公布）"},
  },

  /* ───────────── Azur Lane (CN) ───────────── */
  {
    game: "azurlane_cn", label: {en: "Event construction", zh: "限时建造"},
    start: "2026-10-22", end: "2026-11-04", status: "confirmed",
    featured: [
      { name: "Merkuriy", zh: "水星号", img: "azurlane/merkuriy", isNew: true },
      { name: "Selimiye", zh: "塞利米耶号", img: "azurlane/selimiye", isNew: true },
      { name: "Ormrinn Langi", zh: "长蛇号", img: "azurlane/ormrinn-langi", isNew: true },
      { name: "Járnbarðinn", zh: "铁角号", img: "azurlane/jarnbardinn", isNew: true },
    ],
    note: {en: "Tempesta and the Corridor of Fog", zh: "飓风与雾霭回廊"},
  },
  {
    game: "azurlane_cn", label: {en: "Event construction", zh: "限时建造"},
    start: "2026-12-17", end: "2027-01-06", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "New Year UR event (projected from last year's Dec 18 – Jan 7 cycle; ships not announced yet)", zh: "新年UR大型活动（按去年周期推算，舰船待公布）"},
  },

  /* ───────────── BanG Dream! Our Notes ───────────── */
  {
    game: "ournotes", label: {en: "Halloween limited", zh: "万圣节限定"},
    start: "2026-10-28", end: "2026-11-07", status: "confirmed",
    featured: [
      { name: "Taki Shiina", zh: "椎名立希", isNew: true },
      { name: "Uika Misumi", zh: "三角初华", isNew: true },
    ],
  },
  {
    game: "ournotes", label: {en: "Mugendai MewType anniversary", zh: "梦限大MewType 周年"},
    start: "2026-11-18", end: "2026-11-20", status: "projected",
    featured: [{ name: "TBA" }],
    note: {en: "Anniversary campaign; gacha lineup not announced yet", zh: "周年活动，卡池阵容尚未公布"},
  },

];

window.LAST_UPDATED = "2026-11-15";
