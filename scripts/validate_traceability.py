import csv
import json
import re
import sys
from pathlib import Path

from generate_pifr_phase1 import ROOT, iter_objectives


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


def main():
    objs = list(iter_objectives())
    ids = [obj["id"] for obj in objs]
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

    roadmap = roadmap_ids(ROOT / "docs/09-study-guide/learning-roadmap.md")
    if sorted(roadmap) != sorted(ids) or len(roadmap) != len(ids):
        return fail("learning roadmap does not reference every objective exactly once")

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
