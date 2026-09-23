import './style.css'
import { config } from './config'
import photosJson from './photos.json'

type Photo = { file: string; w: number; h: number }
const photos = photosJson as Record<string, Photo[]>
const base = import.meta.env.BASE_URL
const img = (rel: string) => `${base}photos/${rel}`
const thumb = (rel: string) => `${base}thumbs/${rel}`

const years = Object.keys(photos).sort((a, b) => Number(b) - Number(a))

function cover() {
  return `
<section class="page" id="p1" aria-label="Обложка">
  <div class="page-inner grid gap-6 md:grid-cols-[1.1fr_.9fr] items-stretch">
    <div class="panel halftone-yellow p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
      <div class="flex flex-wrap gap-3 items-center font-mono text-sm md:text-base">
        <span class="sticker bg-ink text-sw">Эпизод ${config.episode}</span>
        <span class="sticker bg-white">Выпуск №${config.age}</span>
        <span class="sticker bg-red text-white rotate-3">Спецвыпуск</span>
      </div>
      <h1 class="display outline-text text-[22vw] md:text-[9rem] lg:text-[11rem] my-6 md:my-8 leading-[.85]">Жаку<br>${config.age}</h1>
      <p class="bubble text-lg md:text-2xl font-medium max-w-md">
        Ежегодный сбор в кальянной. Ничего лишнего: свои люди, разговоры, дым и смех.
      </p>
      <div class="flex justify-between items-end mt-8 font-mono text-sm">
        <span>${config.dateText}</span>
        <span>Листай вниз ↓</span>
      </div>
    </div>
    <figure class="panel p-2 relative">
      <img src="${img(config.aboutPhotos.hero)}" alt="Жак" class="w-full h-full object-cover" loading="eager" fetchpriority="high" />
      <figcaption class="caption absolute bottom-4 left-4 right-4">Главный герой. Бранч, борода и Pixel в кармане.</figcaption>
      <span class="sticker bg-yellow absolute -top-4 -right-3 rotate-6 text-lg md:text-2xl">Бум!</span>
    </figure>
  </div>
</section>`
}

function about() {
  const p = config.aboutPhotos
  return `
<section class="page" id="p2" aria-label="Кто такой Жак">
  <div class="page-inner">
    <h2 class="display text-white text-4xl md:text-6xl mb-6 drop-shadow-[4px_4px_0_#12091f]">Кто такой Жак</h2>
    <div class="grid gap-5 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">

      <div class="panel p-5 md:col-span-3 flex flex-col gap-3">
        <p class="caption self-start">14.10.2000. Где-то запускается новый процесс.</p>
        <p class="text-lg leading-snug">Родился, посмотрел на мир и решил, что его надо переписать. Желательно на TypeScript.</p>
        <p class="bubble mt-auto text-base"><span class="font-mono">git init life</span></p>
      </div>

      <figure class="panel p-2 md:col-span-3 md:row-span-2 min-h-64 relative">
        <img src="${img(p.friends)}" alt="Жак с друзьями" class="w-full h-full object-cover" loading="lazy" />
        <figcaption class="caption absolute bottom-4 left-4 right-4">Команда. Без неё ни один релиз не выходит. Даже из сауны.</figcaption>
      </figure>

      <div class="panel halftone-green p-5 md:col-span-3 flex flex-col gap-3">
        <p class="caption self-start">Днём</p>
        <p class="text-lg leading-snug">Веб-разработчик. Пишет фронтенд, бэкенд и смарт-контракты. Верит в блокчейн, но деньги хранит в кошельке.</p>
        <p class="font-mono text-sm bg-ink text-green px-3 py-2 self-start">$ bun run build && deploy --prod</p>
      </div>

      <div class="panel halftone-red p-5 md:col-span-2 text-white flex flex-col gap-3">
        <p class="caption self-start">Вечером</p>
        <p class="text-lg leading-snug">DIY. Если что-то можно собрать самому за неделю вместо покупки за час, он соберёт сам.</p>
      </div>

      <div class="panel p-5 md:col-span-2 flex flex-col gap-3">
        <p class="caption self-start">В кармане</p>
        <p class="text-lg leading-snug">Google Pixel. Спросишь про <span class="strike">iPhone</span> — получишь лекцию на сорок минут. Не спрашивай.</p>
      </div>

      <figure class="panel p-2 md:col-span-2 relative">
        <img src="${img(p.groot)}" alt="Печенька с Грутом" class="w-full h-48 md:h-full object-cover" loading="lazy" />
        <figcaption class="caption absolute bottom-4 left-4 right-4">Marvel и Star Wars. Обе стороны Силы.</figcaption>
      </figure>

      <div class="panel halftone-red p-5 md:col-span-3 text-white flex flex-col gap-3">
        <p class="caption self-start">По воскресеньям</p>
        <p class="text-lg leading-snug">Формула-1. Болеет за Хэмилтона и Ferrari, желательно одновременно. Слово <span class="strike">Mercedes</span> в его присутствии лучше не произносить.</p>
        <p class="font-mono text-sm bg-ink text-sw px-3 py-2 self-start">Lights out and away we go</p>
      </div>

      <div class="panel p-5 md:col-span-3 flex flex-col gap-4">
        <p class="text-lg leading-snug">Ночью общается с нейросетями. Утверждает, что они его понимают лучше, чем HR.</p>
        <p class="bubble text-base mt-auto">«Я не сгенерирован. Меня так собрали. Вручную.»</p>
      </div>
    </div>
  </div>
</section>`
}

