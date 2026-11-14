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
  uma:      { name: { en: "Uma Musume (JP)",      zh: "赛马娘（日服）" },         glyph: "马", icon: "assets/icons/uma.webp", color: "#7ddc6a", short: "UMA" },
  uma_gl:   { name: { en: "Uma Musume (Global)",  zh: "赛马娘（国际服）" },       glyph: "马", icon: "assets/icons/uma_gl.webp", color: "#a8e86b", short: "UMA-GL" },
  bluearchive: { name: { en: "Blue Archive (Global)", zh: "蔚蓝档案（国际服）" }, glyph: "蔚", icon: "assets/icons/bluearchive.webp", color: "#38c2f2", short: "BA" },
  fgo_jp:   { name: { en: "FGO (JP)",             zh: "FGO（日服）" },             glyph: "冠", icon: "assets/icons/fgo_jp.webp", color: "#d9b44a", short: "FGO-JP" },
  fgo_cn:   { name: { en: "FGO (CN)",             zh: "FGO（国服）" },             glyph: "冠", icon: "assets/icons/fgo_cn.webp", color: "#e8c15a", short: "FGO-CN" },
  fgo_na:   { name: { en: "FGO (NA)",             zh: "FGO（美服）" },             glyph: "冠", icon: "assets/icons/fgo_na.webp", color: "#c7a23c", short: "FGO-NA" },
  gbp_jp:   { name: { en: "BanG Dream! GBP (JP)", zh: "梦想协奏曲！少女乐团派对！（日服）" }, glyph: "邦", icon: "assets/icons/gbp_jp.webp", color: "#ff3377", short: "GBP-JP" },
  gbp_en:   { name: { en: "BanG Dream! GBP (EN)", zh: "梦想协奏曲！少女乐团派对！（国际服）" }, glyph: "邦", icon: "assets/icons/gbp_en.webp", color: "#ff5c93", short: "GBP-EN" },
  gbp_cn:   { name: { en: "BanG Dream! GBP (CN)", zh: "梦想协奏曲！少女乐团派对！（国服）" }, glyph: "邦", icon: "assets/icons/gbp_cn.webp", color: "#ff7aa8", short: "GBP-CN" },
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
    featured: [{ name: "Tezcatlipoca", zh: "特斯卡特利波卡", img: "fgo/tezcatlipoca" }, { name: "Nitocris", zh: "尼托克丽丝" }],
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

window.LAST_UPDATED = "2026-11-14";
