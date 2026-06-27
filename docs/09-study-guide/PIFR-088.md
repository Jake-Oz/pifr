# PIFR-088

## Objective

MOS Schedule 3 Section 2.2 Unit 2.2.1 16.1.2: State how the attitude indicator is affected by power source output, acceleration and deceleration error, and bank and pitch limits.

## Why it matters

Attitude-indicator power-source, acceleration/deceleration and pitch/bank-limit errors are MOS objectives, but the verified public source cache only supports equipment requirements.

## Official references

|Reference type|Locator|
|---|---|
|CAR|TODO|
|Part 61|TODO|
|Part 91|TODO|
|Part 91 MOS|Part 91 MOS sections 26.08 and 26.12, including attitude, standby attitude/turn indication and gyroscopic power-supply requirements|
|AIP reference|TODO|
|ERSA reference|TODO|
|ERC LOW reference|TODO|
|TAC reference|TODO|
|PCA reference|TODO|

## Official reference status

- Status: Partial
- Exam importance: Medium
- Source status notes: Verified equipment references only against current Part 91 MOS compilation 7 (F2026C00214). Official sources require attitude information, independent standby attitude/turn sources where applicable and adequate gyroscopic-instrument power supply, but the current verified CASA/Airservices source cache does not explain attitude-indicator acceleration/deceleration errors or pitch/bank limits. Leave detailed instrument-error explanation as TODO until a verified public official source is identified.

## Study notes

- Part 91 MOS 26.08 and 26.12 are verified equipment locators for attitude information, standby attitude/turn indication and gyroscopic power-supply requirements.
- The current verified CASA/Airservices source cache does not explain attitude-indicator acceleration/deceleration errors or pitch/bank limits.
- Keep detailed instrument-error theory as TODO until a current public official source is identified.

## Common CASA traps

- Do not infer attitude-indicator error theory from equipment-carriage rules.
- Do not fill pitch/bank limit detail from aircraft manuals unless the aircraft source is selected and clearly separated as aircraft-specific material.
- Do not remove or merge the objective; it remains separately traceable to the MOS.

## Worked examples

TODO: Add attitude-indicator error examples only after verifying a public official source or selecting aircraft-specific AFM/POH material for a clearly labelled aircraft example.

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

- Use Part 91 MOS 26.08/26.12 for required instrument/equipment carriage only.
- Use the source-gap register before adding attitude-indicator theory content.
