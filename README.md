# gachabanner

Contains the rate ups of the future banners in selected gacha games.

A static site (GitHub Pages) showing a rate-up calendar for **Genshin Impact**, **Honkai: Star Rail** and **Zenless Zone Zero**.

**Live site:** https://steve169.github.io/gachabanner/

## Features
- Month / day timeline of banner phases with featured 5★ units (new vs. rerun)
- "Live now" section with time-left progress bars
- Game filters and a "show past" toggle (remembered per browser)
- Status tags: Confirmed / Projected / Leak
- Export the visible games' banners to an `.ics` calendar file

## Updating banners
All data lives in [`data/banners.js`](data/banners.js). Add or edit an entry and push — no build step.

```js
{
  game: "genshin", version: "7.3", phase: 1,
  start: "2026-12-16", end: "2027-01-05", status: "confirmed",
  featured: [{ name: "Tsaritsa", isNew: true, element: "cryo" }],
  weapons: ["..."], note: "New version launch",
}
```

## Running locally
Open `index.html` in a browser, or `python3 -m http.server` and visit http://localhost:8000.

## Deploying
Settings → Pages → *Deploy from a branch* → `main` / `(root)`.
