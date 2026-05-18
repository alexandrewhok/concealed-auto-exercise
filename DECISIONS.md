# DECISIONS.md

## Project Setup
- Chose Vite + React + TypeScript for speed and simplicity.
- Added styled-components with a reset from Eric Meyer Reset and global styles, both for personal preference and for better control over design consistency. This keeps styling colocated, predictable and isolated from global CSS leaks.
- Structured pages using a folder-per-page pattern with index.tsx entry points, which is my usual approach for scalable React projects. It keeps imports clean, allows each page to grow independently and avoids naming collisions.
- Always using arrow functions and destructure of the props (if used) for better code reading and understanding.
- Using react-router-dom with a root layout (App) and nested routes.
- Chose Zustand for global state management over React Context or Redux. The quiz answers need to survive navigation from the quiz page to the results page — a single shared store with a flat answers object is the simplest solution. Zustand has no boilerplate, no providers to wrap, and its bundle footprint is minimal, which fits the scope of this project.

## Question Improvements

### Mileage: weekly → yearly distance
The original question asked about weekly distance (up to 200 km / 200–500 km / 500+ km). This was changed to yearly distance (up to 10 000 km / 10 000–20 000 km / 20 000+ km) because Portuguese buyers naturally think in annual terms — it matches how mileage is displayed in car listings and how insurance premiums are quoted. The ranges map to the same three usage profiles: urban, mixed, and long-distance.

### Number of passengers: two → three options
The original question had only two options (1–2 / 3 or more). A middle option (3–4 pessoas) was added to allow more granular matching. With only two options, all families and groups were treated identically regardless of whether they needed a mid-size or a large car. The three options now map directly to the `compact`/`solo-couple`, `mid-size`, and `family`/`large` tag groups.

### Luggage question now contributes to matching
Originally, "rarely" and "sometimes" answers to the luggage question produced no tags, making the question useless for scoring. Each option now maps to tags that reinforce the size signal: rarely → `solo-couple`, `compact`; sometimes → `mid-size`, `large`; often → `cargo`, `large`. Tags can repeat across answers — the scoring engine counts each occurrence, so repeated signals (e.g., both passengers and luggage pointing to `compact`) push the right cars higher and act as a natural tiebreaker.

### Added fuel type question
A seventh question was added — "Que tipo de combustível preferes?" with options Gasolina / Diesel / Indiferente. Fuel type is a hard filter, not a scoring signal (see Matching Engine section below). "Indiferente" skips the filter entirely, leaving all fuel types in the pool.

### Added maximum mileage question
An eighth question was added — "Número máximo de quilómetros" — as a hard filter on `mileage_km`. Like budget, it is optional: if the user does not select a value, no filter is applied. The option "100 000+ km" stores the sentinel value 999999, which effectively disables the filter since no car in the dataset exceeds it. This question was implemented as a dropdown for the same reasons as budget (see question ordering section below).

### Question ordering: technical filters first, usage profile second
The final question order diverges from the original brief. Budget, mileage, fuel, and gearbox come first; passengers, luggage, and priority come last. The reasoning: the first four are hard decision-breakers — a user who cannot go above €16 000 or only wants diesel has already eliminated most of the dataset before any preference scoring. Starting with these filters sets honest expectations early and avoids the user investing time in preference questions only to see the pool collapse at the end.

The two technical filters with discrete, familiar ranges (budget and mileage) use dropdowns instead of pill selectors. Both mirror the interaction pattern users already know from car listing sites (AutoScout24, Mobile.de, OLX), where price and km ranges are always dropdowns. This lowers cognitive friction and leverages muscle memory — the user does not need to learn a new UI pattern for the most familiar filters.

## Matching Engine

The matching runs in two stages after the user submits the quiz.

### Stage 1 — Hard filters
Hard filters eliminate cars that cannot satisfy a hard requirement. A car that fails a filter never appears in results, regardless of how well it scores on other dimensions.

Four hard filters are applied in order:
1. **Budget** — removes cars where `price_eur > budget` (skipped if not selected)
2. **Mileage** — removes cars where `mileage_km > maxMileage` (skipped if not selected)
3. **Gearbox** — if the user picked Manual or Automática, only cars with the corresponding tag survive; Indiferente skips this filter
4. **Fuel** — if the user picked Gasolina or Diesel, only cars with the matching `fuel` field survive; Indiferente skips this filter

Filters stack: picking Diesel + Manual + budget of €20 000 leaves only diesel manual cars under €20 000 in the pool before scoring begins.

### Stage 2 — Tag scoring with contradiction penalty
Each answer (except budget, gearbox, and fuel, which are handled by filters) maps to two tag lists: desired tags and contradiction tags.

**Desired tags** — tags that a good match should have. Tags can repeat across answers: if both the passengers question and the luggage question map to `compact`, a compact car scores +2 from those two answers combined. This means stronger agreement across questions amplifies the signal naturally.

| Answer | Desired tags |
|---|---|
| people 1–2 | `compact`, `solo-couple` |
| people 3–4 | `mid-size` |
| people 4+ | `family`, `large` |
| distance 0–10 000 km | `urban` |
| distance 10 000–20 000 km | `mixed` |
| distance 20 000+ km | `long-distance` |
| luggage rarely | `solo-couple`, `compact` |
| luggage sometimes | `mid-size`, `large` |
| luggage often | `cargo`, `large` |
| priority economy | `economy` |
| priority comfort | `comfort`, `premium` |
| priority balanced | `mixed` |

**Contradiction tags** — tags that signal a clear mismatch. Each contradiction tag found on a car subtracts 1 from its score, pushing clearly wrong cars below cars that are merely neutral.

| Answer | Contradiction tags |
|---|---|
| people 1–2 | `family`, `large` |
| people 3–4 | `solo-couple` |
| people 4+ | `compact`, `solo-couple` |
| distance 0–10 000 km | `long-distance` |
| distance 20 000+ km | `urban` |
| luggage rarely | `cargo` |
| priority economy | `premium` |
| priority comfort | `economy` |

**Final score** = number of desired tag matches − number of contradiction tag matches

Cars are sorted by score descending. The top 3 are returned as recommendations.

## Deployment Workflow
- Configured automatic deployments using Netlify connected to the GitHub repository.
- Every push to the main branch triggers a build (`pnpm build`) and deploy to production.
- Pull Requests generate preview deployments, allowing quick validation of UI changes.
- This setup ensures fast feedback loops and mirrors a real-world CI/CD workflow.
- Added a Netlify `_redirects` file to support client-side routing. Without this, direct navigation to routes like `/results` would fail on Netlify.

