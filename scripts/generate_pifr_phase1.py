import csv
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

SOURCE = {
    "title": "Part 61 Manual of Standards Instrument 2014",
    "title_id": "F2014L01102",
    "register_id": "F2025C00050",
    "compilation": "Compilation No. 6",
    "effective": "2024-11-19",
    "registered": "2025-01-14",
    "rectified": "2025-03-14",
    "volume": "Volume 3",
    "schedule": "Schedule 3 Aeronautical knowledge standards",
    "section": "Section 2.2 Private IFR Rating",
    "unit": "Unit 2.2.1 PIFR: Private IFR rating",
    "url": "https://www.legislation.gov.au/F2014L01102/latest",
}

CROSS_REFERENCE_FIELDS = [
    "CAR",
    "Part 61",
    "Part 91",
    "Part 91 MOS",
    "AIP reference",
    "ERSA reference",
    "ERC LOW reference",
    "TAC reference",
    "PCA reference",
    "Aircraft example",
    "Exam importance",
    "Notes",
]

SECTIONS = [
    ("2", "Pilot's fitness and qualifications", [
        ("2.1", "Pilot medical fitness for IFR flight", [
            ("2.1.1", "State requirements for pilot fitness to conduct an IFR flight."),
            ("2.1.2", "Describe how a pilot determines whether they are fit to conduct an IFR flight."),
            ("2.1.3", "State what qualifications a pilot must have to be authorised to conduct an IFR flight."),
        ]),
    ]),
    ("3", "Aircraft instruments, radios and equipment", [
        (None, None, [
            ("3.1.1", "List the mandatory flight instruments that must be installed and serviceable for conducting an IFR flight."),
            ("3.1.2", "List the mandatory electrical lighting equipment that must be installed and serviceable for conducting an IFR flight."),
            ("3.1.3", "List the mandatory aircraft radio communications equipment that must be installed and serviceable for conducting an IFR flight."),
            ("3.1.4", "List the mandatory radio navigation equipment that must be installed and serviceable for conducting an IFR flight."),
            ("3.1.5", "Extract from an aircraft flight manual information about the limitations that are specified for operating a particular type of aircraft under the IFR."),
        ]),
    ]),
    ("4", "IFR operations - general", [
        (None, None, [
            ("4.1.1", "State the IFR operations a single-engine aircraft is limited to."),
            ("4.1.2", "State the requirements for submission of flight notification and SARWATCH for conducting an IFR operation."),
            ("4.1.3", "State the speed restrictions an IFR flight must operate to."),
            ("4.1.4", "State the requirements for inflight progress reports for IFR flights."),
            ("4.1.5", "State the requirements and procedures for flight plan amendments and advising revised estimates."),
        ]),
    ]),
    ("5", "Documentation for IFR flight", [
        (None, None, [
            ("5.1.1", "State the documents required to be carried on an IFR flight."),
            ("5.1.2", "Extract relevant information from operational documents for an IFR flight."),
            ("5.1.3", "Describe the meteorological forecasts required for conducting an IFR flight."),
            ("5.1.4", "State sources of, and actions to obtain, meteorological forecasts for IFR flights."),
            ("5.1.5", "Determine the validity of a meteorological forecast for an IFR flight."),
            ("5.1.6", "State what meteorological broadcast services are available in Australia for the flight."),
        ]),
    ]),
    ("6", "IFR navigation requirements", [
        (None, None, [
            ("6.1.1", "Describe the navigation requirements for an IFR flight using radio navigation systems."),
            ("6.1.2", "State the navigation requirements for an IFR flight using self-contained or long-range navigation systems."),
            ("6.1.3", "Describe the navigation requirements for an IFR flight using visual reference to ground and water."),
            ("6.1.4", "State the navigation tolerance for an IFR flight avoiding CTA."),
            ("6.1.5", "State the requirements for positive radio fixing."),
            ("6.1.6", "Determine the requirements for the most precise track guidance."),
            ("6.1.7", "Apply the navigation requirements of IFR flight with respect to time interval between fixes, accuracy of time reference, accuracy and procedures in track keeping."),
            ("6.1.8", "Apply the procedures of IFR flight in all classes of airspace when diverting from track due navigation or weather."),
        ]),
    ]),
    ("7", "Selection of IFR routes", [
        (None, None, [
            ("7.1.1", "Select a route for IFR flight with respect to the following: (a) forecast weather; (b) controlled airspace; (c) PRDs; (d) engine out performance for multi-engine aircraft; (e) specified route limitations; (f) airways operational requirements; (g) the availability of the following: (i) published routes; (ii) en route alternate aerodromes; (iii) navigation aids; (iv) rated coverage of navigation aids; (v) radio communication."),
            ("1.1.1", "Determine the compulsory reporting points for a route selected."),
            ("7.1.2", "Determine whether the flight may proceed based on route, aircraft equipment and IFR navigation requirements."),
        ]),
    ]),
    ("8", "LSALT and selection of IFR altitudes and levels", [
        ("8.1", "LSALT", [
            ("8.1.1", "Determine LSALT for an IFR flight for a route published on a chart."),
            ("8.1.2", "Determine the dimensions of the significant safety sector when calculating LSALT for a route not published on a chart."),
            ("8.1.3", "Determine methods of calculating LSALT for a route not published on a chart."),
            ("8.1.4", "Calculate LSALT for non-published route."),
            ("8.1.5", "State the requirements for descent below LSALT."),
        ]),
        ("8.2", "Select cruising altitude or level", [
            ("8.2.1", "Select an appropriate cruising altitude/level after assessing the following: (a) LSALT; (b) forecast freezing level; (c) engine out performance for multi-engine aircraft; (d) CTA and PRDs; (e) table of IFR cruising levels; (f) availability of published routes; (g) availability of navigation aids; (h) rated coverage of navigation aids; (i) specified route limitations; (j) airways operational requirements."),
        ]),
        ("8.3", "Determining when flight may proceed - uncertain position", [
            ("8.3.1", "Determine whether a flight may proceed based on the following: (a) altitude; (b) aircraft equipment; (c) IFR navigation requirements."),
            ("8.3.2", "Determine an appropriate LSALT when uncertain of position."),
        ]),
    ]),
    ("9", "IFR alternate aerodrome requirements", [
        (None, None, [
            ("9.1.1", "State the alternate aerodrome requirements for an IFR flight to a specified destination, given relevant information, including NOTAM."),
            ("9.1.2", "Determine the suitability of a specified alternate aerodrome for an IFR flight given relevant information, including NOTAM."),
            ("9.1.3", "Describe the holding requirements due to weather, traffic, traffic advisory, and procedures."),
            ("9.1.4", "Calculate the minimum fuel required for an IFR flight in accordance with CASA fuel policy guidance material."),
            ("9.1.5", "Determine whether a flight may proceed based on alternate or holding requirements and fuel capacity."),
        ]),
    ]),
    ("10", "Operation of aircraft equipment", [
        (None, None, [
            ("10.1.1", "State the safety precautions that must be observed when operating aircraft radar equipment on the ground."),
            ("10.1.2", "State the pre-flight altimeter accuracy check for an IFR flight."),
            ("10.1.3", "Apply altimetry procedures to all stages of an IFR flight."),
            ("10.1.4", "Describe the correct use of a transponder, and the associated radio phraseology, in all classes of airspace."),
        ]),
    ]),
    ("11", "CTA operations", [
        (None, None, [
            ("11.1.1", "State airways clearance requirements for operating in all classes of airspace, including lead time required for flight plan submission, contents, 'clearance void time', and 'read back' requirement."),
            ("11.1.2", "State airways clearance requirements for entering, operating in and departing CTA and CTR, including what details to provide to ATC, and what details to expect from ATC."),
            ("11.1.3", "State what is 'controlled area protection'."),
            ("11.1.4", "State ATC requirements for a change of level in CTA, including in an emergency situation."),
            ("11.1.5", "State the procedures for the following components of a flight profile for day and night operations in CTA and CTR: (a) departure; (b) climb; (c) transition to cruise (levelling out); (d) cruise; (e) change of levels; (f) descent and visual approach."),
        ]),
        ("11.2", "Separation standards", [
            ("11.2.1", "State the provision of separation between IFR flights, and IFR and VFR flights in the various classes of CTA."),
            ("11.2.2", "State the provision of separation between IFR flights, and IFR and VFR flights in Class D airspace."),
        ]),
        ("11.3", "Radio procedures", [
            ("11.3.1", "Demonstrate knowledge of radio procedures in CTA and CTR."),
            ("11.3.2", "Determine procedures for loss of radio communication in CTA and CTR."),
            ("11.3.3", "Determine procedures for abnormal operations and/or emergencies in CTA and CTR."),
        ]),
    ]),
    ("12", "Radar services", [
        (None, None, [
            ("12.1.1", "State what radar services are provided by ATC."),
            ("12.1.2", "Demonstrate knowledge of radar vectoring procedures, including radio procedures and phraseologies."),
            ("12.1.3", "State the permissible intervals between ATC transmissions during radar vectoring."),
            ("12.1.4", "Demonstrate knowledge of radar emergency procedures, including loss of radio communication, radar failure, transponder emergency codes, and aircraft emergencies."),
        ]),
    ]),
    ("13", "OCTA operations", [
        ("13.1", "Flight profile procedures - OCTA", [
            ("13.1.1", "State the procedures for the following components of a flight profile for day and night operations in Class G airspace and at non-controlled aerodromes: (a) departure; (b) climb; (c) transition to cruise (levelling out); (d) cruise; (e) change of levels; (f) descent, and arrival."),
        ]),
        ("13.2", "Visual approach procedures", [
            ("13.2.1", "State visual approach procedures, day and night, in Class G airspace and at non-controlled aerodromes, including the following: (a) landing manoeuvres; (b) cancellation of SARWATCH; (c) operation of VHF aerodrome lighting (PAL)."),
        ]),
        ("13.3", "Radio and abnormal procedures", [
            ("13.3.1", "Demonstrate knowledge of radio procedures in Class G airspace and at non-controlled aerodromes."),
            ("13.3.2", "Determine procedures for loss of radio communication in Class G airspace and at non-controlled aerodromes."),
            ("13.3.3", "Determine procedures for abnormal operations and/or emergencies Class G airspace and at non-controlled aerodromes."),
        ]),
    ]),
    ("14", "Meteorology relevant to IFR operations:", [
        (None, None, [
            ("14.1.1", "Demonstrate knowledge of flying conditions likely to be associated with any phenomenon listed in AIP documents and the Bureau of Meteorology publication, Manual of Meteorology, Part 2."),
            ("14.1.2", "Demonstrate knowledge of Australian climatology as enumerated in Manual of Meteorology Parts 1 and 2, with emphasis on the seasonal variations in the location and frequency of frontal weather, tropical cyclones, dust devils, thunderstorms, fog, and the associated penetration and/or avoidance techniques."),
            ("14.1.3", "Predict probability and likely duration and extent of airframe icing, hail, microbursts, wind shear, turbulence en route, when experiencing and/or observing certain cloud types, precipitation, temperature and/or turbulence."),
        ]),
    ]),
    ("15", "Navigation systems", [
        ("15.1", "VOR", [
            ("15.1.1", "Describe the instrument indications that would indicate the following: (a) scalloping; (b) VOR station passage; (c) abeam VOR station; (d) VOR radial the aircraft is on; (e) track error and/or drift experienced."),
            ("15.1.2", "Determine off-track distance experienced from VOR and DME cockpit indications."),
            ("15.1.3", "State VOR omni-bearing selector (OBS) settings required to provide command indications when flying on given tracks both to and from the VOR."),
            ("15.1.4", "Calculate the heading to steer to intercept a new or original track to, or from, a VOR."),
            ("15.1.5", "Fix position, given cockpit instrument indications utilising 2 VOR stations."),
            ("15.1.6", "Fix position, given instrument indications utilising combinations of VOR, NDB and DME."),
        ]),
        ("15.2", "NDB", [
            ("15.2.1", "State how NDB indications or range may be affected by the following: (a) coastal refraction; (b) night error; (c) thunderstorms; (d) mountainous areas; (e) types of terrain; (f) altitude of aircraft."),
            ("15.2.2", "State the method of using the most appropriate NDB for tracking during navigation."),
            ("15.2.3", "Describe how the following are determined using an ADF relative bearing indication: (a) NDB station passage; (b) abeam NDB station; (c) NDB bearing the aircraft is on; (d) track error and/or drift experienced."),
            ("15.2.4", "Calculate track to and from the NDB, given heading and relative bearings."),
            ("15.2.5", "Calculate heading to steer to intercept a new or original track to or from an NDB."),
            ("15.2.6", "Calculate heading to steer to intercept desired inbound track before reaching the NDB."),
            ("15.2.7", "Calculate relative bearing which will indicate that a desired track to or from an NDB has been intercepted, given the intercept heading."),
            ("15.2.8", "Fix position, given relative bearing indications utilising 2 NDB stations."),
        ]),
        ("15.3", "GNSS", [
            ("15.3.1", "GNSS system components and principle of operation: (a) Describe the GNSS system and its principles of operation, including the following: (i) GNSS system components; (ii) space segment; (iii) GNSS Satellite signal; (iv) pseudo random code (C/A course acquisition code); (v) control segment; (vi) user segment (the GNSS receiver); (vii) pseudo ranging; (viii) principle of position fixing/minimum satellites required for navigation functions; (ix) TSO/performance limitations of various equipment types; (x) RAIM; (xi) masking function; (xii) receiver displays of system integrity; (xiii) operating modes - navigation with and without RAIM, DR. (b) Explain why GNSS uses the WGS84 coordinate system."),
            ("15.3.2", "GNSS errors."),
            ("15.3.3", "Describe the cause and magnitude of typical GNSS errors: (a) ephemeris; (b) clock; (c) receiver; (d) atmospheric and ionospheric; (e) multipath; (f) SA; (g) typical total error associated with C/A code; (h) effect of PDOP/GDOP on position accuracy; (i) susceptibility to interference; (j) comparison of vertical and horizontal errors; (k) tracking accuracy and collision avoidance."),
        ]),
    ]),
    ("16", "Flight instrument errors", [
        (None, None, [
            ("16.1.1", "State how the compass is affected by turning error, acceleration and deceleration error."),
            ("16.1.2", "State how the attitude indicator is affected by power source output, acceleration and deceleration error, and bank and pitch limits."),
        ]),
    ]),
    ("17", "Human factors relevant to IFR operations", [
        (None, None, [
            ("17.1.1", "State the part played by the vestibular systems, namely the semicircular canals and otiliths, in helping the pilot maintain orientation."),
            ("17.1.2", "State what circumstances aggravate vestibular disorientation, and how to overcome this problem."),
            ("17.1.3", "State what causes, and may aggravate, vestibular disorientation such as somatogravic illusions, somatogyral illusions and 'graveyard spiral', coriolis effect, and 'leans'."),
            ("17.1.4", "State conditions and causes under which visual illusions, such as 'false horizons', visual-cue illusions, relative motion illusions, 'flicker' effect', black hole' illusion, and autokinesis may occur."),
            ("17.1.5", "Be aware of the human factors limitations associated with the use of GNSS equipment to provide safeguards against navigational errors and loss of situational awareness because of the following: (a) mode errors; (b) data entry errors; (c) data validation and checking, including independent cross-checking procedures; (d) automation induced complacency; (e) non-standardisation of the GNSS receiver units; (f) human information processing and situational awareness."),
        ]),
    ]),
]

ROADMAP = [
    ("IFR Legislation", ["2.1.3", "4.1.1", "4.1.2", "4.1.3", "4.1.4", "4.1.5", "5.1.1"]),
    ("Human Factors", ["2.1.1", "2.1.2", "17.1.1", "17.1.2", "17.1.3", "17.1.4", "17.1.5"]),
    ("Aircraft IFR Equipment", ["3.1.1", "3.1.2", "3.1.3", "3.1.4", "3.1.5", "10.1.1", "10.1.2", "10.1.3", "10.1.4"]),
    ("Flight Planning And Documentation", ["5.1.2", "5.1.3", "5.1.4", "5.1.5", "5.1.6", "7.1.1", "1.1.1", "7.1.2"]),
    ("Navigation And LSALT", ["6.1.1", "6.1.2", "6.1.3", "6.1.4", "6.1.5", "6.1.6", "6.1.7", "6.1.8", "8.1.1", "8.1.2", "8.1.3", "8.1.4", "8.1.5", "8.2.1", "8.3.1", "8.3.2"]),
    ("Alternate Requirements And Fuel", ["9.1.1", "9.1.2", "9.1.3", "9.1.4", "9.1.5"]),
    ("Airspace And Radio Procedures", ["11.1.1", "11.1.2", "11.1.3", "11.1.4", "11.1.5", "11.2.1", "11.2.2", "11.3.1", "11.3.2", "11.3.3", "12.1.1", "12.1.2", "12.1.3", "12.1.4", "13.1.1", "13.2.1", "13.3.1", "13.3.2", "13.3.3"]),
    ("Meteorology", ["14.1.1", "14.1.2", "14.1.3"]),
    ("Radio Navigation", ["15.1.1", "15.1.2", "15.1.3", "15.1.4", "15.1.5", "15.1.6", "15.2.1", "15.2.2", "15.2.3", "15.2.4", "15.2.5", "15.2.6", "15.2.7", "15.2.8"]),
    ("GNSS And Instrument Errors", ["15.3.1", "15.3.2", "15.3.3", "16.1.1", "16.1.2"]),
]

