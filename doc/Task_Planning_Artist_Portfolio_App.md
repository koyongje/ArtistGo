# Task Planning: Artist Portfolio App

This document breaks down the implementation plan into actionable tasks.

## Milestone 1: Setup & Configuration
- [x] **Task 1.1**: Run `npx create-next-app` with TS, Tailwind, ESLint.
- [x] **Task 1.2**: Clean up default boilerplate code.
- [x] **Task 1.3**: Install `framer-motion`, `lucide-react` (icons), `@supabase/supabase-js`.
- [x] **Task 1.4**: Setup `lib/supabase.ts` client.

## Milestone 2: Database & Backend (Supabase)
- [x] **Task 2.1**: Create `works` table (id, title, category, year, image_url, etc.).
- [x] **Task 2.2**: Create `exhibitions` table (id, title, date, location, role).
- [x] **Task 2.3**: Create `profile` table (bio, avatar_url, contact_info).
- [ ] **Task 2.4**: Upload placeholder images to Supabase Storage.

## Milestone 3: Frontend - Layout & Components
- [x] **Task 3.1**: Create `Navbar` component with mobile menu toggle.
- [x] **Task 3.2**: Create `Footer` component with social links.
- [x] **Task 3.3**: Create generic `Layout` wrapper.
- [x] **Task 3.4**: Create `WorkCard` component (Thumbnail + Hover effect).

## Milestone 4: Frontend - Pages
- [x] **Task 4.1**: Implement `HomePage` (Hero section + Featured Works fetch).
- [x] **Task 4.2**: Implement `WorksPage` (Grid layout + Filter buttons).
- [x] **Task 4.3**: Implement `WorkDetailPage` (Dynamic route `[id]` + Full info).
- [x] **Task 4.4**: Implement `AboutPage` (Text layout + Image).
- [x] **Task 4.5**: Implement `ExhibitionsPage` (Timeline/List view).
- [x] **Task 4.6**: Implement `ContactPage` (Form UI).

## Milestone 5: Integration & Refinement
- [ ] **Task 5.1**: Wire up Contact Form to email service or database.
- [x] **Task 5.2**: Add page transition animations.
- [x] **Task 5.3**: Verify "Dark/Light Mode" (if required by PRD).
- [x] **Task 5.4**: Final QA and Bug Fixes.
