# Calcurion Lessons

Add lesson PDFs here so they appear on the site.

## How to add a lesson

1. Put your PDF in the matching folder under `pdfs/`:

   **Maths**
   - `pdfs/gcse/` — GCSE Maths
   - `pdfs/pure-1/` — A-Level Maths Pure 1
   - `pdfs/pure-2/` — A-Level Maths Pure 2
   - `pdfs/core-pure-1/` — Further Maths Core Pure 1
   - `pdfs/core-pure-2/` — Further Maths Core Pure 2
   - `pdfs/further-pure-1/` — Further Pure 1
   - `pdfs/further-mech-1/` — Further Mechanics 1
   - `pdfs/mechanics/` — Mechanics
   - `pdfs/statistics/` — Statistics

   **Physics**
   - `pdfs/gcse-physics/` — GCSE Physics
   - `pdfs/alevel-physics/` — A-Level Physics

2. Open `manifest.json` and add an entry.

**GCSE Maths example:**

```json
{
  "id": "gcse-fractions-decimals-percentages",
  "title": "Fractions, Decimals & Percentages",
  "module": "gcse",
  "moduleLabel": "GCSE Maths",
  "file": "pdfs/gcse/fractions-decimals-percentages-lesson.pdf",
  "description": "Conversions, percentage change, reverse percentages.",
  "pages": 6,
  "topic": "Number"
}
```

**GCSE Physics example:**

```json
{
  "id": "gcse-physics-energy",
  "title": "Energy",
  "module": "gcse-physics",
  "moduleLabel": "GCSE Physics",
  "file": "pdfs/gcse-physics/energy-lesson.pdf",
  "description": "Stores, transfers, efficiency, power and specific heat.",
  "pages": 8,
  "topic": "Forces & Energy"
}
```

**A-Level Physics example:**

```json
{
  "id": "alevel-physics-waves",
  "title": "Waves",
  "module": "alevel-physics",
  "moduleLabel": "A-Level Physics",
  "file": "pdfs/alevel-physics/waves-lesson.pdf",
  "description": "Progressive waves, superposition, stationary waves, refraction.",
  "pages": 10,
  "topic": "Waves"
}
```

To show a card before the PDF exists, set `"placeholder": true` (Open/Download are replaced by “Coming soon”).

3. Refresh the Lessons page — the new card appears automatically. Use the filter pills (GCSE Physics, A-Level Physics, etc.) to find it.

## Module values (must match filter `data-filter`)

| module value       | Filter label      | Folder                    |
|--------------------|-------------------|---------------------------|
| `gcse`             | GCSE Maths        | `pdfs/gcse/`              |
| `gcse-physics`     | GCSE Physics      | `pdfs/gcse-physics/`      |
| `pure-1`           | Pure 1            | `pdfs/pure-1/`            |
| `pure-2`           | Pure 2            | `pdfs/pure-2/`            |
| `core-pure-1`      | Core Pure 1       | `pdfs/core-pure-1/`       |
| `core-pure-2`      | Core Pure 2       | `pdfs/core-pure-2/`       |
| `further-pure-1`   | Further Pure 1    | `pdfs/further-pure-1/`    |
| `further-mech-1`   | Further Mech 1    | `pdfs/further-mech-1/`    |
| `mechanics`        | Mechanics         | `pdfs/mechanics/`         |
| `statistics`       | Statistics        | `pdfs/statistics/`        |
| `alevel-physics`   | A-Level Physics   | `pdfs/alevel-physics/`    |

## File naming

Use clear names, e.g. `energy-lesson.pdf`, `waves-lesson.pdf`. Avoid spaces; use hyphens.

## Notes

- PDFs are served from this folder (relative paths in the manifest).
- Lessons are independent of any exam board. See the site footer disclaimer.