STUDY_CONTENT = {
    "PIFR-003": {
        "why": "This is the legal starting point for PIFR privileges: the exam can test whether a pilot is authorised for the specific IFR operation, endorsement and recency context.",
        "notes": [
            "Start in CASR Part 61 Subpart 61.M for private instrument flight rating privileges and limitations.",
            "Use CASR 61.910 for the private IFR rating privilege framework, then follow the related PIFR provisions through grant, endorsement, recency and flight review requirements.",
            "CASR 61.935 table entries are important because PIFR operations depend on the endorsements held, not merely possession of the rating.",
        ],
        "traps": [
            "Do not treat a private IFR rating as an unrestricted instrument rating.",
            "Check the relevant endorsement before assuming the operation is authorised.",
            "Separate rating privileges, endorsement privileges, recency and flight review requirements.",
        ],
        "examples": "TODO: Add scenarios only after selecting exact endorsement combinations from CASR 61.935.",
        "exam_use": [
            "Search Part 61 for `private IFR rating` and then use the surrounding regulation numbers in the reference locator.",
            "For endorsement questions, go directly to CASR 61.935 and read the table item rather than relying on memory.",
        ],
    },
    "PIFR-009": {
        "why": "Single-engine IFR privileges are a common exam boundary issue because the answer depends on PIFR endorsement limits rather than broad IFR assumptions.",
        "notes": [
            "Use CASR 61.915 and CASR 61.935 to identify which PIFR operations and endorsements are available.",
            "CASR 61.940 and 61.942 support the operational limitation chain for private IFR rating holders and endorsement-specific authorisations.",
            "The mapped references intentionally avoid adding operational limits that are not expressed in the regulation text.",
        ],
        "traps": [
            "Do not import multi-engine or instrument-rating assumptions into a PIFR single-engine question.",
            "Do not assume a navigation aid, approach, holding or night operation is permitted unless the relevant endorsement supports it.",
        ],
        "examples": "TODO: Add aircraft and endorsement examples after the aircraft example set is selected.",
        "exam_use": [
            "Use CASR 61.935 table items first when the question turns on a specific activity.",
            "Then confirm any general private IFR rating limitation in the surrounding Part 61 provisions.",
        ],
    },
    "PIFR-010": {
        "why": "Flight notification and SARWATCH are exam-critical because they combine regulation, MOS requirements, AIP procedures and ERSA route details.",
        "notes": [
            "CASR 91.240 is the legal hook for flight notification requirements prescribed by the Part 91 MOS.",
            "Part 91 MOS Chapter 9 contains the core flight notification rules, including IFR flight plan submission, changes, SARTIME and responsible-person requirements.",
            "AIP ENR 1.10 provides operational flight notification procedures and AIP ENR 1.1 supports SARWATCH cancellation context.",
            "ERSA GEN FPR provides route and flight-plan requirement detail for current operational lookup.",
        ],
        "traps": [
            "Do not confuse lodging flight notification with cancelling SARWATCH.",
            "If a question mentions SARTIME, responsible person or amendment, check MOS Chapter 9 and AIP ENR 1.10 together.",
            "Route-specific flight planning details may sit in ERSA GEN FPR rather than the AIP Book.",
        ],
        "examples": "TODO: Add worked flight-notification examples after selecting a sample route.",
        "exam_use": [
            "For legal requirement wording, go to Part 91 MOS Chapter 9.",
            "For practical form/procedure wording, go to AIP ENR 1.10.",
            "For route-specific planning constraints, check ERSA GEN FPR.",
        ],
    },
    "PIFR-011": {
        "why": "Speed restrictions are quick marks when the correct table is found, but easy to miss if the question changes airspace or altitude context.",
        "notes": [
            "Part 91 MOS Chapter 4 is the primary source for speed limits.",
            "Table 4.02(1) is the key lookup point for IFR/VFR speed restrictions by airspace and circumstance.",
            "AIP ENR 1.4 provides an operational airspace summary, but the MOS table is the stronger legal locator.",
        ],
        "traps": [
            "Read the airspace class and altitude before selecting a speed limit.",
            "Do not use AIP summary material when the MOS table gives the precise rule.",
        ],
        "examples": "TODO: Add speed-limit lookup examples by airspace class.",
        "exam_use": [
            "Go straight to Part 91 MOS Table 4.02(1).",
            "Use AIP ENR 1.4 as a quick cross-check if the question is framed as an airspace question.",
        ],
    },
    "PIFR-012": {
        "why": "Progress-reporting questions test whether the pilot knows which reports are prescribed in controlled/Class E/Class G contexts and when SARWATCH cancellation is required.",
        "notes": [
            "Part 91 MOS Chapter 21 is the primary source for prescribed reports.",
            "Use section 21.05 and Table 21.05(1) for controlled and Class E reporting contexts.",
            "Use section 21.06 and Table 21.06(1) for IFR aircraft in Class G.",
            "AIP ENR 1.1 and ENR 1.10 provide operational position-report and flight-notification context.",
        ],
        "traps": [
            "Do not assume the same report list applies in CTA and Class G.",
            "Look for route reporting requirements, ATC requirements and SARWATCH cancellation triggers separately.",
        ],
        "examples": "TODO: Add report-sequence examples for CTA, Class E and Class G.",
        "exam_use": [
            "Identify the airspace first.",
            "Then use Part 91 MOS Table 21.05(1) or Table 21.06(1) as the primary lookup.",
        ],
    },
    "PIFR-013": {
        "why": "Flight plan amendments and revised estimates are procedural exam topics where small timing or wording details matter.",
        "notes": [
            "Part 91 MOS 9.03 covers change notification for submitted flight notifications.",
            "Part 91 MOS Tables 21.05(1) and 21.06(1) contain prescribed reporting triggers for corrected estimates and speed variation.",
            "AIP ENR 1.10 section 4 is the operational locator for flight notification amendment phraseology and process.",
            "AIP ENR 1.1 supports in-flight route, level and estimate amendment procedures.",
        ],
        "traps": [
            "Do not treat every small ETA change as a revised-estimate report; check the AIP/MOS threshold.",
            "Separate pre-flight plan amendment from in-flight corrected estimate reporting.",
        ],
        "examples": "TODO: Add revised-estimate examples using a sample IFR route.",
        "exam_use": [
            "For submitted flight notification changes, start with Part 91 MOS 9.03.",
            "For in-flight revised estimates, go to the Chapter 21 report tables and AIP ENR 1.1.",
        ],
    },
    "PIFR-014": {
        "why": "Document-carriage questions are usually solved by locating the exact Part 91 regulation and then checking AIP carriage guidance for maps, charts and aeronautical information.",
        "notes": [
            "CASR 91.100, 91.105 and 91.110 are the primary legal references for documents and authorised aeronautical information.",
            "AIP ENR 1.10 section 5 supports the operational requirement to carry relevant current aeronautical maps, charts and information.",
            "The reference map separates document carriage from later study tasks about extracting information from those documents.",
        ],
        "traps": [
            "Do not confuse documents required to be carried with documents merely useful for planning.",
            "Check whether the question asks about flight crew documents, aircraft documents or aeronautical information.",
        ],
        "examples": "TODO: Add pre-flight document checklist example after the aircraft example set is selected.",
        "exam_use": [
            "Use CASR 91.100 to 91.110 for legal document-carriage wording.",
            "Use AIP ENR 1.10 section 5 for chart and operational information carriage context.",
        ],
    },
    "PIFR-015": {
        "why": "This objective turns the permitted documents into a practical pre-flight workflow: weather, NOTAM, aerodrome, route, chart, aircraft and flight notification information all have to be extracted from the correct source.",
        "notes": [
            "Use CASR 91.095 to 91.110 for document and authorised aeronautical information requirements.",
            "Use CASR 91.230, 91.235 and 91.240 for weather, alternate and flight notification legal hooks.",
            "Part 91 MOS Chapters 7, 8, 9 and 19 are the main pre-flight planning chapters for weather, alternates, flight notification and fuel.",
            "AIP ENR 1.10 and AIP GEN 3.1/3.2 identify operational information, chart products and briefing/publication sources.",
        ],
        "traps": [
            "Do not use one document type to answer every planning question; identify whether the question is about weather, NOTAM, route, chart, fuel, aircraft documents or flight notification.",
            "Do not treat extracted operational information as current unless the source cycle and validity are checked.",
        ],
        "examples": "TODO: Add a document-extraction checklist for a sample IFR trip.",
        "exam_use": [
            "Start with the question noun: forecast, NOTAM, chart, flight plan, alternate, fuel or aircraft document.",
            "Then move to the matching MOS chapter or AIP section from the official reference table.",
        ],
    },
    "PIFR-016": {
        "why": "Forecast requirements are high-value exam material because IFR planning requires the correct forecast type for the route, destination and alternates.",
        "notes": [
            "Part 91 MOS 7.02 is the primary source for forecasts required before flight.",
            "For route weather, identify whether the operation is at or below 10,000 ft, above 10,000 ft, or requires a flight forecast.",
            "For IFR destination and alternate planning, check whether the planned destination has an IAP the pilot can conduct.",
            "The MOS validity rule for destination and alternate aerodrome forecasts is separate from the general route-forecast requirement.",
        ],
        "traps": [
            "Do not confuse route forecast requirements with destination aerodrome forecast requirements.",
            "Do not ignore the 30 minutes before and 60 minutes after ETA validity window for IFR destination and alternate forecasts.",
            "If briefing was obtained more than 1 hour before departure, check the MOS update requirement.",
        ],
        "examples": "TODO: Add forecast-selection examples for GAF/TAF/ICAO landing forecast scenarios.",
        "exam_use": [
            "Go directly to Part 91 MOS 7.02.",
            "Use AIP GEN 3.5 for product names and availability context after the MOS requirement is identified.",
        ],
    },
    "PIFR-017": {
        "why": "The exam can ask both what forecast sources exist and what action the pilot must take to obtain or update them.",
        "notes": [
            "Part 91 MOS 7.02 requires the pilot in command to study authorised forecasts/reports and other reasonably available relevant weather information.",
            "Part 91 MOS 7.03 deals with the limited case where an authorised forecast or report is not available before departure.",
            "AIP GEN 3.5 identifies BoM aviation weather resources, meteorological offices, Airservices briefing pathways and routine/non-routine product availability.",
        ],
        "traps": [
            "Do not treat a source list as satisfying the legal study/update requirement by itself.",
            "If the question says a forecast was unavailable before departure, check MOS 7.03 rather than guessing.",
        ],
        "examples": "TODO: Add pre-flight weather-source workflow using NAIPS/AIP/BoM references.",
        "exam_use": [
            "Use Part 91 MOS 7.02 for required pilot action.",
            "Use AIP GEN 3.5 for where the products and services are described.",
        ],
    },
    "PIFR-018": {
        "why": "Forecast validity questions are usually solved by applying a specific timing rule rather than interpreting the weather content.",
        "notes": [
            "Part 91 MOS 7.02 contains the forecast validity rules for whole flight coverage and destination/alternate ETA windows.",
            "A forecast studied more than 1 hour before flight requires an update before the flight begins.",
            "Part 91 MOS 7.03 provides the rule set for flights unable to obtain an authorised forecast before departure.",
            "AIP GEN 3.5 describes TAF, GAF and related product validity context.",
        ],
        "traps": [
            "Do not use issue time alone; check the validity period against the flight or ETA requirement.",
            "Do not apply the aerodrome forecast ETA window to every route forecast product.",
        ],
        "examples": "TODO: Add validity-window calculations for destination and alternate forecasts.",
        "exam_use": [
            "For validity, use Part 91 MOS 7.02 before checking AIP product descriptions.",
            "For no-forecast-before-departure scenarios, use Part 91 MOS 7.03.",
        ],
    },
    "PIFR-019": {
        "why": "Weather broadcast services are practical exam-index topics: the answer is usually found by knowing whether to look in AIP GEN 3.4, AIP GEN 3.5, ERSA GEN FIS or ERSA NAV/COMM.",
        "notes": [
            "Part 91 MOS section 1.07 defines ATIS and AWIS, and section 14.03 identifies QNH sources for instrument approaches.",
            "AIP GEN 3.4 covers communication services such as AAIS/CA-GRS, UNICOM context and ATIS-related services.",
            "AIP GEN 3.5 covers VOLMET and meteorological services.",
            "ERSA GEN FIS and ERSA NAV/COMM provide current service and frequency lookup context.",
        ],
        "traps": [
            "Do not assume every aerodrome has the same weather broadcast services.",
            "Use ERSA for current frequencies/locations rather than relying on AIP service descriptions alone.",
        ],
        "examples": "TODO: Add service-lookup examples for ATIS, AWIS/WATIR and VOLMET.",
        "exam_use": [
            "Use AIP GEN 3.4/3.5 to identify the type of service.",
            "Use ERSA GEN FIS and NAV/COMM to locate current availability and frequencies.",
        ],
    },
    "PIFR-020": {
        "why": "Radio navigation requirements decide whether an IFR route is legally navigable and whether the aircraft can remain within required tolerances between fixes.",
        "notes": [
            "CASR 91.287 is the regulation hook for IFR navigation requirements.",
            "Part 91 MOS 14.02(1)(b) requires the route to allow positive position fixing using ground-based radio navigation aids within rated coverage.",
            "Part 91 MOS 14.02(6) requires positive position fixing at intervals not exceeding 2 hours when using radio navigation systems.",
            "AIP ENR 1.1 sections 4.1 and 4.3 to 4.6 provide the operational track keeping, navigation-aid, tolerance and fixing context.",
        ],
        "traps": [
            "Do not assume a radio aid is usable beyond rated coverage.",
            "Do not plan an IFR radio-navigation route without checking positive fixing and track keeping.",
            "The 2-hour maximum between positive fixes is a limit, not a target for good route design.",
        ],
        "examples": "TODO: Add a radio-navigation route example after selecting exact ERC Low/TAC panels and aid coverage.",
        "exam_use": [
            "Use Part 91 MOS 14.02 first for the legal requirement.",
            "Use AIP ENR 1.1 section 4 to resolve track keeping, tolerance and positive-fix wording.",
        ],
    },
    "PIFR-021": {
        "why": "Self-contained and long-range navigation questions test whether the planned IFR route can be flown with approved area navigation equipment and the required integrity checks.",
        "notes": [
            "CASR 91.287 is the regulation hook; Part 91 MOS 14.02 is the primary navigation requirement.",
            "Part 91 MOS 1.07 defines area navigation, LRNS, RNAV specification and RNP specification.",
            "Part 91 MOS 14.02(1)(a) and 14.02(2) to 14.02(7) set the requirements for approved area navigation systems, route suitability, tracking and GNSS-related checks.",
            "Part 91 MOS 11.03 is relevant for FDE and long-range/oceanic navigation contexts where applicable.",
        ],
        "traps": [
            "Do not treat any moving map as an approved IFR area navigation system.",
            "Check route requirements, navigation specification and GNSS integrity rather than relying on equipment capability alone.",
            "Long-range navigation requirements may add checks that are not relevant to short domestic routes.",
        ],
        "examples": "TODO: Add approved GNSS/LRNS examples after selecting aircraft avionics and route assumptions.",
        "exam_use": [
            "Start with Part 91 MOS 14.02 for IFR navigation method.",
            "Use Part 91 MOS 1.07 definitions when the question turns on RNAV/RNP/LRNS terminology.",
            "Use AIP ENR 1.1 section 4.8 for GNSS operational procedure context.",
        ],
    },
    "PIFR-022": {
        "why": "Visual-reference IFR navigation is a narrow exception, so exam questions often test the limits rather than the general VFR idea.",
        "notes": [
            "CASR 91.273 and 91.287 provide the regulation context for VMC/day and IFR navigation requirements.",
            "Part 91 MOS 14.02(1)(c) allows visual-reference navigation only in the specified IFR circumstances.",
            "Part 91 MOS 13.02 supports the visual meteorological conditions requirement.",
            "AIP ENR 1.1 sections 4.1.1(c) and 4.2.1(b) to 4.2.1(c) provide the operational visual-reference navigation context.",
        ],
        "traps": [
            "Do not treat visual-reference IFR navigation as a night or IMC option.",
            "Do not use visual reference if area navigation or ground-based navigation is available and required for the route.",
            "Position fixing by visual reference still has prescribed interval requirements.",
        ],
        "examples": "TODO: Add day/VMC visual-reference navigation examples after selecting route conditions.",
        "exam_use": [
            "Go to Part 91 MOS 14.02(1)(c) to test whether visual-reference IFR navigation is available.",
            "Use Part 91 MOS 13.02 to verify VMC conditions.",
        ],
    },
    "PIFR-023": {
        "why": "Avoiding CTA depends on staying within navigation tolerance; this is an exam boundary between planned clearance avoidance and accidental controlled-airspace infringement.",
        "notes": [
            "Part 91 MOS 1.07 defines navigational tolerance.",
            "Part 91 MOS 14.02(6) links IFR radio-navigation operations to tolerance and positive fixing.",
            "AIP ENR 1.1 sections 4.4 and 4.6 provide operational guidance for track keeping and when ATC must be advised.",
        ],
        "traps": [
            "Do not plan to skim a CTA boundary without allowing for navigational tolerance.",
            "A tolerance is not permission to operate outside the planned route or clearance.",
            "Use the navigation method in the question; GNSS, VOR, NDB and visual navigation tolerances are not interchangeable.",
        ],
        "examples": "TODO: Add CTA-avoidance examples after selecting charted boundaries and route tracks.",
        "exam_use": [
            "Find the navigation method first.",
            "Use Part 91 MOS 1.07 and AIP ENR 1.1 sections 4.4/4.6 to locate the applicable tolerance and ATC advice threshold.",
        ],
    },
    "PIFR-024": {
        "why": "Positive fixing is central to IFR track keeping, LSALT, uncertainty handling and route legality.",
        "notes": [
            "Part 91 MOS 14.02(1)(b) and 14.02(6) are the primary requirements for positive position fixing using radio navigation systems.",
            "AIP ENR 1.1 sections 4.1.1(b), 4.2.1(e) and 4.5 describe positive-fix methods and limitations.",
            "The verified source notes include the NDB-only positive-fix limitation and the 2-hour maximum interval between positive fixes.",
            "GNSS fixes must satisfy the applicable equipment and procedure requirements rather than being assumed from display position alone.",
        ],
        "traps": [
            "Do not accept a single bearing or vague estimate as a positive fix.",
            "Do not ignore NDB limitations when an all-NDB fix is proposed.",
            "Do not let the route exceed the maximum interval between positive fixes.",
        ],
        "examples": "TODO: Add positive-fix examples using actual aid geometry from a current chart panel.",
        "exam_use": [
            "Use AIP ENR 1.1 section 4.5 for positive-fix wording.",
            "Use Part 91 MOS 14.02(6) for the time-interval rule.",
        ],
    },
    "PIFR-025": {
        "why": "Track-guidance priority is a quick exam lookup, but it only applies if the equipment and pilot qualification support that method.",
        "notes": [
            "Part 91 MOS 14.02 provides the route and navigation system legality chain.",
            "AIP ENR 1.1 section 4.4.3 gives the verified order of track-guidance precision: Localiser, GNSS, VOR, then NDB.",
            "The most precise available guidance must still be compatible with the route, equipment and pilot qualification.",
        ],
        "traps": [
            "Do not choose a more precise aid if the aircraft is not equipped or the pilot is not authorised to use it.",
            "Do not use the precision order to bypass route or procedure limitations.",
        ],
        "examples": "TODO: Add route segments showing localiser/GNSS/VOR/NDB priority after selecting chart examples.",
        "exam_use": [
            "Go directly to AIP ENR 1.1 section 4.4.3 for the precision order.",
            "Confirm route legality in Part 91 MOS 14.02 if the question asks whether the flight may proceed.",
        ],
    },
    "PIFR-026": {
        "why": "This objective combines the small procedural details CASA can test: fix interval, time reference accuracy and corrective track-keeping action.",
        "notes": [
            "Part 91 MOS 14.02 contains the legal navigation requirements for fixing, system reliability and route suitability.",
            "AIP ENR 1.1 sections 4.1, 4.3, 4.4, 4.5 and 4.8 provide the operational track-keeping, timing, positive-fix and GNSS context.",
            "The verified source status identifies plus/minus 30 seconds for time reference accuracy and a maximum 2 hours between positive fixes.",
            "If navigation system accuracy, reliability or serviceability becomes doubtful, Part 91 MOS 14.02(4) triggers monitoring, safety procedures and ATS notification actions.",
        ],
        "traps": [
            "Do not confuse the time-reference accuracy requirement with the maximum positive-fix interval.",
            "Do not continue passively when off track; the AIP procedure requires positive action to regain track.",
            "GNSS integrity loss is a navigation problem, not just an avionics message to ignore.",
        ],
        "examples": "TODO: Add timing and track-error examples after selecting a route leg and groundspeed.",
        "exam_use": [
            "Use AIP ENR 1.1 section 4 for operational values.",
            "Use Part 91 MOS 14.02(4) when the question says a navigation system is inaccurate, unreliable or inoperative.",
        ],
    },
    "PIFR-027": {
        "why": "Diversion from track due weather or navigation problems is a practical IFR safety topic and an exam trigger for ATC notification and alternate navigation actions.",
        "notes": [
            "Part 91 MOS 14.02(4) covers actions when a navigation system is inaccurate, unreliable or inoperative.",
            "Part 91 MOS 11.04 and 11.05 support GNSS integrity and GNSS-derived distance information cases.",
            "AIP ENR 1.1 sections 4.4 and 4.6 to 4.8 cover track keeping, deviation advice, GNSS and related navigation procedures.",
            "AIP ENR 2.2 section 2.4 is the verified weather-deviation locator.",
        ],
        "traps": [
            "Do not deviate in controlled airspace without considering clearance, ATC advice and separation responsibilities.",
            "Do not treat weather deviation and navigation-system failure as the same procedure; use the source matching the cause.",
            "If GNSS integrity is lost, check the GNSS-specific AIP/MOS action rather than continuing as normal.",
        ],
        "examples": "TODO: Add weather-deviation and navigation-failure scenarios after selecting airspace and route examples.",
        "exam_use": [
            "Use Part 91 MOS 14.02(4) for navigation-system failure/unreliability.",
            "Use AIP ENR 2.2 section 2.4 for weather-deviation procedure.",
        ],
    },
    "PIFR-028": {
        "why": "Route selection is a combined planning problem: weather, airspace, PRDs, route limitations, alternates, navigation aids, rated coverage and communications all have to be checked before the flight is viable.",
        "notes": [
            "Use Part 91 MOS Chapters 7, 8, 9, 10, 11, 14, 21 and 26 as the regulation/MOS planning chain.",
            "AIP ENR 1.1, ENR 1.10, ENR 5.1 and GEN 1.5/3.2 provide route, flight notification, PRD/MOA, navigation equipment and chart-product context.",
            "ERSA GEN FPR adds route-specific flight-planning requirements.",
            "Current ERC Low, TAC and PCA chart product availability has been verified from Airservices AIP Charts.",
        ],
        "traps": [
            "Do not select a route from a line on a chart without checking PRD/MOA, route limitations and navigation/communication requirements.",
            "Do not treat chart product availability as a route-specific worked example; exact panel work still needs a selected route.",
            "Engine-out performance for multi-engine aircraft must come from aircraft-specific material, not generic AIP text.",
        ],
        "examples": "TODO: Add route-selection worked examples after selecting exact ERC Low/TAC/PCA panels.",
        "exam_use": [
            "Use the MOS chapters for the legal proceed/no-proceed chain.",
            "Use AIP/ERSA/charts for operational route data and current publication lookup.",
        ],
    },
    "PIFR-029": {
        "why": "Compulsory reporting points are a route-specific lookup task that connects flight notification, route data and in-flight reporting requirements.",
        "notes": [
            "Part 91 MOS Chapter 9 covers flight notification requirements and route information submitted for the flight.",
            "Part 91 MOS Chapter 21 contains the prescribed reports and position-report triggers.",
            "AIP ENR 1.1 explains reporting point and position report context, including off-route reporting logic.",
            "AIP ENR 1.10 supports flight notification route detail.",
        ],
        "traps": [
            "Do not assume every waypoint on a planned route is a compulsory reporting point.",
            "Check whether the report is required by route requirements, ATC instruction, SARWATCH, or Class G IFR procedures.",
        ],
        "examples": "TODO: Add route reporting point example after selecting a sample route.",
        "exam_use": [
            "Use the route/chart to identify candidate reporting points.",
            "Use Part 91 MOS Chapter 21 and AIP ENR 1.1 to determine which reports are compulsory.",
        ],
    },
    "PIFR-030": {
        "why": "Proceed/no-proceed questions test whether all route, equipment and IFR navigation requirements have been brought together, not just whether the weather looks acceptable.",
        "notes": [
            "Use Part 91 MOS 10.02 for pre-takeoff checks and the broader MOS chain for weather, alternates, notification, PRD/MOA, navigation and equipment.",
            "Part 91 MOS 14.02 is the key IFR navigation method reference.",
            "Part 91 MOS Chapter 26 supports communication/navigation equipment serviceability.",
            "AIP, ERSA and current charts provide the operational route and publication context needed to apply the MOS rules.",
        ],
        "traps": [
            "Do not decide proceed/no-proceed from a single factor unless the question explicitly isolates that factor.",
            "Check aircraft equipment, pilot capability, route requirements, alternates, NOTAM and GNSS integrity where applicable.",
        ],
        "examples": "TODO: Add proceed/no-proceed checklist example after selecting aircraft and route assumptions.",
        "exam_use": [
            "Build the answer as a chain: weather, alternate, notification, route/airspace, navigation, equipment, NOTAM, fuel.",
            "Use the reference locator to jump to the first failed condition in that chain.",
        ],
    },
    "PIFR-031": {
        "why": "Published-route LSALT is one of the fastest exam marks when the charted value and the legal minimum-height rule are located correctly.",
        "notes": [
            "CASR 91.305 is the legal minimum-height reference for IFR flight.",
            "Part 91 MOS 1.07 defines LSALT.",
            "AIP GEN 3.2 identifies the relevant chart products; current ERC Low and TAC panel availability is verified.",
            "AIP GEN 3.3 sections 4.1 to 4.4 explain published LSALT, calculated LSALT and when IFR flight must not be below them.",
        ],
        "traps": [
            "Do not calculate your own LSALT where the route has a published value unless the question asks for calculation.",
            "Check whether the question asks for route LSALT, grid LSALT, sector altitude or instrument-procedure altitude.",
            "Do not descend below LSALT unless a specific CASR/AIP permission applies.",
        ],
        "examples": "TODO: Add published-route LSALT lookup examples after selecting exact ERC Low/TAC panels and route segments.",
        "exam_use": [
            "Use the current chart first for a published route LSALT.",
            "Use AIP GEN 3.3 section 4 to resolve whether published or calculated LSALT applies.",
        ],
    },
    "PIFR-032": {
        "why": "For unpublished routes, the LSALT answer depends on selecting the correct tolerance area before doing any height calculation.",
        "notes": [
            "CASR 91.305 remains the legal minimum-height hook.",
            "AIP GEN 3.3 sections 4.2 and 4.5 to 4.8 define the significant safety sector/tolerance area cases.",
            "The applicable area changes with the navigation situation: inaccurate navigation or off-track/radio-aid failure, radio-navigation or DR routes, RNP 2 routes, and other area navigation operations.",
        ],
        "traps": [
            "Do not start with obstacle height before identifying the correct tolerance area.",
            "Do not use an RNP 2 tolerance area for a non-RNP route.",
            "If position is uncertain, use the uncertainty case rather than the normal planned-route corridor.",
        ],
        "examples": "TODO: Add tolerance-area diagrams only after selecting source-backed route examples and chart extracts.",
        "exam_use": [
            "Go to AIP GEN 3.3 section 4.5 to 4.8 and match the route/navigation case.",
            "Then apply the LSALT calculation method from the adjacent AIP GEN 3.3 text.",
        ],
    },
    "PIFR-033": {
        "why": "CASA can test the method as well as the arithmetic: grid LSALT, published LSALT and calculated LSALT are not interchangeable.",
        "notes": [
            "AIP GEN 3.3 sections 4.1 to 4.8 are the primary method locator for non-charted-route LSALT.",
            "The verified source set covers Grid LSALT use, obstacle and terrain allowances, and tolerance areas for radio navigation/DR, RNP 2 and other area navigation operations.",
            "CASR 91.305 supplies the legal minimum-height context for applying the result.",
        ],
        "traps": [
            "Do not use Grid LSALT when the question requires calculated route LSALT.",
            "Do not omit unreported-obstacle allowance where the AIP calculation method requires it.",
            "Do not mix terrain-only and obstacle-based rules.",
        ],
        "examples": "TODO: Add calculation-method comparisons after selecting a charted route and unpublished-route example.",
        "exam_use": [
            "Use AIP GEN 3.3 section 4 as the main exam lookup.",
            "Read the whole LSALT method block before choosing a formula or value.",
        ],
    },
    "PIFR-034": {
        "why": "Non-published-route LSALT calculation is a procedural arithmetic task where the wrong area or allowance gives the wrong answer.",
        "notes": [
            "AIP GEN 3.3 sections 4.2 to 4.8 provide the verified calculation references for non-published routes.",
            "The verified notes identify the relevant allowances: unreported-obstacle allowance, 1,000 ft above highest obstacle where applicable, 1,360 ft above terrain where applicable, the 1,500 ft floor in the specified case, and the applicable tolerance area.",
            "CASR 91.305 supplies the legal context for applying the calculated minimum height.",
        ],
        "traps": [
            "Do not calculate against the centreline only; use the applicable tolerance area.",
            "Do not round or add allowances from memory; use the AIP wording.",
            "Do not invent a worked result without the exact route, terrain and obstacle data.",
        ],
        "examples": "TODO: Add full LSALT calculations after selecting exact chart panels, route coordinates and obstacle/terrain source data.",
        "exam_use": [
            "First identify the applicable AIP GEN 3.3 tolerance area.",
            "Then apply the relevant terrain/obstacle allowance from the same AIP section.",
        ],
    },
    "PIFR-035": {
        "why": "Descent below LSALT is a legal permission question; the safest exam approach is to find the listed exception rather than reason from convenience.",
        "notes": [
            "CASR 91.305 is the primary legal reference for IFR minimum heights.",
            "AIP GEN 3.3 section 4.4 restates the published/calculated LSALT rule and points back to civil aviation legislation permissions.",
            "The verified source status identifies the permitted contexts: taking off or landing, applicable published visual approach/departure procedures, authorised instrument departure or approach procedures, ATC clearance, or VMC by day.",
            "AIP ENR 1.1 references may be relevant where the descent occurs within approach, route or GNSS procedure context.",
        ],
        "traps": [
            "Do not descend below LSALT merely because visual contact is expected later.",
            "Do not confuse LSALT with an instrument-procedure minimum altitude.",
            "Check the exact exception named in CASR 91.305 before selecting an answer.",
        ],
        "examples": "TODO: Add descent-below-LSALT scenarios after verifying each scenario against CASR 91.305 and the relevant AIP procedure.",
        "exam_use": [
            "Use CASR 91.305 for the allowed exception list.",
            "Use AIP GEN 3.3 section 4.4 to connect the charted or calculated LSALT to the legal rule.",
        ],
    },
    "PIFR-036": {
        "why": "Cruising level selection pulls together LSALT, weather, airspace, PRDs, route limitations, navigation aid coverage and aircraft performance.",
        "notes": [
            "Use CASR 91.230 to 91.300, Part 91 MOS Chapters 2, 7, 9, 10, 11 and 14, and the mapped AIP references as the planning chain.",
            "AIP ENR 1.7 sections 3.2 to 3.3 and AIP ENR 1.1 sections 5.1 to 5.1.5 support cruising-level and altimetry context.",
            "AIP ENR 5.1 is the PRD/MOA locator; ERSA and current chart products support route-specific lookup.",
            "Engine-out performance for multi-engine aircraft is aircraft-specific and must be taken from AFM/POH or approved performance material, not inferred from general IFR references.",
        ],
        "traps": [
            "Do not select a legal cruising level that is below LSALT.",
            "Do not ignore freezing level, PRDs/MOAs, controlled-airspace steps or route limitations.",
            "Do not use generic multi-engine performance assumptions for engine-out capability.",
        ],
        "examples": "TODO: Add cruising-level selection examples after choosing a route, forecast package, chart panels and aircraft performance source.",
        "exam_use": [
            "Build the lookup chain in order: LSALT, weather/freezing level, airspace/PRD, cruising level table, route/nav aid availability, aircraft performance.",
            "Use ERSA and charts only for route-specific facts after the MOS/AIP rule is identified.",
        ],
    },
    "PIFR-037": {
        "why": "This is a proceed/no-proceed decision under uncertainty: the aircraft must still satisfy altitude, equipment and IFR navigation requirements.",
        "notes": [
            "CASR 91.245, 91.287, 91.305 and 91.810 form the regulation chain for equipment, IFR navigation, minimum height and required equipment.",
            "Part 91 MOS 10.02, 14.02 and Chapter 26 provide the pre-takeoff, navigation and equipment detail.",
            "AIP GEN 3.3 sections 4.4 to 4.8 and AIP ENR 1.1 sections 4.1 and 4.4 to 4.8 provide the LSALT, tolerance, positive-fix and GNSS context.",
            "If the necessary altitude, equipment or navigation condition is not satisfied, record the failed condition rather than forcing a proceed answer.",
        ],
        "traps": [
            "Do not let a serviceable aircraft-equipment answer override an LSALT or navigation-position problem.",
            "Do not treat uncertain position as a normal en route navigation case.",
            "Check GNSS integrity and positive fixing before relying on a displayed position.",
        ],
        "examples": "TODO: Add proceed/no-proceed uncertain-position examples after selecting exact navigation and equipment scenarios.",
        "exam_use": [
            "Check altitude/LSALT first, then aircraft equipment, then IFR navigation method and position certainty.",
            "Use AIP GEN 3.3 section 4.5 if the question says navigation is inaccurate or position is uncertain.",
        ],
    },
    "PIFR-038": {
        "why": "When position is uncertain, the LSALT area expands; using the normal planned-route corridor can understate terrain clearance.",
        "notes": [
            "CASR 91.305 provides the legal minimum-height context.",
            "AIP GEN 3.3 sections 4.2 to 4.8 are the primary LSALT locator.",
            "The verified source status identifies the uncertain-position case as a circle centred on the DR position with radius 5 NM plus 20 percent of the air distance flown from the last positive fix.",
            "Calculate the LSALT for that uncertainty area using the AIP GEN 3.3 section 4 method.",
        ],
        "traps": [
            "Do not calculate from the intended track alone once position is uncertain.",
            "Do not ignore distance flown since the last positive fix.",
            "Do not use a DR position as if it were a positive fix.",
        ],
        "examples": "TODO: Add uncertain-position LSALT calculations after selecting a route leg, last positive fix, elapsed distance and chart source.",
        "exam_use": [
            "Go to AIP GEN 3.3 section 4.5 for the uncertainty area.",
            "Then calculate using the obstacle/terrain rules in AIP GEN 3.3 section 4.",
        ],
    },
    "PIFR-039": {
        "why": "Alternate requirements are a core IFR exam topic because destination suitability can change with weather, navigation aid status, lighting, NOTAM and fuel consequences.",
        "notes": [
            "CASR 91.235 is the regulation hook for alternate aerodrome requirements.",
            "Part 91 MOS Division 8.2, especially sections 8.04 to 8.09, is the primary enforceable source for IFR alternate requirements.",
            "AIP ENR 1.1 section 10.7 provides the operational alternate planning locator, including weather, navigation, lighting and NOTAM-related cases.",
            "Part 91 MOS Chapter 19 and AIP ENR 1.1 section 10.9 connect alternate and holding requirements to fuel planning.",
        ],
        "traps": [
            "Do not decide alternate requirements from weather alone; check navigation, lighting, NOTAM and suitability restrictions.",
            "Do not ignore holding fuel when holding is used instead of, or as part of, alternate planning.",
            "Do not assume an alternate is suitable just because it is nearby.",
        ],
        "examples": "TODO: Add alternate requirement examples after selecting exact destination/alternate aerodromes, forecasts and NOTAM.",
        "exam_use": [
            "Start with Part 91 MOS sections 8.04 to 8.09.",
            "Use AIP ENR 1.1 section 10.7 for exam lookup wording and planning context.",
            "Then check Part 91 MOS Chapter 19 for fuel effects.",
        ],
    },
    "PIFR-040": {
        "why": "A nominated alternate only solves the planning problem if it is itself suitable for the aircraft, weather, navigation, lighting and NOTAM conditions.",
        "notes": [
            "CASR 91.235 provides the regulation context for alternate aerodrome planning.",
            "Part 91 MOS sections 8.04 to 8.08 are the primary source for determining alternate suitability.",
            "Part 91 MOS 8.07 and Table 8.08(1) are key locators for suitability and alternate minima.",
            "AIP ENR 1.1 sections 10.7.1 to 10.7.4 provide the operational alternate planning context.",
        ],
        "traps": [
            "Do not nominate an aerodrome that itself requires an alternate under the applicable conditions.",
            "Check NOTAM, forecast and lighting information before treating the alternate as available.",
            "Do not use destination minima or comfort margins where the MOS alternate minima table applies.",
        ],
        "examples": "TODO: Add alternate suitability examples after selecting aerodrome forecasts, NOTAM and instrument approach availability.",
        "exam_use": [
            "Use Part 91 MOS 8.07 and Table 8.08(1) for the suitability/minima decision.",
            "Use AIP ENR 1.1 section 10.7 to follow the operational alternate-planning sequence.",
        ],
    },
    "PIFR-041": {
        "why": "Holding requirements affect both dispatch legality and fuel capacity, and the exam can frame them as weather, traffic, advisory or procedure problems.",
        "notes": [
            "CASR 91.235 and 91.455 provide the alternate and fuel regulation hooks.",
            "Part 91 MOS 8.04(5) to 8.04(8) and 8.06(4) to 8.06(5) cover holding in alternate/weather contexts.",
            "Part 91 MOS 19.02 to 19.06 covers the fuel planning and in-flight fuel management consequences.",
            "AIP ENR 1.1 sections 10.7.2.3 to 10.7.2.9, 10.7.4.4 to 10.7.4.5 and 10.9.1 to 10.9.3 are the verified operational locators.",
        ],
        "traps": [
            "Do not treat INTER, TEMPO, lighting/PAL and traffic holding as the same trigger.",
            "Do not add multiple holding requirements cumulatively unless the source rule requires it.",
            "Do not plan holding without carrying the corresponding fuel required by the MOS fuel rules.",
        ],
        "examples": "TODO: Add holding fuel examples after selecting forecast change groups, aerodrome lighting status and route assumptions.",
        "exam_use": [
            "Use Part 91 MOS Division 8.2 for why holding is required.",
            "Use Part 91 MOS Chapter 19 and AIP ENR 1.1 section 10.9 for the fuel decision.",
        ],
    },
    "PIFR-042": {
        "why": "Minimum fuel calculation is both a legal requirement and an exam arithmetic workflow; each component must come from the permitted source, not memory.",
        "notes": [
            "CASR 91.455 is the regulation hook for fuel requirements.",
            "Part 91 MOS Chapter 19, especially sections 19.01 to 19.06 and Table 19.02(2), is the verified enforceable source for fuel planning and in-flight fuel management.",
            "AIP ENR 1.1 section 10.9 provides operational fuel planning and fuel-state procedure context.",
            "AIP ENR 1.1 section 10.9.1 identifies CASA AC 91-15 as guidance material, but the current official AC URL remains unverified in this repository and must stay as a source gap until directly checked.",
        ],
        "traps": [
            "Do not calculate fuel from a single trip-fuel number; identify taxi, trip, alternate, holding, fixed reserve and any other MOS-required components.",
            "Do not use an unverified AC 91-15 copy as the source of truth.",
            "Do not ignore in-flight replanning, continuation, minimum fuel and emergency fuel decision points.",
        ],
        "examples": "TODO: Add minimum-fuel calculations after verifying aircraft fuel burn assumptions, route timing, alternate/holding triggers and the official AC 91-15 source.",
        "exam_use": [
            "Use Part 91 MOS Chapter 19 first for the calculation framework.",
            "Use Table 19.02(2) for fixed reserve lookup.",
            "Use AIP ENR 1.1 section 10.9 for fuel-state terminology and operational procedures.",
        ],
    },
    "PIFR-043": {
        "why": "Proceed/no-proceed fuel decisions combine alternate requirements, holding fuel and actual usable fuel capacity, so a single missing component can make the flight non-compliant.",
        "notes": [
            "CASR 91.235 and 91.455 provide the alternate and fuel regulation hooks.",
            "Part 91 MOS sections 8.04 to 8.08 determine whether an alternate or holding is required and whether the nominated alternate is suitable.",
            "Part 91 MOS sections 19.03 to 19.06 determine usable fuel requirements, replanning, continuation, diversion and fuel-state decisions.",
            "AIP ENR 1.1 sections 10.7 and 10.9 provide the operational alternate and fuel planning locators.",
        ],
        "traps": [
            "Do not proceed just because destination weather is acceptable if another alternate trigger applies.",
            "Do not compare required fuel with total tank capacity; use usable fuel and aircraft-specific fuel information.",
            "Do not defer a known fuel shortfall to in-flight replanning unless the MOS conditions for replanning/continuation are met.",
        ],
        "examples": "TODO: Add proceed/no-proceed fuel examples after selecting aircraft fuel capacity, route, forecast and alternate assumptions.",
        "exam_use": [
            "Build the decision chain: alternate required, alternate suitable, holding required, required fuel calculated, usable fuel available.",
            "Use Part 91 MOS Division 8.2 and Chapter 19 as the primary exam lookup pair.",
        ],
    },
    "PIFR-004": {
        "why": "Mandatory IFR flight instruments are direct exam material and are also the baseline for deciding whether an IFR flight may proceed.",
        "notes": [
            "CASR 91.810 is the legal hook for required equipment.",
            "Part 91 MOS Chapter 26 contains the detailed IFR flight instrument requirements.",
            "Use the aeroplane provisions in Part 91 MOS 26.08 or rotorcraft provisions in 26.12 as applicable.",
            "The requirement is not just carriage; the equipment must meet the approval, visibility, accessibility and serviceability rules in the MOS.",
        ],
        "traps": [
            "Do not mix aeroplane and rotorcraft tables.",
            "Check serviceability and approval requirements, not just whether the instrument is installed.",
        ],
        "examples": "TODO: Add aircraft panel examples after selecting the aircraft type.",
        "exam_use": [
            "Start with CASR 91.810, then go to Part 91 MOS Chapter 26.",
            "Use 26.08 for aeroplanes and 26.12 for rotorcraft.",
        ],
    },
    "PIFR-005": {
        "why": "Lighting equipment questions often look operational, but the enforceable IFR equipment list sits in the Part 91 MOS.",
        "notes": [
            "Part 91 MOS Chapter 26 provides the mandatory lighting equipment rules.",
            "Division 26.7 and sections 26.21 to 26.24 are the key lighting locators.",
            "AIP lighting references provide operational context, but do not replace the MOS equipment requirement.",
        ],
        "traps": [
            "Do not answer an equipment-fit question from aerodrome lighting procedures.",
            "Check whether the question is asking about installed/serviceable aircraft lighting or aerodrome lighting.",
        ],
        "examples": "TODO: Add day/night IFR lighting examples.",
        "exam_use": [
            "Use Part 91 MOS Division 26.7 for the equipment list.",
            "Use AIP only when the question is operational rather than equipment-fit focused.",
        ],
    },
    "PIFR-006": {
        "why": "IFR communication equipment is tested because it drives whether the aircraft can comply with reporting, broadcast and listening-watch requirements.",
        "notes": [
            "Part 91 MOS Chapter 26 sections 26.18 and 26.19 are the key communication equipment references.",
            "The equipment must support required reporting, broadcast and listening-watch frequencies.",
            "The mapped AIP references provide operational frequency and communication context for the equipment rules.",
        ],
        "traps": [
            "Do not confuse radio carriage/serviceability with phraseology procedure.",
            "Check 121.5 MHz and required operational frequencies where the question asks about capability.",
        ],
        "examples": "TODO: Add communication-equipment serviceability scenarios.",
        "exam_use": [
            "Use Part 91 MOS 26.18 and 26.19 for the equipment answer.",
            "Use AIP/ERSA references for frequency and procedure context.",
        ],
    },
    "PIFR-007": {
        "why": "Navigation equipment requirements determine whether the aircraft can legally conduct the planned IFR route or procedure.",
        "notes": [
            "Part 91 MOS Chapter 26 contains mandatory IFR navigation equipment requirements.",
            "For aeroplanes, use Part 91 MOS 26.08(1) to 26.08(2).",
            "For rotorcraft, use Part 91 MOS 26.12(1) to 26.12(2).",
            "The mapped references include approved GNSS fitment and legacy equipment cases; do not infer equipment approval from capability alone.",
        ],
        "traps": [
            "Do not assume a portable or uncertified receiver satisfies an approved IFR navigation equipment requirement.",
            "Check the aircraft category before using the MOS equipment table.",
        ],
        "examples": "TODO: Add aircraft equipment-fit examples after selecting avionics examples.",
        "exam_use": [
            "Use Part 91 MOS Chapter 26 first.",
            "Cross-check GNSS-related equipment questions against AIP GEN 1.5 and the Part 91 MOS GNSS definitions.",
        ],
    },
    "PIFR-008": {
        "why": "AFM limitations can override a generic assumption about what the aircraft may do under IFR.",
        "notes": [
            "CASR 91.095 supports compliance with aircraft flight manual instructions.",
            "Part 91 MOS 26.02 and 26.04 support approval and serviceability of required equipment.",
            "Part 91 MOS 28.06 is relevant where MEL conditions, limitations or procedures apply.",
            "The objective requires extracting information from the aircraft flight manual, so aircraft-specific examples must come from AFM/POH source material.",
        ],
        "traps": [
            "Do not treat a general IFR rule as permission if the aircraft flight manual is more restrictive.",
            "Do not add aircraft-specific limitations without a cited AFM/POH source.",
        ],
        "examples": "TODO: Add AFM/POH limitation examples after selecting aircraft source material.",
        "exam_use": [
            "Use CASR 91.095 for the instruction-compliance hook.",
            "Use the AFM/POH limitation section for the aircraft-specific answer.",
        ],
    },
    "PIFR-044": {
        "why": "This is a MOS objective, but the current verified CASA/Airservices cache does not yet contain the ground radar safety precautions themselves.",
        "notes": [
            "The MOS objective remains in scope and traceable.",
            "Do not fill this from memory or commercial training material.",
            "The source gap is recorded in the cross-reference gap register until a current public CASA or Airservices source is verified.",
        ],
        "traps": [
            "Do not confuse airborne weather radar equipment carriage references with ground-operation safety precautions.",
            "Do not invent distance or exposure limits without a verified source.",
        ],
        "examples": "TODO: Add examples only after verifying an official source for radar ground safety precautions.",
        "exam_use": [
            "Treat this as a source-gap item for now.",
            "Use the MOS objective wording as the master scope until a verified public source is found.",
        ],
    },
    "PIFR-045": {
        "why": "The pre-flight altimeter accuracy check is a precise procedural item and is easy to answer quickly when the MOS section is located.",
        "notes": [
            "Part 91 MOS section 10.06 is the primary locator for accurate QNH and altimeter accuracy checks.",
            "AIP ENR 1.7 provides operational altimetry context.",
            "The mapped references also connect QNH source rules for instrument approaches where relevant.",
        ],
        "traps": [
            "Do not use forecast QNH where the rule requires an actual or accurate QNH source.",
            "Do not mix pre-flight altimeter check requirements with transition altitude/level procedures.",
        ],
        "examples": "TODO: Add altimeter accuracy check examples.",
        "exam_use": [
            "Go to Part 91 MOS 10.06 for the check requirement.",
            "Use AIP ENR 1.7 for broader altimetry procedure context.",
        ],
    },
    "PIFR-046": {
        "why": "Altimetry applies throughout the IFR flight, so exam questions may move between QNH, transition layer, cruising levels and instrument approach settings.",
        "notes": [
            "Part 91 MOS Chapter 10 contains the altimetry rules.",
            "AIP ENR 1.7 is the operational locator for altimeter setting procedures and cruising level context.",
            "Part 91 MOS 14.03 is relevant before passing the IAF because it identifies QNH sources for instrument approaches.",
        ],
        "traps": [
            "Do not answer an approach-QNH question from a cruise-level rule.",
            "Check whether the question is pre-flight, climb, cruise, descent, approach or missed approach.",
        ],
        "examples": "TODO: Add staged-flight altimetry examples.",
        "exam_use": [
            "Use Part 91 MOS Chapter 10 for legal rules.",
            "Use AIP ENR 1.7 for operational procedure lookup.",
            "Use Part 91 MOS 14.03 for instrument approach QNH source questions.",
        ],
    },
    "PIFR-047": {
        "why": "Transponder questions combine equipment operation, assigned codes, emergencies and readback/phraseology.",
        "notes": [
            "CASR 91.810 is the legal hook for required equipment.",
            "Part 91 MOS Division 26.16, especially sections 26.68 and 26.69, contains the transponder and surveillance equipment requirements and code tables.",
            "AIP ENR 1.6 provides ATS surveillance and transponder operating context.",
            "AIP GEN 3.4 section 6.17.6 provides standard SSR/ADS-B phraseology context.",
        ],
        "traps": [
            "Do not confuse conspicuity/transponder carriage with the code or mode ATC wants selected.",
            "Emergency codes and radio failure codes need exact lookup, not approximation.",
        ],
        "examples": "TODO: Add code-selection and phraseology examples.",
        "exam_use": [
            "Use Part 91 MOS 26.69 for transponder code tables.",
            "Use AIP ENR 1.6 and AIP GEN 3.4 for surveillance operational context and phraseology.",
        ],
    },
    "PIFR-048": {
        "why": "Airways clearance requirements determine whether an IFR flight can enter or operate in controlled airspace, and the exam often tests timing, readback and clearance validity details.",
        "notes": [
            "CASR 91.240, 91.255 and 91.257 provide the regulation hooks for flight notification and controlled-airspace operation.",
            "Part 91 MOS 9.02 to 9.03 cover IFR flight-plan submission and changes.",
            "Part 91 MOS 11.12 to 11.13 and 21.05 cover controlled-airspace clearances and prescribed reports.",
            "AIP ENR 1.1, AIP ENR 1.10 and AIP GEN 3.4 provide the operational locators for clearance issue, expiry, PDC timing and readback.",
        ],
        "traps": [
            "Do not use the older phrase `clearance void time` without checking the current AIP wording; the verified source notes flag `clearance expiry time`.",
            "Do not treat flight-plan submission as the same thing as receiving an airways clearance.",
            "Readback requirements are not optional when the AIP/MOS requires them.",
        ],
        "examples": "TODO: Add clearance request and readback examples after selecting exact route/airspace scenarios.",
        "exam_use": [
            "Use Part 91 MOS 9.02 to 9.03 for flight-plan submission and amendment requirements.",
            "Use AIP ENR 1.1 section 2.2 and AIP GEN 3.4 section 5 for clearance/readback details.",
        ],
    },
    "PIFR-049": {
        "why": "CTA and CTR entry/departure questions test what information must be given to ATC and what clearance details the pilot must expect, read back and comply with.",
        "notes": [
            "CASR 91.255 and 91.257 are the regulation hooks for controlled-airspace operation and ATC clearance compliance.",
            "Part 91 MOS 11.12 to 11.13 and 21.05 are the primary MOS locators.",
            "AIP ENR 1.1 sections 2.2.1, 2.2.6 to 2.2.7 and 2.3 to 2.6 provide controlled-airspace operating context.",
            "AIP GEN 3.4 sections 5.4 to 5.7 provide radio communication and readback procedure context.",
        ],
        "traps": [
            "Do not enter CTA or CTR on expectation; identify the clearance or entry communication rule that applies.",
            "Do not omit POB advice where required for non-air-transport IFR flights.",
            "Do not ignore route, level or frequency details embedded in the clearance.",
        ],
        "examples": "TODO: Add CTA/CTR entry and departure call examples after selecting controlled-aerodrome and en route scenarios.",
        "exam_use": [
            "Use AIP ENR 1.1 section 2 for controlled-airspace procedures.",
            "Use AIP GEN 3.4 section 5 for the communication and readback layer.",
        ],
    },
    "PIFR-050": {
        "why": "The MOS lists controlled area protection as an objective, but the exact current public-source definition has not yet been verified.",
        "notes": [
            "The verified AIP material supports an operational 500 ft buffer above the lower limit of CTA during specified visual departure and visual approach/descent contexts.",
            "AIP ENR 1.1 section 2.5.3.3 and AIP ENR 1.5 sections 1.15 to 1.16 are the current partial locators.",
            "The exact term `controlled area protection` remains a source gap until a current public CASA or Airservices definition is verified.",
        ],
        "traps": [
            "Do not invent a definition from training memory.",
            "Do not expand the concept beyond the verified AIP operational references.",
            "Treat this as partial support, not a fully mapped definition.",
        ],
        "examples": "TODO: Add examples only after verifying a current official definition of controlled area protection.",
        "exam_use": [
            "Use the verified AIP references for the current operational 500 ft CTA buffer context.",
            "Check the source-gap register before adding any broader explanatory definition.",
        ],
    },
    "PIFR-051": {
        "why": "Level changes in CTA are clearance-controlled, and emergency deviations have specific reporting and transponder implications.",
        "notes": [
            "CASR 91.257 is the regulation hook for complying with ATC clearances and instructions.",
            "Part 91 MOS 11.06, 11.12 and Table 21.05(1) items 8 to 9 are the key MOS locators.",
            "AIP ENR 1.1 sections 2.2.2 to 2.2.5 and AIP ENR 1.7 section 4.1 provide level-change and altimetry context.",
            "AIP GEN 3.4 sections 5.4 and 5.7 provide communication and readback context.",
        ],
        "traps": [
            "Do not change level in CTA without clearance unless an emergency/safety rule applies.",
            "If unable to comply, advise ATC immediately rather than silently deviating.",
            "ACAS RA and emergency action may override ATC instructions, but the pilot must follow the required reporting actions.",
        ],
        "examples": "TODO: Add CTA level-change and emergency-deviation examples after selecting airspace and clearance scenarios.",
        "exam_use": [
            "Use CASR 91.257 and Part 91 MOS 11.12 for clearance compliance.",
            "Use Part 91 MOS Table 21.05(1) for leaving/reaching level reports.",
        ],
    },
    "PIFR-052": {
        "why": "CTA/CTR flight-profile questions combine several smaller rules across departure, climb, cruise, level change, descent and visual approach.",
        "notes": [
            "CASR 91.255, 91.257, 91.287 and 91.305 provide the regulation hooks for controlled airspace, navigation and minimum height.",
            "Part 91 MOS 11.12 to 11.13, 14.02, 21.05 and 21.06 provide the MOS operating and reporting framework.",
            "AIP ENR 1.1 sections 2.2 to 2.6 and AIP ENR 1.5 sections 1.15 to 1.16, 8.2 and 10.2 are the main operational locators.",
            "AIP ENR 1.7 section 4.1 and AIP GEN 3.4 sections 5.4 to 5.7 support level and communication procedure lookup.",
        ],
        "traps": [
            "Do not apply a departure rule to descent or visual approach without checking the flight phase.",
            "Do not ignore day/night differences where visual departure or visual approach is involved.",
            "Do not let a SID/STAR or ATC level/speed instruction conflict go unresolved; use the current AIP/MOS procedure.",
        ],
        "examples": "TODO: Add staged CTA/CTR flight-profile examples after selecting a controlled aerodrome and route.",
        "exam_use": [
            "Break the question into phase of flight first.",
            "Use AIP ENR 1.1 section 2 for controlled-airspace operation and AIP GEN 3.4 section 5 for the radio layer.",
        ],
    },
    "PIFR-053": {
        "why": "Separation provision changes by airspace class, so the exam answer depends on identifying both flight rules and class of CTA.",
        "notes": [
            "CASR 91.255 and 91.257 provide the controlled-airspace operation and clearance compliance hooks.",
            "Part 91 MOS 11.15 to 11.17 and 21.05 are the key MOS locators for ATC service and reporting context.",
            "AIP ENR 1.4 sections 1.1 and 2.1 to 2.4 identify the controlled airspace classes and service provision.",
            "AIP ENR 1.1 sections 2.6.3, 2.8 and 2.9 support separation, pilot-assigned separation and VFR effects on separation responsibility.",
        ],
        "traps": [
            "Do not assume IFR is separated from every VFR flight in every class.",
            "Do not ignore VFR climb/descent or VFR-on-top effects where the AIP changes responsibility.",
            "Class D has its own service pattern and should not be answered from Class C assumptions.",
        ],
        "examples": "TODO: Add airspace-class separation examples after selecting class A/C/D/E scenarios.",
        "exam_use": [
            "Use AIP ENR 1.4 first to identify service provision by class.",
            "Use AIP ENR 1.1 section 2 for special separation and traffic-information cases.",
        ],
    },
    "PIFR-054": {
        "why": "Class D is a frequent exam trap because IFR separation and VFR traffic information are not the same service.",
        "notes": [
            "CASR 91.255 and 91.257 provide the controlled-airspace regulation context.",
            "Part 91 MOS 11.15 to 11.17 and 21.05 support the ATC service and reporting framework.",
            "AIP ENR 1.4 sections 2.1.3 and 2.2 identify Class D service provision.",
            "AIP ENR 1.1 sections 2.2.7, 2.6.2 to 2.6.3 and 2.8 support Class D operational detail.",
        ],
        "traps": [
            "Do not state that IFR receives separation from all VFR flights in Class D.",
            "Separate `separation` from `traffic information` in the answer.",
            "Check whether a planned IFR flight is operating under VFR departure or VFR climb/descent provisions.",
        ],
        "examples": "TODO: Add Class D separation and traffic-information examples after selecting a Class D aerodrome scenario.",
        "exam_use": [
            "Go to AIP ENR 1.4 section 2 for the class-service table.",
            "Use AIP ENR 1.1 section 2.6 for Class D operating detail.",
        ],
    },
    "PIFR-055": {
        "why": "Radio procedures in CTA/CTR are examined through clearance, readback, call sign, frequency-change, traffic-information and report requirements.",
        "notes": [
            "CASR 91.255, 91.257 and 91.810 provide the controlled-airspace, clearance and equipment hooks.",
            "Part 91 MOS 11.12 to 11.18, 21.05 and 26.18 to 26.19 are the MOS locators for clearances, reports and radio equipment capability.",
            "AIP GEN 3.4 sections 4.1, 5.1 to 5.7, 5.19, 6.8, 6.11 and 6.12 provide radiotelephony, readback and phraseology context.",
            "AIP ENR 1.1 sections 2.2.6 to 2.2.9, 2.3 to 2.7 and 2.10.3 support controlled-airspace radio procedure context.",
        ],
        "traps": [
            "Do not paraphrase mandatory readbacks where exact readback is required.",
            "Do not change frequency until authorised or required by the applicable procedure.",
            "Do not omit amended clearance or recleared route/level readback requirements.",
        ],
        "examples": "TODO: Add CTA/CTR radio call examples after selecting route, clearance and frequency-change scenarios.",
        "exam_use": [
            "Use AIP GEN 3.4 section 5 for radio procedure and readback.",
            "Use AIP ENR 1.1 section 2 for the controlled-airspace operating context.",
        ],
    },
    "PIFR-056": {
        "why": "Radio failure in CTA/CTR is a high-risk procedural memory item, but the exam answer should still be located from the AIP/MOS sequence.",
        "notes": [
            "CASR 91.257 and 91.810 provide the clearance compliance and equipment regulation hooks.",
            "Part 91 MOS 11.10, 11.18 and Table 26.69(7A) are the MOS locators for radio failure and transponder code context.",
            "AIP ENR 1.1 section 6.2 is the main radio-failure procedure locator.",
            "AIP ENR 1.6 sections 6.2 and 6.4.3 to 6.4.4 and AIP GEN 3.4 section 6.17.6 support surveillance, 7600 and IDENT handling.",
        ],
        "traps": [
            "Do not use the VMC option when the question states IMC conditions.",
            "Do not skip the squawk 7600 and broadcast/assumed-broadcast steps.",
            "Do not treat receive-only instructions as normal two-way communications.",
        ],
        "examples": "TODO: Add CTA/CTR radio-failure scenarios after selecting VMC/IMC, clearance and vectoring contexts.",
        "exam_use": [
            "Go directly to AIP ENR 1.1 section 6.2 for the procedural sequence.",
            "Use Part 91 MOS Table 26.69(7A) for the transponder code lookup.",
        ],
    },
    "PIFR-057": {
        "why": "Abnormal and emergency operations in CTA/CTR require quick identification of the correct safety deviation, communication, fuel or transponder action.",
        "notes": [
            "CASR 91.257, 91.455 and 91.810 provide the clearance, fuel and equipment regulation hooks.",
            "Part 91 MOS 11.06, 11.10, 19.05 to 19.06, Table 21.05(1) item 9 and Table 26.69(7A) are the key MOS locators.",
            "AIP ENR 1.1 sections 2.2.2 to 2.2.4, 8.4 to 8.7 and 10.9.2 to 10.9.3 cover clearance deviation, emergency communications and fuel-state procedures.",
            "AIP ENR 1.6 section 6 and AIP GEN 3.4 sections 5.4, 6.8 and 6.17.6 support surveillance/emergency code and phraseology lookup.",
        ],
        "traps": [
            "Do not delay an immediate safety action while waiting for a clearance, but follow the required ATC advice afterward.",
            "Do not confuse minimum fuel with emergency fuel.",
            "Use the correct transponder code for unlawful interference, radio failure or emergency rather than a generic emergency answer.",
        ],
        "examples": "TODO: Add CTA/CTR abnormal and emergency scenarios after selecting fuel-state, ACAS, radio and transponder cases.",
        "exam_use": [
            "Use Part 91 MOS 11.06 and AIP ENR 1.1 section 8 for emergency/urgency actions.",
            "Use AIP ENR 1.1 section 10.9 for fuel-state declarations.",
            "Use Part 91 MOS Table 26.69(7A) for transponder codes.",
        ],
    },
    "PIFR-058": {
        "why": "ATS surveillance services are central to controlled IFR operations, but the exam may use older `radar` wording while the current AIP uses broader surveillance terminology.",
        "notes": [
            "AIP ENR 1.6 is the primary verified locator for ATS surveillance services.",
            "AIP ENR 1.4 sections 2.1 to 2.4 provide airspace service context.",
            "AIP GEN 3.4 sections 6.8 and 6.17 support surveillance-related communications and phraseology.",
            "The verified source status covers identification, vectoring, position information, traffic information, avoiding action where available, speed control, separation context and emergency assistance.",
        ],
        "traps": [
            "Do not assume a surveillance service is available everywhere.",
            "Do not use `radar` wording to ignore ADS-B/SSR surveillance context in the current AIP.",
            "Separate surveillance identification, vectoring, traffic information and separation services.",
        ],
        "examples": "TODO: Add ATS surveillance service examples after selecting controlled airspace and surveillance-coverage scenarios.",
        "exam_use": [
            "Use AIP ENR 1.6 as the main lookup for surveillance services.",
            "Use AIP ENR 1.4 to cross-check service provision by airspace class.",
        ],
    },
    "PIFR-059": {
        "why": "Radar/vectoring questions require exact compliance and readback because the aircraft may be off a published route while ATC provides surveillance guidance.",
        "notes": [
            "CASR 91.257 provides the clearance/instruction compliance hook.",
            "Part 91 MOS 11.12 and Table 21.05(1) items 8 to 9 provide the MOS clearance and level-report context.",
            "AIP ENR 1.6 sections 1 to 3 and 6.2 are the primary vectoring and surveillance procedure locators.",
            "AIP GEN 3.4 sections 5.4, 6.8, 6.11, 6.12 and 6.17 support readback and phraseology.",
        ],
        "traps": [
            "Do not assume terrain clearance responsibility is unchanged during every vectoring situation; check the AIP vectoring context.",
            "Do not ignore heading/vector instructions because they take the aircraft off planned track.",
            "Read back headings, levels and other required instructions exactly where required.",
        ],
        "examples": "TODO: Add radar-vectoring phraseology examples after selecting approach/vectoring scenarios.",
        "exam_use": [
            "Use AIP ENR 1.6 sections 1 to 3 for vectoring procedure.",
            "Use AIP GEN 3.4 for phraseology and readback.",
        ],
    },
    "PIFR-060": {
        "why": "ATC transmission interval during vectoring is a precise AIP value and should be treated as a direct lookup item.",
        "notes": [
            "AIP ENR 1.6 section 3.8 is the verified source for transmission intervals during vectoring.",
            "The verified source status identifies a maximum interval of 30 seconds when aircraft are on headings that could infringe terrain clearance or separation standards.",
            "This objective currently has AIP-only support in the reference map, so do not add extra MOS or regulation references without verification.",
        ],
        "traps": [
            "Do not apply the 30-second interval to every ATC transmission context; it is tied to the vectoring condition in AIP ENR 1.6.",
            "Do not invent a different timing value from memory.",
            "Check whether the question is about vectoring specifically or general radio communication.",
        ],
        "examples": "TODO: Add vectoring interval examples after selecting surveillance-vectoring scenarios.",
        "exam_use": [
            "Go directly to AIP ENR 1.6 section 3.8.",
            "Confirm whether the vector heading could infringe terrain clearance or separation standards.",
        ],
    },
    "PIFR-061": {
        "why": "Surveillance emergency procedures combine radio failure, surveillance failure, emergency codes and aircraft emergency assistance.",
        "notes": [
            "CASR 91.257 and 91.810 provide the clearance/instruction and equipment hooks.",
            "Part 91 MOS 11.06, 11.10 and Table 26.69(7A) are the MOS locators for emergency deviation, radio failure and transponder codes.",
            "AIP ENR 1.6 section 6 is the primary surveillance emergency locator.",
            "AIP ENR 1.1 sections 2.2.4 and 6.2 and AIP GEN 3.4 section 6.17.6 support radio-failure and IDENT/SSR phraseology context.",
        ],
        "traps": [
            "Do not use the normal vectoring procedure after surveillance identification or system service is lost without checking ATC instructions.",
            "Do not confuse 7500, 7600 and 7700.",
            "Do not treat receive-only or IDENT acknowledgment as restored two-way communication.",
        ],
        "examples": "TODO: Add surveillance emergency examples after selecting radio failure, surveillance failure and aircraft emergency cases.",
        "exam_use": [
            "Use AIP ENR 1.6 section 6 for surveillance emergency procedure.",
            "Use Part 91 MOS Table 26.69(7A) for emergency transponder codes.",
        ],
    },
    "PIFR-062": {
        "why": "Class G and non-controlled aerodrome IFR procedures rely heavily on broadcast, report, see-and-avoid and SARWATCH logic rather than ATC clearances.",
        "notes": [
            "CASR 91.325, 91.370, 91.385, 91.390, 91.395, 91.400, 91.410 and 91.630 provide the operating-rule context.",
            "Part 91 MOS 21.03 to 21.04, 21.06 and 21.09 are the MOS locators for Class G/non-controlled aerodrome reporting and broadcasts.",
            "AIP ENR 1.1 sections 9.1 to 9.17 and 10.1 to 10.3 are the main operational locators.",
            "AIP ENR 1.4 section 3.1 provides Class G service context.",
        ],
        "traps": [
            "Do not apply controlled-aerodrome clearance logic to a non-controlled aerodrome.",
            "Do not omit taxi, departure, level-change, frequency-change, CTAF and arrival reports where required.",
            "See-and-avoid and runway separation responsibilities remain important even for IFR aircraft.",
        ],
        "examples": "TODO: Add Class G/non-controlled flight-profile examples after selecting a sample aerodrome and route.",
        "exam_use": [
            "Use AIP ENR 1.1 section 9 for non-controlled aerodrome procedures.",
            "Use Part 91 MOS 21.06 for IFR Class G prescribed reports.",
        ],
    },
    "PIFR-063": {
        "why": "Visual approach and arrival at non-controlled aerodromes combine landing manoeuvres, SARWATCH cancellation and PAL/night lighting decisions.",
        "notes": [
            "CASR 91.325, 91.385, 91.390, 91.395, 91.400, 91.410 and 91.630 provide the operating-rule context.",
            "Part 91 MOS 8.06, 21.04, Table 21.06(1) item 10 and 21.09 are the MOS locators for alternate, reporting and broadcast context.",
            "AIP ENR 1.1 sections 9.11 to 9.16, 10.2 and 10.7.4.3 to 10.8.1 provide visual arrival, SARWATCH and lighting context.",
            "AIP GEN 3.4 section 6.5 supports PAL communications context.",
        ],
        "traps": [
            "Do not cancel SARWATCH too early; check the AIP cancellation timing and method.",
            "Do not assume PAL availability or serviceability without checking the relevant information.",
            "Do not treat straight-in, base join and circuit procedures as interchangeable.",
        ],
        "examples": "TODO: Add non-controlled visual approach examples after selecting aerodrome, daylight/night and SARWATCH assumptions.",
        "exam_use": [
            "Use AIP ENR 1.1 sections 9.11 to 9.16 for landing manoeuvres.",
            "Use AIP ENR 1.1 section 10 for SARWATCH and PAL/night lighting context.",
        ],
    },
    "PIFR-064": {
        "why": "Class G and non-controlled aerodrome radio procedures are exam-heavy because the pilot must select frequencies, broadcast at the right times and use standard formats without ATC prompting.",
        "notes": [
            "CASR 91.400, 91.630 and 91.810 provide the broadcast, radio and equipment regulation context.",
            "Part 91 MOS 21.03 to 21.04, 21.06, 21.09 and 26.18 to 26.19 are the MOS locators for radio reports and equipment.",
            "AIP ENR 1.1 sections 9.1, 9.5 to 9.17, 10.2 to 10.3 and 12.1 to 12.3 provide Class G, non-controlled aerodrome and mandatory broadcast area context.",
            "AIP GEN 3.4 sections 5.1 to 5.7 and 6.5 provide radio procedure, standard format and PAL communication context.",
        ],
        "traps": [
            "Do not use Area VHF when CTAF is required for the aerodrome stage, or vice versa.",
            "Do not omit mandatory broadcast area requirements.",
            "Use standard broadcast format rather than informal position calls.",
        ],
        "examples": "TODO: Add Class G and CTAF broadcast examples after selecting route, aerodrome and frequency-change scenarios.",
        "exam_use": [
            "Use AIP ENR 1.1 section 9 for non-controlled aerodrome broadcasts.",
            "Use AIP ENR 1.1 section 12 for mandatory broadcast areas.",
            "Use AIP GEN 3.4 section 5 for standard radiotelephony format.",
        ],
    },
    "PIFR-065": {
        "why": "Radio failure in Class G/non-controlled contexts changes the risk picture because there is no normal ATC clearance service at the aerodrome.",
        "notes": [
            "CASR 91.400, 91.630 and 91.810 provide broadcast, radio and equipment context.",
            "Part 91 MOS 11.10, 21.04, 21.06, 26.18 to 26.19 and Table 26.69(7A) are the MOS locators for radio failure, reports, equipment and transponder code.",
            "AIP ENR 1.1 sections 6.2 and 9.2.7 provide radio-failure and non-controlled aerodrome context.",
            "AIP ENR 1.6 sections 6.2 and 6.4.3 to 6.4.4 support surveillance/radio-failure and SSR handling.",
        ],
        "traps": [
            "Do not assume non-controlled aerodrome arrival is permitted without checking the no-radio/inoperative-radio limitations.",
            "Do not forget 7600 and continued transponder operation where applicable.",
            "Do not use CTA/CTR clearance-loss logic where the AIP provides a Class G/non-controlled procedure.",
        ],
        "examples": "TODO: Add Class G/non-controlled radio-failure examples after selecting VMC/IMC and aerodrome scenarios.",
        "exam_use": [
            "Use AIP ENR 1.1 section 6.2 for general radio-failure procedure.",
            "Use AIP ENR 1.1 section 9.2.7 for non-controlled aerodrome no-radio context.",
        ],
    },
    "PIFR-066": {
        "why": "Abnormal and emergency operations in Class G/non-controlled aerodrome contexts require the pilot to combine see-and-avoid, broadcasts, fuel declarations, radio failure and emergency code procedures.",
        "notes": [
            "CASR 91.325, 91.330, 91.370, 91.400, 91.455, 91.630 and 91.810 provide the operating, fuel and equipment regulation hooks.",
            "Part 91 MOS 11.06, 11.10, 19.05 to 19.06, 21.04, 21.06, 21.09 and Table 26.69(7A) are the MOS locators.",
            "AIP ENR 1.1 sections 6.2, 9.1 to 9.17, 10.9.2 to 10.9.3 and 10.10.8 provide operational radio failure, aerodrome, fuel and laser-illumination context.",
            "AIP ENR 1.6 section 6 and AIP GEN 3.4 sections 6.8 and 6.17.6 support surveillance emergency and phraseology lookup.",
        ],
        "traps": [
            "Do not assume ATC will resolve traffic conflicts at a non-controlled aerodrome.",
            "Do not confuse minimum fuel, emergency fuel and other urgency/emergency broadcasts.",
            "Do not omit explicit collision-avoidance broadcasts where the AIP requires them.",
        ],
        "examples": "TODO: Add Class G/non-controlled abnormal and emergency scenarios after selecting traffic, fuel, radio and aerodrome assumptions.",
        "exam_use": [
            "Use AIP ENR 1.1 section 9 for non-controlled aerodrome procedures.",
            "Use AIP ENR 1.1 section 10.9 for fuel-state declarations.",
            "Use Part 91 MOS Table 26.69(7A) for transponder emergency codes.",
        ],
    },
    "PIFR-070": {
        "why": "VOR indications are high-value exam material, but the current verified sources support only operational use and deviation reporting, not the detailed cockpit indication theory.",
        "notes": [
            "Part 91 MOS 1.07 defines VOR, DME and navigational tolerance; sections 14.02, 14.04 and 14.05 support IFR navigation and GNSS/DME distance reporting context.",
            "AIP ENR 1.1 sections 4.4 to 4.6 and 6.3 are the verified AIP locators for track keeping, position fixing, deviation reporting and related procedures.",
            "Specific cockpit indications for scalloping, VOR station passage, abeam position, radial identification, track error and drift remain a source gap.",
        ],
        "traps": [
            "Do not fill VOR cockpit indication theory from unsupported memory.",
            "Do not treat operational deviation reporting as a complete explanation of VOR instrument indications.",
            "Keep VOR technique notes separate from official CASA/Airservices references until an official technique source is verified.",
        ],
        "examples": "TODO: Add VOR indication examples only after verifying a public official technique source.",
        "exam_use": [
            "Use AIP ENR 1.1 sections 4.4 to 4.6 for operational track keeping and position-fixing rules.",
            "Use the source-gap register before adding detailed VOR indication theory.",
        ],
    },
    "PIFR-071": {
        "why": "Off-track distance from VOR/DME indications is explicitly examinable, but the verified references currently support the operational context rather than the calculation method.",
        "notes": [
            "Part 91 MOS 1.07 defines VOR, DME and navigational tolerance; sections 14.02 and 14.05 support navigation and distance-reporting context.",
            "AIP ENR 1.1 sections 4.4 to 4.6 and 6.3 provide verified locators for track keeping, position fixing, VOR/DME deviation thresholds and DME/GNSS distance reporting.",
            "The mathematical off-track distance method from cockpit indications remains a source gap until a public official technique source is verified.",
        ],
        "traps": [
            "Do not invent a formula or worked result without an approved source.",
            "Do not confuse deviation-reporting thresholds with off-track distance calculation technique.",
            "Do not assume DME distance equals cross-track error.",
        ],
        "examples": "TODO: Add off-track distance calculations only after verifying a public official technique source.",
        "exam_use": [
            "Use AIP ENR 1.1 section 4 for operational tolerance and deviation context.",
            "Treat calculation technique as a source-gap item until verified.",
        ],
    },
    "PIFR-072": {
        "why": "OBS command indications are practical VOR technique material, but the current verified sources do not explain the to/from setting method.",
        "notes": [
            "Part 91 MOS 1.07 defines VOR and navigational tolerance; sections 14.02 and 14.05 provide operational navigation context.",
            "AIP ENR 1.1 sections 4.4 to 4.6 verify VOR track guidance, precision order and CDI deviation thresholds.",
            "OBS settings required for command indications to and from a VOR remain a source gap.",
        ],
        "traps": [
            "Do not add OBS setting rules from memory.",
            "Do not conflate VOR operational legality with cockpit technique.",
            "Do not merge this objective with intercept-heading objectives; the MOS keeps them separate.",
        ],
        "examples": "TODO: Add OBS command-indication examples only after verifying a public official technique source.",
        "exam_use": [
            "Use mapped AIP/MOS references for VOR operational use.",
            "Use the source-gap register for OBS technique before adding examples.",
        ],
    },
    "PIFR-073": {
        "why": "VOR intercept heading calculation is exam-relevant, but the current verified public sources only support the requirement to regain track and the use of VOR as a navigation aid.",
        "notes": [
            "Part 91 MOS 1.07 defines VOR and navigational tolerance; sections 14.02 and 14.05 support operational navigation context.",
            "AIP ENR 1.1 sections 4.4 to 4.6 provide verified track-keeping and positive-action-to-regain-track context.",
            "The heading-to-steer and intercept calculation method remains a source gap until a public official technique source is verified.",
        ],
        "traps": [
            "Do not invent intercept arithmetic or rules of thumb.",
            "Do not treat `positive action to regain track` as a worked intercept method.",
            "Keep calculations out of official-reference sections unless sourced.",
        ],
        "examples": "TODO: Add VOR intercept-heading calculations only after verifying a public official technique source.",
        "exam_use": [
            "Use AIP ENR 1.1 section 4 for the operational duty to maintain/regain track.",
            "Treat the specific intercept arithmetic as unresolved source material.",
        ],
    },
    "PIFR-074": {
        "why": "Two-VOR position fixing connects the official positive-fix rule with cockpit plotting technique; only the positive-fix rule is currently verified.",
        "notes": [
            "Part 91 MOS 1.07 defines VOR and navigational tolerance; sections 14.02 and 14.05 support IFR navigation context.",
            "AIP ENR 1.1 section 4.5 verifies that a positive fix may be determined by intersecting two or more position lines from VOR, localiser, NDB or DME in combination.",
            "The cockpit-indication plotting method using two VORs remains a source gap.",
        ],
        "traps": [
            "Do not confuse the legal positive-fix allowance with an explained plotting method.",
            "Do not assume any two indications are valid without rated coverage and usable geometry.",
            "Do not create chart examples without exact chart/source inputs.",
        ],
        "examples": "TODO: Add two-VOR fixing examples only after selecting chart data and verifying technique source material.",
        "exam_use": [
            "Use AIP ENR 1.1 section 4.5 for positive-fix authority.",
            "Use Part 91 MOS 14.02 for IFR navigation method requirements.",
        ],
    },
    "PIFR-075": {
        "why": "Mixed VOR/NDB/DME fixing is operationally important because positive fixes can use multiple position-line types, but cockpit construction details still need a verified technique source.",
        "notes": [
            "Part 91 MOS 1.07 defines ADF, DME, NDB, VOR and navigational tolerance; sections 14.02 and 14.05 support operational navigation context.",
            "AIP ENR 1.1 section 4.5 supports positive fixes from NDB, VOR, localiser or DME position lines in combination, including NDB range limits for NDB-only fixes.",
            "Detailed cockpit-indication fixing methods remain a source gap.",
        ],
        "traps": [
            "Do not ignore NDB-only positive-fix limits.",
            "Do not assume every aid combination gives a reliable fix; check geometry, rated coverage and source limitations.",
            "Do not fill plotting examples without a verified technique source.",
        ],
        "examples": "TODO: Add mixed-aid fixing examples after verifying technique source material and selecting exact aid/chart inputs.",
        "exam_use": [
            "Use AIP ENR 1.1 section 4.5 for positive-fix combinations.",
            "Use Part 91 MOS 14.02 for route navigation requirements.",
        ],
    },
    "PIFR-076": {
        "why": "NDB range and indication errors are listed by the MOS, but current verified sources only cover NDB operational use, tracking precision and position-line use.",
        "notes": [
            "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.",
            "AIP ENR 1.1 sections 4.4 to 4.6 verify NDB as a navigation aid, NDB tracking precision and NDB position-line use.",
            "Coastal refraction, night error, thunderstorms, mountainous areas, terrain effects and altitude effects remain a source gap.",
        ],
        "traps": [
            "Do not add NDB propagation-error explanations from unsupported memory.",
            "Do not treat NDB tracking precision as a description of all NDB errors.",
            "Keep error theory clearly separated from verified operational references.",
        ],
        "examples": "TODO: Add NDB error/range examples only after verifying a public official technique source.",
        "exam_use": [
            "Use mapped MOS/AIP references for NDB operational use and tolerance.",
            "Use the source-gap register before adding NDB propagation or range theory.",
        ],
    },
    "PIFR-077": {
        "why": "Choosing the appropriate NDB for tracking is an operational decision, but the verified sources only provide aid hierarchy, NDB identity and positive-fix limits.",
        "notes": [
            "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 support IFR navigation use.",
            "AIP ENR 1.1 sections 4.4 to 4.6 verify that NDB sits below localiser, GNSS and VOR in track-guidance precision and is subject to NDB position-line limitations.",
            "The method for selecting the most appropriate NDB for tracking remains a source gap.",
        ],
        "traps": [
            "Do not assume an NDB is the best source merely because it is available.",
            "Do not ignore the more precise track-guidance hierarchy.",
            "Do not add NDB selection heuristics without a verified source.",
        ],
        "examples": "TODO: Add NDB selection examples only after verifying a public official technique source and selecting route/aids.",
        "exam_use": [
            "Use AIP ENR 1.1 section 4.4.3 for track-guidance precision order.",
            "Use AIP ENR 1.1 section 4.5 for NDB positive-fix limits.",
        ],
    },
    "PIFR-078": {
        "why": "ADF relative-bearing interpretation is examinable cockpit technique, but current verified references only support NDB operational use and positive fixing.",
        "notes": [
            "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational navigation context.",
            "AIP ENR 1.1 sections 4.4 to 4.6 verify NDB tracking, NDB deviation thresholds and positive fixing by NDB passage or position lines.",
            "Determining station passage, abeam position, bearing, track error and drift from ADF relative bearing remains a source gap.",
        ],
        "traps": [
            "Do not add relative-bearing interpretation rules without a verified source.",
            "Do not treat NDB station passage as equivalent to every ADF indication change.",
            "Do not merge this objective with NDB intercept or track-calculation objectives.",
        ],
        "examples": "TODO: Add ADF relative-bearing interpretation examples only after verifying a public official technique source.",
        "exam_use": [
            "Use mapped references for operational NDB use and position fixing.",
            "Treat cockpit relative-bearing interpretation as unresolved source material.",
        ],
    },
    "PIFR-079": {
        "why": "Track calculation from heading and relative bearing is a specific ADF arithmetic task; the current verified sources do not supply the calculation method.",
        "notes": [
            "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.",
            "AIP ENR 1.1 sections 4.4 to 4.6 verify NDB track guidance and NDB-based position lines.",
            "Calculating track to or from an NDB from heading and relative bearing remains a source gap.",
        ],
        "traps": [
            "Do not invent bearing arithmetic examples without a verified source.",
            "Do not confuse aircraft heading, relative bearing, magnetic bearing and track in unsupported notes.",
            "Keep arithmetic examples out until the source strategy is settled.",
        ],
        "examples": "TODO: Add NDB track calculations only after verifying a public official technique source.",
        "exam_use": [
            "Use mapped references for NDB operational context.",
            "Use the source-gap register before adding ADF bearing arithmetic.",
        ],
    },
    "PIFR-080": {
        "why": "NDB intercept heading calculation is a cockpit technique objective; verified sources currently support the operational duty to regain track and the use of NDB as a permitted aid.",
        "notes": [
            "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 support operational navigation context.",
            "AIP ENR 1.1 sections 4.4 to 4.6 provide verified track-keeping and NDB operational context.",
            "Heading-to-steer and NDB intercept calculation method remains a source gap.",
        ],
        "traps": [
            "Do not add intercept-angle rules from memory.",
            "Do not imply NDB intercept technique is covered by general track-keeping text.",
            "Do not reuse VOR technique as if it directly applies to ADF/NDB without a source.",
        ],
        "examples": "TODO: Add NDB intercept-heading examples only after verifying a public official technique source.",
        "exam_use": [
            "Use AIP ENR 1.1 section 4 for operational track-keeping context.",
            "Treat NDB intercept arithmetic as a source-gap item.",
        ],
    },
    "PIFR-081": {
        "why": "Intercepting the desired inbound track before reaching an NDB is a specific technique task that is not explained in the verified operational references.",
        "notes": [
            "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.",
            "AIP ENR 1.1 sections 4.4 to 4.6 verify NDB track guidance, positive fixing and deviation reporting context.",
            "Intercept-heading calculation before reaching the NDB remains a source gap.",
        ],
        "traps": [
            "Do not add timing or intercept methods without a verified source.",
            "Do not treat this as the same objective as general NDB tracking.",
            "Do not create worked examples until exact technique source and route assumptions are selected.",
        ],
        "examples": "TODO: Add inbound NDB intercept examples only after verifying a public official technique source.",
        "exam_use": [
            "Use mapped references for operational NDB use.",
            "Use the source-gap register before adding intercept-heading calculations.",
        ],
    },
    "PIFR-082": {
        "why": "Relative bearing at NDB track interception is a calculation objective, but the verified references only cover NDB guidance and deviation threshold context.",
        "notes": [
            "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.",
            "AIP ENR 1.1 sections 4.4 to 4.6 verify NDB track guidance and the NDB navigational/deviation threshold context.",
            "The relative-bearing calculation that indicates desired NDB track interception remains a source gap.",
        ],
        "traps": [
            "Do not add relative-bearing formulas from unsupported memory.",
            "Do not confuse deviation threshold with an interception indication.",
            "Do not merge this with the inbound intercept-heading objective.",
        ],
        "examples": "TODO: Add relative-bearing interception calculations only after verifying a public official technique source.",
        "exam_use": [
            "Use mapped references for NDB operational limits and tolerance.",
            "Treat the relative-bearing calculation as unresolved until sourced.",
        ],
    },
    "PIFR-083": {
        "why": "Fixing position from two NDB relative bearings links the official positive-fix rule with ADF plotting technique; only the positive-fix rule is currently verified.",
        "notes": [
            "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.",
            "AIP ENR 1.1 section 4.5 supports positive fixing from intersections of NDB position lines and limits NDB-only position lines to 30 NM from each NDB.",
            "Fix construction from two ADF relative bearings remains a source gap.",
        ],
        "traps": [
            "Do not ignore the NDB-only 30 NM positive-fix limit.",
            "Do not assume two relative bearings produce an acceptable fix without geometry and range checks.",
            "Do not add plotting method examples without a verified source and exact chart/aids.",
        ],
        "examples": "TODO: Add two-NDB fixing examples only after verifying technique source material and selecting exact NDB/chart inputs.",
        "exam_use": [
            "Use AIP ENR 1.1 section 4.5 for positive-fix authority and NDB limits.",
            "Use Part 91 MOS 14.02 for IFR route navigation requirements.",
        ],
    },
    "PIFR-084": {
        "why": "GNSS is central to modern IFR navigation and the PIFR exam can test both operational approval and the basic system concepts behind integrity, databases, WGS-84 and RAIM.",
        "notes": [
            "CASR 61.935 table item 10 is relevant to the private IFR GNSS navigation endorsement context.",
            "Part 91 MOS 1.07 supplies key definitions including approved GNSS, FDE, GNSS, navigation database, RNAV/RNP specifications, requisite GNSS satellites and SBAS.",
            "Part 91 MOS 14.01 to 14.07 and AIP ENR 1.1 section 4.8 provide the operational GNSS navigation, integrity, substitute-use and reporting rules.",
            "AIP GEN 1.5 section 2, AIP GEN 2.2 sections 3.11 to 3.12, AIP ENR 4.3 and AIP ENR 3.3 provide the mapped AIP locators for approved equipment, WGS-84/GPS context, navigation aids and route use.",
        ],
        "traps": [
            "Do not treat GNSS capability as IFR approval; check approved GNSS equipment and database requirements.",
            "Do not ignore RAIM/FDE or receiver integrity messages.",
            "Do not use a GNSS position without checking whether the operation, route or procedure requires approved equipment and a valid database.",
        ],
        "examples": "TODO: Add GNSS operating-mode examples after selecting approved receiver types and route/procedure scenarios.",
        "exam_use": [
            "Use Part 91 MOS 1.07 first for definitions.",
            "Use Part 91 MOS 14.01 to 14.07 and AIP ENR 1.1 section 4.8 for operational GNSS requirements.",
            "Use AIP GEN 2.2 sections 3.11 to 3.12 for WGS-84/GPS locator context.",
        ],
    },
    "PIFR-085": {
        "why": "GNSS error and integrity questions are operationally important because the correct action depends on whether the issue is database validity, integrity/RAIM, dead reckoning, distance reporting, SBAS status or space weather.",
        "notes": [
            "Part 91 MOS 11.04 to 11.05, 14.02 and 14.05 to 14.07 are the verified MOS locators for GNSS integrity, distance information and navigation operations.",
            "Part 91 MOS Chapter 26 definitions cover surveillance-related GNSS/GPS terms such as HPL, NACp, NIC, NUCp, SA and SIL.",
            "AIP ENR 1.1 sections 4.8 and 6.3 provide operational GNSS and radio-failure/GNSS context.",
            "AIP GEN 3.5 section 4.13 is the verified locator for space weather effects on GNSS.",
        ],
        "traps": [
            "Do not continue normal GNSS navigation after integrity loss without checking the AIP/MOS action.",
            "Do not assume a database is valid just because the receiver is functioning.",
            "Do not treat SBAS, RAIM, FDE and dead-reckoning mode as interchangeable concepts.",
        ],
        "examples": "TODO: Add GNSS error/integrity scenarios after selecting receiver messages, route phase and available alternate navigation sources.",
        "exam_use": [
            "Use AIP ENR 1.1 section 4.8 for operational GNSS procedure.",
            "Use Part 91 MOS 11.04 to 11.05 for GNSS distance and integrity requirements.",
            "Use AIP GEN 3.5 section 4.13 for space-weather-related GNSS effects.",
        ],
    },
    "PIFR-086": {
        "why": "This objective asks for detailed GNSS error causes and magnitudes, but the current verified sources mainly support operational handling and selected defined terms rather than a complete theory treatment.",
        "notes": [
            "Part 91 MOS 1.07, 11.03 to 11.05, 14.02 and 14.06 to 14.07 provide verified operational GNSS, FDE, requisite satellite, RNAV/RNP and integrity references.",
            "Part 91 MOS Chapter 26 definitions provide selected GNSS/GPS surveillance terms including HPL, NACp, NIC, NUCp, SA and SIL.",
            "AIP GEN 2.2, AIP GEN 3.5 section 4.13, AIP ENR 1.1 sections 4.8 and 6.3 and AIP ENR 4.3 provide the verified AIP locators.",
            "Detailed explanations for ephemeris, clock, receiver, multipath, DOP and typical C/A-code total-error magnitude remain a source gap until a suitable public official source is verified.",
        ],
        "traps": [
            "Do not invent numeric error magnitudes from memory.",
            "Do not treat operational GNSS integrity rules as a complete explanation of every MOS-listed error source.",
            "Keep any later theory notes clearly separated from official CASA/Airservices material unless an official source is verified.",
        ],
        "examples": "TODO: Add detailed GNSS error examples only after verifying a public official source for the specific error-source theory and magnitudes.",
        "exam_use": [
            "Use the mapped MOS/AIP references for operational actions, integrity and defined terms.",
            "Use the source-gap register before adding or relying on detailed GNSS error theory.",
        ],
    },
    "PIFR-087": {
        "why": "Compass turning, acceleration and deceleration errors are explicitly in the MOS, but current verified sources only support equipment carriage, not the theory explanation.",
        "notes": [
            "Part 91 MOS 26.08 and 26.12 are verified equipment locators for heading display and direct-reading or remote-indicating magnetic compass requirements.",
            "The current verified CASA/Airservices source cache does not explain compass turning, acceleration or deceleration errors.",
            "Keep the MOS objective in scope and leave detailed compass-error theory as TODO until a current public official source is identified.",
        ],
        "traps": [
            "Do not fill compass-error theory from unsupported memory or commercial material.",
            "Do not treat equipment-carriage requirements as an explanation of instrument behaviour.",
            "Do not remove the objective because the source coverage is weak; the MOS remains the scope source.",
        ],
        "examples": "TODO: Add compass-error explanations and examples only after verifying a public official source for the theory.",
        "exam_use": [
            "Use the current file to identify the source gap and the MOS scope.",
            "Use Part 91 MOS 26.08/26.12 only for equipment requirements, not for the compass-error theory answer.",
        ],
    },
    "PIFR-088": {
        "why": "Attitude-indicator power-source, acceleration/deceleration and pitch/bank-limit errors are MOS objectives, but the verified public source cache only supports equipment requirements.",
        "notes": [
            "Part 91 MOS 26.08 and 26.12 are verified equipment locators for attitude information, standby attitude/turn indication and gyroscopic power-supply requirements.",
            "The current verified CASA/Airservices source cache does not explain attitude-indicator acceleration/deceleration errors or pitch/bank limits.",
            "Keep detailed instrument-error theory as TODO until a current public official source is identified.",
        ],
        "traps": [
            "Do not infer attitude-indicator error theory from equipment-carriage rules.",
            "Do not fill pitch/bank limit detail from aircraft manuals unless the aircraft source is selected and clearly separated as aircraft-specific material.",
            "Do not remove or merge the objective; it remains separately traceable to the MOS.",
        ],
        "examples": "TODO: Add attitude-indicator error examples only after verifying a public official source or selecting aircraft-specific AFM/POH material for a clearly labelled aircraft example.",
        "exam_use": [
            "Use Part 91 MOS 26.08/26.12 for required instrument/equipment carriage only.",
            "Use the source-gap register before adding attitude-indicator theory content.",
        ],
    },
}