function history() {
  const tabs = years.map((y, i) =>
    `<button class="tab" role="tab" aria-selected="${i === 0}" data-year="${y}" id="tab-${y}" aria-controls="grid-${y}">${config.years[y]?.title ?? y}</button>`).join('')
  const grids = years.map((y, i) => `
    <div role="tabpanel" id="grid-${y}" aria-labelledby="tab-${y}" ${i ? 'hidden' : ''}>
      <p class="caption inline-block mb-5">${config.years[y]?.caption ?? ''}</p>
      <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        ${photos[y].map((p, idx) => `
        <button class="thumb" data-year="${y}" data-index="${idx}" aria-label="Открыть фото ${idx + 1}">
          <img src="${thumb(`${y}/${p.file}`)}" alt="" loading="lazy" width="${p.w}" height="${p.h}" />
        </button>`).join('')}
      </div>
    </div>`).join('')
  return `
<section class="page" id="p3" aria-label="Как это было">
  <div class="page-inner">
    <div class="flex flex-wrap items-end justify-between gap-4 mb-6">
      <h2 class="display text-white text-4xl md:text-6xl drop-shadow-[4px_4px_0_#12091f]">Предыдущие эпизоды</h2>
      <div role="tablist" class="flex gap-3">${tabs}</div>
    </div>
    <div class="panel p-4 md:p-8">${grids}</div>
  </div>
</section>`
}

function invite() {
  const map = config.mapUrl ? `<a class="btn bg-white inline-block" href="${config.mapUrl}" target="_blank" rel="noopener">Открыть карту</a>` : ''
  return `
<section class="page" id="p4" aria-label="Приглашение">
  <div class="page-inner grid gap-6 md:grid-cols-2">
    <div class="panel halftone-yellow p-6 md:p-10 flex flex-col gap-6">
      <span class="sticker bg-ink text-sw self-start rotate-[-2deg]">Новый эпизод</span>
      <h2 class="display text-5xl md:text-7xl leading-[.9]">Приходи</h2>
      <dl class="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 text-lg md:text-xl font-medium">
        <dt class="font-mono text-sm self-center">Когда</dt><dd>${config.dateText}, ${config.timeText}</dd>
        <dt class="font-mono text-sm self-center">Где</dt><dd>${config.venue}, ${config.address}</dd>
        <dt class="font-mono text-sm self-center">Что</dt><dd>Как всегда: сидим, говорим, курим кальян</dd>
      </dl>
      ${map}
      <p class="bubble text-base mt-auto">Голосование, кто во сколько придёт, — в нашем чате в Telegram. Там же всё остальное.</p>
    </div>
    <div class="flex flex-col gap-6">
      <div class="panel p-6 md:p-8 flex flex-col gap-4">
        <h3 class="display text-3xl">Вишлист</h3>
        <p class="text-lg">Подарки не обязательны. Но если очень хочется, список лежит в канале. Спойлер: там нет iPhone.</p>
        <a class="btn bg-blue text-white self-start" href="${config.wishlistUrl}" target="_blank" rel="noopener">Открыть вишлист</a>
      </div>
      <div class="panel halftone-red p-6 md:p-8 text-white flex-1 flex flex-col justify-end gap-2">
        <p class="display text-3xl md:text-4xl">Продолжение следует…</p>
        <p class="font-mono text-sm">Эпизод ${config.episode} · ${config.dateText}</p>
      </div>
    </div>
  </div>
  <footer class="page-inner pt-0 text-white/80 font-mono text-sm flex justify-between">
    <span>Жак, ${config.age}</span>
    <a href="https://bczak.github.io/" class="underline">bczak.github.io</a>
  </footer>
</section>`
}

