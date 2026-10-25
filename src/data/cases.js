export const cases = [
  {
    "title": "Verified data archival to AWS",
    "company": "Envista · Cloud & data workflows",
    "ownership": "Designed and built the PowerShell workflow and supporting C# copy library.",
    "problem": "Production-data folders needed preparation, site-specific archival and retention under business-defined rules.",
    "flow": [
      "Stage & prepare",
      "Archive & verify in S3",
      "Retain & report"
    ],
    "outcome": "Delivered verified S3 archival with an exception-review path, configurable local retention and monthly reporting.",
    "engineering": [
      [
        "Architecture & contribution",
        "Staged source data locally, applied cleanup rules, then compressed and named archives according to business requirements. Routed archives to S3 by site and production line using the AWS PowerShell module. Built a C# copy library callable from PowerShell to preserve source timestamps and handle exceptions without an external copy executable. PGP encryption and SQL-backed tracking supported archive protection and traceability."
      ],
      [
        "Validation & failure handling",
        "Implemented the checksum calculation used by the upload workflow in PowerShell. Copy, upload or move failures generated operator notifications containing the exception, with affected data staged for manual review or resubmission. Logged activity through New-LogEntry."
      ],
      [
        "Retention & reporting",
        "A separate cleanup workflow used the retained copy’s post-upload timestamp and configured 30-, 60- or 90-day retention window. PowerShell generated monthly HTML reports of archived data."
      ]
    ]
  },
  {
    "title": "Employee-lifecycle orchestration",
    "company": "Envista · Integration & automation",
    "ownership": "Sole architect and engineer, from business requirements through production troubleshooting.",
    "problem": "HR changes needed to drive consistent identity and IT-service actions across enterprise systems.",
    "flow": [
      "Scheduled HR report",
      "Compare stored state",
      "Coordinate IT workflows"
    ],
    "outcome": "Connected HR lifecycle changes to provisioning and termination workflows, helping reduce new-hire provisioning lead time from approximately three weeks to one.",
    "engineering": [
      [
        "Architecture & contribution",
        "Worked with HR, IT, business stakeholders and the Workday team to define rules and a custom CSV report. Scheduled PowerShell automation called a report-generation endpoint, downloaded and cleaned the report, and compared it with database-held employee state to identify hires, terminations, manager changes and organisational moves. This avoided a dependency on direct Workday API access."
      ],
      [
        "Reliability & operational ownership",
        "Prepared custom AD schema changes and used processing-state attributes to prevent repeated termination handling across multiple daily reports. Caught processing exceptions and notified the responsible operations team. Owned implementation and production troubleshooting."
      ],
      [
        "System coordination",
        "Triggered helpdesk notifications and downstream ServiceNow and Microsoft 365 operations according to business rules. Returned AD updates such as email addresses and phone numbers to Workday through PGP-encrypted files delivered over SFTP."
      ]
    ]
  },
  {
    "title": "Linux build & deployment automation",
    "company": "IBM · Build & deployment engineering",
    "ownership": "Build and deployment engineering with the customer development team.",
    "problem": "Frequent source-code deliveries needed compilation and validation on IBM hardware and customised Linux systems.",
    "flow": [
      "Source delivery",
      "Bash build & deployment",
      "Component & traffic tests"
    ],
    "outcome": "Automated recurring builds, component startup and system deployment, with tests confirming that the software ran and compressed traffic.",
    "engineering": [
      [
        "Architecture & contribution",
        "Developed Bash automation with the team for compilation and component startup on SUSE and Red Hat Linux. Used YaST and Kickstart for operating-system deployment and customisation, and tailored kernels to application requirements under development-team guidance."
      ],
      [
        "Validation & failure detection",
        "Checked compilation exit codes and logged activity. Test scripts checked component presence and operation, including the web component. Simulated data streams verified actual traffic compression."
      ]
    ]
  }
]