def iter_objectives():
    idx = 1
    for section_no, section_title, elements in SECTIONS:
        for element_no, element_title, objectives in elements:
            for mos_ref, objective in objectives:
                yield {
                    "id": f"PIFR-{idx:03d}",
                    "section_no": section_no,
                    "section_title": section_title,
                    "element_no": element_no,
                    "element_title": element_title,
                    "mos_ref": mos_ref,
                    "objective": objective,
                }
                idx += 1


def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.rstrip() + "\n", encoding="utf-8")


def slugify(text):
    slug = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return slug or "module"


def link(path, text):
    return f"[{text}]({path})"


def mos_reference(obj):
    return f"MOS Schedule 3 Section 2.2 Unit 2.2.1 {obj['mos_ref']}"


def reference_summary(mapped):
    official_fields = [
        "CAR",
        "Part 61",
        "Part 91",
        "Part 91 MOS",
        "AIP reference",
        "ERSA reference",
        "ERC LOW reference",
        "TAC reference",
        "PCA reference",
    ]
    return {field: mapped.get(field, "TODO") for field in official_fields}


def module_payload(objs, reference_map):
    by_ref = {obj["mos_ref"]: obj for obj in objs}
    modules = []
    used_refs = set()
    for title, refs in ROADMAP:
        module_objectives = []
        for ref in refs:
            obj = by_ref[ref]
            used_refs.add(ref)
            mapped = reference_map.get(obj["id"], {})
            module_objectives.append({
                **obj,
                "mos_reference": mos_reference(obj),
                "references": reference_summary(mapped),
                "exam_importance": mapped.get("Exam importance", "TODO"),
                "notes": mapped.get("Notes", "TODO"),
                "study_file": f"docs/09-study-guide/{obj['id']}.md",
            })
        modules.append({
            "title": title,
            "slug": slugify(title),
            "objective_count": len(module_objectives),
            "objectives": module_objectives,
        })

    remaining = [obj for obj in objs if obj["mos_ref"] not in used_refs]
    if remaining:
        module_objectives = []
        for obj in remaining:
            mapped = reference_map.get(obj["id"], {})
            module_objectives.append({
                **obj,
                "mos_reference": mos_reference(obj),
                "references": reference_summary(mapped),
                "exam_importance": mapped.get("Exam importance", "TODO"),
                "notes": mapped.get("Notes", "TODO"),
                "study_file": f"docs/09-study-guide/{obj['id']}.md",
            })
        modules.append({
            "title": "Practical IFR Operations",
            "slug": "practical-ifr-operations",
            "objective_count": len(module_objectives),
            "objectives": module_objectives,
        })

    return {
        "source": SOURCE,
        "module_count": len(modules),
        "objective_count": len(objs),
        "modules": modules,
    }


