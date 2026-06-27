window.PIFR_DATA = {
  "source": {
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
    "url": "https://www.legislation.gov.au/F2014L01102/latest"
  },
  "module_count": 10,
  "objective_count": 93,
  "status_counts": {
    "Mapped": 67,
    "Partial": 25,
    "MOS only": 1
  },
  "modules": [
    {
      "title": "IFR Legislation",
      "slug": "ifr-legislation",
      "objective_count": 7
    },
    {
      "title": "Human Factors",
      "slug": "human-factors",
      "objective_count": 7
    },
    {
      "title": "Aircraft IFR Equipment",
      "slug": "aircraft-ifr-equipment",
      "objective_count": 9
    },
    {
      "title": "Flight Planning And Documentation",
      "slug": "flight-planning-and-documentation",
      "objective_count": 8
    },
    {
      "title": "Navigation And LSALT",
      "slug": "navigation-and-lsalt",
      "objective_count": 16
    },
    {
      "title": "Alternate Requirements And Fuel",
      "slug": "alternate-requirements-and-fuel",
      "objective_count": 5
    },
    {
      "title": "Airspace And Radio Procedures",
      "slug": "airspace-and-radio-procedures",
      "objective_count": 19
    },
    {
      "title": "Meteorology",
      "slug": "meteorology",
      "objective_count": 3
    },
    {
      "title": "Radio Navigation",
      "slug": "radio-navigation",
      "objective_count": 14
    },
    {
      "title": "GNSS And Instrument Errors",
      "slug": "gnss-and-instrument-errors",
      "objective_count": 5
    }
  ],
  "objectives": [
    {
      "id": "PIFR-003",
      "mos_ref": "2.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 2.1.3",
      "objective": "State what qualifications a pilot must have to be authorised to conduct an IFR flight.",
      "section_no": "2",
      "section_title": "Pilot's fitness and qualifications",
      "element_no": "2.1",
      "element_title": "Pilot medical fitness for IFR flight",
      "module": "IFR Legislation",
      "module_slug": "ifr-legislation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "CASR 61.910, 61.915, 61.920, 61.925, 61.930, 61.935, 61.940, 61.950",
        "Part 91": "TODO",
        "Part 91 MOS": "TODO",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286). Covers PIFR privileges, limitations, recency, flight review, grant requirements and endorsements.",
      "study_file": "docs/09-study-guide/PIFR-003.md",
      "study": {
        "why": "This is the legal starting point for PIFR privileges: the exam can test whether a pilot is authorised for the specific IFR operation, endorsement and recency context.",
        "study_notes": [
          "Start in CASR Part 61 Subpart 61.M for private instrument flight rating privileges and limitations.",
          "Use CASR 61.910 for the private IFR rating privilege framework, then follow the related PIFR provisions through grant, endorsement, recency and flight review requirements.",
          "CASR 61.935 table entries are important because PIFR operations depend on the endorsements held, not merely possession of the rating."
        ],
        "common_traps": [
          "Do not treat a private IFR rating as an unrestricted instrument rating.",
          "Check the relevant endorsement before assuming the operation is authorised.",
          "Separate rating privileges, endorsement privileges, recency and flight review requirements."
        ],
        "worked_examples": "TODO: Add scenarios only after selecting exact endorsement combinations from CASR 61.935.",
        "exam_use": [
          "Search Part 61 for `private IFR rating` and then use the surrounding regulation numbers in the reference locator.",
          "For endorsement questions, go directly to CASR 61.935 and read the table item rather than relying on memory."
        ]
      }
    },
    {
      "id": "PIFR-009",
      "mos_ref": "4.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 4.1.1",
      "objective": "State the IFR operations a single-engine aircraft is limited to.",
      "section_no": "4",
      "section_title": "IFR operations - general",
      "element_no": null,
      "element_title": null,
      "module": "IFR Legislation",
      "module_slug": "ifr-legislation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "CASR 61.915, 61.935 table 61.935 items 1, 3 and 11, 61.940, 61.942",
        "Part 91": "TODO",
        "Part 91 MOS": "TODO",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286). Do not infer operational limits beyond the PIFR endorsement privileges and limitations.",
      "study_file": "docs/09-study-guide/PIFR-009.md",
      "study": {
        "why": "Single-engine IFR privileges are a common exam boundary issue because the answer depends on PIFR endorsement limits rather than broad IFR assumptions.",
        "study_notes": [
          "Use CASR 61.915 and CASR 61.935 to identify which PIFR operations and endorsements are available.",
          "CASR 61.940 and 61.942 support the operational limitation chain for private IFR rating holders and endorsement-specific authorisations.",
          "The mapped references intentionally avoid adding operational limits that are not expressed in the regulation text."
        ],
        "common_traps": [
          "Do not import multi-engine or instrument-rating assumptions into a PIFR single-engine question.",
          "Do not assume a navigation aid, approach, holding or night operation is permitted unless the relevant endorsement supports it."
        ],
        "worked_examples": "TODO: Add aircraft and endorsement examples after the aircraft example set is selected.",
        "exam_use": [
          "Use CASR 61.935 table items first when the question turns on a specific activity.",
          "Then confirm any general private IFR rating limitation in the surrounding Part 61 provisions."
        ]
      }
    },
    {
      "id": "PIFR-010",
      "mos_ref": "4.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 4.1.2",
      "objective": "State the requirements for submission of flight notification and SARWATCH for conducting an IFR operation.",
      "section_no": "4",
      "section_title": "IFR operations - general",
      "element_no": null,
      "element_title": null,
      "module": "IFR Legislation",
      "module_slug": "ifr-legislation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.240",
        "Part 91 MOS": "Part 91 MOS Chapter 9, sections 9.01-9.05",
        "AIP reference": "AIP ENR 1.10 sections 2.1-2.22, 3.1-3.5; AIP ENR 1.1 section 10.2",
        "ERSA reference": "ERSA GEN FPR - Flight Plan Requirements (19 MAR 2026)",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified legal requirement chain: CASR 91.240 authorises Part 91 MOS flight notification requirements; MOS 9.02 requires IFR flight plan submission and MOS 9.03-9.05 covers changes, SARTIME and responsible persons. AIP Book Amendment 126 current 19 MAR 2026 confirms IFR flight notification, SARWATCH basis, SARTIME and PIFR notification procedures. ERSA GEN FPR current 19 MAR 2026 provides route and flight-plan requirement detail.",
      "study_file": "docs/09-study-guide/PIFR-010.md",
      "study": {
        "why": "Flight notification and SARWATCH are exam-critical because they combine regulation, MOS requirements, AIP procedures and ERSA route details.",
        "study_notes": [
          "CASR 91.240 is the legal hook for flight notification requirements prescribed by the Part 91 MOS.",
          "Part 91 MOS Chapter 9 contains the core flight notification rules, including IFR flight plan submission, changes, SARTIME and responsible-person requirements.",
          "AIP ENR 1.10 provides operational flight notification procedures and AIP ENR 1.1 supports SARWATCH cancellation context.",
          "ERSA GEN FPR provides route and flight-plan requirement detail for current operational lookup."
        ],
        "common_traps": [
          "Do not confuse lodging flight notification with cancelling SARWATCH.",
          "If a question mentions SARTIME, responsible person or amendment, check MOS Chapter 9 and AIP ENR 1.10 together.",
          "Route-specific flight planning details may sit in ERSA GEN FPR rather than the AIP Book."
        ],
        "worked_examples": "TODO: Add worked flight-notification examples after selecting a sample route.",
        "exam_use": [
          "For legal requirement wording, go to Part 91 MOS Chapter 9.",
          "For practical form/procedure wording, go to AIP ENR 1.10.",
          "For route-specific planning constraints, check ERSA GEN FPR."
        ]
      }
    },
    {
      "id": "PIFR-011",
      "mos_ref": "4.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 4.1.3",
      "objective": "State the speed restrictions an IFR flight must operate to.",
      "section_no": "4",
      "section_title": "IFR operations - general",
      "element_no": null,
      "element_title": null,
      "module": "IFR Legislation",
      "module_slug": "ifr-legislation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.090",
        "Part 91 MOS": "Part 91 MOS Chapter 4, sections 4.01-4.02 and Table 4.02(1)",
        "AIP reference": "AIP ENR 1.4 section 4.1",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214). Applies to all flights; table includes IFR/VFR limits in Class D and Class G/E. AIP ENR 1.4 summarises Australian airspace speed limitations.",
      "study_file": "docs/09-study-guide/PIFR-011.md",
      "study": {
        "why": "Speed restrictions are quick marks when the correct table is found, but easy to miss if the question changes airspace or altitude context.",
        "study_notes": [
          "Part 91 MOS Chapter 4 is the primary source for speed limits.",
          "Table 4.02(1) is the key lookup point for IFR/VFR speed restrictions by airspace and circumstance.",
          "AIP ENR 1.4 provides an operational airspace summary, but the MOS table is the stronger legal locator."
        ],
        "common_traps": [
          "Read the airspace class and altitude before selecting a speed limit.",
          "Do not use AIP summary material when the MOS table gives the precise rule."
        ],
        "worked_examples": "TODO: Add speed-limit lookup examples by airspace class.",
        "exam_use": [
          "Go straight to Part 91 MOS Table 4.02(1).",
          "Use AIP ENR 1.4 as a quick cross-check if the question is framed as an airspace question."
        ]
      }
    },
    {
      "id": "PIFR-012",
      "mos_ref": "4.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 4.1.4",
      "objective": "State the requirements for inflight progress reports for IFR flights.",
      "section_no": "4",
      "section_title": "IFR operations - general",
      "element_no": null,
      "element_title": null,
      "module": "IFR Legislation",
      "module_slug": "ifr-legislation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS Chapter 21, sections 21.05-21.06 and Tables 21.05(1), 21.06(1)",
        "AIP reference": "AIP ENR 1.1 sections 5.1.4-5.1.5, 6.1, 9.7-9.10, 10.2; AIP ENR 1.10 section 2.2",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified Part 91 MOS controlled/Class E and Class G IFR prescribed reports, including position reports and SARWATCH cancellation reporting exceptions. AIP Book Amendment 126 current 19 MAR 2026 confirms route reporting point guidance and IFR in-flight progress/position reporting.",
      "study_file": "docs/09-study-guide/PIFR-012.md",
      "study": {
        "why": "Progress-reporting questions test whether the pilot knows which reports are prescribed in controlled/Class E/Class G contexts and when SARWATCH cancellation is required.",
        "study_notes": [
          "Part 91 MOS Chapter 21 is the primary source for prescribed reports.",
          "Use section 21.05 and Table 21.05(1) for controlled and Class E reporting contexts.",
          "Use section 21.06 and Table 21.06(1) for IFR aircraft in Class G.",
          "AIP ENR 1.1 and ENR 1.10 provide operational position-report and flight-notification context."
        ],
        "common_traps": [
          "Do not assume the same report list applies in CTA and Class G.",
          "Look for route reporting requirements, ATC requirements and SARWATCH cancellation triggers separately."
        ],
        "worked_examples": "TODO: Add report-sequence examples for CTA, Class E and Class G.",
        "exam_use": [
          "Identify the airspace first.",
          "Then use Part 91 MOS Table 21.05(1) or Table 21.06(1) as the primary lookup."
        ]
      }
    },
    {
      "id": "PIFR-013",
      "mos_ref": "4.1.5",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 4.1.5",
      "objective": "State the requirements and procedures for flight plan amendments and advising revised estimates.",
      "section_no": "4",
      "section_title": "IFR operations - general",
      "element_no": null,
      "element_title": null,
      "module": "IFR Legislation",
      "module_slug": "ifr-legislation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS sections 9.03, 21.05 Table 21.05(1) items 5-6, 21.06 Table 21.06(1) item 5",
        "AIP reference": "AIP ENR 1.1 sections 9.7.1, 9.8; AIP ENR 1.10 section 4",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified Part 91 MOS change-notification requirements and prescribed reporting triggers for corrected position estimates and speed variation. AIP Book Amendment 126 current 19 MAR 2026 confirms route/track/level amendment advice, revised estimates greater than 2 minutes, and flight notification amendment phraseology.",
      "study_file": "docs/09-study-guide/PIFR-013.md",
      "study": {
        "why": "Flight plan amendments and revised estimates are procedural exam topics where small timing or wording details matter.",
        "study_notes": [
          "Part 91 MOS 9.03 covers change notification for submitted flight notifications.",
          "Part 91 MOS Tables 21.05(1) and 21.06(1) contain prescribed reporting triggers for corrected estimates and speed variation.",
          "AIP ENR 1.10 section 4 is the operational locator for flight notification amendment phraseology and process.",
          "AIP ENR 1.1 supports in-flight route, level and estimate amendment procedures."
        ],
        "common_traps": [
          "Do not treat every small ETA change as a revised-estimate report; check the AIP/MOS threshold.",
          "Separate pre-flight plan amendment from in-flight corrected estimate reporting."
        ],
        "worked_examples": "TODO: Add revised-estimate examples using a sample IFR route.",
        "exam_use": [
          "For submitted flight notification changes, start with Part 91 MOS 9.03.",
          "For in-flight revised estimates, go to the Chapter 21 report tables and AIP ENR 1.1."
        ]
      }
    },
    {
      "id": "PIFR-014",
      "mos_ref": "5.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 5.1.1",
      "objective": "State the documents required to be carried on an IFR flight.",
      "section_no": "5",
      "section_title": "Documentation for IFR flight",
      "element_no": null,
      "element_title": null,
      "module": "IFR Legislation",
      "module_slug": "ifr-legislation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.100, 91.105, 91.110",
        "Part 91 MOS": "TODO",
        "AIP reference": "AIP ENR 1.10 section 5; Airservices AIP copyright notice statutory obligations",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286). Covers electronic documents, flight crew/aircraft documents, authorised aeronautical information and maintenance release/log carriage. AIP ENR 1.10 explains carriage of relevant latest editions of aeronautical maps, charts and information.",
      "study_file": "docs/09-study-guide/PIFR-014.md",
      "study": {
        "why": "Document-carriage questions are usually solved by locating the exact Part 91 regulation and then checking AIP carriage guidance for maps, charts and aeronautical information.",
        "study_notes": [
          "CASR 91.100, 91.105 and 91.110 are the primary legal references for documents and authorised aeronautical information.",
          "AIP ENR 1.10 section 5 supports the operational requirement to carry relevant current aeronautical maps, charts and information.",
          "The reference map separates document carriage from later study tasks about extracting information from those documents."
        ],
        "common_traps": [
          "Do not confuse documents required to be carried with documents merely useful for planning.",
          "Check whether the question asks about flight crew documents, aircraft documents or aeronautical information."
        ],
        "worked_examples": "TODO: Add pre-flight document checklist example after the aircraft example set is selected.",
        "exam_use": [
          "Use CASR 91.100 to 91.110 for legal document-carriage wording.",
          "Use AIP ENR 1.10 section 5 for chart and operational information carriage context."
        ]
      }
    },
    {
      "id": "PIFR-001",
      "mos_ref": "2.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 2.1.1",
      "objective": "State requirements for pilot fitness to conduct an IFR flight.",
      "section_no": "2",
      "section_title": "Pilot's fitness and qualifications",
      "element_no": "2.1",
      "element_title": "Pilot medical fitness for IFR flight",
      "module": "Human Factors",
      "module_slug": "human-factors",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "CASR 61.410, 61.420; CASR Part 67 Subpart 67.C and Subpart 67.E, including 67.145, 67.155, 67.265, 67.270",
        "Part 91": "CASR 91.520",
        "Part 91 MOS": "TODO",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286). Covers PPL medical certificate requirements, carriage of licence/medical documents, Class 2 medical standards, obligations to disclose medically significant conditions, impairment offences, and Part 91 crew fitness for duty.",
      "study_file": "docs/09-study-guide/PIFR-001.md",
      "study": {
        "why": "IFR fitness is a legal go/no-go item: the pilot must meet medical and crew-fitness requirements before acting as pilot in command.",
        "study_notes": [
          "CASR 61.410 and 61.420 provide the Part 61 licence/medical certificate hooks.",
          "CASR Part 67 Subparts 67.C and 67.E, including 67.145, 67.155, 67.265 and 67.270, provide the mapped medical standard and reporting context.",
          "CASR 91.520 is the Part 91 crew fitness for duty reference.",
          "The verified source status also includes carriage of licence/medical documents, medically significant condition disclosure and impairment offences."
        ],
        "common_traps": [
          "Do not treat a valid licence as enough if the medical/fitness requirement is not met.",
          "Do not ignore changes in medical condition after the certificate was issued.",
          "Fitness for duty is broader than holding a medical certificate; check fatigue, impairment and substance issues where relevant."
        ],
        "worked_examples": "TODO: Add pilot-fitness scenarios after selecting exact medical/fitness fact patterns.",
        "exam_use": [
          "Use CASR 91.520 for crew fitness for duty.",
          "Use CASR Part 67 for medical standard and reporting obligations.",
          "Use CASR 61.410/61.420 for licence and medical-certificate hooks."
        ]
      }
    },
    {
      "id": "PIFR-002",
      "mos_ref": "2.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 2.1.2",
      "objective": "Describe how a pilot determines whether they are fit to conduct an IFR flight.",
      "section_no": "2",
      "section_title": "Pilot's fitness and qualifications",
      "element_no": "2.1",
      "element_title": "Pilot medical fitness for IFR flight",
      "module": "Human Factors",
      "module_slug": "human-factors",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "CASR 67.015, 67.145, 67.155, 67.265, 67.270",
        "Part 91": "CASR 91.520",
        "Part 91 MOS": "TODO",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286). Use this for the legal self-assessment chain: safety-relevant medical condition, Class 2 standard, change in medical condition reporting, impaired-efficiency prohibition, fatigue, alcohol and psychoactive substance fitness limits.",
      "study_file": "docs/09-study-guide/PIFR-002.md",
      "study": {
        "why": "This objective turns the legal fitness rules into a self-assessment chain before IFR flight.",
        "study_notes": [
          "CASR 67.015, 67.145, 67.155, 67.265 and 67.270 are the mapped Part 67 locators for medical standards, safety-relevant medical conditions and reporting.",
          "CASR 91.520 is the mapped crew fitness for duty reference.",
          "The verified source status supports checking safety-relevant medical condition, Class 2 standard, change in medical condition, impaired efficiency, fatigue, alcohol and psychoactive substance limits."
        ],
        "common_traps": [
          "Do not reduce fitness assessment to a single IMSAFE-style memory aid unless the legal conditions are still checked.",
          "Do not ignore medication or a changed condition just because the underlying illness seems minor.",
          "Do not treat fatigue, alcohol and psychoactive substance rules as separate from IFR fitness for duty."
        ],
        "worked_examples": "TODO: Add self-assessment examples after selecting source-backed medical/fatigue/substance fact patterns.",
        "exam_use": [
          "Start with CASR 91.520 for the operational fitness rule.",
          "Use CASR Part 67 sections in the reference table when the question turns on medical certificate status or medical condition reporting."
        ]
      }
    },
    {
      "id": "PIFR-089",
      "mos_ref": "17.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 17.1.1",
      "objective": "State the part played by the vestibular systems, namely the semicircular canals and otiliths, in helping the pilot maintain orientation.",
      "section_no": "17",
      "section_title": "Human factors relevant to IFR operations",
      "element_no": null,
      "element_title": null,
      "module": "Human Factors",
      "module_slug": "human-factors",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "CASR Part 67 medical standard 2 criteria, including regulation 67.155 table items 2.7, 2.26 and 2.31-2.34",
        "Part 91": "CASR 91.520",
        "Part 91 MOS": "TODO",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified medical/fitness hooks only against current CASR 1998 compilation 101 (F2026C00286). CASR Part 67 recognises nervous-system, vestibular-apparatus and visual-function relevance, and CASR 91.520 covers crew fitness for duty. It does not explain the functional role of semicircular canals and otoliths in orientation; leave that theory as TODO until a verified public official source is identified.",
      "study_file": "docs/09-study-guide/PIFR-089.md",
      "study": {
        "why": "Vestibular orientation is central to IFR human factors, but the verified sources currently support medical relevance rather than the detailed physiology.",
        "study_notes": [
          "CASR Part 67 medical standard 2 criteria, including regulation 67.155 table items 2.7, 2.26 and 2.31 to 2.34, provide the mapped medical relevance hooks.",
          "CASR 91.520 provides the crew fitness for duty reference.",
          "The current verified sources recognise nervous-system, vestibular-apparatus and visual-function relevance but do not explain semicircular canal or otolith function."
        ],
        "common_traps": [
          "Do not fill vestibular physiology from unsupported memory.",
          "Do not treat medical fitness hooks as a full explanation of orientation mechanisms.",
          "Do not merge this objective with the illusion/aggravating-circumstances objectives."
        ],
        "worked_examples": "TODO: Add vestibular-system explanations only after verifying a public official source for the physiology.",
        "exam_use": [
          "Use CASR 91.520 and CASR Part 67 for legal/medical hooks.",
          "Use the source-gap register before adding semicircular canal or otolith theory."
        ]
      }
    },
    {
      "id": "PIFR-090",
      "mos_ref": "17.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 17.1.2",
      "objective": "State what circumstances aggravate vestibular disorientation, and how to overcome this problem.",
      "section_no": "17",
      "section_title": "Human factors relevant to IFR operations",
      "element_no": null,
      "element_title": null,
      "module": "Human Factors",
      "module_slug": "human-factors",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "CASR Part 67 medical standard 2 criteria, including regulation 67.155 table items 2.1-2.4, 2.7, 2.26 and 2.31-2.34",
        "Part 91": "CASR 91.520",
        "Part 91 MOS": "TODO",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified medical/fitness hooks only against current CASR 1998 compilation 101 (F2026C00286). Official sources support the safety relevance of functional incapacity, medication side effects, mental fitness, nervous-system issues, vestibular disturbance and visual function. Circumstances aggravating vestibular disorientation and recovery techniques remain TODO for a verified public official source.",
      "study_file": "docs/09-study-guide/PIFR-090.md",
      "study": {
        "why": "Vestibular-disorientation aggravating factors and recovery technique are critical IFR knowledge, but the detailed theory is not in the current verified source cache.",
        "study_notes": [
          "CASR Part 67 medical standard 2 criteria provide verified hooks for functional incapacity, medication side effects, mental fitness, nervous-system issues, vestibular disturbance and visual function.",
          "CASR 91.520 provides the crew fitness for duty reference.",
          "Circumstances aggravating vestibular disorientation and recovery techniques remain a source gap until a public official source is verified."
        ],
        "common_traps": [
          "Do not invent recovery technique from memory or commercial training notes.",
          "Do not treat medication/fatigue/medical fitness references as a complete vestibular-disorientation lesson.",
          "Keep this objective separate from specific named illusion causes in PIFR-091."
        ],
        "worked_examples": "TODO: Add disorientation aggravation/recovery examples only after verifying a public official source.",
        "exam_use": [
          "Use CASR 91.520/Part 67 for fitness and medical relevance.",
          "Treat detailed disorientation prevention/recovery theory as unresolved until sourced."
        ]
      }
    },
    {
      "id": "PIFR-091",
      "mos_ref": "17.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 17.1.3",
      "objective": "State what causes, and may aggravate, vestibular disorientation such as somatogravic illusions, somatogyral illusions and 'graveyard spiral', coriolis effect, and 'leans'.",
      "section_no": "17",
      "section_title": "Human factors relevant to IFR operations",
      "element_no": null,
      "element_title": null,
      "module": "Human Factors",
      "module_slug": "human-factors",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "CASR Part 67 medical standard 2 criteria, including regulation 67.155 table items 2.7, 2.26 and 2.31-2.34",
        "Part 91": "CASR 91.520",
        "Part 91 MOS": "TODO",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified medical/fitness hooks only against current CASR 1998 compilation 101 (F2026C00286). Official sources support the safety relevance of nervous-system, vestibular and visual function, but do not explain somatogravic illusions, somatogyral illusions, graveyard spiral, coriolis effect or leans. Leave detailed illusion theory as TODO until a verified public official source is identified.",
      "study_file": "docs/09-study-guide/PIFR-091.md",
      "study": {
        "why": "Named vestibular illusions are high-value IFR human-factors items, but the verified CASA/CASR references only establish safety relevance, not the detailed causes.",
        "study_notes": [
          "CASR Part 67 medical standard 2 criteria and CASR 91.520 provide the mapped medical and fitness hooks.",
          "The current verified sources support relevance of nervous-system, vestibular and visual function.",
          "Somatogravic illusions, somatogyral illusions, graveyard spiral, coriolis effect and leans remain a source gap for verified public official theory material."
        ],
        "common_traps": [
          "Do not define named illusions from unsupported memory.",
          "Do not use broad vestibular medical criteria as if they explain each named illusion.",
          "Do not merge visual illusions from PIFR-092 into this vestibular-illusion objective."
        ],
        "worked_examples": "TODO: Add named vestibular illusion examples only after verifying a public official source.",
        "exam_use": [
          "Use mapped CASR references for medical/fitness relevance only.",
          "Use the source-gap register before adding named illusion theory."
        ]
      }
    },
    {
      "id": "PIFR-092",
      "mos_ref": "17.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 17.1.4",
      "objective": "State conditions and causes under which visual illusions, such as 'false horizons', visual-cue illusions, relative motion illusions, 'flicker' effect', black hole' illusion, and autokinesis may occur.",
      "section_no": "17",
      "section_title": "Human factors relevant to IFR operations",
      "element_no": null,
      "element_title": null,
      "module": "Human Factors",
      "module_slug": "human-factors",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "CASR Part 67 medical standard 2 criteria, including regulation 67.155 table items 2.31-2.39",
        "Part 91": "CASR 91.520",
        "Part 91 MOS": "TODO",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified medical/fitness hooks only against current CASR 1998 compilation 101 (F2026C00286). Official sources support the safety relevance of visual function, fields of vision, binocular vision, acuity and colour perception. Visual-illusion theory for false horizons, visual-cue illusions, relative motion, flicker effect, black-hole illusion and autokinesis remains TODO for a verified public official source.",
      "study_file": "docs/09-study-guide/PIFR-092.md",
      "study": {
        "why": "Visual illusions are explicitly listed in the MOS, but the current verified sources only support visual-function medical relevance.",
        "study_notes": [
          "CASR Part 67 medical standard 2 criteria, including visual-function table items, provide the mapped medical relevance hooks.",
          "CASR 91.520 provides the crew fitness for duty reference.",
          "False horizons, visual-cue illusions, relative motion, flicker effect, black-hole illusion and autokinesis remain a source gap for verified public official theory material."
        ],
        "common_traps": [
          "Do not fill visual-illusion causes from unsupported memory.",
          "Do not treat visual acuity/colour/field requirements as a theory explanation of visual illusions.",
          "Do not merge visual illusions with vestibular illusions."
        ],
        "worked_examples": "TODO: Add visual-illusion examples only after verifying a public official source.",
        "exam_use": [
          "Use CASR Part 67 and CASR 91.520 for legal/medical hooks.",
          "Treat detailed visual-illusion theory as unresolved until sourced."
        ]
      }
    },
    {
      "id": "PIFR-093",
      "mos_ref": "17.1.5",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 17.1.5",
      "objective": "Be aware of the human factors limitations associated with the use of GNSS equipment to provide safeguards against navigational errors and loss of situational awareness because of the following: (a) mode errors; (b) data entry errors; (c) data validation and checking, including independent cross-checking procedures; (d) automation induced complacency; (e) non-standardisation of the GNSS receiver units; (f) human information processing and situational awareness.",
      "section_no": "17",
      "section_title": "Human factors relevant to IFR operations",
      "element_no": null,
      "element_title": null,
      "module": "Human Factors",
      "module_slug": "human-factors",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of approved GNSS and navigation database; sections 14.02, 14.05-14.07",
        "AIP reference": "AIP GEN 1.5 section 2; AIP ENR 1.1 sections 4.4, 4.8 and 6.3; AIP ENR 4.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational GNSS references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources cover approved GNSS, navigation database use, single-pilot data checking, procedure loading by name, waypoint alteration limits, GNSS substitution limits, RAIM/integrity handling and distance-reporting constraints. Human-factors theory for mode errors, data-entry errors, automation complacency, receiver non-standardisation, information processing and situational awareness remains TODO for a verified public official source.",
      "study_file": "docs/09-study-guide/PIFR-093.md",
      "study": {
        "why": "GNSS human factors link approved navigation equipment with practical error management and situational awareness, but the current verified sources cover operational GNSS checks more strongly than human-factors theory.",
        "study_notes": [
          "Part 91 MOS 1.07, 14.02 and 14.05 to 14.07 provide verified references for approved GNSS, navigation databases, data checking, procedure loading and GNSS operational constraints.",
          "AIP GEN 1.5 section 2, AIP ENR 1.1 sections 4.4, 4.8 and 6.3 and AIP ENR 4.3 provide mapped AIP GNSS operational locators.",
          "Mode errors, data-entry errors, automation complacency, receiver non-standardisation, human information processing and situational awareness remain a source gap for verified public official human-factors theory."
        ],
        "common_traps": [
          "Do not treat a valid database as proof that the pilot selected the correct procedure or waypoint.",
          "Do not skip independent cross-checking where the MOS/AIP requires data checking.",
          "Do not add automation-complacency theory without clearly separating it from verified operational references."
        ],
        "worked_examples": "TODO: Add GNSS human-factors examples only after verifying public official theory material or clearly labelling operational GNSS check scenarios.",
        "exam_use": [
          "Use Part 91 MOS 14.05 to 14.07 for operational GNSS data-checking and use constraints.",
          "Use AIP ENR 1.1 section 4.8 for operational GNSS procedure.",
          "Use the source-gap register before adding broader GNSS human-factors theory."
        ]
      }
    },
    {
      "id": "PIFR-004",
      "mos_ref": "3.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 3.1.1",
      "objective": "List the mandatory flight instruments that must be installed and serviceable for conducting an IFR flight.",
      "section_no": "3",
      "section_title": "Aircraft instruments, radios and equipment",
      "element_no": null,
      "element_title": null,
      "module": "Aircraft IFR Equipment",
      "module_slug": "aircraft-ifr-equipment",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.810",
        "Part 91 MOS": "Part 91 MOS Chapter 26 sections 26.01-26.04; aeroplane IFR flight instruments in section 26.08(3)-26.08(4) and Table 26.08(4); rotorcraft IFR flight instruments in section 26.12(4)-26.12(7) and Table 26.12(7)",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286) and current Part 91 MOS compilation 7 (F2026C00214). Covers mandatory IFR flight information displays, approval, visibility/accessibility and serviceability; use aeroplane or rotorcraft provisions as applicable.",
      "study_file": "docs/09-study-guide/PIFR-004.md",
      "study": {
        "why": "Mandatory IFR flight instruments are direct exam material and are also the baseline for deciding whether an IFR flight may proceed.",
        "study_notes": [
          "CASR 91.810 is the legal hook for required equipment.",
          "Part 91 MOS Chapter 26 contains the detailed IFR flight instrument requirements.",
          "Use the aeroplane provisions in Part 91 MOS 26.08 or rotorcraft provisions in 26.12 as applicable.",
          "The requirement is not just carriage; the equipment must meet the approval, visibility, accessibility and serviceability rules in the MOS."
        ],
        "common_traps": [
          "Do not mix aeroplane and rotorcraft tables.",
          "Check serviceability and approval requirements, not just whether the instrument is installed."
        ],
        "worked_examples": "TODO: Add aircraft panel examples after selecting the aircraft type.",
        "exam_use": [
          "Start with CASR 91.810, then go to Part 91 MOS Chapter 26.",
          "Use 26.08 for aeroplanes and 26.12 for rotorcraft."
        ]
      }
    },
    {
      "id": "PIFR-005",
      "mos_ref": "3.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 3.1.2",
      "objective": "List the mandatory electrical lighting equipment that must be installed and serviceable for conducting an IFR flight.",
      "section_no": "3",
      "section_title": "Aircraft instruments, radios and equipment",
      "element_no": null,
      "element_title": null,
      "module": "Aircraft IFR Equipment",
      "module_slug": "aircraft-ifr-equipment",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.810",
        "Part 91 MOS": "Part 91 MOS Chapter 26 sections 26.01-26.04 and Division 26.7, sections 26.21-26.24",
        "AIP reference": "AIP ENR 1.1 sections 9.2.6, 10.10.1 and 11.2.6 for operational use/reporting context only",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Mandatory lighting is in Part 91 MOS Division 26.7; AIP entries are operational context and do not replace the MOS equipment rules.",
      "study_file": "docs/09-study-guide/PIFR-005.md",
      "study": {
        "why": "Lighting equipment questions often look operational, but the enforceable IFR equipment list sits in the Part 91 MOS.",
        "study_notes": [
          "Part 91 MOS Chapter 26 provides the mandatory lighting equipment rules.",
          "Division 26.7 and sections 26.21 to 26.24 are the key lighting locators.",
          "AIP lighting references provide operational context, but do not replace the MOS equipment requirement."
        ],
        "common_traps": [
          "Do not answer an equipment-fit question from aerodrome lighting procedures.",
          "Check whether the question is asking about installed/serviceable aircraft lighting or aerodrome lighting."
        ],
        "worked_examples": "TODO: Add day/night IFR lighting examples.",
        "exam_use": [
          "Use Part 91 MOS Division 26.7 for the equipment list.",
          "Use AIP only when the question is operational rather than equipment-fit focused."
        ]
      }
    },
    {
      "id": "PIFR-006",
      "mos_ref": "3.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 3.1.3",
      "objective": "List the mandatory aircraft radio communications equipment that must be installed and serviceable for conducting an IFR flight.",
      "section_no": "3",
      "section_title": "Aircraft instruments, radios and equipment",
      "element_no": null,
      "element_title": null,
      "module": "Aircraft IFR Equipment",
      "module_slug": "aircraft-ifr-equipment",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.810",
        "Part 91 MOS": "Part 91 MOS Chapter 26 sections 26.01-26.04, 26.18 and 26.19",
        "AIP reference": "AIP GEN 1.5 section 1",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers radio capability for all required reporting, broadcast and listening-watch frequencies, 2-way voice, 121.5 MHz and limited dispatch with inoperative radio.",
      "study_file": "docs/09-study-guide/PIFR-006.md",
      "study": {
        "why": "IFR communication equipment is tested because it drives whether the aircraft can comply with reporting, broadcast and listening-watch requirements.",
        "study_notes": [
          "Part 91 MOS Chapter 26 sections 26.18 and 26.19 are the key communication equipment references.",
          "The equipment must support required reporting, broadcast and listening-watch frequencies.",
          "The mapped AIP references provide operational frequency and communication context for the equipment rules."
        ],
        "common_traps": [
          "Do not confuse radio carriage/serviceability with phraseology procedure.",
          "Check 121.5 MHz and required operational frequencies where the question asks about capability."
        ],
        "worked_examples": "TODO: Add communication-equipment serviceability scenarios.",
        "exam_use": [
          "Use Part 91 MOS 26.18 and 26.19 for the equipment answer.",
          "Use AIP/ERSA references for frequency and procedure context."
        ]
      }
    },
    {
      "id": "PIFR-007",
      "mos_ref": "3.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 3.1.4",
      "objective": "List the mandatory radio navigation equipment that must be installed and serviceable for conducting an IFR flight.",
      "section_no": "3",
      "section_title": "Aircraft instruments, radios and equipment",
      "element_no": null,
      "element_title": null,
      "module": "Aircraft IFR Equipment",
      "module_slug": "aircraft-ifr-equipment",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.810",
        "Part 91 MOS": "Part 91 MOS Chapter 26 sections 26.01-26.04; aeroplane IFR navigation equipment in section 26.08(1)-26.08(2); rotorcraft IFR navigation equipment in section 26.12(1)-26.12(2)",
        "AIP reference": "AIP GEN 1.5 section 2; AIP GEN 2.2 sections 3.11-3.12",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers mandatory approved GNSS fitment rules, legacy (E)TSO-C129 cases, barometric aiding options, and AIP references to Part 91 MOS navigation-equipment requirements.",
      "study_file": "docs/09-study-guide/PIFR-007.md",
      "study": {
        "why": "Navigation equipment requirements determine whether the aircraft can legally conduct the planned IFR route or procedure.",
        "study_notes": [
          "Part 91 MOS Chapter 26 contains mandatory IFR navigation equipment requirements.",
          "For aeroplanes, use Part 91 MOS 26.08(1) to 26.08(2).",
          "For rotorcraft, use Part 91 MOS 26.12(1) to 26.12(2).",
          "The mapped references include approved GNSS fitment and legacy equipment cases; do not infer equipment approval from capability alone."
        ],
        "common_traps": [
          "Do not assume a portable or uncertified receiver satisfies an approved IFR navigation equipment requirement.",
          "Check the aircraft category before using the MOS equipment table."
        ],
        "worked_examples": "TODO: Add aircraft equipment-fit examples after selecting avionics examples.",
        "exam_use": [
          "Use Part 91 MOS Chapter 26 first.",
          "Cross-check GNSS-related equipment questions against AIP GEN 1.5 and the Part 91 MOS GNSS definitions."
        ]
      }
    },
    {
      "id": "PIFR-008",
      "mos_ref": "3.1.5",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 3.1.5",
      "objective": "Extract from an aircraft flight manual information about the limitations that are specified for operating a particular type of aircraft under the IFR.",
      "section_no": "3",
      "section_title": "Aircraft instruments, radios and equipment",
      "element_no": null,
      "element_title": null,
      "module": "Aircraft IFR Equipment",
      "module_slug": "aircraft-ifr-equipment",
      "exam_importance": "Medium",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.095, 91.105, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 26.02, 26.04 and 28.06",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286) and current Part 91 MOS compilation 7 (F2026C00214). Covers compliance with aircraft flight manual instructions, carriage of aircraft flight manual instructions, approval/serviceability of required equipment, and MEL limits where AFM conditions, limitations or emergency procedures apply.",
      "study_file": "docs/09-study-guide/PIFR-008.md",
      "study": {
        "why": "AFM limitations can override a generic assumption about what the aircraft may do under IFR.",
        "study_notes": [
          "CASR 91.095 supports compliance with aircraft flight manual instructions.",
          "Part 91 MOS 26.02 and 26.04 support approval and serviceability of required equipment.",
          "Part 91 MOS 28.06 is relevant where MEL conditions, limitations or procedures apply.",
          "The objective requires extracting information from the aircraft flight manual, so aircraft-specific examples must come from AFM/POH source material."
        ],
        "common_traps": [
          "Do not treat a general IFR rule as permission if the aircraft flight manual is more restrictive.",
          "Do not add aircraft-specific limitations without a cited AFM/POH source."
        ],
        "worked_examples": "TODO: Add AFM/POH limitation examples after selecting aircraft source material.",
        "exam_use": [
          "Use CASR 91.095 for the instruction-compliance hook.",
          "Use the AFM/POH limitation section for the aircraft-specific answer."
        ]
      }
    },
    {
      "id": "PIFR-044",
      "mos_ref": "10.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 10.1.1",
      "objective": "State the safety precautions that must be observed when operating aircraft radar equipment on the ground.",
      "section_no": "10",
      "section_title": "Operation of aircraft equipment",
      "element_no": null,
      "element_title": null,
      "module": "Aircraft IFR Equipment",
      "module_slug": "aircraft-ifr-equipment",
      "exam_importance": "Medium",
      "status": "MOS only",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "TODO",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Source gap: the current verified CASA/Airservices source cache contains references to airborne weather radar equipment but not the MOS-listed ground-operation safety precautions themselves. Leave non-MOS references as TODO until a current public CASA or Airservices source is verified.",
      "study_file": "docs/09-study-guide/PIFR-044.md",
      "study": {
        "why": "This is a MOS objective, but the current verified CASA/Airservices cache does not yet contain the ground radar safety precautions themselves.",
        "study_notes": [
          "The MOS objective remains in scope and traceable.",
          "Do not fill this from memory or commercial training material.",
          "The source gap is recorded in the cross-reference gap register until a current public CASA or Airservices source is verified."
        ],
        "common_traps": [
          "Do not confuse airborne weather radar equipment carriage references with ground-operation safety precautions.",
          "Do not invent distance or exposure limits without a verified source."
        ],
        "worked_examples": "TODO: Add examples only after verifying an official source for radar ground safety precautions.",
        "exam_use": [
          "Treat this as a source-gap item for now.",
          "Use the MOS objective wording as the master scope until a verified public source is found."
        ]
      }
    },
    {
      "id": "PIFR-045",
      "mos_ref": "10.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 10.1.2",
      "objective": "State the pre-flight altimeter accuracy check for an IFR flight.",
      "section_no": "10",
      "section_title": "Operation of aircraft equipment",
      "element_no": null,
      "element_title": null,
      "module": "Aircraft IFR Equipment",
      "module_slug": "aircraft-ifr-equipment",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.245, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 10.02(i), 10.03-10.06; Chapter 26 pressure-altitude display requirements in sections 26.08 and 26.12",
        "AIP reference": "AIP ENR 1.7 sections 1.1-1.4",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers the pre-takeoff pressure-altitude system accuracy check when the aircraft is at a known elevation and accurate QNH is available, IFR 60 ft/75 ft tolerances, accurate QNH sources, and site-elevation source requirements.",
      "study_file": "docs/09-study-guide/PIFR-045.md",
      "study": {
        "why": "The pre-flight altimeter accuracy check is a precise procedural item and is easy to answer quickly when the MOS section is located.",
        "study_notes": [
          "Part 91 MOS section 10.06 is the primary locator for accurate QNH and altimeter accuracy checks.",
          "AIP ENR 1.7 provides operational altimetry context.",
          "The mapped references also connect QNH source rules for instrument approaches where relevant."
        ],
        "common_traps": [
          "Do not use forecast QNH where the rule requires an actual or accurate QNH source.",
          "Do not mix pre-flight altimeter check requirements with transition altitude/level procedures."
        ],
        "worked_examples": "TODO: Add altimeter accuracy check examples.",
        "exam_use": [
          "Go to Part 91 MOS 10.06 for the check requirement.",
          "Use AIP ENR 1.7 for broader altimetry procedure context."
        ]
      }
    },
    {
      "id": "PIFR-046",
      "mos_ref": "10.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 10.1.3",
      "objective": "Apply altimetry procedures to all stages of an IFR flight.",
      "section_no": "10",
      "section_title": "Operation of aircraft equipment",
      "element_no": null,
      "element_title": null,
      "module": "Aircraft IFR Equipment",
      "module_slug": "aircraft-ifr-equipment",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.245, 91.287, 91.305",
        "Part 91 MOS": "Part 91 MOS sections 10.03-10.06, 11.02 and 14.03",
        "AIP reference": "AIP ENR 1.7 sections 1.1-2.2; AIP ENR 1.5 section 5.3; AIP GEN 3.4 section 5.11.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "Part 91 MOS section 1.07 definition of area QNH notes QNH areas are on Planning Chart Australia"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers preflight altimeter checks, accurate/local/area QNH, transition altitude and transition level, prohibition on cruising in the transition layer, 1013.2 hPa above transition altitude, QNH below transition altitude, climb/descent setting changes, and QNH sources/minima adjustments for instrument approaches.",
      "study_file": "docs/09-study-guide/PIFR-046.md",
      "study": {
        "why": "Altimetry applies throughout the IFR flight, so exam questions may move between QNH, transition layer, cruising levels and instrument approach settings.",
        "study_notes": [
          "Part 91 MOS Chapter 10 contains the altimetry rules.",
          "AIP ENR 1.7 is the operational locator for altimeter setting procedures and cruising level context.",
          "Part 91 MOS 14.03 is relevant before passing the IAF because it identifies QNH sources for instrument approaches."
        ],
        "common_traps": [
          "Do not answer an approach-QNH question from a cruise-level rule.",
          "Check whether the question is pre-flight, climb, cruise, descent, approach or missed approach."
        ],
        "worked_examples": "TODO: Add staged-flight altimetry examples.",
        "exam_use": [
          "Use Part 91 MOS Chapter 10 for legal rules.",
          "Use AIP ENR 1.7 for operational procedure lookup.",
          "Use Part 91 MOS 14.03 for instrument approach QNH source questions."
        ]
      }
    },
    {
      "id": "PIFR-047",
      "mos_ref": "10.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 10.1.4",
      "objective": "Describe the correct use of a transponder, and the associated radio phraseology, in all classes of airspace.",
      "section_no": "10",
      "section_title": "Operation of aircraft equipment",
      "element_no": null,
      "element_title": null,
      "module": "Aircraft IFR Equipment",
      "module_slug": "aircraft-ifr-equipment",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.810",
        "Part 91 MOS": "Part 91 MOS Division 26.16, sections 26.67-26.70, especially 26.68, 26.69 and Tables 26.69(7)-26.69(7A)",
        "AIP reference": "AIP ENR 1.6 sections 6.4-6.5 and 7.1; AIP GEN 3.4 section 6.17.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers approved surveillance equipment, continuous transponder/surveillance operation when required, assigned and standard Mode A codes, emergency codes 7500/7600/7700, altitude reporting, Mode S/ADS-B concepts, operating transponders in Australian airspace, IDENT restrictions, standby/code-change procedures and standard SSR/ADS-B phraseology.",
      "study_file": "docs/09-study-guide/PIFR-047.md",
      "study": {
        "why": "Transponder questions combine equipment operation, assigned codes, emergencies and readback/phraseology.",
        "study_notes": [
          "CASR 91.810 is the legal hook for required equipment.",
          "Part 91 MOS Division 26.16, especially sections 26.68 and 26.69, contains the transponder and surveillance equipment requirements and code tables.",
          "AIP ENR 1.6 provides ATS surveillance and transponder operating context.",
          "AIP GEN 3.4 section 6.17.6 provides standard SSR/ADS-B phraseology context."
        ],
        "common_traps": [
          "Do not confuse conspicuity/transponder carriage with the code or mode ATC wants selected.",
          "Emergency codes and radio failure codes need exact lookup, not approximation."
        ],
        "worked_examples": "TODO: Add code-selection and phraseology examples.",
        "exam_use": [
          "Use Part 91 MOS 26.69 for transponder code tables.",
          "Use AIP ENR 1.6 and AIP GEN 3.4 for surveillance operational context and phraseology."
        ]
      }
    },
    {
      "id": "PIFR-015",
      "mos_ref": "5.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 5.1.2",
      "objective": "Extract relevant information from operational documents for an IFR flight.",
      "section_no": "5",
      "section_title": "Documentation for IFR flight",
      "element_no": null,
      "element_title": null,
      "module": "Flight Planning And Documentation",
      "module_slug": "flight-planning-and-documentation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.095, 91.100, 91.105, 91.110, 91.230, 91.235, 91.240",
        "Part 91 MOS": "Part 91 MOS sections 7.02-7.03, Division 8.2, Chapter 9 and Chapter 19",
        "AIP reference": "AIP ENR 1.10 sections 1.1-1.3, 2.1-2.22 and 5; AIP GEN 3.1 section 5; AIP GEN 3.2 section 5",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers extracting IFR flight-planning information from weather, NOTAM, aerodrome, route, chart, authorised aeronautical information, flight notification and aircraft document sources.",
      "study_file": "docs/09-study-guide/PIFR-015.md",
      "study": {
        "why": "This objective turns the permitted documents into a practical pre-flight workflow: weather, NOTAM, aerodrome, route, chart, aircraft and flight notification information all have to be extracted from the correct source.",
        "study_notes": [
          "Use CASR 91.095 to 91.110 for document and authorised aeronautical information requirements.",
          "Use CASR 91.230, 91.235 and 91.240 for weather, alternate and flight notification legal hooks.",
          "Part 91 MOS Chapters 7, 8, 9 and 19 are the main pre-flight planning chapters for weather, alternates, flight notification and fuel.",
          "AIP ENR 1.10 and AIP GEN 3.1/3.2 identify operational information, chart products and briefing/publication sources."
        ],
        "common_traps": [
          "Do not use one document type to answer every planning question; identify whether the question is about weather, NOTAM, route, chart, fuel, aircraft documents or flight notification.",
          "Do not treat extracted operational information as current unless the source cycle and validity are checked."
        ],
        "worked_examples": "TODO: Add a document-extraction checklist for a sample IFR trip.",
        "exam_use": [
          "Start with the question noun: forecast, NOTAM, chart, flight plan, alternate, fuel or aircraft document.",
          "Then move to the matching MOS chapter or AIP section from the official reference table."
        ]
      }
    },
    {
      "id": "PIFR-016",
      "mos_ref": "5.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 5.1.3",
      "objective": "Describe the meteorological forecasts required for conducting an IFR flight.",
      "section_no": "5",
      "section_title": "Documentation for IFR flight",
      "element_no": null,
      "element_title": null,
      "module": "Flight Planning And Documentation",
      "module_slug": "flight-planning-and-documentation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.230",
        "Part 91 MOS": "Part 91 MOS Chapter 7, sections 7.01-7.03, especially 7.02(1)-7.02(6)",
        "AIP reference": "AIP ENR 1.10 section 1.2; AIP GEN 3.5 sections 4.3-4.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Required forecasts include route, departure, destination and alternates; GAF/GAMET or SIGWX/flight forecast as applicable; wind and temperature forecast; and aerodrome/ICAO landing forecast requirements for IFR destination and alternate planning.",
      "study_file": "docs/09-study-guide/PIFR-016.md",
      "study": {
        "why": "Forecast requirements are high-value exam material because IFR planning requires the correct forecast type for the route, destination and alternates.",
        "study_notes": [
          "Part 91 MOS 7.02 is the primary source for forecasts required before flight.",
          "For route weather, identify whether the operation is at or below 10,000 ft, above 10,000 ft, or requires a flight forecast.",
          "For IFR destination and alternate planning, check whether the planned destination has an IAP the pilot can conduct.",
          "The MOS validity rule for destination and alternate aerodrome forecasts is separate from the general route-forecast requirement."
        ],
        "common_traps": [
          "Do not confuse route forecast requirements with destination aerodrome forecast requirements.",
          "Do not ignore the 30 minutes before and 60 minutes after ETA validity window for IFR destination and alternate forecasts.",
          "If briefing was obtained more than 1 hour before departure, check the MOS update requirement."
        ],
        "worked_examples": "TODO: Add forecast-selection examples for GAF/TAF/ICAO landing forecast scenarios.",
        "exam_use": [
          "Go directly to Part 91 MOS 7.02.",
          "Use AIP GEN 3.5 for product names and availability context after the MOS requirement is identified."
        ]
      }
    },
    {
      "id": "PIFR-017",
      "mos_ref": "5.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 5.1.4",
      "objective": "State sources of, and actions to obtain, meteorological forecasts for IFR flights.",
      "section_no": "5",
      "section_title": "Documentation for IFR flight",
      "element_no": null,
      "element_title": null,
      "module": "Flight Planning And Documentation",
      "module_slug": "flight-planning-and-documentation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.230",
        "Part 91 MOS": "Part 91 MOS sections 7.02-7.03",
        "AIP reference": "AIP ENR 1.10 sections 1.1-1.2; AIP GEN 3.5 sections 1.3, 4 and 5.2-5.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Sources/actions include studying authorised forecasts/reports and reasonably available weather information, using NAIPS/briefing systems, Airservices Pilot Briefing Office, BoM aviation resources and relevant meteorological offices.",
      "study_file": "docs/09-study-guide/PIFR-017.md",
      "study": {
        "why": "The exam can ask both what forecast sources exist and what action the pilot must take to obtain or update them.",
        "study_notes": [
          "Part 91 MOS 7.02 requires the pilot in command to study authorised forecasts/reports and other reasonably available relevant weather information.",
          "Part 91 MOS 7.03 deals with the limited case where an authorised forecast or report is not available before departure.",
          "AIP GEN 3.5 identifies BoM aviation weather resources, meteorological offices, Airservices briefing pathways and routine/non-routine product availability."
        ],
        "common_traps": [
          "Do not treat a source list as satisfying the legal study/update requirement by itself.",
          "If the question says a forecast was unavailable before departure, check MOS 7.03 rather than guessing."
        ],
        "worked_examples": "TODO: Add pre-flight weather-source workflow using NAIPS/AIP/BoM references.",
        "exam_use": [
          "Use Part 91 MOS 7.02 for required pilot action.",
          "Use AIP GEN 3.5 for where the products and services are described."
        ]
      }
    },
    {
      "id": "PIFR-018",
      "mos_ref": "5.1.5",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 5.1.5",
      "objective": "Determine the validity of a meteorological forecast for an IFR flight.",
      "section_no": "5",
      "section_title": "Documentation for IFR flight",
      "element_no": null,
      "element_title": null,
      "module": "Flight Planning And Documentation",
      "module_slug": "flight-planning-and-documentation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.230",
        "Part 91 MOS": "Part 91 MOS section 7.02(1A), 7.02(3), 7.02(6), 7.03",
        "AIP reference": "AIP ENR 1.10 sections 1.2.4-1.2.7; AIP GEN 3.5 sections 4.7-4.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers whole-period forecast coverage, aerodrome forecast validity from at least 30 minutes before to 60 minutes after ETA, updates when briefing is more than 1 hour old, delayed-flight updates, TAF/GAF validity and no-forecast departure conditions.",
      "study_file": "docs/09-study-guide/PIFR-018.md",
      "study": {
        "why": "Forecast validity questions are usually solved by applying a specific timing rule rather than interpreting the weather content.",
        "study_notes": [
          "Part 91 MOS 7.02 contains the forecast validity rules for whole flight coverage and destination/alternate ETA windows.",
          "A forecast studied more than 1 hour before flight requires an update before the flight begins.",
          "Part 91 MOS 7.03 provides the rule set for flights unable to obtain an authorised forecast before departure.",
          "AIP GEN 3.5 describes TAF, GAF and related product validity context."
        ],
        "common_traps": [
          "Do not use issue time alone; check the validity period against the flight or ETA requirement.",
          "Do not apply the aerodrome forecast ETA window to every route forecast product."
        ],
        "worked_examples": "TODO: Add validity-window calculations for destination and alternate forecasts.",
        "exam_use": [
          "For validity, use Part 91 MOS 7.02 before checking AIP product descriptions.",
          "For no-forecast-before-departure scenarios, use Part 91 MOS 7.03."
        ]
      }
    },
    {
      "id": "PIFR-019",
      "mos_ref": "5.1.6",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 5.1.6",
      "objective": "State what meteorological broadcast services are available in Australia for the flight.",
      "section_no": "5",
      "section_title": "Documentation for IFR flight",
      "element_no": null,
      "element_title": null,
      "module": "Flight Planning And Documentation",
      "module_slug": "flight-planning-and-documentation",
      "exam_importance": "Medium",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS definitions of ATIS and AWIS in section 1.07; section 14.03 for QNH sources",
        "AIP reference": "AIP GEN 3.4 sections 4.2, 4.3 and 4.6; AIP GEN 3.5 sections 7 and 9; AIP ENR 1.5 section 5.3",
        "ERSA reference": "ERSA GEN FIS - In Flight Information Services (19 MAR 2026); ERSA NAV/COMM - Navigation and Communication (19 MAR 2026)",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214), AIP Book Amendment 126 current 19 MAR 2026, and ERSA current 19 MAR 2026. Covers AAIS/CA-GRS, UNICOM weather-report limits, ATIS, VOLMET, AWIS/WATIR, QNH-source context, FIS request/availability guidance, AWIS locations not listed in ERSA-FAC and NAV/COMM frequency lookup.",
      "study_file": "docs/09-study-guide/PIFR-019.md",
      "study": {
        "why": "Weather broadcast services are practical exam-index topics: the answer is usually found by knowing whether to look in AIP GEN 3.4, AIP GEN 3.5, ERSA GEN FIS or ERSA NAV/COMM.",
        "study_notes": [
          "Part 91 MOS section 1.07 defines ATIS and AWIS, and section 14.03 identifies QNH sources for instrument approaches.",
          "AIP GEN 3.4 covers communication services such as AAIS/CA-GRS, UNICOM context and ATIS-related services.",
          "AIP GEN 3.5 covers VOLMET and meteorological services.",
          "ERSA GEN FIS and ERSA NAV/COMM provide current service and frequency lookup context."
        ],
        "common_traps": [
          "Do not assume every aerodrome has the same weather broadcast services.",
          "Use ERSA for current frequencies/locations rather than relying on AIP service descriptions alone."
        ],
        "worked_examples": "TODO: Add service-lookup examples for ATIS, AWIS/WATIR and VOLMET.",
        "exam_use": [
          "Use AIP GEN 3.4/3.5 to identify the type of service.",
          "Use ERSA GEN FIS and NAV/COMM to locate current availability and frequencies."
        ]
      }
    },
    {
      "id": "PIFR-028",
      "mos_ref": "7.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 7.1.1",
      "objective": "Select a route for IFR flight with respect to the following: (a) forecast weather; (b) controlled airspace; (c) PRDs; (d) engine out performance for multi-engine aircraft; (e) specified route limitations; (f) airways operational requirements; (g) the availability of the following: (i) published routes; (ii) en route alternate aerodromes; (iii) navigation aids; (iv) rated coverage of navigation aids; (v) radio communication.",
      "section_no": "7",
      "section_title": "Selection of IFR routes",
      "element_no": null,
      "element_title": null,
      "module": "Flight Planning And Documentation",
      "module_slug": "flight-planning-and-documentation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.230, 91.235, 91.240, 91.245, 91.255, 91.260, 91.287, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 7.02-7.03, 8.04-8.08, 9.02-9.03, 10.02, 11.19-11.23, 14.02, 21.05-21.06, 26.02-26.04, 26.08, 26.12 and 26.18-26.19",
        "AIP reference": "AIP ENR 1.1 sections 4.1, 5.1-5.1.5 and 6.1; AIP ENR 1.10 sections 1.1-1.3, 2.1-2.22 and 3.5; AIP ENR 5.1 sections 1.1-1.5 and 2.1-2.6; AIP GEN 1.5 sections 1-2; AIP GEN 3.2 sections 4.1-4.2",
        "ERSA reference": "ERSA GEN FPR - Flight Plan Requirements (19 MAR 2026); ERSA SUA (19 MAR 2026); ERSA IFR Waypoints (19 MAR 2026); ERSA NAV/COMM - Navigation and Communication (19 MAR 2026)",
        "ERC LOW reference": "Airservices AIP Charts ERC Low 1-8 (27 NOV 2025); AIP GEN 3.2 section 4.2(e)",
        "TAC reference": "Airservices AIP Charts TAC 1-8 (27 NOV 2025); AIP GEN 3.2 section 4.2(g)",
        "PCA reference": "Airservices AIP Charts PCA Front and PCA Back (27 NOV 2025); AIP GEN 3.2 section 4.2(a)"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), AIP Book Amendment 126 current 19 MAR 2026, ERSA current 19 MAR 2026, and AIP Charts current 27 NOV 2025. Covers route weather, controlled and special-use airspace, PRD/MOA planning, published routes, route specifications, reporting point spacing, alternate availability, navigation requirements, radio communication capability, chart products and equipment/serviceability checks.",
      "study_file": "docs/09-study-guide/PIFR-028.md",
      "study": {
        "why": "Route selection is a combined planning problem: weather, airspace, PRDs, route limitations, alternates, navigation aids, rated coverage and communications all have to be checked before the flight is viable.",
        "study_notes": [
          "Use Part 91 MOS Chapters 7, 8, 9, 10, 11, 14, 21 and 26 as the regulation/MOS planning chain.",
          "AIP ENR 1.1, ENR 1.10, ENR 5.1 and GEN 1.5/3.2 provide route, flight notification, PRD/MOA, navigation equipment and chart-product context.",
          "ERSA GEN FPR adds route-specific flight-planning requirements.",
          "Current ERC Low, TAC and PCA chart product availability has been verified from Airservices AIP Charts."
        ],
        "common_traps": [
          "Do not select a route from a line on a chart without checking PRD/MOA, route limitations and navigation/communication requirements.",
          "Do not treat chart product availability as a route-specific worked example; exact panel work still needs a selected route.",
          "Engine-out performance for multi-engine aircraft must come from aircraft-specific material, not generic AIP text."
        ],
        "worked_examples": "TODO: Add route-selection worked examples after selecting exact ERC Low/TAC/PCA panels.",
        "exam_use": [
          "Use the MOS chapters for the legal proceed/no-proceed chain.",
          "Use AIP/ERSA/charts for operational route data and current publication lookup."
        ]
      }
    },
    {
      "id": "PIFR-029",
      "mos_ref": "1.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 1.1.1",
      "objective": "Determine the compulsory reporting points for a route selected.",
      "section_no": "7",
      "section_title": "Selection of IFR routes",
      "element_no": null,
      "element_title": null,
      "module": "Flight Planning And Documentation",
      "module_slug": "flight-planning-and-documentation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.240",
        "Part 91 MOS": "Part 91 MOS sections 9.02-9.03 and 21.05-21.06",
        "AIP reference": "AIP ENR 1.1 section 5.1.4 and Appendix 1 section 3; AIP ENR 1.10 sections 2.2 and 3.5.2",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers IFR flight notification, route reporting requirements in authorised aeronautical information, position reports when required by ATC or route reporting requirements, and off-ATS-route reporting points approximately 30 minutes or 200 NM apart.",
      "study_file": "docs/09-study-guide/PIFR-029.md",
      "study": {
        "why": "Compulsory reporting points are a route-specific lookup task that connects flight notification, route data and in-flight reporting requirements.",
        "study_notes": [
          "Part 91 MOS Chapter 9 covers flight notification requirements and route information submitted for the flight.",
          "Part 91 MOS Chapter 21 contains the prescribed reports and position-report triggers.",
          "AIP ENR 1.1 explains reporting point and position report context, including off-route reporting logic.",
          "AIP ENR 1.10 supports flight notification route detail."
        ],
        "common_traps": [
          "Do not assume every waypoint on a planned route is a compulsory reporting point.",
          "Check whether the report is required by route requirements, ATC instruction, SARWATCH, or Class G IFR procedures."
        ],
        "worked_examples": "TODO: Add route reporting point example after selecting a sample route.",
        "exam_use": [
          "Use the route/chart to identify candidate reporting points.",
          "Use Part 91 MOS Chapter 21 and AIP ENR 1.1 to determine which reports are compulsory."
        ]
      }
    },
    {
      "id": "PIFR-030",
      "mos_ref": "7.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 7.1.2",
      "objective": "Determine whether the flight may proceed based on route, aircraft equipment and IFR navigation requirements.",
      "section_no": "7",
      "section_title": "Selection of IFR routes",
      "element_no": null,
      "element_title": null,
      "module": "Flight Planning And Documentation",
      "module_slug": "flight-planning-and-documentation",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.230, 91.235, 91.240, 91.245, 91.255, 91.260, 91.287, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 7.02-7.03, 8.04-8.08, 9.02-9.03, 10.02, 11.19-11.23, 14.02, 21.05-21.06, 26.02-26.04, 26.08, 26.12 and 26.18-26.19",
        "AIP reference": "AIP ENR 1.1 sections 4.1, 5.1-5.1.5 and 6.1; AIP ENR 1.10 sections 1.1-1.3, 2.1-2.22 and 3.5; AIP ENR 5.1 sections 1.1-1.5 and 2.1-2.6; AIP GEN 1.5 sections 1-2; AIP GEN 3.2 sections 4.1-4.2",
        "ERSA reference": "ERSA GEN FPR - Flight Plan Requirements (19 MAR 2026); ERSA SUA (19 MAR 2026); ERSA IFR Waypoints (19 MAR 2026); ERSA NAV/COMM - Navigation and Communication (19 MAR 2026)",
        "ERC LOW reference": "Airservices AIP Charts ERC Low 1-8 (27 NOV 2025); AIP GEN 3.2 section 4.2(e)",
        "TAC reference": "Airservices AIP Charts TAC 1-8 (27 NOV 2025); AIP GEN 3.2 section 4.2(g)",
        "PCA reference": "Airservices AIP Charts PCA Front and PCA Back (27 NOV 2025); AIP GEN 3.2 section 4.2(a)"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), AIP Book Amendment 126 current 19 MAR 2026, ERSA current 19 MAR 2026, and AIP Charts current 27 NOV 2025. Use as the proceed/no-proceed chain for route, equipment and IFR navigation: current forecasts and updates, alternate triggers, IFR flight plan and route changes, pre-takeoff availability/suitability/NOTAM/equipment/GNSS-integrity checks, PRD/MOA conditions, IFR navigation method, reporting obligations and required IFR communication/navigation equipment.",
      "study_file": "docs/09-study-guide/PIFR-030.md",
      "study": {
        "why": "Proceed/no-proceed questions test whether all route, equipment and IFR navigation requirements have been brought together, not just whether the weather looks acceptable.",
        "study_notes": [
          "Use Part 91 MOS 10.02 for pre-takeoff checks and the broader MOS chain for weather, alternates, notification, PRD/MOA, navigation and equipment.",
          "Part 91 MOS 14.02 is the key IFR navigation method reference.",
          "Part 91 MOS Chapter 26 supports communication/navigation equipment serviceability.",
          "AIP, ERSA and current charts provide the operational route and publication context needed to apply the MOS rules."
        ],
        "common_traps": [
          "Do not decide proceed/no-proceed from a single factor unless the question explicitly isolates that factor.",
          "Check aircraft equipment, pilot capability, route requirements, alternates, NOTAM and GNSS integrity where applicable."
        ],
        "worked_examples": "TODO: Add proceed/no-proceed checklist example after selecting aircraft and route assumptions.",
        "exam_use": [
          "Build the answer as a chain: weather, alternate, notification, route/airspace, navigation, equipment, NOTAM, fuel.",
          "Use the reference locator to jump to the first failed condition in that chain."
        ]
      }
    },
    {
      "id": "PIFR-020",
      "mos_ref": "6.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 6.1.1",
      "objective": "Describe the navigation requirements for an IFR flight using radio navigation systems.",
      "section_no": "6",
      "section_title": "IFR navigation requirements",
      "element_no": null,
      "element_title": null,
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.287",
        "Part 91 MOS": "Part 91 MOS section 14.02(1)(b), 14.02(4), 14.02(6); section 1.07 definition of navigational tolerance",
        "AIP reference": "AIP ENR 1.1 sections 4.1, 4.3-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers radio navigation route suitability, rated coverage, positive fixes, 2-hour maximum between fixes, track keeping, tolerance and position fixing.",
      "study_file": "docs/09-study-guide/PIFR-020.md",
      "study": {
        "why": "Radio navigation requirements decide whether an IFR route is legally navigable and whether the aircraft can remain within required tolerances between fixes.",
        "study_notes": [
          "CASR 91.287 is the regulation hook for IFR navigation requirements.",
          "Part 91 MOS 14.02(1)(b) requires the route to allow positive position fixing using ground-based radio navigation aids within rated coverage.",
          "Part 91 MOS 14.02(6) requires positive position fixing at intervals not exceeding 2 hours when using radio navigation systems.",
          "AIP ENR 1.1 sections 4.1 and 4.3 to 4.6 provide the operational track keeping, navigation-aid, tolerance and fixing context."
        ],
        "common_traps": [
          "Do not assume a radio aid is usable beyond rated coverage.",
          "Do not plan an IFR radio-navigation route without checking positive fixing and track keeping.",
          "The 2-hour maximum between positive fixes is a limit, not a target for good route design."
        ],
        "worked_examples": "TODO: Add a radio-navigation route example after selecting exact ERC Low/TAC panels and aid coverage.",
        "exam_use": [
          "Use Part 91 MOS 14.02 first for the legal requirement.",
          "Use AIP ENR 1.1 section 4 to resolve track keeping, tolerance and positive-fix wording."
        ]
      }
    },
    {
      "id": "PIFR-021",
      "mos_ref": "6.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 6.1.2",
      "objective": "State the navigation requirements for an IFR flight using self-contained or long-range navigation systems.",
      "section_no": "6",
      "section_title": "IFR navigation requirements",
      "element_no": null,
      "element_title": null,
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.287",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of area navigation, LRNS, RNAV specification and RNP specification; sections 11.03(1B)-11.03(4), 14.02(1)(a), 14.02(2)-14.02(7)",
        "AIP reference": "AIP ENR 1.1 sections 4.1, 4.4, 4.6 and 4.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers area navigation, navigation specifications, approved GNSS, LRNS checks for RNP 2/4/10 oceanic operations, GNSS integrity/FDE prediction and position/tracking checks.",
      "study_file": "docs/09-study-guide/PIFR-021.md",
      "study": {
        "why": "Self-contained and long-range navigation questions test whether the planned IFR route can be flown with approved area navigation equipment and the required integrity checks.",
        "study_notes": [
          "CASR 91.287 is the regulation hook; Part 91 MOS 14.02 is the primary navigation requirement.",
          "Part 91 MOS 1.07 defines area navigation, LRNS, RNAV specification and RNP specification.",
          "Part 91 MOS 14.02(1)(a) and 14.02(2) to 14.02(7) set the requirements for approved area navigation systems, route suitability, tracking and GNSS-related checks.",
          "Part 91 MOS 11.03 is relevant for FDE and long-range/oceanic navigation contexts where applicable."
        ],
        "common_traps": [
          "Do not treat any moving map as an approved IFR area navigation system.",
          "Check route requirements, navigation specification and GNSS integrity rather than relying on equipment capability alone.",
          "Long-range navigation requirements may add checks that are not relevant to short domestic routes."
        ],
        "worked_examples": "TODO: Add approved GNSS/LRNS examples after selecting aircraft avionics and route assumptions.",
        "exam_use": [
          "Start with Part 91 MOS 14.02 for IFR navigation method.",
          "Use Part 91 MOS 1.07 definitions when the question turns on RNAV/RNP/LRNS terminology.",
          "Use AIP ENR 1.1 section 4.8 for GNSS operational procedure context."
        ]
      }
    },
    {
      "id": "PIFR-022",
      "mos_ref": "6.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 6.1.3",
      "objective": "Describe the navigation requirements for an IFR flight using visual reference to ground and water.",
      "section_no": "6",
      "section_title": "IFR navigation requirements",
      "element_no": null,
      "element_title": null,
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.273, 91.287",
        "Part 91 MOS": "Part 91 MOS sections 13.02(1)-13.02(3) and 14.02(1)(c)",
        "AIP reference": "AIP ENR 1.1 sections 4.1.1(c), 4.2.1(b)-4.2.1(c)",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. IFR visual-reference navigation is limited to day, VMC, when unable to use area navigation or ground-based navigation, and requires VFR visual position fixing at intervals not exceeding 30 minutes.",
      "study_file": "docs/09-study-guide/PIFR-022.md",
      "study": {
        "why": "Visual-reference IFR navigation is a narrow exception, so exam questions often test the limits rather than the general VFR idea.",
        "study_notes": [
          "CASR 91.273 and 91.287 provide the regulation context for VMC/day and IFR navigation requirements.",
          "Part 91 MOS 14.02(1)(c) allows visual-reference navigation only in the specified IFR circumstances.",
          "Part 91 MOS 13.02 supports the visual meteorological conditions requirement.",
          "AIP ENR 1.1 sections 4.1.1(c) and 4.2.1(b) to 4.2.1(c) provide the operational visual-reference navigation context."
        ],
        "common_traps": [
          "Do not treat visual-reference IFR navigation as a night or IMC option.",
          "Do not use visual reference if area navigation or ground-based navigation is available and required for the route.",
          "Position fixing by visual reference still has prescribed interval requirements."
        ],
        "worked_examples": "TODO: Add day/VMC visual-reference navigation examples after selecting route conditions.",
        "exam_use": [
          "Go to Part 91 MOS 14.02(1)(c) to test whether visual-reference IFR navigation is available.",
          "Use Part 91 MOS 13.02 to verify VMC conditions."
        ]
      }
    },
    {
      "id": "PIFR-023",
      "mos_ref": "6.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 6.1.4",
      "objective": "State the navigation tolerance for an IFR flight avoiding CTA.",
      "section_no": "6",
      "section_title": "IFR navigation requirements",
      "element_no": null,
      "element_title": null,
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.287",
        "Part 91 MOS": "Part 91 MOS section 1.07 definition of navigational tolerance; section 14.02(6)",
        "AIP reference": "AIP ENR 1.1 sections 4.4 and 4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers navigation tolerance concepts for PBN, VOR/LOC, NDB, DME and visual navigation, and AIP tolerance/advice-to-ATC thresholds used for route or track deviations.",
      "study_file": "docs/09-study-guide/PIFR-023.md",
      "study": {
        "why": "Avoiding CTA depends on staying within navigation tolerance; this is an exam boundary between planned clearance avoidance and accidental controlled-airspace infringement.",
        "study_notes": [
          "Part 91 MOS 1.07 defines navigational tolerance.",
          "Part 91 MOS 14.02(6) links IFR radio-navigation operations to tolerance and positive fixing.",
          "AIP ENR 1.1 sections 4.4 and 4.6 provide operational guidance for track keeping and when ATC must be advised."
        ],
        "common_traps": [
          "Do not plan to skim a CTA boundary without allowing for navigational tolerance.",
          "A tolerance is not permission to operate outside the planned route or clearance.",
          "Use the navigation method in the question; GNSS, VOR, NDB and visual navigation tolerances are not interchangeable."
        ],
        "worked_examples": "TODO: Add CTA-avoidance examples after selecting charted boundaries and route tracks.",
        "exam_use": [
          "Find the navigation method first.",
          "Use Part 91 MOS 1.07 and AIP ENR 1.1 sections 4.4/4.6 to locate the applicable tolerance and ATC advice threshold."
        ]
      }
    },
    {
      "id": "PIFR-024",
      "mos_ref": "6.1.5",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 6.1.5",
      "objective": "State the requirements for positive radio fixing.",
      "section_no": "6",
      "section_title": "IFR navigation requirements",
      "element_no": null,
      "element_title": null,
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.287",
        "Part 91 MOS": "Part 91 MOS section 14.02(1)(b) and 14.02(6)",
        "AIP reference": "AIP ENR 1.1 sections 4.1.1(b), 4.2.1(e), 4.5",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers positive-fix methods, rated coverage, NDB 30 NM exception for all-NDB fixes, GNSS fixes meeting GEN 1.5 section 2 equipment requirements and maximum 2-hour intervals between positive fixes under IFR radio navigation.",
      "study_file": "docs/09-study-guide/PIFR-024.md",
      "study": {
        "why": "Positive fixing is central to IFR track keeping, LSALT, uncertainty handling and route legality.",
        "study_notes": [
          "Part 91 MOS 14.02(1)(b) and 14.02(6) are the primary requirements for positive position fixing using radio navigation systems.",
          "AIP ENR 1.1 sections 4.1.1(b), 4.2.1(e) and 4.5 describe positive-fix methods and limitations.",
          "The verified source notes include the NDB-only positive-fix limitation and the 2-hour maximum interval between positive fixes.",
          "GNSS fixes must satisfy the applicable equipment and procedure requirements rather than being assumed from display position alone."
        ],
        "common_traps": [
          "Do not accept a single bearing or vague estimate as a positive fix.",
          "Do not ignore NDB limitations when an all-NDB fix is proposed.",
          "Do not let the route exceed the maximum interval between positive fixes."
        ],
        "worked_examples": "TODO: Add positive-fix examples using actual aid geometry from a current chart panel.",
        "exam_use": [
          "Use AIP ENR 1.1 section 4.5 for positive-fix wording.",
          "Use Part 91 MOS 14.02(6) for the time-interval rule."
        ]
      }
    },
    {
      "id": "PIFR-025",
      "mos_ref": "6.1.6",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 6.1.6",
      "objective": "Determine the requirements for the most precise track guidance.",
      "section_no": "6",
      "section_title": "IFR navigation requirements",
      "element_no": null,
      "element_title": null,
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.287",
        "Part 91 MOS": "Part 91 MOS section 14.02(1)-14.02(3), 14.02(6)-14.02(7)",
        "AIP reference": "AIP ENR 1.1 section 4.4.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. AIP states the order of track-guidance precision as Localiser, GNSS, VOR, then NDB, constrained by equipment carried and pilot qualification.",
      "study_file": "docs/09-study-guide/PIFR-025.md",
      "study": {
        "why": "Track-guidance priority is a quick exam lookup, but it only applies if the equipment and pilot qualification support that method.",
        "study_notes": [
          "Part 91 MOS 14.02 provides the route and navigation system legality chain.",
          "AIP ENR 1.1 section 4.4.3 gives the verified order of track-guidance precision: Localiser, GNSS, VOR, then NDB.",
          "The most precise available guidance must still be compatible with the route, equipment and pilot qualification."
        ],
        "common_traps": [
          "Do not choose a more precise aid if the aircraft is not equipped or the pilot is not authorised to use it.",
          "Do not use the precision order to bypass route or procedure limitations."
        ],
        "worked_examples": "TODO: Add route segments showing localiser/GNSS/VOR/NDB priority after selecting chart examples.",
        "exam_use": [
          "Go directly to AIP ENR 1.1 section 4.4.3 for the precision order.",
          "Confirm route legality in Part 91 MOS 14.02 if the question asks whether the flight may proceed."
        ]
      }
    },
    {
      "id": "PIFR-026",
      "mos_ref": "6.1.7",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 6.1.7",
      "objective": "Apply the navigation requirements of IFR flight with respect to time interval between fixes, accuracy of time reference, accuracy and procedures in track keeping.",
      "section_no": "6",
      "section_title": "IFR navigation requirements",
      "element_no": null,
      "element_title": null,
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.287",
        "Part 91 MOS": "Part 91 MOS section 14.02(1), 14.02(4)-14.02(7)",
        "AIP reference": "AIP ENR 1.1 sections 4.1, 4.3, 4.4, 4.5 and 4.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers maximum time interval between positive fixes, plus/minus 30 second time reference, positive action to regain track, most precise track guidance, position fixing and procedures when navigation systems or GNSS integrity become unreliable.",
      "study_file": "docs/09-study-guide/PIFR-026.md",
      "study": {
        "why": "This objective combines the small procedural details CASA can test: fix interval, time reference accuracy and corrective track-keeping action.",
        "study_notes": [
          "Part 91 MOS 14.02 contains the legal navigation requirements for fixing, system reliability and route suitability.",
          "AIP ENR 1.1 sections 4.1, 4.3, 4.4, 4.5 and 4.8 provide the operational track-keeping, timing, positive-fix and GNSS context.",
          "The verified source status identifies plus/minus 30 seconds for time reference accuracy and a maximum 2 hours between positive fixes.",
          "If navigation system accuracy, reliability or serviceability becomes doubtful, Part 91 MOS 14.02(4) triggers monitoring, safety procedures and ATS notification actions."
        ],
        "common_traps": [
          "Do not confuse the time-reference accuracy requirement with the maximum positive-fix interval.",
          "Do not continue passively when off track; the AIP procedure requires positive action to regain track.",
          "GNSS integrity loss is a navigation problem, not just an avionics message to ignore."
        ],
        "worked_examples": "TODO: Add timing and track-error examples after selecting a route leg and groundspeed.",
        "exam_use": [
          "Use AIP ENR 1.1 section 4 for operational values.",
          "Use Part 91 MOS 14.02(4) when the question says a navigation system is inaccurate, unreliable or inoperative."
        ]
      }
    },
    {
      "id": "PIFR-027",
      "mos_ref": "6.1.8",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 6.1.8",
      "objective": "Apply the procedures of IFR flight in all classes of airspace when diverting from track due navigation or weather.",
      "section_no": "6",
      "section_title": "IFR navigation requirements",
      "element_no": null,
      "element_title": null,
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.287",
        "Part 91 MOS": "Part 91 MOS section 14.02(4); sections 11.04-11.05 for GNSS integrity and GNSS-derived distance information",
        "AIP reference": "AIP ENR 1.1 sections 4.4, 4.6-4.8; AIP ENR 2.2 section 2.4",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers action after navigation-system inaccuracy/unreliability/failure, ATC notification of deviations, GNSS integrity loss actions, long over-water route regaining and weather-deviation procedures.",
      "study_file": "docs/09-study-guide/PIFR-027.md",
      "study": {
        "why": "Diversion from track due weather or navigation problems is a practical IFR safety topic and an exam trigger for ATC notification and alternate navigation actions.",
        "study_notes": [
          "Part 91 MOS 14.02(4) covers actions when a navigation system is inaccurate, unreliable or inoperative.",
          "Part 91 MOS 11.04 and 11.05 support GNSS integrity and GNSS-derived distance information cases.",
          "AIP ENR 1.1 sections 4.4 and 4.6 to 4.8 cover track keeping, deviation advice, GNSS and related navigation procedures.",
          "AIP ENR 2.2 section 2.4 is the verified weather-deviation locator."
        ],
        "common_traps": [
          "Do not deviate in controlled airspace without considering clearance, ATC advice and separation responsibilities.",
          "Do not treat weather deviation and navigation-system failure as the same procedure; use the source matching the cause.",
          "If GNSS integrity is lost, check the GNSS-specific AIP/MOS action rather than continuing as normal."
        ],
        "worked_examples": "TODO: Add weather-deviation and navigation-failure scenarios after selecting airspace and route examples.",
        "exam_use": [
          "Use Part 91 MOS 14.02(4) for navigation-system failure/unreliability.",
          "Use AIP ENR 2.2 section 2.4 for weather-deviation procedure."
        ]
      }
    },
    {
      "id": "PIFR-031",
      "mos_ref": "8.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 8.1.1",
      "objective": "Determine LSALT for an IFR flight for a route published on a chart.",
      "section_no": "8",
      "section_title": "LSALT and selection of IFR altitudes and levels",
      "element_no": "8.1",
      "element_title": "LSALT",
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.305",
        "Part 91 MOS": "Part 91 MOS section 1.07 definition of LSALT",
        "AIP reference": "AIP GEN 3.2 sections 4.1-4.2; AIP GEN 3.3 sections 4.1-4.4",
        "ERSA reference": "TODO",
        "ERC LOW reference": "Airservices AIP Charts ERC Low 1-8 (27 NOV 2025); AIP GEN 3.2 section 4.2(e)",
        "TAC reference": "Airservices AIP Charts TAC 1-8 (27 NOV 2025); AIP GEN 3.2 section 4.2(g)",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), AIP Book Amendment 126 current 19 MAR 2026, and AIP Charts current 27 NOV 2025. Covers the legal IFR minimum-height chain and the AIP rule that IFR flight must not be below the published LSALT or calculated LSALT unless permitted by CASR 91.265, 91.267, 91.305 or another civil aviation legislation provision. Current ERC Low and TAC panel availability has been verified from the Airservices AIP Charts index.",
      "study_file": "docs/09-study-guide/PIFR-031.md",
      "study": {
        "why": "Published-route LSALT is one of the fastest exam marks when the charted value and the legal minimum-height rule are located correctly.",
        "study_notes": [
          "CASR 91.305 is the legal minimum-height reference for IFR flight.",
          "Part 91 MOS 1.07 defines LSALT.",
          "AIP GEN 3.2 identifies the relevant chart products; current ERC Low and TAC panel availability is verified.",
          "AIP GEN 3.3 sections 4.1 to 4.4 explain published LSALT, calculated LSALT and when IFR flight must not be below them."
        ],
        "common_traps": [
          "Do not calculate your own LSALT where the route has a published value unless the question asks for calculation.",
          "Check whether the question asks for route LSALT, grid LSALT, sector altitude or instrument-procedure altitude.",
          "Do not descend below LSALT unless a specific CASR/AIP permission applies."
        ],
        "worked_examples": "TODO: Add published-route LSALT lookup examples after selecting exact ERC Low/TAC panels and route segments.",
        "exam_use": [
          "Use the current chart first for a published route LSALT.",
          "Use AIP GEN 3.3 section 4 to resolve whether published or calculated LSALT applies."
        ]
      }
    },
    {
      "id": "PIFR-032",
      "mos_ref": "8.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 8.1.2",
      "objective": "Determine the dimensions of the significant safety sector when calculating LSALT for a route not published on a chart.",
      "section_no": "8",
      "section_title": "LSALT and selection of IFR altitudes and levels",
      "element_no": "8.1",
      "element_title": "LSALT",
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.305",
        "Part 91 MOS": "TODO",
        "AIP reference": "AIP GEN 3.3 sections 4.2 and 4.5-4.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286) and AIP Book Amendment 126 current 19 MAR 2026. Covers the tolerance-area dimensions for routes not shown on AIP aeronautical charts, including inaccurate navigation/off-track/radio-aid failure, radio-navigation or DR routes, RNP 2 routes, and other area navigation operations.",
      "study_file": "docs/09-study-guide/PIFR-032.md",
      "study": {
        "why": "For unpublished routes, the LSALT answer depends on selecting the correct tolerance area before doing any height calculation.",
        "study_notes": [
          "CASR 91.305 remains the legal minimum-height hook.",
          "AIP GEN 3.3 sections 4.2 and 4.5 to 4.8 define the significant safety sector/tolerance area cases.",
          "The applicable area changes with the navigation situation: inaccurate navigation or off-track/radio-aid failure, radio-navigation or DR routes, RNP 2 routes, and other area navigation operations."
        ],
        "common_traps": [
          "Do not start with obstacle height before identifying the correct tolerance area.",
          "Do not use an RNP 2 tolerance area for a non-RNP route.",
          "If position is uncertain, use the uncertainty case rather than the normal planned-route corridor."
        ],
        "worked_examples": "TODO: Add tolerance-area diagrams only after selecting source-backed route examples and chart extracts.",
        "exam_use": [
          "Go to AIP GEN 3.3 section 4.5 to 4.8 and match the route/navigation case.",
          "Then apply the LSALT calculation method from the adjacent AIP GEN 3.3 text."
        ]
      }
    },
    {
      "id": "PIFR-033",
      "mos_ref": "8.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 8.1.3",
      "objective": "Determine methods of calculating LSALT for a route not published on a chart.",
      "section_no": "8",
      "section_title": "LSALT and selection of IFR altitudes and levels",
      "element_no": "8.1",
      "element_title": "LSALT",
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.305",
        "Part 91 MOS": "TODO",
        "AIP reference": "AIP GEN 3.3 sections 4.1-4.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286) and AIP Book Amendment 126 current 19 MAR 2026. Covers AIP methods for Grid LSALT use, non-charted-route LSALT calculation, obstacle and terrain allowances, and tolerance areas for radio navigation/DR, RNP 2 and other area navigation operations.",
      "study_file": "docs/09-study-guide/PIFR-033.md",
      "study": {
        "why": "CASA can test the method as well as the arithmetic: grid LSALT, published LSALT and calculated LSALT are not interchangeable.",
        "study_notes": [
          "AIP GEN 3.3 sections 4.1 to 4.8 are the primary method locator for non-charted-route LSALT.",
          "The verified source set covers Grid LSALT use, obstacle and terrain allowances, and tolerance areas for radio navigation/DR, RNP 2 and other area navigation operations.",
          "CASR 91.305 supplies the legal minimum-height context for applying the result."
        ],
        "common_traps": [
          "Do not use Grid LSALT when the question requires calculated route LSALT.",
          "Do not omit unreported-obstacle allowance where the AIP calculation method requires it.",
          "Do not mix terrain-only and obstacle-based rules."
        ],
        "worked_examples": "TODO: Add calculation-method comparisons after selecting a charted route and unpublished-route example.",
        "exam_use": [
          "Use AIP GEN 3.3 section 4 as the main exam lookup.",
          "Read the whole LSALT method block before choosing a formula or value."
        ]
      }
    },
    {
      "id": "PIFR-034",
      "mos_ref": "8.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 8.1.4",
      "objective": "Calculate LSALT for non-published route.",
      "section_no": "8",
      "section_title": "LSALT and selection of IFR altitudes and levels",
      "element_no": "8.1",
      "element_title": "LSALT",
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.305",
        "Part 91 MOS": "TODO",
        "AIP reference": "AIP GEN 3.3 sections 4.2-4.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286) and AIP Book Amendment 126 current 19 MAR 2026. Calculation references include unreported-obstacle allowance, 1,000 ft above highest obstacle when the highest obstacle is more than 360 ft above terrain, 1,360 ft above terrain where applicable, the 1,500 ft floor where terrain/obstacles are not above 500 ft, and the applicable tolerance area.",
      "study_file": "docs/09-study-guide/PIFR-034.md",
      "study": {
        "why": "Non-published-route LSALT calculation is a procedural arithmetic task where the wrong area or allowance gives the wrong answer.",
        "study_notes": [
          "AIP GEN 3.3 sections 4.2 to 4.8 provide the verified calculation references for non-published routes.",
          "The verified notes identify the relevant allowances: unreported-obstacle allowance, 1,000 ft above highest obstacle where applicable, 1,360 ft above terrain where applicable, the 1,500 ft floor in the specified case, and the applicable tolerance area.",
          "CASR 91.305 supplies the legal context for applying the calculated minimum height."
        ],
        "common_traps": [
          "Do not calculate against the centreline only; use the applicable tolerance area.",
          "Do not round or add allowances from memory; use the AIP wording.",
          "Do not invent a worked result without the exact route, terrain and obstacle data."
        ],
        "worked_examples": "TODO: Add full LSALT calculations after selecting exact chart panels, route coordinates and obstacle/terrain source data.",
        "exam_use": [
          "First identify the applicable AIP GEN 3.3 tolerance area.",
          "Then apply the relevant terrain/obstacle allowance from the same AIP section."
        ]
      }
    },
    {
      "id": "PIFR-035",
      "mos_ref": "8.1.5",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 8.1.5",
      "objective": "State the requirements for descent below LSALT.",
      "section_no": "8",
      "section_title": "LSALT and selection of IFR altitudes and levels",
      "element_no": "8.1",
      "element_title": "LSALT",
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.305",
        "Part 91 MOS": "TODO",
        "AIP reference": "AIP GEN 3.3 section 4.4; AIP ENR 1.1 sections 2.2.6.3, 2.11.3.5, 4.8 and 8.1.7-8.1.9 where applicable",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286) and AIP Book Amendment 126 current 19 MAR 2026. CASR 91.305 permits IFR flight below the applicable minimum height only for taking off or landing, applicable published visual approach/departure procedures, authorised instrument departure or approach procedures, ATC clearance, or VMC by day. AIP GEN 3.3 section 4.4 restates that IFR flight must not be below published/calculated LSALT unless permitted by civil aviation legislation.",
      "study_file": "docs/09-study-guide/PIFR-035.md",
      "study": {
        "why": "Descent below LSALT is a legal permission question; the safest exam approach is to find the listed exception rather than reason from convenience.",
        "study_notes": [
          "CASR 91.305 is the primary legal reference for IFR minimum heights.",
          "AIP GEN 3.3 section 4.4 restates the published/calculated LSALT rule and points back to civil aviation legislation permissions.",
          "The verified source status identifies the permitted contexts: taking off or landing, applicable published visual approach/departure procedures, authorised instrument departure or approach procedures, ATC clearance, or VMC by day.",
          "AIP ENR 1.1 references may be relevant where the descent occurs within approach, route or GNSS procedure context."
        ],
        "common_traps": [
          "Do not descend below LSALT merely because visual contact is expected later.",
          "Do not confuse LSALT with an instrument-procedure minimum altitude.",
          "Check the exact exception named in CASR 91.305 before selecting an answer."
        ],
        "worked_examples": "TODO: Add descent-below-LSALT scenarios after verifying each scenario against CASR 91.305 and the relevant AIP procedure.",
        "exam_use": [
          "Use CASR 91.305 for the allowed exception list.",
          "Use AIP GEN 3.3 section 4.4 to connect the charted or calculated LSALT to the legal rule."
        ]
      }
    },
    {
      "id": "PIFR-036",
      "mos_ref": "8.2.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 8.2.1",
      "objective": "Select an appropriate cruising altitude/level after assessing the following: (a) LSALT; (b) forecast freezing level; (c) engine out performance for multi-engine aircraft; (d) CTA and PRDs; (e) table of IFR cruising levels; (f) availability of published routes; (g) availability of navigation aids; (h) rated coverage of navigation aids; (i) specified route limitations; (j) airways operational requirements.",
      "section_no": "8",
      "section_title": "LSALT and selection of IFR altitudes and levels",
      "element_no": "8.2",
      "element_title": "Select cruising altitude or level",
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.230, 91.240, 91.245, 91.255, 91.260, 91.287, 91.290, 91.295, 91.300",
        "Part 91 MOS": "Part 91 MOS sections 2.08-2.10, 7.02-7.03, 9.02-9.03, 10.02, 11.19-11.23 and 14.02",
        "AIP reference": "AIP ENR 1.1 sections 4.1, 5.1-5.1.5 and 6.1; AIP ENR 1.7 sections 3.2-3.3; AIP ENR 1.10 sections 1.1-1.3 and 2.1-2.22; AIP ENR 5.1 sections 1.1-1.5 and 2.1-2.6; AIP GEN 3.3 section 4",
        "ERSA reference": "ERSA GEN FPR - Flight Plan Requirements (19 MAR 2026); ERSA SUA (19 MAR 2026); ERSA IFR Waypoints (19 MAR 2026); ERSA NAV/COMM - Navigation and Communication (19 MAR 2026)",
        "ERC LOW reference": "Airservices AIP Charts ERC Low 1-8 (27 NOV 2025)",
        "TAC reference": "Airservices AIP Charts TAC 1-8 (27 NOV 2025)",
        "PCA reference": "Airservices AIP Charts PCA Front and PCA Back (27 NOV 2025)"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), AIP Book Amendment 126 current 19 MAR 2026, ERSA current 19 MAR 2026, and AIP Charts current 27 NOV 2025. Covers selection of cruising altitude/level using LSALT, weather/freezing-level planning sources, PRD/MOA and controlled-airspace considerations, specified IFR cruising levels, route specifications, published-route and navigation-aid availability, rated coverage and radio/navigation requirements. Engine-out performance remains aircraft-specific and should be handled in aircraft examples/AFM material rather than inferred here.",
      "study_file": "docs/09-study-guide/PIFR-036.md",
      "study": {
        "why": "Cruising level selection pulls together LSALT, weather, airspace, PRDs, route limitations, navigation aid coverage and aircraft performance.",
        "study_notes": [
          "Use CASR 91.230 to 91.300, Part 91 MOS Chapters 2, 7, 9, 10, 11 and 14, and the mapped AIP references as the planning chain.",
          "AIP ENR 1.7 sections 3.2 to 3.3 and AIP ENR 1.1 sections 5.1 to 5.1.5 support cruising-level and altimetry context.",
          "AIP ENR 5.1 is the PRD/MOA locator; ERSA and current chart products support route-specific lookup.",
          "Engine-out performance for multi-engine aircraft is aircraft-specific and must be taken from AFM/POH or approved performance material, not inferred from general IFR references."
        ],
        "common_traps": [
          "Do not select a legal cruising level that is below LSALT.",
          "Do not ignore freezing level, PRDs/MOAs, controlled-airspace steps or route limitations.",
          "Do not use generic multi-engine performance assumptions for engine-out capability."
        ],
        "worked_examples": "TODO: Add cruising-level selection examples after choosing a route, forecast package, chart panels and aircraft performance source.",
        "exam_use": [
          "Build the lookup chain in order: LSALT, weather/freezing level, airspace/PRD, cruising level table, route/nav aid availability, aircraft performance.",
          "Use ERSA and charts only for route-specific facts after the MOS/AIP rule is identified."
        ]
      }
    },
    {
      "id": "PIFR-037",
      "mos_ref": "8.3.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 8.3.1",
      "objective": "Determine whether a flight may proceed based on the following: (a) altitude; (b) aircraft equipment; (c) IFR navigation requirements.",
      "section_no": "8",
      "section_title": "LSALT and selection of IFR altitudes and levels",
      "element_no": "8.3",
      "element_title": "Determining when flight may proceed - uncertain position",
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.245, 91.287, 91.305, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 10.02, 14.02, 26.02-26.04, 26.08, 26.12 and 26.18-26.19",
        "AIP reference": "AIP GEN 3.3 sections 4.4-4.8; AIP ENR 1.1 sections 4.1, 4.4-4.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Use as the proceed/no-proceed chain when position is uncertain: applicable altitude or LSALT, serviceable required equipment, IFR navigation method, positive fixing, GNSS integrity, and the AIP inaccurate-navigation tolerance area.",
      "study_file": "docs/09-study-guide/PIFR-037.md",
      "study": {
        "why": "This is a proceed/no-proceed decision under uncertainty: the aircraft must still satisfy altitude, equipment and IFR navigation requirements.",
        "study_notes": [
          "CASR 91.245, 91.287, 91.305 and 91.810 form the regulation chain for equipment, IFR navigation, minimum height and required equipment.",
          "Part 91 MOS 10.02, 14.02 and Chapter 26 provide the pre-takeoff, navigation and equipment detail.",
          "AIP GEN 3.3 sections 4.4 to 4.8 and AIP ENR 1.1 sections 4.1 and 4.4 to 4.8 provide the LSALT, tolerance, positive-fix and GNSS context.",
          "If the necessary altitude, equipment or navigation condition is not satisfied, record the failed condition rather than forcing a proceed answer."
        ],
        "common_traps": [
          "Do not let a serviceable aircraft-equipment answer override an LSALT or navigation-position problem.",
          "Do not treat uncertain position as a normal en route navigation case.",
          "Check GNSS integrity and positive fixing before relying on a displayed position."
        ],
        "worked_examples": "TODO: Add proceed/no-proceed uncertain-position examples after selecting exact navigation and equipment scenarios.",
        "exam_use": [
          "Check altitude/LSALT first, then aircraft equipment, then IFR navigation method and position certainty.",
          "Use AIP GEN 3.3 section 4.5 if the question says navigation is inaccurate or position is uncertain."
        ]
      }
    },
    {
      "id": "PIFR-038",
      "mos_ref": "8.3.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 8.3.2",
      "objective": "Determine an appropriate LSALT when uncertain of position.",
      "section_no": "8",
      "section_title": "LSALT and selection of IFR altitudes and levels",
      "element_no": "8.3",
      "element_title": "Determining when flight may proceed - uncertain position",
      "module": "Navigation And LSALT",
      "module_slug": "navigation-and-lsalt",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.305",
        "Part 91 MOS": "TODO",
        "AIP reference": "AIP GEN 3.3 sections 4.2-4.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286) and AIP Book Amendment 126 current 19 MAR 2026. When navigation is inaccurate, the aircraft is deliberately off track, or a normally available radio navigation aid has failed, AIP GEN 3.3 section 4.5 defines the area as a circle centred on the DR position with radius 5 NM plus 20 percent of the air distance flown from the last positive fix; LSALT is then calculated for that area using section 4.",
      "study_file": "docs/09-study-guide/PIFR-038.md",
      "study": {
        "why": "When position is uncertain, the LSALT area expands; using the normal planned-route corridor can understate terrain clearance.",
        "study_notes": [
          "CASR 91.305 provides the legal minimum-height context.",
          "AIP GEN 3.3 sections 4.2 to 4.8 are the primary LSALT locator.",
          "The verified source status identifies the uncertain-position case as a circle centred on the DR position with radius 5 NM plus 20 percent of the air distance flown from the last positive fix.",
          "Calculate the LSALT for that uncertainty area using the AIP GEN 3.3 section 4 method."
        ],
        "common_traps": [
          "Do not calculate from the intended track alone once position is uncertain.",
          "Do not ignore distance flown since the last positive fix.",
          "Do not use a DR position as if it were a positive fix."
        ],
        "worked_examples": "TODO: Add uncertain-position LSALT calculations after selecting a route leg, last positive fix, elapsed distance and chart source.",
        "exam_use": [
          "Go to AIP GEN 3.3 section 4.5 for the uncertainty area.",
          "Then calculate using the obstacle/terrain rules in AIP GEN 3.3 section 4."
        ]
      }
    },
    {
      "id": "PIFR-039",
      "mos_ref": "9.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 9.1.1",
      "objective": "State the alternate aerodrome requirements for an IFR flight to a specified destination, given relevant information, including NOTAM.",
      "section_no": "9",
      "section_title": "IFR alternate aerodrome requirements",
      "element_no": null,
      "element_title": null,
      "module": "Alternate Requirements And Fuel",
      "module_slug": "alternate-requirements-and-fuel",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.235",
        "Part 91 MOS": "Part 91 MOS Division 8.2, sections 8.04-8.09; Chapter 19 sections 19.02-19.06 for fuel effects of alternate and holding requirements",
        "AIP reference": "AIP ENR 1.1 section 10.7, especially 10.7.1-10.7.4; AIP ENR 1.1 sections 10.9.1-10.9.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers weather, navigation, lighting, alternate suitability/restrictions, alternate minima, holding substitutions and fuel-state procedures.",
      "study_file": "docs/09-study-guide/PIFR-039.md",
      "study": {
        "why": "Alternate requirements are a core IFR exam topic because destination suitability can change with weather, navigation aid status, lighting, NOTAM and fuel consequences.",
        "study_notes": [
          "CASR 91.235 is the regulation hook for alternate aerodrome requirements.",
          "Part 91 MOS Division 8.2, especially sections 8.04 to 8.09, is the primary enforceable source for IFR alternate requirements.",
          "AIP ENR 1.1 section 10.7 provides the operational alternate planning locator, including weather, navigation, lighting and NOTAM-related cases.",
          "Part 91 MOS Chapter 19 and AIP ENR 1.1 section 10.9 connect alternate and holding requirements to fuel planning."
        ],
        "common_traps": [
          "Do not decide alternate requirements from weather alone; check navigation, lighting, NOTAM and suitability restrictions.",
          "Do not ignore holding fuel when holding is used instead of, or as part of, alternate planning.",
          "Do not assume an alternate is suitable just because it is nearby."
        ],
        "worked_examples": "TODO: Add alternate requirement examples after selecting exact destination/alternate aerodromes, forecasts and NOTAM.",
        "exam_use": [
          "Start with Part 91 MOS sections 8.04 to 8.09.",
          "Use AIP ENR 1.1 section 10.7 for exam lookup wording and planning context.",
          "Then check Part 91 MOS Chapter 19 for fuel effects."
        ]
      }
    },
    {
      "id": "PIFR-040",
      "mos_ref": "9.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 9.1.2",
      "objective": "Determine the suitability of a specified alternate aerodrome for an IFR flight given relevant information, including NOTAM.",
      "section_no": "9",
      "section_title": "IFR alternate aerodrome requirements",
      "element_no": null,
      "element_title": null,
      "module": "Alternate Requirements And Fuel",
      "module_slug": "alternate-requirements-and-fuel",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.235",
        "Part 91 MOS": "Part 91 MOS sections 8.04-8.08, especially 8.07 and Table 8.08(1)",
        "AIP reference": "AIP ENR 1.1 sections 10.7.1-10.7.4",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Suitability requires the nominated alternate to be suitable as a planned destination, not itself require an alternate, not be a helideck, and meet weather/navigation/lighting requirements after considering NOTAM and forecast information.",
      "study_file": "docs/09-study-guide/PIFR-040.md",
      "study": {
        "why": "A nominated alternate only solves the planning problem if it is itself suitable for the aircraft, weather, navigation, lighting and NOTAM conditions.",
        "study_notes": [
          "CASR 91.235 provides the regulation context for alternate aerodrome planning.",
          "Part 91 MOS sections 8.04 to 8.08 are the primary source for determining alternate suitability.",
          "Part 91 MOS 8.07 and Table 8.08(1) are key locators for suitability and alternate minima.",
          "AIP ENR 1.1 sections 10.7.1 to 10.7.4 provide the operational alternate planning context."
        ],
        "common_traps": [
          "Do not nominate an aerodrome that itself requires an alternate under the applicable conditions.",
          "Check NOTAM, forecast and lighting information before treating the alternate as available.",
          "Do not use destination minima or comfort margins where the MOS alternate minima table applies."
        ],
        "worked_examples": "TODO: Add alternate suitability examples after selecting aerodrome forecasts, NOTAM and instrument approach availability.",
        "exam_use": [
          "Use Part 91 MOS 8.07 and Table 8.08(1) for the suitability/minima decision.",
          "Use AIP ENR 1.1 section 10.7 to follow the operational alternate-planning sequence."
        ]
      }
    },
    {
      "id": "PIFR-041",
      "mos_ref": "9.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 9.1.3",
      "objective": "Describe the holding requirements due to weather, traffic, traffic advisory, and procedures.",
      "section_no": "9",
      "section_title": "IFR alternate aerodrome requirements",
      "element_no": null,
      "element_title": null,
      "module": "Alternate Requirements And Fuel",
      "module_slug": "alternate-requirements-and-fuel",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.235, 91.455",
        "Part 91 MOS": "Part 91 MOS sections 8.04(5)-8.04(8), 8.06(4)-8.06(5), 19.02-19.06",
        "AIP reference": "AIP ENR 1.1 sections 10.7.2.3-10.7.2.9, 10.7.4.4-10.7.4.5, 10.9.1-10.9.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers holding instead of alternate for forecast improvement, INTER/TEMPO holding periods, non-cumulative multiple-change holding, runway lighting/PAL holding, and fuel monitoring/minimum/emergency fuel procedures.",
      "study_file": "docs/09-study-guide/PIFR-041.md",
      "study": {
        "why": "Holding requirements affect both dispatch legality and fuel capacity, and the exam can frame them as weather, traffic, advisory or procedure problems.",
        "study_notes": [
          "CASR 91.235 and 91.455 provide the alternate and fuel regulation hooks.",
          "Part 91 MOS 8.04(5) to 8.04(8) and 8.06(4) to 8.06(5) cover holding in alternate/weather contexts.",
          "Part 91 MOS 19.02 to 19.06 covers the fuel planning and in-flight fuel management consequences.",
          "AIP ENR 1.1 sections 10.7.2.3 to 10.7.2.9, 10.7.4.4 to 10.7.4.5 and 10.9.1 to 10.9.3 are the verified operational locators."
        ],
        "common_traps": [
          "Do not treat INTER, TEMPO, lighting/PAL and traffic holding as the same trigger.",
          "Do not add multiple holding requirements cumulatively unless the source rule requires it.",
          "Do not plan holding without carrying the corresponding fuel required by the MOS fuel rules."
        ],
        "worked_examples": "TODO: Add holding fuel examples after selecting forecast change groups, aerodrome lighting status and route assumptions.",
        "exam_use": [
          "Use Part 91 MOS Division 8.2 for why holding is required.",
          "Use Part 91 MOS Chapter 19 and AIP ENR 1.1 section 10.9 for the fuel decision."
        ]
      }
    },
    {
      "id": "PIFR-042",
      "mos_ref": "9.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 9.1.4",
      "objective": "Calculate the minimum fuel required for an IFR flight in accordance with CASA fuel policy guidance material.",
      "section_no": "9",
      "section_title": "IFR alternate aerodrome requirements",
      "element_no": null,
      "element_title": null,
      "module": "Alternate Requirements And Fuel",
      "module_slug": "alternate-requirements-and-fuel",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.455",
        "Part 91 MOS": "Part 91 MOS Chapter 19, sections 19.01-19.06 and Table 19.02(2)",
        "AIP reference": "AIP ENR 1.1 sections 10.7.2.3-10.7.2.9, 10.7.4.4-10.7.4.5, 10.9.1-10.9.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. CASA AC 91-15 is identified by AIP ENR 1.1 10.9.1 as guidance material, but the current official AC document URL was not verified in this pass due CASA site access blocking; keep AC 91-15 as a source gap until directly verified.",
      "study_file": "docs/09-study-guide/PIFR-042.md",
      "study": {
        "why": "Minimum fuel calculation is both a legal requirement and an exam arithmetic workflow; each component must come from the permitted source, not memory.",
        "study_notes": [
          "CASR 91.455 is the regulation hook for fuel requirements.",
          "Part 91 MOS Chapter 19, especially sections 19.01 to 19.06 and Table 19.02(2), is the verified enforceable source for fuel planning and in-flight fuel management.",
          "AIP ENR 1.1 section 10.9 provides operational fuel planning and fuel-state procedure context.",
          "AIP ENR 1.1 section 10.9.1 identifies CASA AC 91-15 as guidance material, but the current official AC URL remains unverified in this repository and must stay as a source gap until directly checked."
        ],
        "common_traps": [
          "Do not calculate fuel from a single trip-fuel number; identify taxi, trip, alternate, holding, fixed reserve and any other MOS-required components.",
          "Do not use an unverified AC 91-15 copy as the source of truth.",
          "Do not ignore in-flight replanning, continuation, minimum fuel and emergency fuel decision points."
        ],
        "worked_examples": "TODO: Add minimum-fuel calculations after verifying aircraft fuel burn assumptions, route timing, alternate/holding triggers and the official AC 91-15 source.",
        "exam_use": [
          "Use Part 91 MOS Chapter 19 first for the calculation framework.",
          "Use Table 19.02(2) for fixed reserve lookup.",
          "Use AIP ENR 1.1 section 10.9 for fuel-state terminology and operational procedures."
        ]
      }
    },
    {
      "id": "PIFR-043",
      "mos_ref": "9.1.5",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 9.1.5",
      "objective": "Determine whether a flight may proceed based on alternate or holding requirements and fuel capacity.",
      "section_no": "9",
      "section_title": "IFR alternate aerodrome requirements",
      "element_no": null,
      "element_title": null,
      "module": "Alternate Requirements And Fuel",
      "module_slug": "alternate-requirements-and-fuel",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.235, 91.455",
        "Part 91 MOS": "Part 91 MOS sections 8.04-8.08 and 19.03-19.06",
        "AIP reference": "AIP ENR 1.1 sections 10.7.1-10.7.4 and 10.9.1-10.9.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. This objective combines alternate nomination/suitability, holding substitution and required usable fuel at departure, replanning, continuation, diversion, minimum fuel and emergency fuel decision points.",
      "study_file": "docs/09-study-guide/PIFR-043.md",
      "study": {
        "why": "Proceed/no-proceed fuel decisions combine alternate requirements, holding fuel and actual usable fuel capacity, so a single missing component can make the flight non-compliant.",
        "study_notes": [
          "CASR 91.235 and 91.455 provide the alternate and fuel regulation hooks.",
          "Part 91 MOS sections 8.04 to 8.08 determine whether an alternate or holding is required and whether the nominated alternate is suitable.",
          "Part 91 MOS sections 19.03 to 19.06 determine usable fuel requirements, replanning, continuation, diversion and fuel-state decisions.",
          "AIP ENR 1.1 sections 10.7 and 10.9 provide the operational alternate and fuel planning locators."
        ],
        "common_traps": [
          "Do not proceed just because destination weather is acceptable if another alternate trigger applies.",
          "Do not compare required fuel with total tank capacity; use usable fuel and aircraft-specific fuel information.",
          "Do not defer a known fuel shortfall to in-flight replanning unless the MOS conditions for replanning/continuation are met."
        ],
        "worked_examples": "TODO: Add proceed/no-proceed fuel examples after selecting aircraft fuel capacity, route, forecast and alternate assumptions.",
        "exam_use": [
          "Build the decision chain: alternate required, alternate suitable, holding required, required fuel calculated, usable fuel available.",
          "Use Part 91 MOS Division 8.2 and Chapter 19 as the primary exam lookup pair."
        ]
      }
    },
    {
      "id": "PIFR-048",
      "mos_ref": "11.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 11.1.1",
      "objective": "State airways clearance requirements for operating in all classes of airspace, including lead time required for flight plan submission, contents, 'clearance void time', and 'read back' requirement.",
      "section_no": "11",
      "section_title": "CTA operations",
      "element_no": null,
      "element_title": null,
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.240, 91.255, 91.257",
        "Part 91 MOS": "Part 91 MOS sections 9.02-9.03, 11.12-11.13 and 21.05",
        "AIP reference": "AIP ENR 1.1 sections 2.2.1-2.2.9; AIP ENR 1.10 sections 2.1-2.22 and 3.1-3.5; AIP GEN 3.4 sections 5.3-5.7",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers IFR flight-plan submission, changes to flight plans, controlled-airspace clearance requirements, clearance validity and expiry time, PDC timing, voice/PDC readback, and route/level amendment readback requirements. The current AIP wording located in this pass uses clearance expiry time rather than the MOS phrase clearance void time.",
      "study_file": "docs/09-study-guide/PIFR-048.md",
      "study": {
        "why": "Airways clearance requirements determine whether an IFR flight can enter or operate in controlled airspace, and the exam often tests timing, readback and clearance validity details.",
        "study_notes": [
          "CASR 91.240, 91.255 and 91.257 provide the regulation hooks for flight notification and controlled-airspace operation.",
          "Part 91 MOS 9.02 to 9.03 cover IFR flight-plan submission and changes.",
          "Part 91 MOS 11.12 to 11.13 and 21.05 cover controlled-airspace clearances and prescribed reports.",
          "AIP ENR 1.1, AIP ENR 1.10 and AIP GEN 3.4 provide the operational locators for clearance issue, expiry, PDC timing and readback."
        ],
        "common_traps": [
          "Do not use the older phrase `clearance void time` without checking the current AIP wording; the verified source notes flag `clearance expiry time`.",
          "Do not treat flight-plan submission as the same thing as receiving an airways clearance.",
          "Readback requirements are not optional when the AIP/MOS requires them."
        ],
        "worked_examples": "TODO: Add clearance request and readback examples after selecting exact route/airspace scenarios.",
        "exam_use": [
          "Use Part 91 MOS 9.02 to 9.03 for flight-plan submission and amendment requirements.",
          "Use AIP ENR 1.1 section 2.2 and AIP GEN 3.4 section 5 for clearance/readback details."
        ]
      }
    },
    {
      "id": "PIFR-049",
      "mos_ref": "11.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 11.1.2",
      "objective": "State airways clearance requirements for entering, operating in and departing CTA and CTR, including what details to provide to ATC, and what details to expect from ATC.",
      "section_no": "11",
      "section_title": "CTA operations",
      "element_no": null,
      "element_title": null,
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.255, 91.257",
        "Part 91 MOS": "Part 91 MOS sections 11.12-11.13 and 21.05",
        "AIP reference": "AIP ENR 1.1 sections 2.2.1, 2.2.6-2.2.7, 2.3-2.6; AIP GEN 3.4 sections 5.4-5.7",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers entering controlled airspace, Class D entry communications, approach first-contact details, taxi and take-off clearances, ready reports, POB advice for non-air-transport IFR flights, and expected ATC route/level/readback handling.",
      "study_file": "docs/09-study-guide/PIFR-049.md",
      "study": {
        "why": "CTA and CTR entry/departure questions test what information must be given to ATC and what clearance details the pilot must expect, read back and comply with.",
        "study_notes": [
          "CASR 91.255 and 91.257 are the regulation hooks for controlled-airspace operation and ATC clearance compliance.",
          "Part 91 MOS 11.12 to 11.13 and 21.05 are the primary MOS locators.",
          "AIP ENR 1.1 sections 2.2.1, 2.2.6 to 2.2.7 and 2.3 to 2.6 provide controlled-airspace operating context.",
          "AIP GEN 3.4 sections 5.4 to 5.7 provide radio communication and readback procedure context."
        ],
        "common_traps": [
          "Do not enter CTA or CTR on expectation; identify the clearance or entry communication rule that applies.",
          "Do not omit POB advice where required for non-air-transport IFR flights.",
          "Do not ignore route, level or frequency details embedded in the clearance."
        ],
        "worked_examples": "TODO: Add CTA/CTR entry and departure call examples after selecting controlled-aerodrome and en route scenarios.",
        "exam_use": [
          "Use AIP ENR 1.1 section 2 for controlled-airspace procedures.",
          "Use AIP GEN 3.4 section 5 for the communication and readback layer."
        ]
      }
    },
    {
      "id": "PIFR-050",
      "mos_ref": "11.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 11.1.3",
      "objective": "State what is 'controlled area protection'.",
      "section_no": "11",
      "section_title": "CTA operations",
      "element_no": null,
      "element_title": null,
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "Medium",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "TODO",
        "AIP reference": "AIP ENR 1.1 section 2.5.3.3; AIP ENR 1.5 sections 1.15-1.16",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Partial verification only. Current AIP references use the operational requirement to remain 500 ft above the lower limit of CTA during specified visual departure and visual approach/descent circumstances unless cleared otherwise, but the exact MOS phrase controlled area protection was not found in the current verified CASA/Airservices source cache. Treat the concept label as a source gap until a current official public source is verified.",
      "study_file": "docs/09-study-guide/PIFR-050.md",
      "study": {
        "why": "The MOS lists controlled area protection as an objective, but the exact current public-source definition has not yet been verified.",
        "study_notes": [
          "The verified AIP material supports an operational 500 ft buffer above the lower limit of CTA during specified visual departure and visual approach/descent contexts.",
          "AIP ENR 1.1 section 2.5.3.3 and AIP ENR 1.5 sections 1.15 to 1.16 are the current partial locators.",
          "The exact term `controlled area protection` remains a source gap until a current public CASA or Airservices definition is verified."
        ],
        "common_traps": [
          "Do not invent a definition from training memory.",
          "Do not expand the concept beyond the verified AIP operational references.",
          "Treat this as partial support, not a fully mapped definition."
        ],
        "worked_examples": "TODO: Add examples only after verifying a current official definition of controlled area protection.",
        "exam_use": [
          "Use the verified AIP references for the current operational 500 ft CTA buffer context.",
          "Check the source-gap register before adding any broader explanatory definition."
        ]
      }
    },
    {
      "id": "PIFR-051",
      "mos_ref": "11.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 11.1.4",
      "objective": "State ATC requirements for a change of level in CTA, including in an emergency situation.",
      "section_no": "11",
      "section_title": "CTA operations",
      "element_no": null,
      "element_title": null,
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.257",
        "Part 91 MOS": "Part 91 MOS sections 11.06, 11.12 and 21.05 Table 21.05(1) items 8-9",
        "AIP reference": "AIP ENR 1.1 sections 2.2.2-2.2.5; AIP ENR 1.7 section 4.1; AIP GEN 3.4 sections 5.4 and 5.7",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers compliance with ATC clearances/instructions, immediate advice if unable to comply, urgency/emergency deviation procedure using 7700, ACAS RA priority over ATC instructions, level-change readback, leaving/reaching assigned-level reports, ATC rate/restriction instructions and reporting maintained unassigned interim levels.",
      "study_file": "docs/09-study-guide/PIFR-051.md",
      "study": {
        "why": "Level changes in CTA are clearance-controlled, and emergency deviations have specific reporting and transponder implications.",
        "study_notes": [
          "CASR 91.257 is the regulation hook for complying with ATC clearances and instructions.",
          "Part 91 MOS 11.06, 11.12 and Table 21.05(1) items 8 to 9 are the key MOS locators.",
          "AIP ENR 1.1 sections 2.2.2 to 2.2.5 and AIP ENR 1.7 section 4.1 provide level-change and altimetry context.",
          "AIP GEN 3.4 sections 5.4 and 5.7 provide communication and readback context."
        ],
        "common_traps": [
          "Do not change level in CTA without clearance unless an emergency/safety rule applies.",
          "If unable to comply, advise ATC immediately rather than silently deviating.",
          "ACAS RA and emergency action may override ATC instructions, but the pilot must follow the required reporting actions."
        ],
        "worked_examples": "TODO: Add CTA level-change and emergency-deviation examples after selecting airspace and clearance scenarios.",
        "exam_use": [
          "Use CASR 91.257 and Part 91 MOS 11.12 for clearance compliance.",
          "Use Part 91 MOS Table 21.05(1) for leaving/reaching level reports."
        ]
      }
    },
    {
      "id": "PIFR-052",
      "mos_ref": "11.1.5",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 11.1.5",
      "objective": "State the procedures for the following components of a flight profile for day and night operations in CTA and CTR: (a) departure; (b) climb; (c) transition to cruise (levelling out); (d) cruise; (e) change of levels; (f) descent and visual approach.",
      "section_no": "11",
      "section_title": "CTA operations",
      "element_no": null,
      "element_title": null,
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.255, 91.257, 91.287, 91.305",
        "Part 91 MOS": "Part 91 MOS sections 11.12-11.13, 14.02, 21.05 and 21.06",
        "AIP reference": "AIP ENR 1.1 sections 2.2-2.6; AIP ENR 1.5 sections 1.15-1.16, 8.2 and 10.2; AIP ENR 1.7 section 4.1; AIP GEN 3.4 sections 5.4-5.7",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers controlled-aerodrome ground/take-off requirements, IFR visual departures by day, VFR departure by a planned IFR flight, controlled-airspace entry/operation/departure, climb/descent level restrictions, SID and STAR level/speed instruction handling, change-of-level reporting and visual approach requirements.",
      "study_file": "docs/09-study-guide/PIFR-052.md",
      "study": {
        "why": "CTA/CTR flight-profile questions combine several smaller rules across departure, climb, cruise, level change, descent and visual approach.",
        "study_notes": [
          "CASR 91.255, 91.257, 91.287 and 91.305 provide the regulation hooks for controlled airspace, navigation and minimum height.",
          "Part 91 MOS 11.12 to 11.13, 14.02, 21.05 and 21.06 provide the MOS operating and reporting framework.",
          "AIP ENR 1.1 sections 2.2 to 2.6 and AIP ENR 1.5 sections 1.15 to 1.16, 8.2 and 10.2 are the main operational locators.",
          "AIP ENR 1.7 section 4.1 and AIP GEN 3.4 sections 5.4 to 5.7 support level and communication procedure lookup."
        ],
        "common_traps": [
          "Do not apply a departure rule to descent or visual approach without checking the flight phase.",
          "Do not ignore day/night differences where visual departure or visual approach is involved.",
          "Do not let a SID/STAR or ATC level/speed instruction conflict go unresolved; use the current AIP/MOS procedure."
        ],
        "worked_examples": "TODO: Add staged CTA/CTR flight-profile examples after selecting a controlled aerodrome and route.",
        "exam_use": [
          "Break the question into phase of flight first.",
          "Use AIP ENR 1.1 section 2 for controlled-airspace operation and AIP GEN 3.4 section 5 for the radio layer."
        ]
      }
    },
    {
      "id": "PIFR-053",
      "mos_ref": "11.2.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 11.2.1",
      "objective": "State the provision of separation between IFR flights, and IFR and VFR flights in the various classes of CTA.",
      "section_no": "11",
      "section_title": "CTA operations",
      "element_no": "11.2",
      "element_title": "Separation standards",
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.255, 91.257",
        "Part 91 MOS": "Part 91 MOS sections 11.15-11.17 and 21.05",
        "AIP reference": "AIP ENR 1.4 sections 1.1 and 2.1-2.4; AIP ENR 1.1 sections 2.6.3, 2.8 and 2.9",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers controlled airspace classes A, C, D and E, ATC service provision, IFR-to-IFR and IFR-to-VFR separation or traffic information by class, runway separation at controlled aerodromes, special pilot-assigned separation provisions, VFR departure by planned IFR flights, VFR climb/descent and VFR-on-top effects on separation responsibility.",
      "study_file": "docs/09-study-guide/PIFR-053.md",
      "study": {
        "why": "Separation provision changes by airspace class, so the exam answer depends on identifying both flight rules and class of CTA.",
        "study_notes": [
          "CASR 91.255 and 91.257 provide the controlled-airspace operation and clearance compliance hooks.",
          "Part 91 MOS 11.15 to 11.17 and 21.05 are the key MOS locators for ATC service and reporting context.",
          "AIP ENR 1.4 sections 1.1 and 2.1 to 2.4 identify the controlled airspace classes and service provision.",
          "AIP ENR 1.1 sections 2.6.3, 2.8 and 2.9 support separation, pilot-assigned separation and VFR effects on separation responsibility."
        ],
        "common_traps": [
          "Do not assume IFR is separated from every VFR flight in every class.",
          "Do not ignore VFR climb/descent or VFR-on-top effects where the AIP changes responsibility.",
          "Class D has its own service pattern and should not be answered from Class C assumptions."
        ],
        "worked_examples": "TODO: Add airspace-class separation examples after selecting class A/C/D/E scenarios.",
        "exam_use": [
          "Use AIP ENR 1.4 first to identify service provision by class.",
          "Use AIP ENR 1.1 section 2 for special separation and traffic-information cases."
        ]
      }
    },
    {
      "id": "PIFR-054",
      "mos_ref": "11.2.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 11.2.2",
      "objective": "State the provision of separation between IFR flights, and IFR and VFR flights in Class D airspace.",
      "section_no": "11",
      "section_title": "CTA operations",
      "element_no": "11.2",
      "element_title": "Separation standards",
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.255, 91.257",
        "Part 91 MOS": "Part 91 MOS sections 11.15-11.17 and 21.05",
        "AIP reference": "AIP ENR 1.4 section 2.1.3 and 2.2; AIP ENR 1.1 sections 2.2.7, 2.6.2-2.6.3 and 2.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. In Class D, IFR flights are separated from other IFR and Special VFR flights and receive traffic information on VFR flights; VFR flights receive traffic information on all other flights. The map also flags Class D pilot responsibility during VFR departure by an IFR-planned flight and VFR climb/descent.",
      "study_file": "docs/09-study-guide/PIFR-054.md",
      "study": {
        "why": "Class D is a frequent exam trap because IFR separation and VFR traffic information are not the same service.",
        "study_notes": [
          "CASR 91.255 and 91.257 provide the controlled-airspace regulation context.",
          "Part 91 MOS 11.15 to 11.17 and 21.05 support the ATC service and reporting framework.",
          "AIP ENR 1.4 sections 2.1.3 and 2.2 identify Class D service provision.",
          "AIP ENR 1.1 sections 2.2.7, 2.6.2 to 2.6.3 and 2.8 support Class D operational detail."
        ],
        "common_traps": [
          "Do not state that IFR receives separation from all VFR flights in Class D.",
          "Separate `separation` from `traffic information` in the answer.",
          "Check whether a planned IFR flight is operating under VFR departure or VFR climb/descent provisions."
        ],
        "worked_examples": "TODO: Add Class D separation and traffic-information examples after selecting a Class D aerodrome scenario.",
        "exam_use": [
          "Go to AIP ENR 1.4 section 2 for the class-service table.",
          "Use AIP ENR 1.1 section 2.6 for Class D operating detail."
        ]
      }
    },
    {
      "id": "PIFR-055",
      "mos_ref": "11.3.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 11.3.1",
      "objective": "Demonstrate knowledge of radio procedures in CTA and CTR.",
      "section_no": "11",
      "section_title": "CTA operations",
      "element_no": "11.3",
      "element_title": "Radio procedures",
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.255, 91.257, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 11.12-11.13, 11.15-11.18, 21.05 and 26.18-26.19",
        "AIP reference": "AIP GEN 3.4 sections 4.1, 5.1-5.7, 5.19, 6.8, 6.11 and 6.12; AIP ENR 1.1 sections 2.2.6-2.2.9, 2.3-2.7 and 2.10.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers radio equipment capability, use of frequencies, initial contact, call signs, readback, amended and recleared route/level phraseology, clearance requests, traffic information, Class D entry communications, PDC readback, ground/take-off/after-take-off calls, frequency changes and controlled-airspace reports.",
      "study_file": "docs/09-study-guide/PIFR-055.md",
      "study": {
        "why": "Radio procedures in CTA/CTR are examined through clearance, readback, call sign, frequency-change, traffic-information and report requirements.",
        "study_notes": [
          "CASR 91.255, 91.257 and 91.810 provide the controlled-airspace, clearance and equipment hooks.",
          "Part 91 MOS 11.12 to 11.18, 21.05 and 26.18 to 26.19 are the MOS locators for clearances, reports and radio equipment capability.",
          "AIP GEN 3.4 sections 4.1, 5.1 to 5.7, 5.19, 6.8, 6.11 and 6.12 provide radiotelephony, readback and phraseology context.",
          "AIP ENR 1.1 sections 2.2.6 to 2.2.9, 2.3 to 2.7 and 2.10.3 support controlled-airspace radio procedure context."
        ],
        "common_traps": [
          "Do not paraphrase mandatory readbacks where exact readback is required.",
          "Do not change frequency until authorised or required by the applicable procedure.",
          "Do not omit amended clearance or recleared route/level readback requirements."
        ],
        "worked_examples": "TODO: Add CTA/CTR radio call examples after selecting route, clearance and frequency-change scenarios.",
        "exam_use": [
          "Use AIP GEN 3.4 section 5 for radio procedure and readback.",
          "Use AIP ENR 1.1 section 2 for the controlled-airspace operating context."
        ]
      }
    },
    {
      "id": "PIFR-056",
      "mos_ref": "11.3.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 11.3.2",
      "objective": "Determine procedures for loss of radio communication in CTA and CTR.",
      "section_no": "11",
      "section_title": "CTA operations",
      "element_no": "11.3",
      "element_title": "Radio procedures",
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.257, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 11.10, 11.18 and 26.69 Table 26.69(7A)",
        "AIP reference": "AIP ENR 1.1 section 6.2; AIP ENR 1.6 section 6.2 and 6.4.3-6.4.4; AIP GEN 3.4 section 6.17.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers domestic and oceanic inoperative-radio procedures, squawk 7600, blind broadcasts, VMC landing option, IMC last assigned altitude/vector/holding pattern route-clearance sequence, alternative frequency during ATS surveillance service, receive-only instruction handling, and SSR acknowledgment by IDENT.",
      "study_file": "docs/09-study-guide/PIFR-056.md",
      "study": {
        "why": "Radio failure in CTA/CTR is a high-risk procedural memory item, but the exam answer should still be located from the AIP/MOS sequence.",
        "study_notes": [
          "CASR 91.257 and 91.810 provide the clearance compliance and equipment regulation hooks.",
          "Part 91 MOS 11.10, 11.18 and Table 26.69(7A) are the MOS locators for radio failure and transponder code context.",
          "AIP ENR 1.1 section 6.2 is the main radio-failure procedure locator.",
          "AIP ENR 1.6 sections 6.2 and 6.4.3 to 6.4.4 and AIP GEN 3.4 section 6.17.6 support surveillance, 7600 and IDENT handling."
        ],
        "common_traps": [
          "Do not use the VMC option when the question states IMC conditions.",
          "Do not skip the squawk 7600 and broadcast/assumed-broadcast steps.",
          "Do not treat receive-only instructions as normal two-way communications."
        ],
        "worked_examples": "TODO: Add CTA/CTR radio-failure scenarios after selecting VMC/IMC, clearance and vectoring contexts.",
        "exam_use": [
          "Go directly to AIP ENR 1.1 section 6.2 for the procedural sequence.",
          "Use Part 91 MOS Table 26.69(7A) for the transponder code lookup."
        ]
      }
    },
    {
      "id": "PIFR-057",
      "mos_ref": "11.3.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 11.3.3",
      "objective": "Determine procedures for abnormal operations and/or emergencies in CTA and CTR.",
      "section_no": "11",
      "section_title": "CTA operations",
      "element_no": "11.3",
      "element_title": "Radio procedures",
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.257, 91.455, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 11.06, 11.10, 19.05-19.06, 21.05 Table 21.05(1) item 9 and 26.69 Table 26.69(7A)",
        "AIP reference": "AIP ENR 1.1 sections 2.2.2-2.2.4, 8.4-8.7 and 10.9.2-10.9.3; AIP ENR 1.6 section 6; AIP GEN 3.4 sections 5.4, 6.8 and 6.17.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers inability to comply with ATC clearance, safety-driven deviation without clearance, urgency/emergency broadcasts, ACAS RA priority, minimum/emergency fuel declarations, RVSM equipment or turbulence contingencies where applicable, and emergency transponder codes 7500/7600/7700.",
      "study_file": "docs/09-study-guide/PIFR-057.md",
      "study": {
        "why": "Abnormal and emergency operations in CTA/CTR require quick identification of the correct safety deviation, communication, fuel or transponder action.",
        "study_notes": [
          "CASR 91.257, 91.455 and 91.810 provide the clearance, fuel and equipment regulation hooks.",
          "Part 91 MOS 11.06, 11.10, 19.05 to 19.06, Table 21.05(1) item 9 and Table 26.69(7A) are the key MOS locators.",
          "AIP ENR 1.1 sections 2.2.2 to 2.2.4, 8.4 to 8.7 and 10.9.2 to 10.9.3 cover clearance deviation, emergency communications and fuel-state procedures.",
          "AIP ENR 1.6 section 6 and AIP GEN 3.4 sections 5.4, 6.8 and 6.17.6 support surveillance/emergency code and phraseology lookup."
        ],
        "common_traps": [
          "Do not delay an immediate safety action while waiting for a clearance, but follow the required ATC advice afterward.",
          "Do not confuse minimum fuel with emergency fuel.",
          "Use the correct transponder code for unlawful interference, radio failure or emergency rather than a generic emergency answer."
        ],
        "worked_examples": "TODO: Add CTA/CTR abnormal and emergency scenarios after selecting fuel-state, ACAS, radio and transponder cases.",
        "exam_use": [
          "Use Part 91 MOS 11.06 and AIP ENR 1.1 section 8 for emergency/urgency actions.",
          "Use AIP ENR 1.1 section 10.9 for fuel-state declarations.",
          "Use Part 91 MOS Table 26.69(7A) for transponder codes."
        ]
      }
    },
    {
      "id": "PIFR-058",
      "mos_ref": "12.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 12.1.1",
      "objective": "State what radar services are provided by ATC.",
      "section_no": "12",
      "section_title": "Radar services",
      "element_no": null,
      "element_title": null,
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.255, 91.257",
        "Part 91 MOS": "Part 91 MOS sections 11.12 and 21.05",
        "AIP reference": "AIP ENR 1.6 sections 1-6; AIP ENR 1.4 sections 2.1-2.4; AIP GEN 3.4 sections 6.8 and 6.17",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current AIP Book Amendment 126 current 19 MAR 2026. Uses AIP terminology ATS surveillance services. Covers identification, vectoring, position information, traffic information, avoiding action where available, speed control, runway/airspace separation context and emergency assistance.",
      "study_file": "docs/09-study-guide/PIFR-058.md",
      "study": {
        "why": "ATS surveillance services are central to controlled IFR operations, but the exam may use older `radar` wording while the current AIP uses broader surveillance terminology.",
        "study_notes": [
          "AIP ENR 1.6 is the primary verified locator for ATS surveillance services.",
          "AIP ENR 1.4 sections 2.1 to 2.4 provide airspace service context.",
          "AIP GEN 3.4 sections 6.8 and 6.17 support surveillance-related communications and phraseology.",
          "The verified source status covers identification, vectoring, position information, traffic information, avoiding action where available, speed control, separation context and emergency assistance."
        ],
        "common_traps": [
          "Do not assume a surveillance service is available everywhere.",
          "Do not use `radar` wording to ignore ADS-B/SSR surveillance context in the current AIP.",
          "Separate surveillance identification, vectoring, traffic information and separation services."
        ],
        "worked_examples": "TODO: Add ATS surveillance service examples after selecting controlled airspace and surveillance-coverage scenarios.",
        "exam_use": [
          "Use AIP ENR 1.6 as the main lookup for surveillance services.",
          "Use AIP ENR 1.4 to cross-check service provision by airspace class."
        ]
      }
    },
    {
      "id": "PIFR-059",
      "mos_ref": "12.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 12.1.2",
      "objective": "Demonstrate knowledge of radar vectoring procedures, including radio procedures and phraseologies.",
      "section_no": "12",
      "section_title": "Radar services",
      "element_no": null,
      "element_title": null,
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.257",
        "Part 91 MOS": "Part 91 MOS sections 11.12 and 21.05 Table 21.05(1) items 8-9",
        "AIP reference": "AIP ENR 1.6 sections 1-3 and 6.2; AIP GEN 3.4 sections 5.4, 6.8, 6.11, 6.12 and 6.17",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers requests for ATS surveillance service, identification before service, heading/vector compliance, reasons for off-route vectors, unreliable-direction-instrument turns, vectoring terrain clearance, position information, final-approach vectoring, transfer to tower, termination of vectoring and related readback/phraseology.",
      "study_file": "docs/09-study-guide/PIFR-059.md",
      "study": {
        "why": "Radar/vectoring questions require exact compliance and readback because the aircraft may be off a published route while ATC provides surveillance guidance.",
        "study_notes": [
          "CASR 91.257 provides the clearance/instruction compliance hook.",
          "Part 91 MOS 11.12 and Table 21.05(1) items 8 to 9 provide the MOS clearance and level-report context.",
          "AIP ENR 1.6 sections 1 to 3 and 6.2 are the primary vectoring and surveillance procedure locators.",
          "AIP GEN 3.4 sections 5.4, 6.8, 6.11, 6.12 and 6.17 support readback and phraseology."
        ],
        "common_traps": [
          "Do not assume terrain clearance responsibility is unchanged during every vectoring situation; check the AIP vectoring context.",
          "Do not ignore heading/vector instructions because they take the aircraft off planned track.",
          "Read back headings, levels and other required instructions exactly where required."
        ],
        "worked_examples": "TODO: Add radar-vectoring phraseology examples after selecting approach/vectoring scenarios.",
        "exam_use": [
          "Use AIP ENR 1.6 sections 1 to 3 for vectoring procedure.",
          "Use AIP GEN 3.4 for phraseology and readback."
        ]
      }
    },
    {
      "id": "PIFR-060",
      "mos_ref": "12.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 12.1.3",
      "objective": "State the permissible intervals between ATC transmissions during radar vectoring.",
      "section_no": "12",
      "section_title": "Radar services",
      "element_no": null,
      "element_title": null,
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "TODO",
        "AIP reference": "AIP ENR 1.6 section 3.8",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against AIP Book Amendment 126 current 19 MAR 2026. During vectoring, ATC transmission intervals are kept short so pilots can quickly recognise communications failure; when aircraft are on headings that could infringe terrain clearance or separation standards, the interval must not exceed 30 seconds.",
      "study_file": "docs/09-study-guide/PIFR-060.md",
      "study": {
        "why": "ATC transmission interval during vectoring is a precise AIP value and should be treated as a direct lookup item.",
        "study_notes": [
          "AIP ENR 1.6 section 3.8 is the verified source for transmission intervals during vectoring.",
          "The verified source status identifies a maximum interval of 30 seconds when aircraft are on headings that could infringe terrain clearance or separation standards.",
          "This objective currently has AIP-only support in the reference map, so do not add extra MOS or regulation references without verification."
        ],
        "common_traps": [
          "Do not apply the 30-second interval to every ATC transmission context; it is tied to the vectoring condition in AIP ENR 1.6.",
          "Do not invent a different timing value from memory.",
          "Check whether the question is about vectoring specifically or general radio communication."
        ],
        "worked_examples": "TODO: Add vectoring interval examples after selecting surveillance-vectoring scenarios.",
        "exam_use": [
          "Go directly to AIP ENR 1.6 section 3.8.",
          "Confirm whether the vector heading could infringe terrain clearance or separation standards."
        ]
      }
    },
    {
      "id": "PIFR-061",
      "mos_ref": "12.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 12.1.4",
      "objective": "Demonstrate knowledge of radar emergency procedures, including loss of radio communication, radar failure, transponder emergency codes, and aircraft emergencies.",
      "section_no": "12",
      "section_title": "Radar services",
      "element_no": null,
      "element_title": null,
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.257, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 11.06, 11.10 and 26.69 Table 26.69(7A)",
        "AIP reference": "AIP ENR 1.6 section 6; AIP ENR 1.1 sections 2.2.4 and 6.2; AIP GEN 3.4 section 6.17.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers radar/vectoring emergency assistance, two-way communication failure while receiving ATS surveillance service, alternative frequency procedure, standard radio failure procedure, ATS surveillance system failure/loss of identification instructions, emergency SSR codes 7500/7600/7700 and receive-only IDENT acknowledgment.",
      "study_file": "docs/09-study-guide/PIFR-061.md",
      "study": {
        "why": "Surveillance emergency procedures combine radio failure, surveillance failure, emergency codes and aircraft emergency assistance.",
        "study_notes": [
          "CASR 91.257 and 91.810 provide the clearance/instruction and equipment hooks.",
          "Part 91 MOS 11.06, 11.10 and Table 26.69(7A) are the MOS locators for emergency deviation, radio failure and transponder codes.",
          "AIP ENR 1.6 section 6 is the primary surveillance emergency locator.",
          "AIP ENR 1.1 sections 2.2.4 and 6.2 and AIP GEN 3.4 section 6.17.6 support radio-failure and IDENT/SSR phraseology context."
        ],
        "common_traps": [
          "Do not use the normal vectoring procedure after surveillance identification or system service is lost without checking ATC instructions.",
          "Do not confuse 7500, 7600 and 7700.",
          "Do not treat receive-only or IDENT acknowledgment as restored two-way communication."
        ],
        "worked_examples": "TODO: Add surveillance emergency examples after selecting radio failure, surveillance failure and aircraft emergency cases.",
        "exam_use": [
          "Use AIP ENR 1.6 section 6 for surveillance emergency procedure.",
          "Use Part 91 MOS Table 26.69(7A) for emergency transponder codes."
        ]
      }
    },
    {
      "id": "PIFR-062",
      "mos_ref": "13.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 13.1.1",
      "objective": "State the procedures for the following components of a flight profile for day and night operations in Class G airspace and at non-controlled aerodromes: (a) departure; (b) climb; (c) transition to cruise (levelling out); (d) cruise; (e) change of levels; (f) descent, and arrival.",
      "section_no": "13",
      "section_title": "OCTA operations",
      "element_no": "13.1",
      "element_title": "Flight profile procedures - OCTA",
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.325, 91.370, 91.385, 91.390, 91.395, 91.400, 91.410, 91.630",
        "Part 91 MOS": "Part 91 MOS sections 21.03-21.04, 21.06 and 21.09",
        "AIP reference": "AIP ENR 1.1 sections 9.1-9.17 and 10.1-10.3; AIP ENR 1.4 section 3.1",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers Class G services, non-controlled aerodrome see-and-avoid, taxi/departure reports, departure track within 5 NM, climb/cruise/level-change/position-report requirements, descent from controlled airspace into Class G, CTAF change reports, landing manoeuvres, circuit entry, straight-in and base joins, take-off/landing separation and runway vacating.",
      "study_file": "docs/09-study-guide/PIFR-062.md",
      "study": {
        "why": "Class G and non-controlled aerodrome IFR procedures rely heavily on broadcast, report, see-and-avoid and SARWATCH logic rather than ATC clearances.",
        "study_notes": [
          "CASR 91.325, 91.370, 91.385, 91.390, 91.395, 91.400, 91.410 and 91.630 provide the operating-rule context.",
          "Part 91 MOS 21.03 to 21.04, 21.06 and 21.09 are the MOS locators for Class G/non-controlled aerodrome reporting and broadcasts.",
          "AIP ENR 1.1 sections 9.1 to 9.17 and 10.1 to 10.3 are the main operational locators.",
          "AIP ENR 1.4 section 3.1 provides Class G service context."
        ],
        "common_traps": [
          "Do not apply controlled-aerodrome clearance logic to a non-controlled aerodrome.",
          "Do not omit taxi, departure, level-change, frequency-change, CTAF and arrival reports where required.",
          "See-and-avoid and runway separation responsibilities remain important even for IFR aircraft."
        ],
        "worked_examples": "TODO: Add Class G/non-controlled flight-profile examples after selecting a sample aerodrome and route.",
        "exam_use": [
          "Use AIP ENR 1.1 section 9 for non-controlled aerodrome procedures.",
          "Use Part 91 MOS 21.06 for IFR Class G prescribed reports."
        ]
      }
    },
    {
      "id": "PIFR-063",
      "mos_ref": "13.2.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 13.2.1",
      "objective": "State visual approach procedures, day and night, in Class G airspace and at non-controlled aerodromes, including the following: (a) landing manoeuvres; (b) cancellation of SARWATCH; (c) operation of VHF aerodrome lighting (PAL).",
      "section_no": "13",
      "section_title": "OCTA operations",
      "element_no": "13.2",
      "element_title": "Visual approach procedures",
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.325, 91.385, 91.390, 91.395, 91.400, 91.410, 91.630",
        "Part 91 MOS": "Part 91 MOS sections 8.06, 21.04, 21.06 Table 21.06(1) item 10 and 21.09",
        "AIP reference": "AIP ENR 1.1 sections 9.11-9.16, 10.2 and 10.7.4.3-10.8.1; AIP GEN 3.4 section 6.5",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers non-controlled aerodrome visual landing manoeuvres, overfly/circuit/straight-in/base-join procedures, SARWATCH and SARTIME cancellation, CTAF/circuit/after-landing cancellation timing, PAL alternate and responsible-person requirements, and night lighting arrangements.",
      "study_file": "docs/09-study-guide/PIFR-063.md",
      "study": {
        "why": "Visual approach and arrival at non-controlled aerodromes combine landing manoeuvres, SARWATCH cancellation and PAL/night lighting decisions.",
        "study_notes": [
          "CASR 91.325, 91.385, 91.390, 91.395, 91.400, 91.410 and 91.630 provide the operating-rule context.",
          "Part 91 MOS 8.06, 21.04, Table 21.06(1) item 10 and 21.09 are the MOS locators for alternate, reporting and broadcast context.",
          "AIP ENR 1.1 sections 9.11 to 9.16, 10.2 and 10.7.4.3 to 10.8.1 provide visual arrival, SARWATCH and lighting context.",
          "AIP GEN 3.4 section 6.5 supports PAL communications context."
        ],
        "common_traps": [
          "Do not cancel SARWATCH too early; check the AIP cancellation timing and method.",
          "Do not assume PAL availability or serviceability without checking the relevant information.",
          "Do not treat straight-in, base join and circuit procedures as interchangeable."
        ],
        "worked_examples": "TODO: Add non-controlled visual approach examples after selecting aerodrome, daylight/night and SARWATCH assumptions.",
        "exam_use": [
          "Use AIP ENR 1.1 sections 9.11 to 9.16 for landing manoeuvres.",
          "Use AIP ENR 1.1 section 10 for SARWATCH and PAL/night lighting context."
        ]
      }
    },
    {
      "id": "PIFR-064",
      "mos_ref": "13.3.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 13.3.1",
      "objective": "Demonstrate knowledge of radio procedures in Class G airspace and at non-controlled aerodromes.",
      "section_no": "13",
      "section_title": "OCTA operations",
      "element_no": "13.3",
      "element_title": "Radio and abnormal procedures",
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.400, 91.630, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 21.03-21.04, 21.06, 21.09 and 26.18-26.19",
        "AIP reference": "AIP ENR 1.1 sections 9.1, 9.5-9.10, 9.11-9.17, 10.2-10.3 and 12.1-12.3; AIP GEN 3.4 sections 5.1-5.7 and 6.5",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers CTAF and Area VHF selection, standard broadcast format, recommended non-controlled aerodrome broadcasts, IFR Class G taxi/departure/level/frequency/CTAF/arrival reports, mandatory broadcast area broadcasts, SARWATCH phraseology and general radiotelephony format/readback rules.",
      "study_file": "docs/09-study-guide/PIFR-064.md",
      "study": {
        "why": "Class G and non-controlled aerodrome radio procedures are exam-heavy because the pilot must select frequencies, broadcast at the right times and use standard formats without ATC prompting.",
        "study_notes": [
          "CASR 91.400, 91.630 and 91.810 provide the broadcast, radio and equipment regulation context.",
          "Part 91 MOS 21.03 to 21.04, 21.06, 21.09 and 26.18 to 26.19 are the MOS locators for radio reports and equipment.",
          "AIP ENR 1.1 sections 9.1, 9.5 to 9.17, 10.2 to 10.3 and 12.1 to 12.3 provide Class G, non-controlled aerodrome and mandatory broadcast area context.",
          "AIP GEN 3.4 sections 5.1 to 5.7 and 6.5 provide radio procedure, standard format and PAL communication context."
        ],
        "common_traps": [
          "Do not use Area VHF when CTAF is required for the aerodrome stage, or vice versa.",
          "Do not omit mandatory broadcast area requirements.",
          "Use standard broadcast format rather than informal position calls."
        ],
        "worked_examples": "TODO: Add Class G and CTAF broadcast examples after selecting route, aerodrome and frequency-change scenarios.",
        "exam_use": [
          "Use AIP ENR 1.1 section 9 for non-controlled aerodrome broadcasts.",
          "Use AIP ENR 1.1 section 12 for mandatory broadcast areas.",
          "Use AIP GEN 3.4 section 5 for standard radiotelephony format."
        ]
      }
    },
    {
      "id": "PIFR-065",
      "mos_ref": "13.3.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 13.3.2",
      "objective": "Determine procedures for loss of radio communication in Class G airspace and at non-controlled aerodromes.",
      "section_no": "13",
      "section_title": "OCTA operations",
      "element_no": "13.3",
      "element_title": "Radio and abnormal procedures",
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.400, 91.630, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 11.10, 21.04, 21.06, 26.18-26.19 and 26.69 Table 26.69(7A)",
        "AIP reference": "AIP ENR 1.1 sections 6.2 and 9.2.7; AIP ENR 1.6 sections 6.2 and 6.4.3-6.4.4",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Covers non-radio and inoperative-radio limitations, no-radio arrival/departure conditions, Class G radio-failure actions, squawk 7600, broadcast/assumed-broadcast procedure, VMC/IMC continuation logic and continued transponder use at non-controlled aerodromes.",
      "study_file": "docs/09-study-guide/PIFR-065.md",
      "study": {
        "why": "Radio failure in Class G/non-controlled contexts changes the risk picture because there is no normal ATC clearance service at the aerodrome.",
        "study_notes": [
          "CASR 91.400, 91.630 and 91.810 provide broadcast, radio and equipment context.",
          "Part 91 MOS 11.10, 21.04, 21.06, 26.18 to 26.19 and Table 26.69(7A) are the MOS locators for radio failure, reports, equipment and transponder code.",
          "AIP ENR 1.1 sections 6.2 and 9.2.7 provide radio-failure and non-controlled aerodrome context.",
          "AIP ENR 1.6 sections 6.2 and 6.4.3 to 6.4.4 support surveillance/radio-failure and SSR handling."
        ],
        "common_traps": [
          "Do not assume non-controlled aerodrome arrival is permitted without checking the no-radio/inoperative-radio limitations.",
          "Do not forget 7600 and continued transponder operation where applicable.",
          "Do not use CTA/CTR clearance-loss logic where the AIP provides a Class G/non-controlled procedure."
        ],
        "worked_examples": "TODO: Add Class G/non-controlled radio-failure examples after selecting VMC/IMC and aerodrome scenarios.",
        "exam_use": [
          "Use AIP ENR 1.1 section 6.2 for general radio-failure procedure.",
          "Use AIP ENR 1.1 section 9.2.7 for non-controlled aerodrome no-radio context."
        ]
      }
    },
    {
      "id": "PIFR-066",
      "mos_ref": "13.3.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 13.3.3",
      "objective": "Determine procedures for abnormal operations and/or emergencies Class G airspace and at non-controlled aerodromes.",
      "section_no": "13",
      "section_title": "OCTA operations",
      "element_no": "13.3",
      "element_title": "Radio and abnormal procedures",
      "module": "Airspace And Radio Procedures",
      "module_slug": "airspace-and-radio-procedures",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.325, 91.330, 91.370, 91.400, 91.455, 91.630, 91.810",
        "Part 91 MOS": "Part 91 MOS sections 11.06, 11.10, 19.05-19.06, 21.04, 21.06, 21.09 and 26.69 Table 26.69(7A)",
        "AIP reference": "AIP ENR 1.1 sections 6.2, 9.1-9.17, 10.9.2-10.9.3 and 10.10.8; AIP ENR 1.6 section 6; AIP GEN 3.4 sections 6.8 and 6.17.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers see-and-avoid, right-of-way and runway separation at non-controlled aerodromes, radio failure, explicit collision-avoidance broadcasts, minimum/emergency fuel declarations, emergency transponder codes, traffic information, laser-illumination broadcasts and ACAS RA priority where applicable.",
      "study_file": "docs/09-study-guide/PIFR-066.md",
      "study": {
        "why": "Abnormal and emergency operations in Class G/non-controlled aerodrome contexts require the pilot to combine see-and-avoid, broadcasts, fuel declarations, radio failure and emergency code procedures.",
        "study_notes": [
          "CASR 91.325, 91.330, 91.370, 91.400, 91.455, 91.630 and 91.810 provide the operating, fuel and equipment regulation hooks.",
          "Part 91 MOS 11.06, 11.10, 19.05 to 19.06, 21.04, 21.06, 21.09 and Table 26.69(7A) are the MOS locators.",
          "AIP ENR 1.1 sections 6.2, 9.1 to 9.17, 10.9.2 to 10.9.3 and 10.10.8 provide operational radio failure, aerodrome, fuel and laser-illumination context.",
          "AIP ENR 1.6 section 6 and AIP GEN 3.4 sections 6.8 and 6.17.6 support surveillance emergency and phraseology lookup."
        ],
        "common_traps": [
          "Do not assume ATC will resolve traffic conflicts at a non-controlled aerodrome.",
          "Do not confuse minimum fuel, emergency fuel and other urgency/emergency broadcasts.",
          "Do not omit explicit collision-avoidance broadcasts where the AIP requires them."
        ],
        "worked_examples": "TODO: Add Class G/non-controlled abnormal and emergency scenarios after selecting traffic, fuel, radio and aerodrome assumptions.",
        "exam_use": [
          "Use AIP ENR 1.1 section 9 for non-controlled aerodrome procedures.",
          "Use AIP ENR 1.1 section 10.9 for fuel-state declarations.",
          "Use Part 91 MOS Table 26.69(7A) for transponder emergency codes."
        ]
      }
    },
    {
      "id": "PIFR-067",
      "mos_ref": "14.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 14.1.1",
      "objective": "Demonstrate knowledge of flying conditions likely to be associated with any phenomenon listed in AIP documents and the Bureau of Meteorology publication, Manual of Meteorology, Part 2.",
      "section_no": "14",
      "section_title": "Meteorology relevant to IFR operations:",
      "element_no": null,
      "element_title": null,
      "module": "Meteorology",
      "module_slug": "meteorology",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.230",
        "Part 91 MOS": "Part 91 MOS sections 7.02-7.03 and 8.02",
        "AIP reference": "AIP GEN 3.5 sections 1.3, 3, 4, 6 and 8; AIP ENR 1.10 section 1.2.4",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. These references identify required weather assessment, authorised forecast/report products, SIGWX, GAF, TAF, wind shear, microburst, tropical cyclone, SIGMET, AIRMET and AIREP Special services. The MOS also expressly requires knowledge from the Bureau of Meteorology Manual of Meteorology Part 2; that non-CASA/Airservices theory source remains a TODO under the current project source rules.",
      "study_file": "docs/09-study-guide/PIFR-067.md",
      "study": {
        "why": "The MOS requires weather-phenomenon knowledge for IFR decision-making, but the verified CASA/Airservices sources mainly identify products and services rather than the full BoM theory content.",
        "study_notes": [
          "CASR 91.230 is the regulation hook for weather assessment before flight.",
          "Part 91 MOS 7.02 to 7.03 and 8.02 provide the mapped operational forecast, report and alternate-weather context.",
          "AIP GEN 3.5 sections 1.3, 3, 4, 6 and 8 and AIP ENR 1.10 section 1.2.4 identify weather briefing, forecast/report, SIGWX, GAF, TAF, SIGMET, AIRMET, AIREP Special and hazardous-weather services.",
          "The MOS expressly requires Bureau of Meteorology Manual of Meteorology Part 2 theory; that source remains a current source dependency under the project rules."
        ],
        "common_traps": [
          "Do not treat AIP product descriptions as complete meteorological theory.",
          "Do not fill phenomenon-specific flying conditions from memory or commercial notes.",
          "Keep BoM Manual of Meteorology content as a source-gap item until the official source strategy is verified."
        ],
        "worked_examples": "TODO: Add weather-phenomenon examples only after verifying the allowed BoM Manual of Meteorology source material.",
        "exam_use": [
          "Use Part 91 MOS 7.02 and AIP GEN 3.5 for required weather products and services.",
          "Use the source-gap register before adding Manual of Meteorology theory detail."
        ]
      }
    },
    {
      "id": "PIFR-068",
      "mos_ref": "14.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 14.1.2",
      "objective": "Demonstrate knowledge of Australian climatology as enumerated in Manual of Meteorology Parts 1 and 2, with emphasis on the seasonal variations in the location and frequency of frontal weather, tropical cyclones, dust devils, thunderstorms, fog, and the associated penetration and/or avoidance techniques.",
      "section_no": "14",
      "section_title": "Meteorology relevant to IFR operations:",
      "element_no": null,
      "element_title": null,
      "module": "Meteorology",
      "module_slug": "meteorology",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.230",
        "Part 91 MOS": "Part 91 MOS sections 7.02-7.03 and 8.02",
        "AIP reference": "AIP GEN 3.5 sections 1.3, 4.7, 4.10-4.14 and 8; AIP ENR 1.10 section 1.2.4",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. AIP GEN 3.5 identifies aviation weather products and tropical cyclone, wind shear, microburst, SIGMET and AIRMET services, but it does not provide the full Australian climatology theory required by the MOS. The Bureau of Meteorology Manual of Meteorology Parts 1 and 2 remain TODO source dependencies under the current project source rules.",
      "study_file": "docs/09-study-guide/PIFR-068.md",
      "study": {
        "why": "Australian climatology affects seasonal IFR hazards and avoidance decisions, but the MOS source requirement points beyond the currently verified CASA/Airservices cache.",
        "study_notes": [
          "CASR 91.230 and Part 91 MOS 7.02 to 7.03 and 8.02 provide the operational weather assessment and alternate planning context.",
          "AIP GEN 3.5 sections 1.3, 4.7, 4.10 to 4.14 and 8 identify aviation weather services including tropical cyclone, wind shear, microburst, SIGMET and AIRMET context.",
          "AIP ENR 1.10 section 1.2.4 supports the flight planning weather-information context.",
          "The full Australian climatology theory from BoM Manual of Meteorology Parts 1 and 2 remains a source gap."
        ],
        "common_traps": [
          "Do not substitute broad seasonal general knowledge for the MOS-specified BoM Manual content.",
          "Do not describe penetration or avoidance techniques unless the source is verified.",
          "Do not merge this climatology objective with the separate hazardous-weather prediction objective."
        ],
        "worked_examples": "TODO: Add climatology and seasonal hazard examples only after verifying the allowed BoM source material.",
        "exam_use": [
          "Use AIP GEN 3.5 to locate weather services/products.",
          "Treat Australian climatology theory as unresolved until the BoM Manual source is verified and indexed."
        ]
      }
    },
    {
      "id": "PIFR-069",
      "mos_ref": "14.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 14.1.3",
      "objective": "Predict probability and likely duration and extent of airframe icing, hail, microbursts, wind shear, turbulence en route, when experiencing and/or observing certain cloud types, precipitation, temperature and/or turbulence.",
      "section_no": "14",
      "section_title": "Meteorology relevant to IFR operations:",
      "element_no": null,
      "element_title": null,
      "module": "Meteorology",
      "module_slug": "meteorology",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "CASR 91.230",
        "Part 91 MOS": "Part 91 MOS sections 7.02-7.03 and 8.02",
        "AIP reference": "AIP GEN 3.5 sections 4.4, 4.7, 4.10-4.11, 6.2-6.3 and 8; AIP ENR 1.10 section 1.2.4",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. These references cover use and reporting of forecasts and hazardous weather information, including thunderstorm/severe turbulence alternate triggers, SIGWX, GAF, wind shear warnings, microburst alerts, AIREP Special and SIGMET/AIRMET services. Probability/duration/extent prediction of icing, hail, microbursts, wind shear and turbulence from cloud and precipitation remains a TODO for verified official theory material.",
      "study_file": "docs/09-study-guide/PIFR-069.md",
      "study": {
        "why": "Icing, hail, microburst, wind shear and turbulence prediction is exam-critical, but the current verified sources support hazard products and reporting rather than full probability/duration/extent theory.",
        "study_notes": [
          "CASR 91.230 and Part 91 MOS 7.02 to 7.03 and 8.02 provide the operational weather assessment and alternate-weather context.",
          "AIP GEN 3.5 sections 4.4, 4.7, 4.10 to 4.11, 6.2 to 6.3 and 8 identify hazardous-weather products and reporting services.",
          "AIP ENR 1.10 section 1.2.4 supports pre-flight weather-information use.",
          "Predicting probability, duration and extent from cloud type, precipitation, temperature and turbulence remains a source gap for verified official theory material."
        ],
        "common_traps": [
          "Do not invent icing or microburst prediction rules from memory.",
          "Do not treat a SIGMET/AIRMET product description as complete hazard-prediction theory.",
          "Do not omit alternate-weather effects when thunderstorms, severe turbulence or related triggers are part of the question."
        ],
        "worked_examples": "TODO: Add hazardous-weather prediction examples only after verifying official theory source material.",
        "exam_use": [
          "Use AIP GEN 3.5 for hazardous-weather products and reporting services.",
          "Use Part 91 MOS 7.02/8.02 for weather assessment and alternate-trigger context.",
          "Keep detailed prediction theory marked as a source gap until verified."
        ]
      }
    },
    {
      "id": "PIFR-070",
      "mos_ref": "15.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.1.1",
      "objective": "Describe the instrument indications that would indicate the following: (a) scalloping; (b) VOR station passage; (c) abeam VOR station; (d) VOR radial the aircraft is on; (e) track error and/or drift experienced.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.1",
      "element_title": "VOR",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of VOR, DME and navigational tolerance; sections 14.02, 14.04 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6 and 6.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources cover VOR as a ground-based navigation aid, VOR/DME distance reporting, track-keeping precision, position fixing and VOR CDI deviation reporting. Specific VOR cockpit indications for scalloping, station passage, abeam indication, radial identification, track error and drift remain TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-070.md",
      "study": {
        "why": "VOR indications are high-value exam material, but the current verified sources support only operational use and deviation reporting, not the detailed cockpit indication theory.",
        "study_notes": [
          "Part 91 MOS 1.07 defines VOR, DME and navigational tolerance; sections 14.02, 14.04 and 14.05 support IFR navigation and GNSS/DME distance reporting context.",
          "AIP ENR 1.1 sections 4.4 to 4.6 and 6.3 are the verified AIP locators for track keeping, position fixing, deviation reporting and related procedures.",
          "Specific cockpit indications for scalloping, VOR station passage, abeam position, radial identification, track error and drift remain a source gap."
        ],
        "common_traps": [
          "Do not fill VOR cockpit indication theory from unsupported memory.",
          "Do not treat operational deviation reporting as a complete explanation of VOR instrument indications.",
          "Keep VOR technique notes separate from official CASA/Airservices references until an official technique source is verified."
        ],
        "worked_examples": "TODO: Add VOR indication examples only after verifying a public official technique source.",
        "exam_use": [
          "Use AIP ENR 1.1 sections 4.4 to 4.6 for operational track keeping and position-fixing rules.",
          "Use the source-gap register before adding detailed VOR indication theory."
        ]
      }
    },
    {
      "id": "PIFR-071",
      "mos_ref": "15.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.1.2",
      "objective": "Determine off-track distance experienced from VOR and DME cockpit indications.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.1",
      "element_title": "VOR",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of VOR, DME and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6 and 6.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources cover VOR/DME as ground-based aids, position fixing, VOR/DME deviation thresholds and DME/GNSS distance reporting. Off-track distance calculation from cockpit indications remains TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-071.md",
      "study": {
        "why": "Off-track distance from VOR/DME indications is explicitly examinable, but the verified references currently support the operational context rather than the calculation method.",
        "study_notes": [
          "Part 91 MOS 1.07 defines VOR, DME and navigational tolerance; sections 14.02 and 14.05 support navigation and distance-reporting context.",
          "AIP ENR 1.1 sections 4.4 to 4.6 and 6.3 provide verified locators for track keeping, position fixing, VOR/DME deviation thresholds and DME/GNSS distance reporting.",
          "The mathematical off-track distance method from cockpit indications remains a source gap until a public official technique source is verified."
        ],
        "common_traps": [
          "Do not invent a formula or worked result without an approved source.",
          "Do not confuse deviation-reporting thresholds with off-track distance calculation technique.",
          "Do not assume DME distance equals cross-track error."
        ],
        "worked_examples": "TODO: Add off-track distance calculations only after verifying a public official technique source.",
        "exam_use": [
          "Use AIP ENR 1.1 section 4 for operational tolerance and deviation context.",
          "Treat calculation technique as a source-gap item until verified."
        ]
      }
    },
    {
      "id": "PIFR-072",
      "mos_ref": "15.1.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.1.3",
      "objective": "State VOR omni-bearing selector (OBS) settings required to provide command indications when flying on given tracks both to and from the VOR.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.1",
      "element_title": "VOR",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definition of VOR and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources cover VOR tracking, VOR precision order and CDI deviation thresholds. OBS command-indication settings for tracks to and from a VOR remain TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-072.md",
      "study": {
        "why": "OBS command indications are practical VOR technique material, but the current verified sources do not explain the to/from setting method.",
        "study_notes": [
          "Part 91 MOS 1.07 defines VOR and navigational tolerance; sections 14.02 and 14.05 provide operational navigation context.",
          "AIP ENR 1.1 sections 4.4 to 4.6 verify VOR track guidance, precision order and CDI deviation thresholds.",
          "OBS settings required for command indications to and from a VOR remain a source gap."
        ],
        "common_traps": [
          "Do not add OBS setting rules from memory.",
          "Do not conflate VOR operational legality with cockpit technique.",
          "Do not merge this objective with intercept-heading objectives; the MOS keeps them separate."
        ],
        "worked_examples": "TODO: Add OBS command-indication examples only after verifying a public official technique source.",
        "exam_use": [
          "Use mapped AIP/MOS references for VOR operational use.",
          "Use the source-gap register for OBS technique before adding examples."
        ]
      }
    },
    {
      "id": "PIFR-073",
      "mos_ref": "15.1.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.1.4",
      "objective": "Calculate the heading to steer to intercept a new or original track to, or from, a VOR.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.1",
      "element_title": "VOR",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definition of VOR and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources require positive action to regain track and identify VOR as a permitted ground-based navigation aid. Heading-to-steer and VOR intercept calculation method remains TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-073.md",
      "study": {
        "why": "VOR intercept heading calculation is exam-relevant, but the current verified public sources only support the requirement to regain track and the use of VOR as a navigation aid.",
        "study_notes": [
          "Part 91 MOS 1.07 defines VOR and navigational tolerance; sections 14.02 and 14.05 support operational navigation context.",
          "AIP ENR 1.1 sections 4.4 to 4.6 provide verified track-keeping and positive-action-to-regain-track context.",
          "The heading-to-steer and intercept calculation method remains a source gap until a public official technique source is verified."
        ],
        "common_traps": [
          "Do not invent intercept arithmetic or rules of thumb.",
          "Do not treat `positive action to regain track` as a worked intercept method.",
          "Keep calculations out of official-reference sections unless sourced."
        ],
        "worked_examples": "TODO: Add VOR intercept-heading calculations only after verifying a public official technique source.",
        "exam_use": [
          "Use AIP ENR 1.1 section 4 for the operational duty to maintain/regain track.",
          "Treat the specific intercept arithmetic as unresolved source material."
        ]
      }
    },
    {
      "id": "PIFR-074",
      "mos_ref": "15.1.5",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.1.5",
      "objective": "Fix position, given cockpit instrument indications utilising 2 VOR stations.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.1",
      "element_title": "VOR",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definition of VOR and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. AIP ENR 1.1 section 4.5 states that a positive fix may be determined by the intersection of two or more position lines from VOR, localiser, NDB or DME in combination. Cockpit-indication plotting method using 2 VORs remains TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-074.md",
      "study": {
        "why": "Two-VOR position fixing connects the official positive-fix rule with cockpit plotting technique; only the positive-fix rule is currently verified.",
        "study_notes": [
          "Part 91 MOS 1.07 defines VOR and navigational tolerance; sections 14.02 and 14.05 support IFR navigation context.",
          "AIP ENR 1.1 section 4.5 verifies that a positive fix may be determined by intersecting two or more position lines from VOR, localiser, NDB or DME in combination.",
          "The cockpit-indication plotting method using two VORs remains a source gap."
        ],
        "common_traps": [
          "Do not confuse the legal positive-fix allowance with an explained plotting method.",
          "Do not assume any two indications are valid without rated coverage and usable geometry.",
          "Do not create chart examples without exact chart/source inputs."
        ],
        "worked_examples": "TODO: Add two-VOR fixing examples only after selecting chart data and verifying technique source material.",
        "exam_use": [
          "Use AIP ENR 1.1 section 4.5 for positive-fix authority.",
          "Use Part 91 MOS 14.02 for IFR navigation method requirements."
        ]
      }
    },
    {
      "id": "PIFR-075",
      "mos_ref": "15.1.6",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.1.6",
      "objective": "Fix position, given instrument indications utilising combinations of VOR, NDB and DME.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.1",
      "element_title": "VOR",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of ADF, DME, NDB, VOR and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6 and 6.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. AIP ENR 1.1 section 4.5 supports positive fixes from NDB, VOR, localiser or DME position lines in combination, with NDB range limits for NDB-only fixes. Detailed cockpit-indication fixing methods remain TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-075.md",
      "study": {
        "why": "Mixed VOR/NDB/DME fixing is operationally important because positive fixes can use multiple position-line types, but cockpit construction details still need a verified technique source.",
        "study_notes": [
          "Part 91 MOS 1.07 defines ADF, DME, NDB, VOR and navigational tolerance; sections 14.02 and 14.05 support operational navigation context.",
          "AIP ENR 1.1 section 4.5 supports positive fixes from NDB, VOR, localiser or DME position lines in combination, including NDB range limits for NDB-only fixes.",
          "Detailed cockpit-indication fixing methods remain a source gap."
        ],
        "common_traps": [
          "Do not ignore NDB-only positive-fix limits.",
          "Do not assume every aid combination gives a reliable fix; check geometry, rated coverage and source limitations.",
          "Do not fill plotting examples without a verified technique source."
        ],
        "worked_examples": "TODO: Add mixed-aid fixing examples after verifying technique source material and selecting exact aid/chart inputs.",
        "exam_use": [
          "Use AIP ENR 1.1 section 4.5 for positive-fix combinations.",
          "Use Part 91 MOS 14.02 for route navigation requirements."
        ]
      }
    },
    {
      "id": "PIFR-076",
      "mos_ref": "15.2.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.1",
      "objective": "State how NDB indications or range may be affected by the following: (a) coastal refraction; (b) night error; (c) thunderstorms; (d) mountainous areas; (e) types of terrain; (f) altitude of aircraft.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.2",
      "element_title": "NDB",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of ADF, NDB and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources cover NDB as a ground-based navigation aid, NDB tracking precision and NDB position-line use. Effects of coastal refraction, night error, thunderstorms, mountainous terrain, terrain type and altitude on NDB indications or range remain TODO for a verified public official technique/source.",
      "study_file": "docs/09-study-guide/PIFR-076.md",
      "study": {
        "why": "NDB range and indication errors are listed by the MOS, but current verified sources only cover NDB operational use, tracking precision and position-line use.",
        "study_notes": [
          "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.",
          "AIP ENR 1.1 sections 4.4 to 4.6 verify NDB as a navigation aid, NDB tracking precision and NDB position-line use.",
          "Coastal refraction, night error, thunderstorms, mountainous areas, terrain effects and altitude effects remain a source gap."
        ],
        "common_traps": [
          "Do not add NDB propagation-error explanations from unsupported memory.",
          "Do not treat NDB tracking precision as a description of all NDB errors.",
          "Keep error theory clearly separated from verified operational references."
        ],
        "worked_examples": "TODO: Add NDB error/range examples only after verifying a public official technique source.",
        "exam_use": [
          "Use mapped MOS/AIP references for NDB operational use and tolerance.",
          "Use the source-gap register before adding NDB propagation or range theory."
        ]
      }
    },
    {
      "id": "PIFR-077",
      "mos_ref": "15.2.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.2",
      "objective": "State the method of using the most appropriate NDB for tracking during navigation.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.2",
      "element_title": "NDB",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of ADF, NDB and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources identify NDB as a ground-based aid, rank NDB below localiser, GNSS and VOR for track guidance, and constrain NDB-only position lines to 30 NM for positive fixing. Selection method for the most appropriate NDB for tracking remains TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-077.md",
      "study": {
        "why": "Choosing the appropriate NDB for tracking is an operational decision, but the verified sources only provide aid hierarchy, NDB identity and positive-fix limits.",
        "study_notes": [
          "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 support IFR navigation use.",
          "AIP ENR 1.1 sections 4.4 to 4.6 verify that NDB sits below localiser, GNSS and VOR in track-guidance precision and is subject to NDB position-line limitations.",
          "The method for selecting the most appropriate NDB for tracking remains a source gap."
        ],
        "common_traps": [
          "Do not assume an NDB is the best source merely because it is available.",
          "Do not ignore the more precise track-guidance hierarchy.",
          "Do not add NDB selection heuristics without a verified source."
        ],
        "worked_examples": "TODO: Add NDB selection examples only after verifying a public official technique source and selecting route/aids.",
        "exam_use": [
          "Use AIP ENR 1.1 section 4.4.3 for track-guidance precision order.",
          "Use AIP ENR 1.1 section 4.5 for NDB positive-fix limits."
        ]
      }
    },
    {
      "id": "PIFR-078",
      "mos_ref": "15.2.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.3",
      "objective": "Describe how the following are determined using an ADF relative bearing indication: (a) NDB station passage; (b) abeam NDB station; (c) NDB bearing the aircraft is on; (d) track error and/or drift experienced.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.2",
      "element_title": "NDB",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of ADF, NDB and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources cover NDB tracking, NDB deviation threshold and positive fixing by NDB passage or position lines. Determining station passage, abeam position, bearing, track error and drift from ADF relative bearing remains TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-078.md",
      "study": {
        "why": "ADF relative-bearing interpretation is examinable cockpit technique, but current verified references only support NDB operational use and positive fixing.",
        "study_notes": [
          "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational navigation context.",
          "AIP ENR 1.1 sections 4.4 to 4.6 verify NDB tracking, NDB deviation thresholds and positive fixing by NDB passage or position lines.",
          "Determining station passage, abeam position, bearing, track error and drift from ADF relative bearing remains a source gap."
        ],
        "common_traps": [
          "Do not add relative-bearing interpretation rules without a verified source.",
          "Do not treat NDB station passage as equivalent to every ADF indication change.",
          "Do not merge this objective with NDB intercept or track-calculation objectives."
        ],
        "worked_examples": "TODO: Add ADF relative-bearing interpretation examples only after verifying a public official technique source.",
        "exam_use": [
          "Use mapped references for operational NDB use and position fixing.",
          "Treat cockpit relative-bearing interpretation as unresolved source material."
        ]
      }
    },
    {
      "id": "PIFR-079",
      "mos_ref": "15.2.4",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.4",
      "objective": "Calculate track to and from the NDB, given heading and relative bearings.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.2",
      "element_title": "NDB",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of ADF, NDB and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources cover NDB track guidance and NDB-based position lines. Calculating track to or from an NDB from heading and relative bearing remains TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-079.md",
      "study": {
        "why": "Track calculation from heading and relative bearing is a specific ADF arithmetic task; the current verified sources do not supply the calculation method.",
        "study_notes": [
          "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.",
          "AIP ENR 1.1 sections 4.4 to 4.6 verify NDB track guidance and NDB-based position lines.",
          "Calculating track to or from an NDB from heading and relative bearing remains a source gap."
        ],
        "common_traps": [
          "Do not invent bearing arithmetic examples without a verified source.",
          "Do not confuse aircraft heading, relative bearing, magnetic bearing and track in unsupported notes.",
          "Keep arithmetic examples out until the source strategy is settled."
        ],
        "worked_examples": "TODO: Add NDB track calculations only after verifying a public official technique source.",
        "exam_use": [
          "Use mapped references for NDB operational context.",
          "Use the source-gap register before adding ADF bearing arithmetic."
        ]
      }
    },
    {
      "id": "PIFR-080",
      "mos_ref": "15.2.5",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.5",
      "objective": "Calculate heading to steer to intercept a new or original track to or from an NDB.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.2",
      "element_title": "NDB",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of ADF, NDB and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources require positive action to regain track and identify NDB as a permitted ground-based navigation aid. Heading-to-steer and NDB intercept calculation method remains TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-080.md",
      "study": {
        "why": "NDB intercept heading calculation is a cockpit technique objective; verified sources currently support the operational duty to regain track and the use of NDB as a permitted aid.",
        "study_notes": [
          "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 support operational navigation context.",
          "AIP ENR 1.1 sections 4.4 to 4.6 provide verified track-keeping and NDB operational context.",
          "Heading-to-steer and NDB intercept calculation method remains a source gap."
        ],
        "common_traps": [
          "Do not add intercept-angle rules from memory.",
          "Do not imply NDB intercept technique is covered by general track-keeping text.",
          "Do not reuse VOR technique as if it directly applies to ADF/NDB without a source."
        ],
        "worked_examples": "TODO: Add NDB intercept-heading examples only after verifying a public official technique source.",
        "exam_use": [
          "Use AIP ENR 1.1 section 4 for operational track-keeping context.",
          "Treat NDB intercept arithmetic as a source-gap item."
        ]
      }
    },
    {
      "id": "PIFR-081",
      "mos_ref": "15.2.6",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.6",
      "objective": "Calculate heading to steer to intercept desired inbound track before reaching the NDB.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.2",
      "element_title": "NDB",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of ADF, NDB and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources cover NDB track guidance, positive fixing and deviation reporting. Intercept-heading calculation before reaching the NDB remains TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-081.md",
      "study": {
        "why": "Intercepting the desired inbound track before reaching an NDB is a specific technique task that is not explained in the verified operational references.",
        "study_notes": [
          "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.",
          "AIP ENR 1.1 sections 4.4 to 4.6 verify NDB track guidance, positive fixing and deviation reporting context.",
          "Intercept-heading calculation before reaching the NDB remains a source gap."
        ],
        "common_traps": [
          "Do not add timing or intercept methods without a verified source.",
          "Do not treat this as the same objective as general NDB tracking.",
          "Do not create worked examples until exact technique source and route assumptions are selected."
        ],
        "worked_examples": "TODO: Add inbound NDB intercept examples only after verifying a public official technique source.",
        "exam_use": [
          "Use mapped references for operational NDB use.",
          "Use the source-gap register before adding intercept-heading calculations."
        ]
      }
    },
    {
      "id": "PIFR-082",
      "mos_ref": "15.2.7",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.7",
      "objective": "Calculate relative bearing which will indicate that a desired track to or from an NDB has been intercepted, given the intercept heading.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.2",
      "element_title": "NDB",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of ADF, NDB and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official sources cover NDB track guidance and the ±5° NDB navigational/deviation threshold. Relative-bearing calculation indicating desired NDB track interception remains TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-082.md",
      "study": {
        "why": "Relative bearing at NDB track interception is a calculation objective, but the verified references only cover NDB guidance and deviation threshold context.",
        "study_notes": [
          "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.",
          "AIP ENR 1.1 sections 4.4 to 4.6 verify NDB track guidance and the NDB navigational/deviation threshold context.",
          "The relative-bearing calculation that indicates desired NDB track interception remains a source gap."
        ],
        "common_traps": [
          "Do not add relative-bearing formulas from unsupported memory.",
          "Do not confuse deviation threshold with an interception indication.",
          "Do not merge this with the inbound intercept-heading objective."
        ],
        "worked_examples": "TODO: Add relative-bearing interception calculations only after verifying a public official technique source.",
        "exam_use": [
          "Use mapped references for NDB operational limits and tolerance.",
          "Treat the relative-bearing calculation as unresolved until sourced."
        ]
      }
    },
    {
      "id": "PIFR-083",
      "mos_ref": "15.2.8",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.2.8",
      "objective": "Fix position, given relative bearing indications utilising 2 NDB stations.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.2",
      "element_title": "NDB",
      "module": "Radio Navigation",
      "module_slug": "radio-navigation",
      "exam_importance": "High",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of ADF, NDB and navigational tolerance; sections 14.02 and 14.05",
        "AIP reference": "AIP ENR 1.1 sections 4.4-4.6",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified operational references only against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. AIP ENR 1.1 section 4.5 supports positive fixing from intersections of NDB position lines and limits NDB-only position lines to 30 NM from each NDB. Fix construction from two ADF relative bearings remains TODO for a verified public official technique source.",
      "study_file": "docs/09-study-guide/PIFR-083.md",
      "study": {
        "why": "Fixing position from two NDB relative bearings links the official positive-fix rule with ADF plotting technique; only the positive-fix rule is currently verified.",
        "study_notes": [
          "Part 91 MOS 1.07 defines ADF, NDB and navigational tolerance; sections 14.02 and 14.05 provide operational context.",
          "AIP ENR 1.1 section 4.5 supports positive fixing from intersections of NDB position lines and limits NDB-only position lines to 30 NM from each NDB.",
          "Fix construction from two ADF relative bearings remains a source gap."
        ],
        "common_traps": [
          "Do not ignore the NDB-only 30 NM positive-fix limit.",
          "Do not assume two relative bearings produce an acceptable fix without geometry and range checks.",
          "Do not add plotting method examples without a verified source and exact chart/aids."
        ],
        "worked_examples": "TODO: Add two-NDB fixing examples only after verifying technique source material and selecting exact NDB/chart inputs.",
        "exam_use": [
          "Use AIP ENR 1.1 section 4.5 for positive-fix authority and NDB limits.",
          "Use Part 91 MOS 14.02 for IFR route navigation requirements."
        ]
      }
    },
    {
      "id": "PIFR-084",
      "mos_ref": "15.3.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.3.1",
      "objective": "GNSS system components and principle of operation: (a) Describe the GNSS system and its principles of operation, including the following: (i) GNSS system components; (ii) space segment; (iii) GNSS Satellite signal; (iv) pseudo random code (C/A course acquisition code); (v) control segment; (vi) user segment (the GNSS receiver); (vii) pseudo ranging; (viii) principle of position fixing/minimum satellites required for navigation functions; (ix) TSO/performance limitations of various equipment types; (x) RAIM; (xi) masking function; (xii) receiver displays of system integrity; (xiii) operating modes - navigation with and without RAIM, DR. (b) Explain why GNSS uses the WGS84 coordinate system.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.3",
      "element_title": "GNSS",
      "module": "GNSS And Instrument Errors",
      "module_slug": "gnss-and-instrument-errors",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "CASR 61.935 table 61.935 item 10",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of approved GNSS, FDE, GNSS, navigation database, RNAV specification, RNP specification, requisite GNSS satellites and SBAS; sections 14.01-14.07; Chapter 26 GNSS/GPS surveillance definitions including GPS, HPL and SA",
        "AIP reference": "AIP GEN 1.5 section 2; AIP GEN 2.2 sections 3.11-3.12; AIP ENR 1.1 section 4.8; AIP ENR 1.1 section 6.3; AIP ENR 4.3; AIP ENR 3.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current CASR 1998 compilation 101 (F2026C00286), current Part 91 MOS compilation 7 (F2026C00214), and AIP Book Amendment 126 current 19 MAR 2026. Covers approved GNSS equipment, GPS/WGS-84, integrity monitoring, RAIM/FDE, database use, RNP/RNAV context, substitute use and operational GNSS reporting.",
      "study_file": "docs/09-study-guide/PIFR-084.md",
      "study": {
        "why": "GNSS is central to modern IFR navigation and the PIFR exam can test both operational approval and the basic system concepts behind integrity, databases, WGS-84 and RAIM.",
        "study_notes": [
          "CASR 61.935 table item 10 is relevant to the private IFR GNSS navigation endorsement context.",
          "Part 91 MOS 1.07 supplies key definitions including approved GNSS, FDE, GNSS, navigation database, RNAV/RNP specifications, requisite GNSS satellites and SBAS.",
          "Part 91 MOS 14.01 to 14.07 and AIP ENR 1.1 section 4.8 provide the operational GNSS navigation, integrity, substitute-use and reporting rules.",
          "AIP GEN 1.5 section 2, AIP GEN 2.2 sections 3.11 to 3.12, AIP ENR 4.3 and AIP ENR 3.3 provide the mapped AIP locators for approved equipment, WGS-84/GPS context, navigation aids and route use."
        ],
        "common_traps": [
          "Do not treat GNSS capability as IFR approval; check approved GNSS equipment and database requirements.",
          "Do not ignore RAIM/FDE or receiver integrity messages.",
          "Do not use a GNSS position without checking whether the operation, route or procedure requires approved equipment and a valid database."
        ],
        "worked_examples": "TODO: Add GNSS operating-mode examples after selecting approved receiver types and route/procedure scenarios.",
        "exam_use": [
          "Use Part 91 MOS 1.07 first for definitions.",
          "Use Part 91 MOS 14.01 to 14.07 and AIP ENR 1.1 section 4.8 for operational GNSS requirements.",
          "Use AIP GEN 2.2 sections 3.11 to 3.12 for WGS-84/GPS locator context."
        ]
      }
    },
    {
      "id": "PIFR-085",
      "mos_ref": "15.3.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.3.2",
      "objective": "GNSS errors.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.3",
      "element_title": "GNSS",
      "module": "GNSS And Instrument Errors",
      "module_slug": "gnss-and-instrument-errors",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS sections 11.04-11.05, 14.02, 14.05-14.07; Chapter 26 GNSS/GPS surveillance definitions including HPL, NACp, NIC, NUCp, SA and SIL",
        "AIP reference": "AIP GEN 2.2 sections 3.11-3.12; AIP GEN 3.5 section 4.13; AIP ENR 1.1 section 4.8; AIP ENR 1.1 section 6.3; AIP ENR 4.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Use these references for GNSS integrity/RAIM loss, valid database, dead-reckoning mode, GNSS distance reporting, SBAS status, WGS-84/GPS context and space weather effects on GNSS.",
      "study_file": "docs/09-study-guide/PIFR-085.md",
      "study": {
        "why": "GNSS error and integrity questions are operationally important because the correct action depends on whether the issue is database validity, integrity/RAIM, dead reckoning, distance reporting, SBAS status or space weather.",
        "study_notes": [
          "Part 91 MOS 11.04 to 11.05, 14.02 and 14.05 to 14.07 are the verified MOS locators for GNSS integrity, distance information and navigation operations.",
          "Part 91 MOS Chapter 26 definitions cover surveillance-related GNSS/GPS terms such as HPL, NACp, NIC, NUCp, SA and SIL.",
          "AIP ENR 1.1 sections 4.8 and 6.3 provide operational GNSS and radio-failure/GNSS context.",
          "AIP GEN 3.5 section 4.13 is the verified locator for space weather effects on GNSS."
        ],
        "common_traps": [
          "Do not continue normal GNSS navigation after integrity loss without checking the AIP/MOS action.",
          "Do not assume a database is valid just because the receiver is functioning.",
          "Do not treat SBAS, RAIM, FDE and dead-reckoning mode as interchangeable concepts."
        ],
        "worked_examples": "TODO: Add GNSS error/integrity scenarios after selecting receiver messages, route phase and available alternate navigation sources.",
        "exam_use": [
          "Use AIP ENR 1.1 section 4.8 for operational GNSS procedure.",
          "Use Part 91 MOS 11.04 to 11.05 for GNSS distance and integrity requirements.",
          "Use AIP GEN 3.5 section 4.13 for space-weather-related GNSS effects."
        ]
      }
    },
    {
      "id": "PIFR-086",
      "mos_ref": "15.3.3",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 15.3.3",
      "objective": "Describe the cause and magnitude of typical GNSS errors: (a) ephemeris; (b) clock; (c) receiver; (d) atmospheric and ionospheric; (e) multipath; (f) SA; (g) typical total error associated with C/A code; (h) effect of PDOP/GDOP on position accuracy; (i) susceptibility to interference; (j) comparison of vertical and horizontal errors; (k) tracking accuracy and collision avoidance.",
      "section_no": "15",
      "section_title": "Navigation systems",
      "element_no": "15.3",
      "element_title": "GNSS",
      "module": "GNSS And Instrument Errors",
      "module_slug": "gnss-and-instrument-errors",
      "exam_importance": "High",
      "status": "Mapped",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS section 1.07 definitions of approved GNSS, FDE, requisite GNSS satellites, RNAV specification and RNP specification; sections 11.03-11.05, 14.02 and 14.06-14.07; Chapter 26 GNSS/GPS surveillance definitions including HPL, NACp, NIC, NUCp, SA and SIL",
        "AIP reference": "AIP GEN 2.2 sections 3.11-3.12; AIP GEN 3.5 section 4.13; AIP ENR 1.1 sections 4.8 and 6.3; AIP ENR 4.3",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified against current Part 91 MOS compilation 7 (F2026C00214) and AIP Book Amendment 126 current 19 MAR 2026. Official references cover the operational handling of GNSS error/integrity conditions and selected defined terms, but do not enumerate every MOS-listed error source; leave detailed ephemeris, clock, receiver, multipath and DOP explanations for later explanatory study notes with official source separation.",
      "study_file": "docs/09-study-guide/PIFR-086.md",
      "study": {
        "why": "This objective asks for detailed GNSS error causes and magnitudes, but the current verified sources mainly support operational handling and selected defined terms rather than a complete theory treatment.",
        "study_notes": [
          "Part 91 MOS 1.07, 11.03 to 11.05, 14.02 and 14.06 to 14.07 provide verified operational GNSS, FDE, requisite satellite, RNAV/RNP and integrity references.",
          "Part 91 MOS Chapter 26 definitions provide selected GNSS/GPS surveillance terms including HPL, NACp, NIC, NUCp, SA and SIL.",
          "AIP GEN 2.2, AIP GEN 3.5 section 4.13, AIP ENR 1.1 sections 4.8 and 6.3 and AIP ENR 4.3 provide the verified AIP locators.",
          "Detailed explanations for ephemeris, clock, receiver, multipath, DOP and typical C/A-code total-error magnitude remain a source gap until a suitable public official source is verified."
        ],
        "common_traps": [
          "Do not invent numeric error magnitudes from memory.",
          "Do not treat operational GNSS integrity rules as a complete explanation of every MOS-listed error source.",
          "Keep any later theory notes clearly separated from official CASA/Airservices material unless an official source is verified."
        ],
        "worked_examples": "TODO: Add detailed GNSS error examples only after verifying a public official source for the specific error-source theory and magnitudes.",
        "exam_use": [
          "Use the mapped MOS/AIP references for operational actions, integrity and defined terms.",
          "Use the source-gap register before adding or relying on detailed GNSS error theory."
        ]
      }
    },
    {
      "id": "PIFR-087",
      "mos_ref": "16.1.1",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 16.1.1",
      "objective": "State how the compass is affected by turning error, acceleration and deceleration error.",
      "section_no": "16",
      "section_title": "Flight instrument errors",
      "element_no": null,
      "element_title": null,
      "module": "GNSS And Instrument Errors",
      "module_slug": "gnss-and-instrument-errors",
      "exam_importance": "Medium",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS sections 26.08 and 26.12, including heading display requirements and direct-reading or remote-indicating magnetic compass requirements",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified equipment references only against current Part 91 MOS compilation 7 (F2026C00214). Official sources require heading information and magnetic compass capability, but the current verified CASA/Airservices source cache does not explain compass turning, acceleration or deceleration errors. Leave detailed compass-error explanation as TODO until a verified public official source is identified.",
      "study_file": "docs/09-study-guide/PIFR-087.md",
      "study": {
        "why": "Compass turning, acceleration and deceleration errors are explicitly in the MOS, but current verified sources only support equipment carriage, not the theory explanation.",
        "study_notes": [
          "Part 91 MOS 26.08 and 26.12 are verified equipment locators for heading display and direct-reading or remote-indicating magnetic compass requirements.",
          "The current verified CASA/Airservices source cache does not explain compass turning, acceleration or deceleration errors.",
          "Keep the MOS objective in scope and leave detailed compass-error theory as TODO until a current public official source is identified."
        ],
        "common_traps": [
          "Do not fill compass-error theory from unsupported memory or commercial material.",
          "Do not treat equipment-carriage requirements as an explanation of instrument behaviour.",
          "Do not remove the objective because the source coverage is weak; the MOS remains the scope source."
        ],
        "worked_examples": "TODO: Add compass-error explanations and examples only after verifying a public official source for the theory.",
        "exam_use": [
          "Use the current file to identify the source gap and the MOS scope.",
          "Use Part 91 MOS 26.08/26.12 only for equipment requirements, not for the compass-error theory answer."
        ]
      }
    },
    {
      "id": "PIFR-088",
      "mos_ref": "16.1.2",
      "mos_reference": "MOS Schedule 3 Section 2.2 Unit 2.2.1 16.1.2",
      "objective": "State how the attitude indicator is affected by power source output, acceleration and deceleration error, and bank and pitch limits.",
      "section_no": "16",
      "section_title": "Flight instrument errors",
      "element_no": null,
      "element_title": null,
      "module": "GNSS And Instrument Errors",
      "module_slug": "gnss-and-instrument-errors",
      "exam_importance": "Medium",
      "status": "Partial",
      "references": {
        "CAR": "TODO",
        "Part 61": "TODO",
        "Part 91": "TODO",
        "Part 91 MOS": "Part 91 MOS sections 26.08 and 26.12, including attitude, standby attitude/turn indication and gyroscopic power-supply requirements",
        "AIP reference": "TODO",
        "ERSA reference": "TODO",
        "ERC LOW reference": "TODO",
        "TAC reference": "TODO",
        "PCA reference": "TODO"
      },
      "notes": "Verified equipment references only against current Part 91 MOS compilation 7 (F2026C00214). Official sources require attitude information, independent standby attitude/turn sources where applicable and adequate gyroscopic-instrument power supply, but the current verified CASA/Airservices source cache does not explain attitude-indicator acceleration/deceleration errors or pitch/bank limits. Leave detailed instrument-error explanation as TODO until a verified public official source is identified.",
      "study_file": "docs/09-study-guide/PIFR-088.md",
      "study": {
        "why": "Attitude-indicator power-source, acceleration/deceleration and pitch/bank-limit errors are MOS objectives, but the verified public source cache only supports equipment requirements.",
        "study_notes": [
          "Part 91 MOS 26.08 and 26.12 are verified equipment locators for attitude information, standby attitude/turn indication and gyroscopic power-supply requirements.",
          "The current verified CASA/Airservices source cache does not explain attitude-indicator acceleration/deceleration errors or pitch/bank limits.",
          "Keep detailed instrument-error theory as TODO until a current public official source is identified."
        ],
        "common_traps": [
          "Do not infer attitude-indicator error theory from equipment-carriage rules.",
          "Do not fill pitch/bank limit detail from aircraft manuals unless the aircraft source is selected and clearly separated as aircraft-specific material.",
          "Do not remove or merge the objective; it remains separately traceable to the MOS."
        ],
        "worked_examples": "TODO: Add attitude-indicator error examples only after verifying a public official source or selecting aircraft-specific AFM/POH material for a clearly labelled aircraft example.",
        "exam_use": [
          "Use Part 91 MOS 26.08/26.12 for required instrument/equipment carriage only.",
          "Use the source-gap register before adding attitude-indicator theory content."
        ]
      }
    }
  ],
  "source_gaps": [
    {
      "objective": "PIFR-042",
      "gap": "CASA AC 91-15 is referenced by AIP ENR 1.1 section 10.9.1 as fuel guidance material, but the current official CASA AC document URL was not verified from the command line due to CASA site access blocking.",
      "current_action": "Keep enforceable CASR/Part 91 MOS/AIP references mapped. Verify AC 91-15 directly before adding it as an official reference."
    },
    {
      "objective": "PIFR-031 to PIFR-036",
      "gap": "Current Airservices AIP Chart panel availability for ERC Low, TAC and PCA has been verified, but route-specific worked LSALT examples and PIFR-036 engine-out performance are not supplied by the general CASA/Airservices references.",
      "current_action": "Keep chart product references mapped. Add route-specific examples only after selecting exact chart panels and keeping aircraft engine-out performance in aircraft-specific examples using AFM/POH source material."
    },
    {
      "objective": "PIFR-044",
      "gap": "The current verified CASA/Airservices source cache contains references to airborne weather radar equipment, but not the MOS-listed safety precautions for operating aircraft radar equipment on the ground.",
      "current_action": "Leave non-MOS references as TODO. Verify a current public CASA or Airservices source before adding ground-radar safety precautions."
    },
    {
      "objective": "PIFR-050",
      "gap": "The MOS objective asks for the meaning of \"controlled area protection\". Current verified AIP references contain the operational 500 ft buffer above the lower limit of CTA in visual departure and visual approach/descent contexts, but the exact concept label was not found in the current source cache.",
      "current_action": "Keep the verified AIP operational references mapped as partial support. Verify a current public CASA or Airservices source that defines the term before expanding explanatory study notes."
    },
    {
      "objective": "PIFR-067 to PIFR-069",
      "gap": "The MOS expressly requires meteorology theory from the Bureau of Meteorology Manual of Meteorology Parts 1 and 2. Current verified CASA/Airservices sources identify aviation weather products, weather-assessment duties and hazardous-weather services, but do not provide the full climatology and hazardous-weather theory required by these objectives.",
      "current_action": "Keep operational Part 91 MOS and AIP GEN 3.5 references mapped. Do not fill climatology, icing, hail, microburst, wind shear or turbulence theory until an allowed current public official source strategy is agreed or verified."
    },
    {
      "objective": "PIFR-070 to PIFR-083",
      "gap": "Current verified CASA/Airservices sources cover VOR/NDB/DME operational use, track-keeping tolerances and positive fixing, but do not explain the detailed cockpit indication techniques, intercept arithmetic, ADF relative-bearing calculations, or NDB propagation/range effects listed in the MOS.",
      "current_action": "Keep operational references mapped. Do not add VOR/ADF technique notes or NDB error explanations until a current public official source is verified, or add them later as clearly separated explanatory material with source status stated."
    },
    {
      "objective": "PIFR-086",
      "gap": "Official references cover GNSS integrity, RAIM, database validity, SA, HPL/NACp/NIC/NUCp/SIL and space weather, but do not enumerate every MOS-listed error source such as ephemeris, clock, receiver, multipath and DOP in one verified CASA/Airservices source.",
      "current_action": "Keep the operational references mapped. Add detailed error explanations later as clearly separated explanatory material after finding suitable public official sources."
    },
    {
      "objective": "PIFR-087 to PIFR-093",
      "gap": "Current verified CASA/Airservices sources provide instrument carriage, medical/fitness, visual/vestibular and GNSS data-checking hooks, but not the detailed compass errors, attitude-indicator errors, vestibular disorientation, visual illusions or GNSS automation/human-factors theory listed in the MOS.",
      "current_action": "Keep operational/legal references mapped. Leave detailed instrument-error and human-factors explanations as TODO until an official public source is identified, or add them later as clearly separated explanatory material with source status stated."
    }
  ]
};
