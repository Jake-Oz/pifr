# PIFR-082

## Objective

MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.7: Calculate relative bearing which will indicate that a desired track to or from an NDB has been intercepted, given the intercept heading.

## Why it matters

Relative bearing at NDB track interception is a calculation objective, and CASA's NDB/ADF notes give the recognition rule.

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
|CASA guidance|CASA Operational Notes on NDB and ADF, section 5.5|

## Official reference status

- Status: Mapped
- Exam importance: High
- Source status notes: Verified operational references against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. CASA NDB/ADF operational notes section 5.5 supports the relative-bearing indication used to recognise interception: fly the interception heading until the ADF shows a bearing on the appropriate side of the nose datum equal to the difference between heading and desired track.

## Study notes

- Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.
- AIP ENR 1.1 sections 4.4 to 4.6 verify NDB track guidance and the NDB navigational/deviation threshold context.
- CASA NDB/ADF operational notes section 5.5 says the interception heading should be flown until the ADF indicator shows a bearing on the appropriate side of the nose datum.
- That bearing is equal to the difference between the aircraft heading and the given/desired track.
- For tracks away from the NDB, CASA says calculations are relative to the tail of the aircraft, or 180 degrees on the ADF indicator.

## Common CASA traps

- Do not use the wrong datum: inbound uses the nose datum; outbound uses the tail/180-degree datum.
- Do not confuse deviation threshold with an interception indication.
- Do not merge this with the inbound intercept-heading objective.

## Worked examples

TODO: Add relative-bearing interception calculations after selecting heading and desired-track values.

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

- Use mapped references for NDB operational limits and tolerance.
- Use CASA NDB/ADF operational notes section 5.5 for the interception relative-bearing rule.
