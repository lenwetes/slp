# Changelog

## [0.1.0] - 2026-07-26

### Añadido

- Inicialización del proyecto con `create-next-app@15` (Next.js 15.5.22, React 19, TypeScript, Tailwind CSS v4, App Router)
- Instalación de dependencias del stack autorizado: `framer-motion`, `lucide-react`, `react-hook-form`, `zod`
- Inicialización de `shadcn/ui 4.15.0` con configuración por defecto para Tailwind CSS v4
  - Creados: `components/ui/button.tsx`, `lib/utils.ts`
  - Actualizado: `app/globals.css` con variables de tema de shadcn
- Estructura completa de directorios según `doc/estructura.md`:
  - `components/` (ui, layout, navigation, buttons, cards, forms, icons, animations)
  - `sections/` (Hero, About, Services, Process, WhyChooseUs, FAQ, Blog, CTA, Contact, Footer)
  - `content/` (company.ts, services.ts, faq.ts, blog.ts, contact.ts — vacíos, listos para contenido)
  - `public/` (images, icons, logos, fonts)
  - `hooks/`, `lib/`, `types/`, `config/`, `styles/`, `docs/`, `ai/`
- Verificación de build de producción exitoso (`npm run build` — sin errores)
- Configuración de reglas del proyecto en `.agents/AGENTS.md`
