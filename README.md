# Жаку 26 — комикс-приглашение

Статический сайт на GitHub Pages: https://bczak.github.io/bd/

- `npm run dev` — локально
- `npm run build` — сборка в `dist/`
- Тексты, дата, место, ссылки: `src/config.ts`
- Добавить фото за год: `python3 scripts/add_year.py 2026 ~/Pictures/bd-2026` (нужен `pip install pillow`), потом подпись в `config.years`
- Пуш в `main` деплоит автоматически (`.github/workflows/deploy.yml`)
