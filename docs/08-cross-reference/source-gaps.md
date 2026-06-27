# Source Gaps

This register lists MOS objectives where the cross-reference should remain incomplete until a current public CASA or Airservices source is verified. Do not fill these gaps from commercial training notes or unsupported memory.

## Current Gaps

| Objective | Gap | Current action |
|---|---|---|
| PIFR-042 | CASA AC 91-15 is referenced by AIP ENR 1.1 section 10.9.1 as fuel guidance material, but the current official CASA AC document URL was not verified from the command line due to CASA site access blocking. | Keep enforceable CASR/Part 91 MOS/AIP references mapped. Verify AC 91-15 directly before adding it as an official reference. |
| PIFR-019 | AIP GEN 3.4 and GEN 3.5 identify ATIS, VOLMET, AWIS/WATIR and related weather broadcast services, but frequency and availability details are in ERSA and the current ERSA source has not yet been verified in this repository. | Keep AIP service references mapped. Verify current ERSA before filling the ERSA reference column. |
| PIFR-086 | Official references cover GNSS integrity, RAIM, database validity, SA, HPL/NACp/NIC/NUCp/SIL and space weather, but do not enumerate every MOS-listed error source such as ephemeris, clock, receiver, multipath and DOP in one verified CASA/Airservices source. | Keep the operational references mapped. Add detailed error explanations later as clearly separated explanatory material after finding suitable public official sources. |
| PIFR-089 to PIFR-093 | A clean current public CASA/Airservices source for vestibular disorientation, visual illusions and GNSS human-factors limitations has not yet been verified. | Leave non-MOS references as TODO until an official public source is identified. |
