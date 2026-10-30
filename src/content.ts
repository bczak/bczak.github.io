// Everything on the site lives here: facts once, text per language.
// Add a language: put its code in LANGS and add a dictionary to `dicts`.

export const LANGS = ['en', 'cs', 'ru'] as const
export type Lang = (typeof LANGS)[number]

/** [year, month 1-12] */
export type YM = [number, number]

/** Word forms per Intl.PluralRules category. */
export type Plural = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string }

export const profile = {
  email: 'tashpulatov.jakhongir@gmail.com',
  site: 'https://bczak.github.io/',
  github: 'https://github.com/bczak',
  linkedin: 'https://www.linkedin.com/in/bczak',
  telegram: 'https://t.me/tashpik',
}

export type JobId = 'neovate' | 'confidential' | 'kindred' | 'kb' | 'freelance'
// lead: the print CV sets the theme of this job's first `lead` bullets in bold ("Set up CI/CD:").
export const jobs: { id: JobId; org?: string; url?: string; from: YM | number; to?: YM | number; prague?: boolean; lead?: number }[] = [
  { id: 'neovate', org: 'Neovate s.r.o.', url: 'https://neovate.dev', from: [2025, 3], prague: true, lead: 3 },
  { id: 'confidential', from: 2023, to: 2025 },
  { id: 'kindred', org: 'KINDRED', from: [2023, 4], to: [2023, 6], prague: true },
  { id: 'kb', org: 'Komerční banka', url: 'https://www.kb.cz', from: [2020, 2], to: [2023, 5], prague: true },
  { id: 'freelance', from: [2016, 9], to: [2026, 3] },
]

export type ProjectId = 'thyme' | 'findex' | 'bckit' | 'qanda' | 'unbox' | 'm3you' | 'ddog'
export type Badge = 'live' | 'studio' | 'oss' | 'winner'
// printed: false keeps a project off the one-page print CV.
export const projects: { id: ProjectId; name: string; url?: string; sourceUrl?: string; badge: Badge; tags: string[]; printed?: boolean }[] = [
  { id: 'thyme', name: 'thyme/labs', url: 'https://thymelabs.io', badge: 'live', tags: ['Safe', 'Zodiac Roles', 'viem', 'Deno', 'Subgraphs'] },
  { id: 'findex', name: 'Findex', url: 'https://findex.io', badge: 'studio', tags: ['Solidity', 'Uniswap V4', 'wagmi', 'Indexing'] },
  { id: 'bckit', name: 'BCkit', url: 'https://bckit.cc', badge: 'studio', tags: ['EVM', 'Calldata', 'Simulation'] },
  { id: 'qanda', name: 'QandA.fun', url: 'https://qanda.fun', badge: 'studio', tags: ['Realtime', 'TypeScript', 'Mobile'] },
  { id: 'unbox', name: 'Unbox Quest', url: 'https://unbox.quest', badge: 'studio', tags: ['React', 'Vite', 'PWA', 'Puzzle'], printed: false },
  { id: 'm3you', name: 'm3you', url: 'https://material.you', sourceUrl: 'https://github.com/bczak/m3you', badge: 'oss', tags: ['React', 'CSS', 'Design system'] },
  { id: 'ddog', name: 'dDog', badge: 'winner', tags: ['TON', 'NFT', 'Telegram Web App'] },
]

// Shown as case studies, with a screenshot of the live site from public/shots/.
export const cases: { id: ProjectId; shot: string }[] = [
  { id: 'thyme', shot: '/shots/thyme.webp' },
  { id: 'findex', shot: '/shots/findex.webp' },
]

// Links anyone can check: verified contracts, audits, public code.
export type Proof = { kind: 'contract' | 'audit' | 'repo' | 'npm'; label: string; url: string; address?: string }
export const proof: Partial<Record<ProjectId, Proof[]>> = {
  thyme: [
    { kind: 'repo', label: 'thyme-labs/sdk', url: 'https://github.com/thyme-labs/sdk' },
    { kind: 'npm', label: '@thyme-labs/sdk', url: 'https://www.npmjs.com/package/@thyme-labs/sdk' },
    { kind: 'npm', label: '@thyme-labs/cli', url: 'https://www.npmjs.com/package/@thyme-labs/cli' },
  ],
  findex: [
    { kind: 'contract', label: 'Factory · Optimism', address: '0x4b5a85495Cf984b11575c94FBa82f082A73B6AC2', url: 'https://optimism.blockscout.com/address/0x4b5a85495Cf984b11575c94FBa82f082A73B6AC2?tab=contract' },
    { kind: 'contract', label: 'IndexHook · Optimism', address: '0x4e4ecde86fc904b6e7be363e0f4bf127fd7195d8', url: 'https://optimism.blockscout.com/address/0x4e4ecde86fc904b6e7be363e0f4bf127fd7195d8?tab=contract' },
    { kind: 'audit', label: 'Ackee Blockchain', url: 'https://docs.findex.io/#/technical/findex-final-audit-report' },
  ],
}

// AI coding tools used daily, in the terminal and in the IDE. Shown as a card in About.
export const aiTools = ['Claude Code', 'Codex', 'Cursor', 'Antigravity']

// What I set up at Neovate, in the order a product goes live. Shown as a pipeline in About.
// Every tool is in the infra and app repos (neovate-digital/thyme-apps, thyme-labs/app, findex-digital/findex-web).
export type StageId = 'design' | 'servers' | 'cicd' | 'edge' | 'observe' | 'prod' | 'support'
export const pipeline: { id: StageId; tools: string[] }[] = [
  { id: 'design', tools: ['System design', 'Turborepo', 'Convex'] },
  { id: 'servers', tools: ['4× bare metal', 'Docker Swarm', 'Dokploy'] },
  { id: 'cicd', tools: ['GitHub Actions', 'GitOps', 'AI PR review'] },
  { id: 'edge', tools: ['Traefik', 'APISIX + Lua', 'proxyd'] },
  { id: 'observe', tools: ['Prometheus', 'Grafana', 'Alertmanager'] },
  { id: 'prod', tools: ['OpenBao', 'gVisor', 'Status page'] },
  { id: 'support', tools: ['Self-healing', 'Runbooks', 'Staged upgrades'] },
]

