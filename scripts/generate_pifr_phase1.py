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
