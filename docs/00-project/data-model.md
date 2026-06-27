# Data Model

The MOS objective list is maintained in `scripts/generate_pifr_phase1.py` and emitted into Markdown and structured data.

## Generated Files

- `docs/01-mos/syllabus.md` is the MOS master reference.
- `docs/08-cross-reference/master-cross-reference.md` is the MOS-indexed reference matrix.
- `docs/09-study-guide/PIFR-001.md` through `docs/09-study-guide/PIFR-093.md` are per-objective study placeholders.
- `docs/09-study-guide/learning-roadmap.md` is an editorial grouping of MOS objectives.
- `data/pifr-objectives.json` is the structured objective dataset for future website, retrieval, flashcard and exam-index generation.
- `data/pifr-objectives.csv` is a spreadsheet-friendly export of the same objective dataset.
- `data/pifr-objectives-count.txt` records the current objective count.
- `data/pifr-reference-map.json` is the canonical data file for verified non-MOS cross-reference mappings.

## Validation

Run `python3 scripts/validate_traceability.py` after generated files are edited or regenerated.

The validation checks that:

- all objective IDs are unique and sequential;
- the syllabus contains every MOS objective;
- the cross-reference contains every objective once;
- every per-objective study file exists and contains the correct MOS objective;
- the learning roadmap references every objective once;
- structured JSON and CSV exports match the generator objective list;
- reference-map entries use known objective IDs and approved cross-reference fields.
