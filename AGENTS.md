# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` holds the Next.js App Router entrypoints (`layout.tsx`, `page.tsx`) and global styles in `globals.css`.
- `public/` contains static assets served at the site root (e.g., `public/next.svg`).
- Root config files include `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `postcss.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev`: start the Next.js dev server at `http://localhost:3000`.
- `npm run build`: create a production build in `.next/`.
- `npm run start`: run the production server from the build output.
- `npm run lint`: run ESLint with the Next.js and TypeScript presets.

## Coding Style & Naming Conventions
- Language: TypeScript + React (Next.js App Router).
- Indentation: follow existing files; TypeScript/JS uses 2 spaces by default in this repo.
- File naming: Next.js conventions in `src/app/` (e.g., `page.tsx`, `layout.tsx`).
- Styles: global styles in `src/app/globals.css`; Tailwind v4 is configured via PostCSS.
- Linting: ESLint is configured in `eslint.config.mjs`; run `npm run lint` before PRs.

## Testing Guidelines
- No testing framework is configured yet (no `test` script or test folders).
- If you add tests, keep them colocated (e.g., `src/app/__tests__/page.test.tsx`) or add a top-level `tests/` directory and document the choice here.

## Commit & Pull Request Guidelines
- Commit history is minimal (single “Initial commit”), so no strict convention is established.
- Use short, imperative commit subjects (e.g., “Add hero layout”).
- PRs should include: a clear description, linked issues when applicable, and screenshots for UI changes.

## Configuration & Tips
- Environment variables should go in `.env.local` (do not commit secrets).
- Asset paths: reference files from `public/` via `/file.svg`.
- Content for customer-facing pages should be in Spanish for a Mexico-based audience.
