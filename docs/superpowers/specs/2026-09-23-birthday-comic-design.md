# Жаку 26 — комикс-приглашение

Статический сайт-«комикс» на GitHub Pages (https://bczak.github.io/) для ежегодной
встречи друзей в кальянной. Только русский язык. Без сервера, без RSVP
(голосование идёт в закрытом Telegram-чате).

## Страницы
1. Обложка — «Эпизод XXVI», заголовок «Жаку 26», главное фото, дата.
2. Кто такой Жак — панели-комикс: программист, веб/блокчейн, DIY, Pixel vs iPhone,
   Marvel + Star Wars, нейросети. Фото задаются в `src/config.ts`.
3. Предыдущие эпизоды — фото по годам (вкладки), лайтбокс. Данные: `src/photos.json`,
   файлы `public/photos/<год>/`, превью `public/thumbs/<год>/`.
4. Приходи — дата, место, вишлист (ссылка на Telegram-канал), футер.

## Стиль
Marvel-комикс: растровые точки, толстые чёрные обводки, жёлтые caption-боксы,
речевые пузыри, наклонённые фото. Шрифты: Russo One (заголовки), Rubik (текст),
JetBrains Mono (моно). Палитра: ink #12091f, paper #fff7e0, red #e6262f,
blue #1f6cf0, yellow #ffd60a, green #29c46d, Star Wars yellow #ffe81f.

## Стек и деплой
Vite 8 + Tailwind 4, vanilla TypeScript, `base: '/bd/'`. GitHub Actions →
Pages (`.github/workflows/deploy.yml`). SEO: title/description/canonical,
Open Graph + Twitter card, `public/og.png` 1200×630.

## Добавить новый год
`python3 scripts/add_year.py 2026 ~/Pictures/bd-2026`, затем добавить подпись
в `config.years`.
