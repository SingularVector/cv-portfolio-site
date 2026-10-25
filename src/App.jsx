import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, MapPin, TerminalSquare, X, Monitor, Sun, Moon, Check } from 'lucide-react'
import AppContent from './components/AppContent'
import { profile } from './data/profile'
const sections = [['case-studies','Engineering in practice','01'],['projects','Open-source projects','02'],['experience','Experience','03'],['skills','Technical toolkit','04'],['certifications','Credentials & languages','05']]
export default function App() {
  const [theme,setTheme]=useState(()=>{
    try { const saved=localStorage.getItem('portfolio-theme'); return ['light','dark'].includes(saved)?saved:'system' } catch { return 'system' }
  })
  useEffect(()=>{
    const media=window.matchMedia('(prefers-color-scheme: dark)')
    function apply(){
      const effective=theme==='system'?(media.matches?'dark':'light'):theme
      document.documentElement.dataset.theme=effective
      document.documentElement.style.colorScheme=effective
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content',effective==='dark'?'#101522':'#f8f9fc')
    }
    apply()
    try { if(theme==='system')localStorage.removeItem('portfolio-theme');else localStorage.setItem('portfolio-theme',theme) } catch {}
    media.addEventListener('change',apply)
    return ()=>media.removeEventListener('change',apply)
  },[theme])
  useEffect(()=>{
    function closeTheme(event){if(themeMenu.current&&!themeMenu.current.contains(event.target))themeMenu.current.open=false}
    document.addEventListener('pointerdown',closeTheme)
    return ()=>document.removeEventListener('pointerdown',closeTheme)
  },[])
  const [activeSection,setActiveSection]=useState('about')
  const [terminalOpen,setTerminalOpen]=useState(false)
  const [systemOpen,setSystemOpen]=useState(false)
  const terminalButton=useRef(null), terminalPanel=useRef(null), themeMenu=useRef(null)
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{const entry=entries.find(e=>e.isIntersecting);if(entry)setActiveSection(entry.target.id)}, {rootMargin:'-15% 0px -65% 0px'})
    document.querySelectorAll('.hero,.content-section,#contact').forEach(e=>observer.observe(e))
    return ()=>observer.disconnect()
  },[])
  useEffect(()=>{
    if(!terminalOpen)return
    const overflow=document.body.style.overflow
    document.body.style.overflow='hidden'
    terminalPanel.current?.querySelector('input')?.focus()
    function key(event){
      if(event.key==='Escape')setTerminalOpen(false)
      if(event.key==='Tab'){
        const items=[...terminalPanel.current.querySelectorAll('button,input,a[href]')]
        const first=items[0],last=items[items.length-1]
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus()}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus()}
      }
    }
    document.addEventListener('keydown',key)
    return ()=>{document.body.style.overflow=overflow;document.removeEventListener('keydown',key);terminalButton.current?.focus({preventScroll:true})}
  },[terminalOpen])
  function navigate(id){
    if(id==='terminal'){setTerminalOpen(true);return}
    if(id==='system'){setSystemOpen(true);return}
    setTerminalOpen(false)
    requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}))
  }
  return <div className="portfolio">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header" inert={terminalOpen}>
      <a className="brand" href="#about" aria-label="Daniele Catanesi home"><span className="brand-mark">dc.</span> Daniele Catanesi</a>
      <nav aria-label="Main navigation">{[['case-studies','Engineering'],['projects','Projects'],['experience','Experience'],['skills','Skills']].map(([id,label])=><a key={id} href={`#${id}`} aria-current={activeSection===id?'location':undefined}>{label}</a>)}<a href="https://singularvector.github.io/" target="_blank" rel="noreferrer">Blog <ArrowUpRight size={12} aria-hidden="true"/></a></nav>
      <div className="header-tools">
        <button className="header-terminal icon-control" onClick={event=>{terminalButton.current=event.currentTarget;setTerminalOpen(true)}} aria-label="Open portfolio command line" title="Explore the command line"><TerminalSquare size={18}/></button>
        <details className="theme-menu" ref={themeMenu} onKeyDown={event=>{if(event.key==='Escape'){event.currentTarget.open=false;event.currentTarget.querySelector('summary')?.focus()}}}>
          <summary className="icon-control" aria-label={`Choose theme, current setting: ${theme}`} title={`Theme: ${theme}`}>{theme==='dark'?<Moon size={18}/>:theme==='light'?<Sun size={18}/>:<Monitor size={18}/>}</summary>
          <div className="theme-options" role="group" aria-label="Color theme">{[['system','Follow system',Monitor],['light','Light',Sun],['dark','Dark',Moon]].map(([value,label,Icon])=><button key={value} type="button" aria-pressed={theme===value} onClick={()=>{setTheme(value);themeMenu.current.open=false;themeMenu.current.querySelector('summary')?.focus()}}><Icon size={16}/><span>{label}</span>{theme===value&&<Check size={14}/>}</button>)}</div>
        </details>
        <a className="header-contact" href="#contact">Contact <ArrowUpRight size={16}/></a>
      </div>
    </header>
    <main id="main-content" inert={terminalOpen}>
      <section className="hero" id="about"><div className="hero-copy">
        <p className="eyebrow"><span className="live-dot"/> Linux · Cloud · Automation</p><p className="hero-name">{profile.name}</p>
        <h1>Senior Infrastructure<br/>&amp; <em>Automation Engineer.</em></h1><p className="hero-intro">{profile.intro}</p><p className="target-roles"><span>Roles of interest</span>{profile.targetRoles}</p>
        <div className="hero-actions"><a className="primary-link" href="/Daniele_Catanesi_CV.pdf" download>Download CV <ArrowDown size={17}/></a><a className="text-link" href="https://github.com/SingularVector" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17}/></a></div><button className="hero-command-invite" onClick={event=>{terminalButton.current=event.currentTarget;setTerminalOpen(true)}}><TerminalSquare size={17}/><span>Prefer the command line?</span><span className="invite-action">Try it <ArrowUpRight size={14}/></span></button><p className="location"><MapPin size={15}/>{profile.location}</p>
      </div><aside className="expertise-panel" aria-label="Professional focus"><p className="eyebrow">Daniele Catanesi · 20+ years in infrastructure</p><h2>Linux depth.<span>Enterprise breadth.</span></h2><dl><div><dt>Linux &amp; infrastructure</dt><dd>SUSE, Red Hat, virtualization, storage and networking.</dd></div><div><dt>Automation &amp; integration</dt><dd>Python, Bash, PowerShell, APIs and employee-lifecycle workflows.</dd></div><div><dt>Cloud &amp; Microsoft</dt><dd>Hands-on AWS and Azure work, with deep Microsoft systems and identity experience.</dd></div></dl><div className="availability"><span className="live-dot"/>{profile.availability}</div></aside></section>
      <section className="impact-strip" aria-label="Selected achievements"><article><strong>~90%</strong><h2>Manual provisioning automated</h2><p>Enterprise service automation at Envista.</p></article><article><strong>25,000</strong><h2>Users &amp; endpoints</h2><p>The global environment supported by that automation.</p></article><article><strong>20+ years</strong><h2>Infrastructure engineering</h2><p>Across Linux, Microsoft, networking and cloud integrations.</p></article></section>
      {sections.map(([id,title,number])=><section className="content-section" id={id} key={id}><header className="section-heading"><span>{number} /</span><h2>{title}</h2></header><AppContent type={id} onOpenApp={navigate}/></section>)}
      <section className="contact-section" id="contact"><p className="eyebrow">Keep in touch</p><h2>Good infrastructure<br/>starts with a conversation.</h2><p>{profile.availability}</p><div className="contact-links"><a href="mailto:d.catanesi@gmail.com">Email me <ArrowUpRight size={19}/></a><a href="/Daniele_Catanesi_CV.pdf" download>Download CV <ArrowDown size={19}/></a>{profile.links.map(link=><a key={link.label} href={`https://${link.value}`} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={19}/></a>)}</div></section>
    </main>
    <footer className="site-footer" inert={terminalOpen}><span>Daniele Catanesi · {profile.location}</span><a className="back-top" href="#about">Back to top ↑</a></footer>
    {terminalOpen&&<div className="modal-backdrop" onClick={e=>{if(e.target===e.currentTarget)setTerminalOpen(false)}}><section ref={terminalPanel} className="terminal-dialog" role="dialog" aria-modal="true" aria-label="Portfolio terminal"><header><span><TerminalSquare size={17}/>daniele@portfolio</span><button onClick={()=>setTerminalOpen(false)} aria-label="Close terminal"><X size={19}/></button></header><div className="terminal-container"><AppContent type="terminal" onOpenApp={navigate}/></div>{systemOpen&&<div className="terminal-system"><button onClick={()=>setSystemOpen(false)}>Close system summary</button><AppContent type="system"/></div>}</section></div>}
  </div>
}
