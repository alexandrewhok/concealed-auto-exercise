# DECISIONS.md

## Project Setup
- Chose Vite + React + TypeScript for speed and simplicity.
- Added styled-components with a modern reset and global styles, both for personal preference and for better control over design consistency. This keeps styling colocated, predictable and isolated from global CSS leaks
- Structured pages using a folder-per-page pattern with index.tsx entry points.
- Using react-router-dom with a root layout (App) and nested routes.