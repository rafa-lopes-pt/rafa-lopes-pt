# Portfolio Project Conventions

## Tech Stack
- Astro 5.x (static output, zero JS by default)
- Tailwind CSS 4.x (One Dark color tokens via @theme)
- TypeScript strict mode
- No React or JS frameworks -- pure Astro components

## Design System
- **Theme**: One Dark color palette defined in `src/styles/global.css` @theme block
- **Fonts**: JetBrains Mono (headings, code) + Inter (body)
- **Pattern**: Section headers use `// Title` code-comment style
- **Cards**: Editor-window style with red/yellow/green title bar dots

## File Organization
- `src/data/` -- TypeScript data files with typed interfaces
- `src/components/` -- Astro components (one per section)
- `src/layouts/` -- BaseLayout with HTML shell
- `src/styles/global.css` -- Tailwind directives, CSS vars, animations

## Rules
- All animations must be CSS-only (keyframes/transitions)
- No JavaScript except minimal IntersectionObserver for scroll-reveal
- Mobile-first responsive design
- Semantic HTML with proper heading hierarchy
