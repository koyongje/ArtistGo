# Task Developing: Artist Portfolio App

This document serves as a developer guide and checklist for the active coding phase.

## 1. Development Guidelines

### Code Style
- **Functional Components**: Use React functional components with Hooks.
- **Types**: Strictly use TypeScript interfaces for all data props.
- **Styling**: Use Utility-first Tailwind classes. Avoid custom CSS files where possible.
- **File Naming**: PascalCase for components (`WorkCard.tsx`), kebab-case for utilities (`date-formatter.ts`).

### Git Workflow
- **Branching**: Create feature branches (e.g., `feature/works-gallery`) from `main`.
- **Commits**: Use semantic commit messages (e.g., `feat: add works grid`, `fix: mobile menu alignment`).

## 2. Active Development Checklist

### Current Focus: Initialization
- [ ] **Step 1**: Verify Node.js version (Should be LTS).
- [ ] **Step 2**: Execute project creation command.
  ```bash
  npx create-next-app@latest artist-portfolio --typescript --tailwind --eslint
  ```
- [ ] **Step 3**: Verify project runs locally.
  ```bash
  npm run dev
  ```

### Next Focus: Database Connection
- [ ] **Step 4**: Get Supabase API URL and Anon Key.
- [ ] **Step 5**: Add keys to `.env.local`.
- [ ] **Step 6**: Test connection by fetching a simple row in `page.tsx`.

### Next Focus: UI Construction
- [ ] **Step 7**: Build the global `Navigation`.
- [ ] **Step 8**: Build the `Hero` section.
- [ ] **Step 9**: Build the `WorkCard` component.
- [ ] **Step 10**: Assemble the `Works` grid.

## 3. Troubleshooting Notes
- *Supabase types*: Use `supabase gen types` to auto-generate TS types from DB schema.
- *Images*: Ensure `next.config.js` allows the Supabase Storage domain for `Next/Image`.