def write_objective_data(objs):
    data_dir = ROOT / "data"
    data_dir.mkdir(parents=True, exist_ok=True)

    payload = {
        "source": SOURCE,
        "objective_count": len(objs),
        "objectives": objs,
    }
    write(
        data_dir / "pifr-objectives.json",
        json.dumps(payload, indent=2, ensure_ascii=False),
    )

    fields = [
        "id",
        "mos_ref",
        "section_no",
        "section_title",
        "element_no",
        "element_title",
        "objective",
    ]
    csv_path = data_dir / "pifr-objectives.csv"
    with csv_path.open("w", encoding="utf-8", newline="") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fields)
        writer.writeheader()
        writer.writerows({field: obj[field] for field in fields} for obj in objs)


def load_reference_map():
    path = ROOT / "data/pifr-reference-map.json"
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def syllabus():
    lines = [
        "# CASA PIFR Syllabus - MOS Master Reference",
        "",
        "> Official material transcribed from the current CASA Part 61 Manual of Standards. Do not interpret, merge, or omit objectives in this file.",
        "",
        "## Source",
        "",
        f"- Title: {SOURCE['title']}",
        f"- Title ID: {SOURCE['title_id']}",
        f"- Register ID: {SOURCE['register_id']}",
        f"- Compilation: {SOURCE['compilation']}",
        f"- Effective: {SOURCE['effective']}",
        f"- Registered: {SOURCE['registered']}",
        f"- Rectified authorised version registered: {SOURCE['rectified']}",
        f"- Volume: {SOURCE['volume']}",
        f"- Schedule: {SOURCE['schedule']}",
        f"- Section: {SOURCE['section']}",
        f"- Unit: {SOURCE['unit']}",
        f"- URL: {SOURCE['url']}",
        "",
        "## Unit",
        "",
        f"{SOURCE['unit']}",
        "",
        "## Element",
        "",
        "The MOS Section 2.2 material is organised by numbered knowledge areas and sub-areas. Those headings are preserved below as elements for indexing.",
        "",
        "## Performance Criteria",
        "",
        "Reserved in MOS Section 2.2. See Schedule 2 `PIF - Conduct a private instrument flight rules flight` for competency standards; this master syllabus is limited to Section 2.2 aeronautical knowledge objectives.",
        "",
        "## Knowledge Evidence",
        "",
        "1. Reserved",
        "",
    ]

    for section_no, section_title, elements in SECTIONS:
        lines += [f"### {section_no}. {section_title}", ""]
        for element_no, element_title, objectives in elements:
            if element_no:
                lines += [f"#### {element_no} {element_title}", ""]
            for mos_ref, objective in objectives:
                lines.append(f"- **{mos_ref}** {objective}")
            lines.append("")

    lines += [
        "## Assessment Requirements",
        "",
        "TODO: Verify whether CASA publishes assessment requirements for the PIFR examination outside MOS Schedule 3 Section 2.2. Do not infer assessment requirements from training practice or commercial material.",
    ]
    write(ROOT / "docs/01-mos/syllabus.md", "\n".join(lines))


