// ============================================================
// SLP Soluciones Informáticas — Catálogo de Servicios
// ============================================================

import type { Service } from "@/types"

export const services: Service[] = [
  {
    id: "software-development",
    title: "Desarrollo de Software",
    description:
      "Software empresarial, aplicaciones web y móviles, automatización, bases de datos e integración de sistemas.",
    icon: "Code2",
    accentColor: "from-blue-500 to-cyan-400",
    features: [
      "Software empresarial a medida",
      "Aplicaciones web y móviles",
      "Automatización de procesos",
      "Integración de sistemas",
    ],
  },
  {
    id: "ai-software",
    title: "Software con Inteligencia Artificial",
    description:
      "Chatbots, automatización inteligente, asistentes virtuales, análisis de datos y sistemas predictivos.",
    icon: "BrainCircuit",
    accentColor: "from-violet-500 to-purple-400",
    features: [
      "Chatbots empresariales",
      "Automatización inteligente",
      "Asistentes virtuales",
      "Sistemas predictivos",
    ],
  },
  {
    id: "technical-support",
    title: "Soporte Técnico",
    description:
      "Soporte remoto y presencial, mantenimiento preventivo y correctivo, instalación de software y optimización de equipos.",
    icon: "Headphones",
    accentColor: "from-emerald-500 to-teal-400",
    features: [
      "Soporte remoto y presencial",
      "Mantenimiento preventivo",
      "Instalación de software",
      "Optimización de equipos",
    ],
  },
  {
    id: "videosurveillance",
    title: "Videovigilancia",
    description:
      "Instalación y configuración de cámaras IP, DVR/NVR y monitoreo remoto para su seguridad empresarial.",
    icon: "Camera",
    accentColor: "from-orange-500 to-amber-400",
    features: [
      "Cámaras IP de alta definición",
      "Configuración DVR/NVR",
      "Monitoreo remoto 24/7",
      "Mantenimiento de sistemas",
    ],
  },
  {
    id: "networks",
    title: "Redes LAN y WLAN",
    description:
      "Cableado estructurado, redes empresariales, routers, switches y firewall para infraestructura robusta.",
    icon: "Network",
    accentColor: "from-sky-500 to-blue-400",
    features: [
      "Cableado estructurado",
      "Redes empresariales",
      "Routers y switches",
      "Firewall y seguridad",
    ],
  },
  {
    id: "consulting",
    title: "Consultoría Tecnológica",
    description:
      "Asesoría estratégica para la modernización y transformación digital de su organización.",
    icon: "Lightbulb",
    accentColor: "from-yellow-500 to-orange-400",
    features: [
      "Diagnóstico tecnológico",
      "Plan de modernización",
      "Transformación digital",
      "Asesoría estratégica",
    ],
  },
  {
    id: "equipment-sales",
    title: "Venta de Equipos",
    description:
      "Computadores, periféricos y accesorios tecnológicos con garantía y soporte técnico incluido.",
    icon: "Monitor",
    accentColor: "from-pink-500 to-rose-400",
    features: [
      "Computadores de escritorio",
      "Laptops y portátiles",
      "Periféricos y accesorios",
      "Garantía incluida",
    ],
  },
]
