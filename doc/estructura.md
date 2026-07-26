# SLP Web - Estructura del Proyecto

## Stack obligatorio

-   Next.js 15
-   React 19
-   TypeScript
-   Tailwind CSS v4
-   shadcn/ui
-   Framer Motion
-   Lucide React
-   React Hook Form
-   Zod

## Estructura

``` text
slp-web/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── favicon.ico
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── buttons/
│   ├── cards/
│   ├── forms/
│   ├── icons/
│   └── animations/
│
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Process/
│   ├── WhyChooseUs/
│   ├── FAQ/
│   ├── Blog/
│   ├── CTA/
│   ├── Contact/
│   └── Footer/
│
├── content/
│   ├── company.ts
│   ├── services.ts
│   ├── faq.ts
│   ├── blog.ts
│   └── contact.ts
│
├── hooks/
├── lib/
├── types/
├── config/
├── public/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   └── fonts/
│
├── styles/
├── docs/
├── ai/
│   ├── prompts/
│   ├── rules/
│   ├── memory/
│   ├── handoff/
│   └── checklists/
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## Reglas

-   Arquitectura por componentes.
-   Cada sección es independiente.
-   No duplicar código.
-   No crear componentes fuera de components/.
-   Todo texto debe vivir en content/.
-   Todo recurso visual en public/.
-   TypeScript estricto.
-   Componentes reutilizables antes que código específico.