function pageNav() {
  const items = ['Обложка', 'Кто такой Жак', 'Как это было', 'Приходи']
  return `<nav class="pagenav" aria-label="Страницы">${items.map((t, i) =>
    `<a href="#p${i + 1}" title="${t}" aria-label="Страница ${i + 1}: ${t}">${i + 1}</a>`).join('')}</nav>`
}

function lightbox() {
  return `
<dialog class="lightbox" id="lightbox" aria-label="Фото">
  <div class="fixed inset-0 flex items-center justify-center p-4" data-close>
    <img id="lb-img" alt="" class="max-h-[90vh] max-w-[92vw] border-4 border-ink bg-white p-1 shadow-[8px_8px_0_#12091f]" />
    <button class="btn bg-white absolute left-3 top-1/2 -translate-y-1/2" data-prev aria-label="Предыдущее">‹</button>
    <button class="btn bg-white absolute right-3 top-1/2 -translate-y-1/2" data-next aria-label="Следующее">›</button>
    <button class="btn bg-yellow absolute right-3 top-3" data-close aria-label="Закрыть">✕</button>
    <span id="lb-count" class="sticker bg-white absolute left-3 top-3 font-mono text-sm"></span>
  </div>
</dialog>`
}

const app = document.getElementById('app')!
app.innerHTML = cover() + about() + history() + invite() + pageNav() + lightbox()

// Tabs
app.querySelectorAll<HTMLButtonElement>('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    app.querySelectorAll<HTMLButtonElement>('.tab').forEach((t) => t.setAttribute('aria-selected', String(t === tab)))
    app.querySelectorAll<HTMLElement>('[role=tabpanel]').forEach((p) => (p.hidden = p.id !== `grid-${tab.dataset.year}`))
  })
})

// Lightbox
const dlg = document.getElementById('lightbox') as HTMLDialogElement
const lbImg = document.getElementById('lb-img') as HTMLImageElement
const lbCount = document.getElementById('lb-count')!
let cur = { year: years[0], index: 0 }

function show(year: string, index: number) {
  const list = photos[year]
  index = (index + list.length) % list.length
  cur = { year, index }
  lbImg.src = img(`${year}/${list[index].file}`)
  lbCount.textContent = `${index + 1} / ${list.length}`
  if (!dlg.open) dlg.showModal()
}
app.querySelectorAll<HTMLButtonElement>('.thumb').forEach((b) =>
  b.addEventListener('click', () => show(b.dataset.year!, Number(b.dataset.index))))
dlg.querySelector('[data-prev]')!.addEventListener('click', (e) => { e.stopPropagation(); show(cur.year, cur.index - 1) })
dlg.querySelector('[data-next]')!.addEventListener('click', (e) => { e.stopPropagation(); show(cur.year, cur.index + 1) })
dlg.querySelectorAll('[data-close]').forEach((el) =>
  el.addEventListener('click', (e) => { if (e.target === el) dlg.close() }))
dlg.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') show(cur.year, cur.index - 1)
  if (e.key === 'ArrowRight') show(cur.year, cur.index + 1)
})

// Page indicator: highlight the page whose top is closest to the viewport centre
const links = [...document.querySelectorAll<HTMLAnchorElement>('.pagenav a')]
const pages = [...document.querySelectorAll<HTMLElement>('.page')]
function updateNav() {
  const mid = window.scrollY + window.innerHeight / 2
  let active = pages[0]
  for (const p of pages) if (p.offsetTop <= mid) active = p
  links.forEach((l) => l.setAttribute('aria-current', l.getAttribute('href') === `#${active.id}` ? 'page' : 'false'))
}
window.addEventListener('scroll', updateNav, { passive: true })
updateNav()
