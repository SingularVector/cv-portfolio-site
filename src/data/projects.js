export const projects = [
  {
    "id": "it-toolbox",
    "name": "IT-ToolBox",
    "type": "Enterprise automation toolkit",
    "status": "PowerShell",
    "description": "Reusable utilities for infrastructure workflows: validation, logging, timing, password generation and authenticated string encryption. Modernized for PowerShell 7 with documented compatibility boundaries and regression tests.",
    "stack": [
      "PowerShell 7",
      "Pester",
      "Cross-platform CI"
    ],
    "url": "https://github.com/SingularVector/IT-ToolBox"
  },
  {
    "id": "logscanner",
    "name": "LogScanner",
    "type": "Operational log analysis",
    "status": "Go",
    "description": "A lightweight CLI for scanning PowerShell automation logs by severity, text and time. Streaming reads, source-file references, summaries and JSON Lines output turn manual log searches into repeatable operational checks.",
    "stack": [
      "Go",
      "CLI",
      "Streaming",
      "JSON Lines"
    ],
    "url": "https://github.com/SingularVector/LogScanner",
    "evidence": "Cross-platform Go tooling with native CLI checks on Linux, Windows and macOS.",
    "evidenceUrl": "https://github.com/SingularVector/LogScanner/tree/main/.github/workflows"
  },
  {
    "id": "powerscp",
    "name": "PowerScp",
    "type": "File transfer & remote management",
    "status": "PowerShell",
    "description": "A module built around WinSCP for file transfers, directory synchronization, checksums and remote operations. Supports Windows PowerShell 5.1 and PowerShell 7 on Windows, with explicit host verification and preview support for changes.",
    "stack": [
      "PowerShell",
      "WinSCP .NET",
      "SFTP / FTPS",
      "Windows"
    ],
    "url": "https://github.com/SingularVector/PowerScp"
  },
  {
    "id": "powershell-functions",
    "name": "PowerShell-Functions",
    "type": "Focused infrastructure utilities",
    "status": "PowerShell",
    "description": "Standalone functions for automation without importing a larger toolkit. The modernized New-LogEntry logger demonstrates pipeline batching, buffering, file-specific locking and optional secret redaction, backed by Pester regression tests.",
    "stack": [
      "PowerShell",
      "Logging",
      "Pester"
    ],
    "url": "https://github.com/SingularVector/PowerShell-Functions"
  }
]
