import csv
import json
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


def study_files(objs):
    for obj in objs:
        text = f"""# {obj['id']}

## Objective

MOS Schedule 3 Section 2.2 Unit 2.2.1 {obj['mos_ref']}: {obj['objective']}

## Why it matters

TODO

## Official references

TODO

## Study notes

TODO

## Common CASA traps

TODO

## Worked examples

TODO

## Cross references

TODO

## Aircraft examples

TODO

## Flashcards

TODO

## Question bank references

TODO
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
""")
    write(ROOT / "docs/00-project/data-model.md", """# Data Model

The MOS objective list is maintained in `scripts/generate_pifr_phase1.py` and emitted into Markdown and structured data.

## Generated Files

- `docs/01-mos/syllabus.md` is the MOS master reference.
- `docs/08-cross-reference/master-cross-reference.md` is the MOS-indexed reference matrix.
- `docs/09-study-guide/PIFR-001.md` through `docs/09-study-guide/PIFR-093.md` are per-objective study placeholders.
- `docs/09-study-guide/learning-roadmap.md` is an editorial grouping of MOS objectives.
- `data/pifr-objectives.json` is the structured objective dataset for future website, retrieval, flashcard and exam-index generation.
- `data/pifr-objectives.csv` is a spreadsheet-friendly export of the same objective dataset.
- `data/pifr-objectives-count.txt` records the current objective count.
- `data/pifr-reference-map.json` is the canonical data file for verified non-MOS cross-reference mappings.

## Validation

Run `python3 scripts/validate_traceability.py` after generated files are edited or regenerated.

The validation checks that:

- all objective IDs are unique and sequential;
- the syllabus contains every MOS objective;
- the cross-reference contains every objective once;
- every per-objective study file exists and contains the correct MOS objective;
- the learning roadmap references every objective once;
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
    study_files(objs)
    write(ROOT / "data/pifr-objectives-count.txt", str(len(objs)))


if __name__ == "__main__":
    main()
