const data = window.PIFR_DATA;
const progressKey = "pifr-study-progress-v1";

const state = {
  mode: "learn",
  moduleSlug: data.modules[0]?.slug || "",
  selectedId: "",
  query: "",
  status: "",
  lookupRevealed: false,
  lookupId: "",
  progress: loadProgress(),
};

const els = {
  statObjectives: document.querySelector("#stat-objectives"),
  statMapped: document.querySelector("#stat-mapped"),
  statPartial: document.querySelector("#stat-partial"),
  statMos: document.querySelector("#stat-mos"),
  moduleList: document.querySelector("#module-list"),
  moduleDashboard: document.querySelector("#module-dashboard"),
  objectiveWorkspace: document.querySelector("#objective-workspace"),
  objectiveList: document.querySelector("#objective-list"),
  search: document.querySelector("#search"),
  statusFilter: document.querySelector("#status-filter"),
  prevObjective: document.querySelector("#prev-objective"),
  nextObjective: document.querySelector("#next-objective"),
  resetProgress: document.querySelector("#reset-progress"),
  lookupCard: document.querySelector("#lookup-card"),
  lookupRandom: document.querySelector("#lookup-random"),
  lookupReveal: document.querySelector("#lookup-reveal"),
  modeTabs: [...document.querySelectorAll(".mode-tab")],
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(progressKey, JSON.stringify(state.progress));
  } catch {
    // Progress is helpful but should never prevent study mode from running.
  }
}

function normalise(value) {
  return String(value || "").toLowerCase();
}

function statusClass(status) {
  return normalise(status).replace(/\s+/g, "-");
}

function moduleObjectives(slug = state.moduleSlug) {
  return data.objectives.filter((objective) => objective.module_slug === slug);
}

function currentModule() {
  return data.modules.find((module) => module.slug === state.moduleSlug) || data.modules[0];
}

function currentObjective() {
  return data.objectives.find((objective) => objective.id === state.selectedId) || visibleObjectives()[0] || data.objectives[0];
}

function objectiveText(objective) {
  return [
    objective.id,
    objective.objective,
    objective.module,
    objective.mos_ref,
    objective.notes,
    objective.study?.why,
    ...(objective.study?.study_notes || []),
    ...(objective.study?.common_traps || []),
    ...Object.values(objective.references),
  ].join(" ");
}

function visibleObjectives() {
  const query = normalise(state.query);
  return moduleObjectives().filter((objective) => {
    if (state.status && objective.status !== state.status) return false;
    if (query && !normalise(objectiveText(objective)).includes(query)) return false;
    return true;
  });
}

function objectiveProgress(id) {
  return state.progress[id] || {};
}

function markObjective(id, key) {
  state.progress[id] = {
    ...objectiveProgress(id),
    [key]: !objectiveProgress(id)[key],
  };
  saveProgress();
  render();
}

function completeCount(objectives, key) {
  return objectives.filter((objective) => objectiveProgress(objective.id)[key]).length;
}

function setStats() {
  els.statObjectives.textContent = data.objective_count;
  els.statMapped.textContent = data.status_counts.Mapped || 0;
  els.statPartial.textContent = data.status_counts.Partial || 0;
  els.statMos.textContent = data.status_counts["MOS only"] || 0;
}

function referenceEntries(objective) {
  return Object.entries(objective.references)
    .filter(([, value]) => value && value !== "TODO")
    .map(([label, value]) => ({ label, value }));
}