def cross_reference(objs, reference_map):
    headers = [
        "ID", "MOS reference", "Learning objective", "CAR", "Part 61", "Part 91",
        "Part 91 MOS", "AIP reference", "ERSA reference", "ERC LOW reference",
        "TAC reference", "PCA reference", "Aircraft example", "Exam importance", "Notes",
    ]
    lines = [
        "# Master Cross-Reference",
        "",
        "Initial MOS-only index. All non-MOS references remain `TODO` until verified against current public CASA and Airservices sources.",
        "",
        "|" + "|".join(headers) + "|",
        "|" + "|".join(["---"] * len(headers)) + "|",
    ]
    for obj in objs:
        mapped = reference_map.get(obj["id"], {})
        row = [
            obj["id"],
            f"MOS Schedule 3 Section 2.2 Unit 2.2.1 {obj['mos_ref']}",
            obj["objective"],
            *[mapped.get(field, "TODO") for field in CROSS_REFERENCE_FIELDS],
        ]
        lines.append("|" + "|".join(cell.replace("|", "\\|") for cell in row) + "|")
    write(ROOT / "docs/08-cross-reference/master-cross-reference.md", "\n".join(lines))


def roadmap(objs):
    by_ref = {obj["mos_ref"]: obj for obj in objs}
    lines = [
        "# PIFR Learning Roadmap",
        "",
        "> Study modules are an editorial organisation layer. The official objectives remain the MOS objectives in `docs/01-mos/syllabus.md`.",
        "",
    ]
    used = set()
    for title, refs in ROADMAP:
        lines += [f"## {title}", ""]
        for ref in refs:
            obj = by_ref[ref]
            used.add(ref)
            lines.append(f"- {obj['id']} - {ref}: {obj['objective']}")
        lines.append("")
    remaining = [obj for obj in objs if obj["mos_ref"] not in used]
    if remaining:
        lines += ["## Practical IFR Operations", ""]
        for obj in remaining:
            lines.append(f"- {obj['id']} - {obj['mos_ref']}: {obj['objective']}")
        lines.append("")
    write(ROOT / "docs/09-study-guide/learning-roadmap.md", "\n".join(lines))


