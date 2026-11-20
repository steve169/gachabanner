(() => {
  const GAMES = window.GAMES;
  const BANNERS = window.BANNERS.slice().sort((a, b) => a.start.localeCompare(b.start) || a.game.localeCompare(b.game));
  BANNERS.forEach((b, i) => { b.id = i; });
  const ECONOMY = window.ECONOMY || {};

  /* ── i18n ── */
  const I18N = {
    en: {
      eyebrow: "GACHA BANNER CALENDAR",
      title: "Rate-Up Calendar",
      sub: "Rate-up banners for popular gacha games",
      rangeNote: "key banner dates at a glance",
      showPast: "Show past",
      onlyUpcoming: "Only upcoming banners",
      jumpToday: "Today",
      jumpTodayTitle: "Jump to today's banners",
      todayLine: (d) => `Today · ${d}`,
      emptyUpcoming: "No upcoming banners for the selected games.",
      games: "Games",
      filterOpen: "Choose", filterClose: "Done",
      liveOpen: "Show all", liveClose: "Hide",
      server: "Server",
      gameLabel: "Games",
      serverNames: { CN: "CN", EN: "EN / Global", JP: "JP" },
      exportIcs: "⤓ Export .ics",
      all: "All",
      liveNow: "Live now",
      up: "UP",
      phase: (p) => `Phase ${p}`,
      isNew: "New", rerun: "Rerun",
      endsToday: "Ends today",
      endsIn: (n, d) => `Ends in ${n}d · ${d}`,
      upcoming: (s, e, n) => `${s} – ${e} · in ${n}d`,
      ended: (s, e) => `${s} – ${e} · ended`,
      status: { confirmed: "Confirmed", projected: "Projected", leak: "Leak" },
      legend: { confirmed: "officially announced", projected: "estimated from the usual cycle", leak: "based on leaks, may change" },
      foot: (u) => `Dates are approximate server dates; check in-game for exact times. Last updated ${u}. Fan-made, not affiliated with any publisher; game icons and character art © their respective owners.`,
      empty: "No upcoming banners for the selected games.",
      monthHead: (d) => `<span class="m-big">${MONTH_SHORT[d.getMonth()]}</span> <small>${MONTH_LONG[d.getMonth()].toUpperCase()} · ${d.getFullYear()}</small>`,
      weekday: (d) => ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][d.getDay()],
      today: "TODAY",
      date: (d) => `${MONTH_SHORT[d.getMonth()]} ${d.getDate()}`,
      tba: "TBA",
      clickHint: "Click for countdown & income",
      historyTitle: "Update history",
      versionLbl: (v, d) => `v${v} · ${d}`,
      sortBy: "Sort",
      sortDefault: "Default",
      sortEnding: "Ending soonest",
      timeLeft: "Time left",
      startsIn: "Starts in",
      endedLbl: "This banner has ended.",
      earnEnd: (n) => `Earnable from dailies before it ends (${n} ${n === 1 ? "day" : "days"}, including today)`,
      earnStart: (n) => `Earnable from dailies before it starts (${n} ${n === 1 ? "day" : "days"}, including today)`,
      without: (p) => `Without ${p}`,
      with: (p) => `With ${p}`,
      pulls: (n) => (Math.abs(n - 1) < 1e-9 ? "pull" : "pulls"),
      perPull: (n, c) => `${n} ${c} = 1 pull`,
      perDay: (n) => `${n}/day`,
      noEcon: "Daily income data isn't available for this game yet.",
      fgoHead: "Daily login bonus only",
      sqLbl: "Saint Quartz", ticketLbl: "Summon Tickets", totalPulls: "Total pulls",
      approx: "Countdown uses approximate times (end of the last day / start of the first day, your local time). Dailies counted per remaining day; weeklies, events and one-off rewards are not included.",
      dhms: (d, h, m, s) => `${d}d ${h}h ${m}m ${s}s`,
    },
    zh: {
      eyebrow: "GACHA BANNER CALENDAR",
      title: "二游卡池日历",
      sub: "二次元手游 · 版本 & 卡池排期",
      rangeNote: "关键节点一览",
      showPast: "显示已结束",
      onlyUpcoming: "仅显示未开始的卡池",
      jumpToday: "今天",
      jumpTodayTitle: "跳转到今天的卡池",
      todayLine: (d) => `今天 · ${d}`,
      emptyUpcoming: "所选游戏暂无未开始的卡池。",
      games: "游戏筛选",
      filterOpen: "选择", filterClose: "完成",
      liveOpen: "展开全部", liveClose: "收起",
      server: "服务器",
      gameLabel: "游戏",
      serverNames: { CN: "国服", EN: "国际服", JP: "日服" },
      exportIcs: "⤓ 导出日历",
      all: "全部",
      liveNow: "正在进行",
      up: "UP",
      phase: (p) => (p === 1 ? "上半" : "下半"),
      isNew: "新角色", rerun: "复刻",
      endsToday: "今日结束",
      endsIn: (n, d) => `剩余 ${n} 天 · ${d}结束`,
      upcoming: (s, e, n) => `${s} – ${e} · ${n} 天后`,
      ended: (s, e) => `${s} – ${e} · 已结束`,
      status: { confirmed: "已确认", projected: "预测", leak: "爆料" },
      legend: { confirmed: "官方已公布", projected: "按常规周期推算", leak: "来自爆料，可能变动" },
      foot: (u) => `日期为大致的服务器日期，具体时间请以游戏内公告为准。最后更新：${u}。粉丝自制，与各游戏厂商无关；游戏图标及角色立绘版权归各自所有者。`,
      empty: "所选游戏暂无即将开启的卡池。",
      monthHead: (d) => `<span class="m-big">${d.getMonth() + 1}月</span> <small>${MONTH_SHORT[d.getMonth()].toUpperCase()} · ${d.getFullYear()}</small>`,
      weekday: (d) => ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][d.getDay()],
      today: "今天",
      date: (d) => `${d.getMonth() + 1}月${d.getDate()}日`,
      tba: "待定",
      clickHint: "点击查看倒计时与可获得资源",
      historyTitle: "更新记录",
      versionLbl: (v, d) => `v${v} · ${d}`,
      sortBy: "排序",
      sortDefault: "默认",
      sortEnding: "即将结束",
      timeLeft: "剩余时间",
      startsIn: "距离开始",
      endedLbl: "该卡池已结束。",
      earnEnd: (n) => `卡池结束前每日任务可获得（${n} 天，含今天）`,
      earnStart: (n) => `卡池开始前每日任务可获得（${n} 天，含今天）`,
      without: (p) => `无${p}`,
      with: (p) => `有${p}`,
      pulls: () => "抽",
      perPull: (n, c) => `${n} ${c} = 1 抽`,
      perDay: (n) => `每日 ${n}`,
      noEcon: "暂无该游戏的每日资源数据。",
      fgoHead: "仅计算每日登录奖励",
      sqLbl: "圣晶石", ticketLbl: "呼符", totalPulls: "合计抽数",
      approx: "倒计时为大致时间（按本地时间的最后一天结束 / 第一天开始计算）。每日资源按剩余天数计算，不含周常、活动及一次性奖励。",
      dhms: (d, h, m, s) => `${d}天 ${h}时 ${m}分 ${s}秒`,
    },
  };
  const MONTH_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const MONTH_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const ELEMENTS = {
    pyro: "#ff6b4a", fire: "#ff6b4a",
    hydro: "#3fa9ff",
    electro: "#b07cff", lightning: "#b07cff",
    cryo: "#8fe3ff", ice: "#8fe3ff",
    anemo: "#4fe0b5", wind: "#4fe0b5",
    geo: "#f0b84a",
    dendro: "#8fd14f",
    physical: "#b9bfd3",
    quantum: "#6f6cff",
    imaginary: "#f7d75a", spectro: "#f7d75a",
    ether: "#ff5fa8",
  };

  /* ── helpers ── */
  const parse = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const DAY = 86400000;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  /* ── state ── */
  // Games split by server carry `server` in GAMES; the server filter only affects those.
  const SERVERS = ["CN", "EN", "JP"];
  const defaultLang = (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
  const savedGames = store.get("games", null);
  const state = {
    lang: I18N[store.get("lang", defaultLang)] ? store.get("lang", defaultLang) : "en",
    games: new Set(Array.isArray(savedGames) ? savedGames.filter((g) => GAMES[g]) : Object.keys(GAMES)),
    showPast: store.get("showPast", false),
    onlyUpcoming: store.get("onlyUpcoming", false),
    open: new Set(),
    liveSort: store.get("liveSort", "default") === "ending" ? "ending" : "default",
    servers: new Set((store.get("servers", null) || SERVERS).filter((x) => SERVERS.includes(x))),
  };
  if (state.servers.size === 0) SERVERS.forEach((x) => state.servers.add(x));
  // Games added after a viewer saved their filter should show up for them too.
  // (Visitors from the first release saved filters before knownGames existed; that release had these three.)
  const knownGames = store.get("knownGames", Array.isArray(savedGames) ? ["genshin", "hsr", "zzz"] : null);
  if (Array.isArray(knownGames)) for (const g of Object.keys(GAMES)) if (!knownGames.includes(g)) state.games.add(g);
  store.set("knownGames", Object.keys(GAMES));
  if (state.games.size === 0) Object.keys(GAMES).forEach((g) => state.games.add(g));

  const T = () => I18N[state.lang];
  const tx = (v) => (v == null ? "" : typeof v === "string" ? v : v[state.lang] ?? v.en ?? "");
  const shown = (key) => state.games.has(key) && (!GAMES[key].server || state.servers.has(GAMES[key].server));
  const unitName = (f) => (f.name === "TBA" ? T().tba : state.lang === "zh" && f.zh ? f.zh : f.name);

  /* ── stars ── */
  const stars = document.querySelector(".stars");
  for (let i = 0; i < 90; i++) {
    const s = document.createElement("i");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 4 + "s";
    if (Math.random() < 0.2) s.style.width = s.style.height = "3px";
    stars.appendChild(s);
  }

  /* ── static controls ── */
  const firstStart = parse(BANNERS.reduce((m, b) => (parse(b.end) >= today && b.start < m ? b.start : m), "9999-12-31"));
  const lastStart = parse(BANNERS[BANNERS.length - 1].start);
  const ym = (d) => `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}`;
  document.getElementById("range-text").textContent = `${ym(firstStart)} — ${ym(lastStart)}`;

  const langBar = document.getElementById("lang-bar");
  langBar.querySelectorAll("button").forEach((b) => {
    b.onclick = () => { state.lang = b.dataset.lang; store.set("lang", state.lang); render(); };
  });

  const filtersEl = document.getElementById("game-filters");
  const liveGrid = document.getElementById("live-grid");
  const liveToggle = document.getElementById("live-toggle");
  const filterToggle = document.getElementById("filter-toggle");
  // Toggle buttons say what clicking does ("Show all" / "Hide"), and pulse until a visitor first uses them.
  const syncToggleText = () => {
    const t = T();
    document.getElementById("live-action").textContent = liveGrid.hidden ? t.liveOpen : t.liveClose;
    document.getElementById("filter-action").textContent = filtersEl.hidden ? t.filterOpen : t.filterClose;
  };
  const markUsed = (btn, key) => { btn.classList.remove("hint"); store.set(key, true); };
  if (!store.get("usedLive", false)) liveToggle.classList.add("hint");
  if (!store.get("usedFilter", false)) filterToggle.classList.add("hint");
  const setLiveOpen = (open) => { liveGrid.hidden = !open; liveToggle.setAttribute("aria-expanded", open); syncToggleText(); };
  liveToggle.onclick = () => { const open = liveGrid.hidden; setLiveOpen(open); store.set("liveOpen", open); markUsed(liveToggle, "usedLive"); };
  filterToggle.onclick = () => {
    const open = filtersEl.hidden;
    filtersEl.hidden = !open;
    filterToggle.setAttribute("aria-expanded", open);
    syncToggleText();
    markUsed(filterToggle, "usedFilter");
  };
  // The icon rows next to each toggle open it too.
  document.getElementById("live-icons").onclick = () => liveToggle.click();
  document.getElementById("selected-icons").onclick = () => filterToggle.click();
  const mkRow = (cls) => {
    const row = document.createElement("div"); row.className = `filter-row ${cls}`;
    const lbl = document.createElement("span"); lbl.className = "filter-label"; row.appendChild(lbl);
    const chips = document.createElement("div"); chips.className = "filter-chips"; row.appendChild(chips);
    filtersEl.appendChild(row); return chips;
  };
  const serverChips = mkRow("server-row");
  const gameChips = mkRow("game-row");
  for (const sv of SERVERS) {
    const b = document.createElement("button");
    b.className = "chip chip-server"; b.type = "button"; b.dataset.server = sv;
    b.onclick = () => {
      state.servers.has(sv) ? state.servers.delete(sv) : state.servers.add(sv);
      if (state.servers.size === 0) state.servers.add(sv);
      store.set("servers", [...state.servers]);
      render();
    };
    serverChips.appendChild(b);
  }
  const allChip = document.createElement("button");
  allChip.className = "chip chip-all"; allChip.type = "button";
  allChip.onclick = () => {
    const allOn = state.games.size === Object.keys(GAMES).length;
    state.games = new Set(allOn ? [Object.keys(GAMES)[0]] : Object.keys(GAMES));
    store.set("games", [...state.games]);
    render();
  };
  gameChips.appendChild(allChip);
  for (const [key, g] of Object.entries(GAMES)) {
    const b = document.createElement("button");
    b.className = "chip"; b.type = "button"; b.dataset.game = key;
    b.style.setProperty("--c", g.color);
    b.onclick = () => {
      state.games.has(key) ? state.games.delete(key) : state.games.add(key);
      if (state.games.size === 0) state.games.add(key);
      store.set("games", [...state.games]);
      render();
    };
    gameChips.appendChild(b);
  }

  const pastBox = document.getElementById("show-past");
  pastBox.checked = state.showPast;
  pastBox.onchange = () => { state.showPast = pastBox.checked; store.set("showPast", state.showPast); render(); };
  // "Only upcoming" hides ongoing and past banners in the calendar; "Show past" doesn't apply while it's on.
  const upcomingBox = document.getElementById("only-upcoming");
  upcomingBox.checked = state.onlyUpcoming;
  upcomingBox.onchange = () => { state.onlyUpcoming = upcomingBox.checked; store.set("onlyUpcoming", state.onlyUpcoming); render(); };

  /* ── card ── */
  // App icon with the glyph underneath as a fallback if the image is missing.
  const iconHtml = (g, extra = "") =>
    `<span class="icon${extra}" title="${esc(tx(g.name))}">${esc(g.glyph)}${g.icon ? `<img src="${esc(g.icon)}" alt="" onerror="this.remove()">` : ""}</span>`;

  function pillText(b) {
    if (b.label) return tx(b.label);
    return [b.version, b.phase ? T().phase(b.phase) : ""].filter(Boolean).join(" ");
  }

  function timing(b) {
    const t = T(), s = parse(b.start), e = parse(b.end);
    const live = s <= today && today <= e;
    if (live) {
      const left = Math.round((e - today) / DAY);
      // Share of the banner still remaining (counting today), so the bar empties as it nears the end.
      const pct = (((e - today) / DAY + 1) / ((e - s) / DAY + 1)) * 100;
      return { live, text: left === 0 ? t.endsToday : t.endsIn(left, t.date(e)), pct };
    }
    if (today < s) return { live, text: t.upcoming(t.date(s), t.date(e), Math.round((s - today) / DAY)) };
    return { live, text: t.ended(t.date(s), t.date(e)) };
  }

  /* ── details panel: countdown + daily income ── */
  const fmtNum = (x, dp = 2) => {
    const v = Math.round(x * 10 ** dp) / 10 ** dp;
    return v.toLocaleString(state.lang === "zh" ? "zh-CN" : "en-US", { maximumFractionDigits: dp });
  };
  const econFor = (key) => {
    const g = GAMES[key];
    const e = ECONOMY[g.economy || key] || ECONOMY[key.replace(/_(jp|cn|en|na|gl)$/, "")];
    return e || null;
  };
  // Countdown target: start of the first day (upcoming) or end of the last day (ongoing), local time.
  const targetOf = (b) => {
    const s = parse(b.start), e = parse(b.end);
    if (today < s) return { kind: "start", at: +s };
    if (today <= e) return { kind: "end", at: +e + DAY - 1000 };
    return { kind: "past" };
  };
  const countdownText = (ms) => {
    const sec = Math.max(0, Math.floor(ms / 1000));
    return T().dhms(Math.floor(sec / 86400), Math.floor(sec / 3600) % 24, Math.floor(sec / 60) % 60, sec % 60);
  };

  function details(b) {
    const t = T(), g = GAMES[b.game], tg = targetOf(b);
    if (tg.kind === "past") return `<div class="details"><p>${esc(t.endedLbl)}</p></div>`;
    // Daily resets you can still use, counting today: today … end day (ongoing) or today … the day before start (upcoming).
    const days = tg.kind === "end" ? Math.round((parse(b.end) - today) / DAY) + 1 : Math.round((parse(b.start) - today) / DAY);
    let econ = `<p class="muted">${esc(t.noEcon)}</p>`;
    let e = econFor(b.game);
    if (e && e.unsupported) {
      econ = `<p class="muted">${esc(tx(e.unsupported))}</p>`;
    } else if (e && e.fgo) {
      const sv = (e.servers || {})[g.server || "JP"];
      if (sv) {
        const sqDay = (sv.weeklySQ + (sv.weeklyFragments || 0) / 7) / 7 + (sv.per50SQ || 0) / 50, tkDay = (sv.weeklyTickets || 0) / 7;
        const sq = sqDay * days, tk = tkDay * days;
        econ = `<div class="econ-head">${esc(t.fgoHead)} · ${esc(t.perPull(e.perPull, tx(e.currency)))}</div>
          <table class="econ"><tbody>
            <tr><th>${esc(tx(e.currency))}</th><td>${fmtNum(sq, 2)}</td><td>${fmtNum(sq / e.perPull)} ${esc(t.pulls(sq / e.perPull))}</td></tr>
            <tr><th>${esc(tx(e.ticket))}</th><td>${fmtNum(tk, 2)}</td><td>${fmtNum(tk)} ${esc(t.pulls(tk))}</td></tr>
            <tr class="total"><th>${esc(t.totalPulls)}</th><td></td><td>${fmtNum(sq / e.perPull + tk)} ${esc(t.pulls(sq / e.perPull + tk))}</td></tr>
          </tbody></table>${e.note ? `<p class="muted">${esc(tx(e.note))}</p>` : ""}`;
      }
    } else if (e && e.perPull && e.daily != null) {
      // Values can differ per server: { JP: 50, EN: 75 }.
      const bySv = (v) => (v && typeof v === "object" ? v[g.server] ?? Object.values(v)[0] : v);
      e = { ...e, daily: bySv(e.daily), passDaily: bySv(e.passDaily) };
      const cur = tx(e.currency);
      const free = days * e.daily;
      const rows = [`<tr><th>${esc(e.pass ? t.without(tx(e.pass)) : tx(e.currency))}<small>${esc(t.perDay(e.daily))}</small></th><td>${fmtNum(free, 1)} ${esc(cur)}</td><td>${fmtNum(free / e.perPull)} ${esc(t.pulls(free / e.perPull))}</td></tr>`];
      if (e.pass && e.passDaily) {
        const paid = days * (e.daily + e.passDaily);
        rows.push(`<tr><th>${esc(t.with(tx(e.pass)))}<small>${esc(t.perDay(e.daily + e.passDaily))}</small></th><td>${fmtNum(paid, 1)} ${esc(cur)}</td><td>${fmtNum(paid / e.perPull)} ${esc(t.pulls(paid / e.perPull))}</td></tr>`);
      }
      econ = `<div class="econ-head">${esc(t.perPull(e.perPull, cur))}</div><table class="econ"><tbody>${rows.join("")}</tbody></table>${e.note ? `<p class="muted">${esc(tx(e.note))}</p>` : ""}`;
    }
    return `<div class="details" data-stop>
      <div class="cd"><span class="cd-lbl">${esc(tg.kind === "end" ? t.timeLeft : t.startsIn)}</span>
        <span class="cd-val" data-countdown="${tg.at}">${esc(countdownText(tg.at - Date.now()))}</span></div>
      <div class="econ-title">${esc(tg.kind === "end" ? t.earnEnd(days) : t.earnStart(days))}</div>
      ${econ}
      <p class="muted small">${esc(t.approx)}</p>
    </div>`;
  }

  function card(b, { showProgress = false } = {}) {
    const t = T(), g = GAMES[b.game], tm = timing(b);
    const hasNew = b.featured.some((f) => f.isNew);
    const names = b.featured.map((f) =>
      `<b class="${f.isNew ? "" : "rerun"}" title="${esc(f.isNew ? t.isNew : t.rerun)}${f.note ? " — " + esc(tx(f.note)) : ""}">${esc(unitName(f))}</b>`
    ).join('<span class="sep">·</span>');
    const MAX_AVATARS = 5;
    const extra = b.featured.length - MAX_AVATARS;
    const avatars = b.featured.slice(0, extra > 0 ? MAX_AVATARS - 1 : MAX_AVATARS).map((f) => {
      const e = ELEMENTS[f.element] || g.color;
      const initial = f.name === "TBA" ? "?" : [...unitName(f)][0];
      const pic = f.img ? `<img src="assets/characters/${esc(f.img)}.webp" alt="" loading="lazy" onerror="this.remove()">` : "";
      return `<div class="avatar${f.img ? " has-img" : ""}${f.icon ? " is-icon" : ""}" style="--e:${e}" title="${esc(unitName(f))}">${esc(initial)}${pic}</div>`;
    }).join("") + (extra > 0 ? `<div class="avatar avatar-more" style="--e:${g.color}" title="${esc(b.featured.slice(MAX_AVATARS - 1).map(unitName).join(", "))}">+${extra + 1}</div>` : "");
    const weapons = (b.weapons || []).map(tx).filter(Boolean);

    return `
      <article class="card${state.open.has(b.id) ? " open" : ""}" style="--c:${g.color}" data-id="${b.id}" tabindex="0" role="button" aria-expanded="${state.open.has(b.id)}" title="${esc(t.clickHint)}">
        ${iconHtml(g)}
        <div class="body">
          <div class="title">
            ${hasNew ? '<span class="new-badge">NEW</span>' : ""}
            <strong>${esc(tx(g.name))}</strong>
            <span class="pill">${esc(pillText(b))}</span>
          </div>
          <div class="up"><span class="lbl">${t.up}</span>${names}</div>
          ${weapons.length ? `<div class="weapons">⚔ ${weapons.map(esc).join(" · ")}</div>` : ""}
          <div class="meta">
            <span class="when${tm.live ? " live" : ""}">${tm.live ? "● " : ""}${esc(tm.text)}</span>
            <span class="status s-${esc(b.status)}">${esc(t.status[b.status] || b.status)}</span>
            ${b.note ? `<span class="note">${esc(tx(b.note))}</span>` : ""}
          </div>
          ${showProgress && tm.live ? `<div class="progress"><span style="width:${tm.pct.toFixed(1)}%"></span></div>` : ""}
        </div>
        <div class="avatars">${avatars}</div>
        ${state.open.has(b.id) ? details(b) : ""}
      </article>`;
  }

  /* ── render ── */
  function render() {
    const t = T();
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = state.lang === "zh" ? "二游卡池日历" : "Gacha Banner Calendar";
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t[el.dataset.i18n]; });
    langBar.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === state.lang));
    document.getElementById("legend").innerHTML = ["confirmed", "projected", "leak"]
      .map((k) => `<span><span class="status s-${k}">${t.status[k]}</span> ${t.legend[k]}</span>`).join("");
    document.getElementById("foot-text").textContent = t.foot((window.CHANGELOG && window.CHANGELOG[0] && window.CHANGELOG[0].date) || window.LAST_UPDATED || "");
    renderHistory();
    syncToggleText();
    document.getElementById("to-today-label").textContent = t.jumpToday;
    toToday.title = t.jumpTodayTitle;

    const total = Object.keys(GAMES).length;
    const shownKeys = Object.keys(GAMES).filter(shown);
    document.getElementById("filter-count").textContent = `${shownKeys.length}/${total}`;
    filtersEl.querySelector(".server-row .filter-label").textContent = t.server;
    filtersEl.querySelector(".game-row .filter-label").textContent = t.gameLabel;
    filtersEl.querySelectorAll(".chip-server").forEach((c) => {
      c.textContent = t.serverNames[c.dataset.server];
      c.setAttribute("aria-pressed", state.servers.has(c.dataset.server));
    });
    document.getElementById("selected-icons").innerHTML = Object.keys(GAMES)
      .filter(shown).map((k) => iconHtml(GAMES[k])).join("");
    allChip.textContent = t.all;
    allChip.setAttribute("aria-pressed", state.games.size === Object.keys(GAMES).length);
    filtersEl.querySelectorAll(".chip[data-game]").forEach((c) => {
      const g = GAMES[c.dataset.game];
      c.innerHTML = `${iconHtml(g)}${esc(tx(g.name))}`;
      c.setAttribute("aria-pressed", state.games.has(c.dataset.game));
      const sv = GAMES[c.dataset.game].server;
      c.classList.toggle("server-off", !!sv && !state.servers.has(sv));
    });

    const visible = BANNERS.filter((b) => shown(b.game));

    // Default keeps calendar order (start date); "ending" puts the soonest-ending banners first.
    const live = visible.filter((b) => timing(b).live);
    if (state.liveSort === "ending") live.sort((a, b) => a.end.localeCompare(b.end) || a.id - b.id);
    document.querySelectorAll("#live-sort button").forEach((x) => x.setAttribute("aria-pressed", x.dataset.sort === state.liveSort));
    document.getElementById("live-section").hidden = live.length === 0;
    liveGrid.innerHTML = live.map((b) => card(b, { showProgress: true })).join("");
    document.getElementById("live-count").textContent = live.length;
    const liveGames = [...new Set(live.map((b) => b.game))];
    document.getElementById("live-icons").innerHTML = liveGames.map((k) => iconHtml(GAMES[k])).join("");

    pastBox.disabled = state.onlyUpcoming;
    document.getElementById("show-past-label").classList.toggle("disabled", state.onlyUpcoming);
    const list = visible.filter((b) => (state.onlyUpcoming ? parse(b.start) > today : state.showPast || parse(b.end) >= today));
    const byDay = new Map();
    for (const b of list) {
      if (!byDay.has(b.start)) byDay.set(b.start, []);
      byDay.get(b.start).push(b);
    }
    let html = "", curMonth = "", markerDone = false;
    // A "Today" line goes before the first day that starts today or later; the Today button jumps to it.
    const todayLine = () => `<div class="today-marker" id="today-marker"><span>${esc(t.todayLine(t.date(today)))}</span></div>`;
    for (const [day, items] of byDay) {
      const d = parse(day), mKey = day.slice(0, 7);
      if (mKey !== curMonth) {
        if (curMonth) html += "</section>";
        curMonth = mKey;
        html += `<section class="month"><h2>${t.monthHead(d)}</h2>`;
      }
      const isToday = +d === +today;
      if (!markerDone && d >= today) { markerDone = true; if (!isToday) html += todayLine(); }
      const isPast = items.every((b) => parse(b.end) < today);
      html += `
        <div class="day${isToday ? " today" : ""}${isPast ? " past" : ""}"${isToday ? ' id="today-marker"' : ""}>
          <div class="day-label"><div class="num">${String(d.getDate()).padStart(2, "0")}</div><div class="wd">${t.weekday(d)}${isToday ? ` · <em>${t.today}</em>` : ""}</div></div>
          <div class="cards">${items.map((b) => card(b)).join("")}</div>
        </div>`;
    }
    if (curMonth) { if (!markerDone) html += todayLine(); html += "</section>"; }
    document.getElementById("calendar").innerHTML = html || `<p class="empty">${esc(state.onlyUpcoming ? t.emptyUpcoming : t.empty)}</p>`;
  }

  /* ── jump to today ── */
  const toToday = document.getElementById("to-today");
  toToday.onclick = () => {
    const el = document.getElementById("today-marker");
    if (!el) return;
    const bar = document.querySelector(".toolbar");
    const offset = (bar && getComputedStyle(bar).position === "sticky" ? bar.offsetHeight : 0) + 12;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  };

  /* ── version badge + update history ── */
  const CHANGELOG = window.CHANGELOG || [];
  const badge = document.getElementById("version-badge");
  const historyDlg = document.getElementById("history");
  function renderHistory() {
    const t = T(), latest = CHANGELOG[0];
    badge.hidden = !latest;
    if (!latest) return;
    badge.textContent = t.versionLbl(latest.version, latest.date);
    badge.title = t.historyTitle;
    document.getElementById("history-list").innerHTML = CHANGELOG.map((r) => `
      <section class="release">
        <h3>v${esc(r.version)} <small>${esc(r.date)}</small></h3>
        <ul>${r.changes.map((c) => `<li>${esc(tx(c))}</li>`).join("")}</ul>
      </section>`).join("");
  }
  badge.onclick = () => (historyDlg.showModal ? historyDlg.showModal() : historyDlg.setAttribute("open", ""));
  document.getElementById("history-close").onclick = () => historyDlg.close();
  historyDlg.addEventListener("click", (ev) => { if (ev.target === historyDlg) historyDlg.close(); });

  document.querySelectorAll("#live-sort button").forEach((x) => {
    x.onclick = () => { state.liveSort = x.dataset.sort; store.set("liveSort", state.liveSort); render(); };
  });

  /* ── .ics export ── */
  document.getElementById("ics-btn").onclick = () => {
    const ymd = (s) => s.replace(/-/g, "");
    const next = (s) => { const d = parse(s); d.setDate(d.getDate() + 1); return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`; };
    const icsEsc = (s) => String(s).replace(/[\\;,]/g, (c) => "\\" + c);
    const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//gachabanner//EN", "CALSCALE:GREGORIAN"];
    BANNERS.filter((b) => shown(b.game)).forEach((b, i) => {
      const g = GAMES[b.game];
      lines.push(
        "BEGIN:VEVENT",
        `UID:${b.game}-${b.start}-${i}@gachabanner`,
        `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`,
        `DTSTART;VALUE=DATE:${ymd(b.start)}`,
        `DTEND;VALUE=DATE:${next(b.end)}`,
        `SUMMARY:${icsEsc(`${tx(g.name)} ${pillText(b)}: ${b.featured.map(unitName).join(", ")}`)}`,
        `DESCRIPTION:${icsEsc(`${T().status[b.status]}${b.note ? " · " + tx(b.note) : ""}`)}`,
        "END:VEVENT"
      );
    });
    lines.push("END:VCALENDAR");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([lines.join("\r\n")], { type: "text/calendar" }));
    a.download = "gacha-banners.ics";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  // Toggle a banner's details when its card is clicked (delegated; render() rebuilds the cards).
  const toggleCard = (ev) => {
    const el = ev.target.closest(".card[data-id]");
    if (!el || ev.target.closest("[data-stop]")) return;
    if (ev.type === "keydown" && ev.key !== "Enter" && ev.key !== " ") return;
    if (ev.type === "keydown") ev.preventDefault();
    const id = +el.dataset.id;
    state.open.has(id) ? state.open.delete(id) : state.open.add(id);
    render();
  };
  for (const root of [document.getElementById("calendar"), liveGrid]) {
    root.addEventListener("click", toggleCard);
    root.addEventListener("keydown", toggleCard);
  }
  setInterval(() => {
    document.querySelectorAll("[data-countdown]").forEach((el) => { el.textContent = countdownText(+el.dataset.countdown - Date.now()); });
  }, 1000);

  setLiveOpen(store.get("liveOpen", false));
  render();
})();
