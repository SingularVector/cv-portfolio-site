import { ArrowDown, ArrowRight, Database, Folder, Archive, CloudUpload, ShieldCheck, Clock, Bell, Users, FileSpreadsheet, RefreshCw, LockKeyhole } from 'lucide-react'

function Node({ icon: Icon, title, detail, tone = '' }) {
  return <div className={`architecture-node ${tone}`}><Icon size={18} aria-hidden="true"/><div><strong>{title}</strong>{detail && <span>{detail}</span>}</div></div>
}
function Down({ label }) {
  return <div className="architecture-arrow" aria-hidden="true"><ArrowDown size={17}/>{label && <span>{label}</span>}</div>
}

export default function ArchitectureDiagram({ title }) {
  if (title === 'Verified data archival to AWS') return <figure className="architecture-figure" aria-label="AWS archival workflow and operational recovery">
    <figcaption><span>Architecture overview</span>Prepare, verify and retain</figcaption>
    <div className="architecture-columns">
      <div className="architecture-path">
        <Node icon={Folder} title="Production data" detail="Industrial application folders"/><Down/>
        <Node icon={Folder} title="Local staging" detail="Timestamp-preserving C# copy library"/><Down/>
        <Node icon={Archive} title="Prepare archive" detail="Cleanup · ZIP · naming · PGP encryption"/><Down/>
        <Node icon={CloudUpload} title="Archive to AWS S3" detail="Route by site and production line" tone="highlight"/><Down/>
        <Node icon={ShieldCheck} title="Verify upload" detail="PowerShell checksum calculation" tone="highlight"/><Down/>
        <Node icon={Clock} title="Retain local copy" detail="Configured 30 / 60 / 90-day window"/><Down/>
        <Node icon={RefreshCw} title="Separate retention workflow" detail="Timestamp-based local cleanup"/>
      </div>
      <aside className="architecture-side" aria-label="Recovery and operational support">
        <div className="architecture-branch recovery"><p className="branch-label">Copy / upload / move exceptions</p><Node icon={Bell} title="Notify operators" detail="Exact exception included" tone="exception"/><Down/><Node icon={Folder} title="Manual-review staging" detail="Review or resubmit affected data" tone="exception"/></div>
        <div className="architecture-branch"><p className="branch-label">Operational visibility</p><Node icon={Database} title="SQL archive tracking"/><Down/><Node icon={FileSpreadsheet} title="Monthly HTML report" detail="Generated with PowerShell"/><p className="diagram-support">Workflow logging via New-LogEntry</p></div>
      </aside>
    </div>
  </figure>

  if (title === 'Employee-lifecycle orchestration') return <figure className="architecture-figure" aria-label="Workday report integration, state comparison and encrypted return flow">
    <figcaption><span>Architecture overview</span>HR data to coordinated IT actions</figcaption>
    <div className="architecture-columns">
      <div className="architecture-path">
        <Node icon={FileSpreadsheet} title="Workday custom CSV report" detail="Business-defined employee data"/><Down label="Scheduled download"/>
        <Node icon={RefreshCw} title="Clean and compare data" detail="Incoming report vs stored employee state" tone="highlight"/><Down/>
        <Node icon={Users} title="Identify lifecycle changes" detail="Hires · terminations · organisational changes"/><Down/>
        <div className="architecture-split"><Node icon={Users} title="Active Directory" detail="Account and group workflows"/><Node icon={Bell} title="IT service workflows" detail="ServiceNow · Microsoft 365 · helpdesk"/></div>
        <div className="architecture-branch return-flow"><p className="branch-label">Return flow from AD</p><Node icon={LockKeyhole} title="PGP-encrypted file over SFTP" detail="Email and phone updates"/><Down/><Node icon={FileSpreadsheet} title="Workday import integration" detail="Applies employee-record updates"/></div>
      </div>
      <aside className="architecture-side" aria-label="State management and processing safeguards">
        <div className="architecture-branch"><p className="branch-label">State used for comparison</p><Node icon={Database} title="Employee-state database" detail="Relevant Workday data held locally" tone="highlight"/></div>
        <div className="architecture-branch"><p className="branch-label">Repeated-report safeguards</p><Node icon={ShieldCheck} title="Custom AD processing markers" detail="Prevent repeated termination handling"/></div>
        <div className="architecture-branch recovery"><p className="branch-label">Processing exceptions</p><Node icon={Bell} title="Notify operations" detail="Responsible team receives the exception" tone="exception"/></div>
      </aside>
    </div>
  </figure>
  return null
}
