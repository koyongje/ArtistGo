# Artist Portfolio

This is a Next.js-based portfolio for a contemporary artist, designed to showcase their work, exhibitions, and profile. It is built with a modern tech stack and is fully integrated with a Supabase backend for dynamic content management.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Supabase](https://supabase.com/) - PostgreSQL database and backend
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/koyongje/ArtistGo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up your environment variables. Create a `.env.local` file in the root of your project and add the following:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   You can get these from your Supabase project settings.

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
