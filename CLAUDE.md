# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Artist Portfolio Web Application - A Next.js-based portfolio platform for showcasing artwork, exhibitions, and artist information with Supabase backend integration.

**Tech Stack:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS with custom dark mode theme
- Framer Motion for animations
- Supabase (PostgreSQL + Storage + Auth)
- React 19

## Development Commands

### Running the Application
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
```

### Environment Setup
Create `.env.local` from `.env.example`:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Setup
Execute `supabase/schema.sql` in Supabase SQL Editor to create:
- `works` - Art pieces with media types (image/video/installation)
- `exhibitions` - Exhibition history with roles and locations
- `profile` - Artist biography and CV (typically single row)
- `media_archive` - Press releases, interviews, documentation

## Architecture

### Layout Structure
The application uses a **fixed dual-navigation layout**:
- **Sidebar** (left, 80px width): Fixed vertical sidebar with logo and social links
- **Navbar** (top): Fixed horizontal navigation with theme toggle
- **Main Content**: Offset by `pl-20` (sidebar) and `pt-20` (navbar)

All pages inherit this layout from `src/app/layout.tsx`. The layout is wrapped in `ThemeProvider` for dark/light mode switching.

### Routing (Next.js App Router)
```
src/app/
├── layout.tsx              # Root layout (Sidebar + Navbar + ThemeProvider)
├── template.tsx            # Page transition animations
├── page.tsx                # Home page
├── works/
│   ├── page.tsx           # Works gallery with filtering
│   └── [id]/page.tsx      # Individual work detail (dynamic route)
├── exhibitions/page.tsx    # Exhibition timeline
├── about/page.tsx          # Artist profile and bio
└── contact/page.tsx        # Contact form and social links
```

### Component Organization
```
src/components/
├── layout/
│   ├── Navbar.tsx         # Top navigation with mobile menu
│   ├── Sidebar.tsx        # Fixed left sidebar (80px)
│   └── Footer.tsx         # Page footer
├── providers/
│   └── ThemeProvider.tsx  # Dark mode context wrapper
└── ui/
    └── WorkCard.tsx       # Reusable card for artwork display
```

### Data Layer
- **Supabase Client**: `src/lib/supabase.ts` - Singleton client instance
- **Type Definitions**: TypeScript interfaces should match `supabase/schema.sql`
- **RLS Enabled**: Public read access, authenticated write access on all tables

### Styling System
- **Dark Mode**: Uses `next-themes` with `class` strategy
- **Custom Colors**:
  - `dark.DEFAULT` (#1a1a1a) - Dark background
  - `primary.DEFAULT` (#ffffff) - Light text
  - `accent.DEFAULT` (#FBBF24) - Yellow/gold accent
- **Path Alias**: `@/*` maps to `./src/*`

### Image Handling
- Use Next.js `<Image>` component for optimization
- Remote patterns configured for `placehold.co` in `next.config.js`
- Supabase Storage bucket: `portfolio` (public access)
- Add new image domains to `remotePatterns` in next.config.js

## Key Patterns

### Supabase Data Fetching
```typescript
import { supabase } from '@/lib/supabase';

// Example: Fetch works
const { data, error } = await supabase
  .from('works')
  .select('*')
  .order('created_at', { ascending: false });
```

### Theme-Aware Components
```typescript
'use client';
import { useTheme } from 'next-themes';

const { theme, setTheme } = useTheme();
// Use with next-themes mounted check pattern (see Navbar.tsx)
```

### Animation Patterns
Use Framer Motion for page transitions and interactions:
- Page transitions: `src/app/template.tsx`
- Mobile menu: `src/components/layout/Navbar.tsx`

## Database Schema Notes

- **UUIDs**: All tables use `uuid` primary keys with `gen_random_uuid()`
- **Arrays**: Tags, images, video URLs stored as PostgreSQL arrays
- **JSONB**: Social links in profile table for flexible structure
- **Timestamps**: All tables have `created_at` with timezone

## Common Tasks

### Adding a New Page
1. Create route folder in `src/app/`
2. Add `page.tsx` with default export function
3. Update `navLinks` in `Navbar.tsx` if needed
4. Page automatically inherits Sidebar + Navbar layout

### Adding Supabase Table
1. Update `supabase/schema.sql` with new table definition
2. Run SQL in Supabase SQL Editor
3. Add RLS policies for public read/authenticated write
4. Create TypeScript interface matching schema

### Configuring Remote Images
Add to `next.config.js` `remotePatterns`:
```javascript
{
  protocol: 'https',
  hostname: 'your-domain.com',
  pathname: '/**',
}
```

## Project Context

This is a portfolio platform designed for artists to showcase:
- Photography, video, and installation artwork
- Exhibition history and collaborations
- Artist statement and CV
- Media archive (press, interviews, documentation)

The design philosophy emphasizes minimalism to let artwork stand out, with responsive mobile-first design and smooth animations.
