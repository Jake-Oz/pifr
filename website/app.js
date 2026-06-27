const data = window.PIFR_DATA;

const state = {
  query: "",
  module: "",
  status: "",
  importance: "",
  selectedId: data.objectives[0]?.id || "",
};

const els = {
  search: document.querySelector("#search"),
  moduleFilter: document.querySelector("#module-filter"),
  statusFilter: document.querySelector("#status-filter"),
  importanceFilter: document.querySelector("#importance-filter"),
  clearFilters: document.querySelector("#clear-filters"),
  results: document.querySelector("#results"),
  resultCount: document.querySelector("#result-count"),
  detail: document.querySelector("#detail"),
  detailEmpty: document.querySelector("#detail-empty"),
  gapList: document.querySelector("#gap-list"),
  statObjectives: document.querySelector("#stat-objectives"),
  statMapped: document.querySelector("#stat-mapped"),
  statPartial: document.querySelector("#stat-partial"),
  statMos: document.querySelector("#stat-mos"),
};

function normalise(value) {
  return String(value || "").toLowerCase();
}

function statusClass(status) {
  return normalise(status).replace(/\s+/g, "-");
}

function searchableText(objective) {
  return [
    objective.id,
    objective.mos_ref,
    objective.objective,
    objective.module,
    objective.exam_importance,
    objective.status,
    objective.notes,
    ...Object.values(objective.references),
  ].join(" ");
}

function filteredObjectives() {
  const query = normalise(state.query);
  return data.objectives.filter((objective) => {
    if (state.module && objective.module_slug !== state.module) return false;
    if (state.status && objective.status !== state.status) return false;
    if (state.importance && objective.exam_importance !== state.importance) return false;
    if (query && !normalise(searchableText(objective)).includes(query)) return false;
    return true;
  });
}

function setStats() {
  els.statObjectives.textContent = data.objective_count;
  els.statMapped.textContent = data.status_counts.Mapped || 0;
  els.statPartial.textContent = data.status_counts.Partial || 0;
  els.statMos.textContent = data.status_counts["MOS only"] || 0;
}

function populateFilters() {
  els.moduleFilter.innerHTML = [
    '<option value="">All modules</option>',
    ...data.modules.map((module) => `<option value="${module.slug}">${module.title}</option>`),
  ].join("");
}

function renderGaps() {
  els.gapList.innerHTML = data.source_gaps.map((gap) => `
    <li>
      <strong>${gap.objective}</strong>
      ${gap.gap}
    </li>
  `).join("");
}

function renderResults() {
  const objectives = filteredObjectives();
  els.resultCount.textContent = `${objectives.length} objective${objectives.length === 1 ? "" : "s"}`;
  els.results.innerHTML = objectives.map((objective) => `
    <button class="result-item" type="button" data-id="${objective.id}" aria-selected="${objective.id === state.selectedId}">
      <span class="objective-id">${objective.id}</span>
      <span>
        <span class="result-title">${objective.objective}</span>
        <span class="meta">
          <span class="pill">${objective.module}</span>
          <span class="pill">${objective.mos_ref}</span>
          <span class="pill ${statusClass(objective.status)}">${objective.status}</span>
        </span>
      </span>
      <span class="pill">${objective.exam_importance}</span>
    </button>
  `).join("");
}

function referenceRows(objective) {
  return Object.entries(objective.references).map(([label, value]) => `
    <div class="reference-row">
      <dt>${label}</dt>
      <dd>${value}</dd>
    </div>
  `).join("");
}

function renderDetail() {
  const objective = data.objectives.find((item) => item.id === state.selectedId);
  if (!objective) {
    els.detail.hidden = true;
    els.detailEmpty.hidden = false;
    return;
  }

  els.detailEmpty.hidden = true;
  els.detail.hidden = false;
  els.detail.innerHTML = `
    <div class="meta">
      <span class="pill">${objective.id}</span>
      <span class="pill">${objective.module}</span>
      <span class="pill ${statusClass(objective.status)}">${objective.status}</span>
      <span class="pill">${objective.exam_importance}</span>
    </div>
    <h2>${objective.mos_ref} ${objective.section_title}</h2>
    <p class="objective-text">${objective.objective}</p>
    <h3>MOS Traceability</h3>
    <p class="notes">${objective.mos_reference}</p>
    <h3>Official Reference Locator</h3>
    <dl class="reference-grid">${referenceRows(objective)}</dl>
    <h3>Source Status Notes</h3>
    <p class="notes">${objective.notes}</p>
    <a class="study-link" href="../${objective.study_file}">Open Markdown study file</a>
  `;
}

function render() {
  renderResults();
  renderDetail();
}

function selectFirstVisibleIfNeeded() {
  const objectives = filteredObjectives();
  if (!objectives.some((objective) => objective.id === state.selectedId)) {
    state.selectedId = objectives[0]?.id || "";
  }
}

function updateFilters() {
  state.query = els.search.value;
  state.module = els.moduleFilter.value;
  state.status = els.statusFilter.value;
  state.importance = els.importanceFilter.value;
  selectFirstVisibleIfNeeded();
  render();
}

function bindEvents() {
  els.search.addEventListener("input", updateFilters);
  els.moduleFilter.addEventListener("change", updateFilters);
  els.statusFilter.addEventListener("change", updateFilters);
  els.importanceFilter.addEventListener("change", updateFilters);
  els.clearFilters.addEventListener("click", () => {
    els.search.value = "";
    els.moduleFilter.value = "";
    els.statusFilter.value = "";
    els.importanceFilter.value = "";
    updateFilters();
  });
  els.results.addEventListener("click", (event) => {
    const button = event.target.closest("[data-id]");
    if (!button) return;
    state.selectedId = button.dataset.id;
    render();
  });
}

setStats();
populateFilters();
renderGaps();
bindEvents();
render();
