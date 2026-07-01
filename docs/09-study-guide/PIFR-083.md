# PIFR-083

## Objective

MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.8: Fix position, given relative bearing indications utilising 2 NDB stations.

## Why it matters

Fixing position from two NDB relative bearings links the official positive-fix rule with ADF-derived position lines.

## Official references

|Reference type|Locator|
|---|---|
|CAR|TODO|
|Part 61|TODO|
|Part 91|TODO|
|Part 91 MOS|Part 91 MOS section 1.07 definitions of ADF, NDB and navigational tolerance; sections 14.02 and 14.05|
|AIP reference|AIP ENR 1.1 sections 4.4-4.6|
|ERSA reference|TODO|
|ERC LOW reference|TODO|
|TAC reference|TODO|
|PCA reference|TODO|

## Official reference status

- Status: Mapped
- Exam importance: High
- Source status notes: Verified operational references against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. AIP ENR 1.1 section 4.5 supports positive fixing from intersections of NDB position lines and limits NDB-only position lines to 30 NM from each NDB. CASA NDB/ADF operational notes support ADF-derived position lines and compass-bearing conversion; full two-NDB plotting examples still require selected chart/aids.

## Study notes

- Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.
- AIP ENR 1.1 section 4.5 supports positive fixing from intersections of NDB position lines and limits NDB-only position lines to 30 NM from each NDB.
- CASA NDB/ADF operational notes section 5.1 supports using ADF/aural-null bearings as position lines.
- Section 5.3 supports converting fixed-card relative bearing to compass bearing by adding heading, and converting for plotting with deviation and variation.
- Full two-NDB plotting examples still need selected chart/aids and geometry.

## Common CASA traps

- Do not ignore the NDB-only 30 NM positive-fix limit.
- Do not assume two relative bearings produce an acceptable fix without geometry and range checks.
- Do not plot a relative bearing directly on a chart without converting it to the required bearing reference.

## Worked examples

TODO: Add two-NDB fixing examples only after verifying technique source material and selecting exact NDB/chart inputs.

## Cross references

- Module: [docs/09-study-guide/modules/15-navigation-systems.md](modules/15-navigation-systems.md)
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

- Use AIP ENR 1.1 section 4.5 for positive-fix authority and NDB limits.
- Use Part 91 MOS 14.02 for IFR route navigation requirements.
- Use CASA NDB/ADF operational notes sections 5.1 and 5.3 for position-line and bearing-conversion foundations.
