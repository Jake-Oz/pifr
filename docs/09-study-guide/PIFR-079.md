# PIFR-079

## Objective

MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.4: Calculate track to and from the NDB, given heading and relative bearings.

## Why it matters

Track and bearing calculation from heading and relative bearing is a specific ADF arithmetic task that CASA's NDB/ADF notes state directly.

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
|CASA guidance|CASA Operational Notes on NDB and ADF, section 5.3|

## Official reference status

- Status: Mapped
- Exam importance: High
- Source status notes: Verified operational references against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. CASA NDB/ADF operational notes section 5.3 supports compass-bearing calculation by adding aircraft compass heading to relative bearing, with RMI bearing read directly from the slaved card.

## Study notes

- Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.
- AIP ENR 1.1 sections 4.4 to 4.6 verify NDB track guidance and NDB-based position lines.
- CASA NDB/ADF operational notes section 5.3 says aircraft compass heading must be added to relative bearing to calculate a compass bearing.
- The same section says an RMI gives the compass bearing directly from the slaved card.
- For plotting, CASA notes that compass bearing is converted to magnetic bearing by applying deviation, then to true bearing by applying variation.

## Common CASA traps

- Do not add relative bearing to true heading if the source question gives compass heading.
- Do not skip deviation/variation if the task asks for map plotting rather than cockpit bearing.
- Do not treat an RMI the same as a fixed-card ADF.

## Worked examples

TODO: Add NDB track calculations using selected heading/RB/deviation/variation values.

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

- Use mapped references for NDB operational context.
- Use CASA NDB/ADF operational notes section 5.3 for bearing arithmetic.
