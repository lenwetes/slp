// ============================================================
// SLP Soluciones Informáticas — Categorías del Blog Tecnológico
// ============================================================

import type { BlogCategory } from "@/types"

export const blogCategories: BlogCategory[] = [
  {
    id: "cybersecurity",
    title: "Ciberseguridad",
    description:
      "Buenas prácticas, protección contra ransomware y phishing, copias de seguridad y protección de datos empresariales.",
    icon: "ShieldAlert",
    slug: "ciberseguridad",
    color: "from-red-500/20 to-orange-500/10",
  },
  {
    id: "artificial-intelligence",
    title: "Inteligencia Artificial",
    description:
      "Automatización empresarial, asistentes virtuales, machine learning y aplicaciones de IA para negocios.",
    icon: "BrainCircuit",
    slug: "inteligencia-artificial",
    color: "from-violet-500/20 to-purple-500/10",
  },
  {
    id: "digital-transformation",
    title: "Transformación Digital",
    description:
      "Digitalización de procesos, migración a la nube, productividad empresarial y estrategias de cambio tecnológico.",
    icon: "Zap",
    slug: "transformacion-digital",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "enterprise-networks",
    title: "Redes Empresariales",
    description:
      "Diseño LAN y WLAN, cableado estructurado, optimización de redes y seguridad perimetral para empresas.",
    icon: "Network",
    slug: "redes-empresariales",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "software-development",
    title: "Desarrollo de Software",
    description:
      "Software a medida, metodologías ágiles, arquitecturas modernas y las últimas tecnologías del sector.",
    icon: "Code2",
    slug: "desarrollo-software",
    color: "from-sky-500/20 to-blue-500/10",
  },
  {
    id: "tech-for-business",
    title: "Tecnología para Empresas",
    description:
      "Innovación tecnológica, tendencias del mercado, productividad y herramientas que transforman los negocios.",
    icon: "TrendingUp",
    slug: "tecnologia-empresas",
    color: "from-amber-500/20 to-yellow-500/10",
  },
]
