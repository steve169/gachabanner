/*
 * Update history shown from the version badge (top right). Newest first.
 * Add an entry at the top for every release: { version, date: "YYYY-MM-DD", changes: [{ en, zh }, …] }.
 */
window.CHANGELOG = [
  {
    version: "1.13", date: "2026-11-20",
    changes: [
      { en: "New \"Today\" button (bottom right) jumps to today's banners; a Today line marks where today begins.", zh: "新增「今天」按钮（右下角），一键跳转到今天的卡池，并用「今天」分隔线标出位置。" },
      { en: "Banner refresh for every game: dates corrected, newly announced banners added and projections confirmed where official, with 200+ new character images.", zh: "全部游戏卡池更新：修正日期、补充新公布的卡池、确认官方已公布的预测卡池，新增200余张角色图片。" },
    ],
  },
  {
    version: "1.12", date: "2026-11-15",
    changes: [
      { en: "Uma Musume (JP): Daring Tact limited banner from Nov 16.", zh: "赛马娘（日服）：谋勇兼备限定卡池11月16日开启。" },
    ],
  },
  {
    version: "1.11", date: "2026-11-15",
    changes: [
      { en: "\"Live now\" and the game filter now look like buttons, say what they do (Show all / Choose) and pulse until first used; their icon rows are clickable too.", zh: "「正在进行」和游戏筛选改为更醒目的按钮，显示操作提示（展开全部 / 选择），首次使用前会闪烁提示；旁边的图标行也可点击。" },
    ],
  },
  {
    version: "1.10", date: "2026-11-15",
    changes: [
      { en: "FGO class banners (Grand Duel) show the class emblem; all 14 class icons added.", zh: "FGO职阶卡池（冠位戴冠战）改为显示职阶图标，并补齐14个职阶图标。" },
      { en: "Girls' Frontline 2 is now split into Global and CN servers; the Global rate-up was corrected from the official update notes.", zh: "少女前线2：追放拆分为国际服与国服；国际服UP角色已按官方更新公告更正。" },
    ],
  },
  {
    version: "1.9", date: "2026-11-15",
    changes: [
      { en: "New \"Only upcoming banners\" option hides banners that have already started.", zh: "新增「仅显示未开始的卡池」选项，隐藏已开始的卡池。" },
    ],
  },
  {
    version: "1.8", date: "2026-11-15",
    changes: [
      { en: "Version badge and this update history.", zh: "新增版本号与更新记录。" },
      { en: "\"Live now\" can be sorted by default order or by ending soonest.", zh: "「正在进行」可按默认顺序或即将结束排序。" },
      { en: "Progress bars now show the time remaining and empty as a banner nears its end.", zh: "进度条改为显示剩余时间，随卡池临近结束逐渐减少。" },
    ],
  },
  {
    version: "1.7", date: "2026-11-14",
    changes: [
      { en: "Added hololive Dreams.", zh: "新增 hololive Dreams。" },
      { en: "Pull counts show at most two decimals.", zh: "抽数最多显示两位小数。" },
      { en: "FGO CN: Nitocris on the Road to Finale #7 banner is Nitocris (Alter).", zh: "FGO国服：Road to 终章 第7章卡池的尼托克丽丝更正为尼托克丽丝〔Alter〕。" },
    ],
  },
  {
    version: "1.6", date: "2026-11-14",
    changes: [
      { en: "Click a banner for a live countdown and the currency / pulls dailies give before it starts or ends, with and without the monthly pass.", zh: "点击卡池查看倒计时，以及开始或结束前每日任务可获得的资源与抽数（含/不含月卡）。" },
      { en: "Added Princess Connect! Re:Dive (JP, CN), Project Sekai (JP, EN) and Reverse: 1999 (Global).", zh: "新增公主连结（日服、国服）、世界计划（日服、国际服）和重返未来：1999（国际服）。" },
    ],
  },
  {
    version: "1.5", date: "2026-11-14",
    changes: [
      { en: "Server filter (CN / EN / JP) for games on several servers.", zh: "新增服务器筛选（国服 / 国际服 / 日服）。" },
      { en: "Added Arknights (EN, CN) and Azur Lane (EN, CN).", zh: "新增明日方舟（国际服、国服）和碧蓝航线（国际服、国服）。" },
      { en: "Cards with many characters show a +N tile.", zh: "角色较多的卡池显示「+N」。" },
    ],
  },
  {
    version: "1.4", date: "2026-11-14",
    changes: [
      { en: "Added Blue Archive, FGO (JP, CN, NA), Uma Musume Global, BanG Dream! Girls Band Party (JP, EN, CN) and Our Notes.", zh: "新增蔚蓝档案、FGO（日服、国服、美服）、赛马娘国际服、梦想协奏曲！少女乐团派对！（日服、国际服、国服）和 Our Notes。" },
      { en: "\"Live now\" is collapsible.", zh: "「正在进行」可折叠。" },
      { en: "Official Chinese names for many more characters.", zh: "补充大量角色的官方中文名。" },
    ],
  },
  {
    version: "1.3", date: "2026-11-14",
    changes: [
      { en: "Full-width banner cards with side-by-side portraits.", zh: "卡池卡片改为整行显示，角色立绘并排展示。" },
      { en: "Collapsible game filter.", zh: "游戏筛选可折叠。" },
    ],
  },
  {
    version: "1.2", date: "2026-11-14",
    changes: [
      { en: "Real app icons and character portraits.", zh: "使用真实的游戏图标与角色立绘。" },
      { en: "Fixed the page breaking for returning visitors after an update.", zh: "修复更新后老访客页面显示异常的问题。" },
    ],
  },
  {
    version: "1.1", date: "2026-11-14",
    changes: [
      { en: "Added Wuthering Waves, Arknights: Endfield, Neverness to Everness, Girls' Frontline 2, Madoka Magica Exedra and Uma Musume (JP).", zh: "新增鸣潮、明日方舟：终末地、异环、少女前线2：追放、魔法少女小圆 Exedra 和赛马娘（日服）。" },
      { en: "English / Simplified Chinese language switch.", zh: "新增英文 / 简体中文切换。" },
    ],
  },
  {
    version: "1.0", date: "2026-11-14",
    changes: [
      { en: "First release: rate-up calendar for Genshin Impact, Honkai: Star Rail and Zenless Zone Zero.", zh: "首个版本：原神、崩坏：星穹铁道、绝区零的卡池日历。" },
    ],
  },
];
