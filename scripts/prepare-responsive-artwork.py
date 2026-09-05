#!/usr/bin/env python3
"""Create budgeted, content-addressed delivery copies. Requires Pillow with WebP.

Existing review artwork is the input; source files are never overwritten or cropped.
Run from any directory. Generated files and manifest are committed, so CI needs no Pillow.
"""
from concurrent.futures import ThreadPoolExecutor
from hashlib import sha256
from io import BytesIO
import json
from pathlib import Path
from PIL import Image, features

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
OUTPUT = PUBLIC / 'media' / 'responsive'
MANIFEST = ROOT / 'src' / 'data' / 'responsive-artwork.json'


def generate():
    if not features.check('webp'):
        raise SystemExit('Pillow must include WebP support')
    OUTPUT.mkdir(parents=True, exist_ok=True)
    families = [
        ('scene', sorted((PUBLIC / 'media/storybook/scenes').glob('*.webp')), [768, 1280, 1672], 148_000),
        ('postcard', sorted((PUBLIC / 'media/storybook/postcards').glob('*.webp')), [128, 256, 480, 768], 70_000),
        ('ghostie', sorted((PUBLIC / 'media/ghosties/community').glob('*.webp')), [64, 128, 256, 512, 768], 90_000),
        ('motif', [PUBLIC / 'media/motifs/lavender-sprig.webp'], [128, 256], 30_000),
    ]
    jobs = [(role, source, widths, budget) for role, paths, widths, budget in families for source in paths]
    with ThreadPoolExecutor(max_workers=4) as pool:
        results = list(pool.map(prepare_source, jobs))
    manifest = dict(result for result in results if result is not None)
    MANIFEST.write_text(json.dumps(manifest, indent=2) + '\n')
    print(f'Prepared {sum(len(item["candidates"]) for item in manifest.values())} immutable delivery candidates.')


def prepare_source(job):
    role, source, widths, budget = job
    # Alternate atmospheres remain available as originals, outside active delivery.
    if source.stem.startswith('ghostie-strip-') or source.stem in ('haven-midnight', 'haven-daybreak', 'haven-doorway-gathering'):
        return None
    image = Image.open(source)
    sizes = [320, 640, 768] if source.stem == 'haven-doorway-interior' else widths
    candidates = []
    for width in sizes:
        if width > image.width:
            continue
        height = round(image.height * width / image.width)
        resized = image.resize((width, height), Image.Resampling.LANCZOS)
        for quality in range(84, 49, -2):
            output = BytesIO()
            resized.save(output, format='WEBP', quality=quality, method=6, exact=True)
            data = output.getvalue()
            if len(data) <= budget:
                break
        else:
            raise RuntimeError(f'{source.name} at {width}px exceeds {budget} bytes at quality 50')
        digest = sha256(data).hexdigest()
        filename = f'{role}-{source.stem}-{width}.{digest[:16]}.webp'
        (OUTPUT / filename).write_bytes(data)
        candidates.append({'src': f'/media/responsive/{filename}', 'width': width,
                           'height': height, 'bytes': len(data), 'sha256': digest, 'quality': quality})
    return "/" + source.relative_to(PUBLIC).as_posix(), {
        "role": role, "sourceSha256": sha256(source.read_bytes()).hexdigest(),
        "width": image.width, "height": image.height, "alpha": "A" in image.getbands(),
        "candidates": candidates,
    }


if __name__ == '__main__':
    generate()
