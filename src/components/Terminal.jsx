import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { experiences } from '../data/experience'
import { skillGroups } from '../data/skills'
import { certifications } from '../data/certifications'
import { cases } from '../data/cases'

const caseIds = ['aws', 'workday', 'linux']
const commands = ['neofetch', 'about', 'experience', 'projects', 'cases', 'skills', 'credentials', 'contact', 'open', 'clear', 'help']
const sections = ['about', 'experience', 'projects', 'cases', 'skills', 'credentials', 'contact']
const tux = ['    .--.', '   |o_o |', '   |:_/ |', '  //   \\ \\', ' (|     | )', "/'\\_   _/`\\", '\\___)=(___/'].join('\n')

function ProfileFetch() {
  const facts = [['Role', profile.title], ['Focus', 'Linux · Cloud · Automation'], ['Platforms', 'Linux & Microsoft · AWS & Azure'], ['Tools', 'Python · Bash · PowerShell · C#'], ['Career', '20+ years in infrastructure'], ['Location', profile.location]]
  return <div className="profile-fetch"><pre className="fetch-tux" aria-hidden="true">{tux}</pre><div className="fetch-profile"><strong>{profile.name}</strong><dl>{facts.map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl></div><div className="fetch-footer">{profile.availability}<br />Explore: cases · projects · experience · contact</div></div>
}
const help = `Explore Daniele's portfolio

neofetch               a quick profile at a glance
about                  profile and availability
experience             career overview
experience <company>   role detail, e.g. experience envista
projects               open-source projects and repository links
projects <name>        project detail, e.g. projects logscanner
cases                  engineering case studies
cases <topic>          detail: aws, workday or linux
skills                 technical toolkit
credentials            earlier certifications and languages
contact                email and professional profiles
open <section>         read a section on the page
clear                  clear the output
help                   show these commands

Tab completes commands and topics. Ctrl+L clears the output.
Use ↑ and ↓ to recall commands. Escape closes the terminal.`

function LinkedText({ text }) {
  return text.split(/(https?:\/\/[^\s]+|mailto:[^\s]+)/g).map((part, i) =>
    /^(https?:\/\/|mailto:)/.test(part)
      ? <a key={i} href={part} target={part.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{part.replace(/^mailto:/, '')}</a>
      : part)
}

export default function Terminal({ onOpenApp }) {
  const [lines, setLines] = useState([{ type: 'system', text: "Daniele Catanesi — interactive portfolio\nStart with neofetch for a quick introduction, or type help." }])
  const [value, setValue] = useState('')
  const [history, setHistory] = useState([])
  const [index, setIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState([])
  const input = useRef(null)
  const output = useRef(null)
  useEffect(() => { if (output.current) output.current.scrollTop = output.current.scrollHeight }, [lines])

  function execute(raw) {
    const command = raw.trim()
    if (!command) return
    const [name, ...args] = command.toLowerCase().split(/\s+/)
    const arg = args.join(' ')
    setHistory(items => [...items, command])
    setIndex(-1)
    setSuggestions([])
    const print = text => setLines(items => [...items, { type: 'command', text: `daniele@portfolio:~$ ${command}` }, { type: 'output', text }])
    if (name === 'clear') { setLines([]); return }
    if (name === 'help') return print(help)
    if (name === 'neofetch') { setLines(items => [...items, { type: 'command', text: `daniele@portfolio:~$ ${command}` }, { type: 'neofetch' }]); return }
    if (name === 'about') return print(`${profile.name}\n${profile.title}\n\n${profile.intro}\n\n${profile.summary}\n\n${profile.location}\n${profile.availability}`)
    if (name === 'contact') return print(`Email: mailto:d.catanesi@gmail.com\n${profile.links.map(link => `${link.label}: https://${link.value}`).join('\n')}\n\n${profile.availability}`)
    if (name === 'skills') return print(skillGroups.map(group => `${group.name}\n${group.detail}\n${group.items.join(' · ')}`).join('\n\n'))
    if (name === 'credentials') return print(certifications.map(item => `${item.name}\n${item.status}\n${item.detail}`).join('\n\n'))
    if (name === 'experience') {
      if (!arg) return print(experiences.map(item => `${item.company}\n${item.role} · ${item.location}`).join('\n\n') + '\n\nFor detail: experience envista, experience ibm, experience esmo…')
      const item = experiences.find(item => item.id === arg || item.company.toLowerCase() === arg)
      return print(item ? `${item.role}\n${item.company} · ${item.location}\n\n${item.summary}\n\n${item.bullets.map(b => `• ${b}`).join('\n\n')}` : 'Company not found. Type experience for the career overview.')
    }
    if (name === 'projects') {
      if (!arg) return print(projects.map(item => `${item.name} — ${item.type}\n${item.description}\n${item.url}`).join('\n\n'))
      const item = projects.find(item => item.id === arg || item.name.toLowerCase() === arg)
      return print(item ? `${item.name}\n${item.type}\n\n${item.description}\n\n${item.stack.join(' · ')}\n${item.url}${item.evidence ? `\n\n${item.evidence}\n${item.evidenceUrl}` : ''}` : 'Project not found. Type projects to see the repositories.')
    }
    if (name === 'cases') {
      if (!arg) return print(cases.map((item, i) => `${caseIds[i]} — ${item.title}\n${item.ownership}\n${item.outcome}`).join('\n\n') + '\n\nFor detail: cases aws, cases workday or cases linux')
      const item = cases[caseIds.indexOf(arg)]
      return print(item ? `${item.title}\n${item.company}\n\nMy role: ${item.ownership}\n\n${item.problem}\n\n${item.flow.join(' → ')}\n\nOutcome\n${item.outcome}\n\n${item.engineering.map(([title, text]) => `${title}\n${text}`).join('\n\n')}` : 'Topic not found. Choose aws, workday or linux.')
    }
    if (name === 'open') {
      const target = ({ about: 'about', experience: 'experience', projects: 'projects', cases: 'case-studies', skills: 'skills', credentials: 'certifications', contact: 'contact' })[arg]
      if (target) { onOpenApp(target); return }
      return print('Choose a section: open about, experience, projects, cases, skills, credentials or contact.')
    }
    print(`Unknown command: ${name}. Type help, or use the suggested commands above.`)
  }

  function keyDown(event) {
    if (event.ctrlKey && event.key.toLowerCase() === 'l') {
      event.preventDefault(); setLines([]); setSuggestions([]); return
    }
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault()
      const raw = value.trimStart().toLowerCase()
      const separator = raw.indexOf(' ')
      const command = separator < 0 ? '' : raw.slice(0, separator)
      const prefix = separator < 0 ? raw : raw.slice(separator + 1).trimStart()
      const pool = separator < 0 ? commands : command === 'cases' ? caseIds : command === 'experience' ? experiences.map(item => item.id) : command === 'projects' ? projects.map(item => item.id) : command === 'open' ? sections : []
      const matches = pool.filter(item => item.startsWith(prefix))
      if (matches.length === 1) {
        setValue((command ? command + ' ' : '') + matches[0] + (['cases', 'experience', 'projects', 'open'].includes(matches[0]) && !command ? ' ' : ''))
        setSuggestions([])
      } else if (matches.length > 1) {
        let common = matches[0]
        while (!matches.every(item => item.startsWith(common))) common = common.slice(0, -1)
        if (common.length > prefix.length) setValue((command ? command + ' ' : '') + common)
        setSuggestions(matches)
      } else setSuggestions(['No matching command or topic'])
      return
    }
    if (event.key === 'ArrowUp' && history.length) {
      event.preventDefault()
      const next = Math.min(index + 1, history.length - 1)
      setIndex(next); setValue(history[history.length - 1 - next])
    } else if (event.key === 'ArrowDown' && index >= 0) {
      event.preventDefault()
      const next = index - 1
      setIndex(next); setValue(next >= 0 ? history[history.length - 1 - next] : '')
    }
  }
  return <div className="terminal">
    <div className="terminal-shortcuts" aria-label="Suggested commands">{['neofetch', 'cases', 'projects', 'experience', 'contact', 'help'].map(command => <button type="button" key={command} onClick={() => { execute(command); input.current?.focus() }}>{command}</button>)}</div>
    <div className="terminal-scroll" ref={output}><div className="terminal-output" aria-live="polite" aria-relevant="additions">{lines.map((line, i) => line.type === 'neofetch' ? <ProfileFetch key={i} /> : <pre className={line.type} key={i}><LinkedText text={line.text} /></pre>)}</div></div>
    <div className="terminal-input-area"><div className="terminal-completions" role="status">{suggestions.join('  ·  ')}</div><form className="terminal-prompt" onSubmit={event => { event.preventDefault(); execute(value); setValue('') }}><label htmlFor="portfolio-command">daniele@portfolio:~$</label><input id="portfolio-command" ref={input} autoFocus value={value} aria-label="Terminal command" autoComplete="off" autoCapitalize="none" spellCheck="false" onChange={event => { setValue(event.target.value); setSuggestions([]) }} onKeyDown={keyDown} /></form></div>
  </div>
}
