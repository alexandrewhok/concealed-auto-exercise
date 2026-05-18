# DECISIONS.md

## Project Setup
- Chose Vite + React + TypeScript for speed and simplicity.
- Added styled-components with a reset from Eric Meyer Reset and global styles, both for personal preference and for better control over design consistency. This keeps styling colocated, predictable and isolated from global CSS leaks.
- Structured pages using a folder-per-page pattern with index.tsx entry points, which is my usual approach for scalable React projects. It keeps imports clean, allows each page to grow independently and avoids naming collisions.
- Always using arrow functions and destructure of the props (if used) for better code reading and understanding.
- Using react-router-dom with a root layout (App) and nested routes.

## Deployment Workflow
- Configured automatic deployments using Netlify connected to the GitHub repository.
- Every push to the main branch triggers a build (`pnpm build`) and deploy to production.
- Pull Requests generate preview deployments, allowing quick validation of UI changes.
- This setup ensures fast feedback loops and mirrors a real-world CI/CD workflow.
- Added a Netlify `_redirects` file to support client-side routing. Without this, direct navigation to routes like `/results` would fail on Netlify.