# Concealed Auto — Car Import Recommendation Tool

A Portuguese-language web application exercise that recommends used imported cars from Germany based on the user's real usage needs. Instead of pasting a link and requesting a quote, the user answers a short quiz about their driving habits, preferences, and budget. The platform matches them against a static dataset of 25 cars and presents the top 3 recommendations with a full cost breakdown for importing to Portugal — including ISV, IUC, transport, and legalisation fees.

## Stack

- **React 19** + **TypeScript** via **Vite**
- **styled-components v6** — all styling, colocated per component
- **Zustand** — global quiz state shared between the quiz and results pages
- **react-router-dom v7** — client-side routing with a root layout

## Running locally

```bash
pnpm install
pnpm dev
```

Other commands:

```bash
pnpm build     # production build (tsc + vite)
pnpm preview   # preview the production build locally
pnpm lint      # run ESLint
```

## Project structure

```
src/
├── components/       # Reusable UI components (Button, OptionTag, Dropdown, ResultCard, ...)
├── pages/            # Quiz, Results, Home — each with index.tsx, styles.ts, models.ts
├── store/            # Zustand quiz store
├── utils/            # matching.ts (scoring engine) and costs.ts (fiscal calculator)
├── data/             # cars.json — static dataset of 25 vehicles
└── styles/           # Global styles, CSS reset, theme, styled-components type augmentation
```

## How it works

1. The user answers 8 questions covering budget, mileage limit, fuel type, gearbox preference, number of passengers, luggage habits, and driving priority.
2. Hard filters (budget, mileage, fuel, gearbox) eliminate cars that cannot satisfy a strict requirement.
3. The remaining cars are scored by tag matching — each answer maps to a set of desired tags and a set of contradiction tags. Score = matched tags − contradicted tags.
4. The top 3 cars are shown with a natural language justification, full tag breakdown, and an itemised cost estimate (ISV + transport + legalisation + annual IUC).

See [DECISIONS.md](./DECISIONS.md) for the full reasoning behind architectural choices, question design, the matching engine, and the fiscal calculator.

## Live

Deployed on Netlify — every push to `main` triggers a production build automatically.