// When the "Now" card in About was last true. Update with its text.
export const nowUpdated: YM = [2026, 10]

// Public figures from the findex.io homepage.
export const findexStats = { checked: [2026, 10] as YM, chains: 3, indexes: 19, aum: 2_500_000 }

// Strongest first. Every entry is backed by shipped work or commits in the repos behind the projects above.
export type StackId = 'ai' | 'web3' | 'frontend' | 'backend' | 'cloud' | 'quality'
export const stack: Record<StackId, string[]> = {
  ai: ['Claude Code', 'Codex', 'Cursor', 'Antigravity', 'AI code review in CI', 'LLM APIs', 'AI agents', 'RAG', 'Sandboxed code execution', 'Genkit', 'On-chain automation'],
  cloud: ['Docker', 'Docker Swarm', 'Dokploy', 'Kubernetes', 'GitHub Actions', 'GitOps', 'Traefik', 'APISIX', 'Prometheus', 'Grafana', 'Alertmanager', 'OpenBao', 'Doppler', 'Linux', 'Sentry', 'Jenkins', 'AWS Lambda', 'API Gateway', 'S3', 'CloudFront', 'Serverless'],
  web3: ['Solidity', 'EVM', 'viem', 'wagmi', 'The Graph', 'Uniswap V4 SDKs', 'Safe', 'Zodiac Roles', 'ERC-4337', 'WalletConnect', 'EVM nodes', 'TON', 'TON Connect'],
  frontend: ['TypeScript', 'React', 'TanStack Router', 'TanStack Query', 'TanStack Start', 'Next.js', 'Vite', 'Rsbuild', 'Module Federation', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Zod', 'Design systems', 'Three.js', 'Vue', 'Telegram Mini Apps'],
  backend: ['Node.js', 'Bun', 'Deno', 'Express', 'Hono', 'Convex', 'REST & OpenAPI', 'GraphQL', 'PostgreSQL', 'MySQL', 'Teradata', 'Prisma', 'Drizzle', 'Firebase', 'Stripe', 'Java', 'Spring Boot', 'Python'],
  quality: ['Vitest', 'Playwright', 'Testing Library', 'Storybook', 'Jest', 'Biome', 'ESLint', 'Turborepo', 'Changesets', 'semantic-release'],
}

// The print CV highlights this group next to the current role it comes from.
export const printFocus: StackId = 'cloud'

type JobText = { role: string; org?: string; summary: string; points: string[] }

// printed: false keeps an entry off the one-page print CV.
export const education: { id: 'ctu' | 'kspa'; from: number; to: number; url?: string; printed?: boolean }[] = [
  { id: 'ctu', from: 2018, to: 2021, url: 'https://fel.cvut.cz' },
  { id: 'kspa', from: 2016, to: 2018, printed: false },
]

export const awards: { id: 'collaby' | 'hackaton'; year: number; url: string }[] = [
  { id: 'collaby', year: 2023, url: 'https://www.blog.encode.club/bnb-chain-zero2hero-hackathon-powered-by-encode-prizewinners-and-summary-ece409fa38d0' },
  { id: 'hackaton', year: 2022, url: 'https://www.linkedin.com/posts/arina-momot-718a311b8_last-weekend-our-team-nftonspace-consisting-activity-6986029004973621249-tcPK' },
]

// Level per language; the words are translated in `languages.levels`.
export type Level = 'native' | 'fluent' | 'proficient'
export const spoken: [Lang, Level][] = [
  ['ru', 'native'],
  ['cs', 'fluent'],
  ['en', 'proficient'],
]

const en = {
  langName: 'English',
  name: 'Jakhongir Tashpulatov',
  role: 'Full-stack developer',
  prague: 'Prague, Czechia',
  meta: {
    title: 'Jakhongir Tashpulatov — Full-stack developer',
    description: 'Full-stack developer in Prague with 10+ years of hands-on coding. Architecture, infrastructure and CI/CD, smart contracts, backends and interfaces — from zero to production.',
  },
  nav: { about: 'About', experience: 'Experience', projects: 'Projects', stack: 'Stack', contact: 'Contact', print: 'Print CV', language: 'Language' },
  hero: {
    status: 'Open to new roles',
    tagline: 'I take products from zero to production: architecture, servers and CI/CD, smart contracts, the backend and the interface people actually use.',
    contact: 'Get in touch',
    print: 'Print CV',
  },
  stats: [
    ['10+', 'years writing code'],
    ['3+', 'years at Komerční banka: data, then full-stack Java'],
    ['#1', 'Best TWA category at Hack-a-TON × Prague'],
    ['7', 'chains on self-hosted nodes I built and run'],
  ],
  about: {
    label: 'About',
    title: 'Contracts, servers, pixels. One developer, the whole stack.',
    body: [
      'I’m Jakhongir, a full-stack developer in Prague, and I’ve been coding for ten years straight. I started freelancing in 2016 with Telegram bots and web apps, spent three years at Komerční banka — first as a data engineer, then as a full-stack Java developer — and then went deep into web3: TON, EVM, Safe and Uniswap V4.',
      'Today I’m Lead Tech Engineer at Neovate, a small studio in Prague. I designed the architecture and built everything from zero to production — bare-metal servers, deploys, CI/CD, gateways and monitoring — and I write the product code myself. I build with AI agents every day — Claude Code, Codex, Cursor and Antigravity, in the terminal and in the IDE. I like software that is simple to use, honest about what it does and boring to operate.',
    ],
    ai: {
      title: 'AI-native development',
      body: 'AI agents are part of how I work every day, in the terminal and in the IDE. They draft, refactor, test and review; I own the architecture, the review and what ships.',
      modes: 'CLI + IDE',
    },
    zero: {
      title: 'From zero to production',
      body: 'Every stage a Neovate product goes through, from architecture to support in production. I set up each one myself.',
      run: 'main · all checks passed',
      stages: { design: 'Architecture', servers: 'Servers', cicd: 'CI/CD', edge: 'Gateway', observe: 'Monitoring', prod: 'Production', support: 'Maintenance & support' } as Record<StageId, string>,
    },
    services: {
      contracts: ['Smart contracts & DeFi', 'Solidity on EVM chains: protocols, vaults, index tokens and permissioned automation with Safe and Zodiac Roles.'],
      dapps: ['dApps & wallets', 'Frontends that talk to the chain through wagmi and viem: wallet flows, transaction simulation, calldata decoding.'],
      indexing: ['Indexing & RPC', 'Subgraphs on The Graph and our own graph-node fork, self-hosted nodes for seven chains behind an APISIX gateway, monitored with Prometheus and Grafana.'],
      backend: ['Backend & APIs', 'Java and Spring Boot, Node.js, Bun, Deno and Python services, deployed to Docker Swarm, Kubernetes or serverless on AWS, integrated with third-party APIs.'],
      frontend: ['Frontend & design systems', 'React and Vue apps, component libraries and landing pages that look sharp and load fast.'],
      telegram: ['Telegram bots & Mini Apps', 'Bots since 2016 and Mini Apps with TON Connect — including a hackathon-winning game.'],
    },
  },
  now: {
    label: 'Now',
    building: ['Building', 'Flow at {thyme}, where AI agents write and run on-chain functions'],
    running: ['Leading', 'Engineering and infrastructure at {neovate}'],
    open: ['Open to', 'New roles'],
  },
  experience: {
    label: 'Experience',
    title: 'Where I’ve worked',
    present: 'Present',
    jobs: {
      neovate: {
        role: 'Lead Tech Engineer',
        summary: 'Hands-on engineering lead at a Prague studio building web3, fintech and AI products. I own the architecture, infrastructure, DevOps, CI/CD, maintenance and support end to end, and I write production code myself.',
        points: [
          'Designed and built the infrastructure: 4 bare-metal servers on Docker Swarm with GitOps deploys (Dokploy), self-hosted nodes for 7 chains behind Traefik, an APISIX gateway with custom Lua plugins (metering, access) and proxyd.',
          'Set up CI/CD: GitHub Actions deploys from dev to production through protected environments, Lefthook, commitlint and typecheck gates, AI PR review, Railway preview deploys, GHCR image releases and npm publishing with provenance.',
          'Monitoring and security: Prometheus with 67 tested alert rules, 14 Grafana dashboards, Telegram alerts, a public status page and a self-healing node watchdog; OpenBao secrets, hardened hosts and gVisor sandboxes for untrusted code.',
          'Findex, an index-token protocol on Uniswap V4 liquidity positions: built the subgraphs (The Graph), trading app and back office myself, merged three micro-frontends into one monorepo and took it to production.',
          'Building thyme/labs: EVM RPC (Gate), hosted subgraphs (Atlas) on our graph-node fork, sped up by my Rust patches, and Flow — TypeScript automation that runs from the user’s own Safe.',
          'Lead a team of frontend, backend and smart-contract engineers with in-house QA and design; shipped BCkit and QandA.fun.',
        ],
      },
      confidential: {
        role: 'Financial product development',
        org: 'Confidential company (NDA)',
        summary: 'In-house product team on a finance-related product. Company and project details remain confidential under an NDA for 10 years after contract termination.',
        points: [],
      },
      kindred: {
        role: 'Full-stack developer',
        summary: 'Built presentation websites for international companies.',
        points: [],
      },
      kb: {
        role: 'Data engineer → Full-stack developer',
        summary: 'Three years at one of the largest banks in Czechia, part of Société Générale group: a year in data engineering, then two years of mostly full-stack development.',
        points: [
          'Data engineer: worked with the bank’s data in SQL across Teradata, PostgreSQL and MySQL.',
          'Full-stack developer: Java and Spring Boot services built with Maven; React frontends with TanStack, Tailwind and Bootstrap.',
          'Shipped through Jenkins pipelines to Kubernetes.',
        ],
      },
      freelance: {
        role: 'Web2 & Web3 developer',
        org: 'Freelance',
        summary: 'Ten years of client work across bots, web apps and dApps.',
        points: [
          'Telegram bots in Node.js and TypeScript; published an open-source Telegraf bot template.',
          'Telegram Mini Apps with TON Connect wallets and NFT mechanics.',
          'Full-stack web apps with React or Vue frontends and Node.js or Python backends, deployed serverless on AWS.',
        ],
      },
    } as Record<JobId, JobText>,
  },
  projects: {
    label: 'Projects',
    title: 'Things I’ve shipped',
    visit: 'Open',
    code: 'Source',
    badges: { live: 'Live', studio: 'Neovate', oss: 'Open source', winner: 'Winner' },
    proof: 'Check it yourself',
    audit: 'Audit',
    caseStudy: 'Case study',
    built: 'What we built',
    findex: {
      built: ['Smart contracts', 'Trading app', 'Admin dashboard', 'Indexing'],
      chains: { one: 'chain', other: 'chains' } as Plural,
      indexes: { one: 'index token', other: 'index tokens' } as Plural,
      aum: 'assets under management',
      source: 'Public figures from findex.io, {date}',
    },
    items: {
      thyme: 'EVM RPC endpoints, hosted subgraphs and on-chain automation in one workspace. Flow runs TypeScript tasks on a cron, interval or webhook from your own Safe, through a Zodiac Roles allowlist with sponsored gas.',
      findex: 'Index-token protocol built on Uniswap V4 liquidity positions. Smart contracts, trading app, admin dashboard and indexing.',
      bckit: 'Free browser toolkit for web3 developers. Decode calldata, impersonate any address in a dApp, review token approvals and inspect on-chain state.',
      qanda: 'Live quizzes for the whole room. Up to 100 players join from their phones with a game code; questions can carry images, audio and video.',
      m3you: 'Material Design 3 Expressive component library for React. Plain CSS, design tokens as CSS custom properties, no build plugins.',
      unbox: 'An offline co-op puzzle for one to eight players. Everyone enters the same seed and gets a different box; what opens yours is written on theirs.',
      ddog: 'Free-to-play-to-earn game inside a Telegram Web App, with TON and NFTs. Built at Hack-a-TON × Prague in a team of four; won the Best TWA category.',
    },
  },
  activity: {
    label: 'Activity',
    title: 'A year on GitHub',
    contributions: { one: 'contribution', other: 'contributions' } as Plural,
    none: 'No contributions',
    lastYear: 'in the last year',
    private: '{n} of them are in private repositories, so GitHub shows them only as a count.',
    active: 'active days out of {n}',
    streak: 'longest streak',
    best: 'best day',
    updated: 'Updated',
    less: 'Less',
    more: 'More',
    open: 'Open GitHub',
  },
  stack: {
    label: 'Stack',
    title: 'Tools I reach for',
    groups: { web3: 'Web3', frontend: 'Frontend', backend: 'Backend & data', cloud: 'Infrastructure & DevOps', quality: 'Testing & tooling', ai: 'AI & agentic coding' },
  },
  background: { label: 'Background', title: 'Education & more' },
  education: {
    title: 'Education',
    ctu: { school: 'Czech Technical University in Prague', detail: 'Faculty of Electrical Engineering · Bachelor’s, Software Engineering' },
    kspa: { school: '1. KŠPA Praha', detail: 'Secondary school' },
  },
  awards: {
    title: 'Awards',
    collaby: { name: 'BNB Chain Zero2Hero Hackathon', detail: '2nd place in the SocialFi category with CollabY, a dApp connecting brands and influencers · $6,000 team prize', source: 'Official results' },
    hackaton: { name: 'Hack-a-TON × Prague', detail: 'Winner of the Best TWA (Telegram Web App) category with team NFTON.space', source: 'Team announcement' },
  },
  languages: {
    title: 'Languages',
    levels: { native: 'Native', fluent: 'Fluent', proficient: 'Proficient' } as Record<Level, string>,
    names: { ru: 'Russian', cs: 'Czech', en: 'English' },
  },
  contact: {
    label: 'Contact',
    title: 'Hiring a full-stack developer?',
    title2: 'Let’s talk.',
    body: 'Tell me about the role and what your team is building, and I’ll tell you honestly how I would help.',
    copy: 'Copy',
    copied: 'Copied',
  },
  footer: 'Built with Vite, TypeScript and Tailwind. Hosted on GitHub Pages.',
  print: {
    profile: 'Profile',
    summary: 'Full-stack developer in Prague with ten years of hands-on coding. As Lead Tech Engineer at Neovate I designed the architecture and built everything from zero to production: bare-metal servers, CI/CD, gateways, monitoring and the products on top. Before that, Komerční banka (data engineer, then full-stack Java) and freelance web2 and web3 work since 2016. I build with AI agents every day: Claude Code, Codex, Cursor and Antigravity.',
    experience: 'Experience',
    projects: 'Selected projects',
    skills: 'Skills',
    live: 'Live version',
    file: 'Jakhongir Tashpulatov — CV',
  },
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

export type Dict = typeof en

const cs: Dict = {
  langName: 'Čeština',
  name: 'Jakhongir Tashpulatov',
  role: 'Full-stack vývojář',
  prague: 'Praha, Česko',
  meta: {
    title: 'Jakhongir Tashpulatov — Full-stack vývojář',
    description: 'Full-stack vývojář v Praze s více než 10 lety praxe v programování. Architektura, infrastruktura a CI/CD, smart kontrakty, backendy i rozhraní — od nuly do produkce.',
  },
  nav: { about: 'O mně', experience: 'Zkušenosti', projects: 'Projekty', stack: 'Technologie', contact: 'Kontakt', print: 'Tisk CV', language: 'Jazyk' },
  hero: {
    status: 'Hledám novou pozici',
    tagline: 'Dotáhnu produkt od nuly do produkce: architekturu, servery a CI/CD, smart kontrakty, backend i rozhraní, které lidé opravdu používají.',
    contact: 'Napište mi',
    print: 'Vytisknout CV',
  },
  stats: [
    ['10+', 'let programování'],
    ['3+', 'roky v Komerční bance: data, pak full-stack Java'],
    ['#1', 'kategorie Best TWA na Hack-a-TON × Prague'],
    ['7', 'blockchainů na mých vlastních nodech'],
  ],
  about: {
    label: 'O mně',
    title: 'Kontrakty, servery, pixely. Jeden vývojář, celý stack.',
    body: [
      'Jsem Jakhongir, full-stack vývojář v Praze, a už deset let nepřetržitě programuji. Jako freelancer jsem začal v roce 2016 s Telegram boty a webovými aplikacemi, tři roky jsem strávil v Komerční bance — nejdřív jako data engineer, pak jako full-stack vývojář v Javě — a pak jsem se ponořil do web3: TON, EVM, Safe a Uniswap V4.',
      'Dnes jsem Lead Tech Engineer v Neovate, malém pražském studiu. Navrhl jsem architekturu a sám postavil vše od nuly do produkce — bare-metal servery, nasazování, CI/CD, brány i monitoring — a píšu i produktový kód. Každý den pracuji s AI agenty — Claude Code, Codex, Cursor a Antigravity, v terminálu i v IDE. Mám rád software, který se snadno používá, dělá přesně to, co slibuje, a jehož provoz je nudný.',
    ],
    ai: {
      title: 'Vývoj s AI agenty',
      body: 'AI agenti jsou součástí mé každodenní práce, v terminálu i v IDE. Navrhují, refaktorují, testují a reviewují kód; architekturu, review a to, co jde do produkce, mám na starosti já.',
      modes: 'CLI + IDE',
    },
    zero: {
      title: 'Od nuly do produkce',
      body: 'Každá fáze, kterou produkt Neovate projde, od architektury po podporu v produkci. Každou jsem sám nastavil.',
      run: 'main · všechny kontroly prošly',
      stages: { design: 'Architektura', servers: 'Servery', cicd: 'CI/CD', edge: 'Brána', observe: 'Monitoring', prod: 'Produkce', support: 'Údržba a\u00a0podpora' },
    },
    services: {
      contracts: ['Smart kontrakty a DeFi', 'Solidity na EVM sítích: protokoly, vaulty, indexové tokeny a automatizace s omezenými oprávněními přes Safe a Zodiac Roles.'],
      dapps: ['dAppky a peněženky', 'Frontendy napojené na blockchain přes wagmi a viem: připojení peněženek, simulace transakcí, dekódování calldata.'],
      indexing: ['Indexace a RPC', 'Subgraphy pro The Graph i na vlastním forku graph-node, vlastní nody pro sedm blockchainů za bránou APISIX, monitorované přes Prometheus a Grafanu.'],
      backend: ['Backend a API', 'Služby v Javě a Spring Bootu, Node.js, Bunu, Denu a Pythonu, nasazené do Docker Swarmu, Kubernetes nebo serverless na AWS, napojené na externí API.'],
      frontend: ['Frontend a design systémy', 'Aplikace v Reactu a Vue, knihovny komponent a landing pages, které vypadají ostře a načítají se rychle.'],
      telegram: ['Telegram boti a Mini Apps', 'Boty píšu od roku 2016, Mini Apps s TON Connect — včetně hry, která vyhrála hackathon.'],
    },
  },
  now: {
    label: 'Teď',
    building: ['Stavím', 'Flow v {thyme}, kde AI agenti píšou a spouštějí on-chain funkce'],
    running: ['Vedu', 'Vývoj a infrastrukturu v {neovate}'],
    open: ['Hledám', 'Novou pozici'],
  },
  experience: {
    label: 'Zkušenosti',
    title: 'Kde jsem pracoval',
    present: 'dosud',
    jobs: {
      neovate: {
        role: 'Lead Tech Engineer',
        summary: 'Prakticky vedu vývoj v pražském studiu, které tvoří produkty z oblasti web3, fintechu a AI. Odpovídám za architekturu, infrastrukturu, DevOps, CI/CD, údržbu i podporu od začátku do konce a sám píšu produkční kód.',
        points: [
          'Navrhl a postavil jsem infrastrukturu: 4 bare-metal servery s Docker Swarmem a GitOps nasazováním (Dokploy), vlastní nody pro 7 blockchainů za Traefikem, bránu APISIX se svými Lua pluginy (měření, přístup) a proxyd.',
          'Nastavil jsem CI/CD: nasazování z dev do produkce v GitHub Actions přes chráněná prostředí, kontroly Lefthook, commitlint a typecheck, AI review pull requestů, preview nasazení na Railway, releasy imagí do GHCR a publikaci na npm s provenance.',
          'Monitoring a bezpečnost: Prometheus se 67 testovanými pravidly alertů, 14 dashboardů v Grafaně, alerty do Telegramu, veřejná status stránka a watchdog, který sám restartuje zaseknuté nody; secrets v OpenBao, zabezpečené servery a gVisor sandboxy pro cizí kód.',
          'Findex, protokol indexových tokenů nad likviditními pozicemi Uniswap V4: sám jsem postavil subgraphy (The Graph), obchodní aplikaci a back office, sloučil tři micro-frontendy do jednoho monorepa a dotáhl ho do produkce.',
          'Stavíme thyme/labs: EVM RPC (Gate), hostované subgraphy (Atlas) na našem forku graph-node, který jsem zrychlil svými patchi v Rustu, a Flow — automatizaci v TypeScriptu, která běží z vlastního Safe uživatele.',
          'Vedu tým frontendových, backendových a smart-kontraktových vývojářů s vlastním QA a designem; vydali jsme BCkit a QandA.fun.',
        ],
      },
      confidential: {
        role: 'Vývoj finančního produktu',
        org: 'Nezveřejněná společnost (NDA)',
        summary: 'Práce v interním produktovém týmu na finančním produktu. Informace o společnosti a projektu zůstávají důvěrné na základě NDA po dobu 10 let od ukončení smlouvy.',
        points: [],
      },
      kindred: {
        role: 'Full-stack vývojář',
        summary: 'Vytvářel jsem prezentační weby pro mezinárodní společnosti.',
        points: [],
      },
      kb: {
        role: 'Data engineer → full-stack vývojář',
        summary: 'Tři roky v jedné z největších bank v Česku, členu skupiny Société Générale: rok v data engineeringu, pak dva roky převážně full-stack vývoje.',
        points: [
          'Data engineer: práce s bankovními daty v SQL nad Teradatou, PostgreSQL a MySQL.',
          'Full-stack vývojář: služby v Javě a Spring Bootu s Mavenem; frontendy v Reactu s TanStackem, Tailwindem a Bootstrapem.',
          'Nasazování přes Jenkins pipeline do Kubernetes.',
        ],
      },
      freelance: {
        role: 'Web2 a Web3 vývojář',
        org: 'Na volné noze',
        summary: 'Deset let práce pro klienty: boti, webové aplikace a dAppky.',
        points: [
          'Telegram boti v Node.js a TypeScriptu; zveřejnil jsem open-source šablonu bota v Telegrafu.',
          'Telegram Mini Apps s peněženkami přes TON Connect a NFT mechanikami.',
          'Full-stack webové aplikace s frontendem v Reactu nebo Vue a backendem v Node.js nebo Pythonu, nasazené serverless na AWS.',
        ],
      },
    },
  },
  projects: {
    label: 'Projekty',
    title: 'Co jsem postavil',
    visit: 'Otevřít',
    code: 'Kód',
    badges: { live: 'V provozu', studio: 'Neovate', oss: 'Open source', winner: 'Vítěz' },
    proof: 'Ověřte si sami',
    audit: 'Audit',
    caseStudy: 'Případová studie',
    built: 'Co jsme postavili',
    findex: {
      built: ['Smart kontrakty', 'Obchodní aplikace', 'Administrace', 'Indexace'],
      chains: { one: 'síť', few: 'sítě', many: 'sítě', other: 'sítí' },
      indexes: { one: 'indexový token', few: 'indexové tokeny', many: 'indexového tokenu', other: 'indexových tokenů' },
      aum: 'spravovaných aktiv',
      source: 'Veřejná čísla z findex.io, {date}',
    },
    items: {
      thyme: 'EVM RPC endpointy, hostované subgraphy a on-chain automatizace v jednom workspace. Flow spouští úlohy v TypeScriptu podle cronu, intervalu nebo webhooku z vašeho vlastního Safe, přes allowlist Zodiac Roles a se sponzorovaným gasem.',
      findex: 'Protokol indexových tokenů postavený na likviditních pozicích Uniswap V4. Smart kontrakty, obchodní aplikace, administrace a indexace.',
      bckit: 'Bezplatná sada nástrojů pro web3 vývojáře v prohlížeči. Dekódování calldata, přihlášení do dAppky za libovolnou adresu, kontrola schválení tokenů a inspekce on-chain stavu.',
      qanda: 'Živé kvízy pro celou místnost. Až 100 hráčů se připojí z telefonu pomocí herního kódu; otázky mohou obsahovat obrázky, zvuk i video.',
      m3you: 'Knihovna komponent Material Design 3 Expressive pro React. Čisté CSS, design tokeny jako CSS proměnné, žádné pluginy do bundleru.',
      unbox: 'Offline kooperativní hlavolam pro jednoho až osm hráčů. Všichni zadají stejný seed a každý dostane jinou krabičku; co otevře tu vaši, je napsané na té jejich.',
      ddog: 'Free-to-play-to-earn hra v Telegram Web App s TON a NFT. Vznikla na Hack-a-TON × Prague ve čtyřčlenném týmu a vyhrála kategorii Best TWA.',
    },
  },
  activity: {
    label: 'Aktivita',
    title: 'Rok na GitHubu',
    contributions: { one: 'příspěvek', few: 'příspěvky', many: 'příspěvku', other: 'příspěvků' },
    none: 'Žádné příspěvky',
    lastYear: 'za poslední rok',
    private: '{n} z nich je v soukromých repozitářích, takže je GitHub ukazuje jen jako počet.',
    active: 'aktivních dní z {n}',
    streak: 'nejdelší série',
    best: 'nejlepší den',
    updated: 'Aktualizováno',
    less: 'Méně',
    more: 'Více',
    open: 'Otevřít GitHub',
  },
  stack: {
    label: 'Technologie',
    title: 'Nástroje, po kterých sahám',
    groups: { web3: 'Web3', frontend: 'Frontend', backend: 'Backend a data', cloud: 'Infrastruktura a DevOps', quality: 'Testování a nástroje', ai: 'AI a agentní vývoj' },
  },
  background: { label: 'Vzdělání', title: 'Vzdělání a další' },
  education: {
    title: 'Vzdělání',
    ctu: { school: 'České vysoké učení technické v Praze', detail: 'Fakulta elektrotechnická · Bakalář, softwarové inženýrství' },
    kspa: { school: '1. KŠPA Praha', detail: 'Střední škola' },
  },
  awards: {
    title: 'Ocenění',
    collaby: { name: 'BNB Chain Zero2Hero Hackathon', detail: '2. místo v kategorii SocialFi s CollabY, dApp propojující značky a influencery · týmová odměna 6 000 USD', source: 'Oficiální výsledky' },
    hackaton: { name: 'Hack-a-TON × Prague', detail: 'Vítěz kategorie Best TWA (Telegram Web App) s týmem NFTON.space', source: 'Příspěvek týmu' },
  },
  languages: {
    title: 'Jazyky',
    levels: { native: 'Rodilý mluvčí', fluent: 'Plynulá', proficient: 'Pokročilá' },
    names: { ru: 'Ruština', cs: 'Čeština', en: 'Angličtina' },
  },
  contact: {
    label: 'Kontakt',
    title: 'Hledáte full-stack vývojáře?',
    title2: 'Pojďme to probrat.',
    body: 'Napište mi, o jakou pozici jde a co váš tým staví, a já vám upřímně řeknu, jak bych mohl pomoct.',
    copy: 'Kopírovat',
    copied: 'Zkopírováno',
  },
  footer: 'Postaveno na Vite, TypeScriptu a Tailwindu. Hostováno na GitHub Pages.',
  print: {
    profile: 'Profil',
    summary: 'Full-stack vývojář v Praze, programuji nepřetržitě deset let. Jako Lead Tech Engineer v Neovate jsem navrhl architekturu a postavil vše od nuly do produkce: bare-metal servery, CI/CD, brány, monitoring i produkty nad nimi. Předtím Komerční banka (data engineer, pak full-stack Java) a od roku 2016 freelance práce na web2 i web3. Každý den pracuji s AI agenty: Claude Code, Codex, Cursor a Antigravity.',
    experience: 'Pracovní zkušenosti',
    projects: 'Vybrané projekty',
    skills: 'Dovednosti',
    live: 'Online verze',
    file: 'Jakhongir Tashpulatov — životopis',
  },
  months: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
}

const ru: Dict = {
  langName: 'Русский',
  name: 'Джахонгир Ташпулатов',
  role: 'Full-stack-разработчик',
  prague: 'Прага, Чехия',
  meta: {
    title: 'Джахонгир Ташпулатов — Full-stack-разработчик',
    description: 'Full-stack-разработчик в Праге, более 10 лет пишу код. Архитектура, инфраструктура и CI/CD, смарт-контракты, бэкенды и интерфейсы — с нуля до продакшена.',
  },
  nav: { about: 'Обо мне', experience: 'Опыт', projects: 'Проекты', stack: 'Стек', contact: 'Контакты', print: 'Печать CV', language: 'Язык' },
  hero: {
    status: 'Открыт к новым предложениям',
    tagline: 'Довожу продукт с нуля до продакшена: архитектура, серверы и CI/CD, смарт-контракты, бэкенд и интерфейс, которым люди реально пользуются.',
    contact: 'Написать мне',
    print: 'Распечатать CV',
  },
  stats: [
    ['10+', 'лет пишу код'],
    ['3+', 'года в Komerční banka: данные, затем full-stack на Java'],
    ['#1', 'номинация Best TWA на Hack-a-TON × Prague'],
    ['7', 'блокчейнов на своих нодах, которые я развернул'],
  ],
  about: {
    label: 'Обо мне',
    title: 'Контракты, серверы, пиксели. Один разработчик — весь стек.',
    body: [
      'Я Джахонгир, full-stack-разработчик из Праги, и уже десять лет без перерыва программирую. Начал фрилансить в 2016 году с Telegram-ботов и веб-приложений, три года работал в Komerční banka — сначала дата-инженером, потом full-stack-разработчиком на Java, — а потом с головой ушёл в web3: TON, EVM, Safe и Uniswap V4.',
      'Сейчас я Lead Tech Engineer в Neovate — небольшой пражской студии. Я спроектировал архитектуру и сам построил всё с нуля до продакшена — bare-metal-серверы, деплой, CI/CD, шлюзы и мониторинг, — и пишу продуктовый код. Каждый день работаю с AI-агентами — Claude Code, Codex, Cursor и Antigravity, в терминале и в IDE. Люблю софт, которым просто пользоваться, который честно делает то, что обещает, и который скучно поддерживать.',
    ],
    ai: {
      title: 'Разработка с AI-агентами',
      body: 'AI-агенты — часть моей ежедневной работы, в терминале и в IDE. Они пишут, рефакторят, тестируют и ревьюят код, а архитектура, ревью и то, что уходит в продакшен, — на мне.',
      modes: 'CLI + IDE',
    },
    zero: {
      title: 'С нуля до продакшена',
      body: 'Все этапы, которые проходит продукт Neovate, — от архитектуры до поддержки в продакшене. Каждый я настроил сам.',
      run: 'main · все проверки пройдены',
      stages: { design: 'Архитектура', servers: 'Серверы', cicd: 'CI/CD', edge: 'Шлюз', observe: 'Мониторинг', prod: 'Продакшен', support: 'Сопровождение и поддержка' },
    },
    services: {
      contracts: ['Смарт-контракты и DeFi', 'Solidity в EVM-сетях: протоколы, хранилища, индексные токены и автоматизация с ограниченными правами через Safe и Zodiac Roles.'],
      dapps: ['dApp и кошельки', 'Фронтенды, которые общаются с блокчейном через wagmi и viem: подключение кошельков, симуляция транзакций, декодирование calldata.'],
      indexing: ['Индексация и RPC', 'Сабграфы на The Graph и собственном форке graph-node, собственные ноды семи блокчейнов за шлюзом APISIX, мониторинг в Prometheus и Grafana.'],
      backend: ['Бэкенд и API', 'Сервисы на Java и Spring Boot, Node.js, Bun, Deno и Python — в Docker Swarm, Kubernetes или serverless на AWS, с интеграциями сторонних API.'],
      frontend: ['Фронтенд и дизайн-системы', 'Приложения на React и Vue, библиотеки компонентов и лендинги, которые выглядят чётко и быстро грузятся.'],
      telegram: ['Telegram-боты и Mini Apps', 'Боты с 2016 года и Mini Apps с TON Connect — включая игру, победившую на хакатоне.'],
    },
  },
  now: {
    label: 'Сейчас',
    building: ['Строю', 'Flow в {thyme}, где AI-агенты пишут и запускают on-chain функции'],
    running: ['Руковожу', 'Разработкой и инфраструктурой в {neovate}'],
    open: ['Рассматриваю', 'Новые предложения'],
  },
  experience: {
    label: 'Опыт',
    title: 'Где я работал',
    present: 'сейчас',
    jobs: {
      neovate: {
        role: 'Lead Tech Engineer',
        summary: 'Играющий лид пражской студии, которая делает web3-, финтех- и AI-продукты. Отвечаю за архитектуру, инфраструктуру, DevOps, CI/CD, сопровождение и поддержку от начала до конца и сам пишу продакшен-код.',
        points: [
          'Спроектировал и построил инфраструктуру: 4 bare-metal-сервера на Docker Swarm с GitOps-деплоем (Dokploy), собственные ноды 7 блокчейнов за Traefik, шлюз APISIX со своими Lua-плагинами (учёт, доступ) и proxyd.',
          'Настроил CI/CD: деплой из dev в продакшен на GitHub Actions через защищённые окружения, проверки Lefthook, commitlint и typecheck, AI-ревью пул-реквестов, превью-деплои на Railway, релизы образов в GHCR и публикация в npm с provenance.',
          'Мониторинг и безопасность: Prometheus с 67 протестированными алертами, 14 дашбордов Grafana, алерты в Telegram, публичная статус-страница и watchdog, который сам перезапускает зависшие ноды; секреты в OpenBao, защищённые серверы и gVisor-песочницы для чужого кода.',
          'Findex — протокол индексных токенов на позициях ликвидности Uniswap V4: сам сделал сабграфы (The Graph), торговое приложение и бэк-офис, объединил три микрофронтенда в один монорепозиторий и вывел его в продакшен.',
          'Строим thyme/labs: EVM RPC (Gate), хостинг сабграфов (Atlas) на нашем форке graph-node, который я ускорил своими патчами на Rust, и Flow — автоматизацию на TypeScript, которая работает из собственного Safe пользователя.',
          'Руковожу командой фронтенд-, бэкенд- и смарт-контракт-разработчиков со своими QA и дизайном; запустили BCkit и QandA.fun.',
        ],
      },
      confidential: {
        role: 'Разработка финансового продукта',
        org: 'Конфиденциальная компания (NDA)',
        summary: 'Работал во внутренней продуктовой команде компании над продуктом в сфере финансов. Информация о компании и проекте остаётся конфиденциальной по NDA в течение 10 лет после прекращения договора.',
        points: [],
      },
      kindred: {
        role: 'Full-stack-разработчик',
        summary: 'Делал презентационные сайты для международных компаний.',
        points: [],
      },
      kb: {
        role: 'Data engineer → full-stack-разработчик',
        summary: 'Три года в одном из крупнейших банков Чехии, входящем в группу Société Générale: год в data engineering, затем два года в основном full-stack-разработки.',
        points: [
          'Data engineer: работа с банковскими данными на SQL в Teradata, PostgreSQL и MySQL.',
          'Full-stack-разработчик: сервисы на Java и Spring Boot со сборкой Maven; фронтенд на React с TanStack, Tailwind и Bootstrap.',
          'Деплой через пайплайны Jenkins в Kubernetes.',
        ],
      },
      freelance: {
        role: 'Web2- и Web3-разработчик',
        org: 'Фриланс',
        summary: 'Десять лет работы с клиентами: боты, веб-приложения и dApp.',
        points: [
          'Telegram-боты на Node.js и TypeScript; выложил open-source шаблон бота на Telegraf.',
          'Telegram Mini Apps с кошельками через TON Connect и NFT-механиками.',
          'Full-stack веб-приложения: фронтенд на React или Vue, бэкенд на Node.js или Python, serverless-деплой на AWS.',
        ],
      },
    },
  },
  projects: {
    label: 'Проекты',
    title: 'Что я запустил',
    visit: 'Открыть',
    code: 'Код',
    badges: { live: 'Работает', studio: 'Neovate', oss: 'Open source', winner: 'Победитель' },
    proof: 'Проверьте сами',
    audit: 'Аудит',
    caseStudy: 'Кейс',
    built: 'Что мы сделали',
    findex: {
      built: ['Смарт-контракты', 'Торговое приложение', 'Админка', 'Индексация'],
      chains: { one: 'сеть', few: 'сети', many: 'сетей', other: 'сети' },
      indexes: { one: 'индексный токен', few: 'индексных токена', many: 'индексных токенов', other: 'индексного токена' },
      aum: 'активов под управлением',
      source: 'Публичные данные с findex.io, {date}',
    },
    items: {
      thyme: 'EVM RPC, хостинг сабграфов и on-chain автоматизация в одном рабочем пространстве. Flow запускает задачи на TypeScript по cron, интервалу или вебхуку из вашего собственного Safe — через allowlist Zodiac Roles и со спонсированным газом.',
      findex: 'Протокол индексных токенов на позициях ликвидности Uniswap V4. Смарт-контракты, торговое приложение, админка и индексация.',
      bckit: 'Бесплатный браузерный набор инструментов для web3-разработчиков. Декодирование calldata, вход в dApp под любым адресом, проверка апрувов токенов и просмотр on-chain состояния.',
      qanda: 'Живые квизы для всей комнаты. До 100 игроков подключаются с телефонов по коду игры; в вопросах — картинки, аудио и видео.',
      m3you: 'Библиотека компонентов Material Design 3 Expressive для React. Чистый CSS, дизайн-токены в CSS-переменных, без плагинов для сборщика.',
      unbox: 'Офлайн-головоломка для совместной игры от одного до восьми человек. Все вводят один и тот же сид и получают разные коробки: то, что открывает вашу, написано на чужой.',
      ddog: 'Free-to-play-to-earn игра в Telegram Web App на TON с NFT. Сделана на Hack-a-TON × Prague командой из четырёх человек и победила в номинации Best TWA.',
    },
  },
  activity: {
    label: 'Активность',
    title: 'Год на GitHub',
    contributions: { one: 'вклад', few: 'вклада', many: 'вкладов', other: 'вклада' },
    none: 'Нет вкладов',
    lastYear: 'за последний год',
    private: '{n} из них — в приватных репозиториях, поэтому GitHub показывает их только числом.',
    active: 'активных дней из {n}',
    streak: 'самая длинная серия',
    best: 'лучший день',
    updated: 'Обновлено',
    less: 'Меньше',
    more: 'Больше',
    open: 'Открыть GitHub',
  },
  stack: {
    label: 'Стек',
    title: 'Чем я пользуюсь',
    groups: { web3: 'Web3', frontend: 'Фронтенд', backend: 'Бэкенд и данные', cloud: 'Инфраструктура и DevOps', quality: 'Тестирование и инструменты', ai: 'AI и агентная разработка' },
  },
  background: { label: 'Образование', title: 'Образование и не только' },
  education: {
    title: 'Образование',
    ctu: { school: 'Чешский технический университет в Праге (ČVUT)', detail: 'Факультет электротехники · Бакалавр, программная инженерия' },
    kspa: { school: '1. KŠPA Praha', detail: 'Средняя школа' },
  },
  awards: {
    title: 'Награды',
    collaby: { name: 'BNB Chain Zero2Hero Hackathon', detail: '2-е место в категории SocialFi с CollabY — dApp для сотрудничества брендов и инфлюенсеров · приз команде 6 000 USD', source: 'Официальные результаты' },
    hackaton: { name: 'Hack-a-TON × Prague', detail: 'Победа в номинации Best TWA (Telegram Web App) в команде NFTON.space', source: 'Публикация команды' },
  },
  languages: {
    title: 'Языки',
    levels: { native: 'Родной', fluent: 'Свободный', proficient: 'Продвинутый' },
    names: { ru: 'Русский', cs: 'Чешский', en: 'Английский' },
  },
  contact: {
    label: 'Контакты',
    title: 'Ищете full-stack-разработчика?',
    title2: 'Давайте обсудим.',
    body: 'Расскажите о роли и о том, что строит ваша команда, — и я честно скажу, чем могу быть полезен.',
    copy: 'Копировать',
    copied: 'Скопировано',
  },
  footer: 'Сделано на Vite, TypeScript и Tailwind. Хостинг — GitHub Pages.',
  print: {
    profile: 'Профиль',
    summary: 'Full-stack-разработчик из Праги, десять лет без перерыва пишу код. Как Lead Tech Engineer в Neovate спроектировал архитектуру и построил всё с нуля до продакшена: bare-metal-серверы, CI/CD, шлюзы, мониторинг и сами продукты. До этого — Komerční banka (дата-инженер, затем full-stack на Java) и фриланс в web2 и web3 с 2016 года. Каждый день работаю с AI-агентами: Claude Code, Codex, Cursor и Antigravity.',
    experience: 'Опыт работы',
    projects: 'Избранные проекты',
    skills: 'Навыки',
    live: 'Онлайн-версия',
    file: 'Джахонгир Ташпулатов — резюме',
  },
  months: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
}

export const dicts: Record<Lang, Dict> = { en, cs, ru }
