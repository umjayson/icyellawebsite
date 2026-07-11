(function () {
  const listEl = document.getElementById("caseList");
  const searchEl = document.getElementById("searchInput");
  const pillsEl = document.getElementById("categoryPills");
  const countEl = document.getElementById("countLine");

  let activeCategory = "All";
  let query = "";

  function crackDivider() {
    const div = document.createElement("div");
    div.className = "crack";
    div.innerHTML =
      '<svg viewBox="0 0 400 10" preserveAspectRatio="none"><polyline points="0,5 60,5 75,2 90,8 110,5 400,5" fill="none" stroke="#D6538B" stroke-width="1"/></svg>';
    return div;
  }

  function caseCard(c) {
    const el = document.createElement("div");
    el.className = "case";
    const proofsHtml = c.proofs
      .map((p) => {
        const isOngoing = (p.label || "").toUpperCase().includes("ONGOING");
        return `<a class="proof-link${isOngoing ? " ongoing" : ""}" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.label || "Proof"}</a>`;
      })
      .join("");

    el.innerHTML = `
      <div class="case__top">
        <div class="case__id-block">
          <div class="case__user">${escapeHtml(c.username)}</div>
          <div class="case__id">ID: ${escapeHtml(c.id)}</div>
        </div>
        <div class="case__tag">${escapeHtml(c.category)}</div>
      </div>
      <p class="case__explanation">${escapeHtml(c.explanation)}</p>
      <div class="case__proofs">${proofsHtml}</div>
    `;
    return el;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function render() {
    listEl.innerHTML = "";
    const q = query.trim().toLowerCase();

    const filtered = CASES.filter((c) => {
      const matchesCategory =
        activeCategory === "All" || c.category === activeCategory;
      const matchesQuery =
        !q ||
        c.username.toLowerCase().includes(q) ||
        c.id.includes(q) ||
        c.explanation.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });

    countEl.textContent = `${filtered.length} case${filtered.length === 1 ? "" : "s"} shown`;

    if (filtered.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No matching reports found.";
      listEl.appendChild(empty);
      return;
    }

    filtered.forEach((c, i) => {
      if (i > 0) listEl.appendChild(crackDivider());
      listEl.appendChild(caseCard(c));
    });
  }

  function buildPills() {
    pillsEl.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const pill = document.createElement("button");
      pill.className = "pill" + (cat === activeCategory ? " active" : "");
      pill.textContent = cat;
      pill.addEventListener("click", () => {
        activeCategory = cat;
        buildPills();
        render();
      });
      pillsEl.appendChild(pill);
    });
  }

  searchEl.addEventListener("input", (e) => {
    query = e.target.value;
    render();
  });

  buildPills();
  render();
})();
