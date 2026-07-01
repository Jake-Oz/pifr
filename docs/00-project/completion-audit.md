# Completion Audit

Current as of 2026-06-27.

## Verified complete

- All 93 MOS objectives from Part 61 MOS Section 2.2 remain traceable through generated files.
- Every per-objective study file has populated:
  - Why it matters
  - Study notes
  - Common CASA traps
  - Exam use
- The generated website data builds from the Markdown/data source set.
- The source-gap register identifies objectives where official public source coverage is incomplete.

## Validation commands

Run these after any generator or source-map change:

```sh
python3 scripts/validate_traceability.py
node --check website/app.js
node --check website/app-data.js
```

Latest result:

- `python3 scripts/validate_traceability.py`: OK, 93 objectives traceable across generated files.
- `node --check website/app.js`: OK.
- `node --check website/app-data.js`: OK.

## Remaining incomplete areas

These are not failures of traceability. They are unresolved content areas that require verified source material or selected scenario inputs before they should be populated.

| Area | Status | Required before completion |
|---|---|---|
| CASA AC 91-15 fuel guidance | Source gap for PIFR-042. AIP identifies AC 91-15, but the official current CASA URL has not been verified from this repository. | Verify the current official AC 91-15 source before adding it as an official reference. |
| LSALT worked examples | Source gap for PIFR-031 to PIFR-036. Chart products are verified, but route-specific calculations are not. | Select exact chart panels, routes, obstacle/terrain data and aircraft performance source material. |
| Ground radar safety precautions | Source text now captured for PIFR-044 from supplied CAO 20.9 compilation F2011C00881, section 6. Currency against the latest Federal Register version still needs independent verification. | Verify whether F2011C00881 remains current before marking source currency complete. |
| Controlled area protection | Source gap for PIFR-050. Verified AIP support exists for the 500 ft CTA buffer context, but not the exact term definition. | Verify a current official definition before expanding notes. |
| Meteorology theory | Source gap for PIFR-067 to PIFR-069. AIP/MOS operational weather references are mapped, but BoM Manual of Meteorology theory is not yet indexed. | Verify allowed current BoM Manual of Meteorology Parts 1 and 2 source material before adding climatology/hazard theory. |
| Radio navigation technique | Partial source gap remains for PIFR-071 off-track distance calculation and worked examples for PIFR-074, PIFR-075 and PIFR-083. CASA VOR operational notes are now mapped for PIFR-070 and PIFR-072 to PIFR-075, and CASA NDB/ADF operational notes are mapped for PIFR-076 to PIFR-083. | Verify an allowed source for VOR/DME off-track calculation; select exact VORs/NDBs/DME, chart panels and geometry before adding worked fixing examples. |
| GNSS error theory | Source gap for PIFR-086. Operational GNSS integrity references are mapped, but full error-source theory and magnitudes are not sourced. | Verify a public official GNSS theory source before adding detailed magnitudes. |
| Instrument and human-factors theory | Source gap for PIFR-087 to PIFR-093. Legal/operational hooks are mapped, but detailed compass, attitude-indicator, vestibular, visual-illusion and automation theory is not sourced. | Verify official public theory material before adding explanations. |

## Remaining generated TODO categories

The following sections intentionally remain placeholders across the per-objective files until source inputs and scenarios are selected:

- Worked examples
- Aircraft examples
- Flashcards
- Question bank references

These should be populated from the same Markdown source set and kept traceable to the MOS objective IDs.