function primaryReference(objective) {
  const entries = referenceEntries(objective);
  return entries[0] || { label: "MOS", value: objective.mos_reference };
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderModuleList() {
  els.moduleList.innerHTML = data.modules.map((module) => {
    const objectives = moduleObjectives(module.slug);
    const learned = completeCount(objectives, "learned");
    const located = completeCount(objectives, "located");
    const percent = objectives.length ? Math.round(((learned + located) / (objectives.length * 2)) * 100) : 0;
    return `
      <button class="module-button" type="button" data-module="${module.slug}" aria-selected="${module.slug === state.moduleSlug}">
        <span>
          <strong>${escapeHtml(module.title)}</strong>
          <small>${learned}/${objectives.length} learned · ${located}/${objectives.length} located</small>
        </span>
        <span class="progress-ring">${percent}%</span>
      </button>
    `;
  }).join("");
}

function renderDashboard() {
  const module = currentModule();
  const objectives = moduleObjectives();
  const mapped = objectives.filter((objective) => objective.status === "Mapped").length;
  const partial = objectives.filter((objective) => objective.status === "Partial").length;
  const learned = completeCount(objectives, "learned");
  const located = completeCount(objectives, "located");
  els.moduleDashboard.innerHTML = `
    <div>
      <p class="eyebrow">Current MOS syllabus module</p>
      <h2>${escapeHtml(module.title)}</h2>
      <p>${objectives.length} objectives · ${mapped} mapped · ${partial} partial · ${learned} learned · ${located} source-located</p>
    </div>
    <div class="module-meter" aria-label="Module progress">
      <span style="width:${objectives.length ? (learned / objectives.length) * 100 : 0}%"></span>
    </div>
  `;
}

function renderObjectiveList() {
  const objectives = visibleObjectives();
  els.objectiveList.innerHTML = objectives.map((objective) => {
    const progress = objectiveProgress(objective.id);
    return `
      <button class="queue-item" type="button" data-id="${objective.id}" aria-selected="${objective.id === state.selectedId}">
        <span class="objective-id">${objective.id}</span>
        <span class="queue-title">${escapeHtml(objective.objective)}</span>
        <span class="queue-flags">
          <span class="flag ${progress.learned ? "done" : ""}">Learn</span>
          <span class="flag ${progress.located ? "done" : ""}">Locate</span>
        </span>
      </button>
    `;
  }).join("") || `<div class="empty-state">No objectives match the current filters.</div>`;
}

function renderReferenceTable(objective) {
  return Object.entries(objective.references).map(([label, value]) => `
    <div class="reference-row ${value === "TODO" ? "todo-ref" : ""}">
      <dt>${escapeHtml(label)}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>
  `).join("");
}

function listBlock(items) {
  if (!items?.length) return `<p class="muted">No notes populated yet.</p>`;
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderLearn(objective) {
  const study = objective.study || {};
  return `
    <article class="objective-card">
      <div class="card-head">
        <div>
          <p class="eyebrow">${escapeHtml(objective.id)} · ${escapeHtml(objective.mos_reference)}</p>
          <h2>${escapeHtml(objective.objective)}</h2>
        </div>
        <span class="pill ${statusClass(objective.status)}">${escapeHtml(objective.status)}</span>
      </div>
      <section class="learning-grid">
        <div>
          <h3>What CASA Expects</h3>
          <p>${escapeHtml(study.why || objective.notes)}</p>
          <h3>Study Notes</h3>
          ${listBlock(study.study_notes)}
        </div>
        <div>
          <h3>Common CASA Traps</h3>
          ${listBlock(study.common_traps)}
          <h3>Exam Use</h3>
          ${listBlock(study.exam_use)}
        </div>
      </section>
      <div class="action-row">
        <button type="button" data-toggle="learned">${objectiveProgress(objective.id).learned ? "Learned" : "Mark learned"}</button>
        <a class="study-link" href="../${escapeHtml(objective.study_file)}">Open Markdown</a>
      </div>
    </article>
  `;
}

function renderLocate(objective) {
  const ref = primaryReference(objective);
  return `
    <article class="objective-card">
      <div class="card-head">
        <div>
          <p class="eyebrow">Hard-copy source lookup</p>
          <h2>${escapeHtml(objective.id)} ${escapeHtml(objective.objective)}</h2>
        </div>
        <span class="pill ${statusClass(objective.status)}">${escapeHtml(objective.status)}</span>
      </div>
      <div class="lookup-brief">
        <div>
          <strong>Exam task</strong>
          <p>Find the official answer in the permitted hard-copy reference before reading the full locator table.</p>
        </div>
        <div>
          <strong>First place to try</strong>
          <p>${escapeHtml(ref.label)}: ${escapeHtml(ref.value)}</p>
        </div>
      </div>
      <h3>Official Reference Locator</h3>
      <dl class="reference-grid">${renderReferenceTable(objective)}</dl>
      <h3>Source Status</h3>
      <p class="notes">${escapeHtml(objective.notes)}</p>
      <div class="action-row">
        <button type="button" data-toggle="located">${objectiveProgress(objective.id).located ? "Located" : "Mark source located"}</button>
      </div>
    </article>
  `;
}

function renderDrill(objective) {
  const refs = referenceEntries(objective);
  return `
    <article class="objective-card">
      <div class="card-head">
        <div>
          <p class="eyebrow">Closed-book-to-hard-copy drill</p>
          <h2>${escapeHtml(objective.id)} ${escapeHtml(objective.objective)}</h2>
        </div>
        <span class="pill">${escapeHtml(objective.exam_importance)}</span>
      </div>
      <ol class="drill-steps">
        <li>Say what CASA expects in one sentence.</li>
        <li>Name the document you would open first.</li>
        <li>Find the section/table/page marker in hard copy.</li>
        <li>Check whether the objective is mapped or source-limited.</li>
      </ol>
      <details>
        <summary>Show answer locators</summary>
        <dl class="reference-grid">${renderReferenceTable(objective)}</dl>
      </details>
      <div class="reference-chips">
        ${refs.map((ref) => `<span>${escapeHtml(ref.label)}</span>`).join("") || "<span>MOS only</span>"}
      </div>
    </article>
  `;
}

function renderGapsMode() {
  return `
    <article class="objective-card">
      <div class="card-head">
        <div>
          <p class="eyebrow">Do not guess these</p>
          <h2>Source-limited topics</h2>
        </div>
      </div>
      <div class="gap-list">
        ${data.source_gaps.map((gap) => `
          <section>
            <h3>${escapeHtml(gap.objective)}</h3>
            <p>${escapeHtml(gap.gap)}</p>
            <strong>${escapeHtml(gap.current_action)}</strong>
          </section>
        `).join("")}
      </div>
    </article>
  `;
}

function renderWorkspace() {
  const objective = currentObjective();
  if (!objective) {
    els.objectiveWorkspace.innerHTML = `<div class="empty-state">Select a module to begin.</div>`;
    return;
  }
  if (state.mode === "locate") {
    els.objectiveWorkspace.innerHTML = renderLocate(objective);
  } else if (state.mode === "drill") {
    els.objectiveWorkspace.innerHTML = renderDrill(objective);
  } else if (state.mode === "gaps") {
    els.objectiveWorkspace.innerHTML = renderGapsMode();
  } else {
    els.objectiveWorkspace.innerHTML = renderLearn(objective);
  }
}

function renderLookupCard() {
  const objective = data.objectives.find((item) => item.id === state.lookupId) || currentObjective();
  if (!objective) return;
  state.lookupId = objective.id;
  const ref = primaryReference(objective);
  els.lookupCard.innerHTML = `
    <p class="eyebrow">${escapeHtml(objective.id)} · ${escapeHtml(objective.module)}</p>
    <h3>${escapeHtml(objective.objective)}</h3>
    <p class="muted">Before reveal: write down the document and section you would open first.</p>
    <div class="lookup-answer ${state.lookupRevealed ? "show" : ""}">
      <strong>${escapeHtml(ref.label)}</strong>
      <p>${escapeHtml(ref.value)}</p>
    </div>
  `;
}

function ensureSelection() {
  const objectives = visibleObjectives();
  if (!objectives.some((objective) => objective.id === state.selectedId)) {
    state.selectedId = objectives[0]?.id || moduleObjectives()[0]?.id || data.objectives[0]?.id || "";
  }
  if (!state.lookupId) state.lookupId = state.selectedId;
}

function renderModeTabs() {
  els.modeTabs.forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.mode === state.mode));
  });
}

