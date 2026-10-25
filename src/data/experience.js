export const experiences = [
  {
    "id": "esmo",
    "company": "ESMO",
    "role": "Senior Infrastructure Architect",
    "location": "Lugano, Switzerland",
    "summary": "Cloud infrastructure planning, identity integrations and endpoint automation.",
    "bullets": [
      "Supported application teams managing AWS Route 53 infrastructure through Terraform and designed SSO integrations with Microsoft Entra ID.",
      "Helped define the roadmap for migrating remaining on-premises workloads to Azure, covering identity, compute and endpoint-management architecture.",
      "Remediated application packaging and distribution across geographically distributed endpoints with custom PowerShell automation."
    ],
    "tags": [
      "AWS Route 53",
      "Terraform",
      "Azure",
      "Entra ID",
      "PowerShell"
    ]
  },
  {
    "id": "envista",
    "company": "Envista Holdings Corporation",
    "role": "Senior Systems / Cloud Engineer",
    "location": "Zurich, Switzerland",
    "summary": "Owned infrastructure automation from business requirements and architecture through production implementation in a global environment of approximately 25,000 users and endpoints.",
    "bullets": [
      "Automated approximately 90% of previously manual service-provisioning activities, helping reduce new-hire provisioning lead time from approximately three weeks to one.",
      "Developed an interface to BMC Remedy, later migrated to ServiceNow, to automate fulfilment of IT service requests such as virtual machine provisioning, software installation and group membership changes.",
      "Designed an AWS S3 archival workflow with a timestamp-preserving C# copy library, checksum verification, PGP encryption and SQL-backed tracking. Failed operations notified operators and staged data for manual review; separate retention and monthly reporting workflows completed the lifecycle.",
      "Architected and built a scheduled Workday-report integration with database state comparison and custom AD processing markers to avoid repeated termination actions. Orchestrated identity and service workflows, and returned AD updates to Workday through PGP-encrypted SFTP files.",
      "Automated Microsoft 365 and Entra ID administration with PowerShell and Microsoft Graph, including group-based licensing, identity workflows and MFA-related operations.",
      "Designed and operated Azure Automation environments for production runbooks, and introduced GitLab for source control, issue tracking and technical documentation.",
      "Designed automation supporting the migration of approximately 150 TB and 280+ million items between Microsoft 365 tenants following the separation from Danaher."
    ],
    "tags": [
      "Automation",
      "AWS S3",
      "ServiceNow",
      "Workday",
      "PowerShell",
      "Python",
      "SQL",
      "Microsoft 365",
      "Entra ID",
      "Microsoft Graph",
      "Azure Automation",
      "Active Directory",
      "BMC Remedy"
    ]
  },
  {
    "id": "danaher",
    "company": "Danaher Corporation",
    "role": "Senior Systems Engineer",
    "location": "Ticino, Switzerland",
    "summary": "Enterprise automation for identity lifecycle, systems integration and service provisioning.",
    "bullets": [
      "Developed infrastructure automation using PowerShell, Python and C#.",
      "Integrated Workday with Active Directory and Microsoft 365 for onboarding through post-termination deprovisioning.",
      "Served as architect for endpoint privilege management across 15,000+ workstations, eliminating local administrator access while automating policy and request workflows.",
      "Integrated BMC Remedy with Active Directory, SCCM and System Center Orchestrator, and designed automation through One Identity Active Roles."
    ],
    "tags": [
      "Microsoft 365",
      "Active Directory",
      "PowerShell",
      "Python",
      "Endpoint security"
    ]
  },
  {
    "id": "ibm",
    "company": "IBM",
    "role": "IT Product Specialist / Infrastructure Consultant",
    "location": "Zurich, Switzerland",
    "summary": "Combined Linux build and deployment engineering with enterprise infrastructure consulting. Worked with a software company to validate and certify its software builds on IBM hardware and software platforms.",
    "bullets": [
      "Automated recurring builds and component startup with Bash on SUSE and Red Hat Linux, working with a customer development team.",
      "Customised Linux kernels under development-team guidance and automated OS deployment using YaST and Kickstart. Verified builds through exit codes, logging, component checks and simulated-traffic compression tests.",
      "Architected identity, messaging, virtualization and systems-management solutions and led complex infrastructure migrations.",
      "Served as technical SME and escalation point within a 20-person engineering team, managing technical relationships across approximately 40 client accounts.",
      "Led a Microsoft 365 migration that reduced messaging infrastructure costs by approximately 40%.",
      "Delivered monitoring improvements for a Swiss financial institution that reduced troubleshooting effort by approximately 60%."
    ],
    "tags": [
      "Linux",
      "SUSE / Red Hat",
      "Bash",
      "Build automation",
      "OS deployment",
      "IBM platforms",
      "Microsoft 365",
      "VMware"
    ]
  },
  {
    "id": "spectraseis",
    "company": "Spectraseis AG",
    "role": "Systems Engineer",
    "location": "Zurich, Switzerland",
    "summary": "Managed a Linux-only infrastructure spanning high-performance computing, storage, virtualization and networking.",
    "bullets": [
      "Administered a CUDA-based HPC cluster and the Linux systems supporting the environment.",
      "Administered local NAS storage and VMware infrastructure.",
      "Transformed an unmanaged network into a fully managed network using Cisco technologies.",
      "Led infrastructure work for the relocation of data center services from Switzerland to the United States, contributing to an estimated 40% reduction in infrastructure costs."
    ],
    "tags": [
      "Linux",
      "NAS",
      "VMware",
      "Cisco networking"
    ]
  },
  {
    "id": "eidos",
    "company": "Eidos",
    "role": "Senior Infrastructure Trainer / Systems & Network Engineer",
    "location": "Rome, Italy",
    "summary": "Combined official Microsoft training delivery with Linux course development, messaging expertise and infrastructure consultancy for Eidos customers.",
    "bullets": [
      "Delivered official Microsoft Official Curriculum (MOC) courses to enterprise engineers and students as a Microsoft Certified Trainer (MCT).",
      "Introduced Linux courses to the Eidos training portfolio.",
      "Served as the subject-matter expert for messaging technologies.",
      "Provided infrastructure consultancy to Eidos customers across Microsoft and Linux environments, including architecture, virtualization, storage, security and Level-3 engineering support."
    ],
    "tags": [
      "Microsoft Certified Trainer",
      "MOC",
      "Linux training",
      "Messaging",
      "Infrastructure consultancy"
    ]
  },
  {
    "id": "consulting",
    "company": "Independent consulting",
    "role": "IT Infrastructure Consultant",
    "location": "Italy & Spain",
    "summary": "Delivered Microsoft infrastructure and messaging projects in both engineering and architecture roles.",
    "bullets": [
      "Served as a subject-matter expert for messaging solutions and Microsoft infrastructure.",
      "Combined solution architecture with hands-on engineering for infrastructure implementation and migration projects.",
      "Delivered projects for clients including Bulgari, ENAV, Ghella Group, Q8 Petroleum and Microsoft Italy."
    ],
    "tags": [
      "Microsoft infrastructure",
      "Messaging",
      "Solution architecture",
      "Engineering",
      "Migrations"
    ]
  }
]
