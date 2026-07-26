// ============================================================
// SLP Soluciones Informáticas — Contenido de Empresa
// ============================================================

import type { CompanyContent, ProcessStep, WhyChooseUsItem } from "@/types"

export const companyContent: CompanyContent = {
  name: "SLP Soluciones Informáticas",
  tagline: "Tecnología inteligente para su empresa",
  hero: {
    title: "Desarrollamos soluciones tecnológicas inteligentes para impulsar el crecimiento de su empresa.",
    subtitle: "Tecnología estratégica para su negocio",
    description:
      "En SLP Soluciones Informáticas ayudamos a empresas, negocios y emprendedores a optimizar sus procesos mediante soluciones tecnológicas innovadoras. Diseñamos software a medida, implementamos infraestructura tecnológica, desarrollamos redes empresariales, instalamos sistemas de videovigilancia y brindamos soporte técnico especializado.",
    primaryCta: "Solicitar Cotización",
    secondaryCta: "Contáctanos",
  },
  about: {
    intro:
      "En SLP Soluciones Informáticas creemos que la tecnología debe convertirse en una herramienta estratégica para el crecimiento de cualquier organización.",
    description:
      "Somos una empresa especializada en soluciones informáticas integrales, comprometida con ofrecer servicios profesionales que mejoren la productividad, la seguridad y la eficiencia operativa de nuestros clientes.",
    values: ["Responsabilidad", "Calidad", "Innovación", "Mejora continua"],
  },
  mission:
    "Brindar soluciones tecnológicas integrales mediante el desarrollo de software, implementación de infraestructura informática, automatización de procesos y soporte técnico especializado.",
  vision:
    "Consolidarnos como una empresa líder en soluciones tecnológicas, reconocida por la innovación, la calidad de nuestros servicios y el compromiso permanente con la transformación digital.",
}

export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    number: 1,
    title: "Análisis",
    description: "Evaluamos sus necesidades y definimos los requerimientos técnicos del proyecto.",
    icon: "Search",
  },
  {
    id: "step-2",
    number: 2,
    title: "Diseño",
    description: "Creamos la arquitectura y el diseño de la solución adaptada a su empresa.",
    icon: "Palette",
  },
  {
    id: "step-3",
    number: 3,
    title: "Desarrollo",
    description: "Implementamos la solución con las mejores tecnologías y estándares de calidad.",
    icon: "Code2",
  },
  {
    id: "step-4",
    number: 4,
    title: "Implementación",
    description: "Desplegamos la solución en su entorno y realizamos pruebas exhaustivas.",
    icon: "Rocket",
  },
  {
    id: "step-5",
    number: 5,
    title: "Soporte",
    description: "Brindamos acompañamiento continuo para garantizar el óptimo funcionamiento.",
    icon: "HeadphonesIcon",
  },
]

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: "why-1",
    title: "Experiencia Profesional",
    description:
      "Contamos con profesionales certificados y años de experiencia resolviendo desafíos tecnológicos empresariales.",
    icon: "Award",
  },
  {
    id: "why-2",
    title: "Soluciones Personalizadas",
    description:
      "Cada proyecto se diseña a medida según las necesidades específicas de su organización.",
    icon: "Settings2",
  },
  {
    id: "why-3",
    title: "Innovación Tecnológica",
    description:
      "Adoptamos las últimas tecnologías, incluida la Inteligencia Artificial, para mantenerle a la vanguardia.",
    icon: "Sparkles",
  },
  {
    id: "why-4",
    title: "Soporte Permanente",
    description:
      "Ofrecemos atención técnica continua, tanto remota como presencial, para mantener sus sistemas operativos.",
    icon: "Headphones",
  },
  {
    id: "why-5",
    title: "Calidad Garantizada",
    description:
      "Todos nuestros proyectos incluyen garantía sobre el trabajo realizado y mejora continua.",
    icon: "ShieldCheck",
  },
]
