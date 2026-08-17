# Portfolio 2024

Personal portfolio site built with Next.js, featuring a public-facing site (about, work experience, projects, tools, contact) and a Supabase-backed admin dashboard for managing projects and services.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack), React 18, TypeScript
- **Styling**: Tailwind CSS, daisyUI, tailwindcss-animate, next-themes (dark mode)
- **UI**: Radix UI primitives (shadcn-style components), lucide-react, embla-carousel-react, cobe, motion, react-vertical-timeline-component
- **Backend/Data**: Supabase (`@supabase/supabase-js`, `@supabase/ssr`), custom JWT auth (jsonwebtoken, bcrypt)
- **Forms/Validation**: react-hook-form, zod, @hookform/resolvers

## Project Structure

```
src/
  app/
    page.tsx           # public site entry
    admin/              # protected admin dashboard (projects, services)
    auth/login/          # admin login
    api/                 # route handlers (auth, projects, hello)
    contexts/, lib/, utils/supabase/, styling/
  components/
    home/                # About, Contact, Tools, WorkExperience, ProjectsWrapper, SubHeaderWrapper
    layout/, dashboard/, modals/, common/, ui/
  hooks/, services/, types/
supabase/                # Supabase project config/migrations
```

## Deployment

Deployed on [Vercel](https://vercel.com/).
