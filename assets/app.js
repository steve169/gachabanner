(() => {
  const GAMES = window.GAMES;
  const BANNERS = window.BANNERS.slice().sort((a, b) => a.start.localeCompare(b.start));

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
    imaginary: "#f7d75a",
    ether: "#ff5fa8",
  };
  const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const PHASE = { 1: "Phase 1", 2: "Phase 2" };

  const parse = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const DAY = 86400000;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const fmt = (d) => `${MONTHS[d.getMonth()].charAt(0)}${MONTHS[d.getMonth()].slice(1).toLowerCase()} ${d.getDate()}`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ── state (per-viewer convenience only) ── */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };
  const state = {
    games: new Set(store.get("games", Object.keys(GAMES))),
    showPast: store.get("showPast", false),
  };

  /* ── stars ── */
  const stars = document.querySelector(".stars");
  for (let i = 0; i < 90; i++) {
    const s = document.createElement("i");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 4 + "s";
    if (Math.random() < 0.2) { s.style.width = s.style.height = "3px"; }
    stars.appendChild(s);
  }

  /* ── header range ── */
  const first = parse(BANNERS[0].start), last = parse(BANNERS[BANNERS.length - 1].start);
  const ym = (d) => `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}`;
  document.getElementById("range-text").textContent = `${ym(first)} — ${ym(last)}`;
  document.getElementById("updated").textContent = window.LAST_UPDATED || "";

  /* ── filters ── */
  const filtersEl = document.getElementById("game-filters");
  for (const [key, g] of Object.entries(GAMES)) {
    const b = document.createElement("button");
    b.className = "chip"; b.type = "button";
    b.style.setProperty("--c", g.color);
    b.innerHTML = `<span class="icon">${esc(g.glyph)}</span>${esc(g.name)}`;
    b.setAttribute("aria-pressed", state.games.has(key));
    b.onclick = () => {
      state.games.has(key) ? state.games.delete(key) : state.games.add(key);
      if (state.games.size === 0) state.games.add(key);
      store.set("games", [...state.games]);
      render();
    };
    b.dataset.game = key;
    filtersEl.appendChild(b);
  }
  const pastBox = document.getElementById("show-past");
  pastBox.checked = state.showPast;
  pastBox.onchange = () => { state.showPast = pastBox.checked; store.set("showPast", state.showPast); render(); };

  /* ── card ── */
  function timing(b) {
    const s = parse(b.start), e = parse(b.end);
    const live = s <= today && today <= e;
    if (live) {
      const left = Math.round((e - today) / DAY);
      return { live, text: left === 0 ? "Ends today" : `Ends in ${left}d · ${fmt(e)}`, pct: (((today - s) / DAY + 1) / ((e - s) / DAY + 1)) * 100 };
    }
    if (today < s) {
      const until = Math.round((s - today) / DAY);
      return { live, text: `${fmt(s)} – ${fmt(e)} · in ${until}d` };
    }
    return { live, text: `${fmt(s)} – ${fmt(e)} · ended` };
  }

  function card(b, { showProgress = false } = {}) {
    const g = GAMES[b.game];
    const t = timing(b);
    const hasNew = b.featured.some((f) => f.isNew);
    const names = b.featured.map((f) =>
      `<b class="${f.isNew ? "" : "rerun"}" title="${f.isNew ? "New" : "Rerun"}${f.note ? " — " + esc(f.note) : ""}">${esc(f.name)}</b>`
    ).join('<span class="sep">·</span>');
    const avatars = b.featured.slice(0, 3).map((f, i) => {
      const e = ELEMENTS[f.element] || g.color;
      const initial = f.name === "TBA" ? "?" : f.name.charAt(0);
      return `<div class="avatar${i > 0 ? " small" : ""}" style="--e:${e}" title="${esc(f.name)}">${esc(initial)}</div>`;
    }).join("");
    const statusLabel = { confirmed: "Confirmed", projected: "Projected", leak: "Leak" }[b.status] || b.status;

    return `
      <article class="card" style="--c:${g.color}">
        <div class="icon" title="${esc(g.name)}">${esc(g.glyph)}</div>
        <div class="body">
          <div class="title">
            ${hasNew ? '<span class="new-badge">NEW</span>' : ""}
            <strong>${esc(g.name)}</strong>
            <span class="pill">${esc(b.version)} ${PHASE[b.phase] || ""}</span>
          </div>
          <div class="up"><span class="lbl">UP</span>${names}</div>
          ${b.weapons && b.weapons.length ? `<div class="weapons">⚔ ${b.weapons.map(esc).join(" · ")}</div>` : ""}
          <div class="meta">
            <span class="when${t.live ? " live" : ""}">${t.live ? "● " : ""}${esc(t.text)}</span>
            <span class="status s-${esc(b.status)}">${esc(statusLabel)}</span>
            ${b.note ? `<span>${esc(b.note)}</span>` : ""}
          </div>
          ${showProgress && t.live ? `<div class="progress"><span style="width:${t.pct.toFixed(1)}%"></span></div>` : ""}
        </div>
        <div class="avatars">${avatars}</div>
      </article>`;
  }

  /* ── render ── */
  function render() {
    filtersEl.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", state.games.has(c.dataset.game)));
    const visible = BANNERS.filter((b) => state.games.has(b.game));

    // Live now
    const live = visible.filter((b) => timing(b).live);
    document.getElementById("live-section").hidden = live.length === 0;
    document.getElementById("live-grid").innerHTML = live.map((b) => card(b, { showProgress: true })).join("");

    // Calendar, grouped by month then start day
    const list = visible.filter((b) => state.showPast || parse(b.end) >= today);
    const byDay = new Map();
    for (const b of list) {
      if (!byDay.has(b.start)) byDay.set(b.start, []);
      byDay.get(b.start).push(b);
    }
    let html = "", curMonth = "";
    for (const [day, items] of byDay) {
      const d = parse(day);
      const mKey = day.slice(0, 7);
      if (mKey !== curMonth) {
        if (curMonth) html += "</section>";
        curMonth = mKey;
        html += `<section class="month"><h2>${d.getMonth() + 1}月 <small>${MONTHS[d.getMonth()]} · ${d.getFullYear()}</small></h2>`;
      }
      const isToday = +d === +today;
      const isPast = items.every((b) => parse(b.end) < today);
      html += `
        <div class="day${isToday ? " today" : ""}${isPast ? " past" : ""}">
          <div class="day-label"><div class="num">${String(d.getDate()).padStart(2, "0")}</div><div class="wd">${WEEKDAYS[d.getDay()]}</div></div>
          <div class="cards">${items.map((b) => card(b)).join("")}</div>
        </div>`;
    }
    if (curMonth) html += "</section>";
    document.getElementById("calendar").innerHTML = html || '<p class="empty">No upcoming banners for the selected games.</p>';
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
        `UID:${b.game}-${b.version}-${b.phase}-${i}@gachabanner`,
        `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`,
        `DTSTART;VALUE=DATE:${ymd(b.start)}`,
        `DTEND;VALUE=DATE:${next(b.end)}`,
        `SUMMARY:${icsEsc(`${g.short} ${b.version} ${PHASE[b.phase] || ""}: ${b.featured.map((f) => f.name).join(", ")}`)}`,
        `DESCRIPTION:${icsEsc(`Status: ${b.status}${b.note ? ". " + b.note : ""}`)}`,
        "END:VEVENT"
      );
    });
    lines.push("END:VCALENDAR");
    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "gacha-banners.ics";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  render();
})();
