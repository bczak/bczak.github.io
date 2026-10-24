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
export const jobs: { id: JobId; org?: string; url?: string; from: YM | number; to?: YM | number; prague?: boolean }[] = [
  { id: 'neovate', org: 'Neovate s.r.o.', url: 'https://neovate.dev', from: [2025, 3], prague: true },
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

// When the "Now" card in About was last true. Update with its text.
export const nowUpdated: YM = [2026, 10]

// Public figures from the findex.io homepage.
export const findexStats = { checked: [2026, 10] as YM, chains: 3, indexes: 19, aum: 2_500_000 }

// Strongest first. Every entry is backed by shipped work or commits in the repos behind the projects above.
export type StackId = 'web3' | 'frontend' | 'backend' | 'cloud' | 'quality' | 'ai'
export const stack: Record<StackId, string[]> = {
  web3: ['Solidity', 'EVM', 'viem', 'wagmi', 'Uniswap V4 SDKs', 'Safe', 'Zodiac Roles', 'ERC-4337', 'WalletConnect', 'The Graph', 'EVM nodes', 'TON', 'TON Connect'],
  frontend: ['TypeScript', 'React', 'TanStack Router', 'TanStack Query', 'TanStack Start', 'Next.js', 'Vite', 'Rsbuild', 'Module Federation', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Zod', 'Design systems', 'Three.js', 'Vue', 'Telegram Mini Apps'],
  backend: ['Node.js', 'Bun', 'Deno', 'Express', 'Hono', 'Convex', 'REST & OpenAPI', 'GraphQL', 'PostgreSQL', 'MySQL', 'Teradata', 'Prisma', 'Drizzle', 'Firebase', 'Stripe', 'Java', 'Spring Boot', 'Python'],
  cloud: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'AWS Lambda', 'API Gateway', 'S3', 'CloudFront', 'Serverless', 'Traefik', 'APISIX', 'Prometheus', 'Grafana', 'Sentry', 'Linux'],
  quality: ['Vitest', 'Playwright', 'Testing Library', 'Storybook', 'Jest', 'Biome', 'ESLint', 'Turborepo', 'semantic-release'],
  ai: ['LLM APIs', 'AI agents', 'Claude Code', 'Codex', 'AI code review in CI', 'Sandboxed code execution', 'RAG', 'Genkit', 'On-chain automation'],
}

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

// CEFR level, or 'native' (translated).
export const spoken: [Lang, string][] = [
  ['ru', 'native'],
  ['cs', 'C1–C2'],
  ['en', 'B2–C1'],
]

const en = {
  langName: 'English',
  name: 'Jakhongir Tashpulatov',
  role: 'Full-stack developer',
  prague: 'Prague, Czechia',
  meta: {
    title: 'Jakhongir Tashpulatov — Full-stack developer',
    description: 'Full-stack developer in Prague. Smart contracts, backends, indexers and interfaces — the whole stack, shipped.',
  },
  nav: { about: 'About', experience: 'Experience', projects: 'Projects', stack: 'Stack', contact: 'Contact', print: 'Print CV', language: 'Language' },
  hero: {
    status: 'Taking on new projects',
    tagline: 'I build the whole thing: smart contracts, the backend that indexes them and the interface people actually use.',
    contact: 'Get in touch',
    print: 'Print CV',
  },
  stats: [
    ['10+', 'years shipping software'],
    ['3+', 'years at Komerční banka: data, then full-stack Java'],
    ['#1', 'Best TWA category at Hack-a-TON × Prague'],
    ['3', 'languages spoken'],
  ],
  about: {
    label: 'About',
    title: 'Contracts, servers, pixels. One developer, the whole stack.',
    body: [
      'I’m Jakhongir, a full-stack developer in Prague. I started freelancing in 2016 with Telegram bots and web apps, spent three years at Komerční banka — first in data science, then as a full-stack Java developer — and then went deep into web3: TON, EVM, Safe and Uniswap V4.',
      'Today I run Neovate, a small studio that takes products from a sketch to production. I like software that is simple to use, honest about what it does and boring to operate.',
    ],
    services: {
      contracts: ['Smart contracts & DeFi', 'Solidity on EVM chains: protocols, vaults, index tokens and permissioned automation with Safe and Zodiac Roles.'],
      dapps: ['dApps & wallets', 'Frontends that talk to the chain through wagmi and viem: wallet flows, transaction simulation, calldata decoding.'],
      indexing: ['Indexing & infra', 'Subgraphs, RPC gateways and scheduled on-chain jobs, so the data behind the UI is fast and correct.'],
      backend: ['Backend & APIs', 'Java and Spring Boot, Node.js, Bun, Deno and Python services, deployed to Kubernetes or serverless on AWS, integrated with third-party APIs.'],
      frontend: ['Frontend & design systems', 'React and Vue apps, component libraries and landing pages that look sharp and load fast.'],
      telegram: ['Telegram bots & Mini Apps', 'Bots since 2016 and Mini Apps with TON Connect — including a hackathon-winning game.'],
    },
  },
  now: {
    label: 'Now',
    building: ['Building', 'Flow at {thyme}, where AI agents write and run on-chain functions'],
    running: ['Running', '{neovate}, a software studio in Prague'],
    open: ['Open to', 'New projects'],
  },
  experience: {
    label: 'Experience',
    title: 'Where I’ve worked',
    present: 'Present',
    jobs: {
      neovate: {
        role: 'CEO',
        summary: 'Running a Prague software studio that designs, builds and tests products — from smart contracts to landing pages — for web3, fintech and AI clients.',
        points: [
          'Built Findex’s subgraphs, trading app and back office myself — an index-token protocol on Uniswap V4 liquidity positions.',
          'Building thyme/labs: EVM RPC (Gate), hosted subgraphs (Atlas) and Flow — TypeScript automation that runs from the user’s own Safe.',
          'Shipped BCkit, a free web3 debugging toolkit, and QandA.fun, a live multiplayer quiz platform.',
          'Lead a team of frontend, backend and smart-contract engineers with in-house QA and design.',
        ],
      },
      confidential: {
        role: 'Financial product development',
        org: 'Confidential company (NDA)',
        summary: 'Worked on a finance-related product. Company and project details remain confidential under an NDA for 10 years after contract termination.',
        points: [],
      },
      kindred: {
        role: 'Full-stack developer',
        summary: 'Built presentation websites for international companies.',
        points: [],
      },
      kb: {
        role: 'Data scientist → Full-stack developer',
        summary: 'Three years at one of the largest banks in Czechia, part of Société Générale group: a year in data science, then two years of mostly full-stack development.',
        points: [
          'Data scientist: worked with the bank’s data in SQL across Teradata, PostgreSQL and MySQL.',
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
    groups: { web3: 'Web3', frontend: 'Frontend', backend: 'Backend & data', cloud: 'Cloud & DevOps', quality: 'Testing & tooling', ai: 'AI & automation' },
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
    native: 'Native',
    names: { ru: 'Russian', cs: 'Czech', en: 'English' },
  },
  contact: {
    label: 'Contact',
    title: 'Have something to build?',
    title2: 'Let’s talk.',
    body: 'Protocol, dApp, backend or a landing page — tell me what you’re building and I’ll tell you honestly how I would do it.',
    copy: 'Copy',
    copied: 'Copied',
  },
  footer: 'Built with Vite, TypeScript and Tailwind. Hosted on GitHub Pages.',
  print: {
    profile: 'Profile',
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
    description: 'Full-stack vývojář v Praze. Smart kontrakty, backendy, indexery i rozhraní — celý stack od návrhu po provoz.',
  },
  nav: { about: 'O mně', experience: 'Zkušenosti', projects: 'Projekty', stack: 'Technologie', contact: 'Kontakt', print: 'Tisk CV', language: 'Jazyk' },
  hero: {
    status: 'Beru nové projekty',
    tagline: 'Postavím celou věc: smart kontrakty, backend, který je indexuje, i rozhraní, které lidé opravdu používají.',
    contact: 'Napište mi',
    print: 'Vytisknout CV',
  },
  stats: [
    ['10+', 'let vývoje softwaru'],
    ['3+', 'roky v Komerční bance: data, pak full-stack Java'],
    ['#1', 'kategorie Best TWA na Hack-a-TON × Prague'],
    ['3', 'jazyky, kterými mluvím'],
  ],
  about: {
    label: 'O mně',
    title: 'Kontrakty, servery, pixely. Jeden vývojář, celý stack.',
    body: [
      'Jsem Jakhongir, full-stack vývojář v Praze. Jako freelancer jsem začal v roce 2016 s Telegram boty a webovými aplikacemi, tři roky jsem strávil v Komerční bance — nejdřív v data science, pak jako full-stack vývojář v Javě — a pak jsem se naplno ponořil do web3: TON, EVM, Safe a Uniswap V4.',
      'Dnes vedu Neovate, malé studio, které dotáhne produkt od skici až do produkce. Mám rád software, který se snadno používá, dělá přesně to, co slibuje, a jehož provoz je nudný.',
    ],
    services: {
      contracts: ['Smart kontrakty a DeFi', 'Solidity na EVM sítích: protokoly, vaulty, indexové tokeny a automatizace s omezenými oprávněními přes Safe a Zodiac Roles.'],
      dapps: ['dAppky a peněženky', 'Frontendy napojené na blockchain přes wagmi a viem: připojení peněženek, simulace transakcí, dekódování calldata.'],
      indexing: ['Indexace a infrastruktura', 'Subgraphy, RPC brány a plánované on-chain úlohy, aby data pod rozhraním byla rychlá a správná.'],
      backend: ['Backend a API', 'Služby v Javě a Spring Bootu, Node.js, Bunu, Denu a Pythonu, nasazené do Kubernetes nebo serverless na AWS, napojené na externí API.'],
      frontend: ['Frontend a design systémy', 'Aplikace v Reactu a Vue, knihovny komponent a landing pages, které vypadají ostře a načítají se rychle.'],
      telegram: ['Telegram boti a Mini Apps', 'Boty píšu od roku 2016, Mini Apps s TON Connect — včetně hry, která vyhrála hackathon.'],
    },
  },
  now: {
    label: 'Teď',
    building: ['Stavím', 'Flow v {thyme}, kde AI agenti píšou a spouštějí on-chain funkce'],
    running: ['Vedu', '{neovate}, softwarové studio v Praze'],
    open: ['Beru', 'Nové projekty'],
  },
  experience: {
    label: 'Zkušenosti',
    title: 'Kde jsem pracoval',
    present: 'dosud',
    jobs: {
      neovate: {
        role: 'CEO',
        summary: 'Vedu pražské softwarové studio, které navrhuje, vyvíjí a testuje produkty — od smart kontraktů po landing pages — pro klienty z web3, fintechu a AI.',
        points: [
          'Sám jsem postavil subgraphy, obchodní aplikaci a back office Findexu — protokolu indexových tokenů nad likviditními pozicemi Uniswap V4.',
          'Stavíme thyme/labs: EVM RPC (Gate), hostované subgraphy (Atlas) a Flow — automatizaci v TypeScriptu, která běží z vlastního Safe uživatele.',
          'Vydali jsme BCkit, bezplatnou sadu nástrojů pro ladění web3, a QandA.fun, platformu pro živé kvízy pro více hráčů.',
          'Vedu tým frontendových, backendových a smart-kontraktových vývojářů s vlastním QA a designem.',
        ],
      },
      confidential: {
        role: 'Vývoj finančního produktu',
        org: 'Nezveřejněná společnost (NDA)',
        summary: 'Práce na produktu z oblasti financí. Informace o společnosti a projektu zůstávají důvěrné na základě NDA po dobu 10 let od ukončení smlouvy.',
        points: [],
      },
      kindred: {
        role: 'Full-stack vývojář',
        summary: 'Vytvářel jsem prezentační weby pro mezinárodní společnosti.',
        points: [],
      },
      kb: {
        role: 'Data scientist → full-stack vývojář',
        summary: 'Tři roky v jedné z největších bank v Česku, členu skupiny Société Générale: rok v data science, pak dva roky převážně full-stack vývoje.',
        points: [
          'Data scientist: práce s bankovními daty v SQL nad Teradatou, PostgreSQL a MySQL.',
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
    groups: { web3: 'Web3', frontend: 'Frontend', backend: 'Backend a data', cloud: 'Cloud a DevOps', quality: 'Testování a nástroje', ai: 'AI a automatizace' },
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
    native: 'Rodilý mluvčí',
    names: { ru: 'Ruština', cs: 'Čeština', en: 'Angličtina' },
  },
  contact: {
    label: 'Kontakt',
    title: 'Máte co postavit?',
    title2: 'Pojďme to probrat.',
    body: 'Protokol, dAppka, backend nebo landing page — napište mi, co stavíte, a já vám upřímně řeknu, jak bych to udělal.',
    copy: 'Kopírovat',
    copied: 'Zkopírováno',
  },
  footer: 'Postaveno na Vite, TypeScriptu a Tailwindu. Hostováno na GitHub Pages.',
  print: {
    profile: 'Profil',
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
    description: 'Full-stack-разработчик в Праге. Смарт-контракты, бэкенды, индексеры и интерфейсы — весь стек под ключ.',
  },
  nav: { about: 'Обо мне', experience: 'Опыт', projects: 'Проекты', stack: 'Стек', contact: 'Контакты', print: 'Печать CV', language: 'Язык' },
  hero: {
    status: 'Беру новые проекты',
    tagline: 'Делаю всё целиком: смарт-контракты, бэкенд, который их индексирует, и интерфейс, которым люди реально пользуются.',
    contact: 'Написать мне',
    print: 'Распечатать CV',
  },
  stats: [
    ['10+', 'лет в разработке'],
    ['3+', 'года в Komerční banka: данные, затем full-stack на Java'],
    ['#1', 'номинация Best TWA на Hack-a-TON × Prague'],
    ['3', 'языка, на которых говорю'],
  ],
  about: {
    label: 'Обо мне',
    title: 'Контракты, серверы, пиксели. Один разработчик — весь стек.',
    body: [
      'Я Джахонгир, full-stack-разработчик из Праги. Начал фрилансить в 2016 году с Telegram-ботов и веб-приложений, три года работал в Komerční banka — сначала в data science, потом full-stack-разработчиком на Java, — а потом с головой ушёл в web3: TON, EVM, Safe и Uniswap V4.',
      'Сейчас руковожу Neovate — небольшой студией, которая доводит продукт от наброска до продакшена. Люблю софт, которым просто пользоваться, который честно делает то, что обещает, и который скучно поддерживать.',
    ],
    services: {
      contracts: ['Смарт-контракты и DeFi', 'Solidity в EVM-сетях: протоколы, хранилища, индексные токены и автоматизация с ограниченными правами через Safe и Zodiac Roles.'],
      dapps: ['dApp и кошельки', 'Фронтенды, которые общаются с блокчейном через wagmi и viem: подключение кошельков, симуляция транзакций, декодирование calldata.'],
      indexing: ['Индексация и инфраструктура', 'Сабграфы, RPC-шлюзы и on-chain задачи по расписанию — чтобы данные под интерфейсом были быстрыми и точными.'],
      backend: ['Бэкенд и API', 'Сервисы на Java и Spring Boot, Node.js, Bun, Deno и Python — в Kubernetes или serverless на AWS, с интеграциями сторонних API.'],
      frontend: ['Фронтенд и дизайн-системы', 'Приложения на React и Vue, библиотеки компонентов и лендинги, которые выглядят чётко и быстро грузятся.'],
      telegram: ['Telegram-боты и Mini Apps', 'Боты с 2016 года и Mini Apps с TON Connect — включая игру, победившую на хакатоне.'],
    },
  },
  now: {
    label: 'Сейчас',
    building: ['Строю', 'Flow в {thyme}, где AI-агенты пишут и запускают on-chain функции'],
    running: ['Руковожу', '{neovate} — софтверной студией в Праге'],
    open: ['Беру', 'Новые проекты'],
  },
  experience: {
    label: 'Опыт',
    title: 'Где я работал',
    present: 'сейчас',
    jobs: {
      neovate: {
        role: 'CEO',
        summary: 'Руковожу пражской студией, которая проектирует, разрабатывает и тестирует продукты — от смарт-контрактов до лендингов — для клиентов из web3, финтеха и AI.',
        points: [
          'Сам сделал сабграфы, торговое приложение и бэк-офис Findex — протокола индексных токенов на позициях ликвидности Uniswap V4.',
          'Строим thyme/labs: EVM RPC (Gate), хостинг сабграфов (Atlas) и Flow — автоматизацию на TypeScript, которая работает из собственного Safe пользователя.',
          'Запустили BCkit — бесплатный набор инструментов для отладки web3 — и QandA.fun, платформу живых мультиплеерных квизов.',
          'Руковожу командой фронтенд-, бэкенд- и смарт-контракт-разработчиков со своими QA и дизайном.',
        ],
      },
      confidential: {
        role: 'Разработка финансового продукта',
        org: 'Конфиденциальная компания (NDA)',
        summary: 'Работал над продуктом в сфере финансов. Информация о компании и проекте остаётся конфиденциальной по NDA в течение 10 лет после прекращения договора.',
        points: [],
      },
      kindred: {
        role: 'Full-stack-разработчик',
        summary: 'Делал презентационные сайты для международных компаний.',
        points: [],
      },
      kb: {
        role: 'Data scientist → full-stack-разработчик',
        summary: 'Три года в одном из крупнейших банков Чехии, входящем в группу Société Générale: год в data science, затем два года в основном full-stack-разработки.',
        points: [
          'Data scientist: работа с банковскими данными на SQL в Teradata, PostgreSQL и MySQL.',
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
    groups: { web3: 'Web3', frontend: 'Фронтенд', backend: 'Бэкенд и данные', cloud: 'Облако и DevOps', quality: 'Тестирование и инструменты', ai: 'AI и автоматизация' },
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
    native: 'Родной',
    names: { ru: 'Русский', cs: 'Чешский', en: 'Английский' },
  },
  contact: {
    label: 'Контакты',
    title: 'Есть что построить?',
    title2: 'Давайте обсудим.',
    body: 'Протокол, dApp, бэкенд или лендинг — расскажите, что строите, и я честно скажу, как сделал бы это сам.',
    copy: 'Копировать',
    copied: 'Скопировано',
  },
  footer: 'Сделано на Vite, TypeScript и Tailwind. Хостинг — GitHub Pages.',
  print: {
    profile: 'Профиль',
    experience: 'Опыт работы',
    projects: 'Избранные проекты',
    skills: 'Навыки',
    live: 'Онлайн-версия',
    file: 'Джахонгир Ташпулатов — резюме',
  },
  months: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
}

export const dicts: Record<Lang, Dict> = { en, cs, ru }
