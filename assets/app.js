(() => {
  const GAMES = window.GAMES;
  const BANNERS = window.BANNERS.slice().sort((a, b) => a.start.localeCompare(b.start) || a.game.localeCompare(b.game));

  /* ── i18n ── */
  const I18N = {
    en: {
      eyebrow: "GACHA BANNER CALENDAR",
      title: "Rate-Up Calendar",
      sub: "Rate-up banners for popular gacha games",
      rangeNote: "key banner dates at a glance",
      showPast: "Show past",
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
      foot: (u) => `Dates are approximate server dates; check in-game for exact times. Last updated ${u}. Fan-made, not affiliated with any publisher.`,
      empty: "No upcoming banners for the selected games.",
      monthHead: (d) => `<span class="m-big">${MONTH_SHORT[d.getMonth()]}</span> <small>${MONTH_LONG[d.getMonth()].toUpperCase()} · ${d.getFullYear()}</small>`,
      weekday: (d) => ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][d.getDay()],
      today: "TODAY",
      date: (d) => `${MONTH_SHORT[d.getMonth()]} ${d.getDate()}`,
      tba: "TBA",
    },
    zh: {
      eyebrow: "GACHA BANNER CALENDAR",
      title: "二游卡池日历",
      sub: "二次元手游 · 版本 & 卡池排期",
      rangeNote: "关键节点一览",
      showPast: "显示已结束",
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
      foot: (u) => `日期为大致的服务器日期，具体时间请以游戏内公告为准。最后更新：${u}。粉丝自制，与各游戏厂商无关。`,
      empty: "所选游戏暂无即将开启的卡池。",
      monthHead: (d) => `<span class="m-big">${d.getMonth() + 1}月</span> <small>${MONTH_SHORT[d.getMonth()].toUpperCase()} · ${d.getFullYear()}</small>`,
      weekday: (d) => ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][d.getDay()],
      today: "今天",
      date: (d) => `${d.getMonth() + 1}月${d.getDate()}日`,
      tba: "待定",
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
  const defaultLang = (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
  const savedGames = store.get("games", null);
  const state = {
    lang: I18N[store.get("lang", defaultLang)] ? store.get("lang", defaultLang) : "en",
    games: new Set(Array.isArray(savedGames) ? savedGames.filter((g) => GAMES[g]) : Object.keys(GAMES)),
    showPast: store.get("showPast", false),
  };
  // Games added after a viewer saved their filter should show up for them too.
  const knownGames = store.get("knownGames", null);
  if (Array.isArray(knownGames)) for (const g of Object.keys(GAMES)) if (!knownGames.includes(g)) state.games.add(g);
  store.set("knownGames", Object.keys(GAMES));
  if (state.games.size === 0) Object.keys(GAMES).forEach((g) => state.games.add(g));

  const T = () => I18N[state.lang];
  const tx = (v) => (v == null ? "" : typeof v === "string" ? v : v[state.lang] ?? v.en ?? "");
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
  const allChip = document.createElement("button");
  allChip.className = "chip chip-all"; allChip.type = "button";
  allChip.onclick = () => {
    const allOn = state.games.size === Object.keys(GAMES).length;
    state.games = new Set(allOn ? [Object.keys(GAMES)[0]] : Object.keys(GAMES));
    store.set("games", [...state.games]);
    render();
  };
  filtersEl.appendChild(allChip);
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
    filtersEl.appendChild(b);
  }

  const pastBox = document.getElementById("show-past");
  pastBox.checked = state.showPast;
  pastBox.onchange = () => { state.showPast = pastBox.checked; store.set("showPast", state.showPast); render(); };

  /* ── card ── */
  function pillText(b) {
    if (b.label) return tx(b.label);
    return [b.version, b.phase ? T().phase(b.phase) : ""].filter(Boolean).join(" ");
  }

  function timing(b) {
    const t = T(), s = parse(b.start), e = parse(b.end);
    const live = s <= today && today <= e;
    if (live) {
      const left = Math.round((e - today) / DAY);
      const pct = (((today - s) / DAY + 1) / ((e - s) / DAY + 1)) * 100;
      return { live, text: left === 0 ? t.endsToday : t.endsIn(left, t.date(e)), pct };
    }
    if (today < s) return { live, text: t.upcoming(t.date(s), t.date(e), Math.round((s - today) / DAY)) };
    return { live, text: t.ended(t.date(s), t.date(e)) };
  }

  function card(b, { showProgress = false } = {}) {
    const t = T(), g = GAMES[b.game], tm = timing(b);
    const hasNew = b.featured.some((f) => f.isNew);
    const names = b.featured.map((f) =>
      `<b class="${f.isNew ? "" : "rerun"}" title="${esc(f.isNew ? t.isNew : t.rerun)}${f.note ? " — " + esc(tx(f.note)) : ""}">${esc(unitName(f))}</b>`
    ).join('<span class="sep">·</span>');
    const avatars = b.featured.slice(0, 3).map((f, i) => {
      const e = ELEMENTS[f.element] || g.color;
      const initial = f.name === "TBA" ? "?" : [...unitName(f)][0];
      return `<div class="avatar${i > 0 ? " small" : ""}" style="--e:${e}" title="${esc(unitName(f))}">${esc(initial)}</div>`;
    }).join("");
    const weapons = (b.weapons || []).map(tx).filter(Boolean);

    return `
      <article class="card" style="--c:${g.color}">
        <div class="icon" title="${esc(tx(g.name))}">${esc(g.glyph)}</div>
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
    document.getElementById("foot-text").textContent = t.foot(window.LAST_UPDATED || "");

    allChip.textContent = t.all;
    allChip.setAttribute("aria-pressed", state.games.size === Object.keys(GAMES).length);
    filtersEl.querySelectorAll(".chip[data-game]").forEach((c) => {
      const g = GAMES[c.dataset.game];
      c.innerHTML = `<span class="icon">${esc(g.glyph)}</span>${esc(tx(g.name))}`;
      c.setAttribute("aria-pressed", state.games.has(c.dataset.game));
    });

    const visible = BANNERS.filter((b) => state.games.has(b.game));

    const live = visible.filter((b) => timing(b).live).sort((a, b) => a.end.localeCompare(b.end));
    document.getElementById("live-section").hidden = live.length === 0;
    document.getElementById("live-grid").innerHTML = live.map((b) => card(b, { showProgress: true })).join("");

    const list = visible.filter((b) => state.showPast || parse(b.end) >= today);
    const byDay = new Map();
    for (const b of list) {
      if (!byDay.has(b.start)) byDay.set(b.start, []);
      byDay.get(b.start).push(b);
    }
    let html = "", curMonth = "";
    for (const [day, items] of byDay) {
      const d = parse(day), mKey = day.slice(0, 7);
      if (mKey !== curMonth) {
        if (curMonth) html += "</section>";
        curMonth = mKey;
        html += `<section class="month"><h2>${t.monthHead(d)}</h2>`;
      }
      const isToday = +d === +today;
      const isPast = items.every((b) => parse(b.end) < today);
      html += `
        <div class="day${isToday ? " today" : ""}${isPast ? " past" : ""}">
          <div class="day-label"><div class="num">${String(d.getDate()).padStart(2, "0")}</div><div class="wd">${t.weekday(d)}${isToday ? ` · <em>${t.today}</em>` : ""}</div></div>
          <div class="cards">${items.map((b) => card(b)).join("")}</div>
        </div>`;
    }
    if (curMonth) html += "</section>";
    document.getElementById("calendar").innerHTML = html || `<p class="empty">${esc(t.empty)}</p>`;
  }

  /* ── .ics export ── */
  document.getElementById("ics-btn").onclick = () => {
    const ymd = (s) => s.replace(/-/g, "");
    const next = (s) => { const d = parse(s); d.setDate(d.getDate() + 1); return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`; };
    const icsEsc = (s) => String(s).replace(/[\\;,]/g, (c) => "\\" + c);
    const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//gachabanner//EN", "CALSCALE:GREGORIAN"];
    BANNERS.filter((b) => state.games.has(b.game)).forEach((b, i) => {
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

  render();
})();