def study_modules(objs, reference_map):
    payload = module_payload(objs, reference_map)
    write(
        ROOT / "data/pifr-modules.json",
        json.dumps(payload, indent=2, ensure_ascii=False),
    )

    overview = [
        "# PIFR Study Modules",
        "",
        "> Generated module index. The MOS objective list remains authoritative; modules are an editorial study order.",
        "",
        "|Module|Objectives|Purpose|",
        "|---|---:|---|",
    ]
    for module in payload["modules"]:
        module_file = f"modules/{module['slug']}.md"
        overview.append(
            "|" + "|".join([
                link(module_file, module["title"]),
                str(module["objective_count"]),
                "Locate MOS objectives, verified official references, and source gaps for this study block.",
            ]) + "|"
        )
    overview += [
        "",
        "## Source Separation",
        "",
        "- Official material is limited to MOS objectives and verified public CASA/Airservices references.",
        "- Explanatory material remains `TODO` unless a verified source has been identified.",
        "- Source gaps are tracked in `docs/08-cross-reference/source-gaps.md`.",
    ]
    write(ROOT / "docs/09-study-guide/modules.md", "\n".join(overview))

    for module in payload["modules"]:
        lines = [
            f"# {module['title']}",
            "",
            "> Generated study module. Do not treat module grouping as MOS scope; every objective remains traceable to the MOS row shown below.",
            "",
            "## Objective Checklist",
            "",
            "|ID|MOS reference|Objective|Exam importance|Study file|",
            "|---|---|---|---|---|",
        ]
        for obj in module["objectives"]:
            study_file = f"../{obj['id']}.md"
            row = [
                obj["id"],
                obj["mos_reference"],
                obj["objective"],
                obj["exam_importance"],
                link(study_file, obj["id"]),
            ]
            lines.append("|" + "|".join(str(cell).replace("|", "\\|") for cell in row) + "|")

        lines += [
            "",
            "## Official Reference Locator",
            "",
            "|ID|CAR|Part 61|Part 91|Part 91 MOS|AIP|ERSA|ERC LOW|TAC|PCA|",
            "|---|---|---|---|---|---|---|---|---|---|",
        ]
        for obj in module["objectives"]:
            refs = obj["references"]
            row = [
                obj["id"],
                refs["CAR"],
                refs["Part 61"],
                refs["Part 91"],
                refs["Part 91 MOS"],
                refs["AIP reference"],
                refs["ERSA reference"],
                refs["ERC LOW reference"],
                refs["TAC reference"],
                refs["PCA reference"],
            ]
            lines.append("|" + "|".join(str(cell).replace("|", "\\|") for cell in row) + "|")

        lines += [
            "",
            "## Source Status Notes",
            "",
        ]
        for obj in module["objectives"]:
            lines.append(f"- **{obj['id']}**: {obj['notes']}")

        lines += [
            "",
            "## Study Notes",
            "",
            "TODO: Add explanatory notes only after verifying source status and keeping official references separate.",
            "",
            "## Exam Use",
            "",
            "TODO: Add permitted-reference lookup tactics after the reference source has been verified for each TODO column.",
        ]
        write(ROOT / "docs/09-study-guide/modules" / f"{module['slug']}.md", "\n".join(lines))


