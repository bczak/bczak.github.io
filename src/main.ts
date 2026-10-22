import '@fontsource-variable/unbounded'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import './style.css'
import { encode } from 'uqr'
import { LANGS, awards, cases, dicts, education, findexStats, jobs, nowUpdated, profile, proof, projects, spoken, stack, type Dict, type Lang, type Plural, type ProjectId, type Proof, type StackId, type YM } from './content'
import gh from './github.json'

// Lucide icons (ISC), inlined.
const icons = {
  arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  printer: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  server: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
  layout: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  cap: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  badge: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  package: '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>',
  languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
}
type Icon = keyof typeof icons
const svg = (name: Icon, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`

const logo = (cls = 'logo') =>
  `<svg class="${cls}" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2.5 27.7 9.25 16 16 4.3 9.25Z" fill="#dcff7a"/><path d="M4.3 9.25 16 16v13.5L4.3 22.75Z" fill="#b2ee2a"/><path d="M27.7 9.25 16 16v13.5l11.7-6.75Z" fill="#6e9c10"/></svg>`

const serviceIcons: Record<keyof Dict['about']['services'], Icon> = {
  contracts: 'code', dapps: 'wallet', indexing: 'database', backend: 'server', frontend: 'layout', telegram: 'bot',
}

const host = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
const now = (): YM => { const d = new Date(); return [d.getFullYear(), d.getMonth() + 1] }
const month = (t: Dict, [y, m]: YM) => `${t.months[m - 1]} ${y}`
const plural = (lang: Lang, n: number, p: Plural) => p[new Intl.PluralRules(lang).select(n)] ?? p.other
const jobDate = (t: Dict, date: YM | number) => typeof date === 'number' ? String(date) : month(t, date)
const period = (t: Dict, from: YM | number, to?: YM | number) => `${jobDate(t, from)} — ${to !== undefined ? jobDate(t, to) : t.experience.present}`

function duration(lang: Lang, from: YM, to: YM = now()) {
  const total = (to[0] - from[0]) * 12 + (to[1] - from[1]) + 1
  const unit = (unit: 'year' | 'month', n: number) => new Intl.NumberFormat(lang, { style: 'unit', unit, unitDisplay: 'short' }).format(n)
  return [Math.floor(total / 12) && unit('year', Math.floor(total / 12)), total % 12 && unit('month', total % 12)].filter(Boolean).join(' ')
}

function qr(url: string) {
  const { data, size } = encode(url, { ecc: 'M', border: 0 })
  let d = ''
  data.forEach((row, y) => row.forEach((on, x) => { if (on) d += `M${x} ${y}h1v1h-1z` }))
  return `<svg viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges" aria-hidden="true"><path d="${d}" fill="currentColor"/></svg>`
}

const levelName = (t: Dict, level: string) => level === 'native' ? t.languages.native : level
const langUrl = (lang: Lang) => lang === 'en' ? profile.site : `${profile.site}?lang=${lang}`
const toHex = (s: string) => [...s].map(c => c.charCodeAt(0).toString(16)).join('')
const txHash = `0x${toHex('bczak.github.io')}`
// 12-second blocks since I started freelancing — ticks live in the hero card.
const blockNumber = () => Math.floor((Date.now() - Date.UTC(2016, 8, 1)) / 12_000)

/* ---------- screen ---------- */

function nav(t: Dict, lang: Lang) {
  const links = (['about', 'experience', 'projects', 'stack', 'contact'] as const)
    .map(id => `<a href="#${id}" data-nav="${id}">${t.nav[id]}</a>`).join('')
  return `
<header class="nav" data-nav-bar>
  <div class="wrap nav-inner">
    <a href="#top" class="brand" aria-label="${t.name}">${logo()}<span>bczak</span></a>
    <nav class="nav-links" aria-label="Sections">${links}</nav>
    <div class="flex items-center gap-2">
      <div class="lang" role="group" aria-label="${t.nav.language}">
        ${LANGS.map(l => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}" title="${dicts[l].langName}">${l}</button>`).join('')}
      </div>
      <button type="button" class="btn-icon" data-print aria-label="${t.nav.print}" title="${t.nav.print}">${svg('printer')}</button>
    </div>
  </div>
