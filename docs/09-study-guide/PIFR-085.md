# PIFR-085

## Objective

MOS Schedule 3 Section 2.2 Unit 2.2.1 15.3.2: GNSS errors.

## Why it matters

GNSS error and integrity questions are operationally important because the correct action depends on whether the issue is database validity, integrity/RAIM, dead reckoning, distance reporting, SBAS status or space weather.

## Official references

|Reference type|Locator|
|---|---|
|CAR|TODO|
|Part 61|TODO|
|Part 91|TODO|
|Part 91 MOS|Part 91 MOS sections 11.04-11.05, 14.02, 14.05-14.07; Chapter 26 GNSS/GPS surveillance definitions including HPL, NACp, NIC, NUCp, SA and SIL|
|AIP reference|AIP GEN 2.2 sections 3.11-3.12; AIP GEN 3.5 section 4.13; AIP ENR 1.1 section 4.8; AIP ENR 1.1 section 6.3; AIP ENR 4.3|
|ERSA reference|TODO|
|ERC LOW reference|TODO|
|TAC reference|TODO|
|PCA reference|TODO|

## Official reference status

- Status: Mapped
- Exam importance: High
- Source status notes: Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Use these references for GNSS integrity/RAIM loss, valid database, dead-reckoning mode, GNSS distance reporting, SBAS status, WGS-84/GPS context and space weather effects on GNSS.

## Study notes

- Part 91 MOS 11.04 to 11.05, 14.02 and 14.05 to 14.07 are the verified MOS locators for GNSS integrity, distance information and navigation operations.
- Part 91 MOS Chapter 26 definitions cover surveillance-related GNSS/GPS terms such as HPL, NACp, NIC, NUCp, SA and SIL.
- AIP ENR 1.1 sections 4.8 and 6.3 provide operational GNSS and radio-failure/GNSS context.
- AIP GEN 3.5 section 4.13 is the verified locator for space weather effects on GNSS.

## Common CASA traps

- Do not continue normal GNSS navigation after integrity loss without checking the AIP/MOS action.
- Do not assume a database is valid just because the receiver is functioning.
- Do not treat SBAS, RAIM, FDE and dead-reckoning mode as interchangeable concepts.

## Worked examples

TODO: Add GNSS error/integrity scenarios after selecting receiver messages, route phase and available alternate navigation sources.

## Cross references

- Module: [docs/09-study-guide/modules/gnss-and-instrument-errors.md](modules/gnss-and-instrument-errors.md)
- Master cross-reference: [docs/08-cross-reference/master-cross-reference.md](../08-cross-reference/master-cross-reference.md)
- Exam index: [docs/14-exam-index/exam-index.md](../14-exam-index/exam-index.md)
- Source gaps: [docs/08-cross-reference/source-gaps.md](../08-cross-reference/source-gaps.md)

## Aircraft examples

TODO

## Flashcards

TODO

## Question bank references

TODO

## Exam use

- Use AIP ENR 1.1 section 4.8 for operational GNSS procedure.
- Use Part 91 MOS 11.04 to 11.05 for GNSS distance and integrity requirements.
- Use AIP GEN 3.5 section 4.13 for space-weather-related GNSS effects.
