async function main() {
  // Charger les leçons
  const res = await fetch("/source/data/seed.json");
  const data = await res.json();

  const items = data.items || [];

  // Affichage
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="card">
      <div class="h1">Leçons (démo)</div>
      <div class="small">${items.length} phrases chargées depuis seed.json</div>
    </div>
    ${items.map(it => `
      <div class="card">
        <div class="h1">${it.lingala}</div>
        <div class="small">${it.french}</div>
        <div class="small" style="opacity:.8;margin-top:6px">${it.level} • ${it.register} • ${it.tags.join(", ")}</div>
      </div>
    `).join("")}
  `;
}

main();