</header>`
}

function receipt() {
  const row = (k: string, v: string) => `<div class="rc-row"><span class="rc-k">${k}</span><span class="rc-v">${v}</span></div>`
  return `
<aside class="receipt card reveal" aria-hidden="true">
  <div class="rc-bar"><span class="rc-dots"><i></i><i></i><i></i></span><span>explorer / tx</span></div>
  <div class="rc-body">
    ${row('Status', '<span class="rc-status" data-status><span class="rc-spin"></span>Pending</span>')}
    ${row('Tx hash', `<span class="truncate">${txHash.slice(0, 10)}…${txHash.slice(-8)}</span>`)}
    ${row('Block', `<span data-block>${blockNumber().toLocaleString('en')}</span>`)}
    ${row('From', '<span class="text-lime">bczak.github.io</span>')}
    ${row('To', 'your-next-product')}
    ${row('Method', '<span class="rc-method">shipFullStack</span>()')}
    <pre class="rc-input"><span class="c">// input</span>
<span class="k">contracts</span>: <span class="s">"Solidity"</span>
<span class="k">backend</span>:   <span class="s">"Java · Spring · Node"</span>
<span class="k">frontend</span>:  <span class="s">"React · Vue"</span>
<span class="k">chains</span>:    [<span class="s">"EVM"</span>, <span class="s">"TON"</span>]</pre>
    ${row('Gas', 'sponsored <span class="text-lime">✓</span>')}
  </div>
</aside>`
}

function hero(t: Dict) {
  const [first, ...rest] = t.name.split(' ')
  return `
<section class="hero wrap" id="top">
  <div class="hero-grid">
    <div class="min-w-0">
      <p class="status reveal"><span class="pulse"></span>${t.hero.status}</p>
      <h1 class="hero-name reveal"><span>${first}</span> <span class="text-gradient">${rest.join(' ')}</span></h1>
      <p class="hero-role reveal">${t.role}</p>
      <p class="hero-tagline reveal">${t.hero.tagline}</p>
      <div class="hero-cta reveal">
        <a class="btn btn-primary" href="#contact">${svg('send')}${t.hero.contact}</a>
        <button type="button" class="btn btn-ghost" data-print>${svg('printer')}${t.hero.print}</button>
      </div>
      <p class="hero-meta reveal">${svg('pin')}${t.prague}<span class="sep"></span><a href="${profile.github}" target="_blank" rel="noopener">${svg('github')}github.com/bczak</a></p>
    </div>
    ${receipt()}
  </div>
  <dl class="stats">
    ${t.stats.map(([v, l]) => `<div class="stat reveal"><dt>${l}</dt><dd>${v}</dd></div>`).join('')}
  </dl>
</section>`
}

function marquee() {
  const items = Object.values(stack).flat()
  const run = items.map(s => `<span>${s}</span>`).join('')
  return `<div class="marquee" aria-hidden="true"><div class="marquee-track">${run}${run}</div></div>`
}

const head = (n: string, label: string, title: string) => `
<div class="sec-head reveal">
  <p class="eyebrow"><span>${n}</span>${label}</p>
  <h2 class="sec-title">${title}</h2>
</div>`

function nowCard(t: Dict) {
  const thyme = projects.find(p => p.id === 'thyme')!
  const neovate = jobs.find(j => j.id === 'neovate')!
  const fill = (s: string) => s
    .replace('{thyme}', `<a href="${thyme.url}" target="_blank" rel="noopener">${thyme.name}</a>`)
    .replace('{neovate}', `<a href="${neovate.url}" target="_blank" rel="noopener">Neovate</a>`)
  return `
  <div class="card now reveal">
    <p class="now-label"><span class="pulse"></span>${t.now.label}<span>${month(t, nowUpdated)}</span></p>
    <dl class="now-list">${[t.now.building, t.now.running, t.now.open].map(([k, v]) => `<div><dt>${k}</dt><dd>${fill(v)}</dd></div>`).join('')}</dl>
  </div>`
}

function about(t: Dict) {
  const services = Object.entries(t.about.services) as [keyof Dict['about']['services'], string[]][]
  return `