def exam_index(objs, reference_map):
    def status_for(obj):
        mapped = reference_map.get(obj["id"], {})
        official_refs = reference_summary(mapped)
        verified = [value for value in official_refs.values() if value != "TODO"]
        if not verified:
            return "MOS only"
        notes = mapped.get("Notes", "").lower()
        gap_markers = ["todo", "not yet", "partial", "does not", "only against"]
        if any(marker in notes for marker in gap_markers):
            return "Partial"
        return "Mapped"

    lines = [
        "# PIFR Exam Index",
        "",
        "> Generated quick-reference index. Use this to find the likely permitted reference first, then verify the exact wording in the source document.",
        "",
        "|ID|MOS ref|Topic|Importance|Primary official locator|Status|Notes|",
        "|---|---|---|---|---|---|---|",
    ]
    for obj in objs:
        mapped = reference_map.get(obj["id"], {})
        refs = reference_summary(mapped)
        locator = "TODO"
        for field in ["Part 91 MOS", "Part 61", "Part 91", "AIP reference", "CAR", "ERSA reference", "ERC LOW reference", "TAC reference", "PCA reference"]:
            if refs[field] != "TODO":
                locator = f"{field}: {refs[field]}"
                break
        row = [
            obj["id"],
            obj["mos_ref"],
            obj["objective"],
            mapped.get("Exam importance", "TODO"),
            locator,
            status_for(obj),
            mapped.get("Notes", "TODO"),
        ]
        lines.append("|" + "|".join(str(cell).replace("|", "\\|") for cell in row) + "|")

    lines += [
        "",
        "## Source Gap Register",
        "",
        "See `docs/08-cross-reference/source-gaps.md` before relying on any row with `Partial`, `MOS only`, or `TODO` status.",
    ]
    write(ROOT / "docs/14-exam-index/exam-index.md", "\n".join(lines))


