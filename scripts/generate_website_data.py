import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path):
    return path.read_text(encoding="utf-8")


def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.rstrip() + "\n", encoding="utf-8")


def status_for(objective):
    references = objective["references"]
    verified = [value for value in references.values() if value != "TODO"]
    if not verified:
        return "MOS only"
    notes = objective.get("notes", "").lower()
    gap_markers = ["todo", "not yet", "partial", "does not", "only against"]
    if any(marker in notes for marker in gap_markers):
        return "Partial"
    return "Mapped"


def source_gaps():
    text = read(ROOT / "docs/08-cross-reference/source-gaps.md")
    rows = []
    for line in text.splitlines():
        if not line.startswith("| PIFR-"):
            continue
        cells = [cell.strip() for cell in line.strip("|").split("|")]
        if len(cells) == 3:
            rows.append({
                "objective": cells[0],
                "gap": cells[1],
                "current_action": cells[2],
            })
    return rows


def build_payload():
    modules = json.loads(read(ROOT / "data/pifr-modules.json"))
    flat_objectives = []
    for module in modules["modules"]:
        for objective in module["objectives"]:
            item = {
                "id": objective["id"],
                "mos_ref": objective["mos_ref"],
                "mos_reference": objective["mos_reference"],
                "objective": objective["objective"],
                "section_no": objective["section_no"],
                "section_title": objective["section_title"],
                "element_no": objective["element_no"],
                "element_title": objective["element_title"],
                "module": module["title"],
                "module_slug": module["slug"],
                "exam_importance": objective["exam_importance"],
                "status": status_for(objective),
                "references": objective["references"],
                "notes": objective["notes"],
                "study_file": objective["study_file"],
            }
            flat_objectives.append(item)

    status_counts = {}
    for objective in flat_objectives:
        status_counts[objective["status"]] = status_counts.get(objective["status"], 0) + 1

    return {
        "source": modules["source"],
        "module_count": modules["module_count"],
        "objective_count": modules["objective_count"],
        "status_counts": status_counts,
        "modules": [
            {
                "title": module["title"],
                "slug": module["slug"],
                "objective_count": module["objective_count"],
            }
            for module in modules["modules"]
        ],
        "objectives": flat_objectives,
        "source_gaps": source_gaps(),
    }


def main():
    payload = build_payload()
    json_text = json.dumps(payload, indent=2, ensure_ascii=False)
    write(ROOT / "website/app-data.js", f"window.PIFR_DATA = {json_text};")


if __name__ == "__main__":
    main()
