# Project Context: Artist Portfolio Web Application

## 1. Project Overview
This project is an **Artist Portfolio Web Application** designed to showcase an artist's work, philosophy, and exhibition history. It aims to provide an interactive and immersive experience for visitors, curators, and institutions.

**Current Status:** Planning Phase (Requirements defined in PRD)

## 2. Key Documentation
*   **`Artist_Portfolio_WebApp_PRD.md`**: The Product Requirements Document detailing vision, features, tech stack, and data schema.

## 3. Planned Technology Stack
Based on the PRD, the application will be built using:

*   **Frontend:**
    *   **Framework:** Next.js
    *   **Language:** TypeScript
    *   **Styling:** Tailwind CSS
    *   **Animation:** Framer Motion
    *   **Media:** Next/Image, HTML5 Video / Vimeo API
*   **Backend / Infrastructure:**
    *   **Database:** Supabase (PostgreSQL)
    *   **Storage:** Supabase Storage
    *   **Auth:** Supabase Auth
    *   **Deployment:** Vercel (Planned)

## 4. Core Features
1.  **Works:** Gallery for images, videos, and installation art with filtering.
2.  **Exhibitions:** Timeline of exhibitions and activities.
3.  **About:** Artist profile, statement, and CV download.
4.  **Media Archive:** Press releases, interviews, and exhibition documentation.
5.  **Contact:** Inquiry form and social links.

## 5. Development Roadmap (Immediate Next Steps)
Since the project is currently just the PRD, the next steps for development are:

1.  **Initialize Project:**
    *   Set up Next.js with TypeScript and Tailwind CSS.
    *   `npx create-next-app@latest my-app --typescript --tailwind --eslint`
2.  **Supabase Setup:**
    *   Create Supabase project.
    *   Define tables based on the Data Schema in PRD (`works`, `exhibitions`, `profile`, `media_archive`).
3.  **UI Implementation:**
    *   Implement the Home, Works, and About pages.

## 6. Conventions (Planned)
*   **Style:** Minimalist design, mobile-first responsiveness.
*   **Code:** TypeScript for type safety, functional components.

## 7. Project Structure
The project is organized as follows:

-   **Root Directory (`D:\100 VibeCoding\ArtistGo`)**
    -   `package.json`, `package-lock.json`: Node.js project configuration and dependencies.
    -   `GEMINI.md`: This project context documentation.
    -   `node_modules/`: Installed Node.js modules.
    -   **`src/`**: Application source code.
        -   **`app/`**: Next.js App Router directory for routes and UI.
            -   `layout.tsx`: Root layout.
            -   `page.tsx`: Home page.
            -   `about/`, `contact/`, `exhibitions/`, `works/`: Feature-specific route groups.
            -   `works/[id]/`: Dynamic route for individual work details.
        -   **`components/`**: Reusable UI components.
            -   `features/`: Components related to specific features.
            -   `layout/`: Layout components (e.g., Header, Footer).
            -   `ui/`: Generic, small UI components (e.g., buttons, inputs).
        -   **`lib/`**: Utility functions and client-side Supabase integration.
            -   `supabase.ts`: Supabase client initialization.
            -   `utils.ts`: General utility functions.
        -   **`types/`**: TypeScript type definitions.
    -   **`doc/`**: Project documentation files.
        -   `Artist_Portfolio_WebApp_PRD.md`: Product Requirements Document.
        -   `Implementation_Plan.md`: Detailed implementation steps.
        -   `Task_Developing_Artist_Portfolio_App.md`: Specific task details for development.
        -   `Task_Planning_Artist_Portfolio_App.md`: Specific task details for planning.