def study_file_status(mapped):
    official_refs = {
        field: mapped.get(field, "TODO")
        for field in [
            "CAR",
            "Part 61",
            "Part 91",
            "Part 91 MOS",
            "AIP reference",
            "ERSA reference",
            "ERC LOW reference",
            "TAC reference",
            "PCA reference",
        ]
    }
    if not [value for value in official_refs.values() if value != "TODO"]:
        return "MOS only"
    notes = mapped.get("Notes", "").lower()
    gap_markers = ["todo", "not yet", "partial", "does not", "only against"]
    if any(marker in notes for marker in gap_markers):
        return "Partial"
    return "Mapped"


def study_files(objs, reference_map):
    module_data = module_payload(objs, reference_map)
    module_by_objective = {}
    for module in module_data["modules"]:
        for module_obj in module["objectives"]:
            module_by_objective[module_obj["id"]] = module

    for obj in objs:
        mapped = reference_map.get(obj["id"], {})
        module = module_by_objective[obj["id"]]
        content = STUDY_CONTENT.get(obj["id"], {})
        official_rows = []
        for field in CROSS_REFERENCE_FIELDS:
            if field in ["Exam importance", "Notes", "Aircraft example"]:
                continue
            official_rows.append(f"|{field}|{mapped.get(field, 'TODO')}|")

        source_note = mapped.get("Notes", "TODO")
        exam_importance = mapped.get("Exam importance", "TODO")
        aircraft_example = mapped.get("Aircraft example", "TODO")
        why = content.get("why", "TODO")
        notes = content.get("notes", "TODO")
        traps = content.get("traps", "TODO")
        examples = content.get("examples", "TODO")
        exam_use = content.get("exam_use", "TODO")

        def render_list(value):
            if isinstance(value, list):
                return "\n".join(f"- {item}" for item in value)
            return value

        text = f"""# {obj['id']}

## Objective

{mos_reference(obj)}: {obj['objective']}

## Why it matters

{why}

## Official references

|Reference type|Locator|
|---|---|
{chr(10).join(official_rows)}

## Official reference status

- Status: {study_file_status(mapped)}
- Exam importance: {exam_importance}
- Source status notes: {source_note}

## Study notes

{render_list(notes)}

## Common CASA traps

{render_list(traps)}

## Worked examples

{examples}

## Cross references

- Module: [docs/09-study-guide/modules/{module['slug']}.md](modules/{module['slug']}.md)
- Master cross-reference: [docs/08-cross-reference/master-cross-reference.md](../08-cross-reference/master-cross-reference.md)
- Exam index: [docs/14-exam-index/exam-index.md](../14-exam-index/exam-index.md)
- Source gaps: [docs/08-cross-reference/source-gaps.md](../08-cross-reference/source-gaps.md)

## Aircraft examples

{aircraft_example}

## Flashcards

TODO

## Question bank references

TODO

## Exam use

{render_list(exam_use)}
"""
        write(ROOT / "docs/09-study-guide" / f"{obj['id']}.md", text)


def project_docs():
    write(ROOT / "AGENTS.md", """# CASA PIFR Companion Project Rules

## Authority

- The CASA Part 61 Manual of Standards is the single source of truth for syllabus scope.
- Use the current Part 61 MOS, Section 2.2 - Private IFR Rating, for PIFR aeronautical knowledge objectives.
- Do not use older Schedule 3 versions unless verifying historical equivalence.

## Traceability

- Never invent, merge, or omit MOS objectives.
- Every objective must remain traceable to its MOS reference.
- Leave `TODO` where a reference requires verification.

## Source Separation

- Clearly separate official CASA material from explanatory study notes.
- Do not reproduce copyrighted commercial material.
- Use only publicly available CASA and Airservices publications for references.

## Content Model

- Markdown is the source of truth.
- Generated manuals, websites, flashcards, question banks, retrieval indexes, and exam indexes must derive from Markdown source files.
- Keep cross-reference data aligned with `docs/01-mos/syllabus.md`.

## Exam Orientation

- Optimise for locating the permitted reference quickly in the CASA PIFR exam.
- Every study topic should answer what CASA expects, where the official answer is found, and how to locate it quickly.
""")
    write(ROOT / ".gitignore", """tmp/
.DS_Store
""")
    write(ROOT / "docs/00-project/source-register.md", f"""# Source Register

## Current MOS Source

- Title: {SOURCE['title']}
- Title ID: {SOURCE['title_id']}
- Register ID: {SOURCE['register_id']}
- Compilation: {SOURCE['compilation']}
- Effective: {SOURCE['effective']}
- Registered: {SOURCE['registered']}
- Rectified authorised version registered: {SOURCE['rectified']}
- URL: {SOURCE['url']}

## Extraction Notes

- Phase 1 syllabus extracted from `{SOURCE['schedule']}`, `{SOURCE['section']}`, `{SOURCE['unit']}`.
- Source PDF used locally: `tmp/source/part61-mos-vol3.pdf`.
- Source text extraction used locally: `tmp/source/part61-mos-vol3.txt`.
- `tmp/` is ignored and should be treated as a working cache, not project source.

## Current Regulation Sources Verified

### Civil Aviation Safety Regulations 1998

- Title ID: F1998B00220
- Register ID: F2026C00286
- Compilation: Compilation No. 101
- Effective: 2026-04-01
- Registered: 2026-04-02
- URL: https://www.legislation.gov.au/F1998B00220/latest
- Local cache: `tmp/source/regulations/casr-current-vol1.pdf` through `tmp/source/regulations/casr-current-vol5.pdf`

### Part 91 (General Operating and Flight Rules) Manual of Standards 2020

- Title ID: F2020L01514
- Register ID: F2026C00214
- Compilation: Compilation No. 7
- Effective: 2026-03-14
- Registered: 2026-03-18
- URL: https://www.legislation.gov.au/F2020L01514/latest
- Local cache: `tmp/source/regulations/part91-mos-current.pdf`

## Current Airservices Sources Verified

### AIP Book

- Publisher: Airservices Australia
- Product: Aeronautical Information Publication Australia
- Amendment: AIP Book Amendment No. 126
- Effective: 2026-03-19
- Next cycle shown by Airservices: 2026-07-09
- URL: https://www.airservicesaustralia.com/aip/aip.asp
- Local cache: `tmp/source/aip/aip-general-19MAR2026.pdf`, `tmp/source/aip/aip-enroute-19MAR2026.pdf`, `tmp/source/aip/aip-cover-19MAR2026.pdf`
- Notes: Verified on 2026-06-27. The Airservices AIP page listed the 19 MAR 2026 AIP Book as current and the 09 JUL 2026 AIP Book as pending.

### En Route Supplement Australia

- Publisher: Airservices Australia
- Product: En Route Supplement Australia (ERSA)
- Effective: 2026-03-19
- Next cycle shown by Airservices: 2026-07-09
- URL: https://www.airservicesaustralia.com/aip/aip.asp
- Local index cache: `tmp/source/ersa/ersa-19MAR2026-index.html`
- Local PDF/text cache:
  - `tmp/source/ersa/GEN-FPR_19MAR2026.pdf` and `.txt`
  - `tmp/source/ersa/GEN-FIS_19MAR2026.pdf` and `.txt`
  - `tmp/source/ersa/NAVCOMM_19MAR2026.pdf` and `.txt`
  - `tmp/source/ersa/EMERG_19MAR2026.pdf` and `.txt`
- Notes: Verified on 2026-06-27. The Airservices AIP page listed the 19 MAR 2026 ERSA as current and the 09 JUL 2026 ERSA as pending.

### AIP Charts

- Publisher: Airservices Australia
- Product: AIP Charts
- Current chart date: 2025-11-27
- Next cycle shown by Airservices: 2026-07-09
- URL: https://www.airservicesaustralia.com/aip/aip.asp
- Local index cache:
  - `tmp/source/charts/charts-27NOV2025-index.html`
  - `tmp/source/charts/erc-low-27NOV2025-index.html`
  - `tmp/source/charts/pca-27NOV2025-index.html`
  - `tmp/source/charts/tac-27NOV2025-index.html`
- Verified chart products:
  - ERC Low 1-8
  - PCA Front and PCA Back
  - TAC 1-8
- Notes: Verified on 2026-06-27. The Airservices AIP page listed the 27 NOV 2025 AIP Charts as current and the 09 JUL 2026 AIP Charts as pending.
""")
    write(ROOT / "docs/00-project/data-model.md", """# Data Model

The MOS objective list is maintained in `scripts/generate_pifr_phase1.py` and emitted into Markdown and structured data.

## Generated Files

- `docs/01-mos/syllabus.md` is the MOS master reference.
- `docs/08-cross-reference/master-cross-reference.md` is the MOS-indexed reference matrix.
- `docs/09-study-guide/PIFR-001.md` through `docs/09-study-guide/PIFR-093.md` are per-objective study placeholders.
- `docs/09-study-guide/learning-roadmap.md` is an editorial grouping of MOS objectives.
- `docs/09-study-guide/modules.md` and `docs/09-study-guide/modules/*.md` are generated study-module indexes.
- `docs/14-exam-index/exam-index.md` is a generated quick-reference exam locator.
- `data/pifr-objectives.json` is the structured objective dataset for future website, retrieval, flashcard and exam-index generation.
- `data/pifr-objectives.csv` is a spreadsheet-friendly export of the same objective dataset.
- `data/pifr-objectives-count.txt` records the current objective count.
- `data/pifr-reference-map.json` is the canonical data file for verified non-MOS cross-reference mappings.
- `data/pifr-modules.json` is the structured module dataset generated from the objective list and reference map.

## Validation

Run `python3 scripts/validate_traceability.py` after generated files are edited or regenerated.

The validation checks that:

- all objective IDs are unique and sequential;
- the syllabus contains every MOS objective;
- the cross-reference contains every objective once;
- every per-objective study file exists and contains the correct MOS objective;
- the learning roadmap references every objective once;
- the generated module dataset and module Markdown files match the objective list;
- the generated exam index references every objective once;
- structured JSON and CSV exports match the generator objective list;
- reference-map entries use known objective IDs and approved cross-reference fields.
""")


def main():
    objs = list(iter_objectives())
    reference_map = load_reference_map()
    project_docs()
    write_objective_data(objs)
    syllabus()
    cross_reference(objs, reference_map)
    roadmap(objs)
    study_modules(objs, reference_map)
    exam_index(objs, reference_map)
    study_files(objs, reference_map)
    write(ROOT / "data/pifr-objectives-count.txt", str(len(objs)))


if __name__ == "__main__":
    main()
