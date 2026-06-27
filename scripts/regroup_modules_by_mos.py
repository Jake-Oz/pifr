import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.rstrip() + "\n", encoding="utf-8")


def slugify(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def link(path, text):
    return f"[{text}]({path})"


def objective_sort_key(objective):
    return int(objective["id"].split("-")[1])


def build_modules(payload):
    objectives = []
    for module in payload["modules"]:
        objectives.extend(module["objectives"])
    objectives.sort(key=objective_sort_key)

    modules = []
    for objective in objectives:
        section_no = objective["section_no"]
        section_title = objective["section_title"]
        slug = slugify(f"{section_no} {section_title}")
        if not modules or modules[-1]["section_no"] != section_no:
            modules.append({
                "title": f"{section_no}. {section_title}",
                "slug": slug,
                "section_no": section_no,
                "section_title": section_title,
                "objective_count": 0,
                "objectives": [],
            })
        modules[-1]["objectives"].append(objective)
        modules[-1]["objective_count"] += 1

    return {
        "source": payload["source"],
        "module_count": len(modules),
        "objective_count": len(objectives),
        "modules": modules,
    }


def write_learning_roadmap(payload):
    lines = [
        "# PIFR Learning Roadmap",
        "",
        "> Study modules follow the CASA Part 61 MOS Section 2.2 knowledge-area sequence. The official objectives remain the MOS objectives in `docs/01-mos/syllabus.md`.",
        "",
    ]
    for module in payload["modules"]:
        lines += [f"## {module['title']}", ""]
        for objective in module["objectives"]:
            lines.append(f"- {objective['id']} - {objective['mos_ref']}: {objective['objective']}")
        lines.append("")
    write(ROOT / "docs/09-study-guide/learning-roadmap.md", "\n".join(lines))


def write_module_docs(payload):
    overview = [
        "# PIFR Study Modules",
        "",
        "> Generated module index. Modules follow the CASA Part 61 MOS Section 2.2 knowledge-area sequence.",
        "",
        "|Module|Objectives|Purpose|",
        "|---|---:|---|",
    ]
    for module in payload["modules"]:
        module_file = f"modules/{module['slug']}.md"
        overview.append(
            "|" + "|".join([
                link(module_file, module["title"]),
                str(module["objective_count"]),
                "Work through this MOS knowledge area, locate verified official references, and track source gaps.",
            ]) + "|"
        )
    overview += [
        "",
        "## Source Separation",
        "",
        "- Official material is limited to MOS objectives and verified public CASA/Airservices references.",
        "- Explanatory material remains `TODO` unless a verified source has been identified.",
        "- Source gaps are tracked in `docs/08-cross-reference/source-gaps.md`.",
    ]
    write(ROOT / "docs/09-study-guide/modules.md", "\n".join(overview))

    modules_dir = ROOT / "docs/09-study-guide/modules"
    for old_file in modules_dir.glob("*.md"):
        old_file.unlink()

    for module in payload["modules"]:
        lines = [
            f"# {module['title']}",
            "",
            "> Generated study module. This grouping follows the CASA Part 61 MOS Section 2.2 knowledge-area sequence; every objective remains traceable to the MOS row shown below.",
            "",
            "## Objective Checklist",
            "",
            "|ID|MOS reference|Objective|Exam importance|Study file|",
            "|---|---|---|---|---|",
        ]
        for objective in module["objectives"]:
            row = [
                objective["id"],
                objective["mos_reference"],
                objective["objective"],
                objective["exam_importance"],
                link(f"../{objective['id']}.md", objective["id"]),
            ]
            lines.append("|" + "|".join(str(cell).replace("|", "\\|") for cell in row) + "|")

        lines += [
            "",
            "## Official Reference Status",
            "",
            "|ID|CAR|Part 61|Part 91|Part 91 MOS|AIP|ERSA|Charts|",
            "|---|---|---|---|---|---|---|---|",
        ]
        for objective in module["objectives"]:
            refs = objective["references"]
            charts = "; ".join([
                refs.get("ERC LOW reference", "TODO"),
                refs.get("TAC reference", "TODO"),
                refs.get("PCA reference", "TODO"),
            ])
            row = [
                objective["id"],
                refs.get("CAR", "TODO"),
                refs.get("Part 61", "TODO"),
                refs.get("Part 91", "TODO"),
                refs.get("Part 91 MOS", "TODO"),
                refs.get("AIP reference", "TODO"),
                refs.get("ERSA reference", "TODO"),
                charts,
            ]
            lines.append("|" + "|".join(str(cell).replace("|", "\\|") for cell in row) + "|")

        lines += [
            "",
            "## Source Gaps",
            "",
            "- TODO: Check `docs/08-cross-reference/source-gaps.md` for source limitations before adding explanations or examples.",
        ]
        write(modules_dir / f"{module['slug']}.md", "\n".join(lines))


def main():
    modules_path = ROOT / "data/pifr-modules.json"
    payload = build_modules(read_json(modules_path))
    write(modules_path, json.dumps(payload, indent=2, ensure_ascii=False))
    write_learning_roadmap(payload)
    write_module_docs(payload)


if __name__ == "__main__":
    main()
