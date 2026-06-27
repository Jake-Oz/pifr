# Reference Mapping Method

The MOS objective list defines scope. Cross-reference entries connect each MOS objective to current public CASA and Airservices material.

## Rules

- Add a non-MOS reference only after verifying it against a current official source.
- Leave the field as `TODO` when the correct source has not been verified.
- Do not use commercial study guides or unsupported memory as a source.
- Do not interpret a source broadly enough to cover an objective unless the link is specific and defensible.
- Keep official source references separate from later explanatory study notes.

## Workflow

1. Confirm the current version of the source publication.
2. Search the source text for the MOS objective terms.
3. Record the narrowest useful reference location in `data/pifr-reference-map.json`.
4. Regenerate with `python3 scripts/generate_pifr_phase1.py`.
5. Validate with `python3 scripts/validate_traceability.py`.

## Reference Map Schema

Each top-level key is a PIFR objective ID, for example `PIFR-010`.

Allowed fields are:

- `CAR`
- `Part 61`
- `Part 91`
- `Part 91 MOS`
- `AIP reference`
- `ERSA reference`
- `ERC LOW reference`
- `TAC reference`
- `PCA reference`
- `Aircraft example`
- `Exam importance`
- `Notes`