function render() {
  ensureSelection();
  setStats();
  renderModeTabs();
  renderModuleList();
  renderDashboard();
  renderObjectiveList();
  renderWorkspace();
  renderLookupCard();
}

function moveSelection(direction) {
  const objectives = visibleObjectives();
  const index = objectives.findIndex((objective) => objective.id === state.selectedId);
  if (!objectives.length) return;
  const nextIndex = Math.min(Math.max(index + direction, 0), objectives.length - 1);
  state.selectedId = objectives[nextIndex].id;
  state.lookupId = state.selectedId;
  state.lookupRevealed = false;
  render();
}

function randomLookup() {
  const objectives = visibleObjectives();
  if (!objectives.length) return;
  const index = Math.floor(Math.random() * objectives.length);
  state.lookupId = objectives[index].id;
  state.lookupRevealed = false;
  renderLookupCard();
}

function bindEvents() {
  els.moduleList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-module]");
    if (!button) return;
    state.moduleSlug = button.dataset.module;
    state.selectedId = "";
    state.lookupId = "";
    state.lookupRevealed = false;
    render();
  });
  els.modeTabs.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      render();
    });
  });
  els.search.addEventListener("input", () => {
    state.query = els.search.value;
    render();
  });
  els.statusFilter.addEventListener("change", () => {
    state.status = els.statusFilter.value;
    render();
  });
  els.objectiveList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-id]");
    if (!button) return;
    state.selectedId = button.dataset.id;
    state.lookupId = state.selectedId;
    state.lookupRevealed = false;
    render();
  });
  els.objectiveWorkspace.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-toggle]");
    if (!toggle) return;
    const objective = currentObjective();
    markObjective(objective.id, toggle.dataset.toggle);
  });
  els.prevObjective.addEventListener("click", () => moveSelection(-1));
  els.nextObjective.addEventListener("click", () => moveSelection(1));
  els.lookupRandom.addEventListener("click", randomLookup);
  els.lookupReveal.addEventListener("click", () => {
    state.lookupRevealed = !state.lookupRevealed;
    renderLookupCard();
  });
  els.resetProgress.addEventListener("click", () => {
    if (!confirm("Reset local study progress on this device?")) return;
    state.progress = {};
    saveProgress();
    render();
  });
}

bindEvents();
render();
