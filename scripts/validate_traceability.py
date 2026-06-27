import csv
import json
import re
import sys
from pathlib import Path

from generate_pifr_phase1 import CROSS_REFERENCE_FIELDS, ROOT, iter_objectives, module_payload, load_reference_map


def fail(message):
    print(f"FAIL: {message}")
    return 1


def read(path):
    return path.read_text(encoding="utf-8")


def ids_from_markdown_table(path):
    ids = []
    for line in read(path).splitlines():
        if not line.startswith("|PIFR-"):
            continue
        ids.append(line.split("|", 2)[1])
    return ids


def roadmap_ids(path):
    return re.findall(r"\b(PIFR-\d{3})\b", read(path))


def objective_ids(path):
    return re.findall(r"\b(PIFR-\d{3})\b", read(path))


def main():
    objs = list(iter_objectives())
    ids = [obj["id"] for obj in objs]
    id_set = set(ids)
    expected_ids = [f"PIFR-{idx:03d}" for idx in range(1, len(objs) + 1)]

    if ids != expected_ids:
        return fail("objective IDs are not unique and sequential")

    syllabus = read(ROOT / "docs/01-mos/syllabus.md")
    for obj in objs:
        expected = f"- **{obj['mos_ref']}** {obj['objective']}"
        if expected not in syllabus:
            return fail(f"syllabus missing {obj['id']} {obj['mos_ref']}")

    cross_ref_ids = ids_from_markdown_table(ROOT / "docs/08-cross-reference/master-cross-reference.md")
    if cross_ref_ids != ids:
        return fail("cross-reference objective IDs do not match generator order")

    reference_map = load_reference_map()
    if not isinstance(reference_map, dict):
        return fail("reference map must be a JSON object")
    allowed_fields = set(CROSS_REFERENCE_FIELDS)
    for objective_id, fields in reference_map.items():
        if objective_id not in id_set:
            return fail(f"reference map uses unknown objective ID {objective_id}")
        if not isinstance(fields, dict):
            return fail(f"reference map entry for {objective_id} must be an object")
        for field_name, value in fields.items():
            if field_name not in allowed_fields:
                return fail(f"reference map field {objective_id}.{field_name} is not allowed")
            if not isinstance(value, str) or not value.strip():
                return fail(f"reference map field {objective_id}.{field_name} must be a non-empty string")

    roadmap = roadmap_ids(ROOT / "docs/09-study-guide/learning-roadmap.md")
    if sorted(roadmap) != sorted(ids) or len(roadmap) != len(ids):
        return fail("learning roadmap does not reference every objective exactly once")

    expected_modules = module_payload(objs, reference_map)
    modules_payload = json.loads(read(ROOT / "data/pifr-modules.json"))
    if modules_payload != expected_modules:
        return fail("module JSON does not match generator")

    modules_overview = ROOT / "docs/09-study-guide/modules.md"
    if not modules_overview.exists():
        return fail("missing study modules overview")
    for module in expected_modules["modules"]:
        module_path = ROOT / "docs/09-study-guide/modules" / f"{module['slug']}.md"
        if not module_path.exists():
            return fail(f"missing study module {module_path.relative_to(ROOT)}")
        module_ids = set(objective_ids(module_path))
        expected_module_ids = {obj["id"] for obj in module["objectives"]}
        if module_ids != expected_module_ids:
            return fail(f"study module objective mismatch for {module['title']}")

    exam_index_path = ROOT / "docs/14-exam-index/exam-index.md"
    if not exam_index_path.exists():
        return fail("missing exam index")
    exam_index_ids = ids_from_markdown_table(exam_index_path)
    if exam_index_ids != ids:
        return fail("exam index objective IDs do not match generator order")

    for obj in objs:
        path = ROOT / "docs/09-study-guide" / f"{obj['id']}.md"
        if not path.exists():
            return fail(f"missing study file {path.relative_to(ROOT)}")
        expected = f"MOS Schedule 3 Section 2.2 Unit 2.2.1 {obj['mos_ref']}: {obj['objective']}"
        if expected not in read(path):
            return fail(f"study file objective mismatch for {obj['id']}")

    json_payload = json.loads(read(ROOT / "data/pifr-objectives.json"))
    if json_payload.get("objective_count") != len(objs):
        return fail("JSON objective_count does not match generator")
    if json_payload.get("objectives") != objs:
        return fail("JSON objectives do not match generator")

    with (ROOT / "data/pifr-objectives.csv").open(encoding="utf-8", newline="") as csv_file:
        rows = list(csv.DictReader(csv_file))
    if len(rows) != len(objs):
        return fail("CSV objective count does not match generator")
    for row, obj in zip(rows, objs):
        for key in ["id", "mos_ref", "section_no", "section_title", "element_no", "element_title", "objective"]:
            expected = "" if obj[key] is None else obj[key]
            if row[key] != expected:
                return fail(f"CSV mismatch for {obj['id']} field {key}")

    count = read(ROOT / "data/pifr-objectives-count.txt").strip()
    if count != str(len(objs)):
        return fail("objective count file does not match generator")

    print(f"OK: {len(objs)} PIFR objectives traceable across generated files")
    return 0


if __name__ == "__main__":
    sys.exit(main())
