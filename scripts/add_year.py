#!/usr/bin/env python3
"""Добавить фотографии за год.

  python3 scripts/add_year.py 2026 ~/Pictures/bd-2026

Кладёт сжатые фото в public/photos/<год>/ и превью в public/thumbs/<год>/,
дописывает список в src/photos.json. Нужен Pillow: pip install pillow
"""
import json, os, sys
from PIL import Image, ImageOps

year, src = sys.argv[1], sys.argv[2]
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
big_dir = os.path.join(root, 'public/photos', year)
th_dir = os.path.join(root, 'public/thumbs', year)
os.makedirs(big_dir, exist_ok=True); os.makedirs(th_dir, exist_ok=True)
meta = []
files = sorted(f for f in os.listdir(src) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.heic', '.webp')))
for i, f in enumerate(files, 1):
    im = ImageOps.exif_transpose(Image.open(os.path.join(src, f))).convert('RGB')
    name = f'{i:03d}.jpg'
    big = im.copy(); big.thumbnail((1400, 1400)); big.save(os.path.join(big_dir, name), quality=80, optimize=True, progressive=True)
    th = im.copy(); th.thumbnail((520, 520)); th.save(os.path.join(th_dir, name), quality=75, optimize=True)
    meta.append({'file': name, 'w': big.size[0], 'h': big.size[1]})
p = os.path.join(root, 'src/photos.json')
data = json.load(open(p)); data[year] = meta
json.dump(data, open(p, 'w'), ensure_ascii=False, indent=0)
print(f'{len(meta)} photos -> {year}')
