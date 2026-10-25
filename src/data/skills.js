export const skillGroups = [
  {
    "name": "Linux & infrastructure",
    "detail": "Linux systems, virtualization, storage and networking, backed by experience across both Linux and Microsoft enterprise environments.",
    "items": [
      "RHEL / Ubuntu / Debian / SLES",
      "NAS storage",
      "VMware vSphere / Hyper-V",
      "Cisco networking",
      "Windows Server"
    ]
  },
  {
    "name": "Cloud platforms",
    "detail": "Hands-on AWS and Azure work, with a current focus on deepening Linux, AWS and infrastructure-as-code skills.",
    "items": [
      "AWS S3 archival",
      "AWS Route 53",
      "Azure Automation",
      "Azure migration planning",
      "Terraform"
    ]
  },
  {
    "name": "Automation & integration",
    "detail": "Reusable PowerShell modules and Python integrations for production workflows, with API connectivity, SQL-backed state, validation, structured logging and error handling.",
    "items": [
      "Python",
      "Bash",
      "PowerShell",
      "C# / .NET",
      "REST APIs",
      "SQL",
      "Git / GitLab"
    ]
  },
  {
    "name": "Microsoft systems & identity",
    "detail": "An established part of my infrastructure expertise: Microsoft 365, identity integrations, administration and lifecycle automation.",
    "items": [
      "Microsoft 365 / Office 365",
      "Entra ID",
      "Active Directory",
      "Microsoft Graph",
      "SSO / SAML / MFA"
    ]
  }
]
export const allSkills = skillGroups.flatMap(group => group.items)