<section class="section wrap" id="about">
  ${head('01', t.about.label, t.about.title)}
  <div class="about-text reveal">${t.about.body.map(p => `<p>${p}</p>`).join('')}</div>
  ${nowCard(t)}
  <div class="services">
    ${services.map(([id, [title, body]]) => `
    <article class="card service reveal">
      <span class="service-icon">${svg(serviceIcons[id])}</span>
      <h3>${title}</h3>
      <p>${body}</p>
    </article>`).join('')}
  </div>
</section>`
}

function experience(t: Dict, lang: Lang) {
  return `
<section class="section wrap" id="experience">
  ${head('02', t.experience.label, t.experience.title)}
  <ol class="timeline">
    ${jobs.map(job => {
      const x = t.experience.jobs[job.id]
      const org = x.org ?? job.org ?? ''
      return `
    <li class="job reveal${job.to ? '' : ' is-current'}">
      <div class="job-when">
        <span>${period(t, job.from, job.to)}</span>
        ${typeof job.from !== 'number' && typeof job.to !== 'number' ? `<span class="job-dur">${duration(lang, job.from, job.to)}</span>` : ''}
      </div>
      <div class="job-dot" aria-hidden="true"></div>
      <article class="card job-card">
        <header>
          <h3>${x.role}</h3>
          <p class="job-org">${job.url ? `<a href="${job.url}" target="_blank" rel="noopener">${org}${svg('arrow', 'icon-sm')}</a>` : org}${job.prague ? `<span class="sep"></span>${t.prague}` : ''}</p>
        </header>
        <p class="job-summary">${x.summary}</p>
        ${x.points.length ? `<ul>${x.points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
      </article>
    </li>`
    }).join('')}
  </ol>
</section>`
}

const thymeCode = `<pre class="code" aria-hidden="true"><span class="k">export default</span> <span class="f">defineTask</span>({
  schema: z.<span class="f">object</span>({ vault: z.<span class="f">address</span>(), minRewards: z.coerce.<span class="f">bigint</span>() }),
  <span class="k">async</span> <span class="f">run</span>(ctx) {
    <span class="k">const</span> pending = <span class="k">await</span> ctx.client.<span class="f">readContract</span>(…)
    <span class="k">if</span> (pending &lt; ctx.args.minRewards) <span class="k">return</span> { canExec: <span class="s">false</span> }
    <span class="k">return</span> { canExec: <span class="s">true</span>, calls: [harvest] }
  },
})</pre>`

type Project = (typeof projects)[number]
const badge = (t: Dict, p: Project) =>
  `<span class="badge badge-${p.badge}">${p.badge === 'winner' ? svg('trophy', 'icon-sm') : '<i></i>'}${t.projects.badges[p.badge]}</span>`
const tags = (p: Project) => `<ul class="tags">${p.tags.map(s => `<li>${s}</li>`).join('')}</ul>`

// What sits under each case study's description.
const caseDetails: Partial<Record<ProjectId, (t: Dict, lang: Lang) => string>> = {
  thyme: t => `
      <p class="case-h">${t.projects.built}</p>
      <ul class="modules"><li><b>Gate</b><span>EVM RPC</span></li><li><b>Atlas</b><span>Subgraphs</span></li><li><b>Flow</b><span>Automation</span></li></ul>`,
  findex: (t, lang) => {
    const f = t.projects.findex, s = findexStats
    const aum = new Intl.NumberFormat(lang, { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol', notation: 'compact', maximumFractionDigits: 1 }).format(s.aum)
    return `
      <p class="case-h">${t.projects.built}</p>
      <ul class="case-built">${f.built.map(b => `<li>${svg('check', 'icon-sm')}${b}</li>`).join('')}</ul>
      <dl class="case-stats">
        <div><dt>${plural(lang, s.chains, f.chains)}</dt><dd>${s.chains}</dd></div>
        <div><dt>${plural(lang, s.indexes, f.indexes)}</dt><dd>${s.indexes}</dd></div>
        <div><dt>${f.aum}</dt><dd>${aum}</dd></div>
      </dl>
      <p class="case-source">${f.source.replace('{date}', month(t, s.checked))}</p>`
  },
}

const proofIcons: Record<Proof['kind'], Icon> = { contract: 'badge', audit: 'shield', repo: 'github', npm: 'package' }

function proofLinks(t: Dict, id: ProjectId) {
  const items = proof[id]
  if (!items) return ''
  return `
      <p class="case-h">${t.projects.proof}</p>
      <ul class="proof">${items.map(x => `
        <li><a href="${x.url}" target="_blank" rel="noopener"${x.address ? ` title="${x.address}"` : ''}>${svg(proofIcons[x.kind], 'icon-sm')}${x.kind === 'audit' ? `${t.projects.audit} · ` : ''}${x.label}${x.address ? `<span>${x.address.slice(0, 6)}…${x.address.slice(-4)}</span>` : ''}${svg('arrow', 'icon-sm')}</a></li>`).join('')}
      </ul>`
}

function caseStudy(t: Dict, lang: Lang, { id, shot }: (typeof cases)[number], flip: boolean) {
  const p = projects.find(x => x.id === id)!
  const link = `href="${p.url}" target="_blank" rel="noopener"`
  return `
    <article class="card case reveal${flip ? ' is-flip' : ''}">
      <div class="case-text">
        <div class="project-top">${badge(t, p)}<span class="case-label">${t.projects.caseStudy}</span></div>
        <h3><a ${link}>${p.name}</a></h3>
        <p class="project-host">${host(p.url!)}</p>
        <p class="case-desc">${t.projects.items[id]}</p>
        ${caseDetails[id]?.(t, lang) ?? ''}
        ${proofLinks(t, id)}
        ${tags(p)}
      </div>
      <div class="case-visual">
        <a class="case-shot" ${link} tabindex="-1" aria-hidden="true">
          <span class="shot-bar"><span class="rc-dots"><i></i><i></i><i></i></span>${host(p.url!)}</span>
          <img src="${shot}" alt="" width="1280" height="800" loading="lazy" decoding="async">
        </a>
        ${id === 'thyme' ? thymeCode : ''}
      </div>
    </article>`
}

function projectsSection(t: Dict, lang: Lang) {
  const rest = projects.filter(p => !cases.some(c => c.id === p.id))
  return `
<section class="section wrap" id="projects">
  ${head('03', t.projects.label, t.projects.title)}
  <div class="cases">${cases.map((c, i) => caseStudy(t, lang, c, i % 2 === 1)).join('')}</div>
  <div class="projects">
    ${rest.map(p => {
      const tag = p.url ? 'a' : 'div'
      const attrs = p.url ? ` href="${p.url}" target="_blank" rel="noopener"` : ''
      return `
    <${tag} class="card project reveal"${attrs}>
      <div class="project-top">
        ${badge(t, p)}
        ${p.url ? `<span class="project-go">${svg('arrow')}</span>` : ''}
      </div>
      <h3>${p.name}</h3>
      ${p.url ? `<p class="project-host">${host(p.url)}</p>` : '<p class="project-host">Hack-a-TON × Prague · 2022</p>'}
      <p class="project-desc">${t.projects.items[p.id]}</p>
      ${tags(p)}
    </${tag}>`
    }).join('')}
  </div>
</section>`
}

/* GitHub activity: src/github.json, refreshed on every deploy. Weeks start on Monday. */

const ghDay = (i: number) => new Date(Date.parse(gh.from) + i * 86_400_000)
const ghOffset = (ghDay(0).getUTCDay() + 6) % 7
const ghWeeks = Math.ceil((ghOffset + gh.counts.length) / 7)

// Levels split the active days into quartiles, so one huge day doesn't flatten the rest.
const ghLevels = (() => {
  const sorted = gh.counts.filter(c => c > 0).sort((a, b) => a - b)
  const cuts = [.25, .5, .75].map(p => sorted[Math.floor(p * (sorted.length - 1))] ?? 0)
  return gh.counts.map(c => c && 1 + cuts.filter(cut => c > cut).length)
})()

const ghStats = (() => {
  let run = 0, longest = 0, best = 0
  gh.counts.forEach((c, i) => {
    run = c ? run + 1 : 0
    longest = Math.max(longest, run)
    if (c > gh.counts[best]) best = i
  })
  return { longest, best, active: gh.counts.filter(Boolean).length }
})()

const utc = (lang: Lang, o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(lang, { timeZone: 'UTC', ...o })
const contributions = (t: Dict, lang: Lang, n: number) => `${n.toLocaleString(lang)} ${plural(lang, n, t.activity.contributions)}`

function dayTip(t: Dict, lang: Lang, i: number) {
  const n = gh.counts[i]
  return `<b>${n ? contributions(t, lang, n) : t.activity.none}</b> · ${utc(lang, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(ghDay(i))}`
}

function activity(t: Dict, lang: Lang) {
  const a = t.activity
  const { longest, best, active } = ghStats
  // GitHub's own headline number; it covers a few more days than the grid shows.
  const total = gh.total
  const cells = gh.counts.map((_, i) => {
    const w = Math.floor((i + ghOffset) / 7), d = (i + ghOffset) % 7
    return `<i data-day="${i}" data-l="${ghLevels[i]}" style="grid-area:${d + 2}/${w + 1};--s:${w + d}"></i>`
  }).join('')
  const months = gh.counts.map((_, i) => {
    const date = ghDay(i).getUTCDate(), w = Math.floor((i + ghOffset) / 7)
    const label = (date === 1 || (i === 0 && date <= 10)) && w < ghWeeks - 1
    return label ? `<span class="gh-month" style="grid-column:${w + 1}">${t.months[ghDay(i).getUTCMonth()]}</span>` : ''
  }).join('')
  // Mon, Wed, Fri. 2024-01-01 was a Monday.
  const weekdays = [0, 1, 2, 3, 4, 5, 6].map(d =>
    `<span>${d % 2 || d > 4 ? '' : utc(lang, { weekday: 'short' }).format(Date.UTC(2024, 0, 1 + d))}</span>`).join('')
  const share = new Intl.NumberFormat(lang, { style: 'percent' }).format(gh.private / total)
  const days = new Intl.NumberFormat(lang, { style: 'unit', unit: 'day', unitDisplay: 'long' }).format(longest)
  return `
<section class="section wrap" id="activity">
  ${head('04', a.label, a.title)}
  <article class="card gh reveal">
    <header class="gh-head">
      <div>
        <p class="gh-total"><b>${total.toLocaleString(lang)}</b>${plural(lang, total, a.contributions)} ${a.lastYear}</p>
        ${gh.private ? `<p class="gh-note">${a.private.replace('{n}', share)}</p>` : ''}
      </div>
      <a class="btn btn-ghost" href="${profile.github}" target="_blank" rel="noopener">${svg('github')}${a.open}${svg('arrow', 'icon-sm')}</a>
    </header>
    <div class="gh-body">
      <div class="gh-wd" aria-hidden="true"><span></span>${weekdays}</div>
      <div class="gh-scroll">
        <div class="gh-cal" style="--weeks:${ghWeeks}" role="img" aria-label="${contributions(t, lang, total)} ${a.lastYear}">${months}${cells}</div>
      </div>
    </div>
    <div class="gh-meta">
      <p>${a.updated} ${utc(lang, { day: 'numeric', month: 'short', year: 'numeric' }).format(Date.parse(gh.updated))}</p>
      <p class="gh-legend" aria-hidden="true">${a.less}${[0, 1, 2, 3, 4].map(l => `<i data-l="${l}"></i>`).join('')}${a.more}</p>
    </div>
    <dl class="gh-stats">
      <div><dt>${a.active.replace('{n}', gh.counts.length.toLocaleString(lang))}</dt><dd>${active.toLocaleString(lang)}</dd></div>
      <div><dt>${a.streak}</dt><dd>${days}</dd></div>
      <div><dt>${a.best} · ${utc(lang, { day: 'numeric', month: 'short' }).format(ghDay(best))}</dt><dd>${gh.counts[best].toLocaleString(lang)}</dd></div>
    </dl>
  </article>
  <div class="gh-tip" role="tooltip" data-tip></div>
</section>`
}

function stackSection(t: Dict) {
  const groups = Object.entries(stack) as [StackId, string[]][]
  return `
<section class="section wrap" id="stack">
  ${head('05', t.stack.label, t.stack.title)}
  <div class="stack">
    ${groups.map(([id, items]) => `
    <article class="card stack-group reveal">
      <h3>${t.stack.groups[id]}</h3>
      <ul class="chips">${items.map(s => `<li>${s}</li>`).join('')}</ul>
    </article>`).join('')}
  </div>
</section>`
}

function background(t: Dict) {
  return `
<section class="section wrap" id="background">
  ${head('06', t.background.label, t.background.title)}
  <div class="bg-grid3">
    <article class="card info reveal">
      <h3>${svg('cap')}${t.education.title}</h3>
      ${education.map(e => `
      <div class="info-item">
        <p class="info-title">${e.url ? `<a href="${e.url}" target="_blank" rel="noopener">${t.education[e.id].school}</a>` : t.education[e.id].school}</p>
        <p class="info-detail">${t.education[e.id].detail}</p>
        <p class="info-when">${e.from} — ${e.to}</p>
      </div>`).join('')}
    </article>
    <article class="card info reveal">
      <h3>${svg('trophy')}${t.awards.title}</h3>
      ${awards.map(a => `
      <div class="info-item">
        <p class="info-title">${t.awards[a.id].name}</p>
        <p class="info-detail">${t.awards[a.id].detail}</p>
        <p class="info-when">${a.year}</p>
      </div>`).join('')}
    </article>
    <article class="card info reveal">
      <h3>${svg('languages')}${t.languages.title}</h3>
      <ul class="spoken">
        ${spoken.map(([l, level]) => `<li><span>${t.languages.names[l]}</span><span class="level${level === 'native' ? ' level-native' : ''}">${levelName(t, level)}</span></li>`).join('')}
      </ul>
    </article>
  </div>
</section>`
}

function contact(t: Dict) {
  const link = (href: string, icon: Icon, label: string) =>
    `<a class="btn btn-ghost" href="${href}" target="_blank" rel="noopener">${svg(icon)}${label}</a>`
  return `
<section class="section wrap" id="contact">
  <div class="card contact reveal">
    <p class="eyebrow"><span>07</span>${t.contact.label}</p>
    <h2 class="contact-title">${t.contact.title}<br><span class="text-gradient">${t.contact.title2}</span></h2>
    <p class="contact-body">${t.contact.body}</p>
    <div class="contact-email">
      <a href="mailto:${profile.email}">${svg('mail')}<span>${profile.email}</span></a>
      <button type="button" class="btn-icon" data-copy="${profile.email}" aria-label="${t.contact.copy}" title="${t.contact.copy}" data-copied="${t.contact.copied}">${svg('copy')}</button>
    </div>
    <div class="contact-links">
      ${link(profile.telegram, 'send', 'Telegram')}
      ${link(profile.linkedin, 'linkedin', 'LinkedIn')}
      ${link(profile.github, 'github', 'GitHub')}
    </div>
  </div>
</section>`
}

function footer(t: Dict) {
  return `
<footer class="footer">
  <div class="wrap">
    <p>${logo('logo logo-sm')}© ${new Date().getFullYear()} ${t.name}</p>
    <p>${t.footer}</p>
  </div>
</footer>`
}

const screen = (t: Dict, lang: Lang) =>
  nav(t, lang) + `<main>${hero(t)}${marquee()}${about(t)}${experience(t, lang)}${projectsSection(t, lang)}${activity(t, lang)}${stackSection(t)}${background(t)}${contact(t)}</main>` + footer(t)

/* ---------- print ---------- */

// Project details also live in the job bullets and awards, so print keeps it to one line.
const firstSentence = (s: string) => s.split(/(?<=\.)\s/)[0]

function printCv(t: Dict, lang: Lang) {
  const c = (icon: Icon, href: string, label: string) => `<li>${svg(icon)}<a href="${href}">${label}</a></li>`
  return `
<header class="pcv-head">
  <div>
    <div class="pcv-name">${logo('pcv-logo')}<h1>${t.name}</h1></div>
    <p class="pcv-role">${t.role}<span>${t.prague}</span></p>
    <ul class="pcv-contacts">
      ${c('mail', `mailto:${profile.email}`, profile.email)}
      ${c('send', profile.telegram, host(profile.telegram))}
      ${c('linkedin', profile.linkedin, host(profile.linkedin))}
      ${c('github', profile.github, host(profile.github))}
    </ul>
  </div>
  <a class="pcv-qr" href="${langUrl(lang)}">${qr(langUrl(lang))}<span>${t.print.live}</span></a>
</header>

<section class="pcv-profile">
  <h2 class="pcv-h">${t.print.profile}</h2>
  <p>${t.about.body.join(' ')}</p>
</section>

<div class="pcv-cols">
  <div>
    <section>
      <h2 class="pcv-h">${t.print.experience}</h2>
    ${jobs.map(job => {
      const x = t.experience.jobs[job.id]
      const org = x.org ?? job.org ?? ''
      return `
    <article class="pcv-job">
      <header>
        <h3>${x.role} <span>· ${job.url ? `<a href="${job.url}">${org}</a>` : org}</span></h3>
        <p>${period(t, job.from, job.to)}</p>
      </header>
      <p class="pcv-sub">${x.summary}</p>
      ${x.points.length ? `<ul>${x.points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
    </article>`
    }).join('')}
    </section>
    <section class="pcv-projects-wrap">
      <h2 class="pcv-h">${t.print.projects}</h2>
      <div class="pcv-projects">
        ${projects.filter(p => p.printed !== false).map(p => `
        <article>
          <h3>${p.name}${p.url ? ` <a href="${p.url}">${host(p.url)}</a>` : ' <span>Hack-a-TON × Prague</span>'}</h3>
          <p>${firstSentence(t.projects.items[p.id])}</p>
        </article>`).join('')}
      </div>
    </section>
  </div>

  <aside>
    <section>
      <h2 class="pcv-h">${t.print.skills}</h2>
      ${(Object.entries(stack) as [StackId, string[]][]).map(([id, items]) => `
      <div class="pcv-skill">
        <h3>${t.stack.groups[id]}</h3>
        <p>${items.map(s => `<span>${s}</span>`).join('')}</p>
      </div>`).join('')}
    </section>
    <section>
      <h2 class="pcv-h">${t.education.title}</h2>
      ${education.map(e => `
      <div class="pcv-item">
        <h3>${t.education[e.id].school}</h3>
        <p>${t.education[e.id].detail}</p>
        <p class="pcv-when">${e.from} — ${e.to}</p>
      </div>`).join('')}
    </section>
    <section>
      <h2 class="pcv-h">${t.awards.title}</h2>
      ${awards.map(a => `
      <div class="pcv-item">
        <h3>${t.awards[a.id].name}</h3>
        <p>${t.awards[a.id].detail}</p>
        <p class="pcv-when">${a.year}</p>
      </div>`).join('')}
    </section>
    <section>
      <h2 class="pcv-h">${t.languages.title}</h2>
      <ul class="pcv-langs">
        ${spoken.map(([l, level]) => `<li><span>${t.languages.names[l]}</span><span>${levelName(t, level)}</span></li>`).join('')}
      </ul>
    </section>
  </aside>
</div>`
}

/* ---------- wiring ---------- */

const app = document.getElementById('app')!
const printRoot = document.getElementById('print-cv')!
const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang)
let current: Lang = 'en'
let observers: IntersectionObserver[] = []

function initialLang(): Lang {
  const q = new URLSearchParams(location.search).get('lang')
  if (isLang(q)) return q
  const saved = localStorage.getItem('lang')
  if (isLang(saved)) return saved
  for (const l of navigator.languages ?? []) {
    const code = l.slice(0, 2).toLowerCase()
    if (isLang(code)) return code
  }
  return 'en'
}

function render(lang: Lang, animate: boolean) {
  const t = dicts[lang]
  current = lang
  document.documentElement.lang = lang
  document.title = t.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  app.innerHTML = screen(t, lang)
  printRoot.innerHTML = printCv(t, lang)
  observers.forEach(o => o.disconnect())
  observers = [revealOnScroll(animate), trackSections()]
  confirmTx()
  // On narrow screens the calendar scrolls; start at the latest week.
  const cal = app.querySelector('.gh-scroll')
  if (cal) cal.scrollLeft = cal.scrollWidth
}

function revealOnScroll(animate: boolean) {
  const els = app.querySelectorAll<HTMLElement>('.reveal')
  const io = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
  }, { rootMargin: '0px 0px -8% 0px' })
  els.forEach(el => animate ? io.observe(el) : el.classList.add('is-in'))
  return io
}

function trackSections() {
  const links = app.querySelectorAll<HTMLAnchorElement>('[data-nav]')
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (!e.isIntersecting) continue
      links.forEach(a => a.toggleAttribute('aria-current', a.dataset.nav === e.target.id))
    }
  }, { rootMargin: '-45% 0px -50% 0px' })
  app.querySelectorAll('main > section[id]').forEach(s => io.observe(s))
  return io
}

let txTimer = 0
function confirmTx() {
  clearTimeout(txTimer)
  txTimer = window.setTimeout(() => {
    const el = app.querySelector('[data-status]')
    if (el) { el.classList.add('is-ok'); el.innerHTML = `${svg('check', 'icon-sm')}Success` }
  }, 1400)
}

setInterval(() => {
  const el = app.querySelector<HTMLElement>('[data-block]')
  if (!el) return
  el.textContent = blockNumber().toLocaleString('en')
  el.classList.remove('tick')
  void el.offsetWidth
  el.classList.add('tick')
}, 12_000)

document.addEventListener('click', e => {
  const target = e.target as HTMLElement
  const langBtn = target.closest<HTMLElement>('[data-lang]')
  if (langBtn && isLang(langBtn.dataset.lang) && langBtn.dataset.lang !== current) {
    const lang = langBtn.dataset.lang
    localStorage.setItem('lang', lang)
    const url = new URL(location.href)
    lang === 'en' ? url.searchParams.delete('lang') : url.searchParams.set('lang', lang)
    history.replaceState(null, '', url)
    render(lang, false)
    app.querySelector<HTMLElement>(`[data-lang="${lang}"]`)?.focus()
    return
  }
  if (target.closest('[data-print]')) { window.print(); return }
  const copyBtn = target.closest<HTMLElement>('[data-copy]')
  if (copyBtn) {
    navigator.clipboard?.writeText(copyBtn.dataset.copy!).then(() => {
      copyBtn.innerHTML = svg('check')
      copyBtn.classList.add('is-done')
      copyBtn.title = copyBtn.dataset.copied!
      setTimeout(() => { copyBtn.innerHTML = svg('copy'); copyBtn.classList.remove('is-done') }, 1800)
    })
  }
})

// Spotlight that follows the cursor on cards.
document.addEventListener('pointermove', e => {
  const card = (e.target as HTMLElement).closest?.<HTMLElement>('.card')
  if (!card) return
  const r = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - r.left}px`)
  card.style.setProperty('--my', `${e.clientY - r.top}px`)
})

// Day tooltip on the activity calendar. Fixed, so the scrolling calendar doesn't clip it.
document.addEventListener('pointerover', e => {
  const tip = app.querySelector<HTMLElement>('[data-tip]')
  const cell = (e.target as HTMLElement).closest?.<HTMLElement>('[data-day]')
  if (!tip) return
  if (!cell) { tip.classList.remove('is-on'); return }
  tip.innerHTML = dayTip(dicts[current], current, Number(cell.dataset.day))
  const r = cell.getBoundingClientRect()
  const half = tip.offsetWidth / 2 + 8
  tip.style.left = `${Math.min(Math.max(r.left + r.width / 2, half), innerWidth - half)}px`
  tip.style.top = `${r.top}px`
  tip.classList.add('is-on')
})

const onScroll = () => {
  app.querySelector('[data-nav-bar]')?.classList.toggle('is-scrolled', scrollY > 8)
  app.querySelector('[data-tip]')?.classList.remove('is-on')
}
addEventListener('scroll', onScroll, { passive: true })

// The browser uses the title as the PDF file name.
addEventListener('beforeprint', () => { document.title = dicts[current].print.file })
addEventListener('afterprint', () => { document.title = dicts[current].meta.title })

// ?print shows the A4 layout on screen, for checking it without the print dialog.
if (new URLSearchParams(location.search).has('print')) document.documentElement.classList.add('print-preview')

render(initialLang(), !matchMedia('(prefers-reduced-motion: reduce)').matches)
onScroll()
