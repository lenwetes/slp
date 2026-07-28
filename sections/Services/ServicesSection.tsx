"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code2,
  BrainCircuit,
  Headphones,
  Camera,
  Network,
  Lightbulb,
  Monitor,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { services } from "@/content/services"

const iconMap: Record<string, React.ElementType> = {
  Code2,
  BrainCircuit,
  Headphones,
  Camera,
  Network,
  Lightbulb,
  Monitor,
}

/* ---------- Color theme per service (Official SLP Palette) ---------- */
const serviceThemes: Record<
  string,
  {
    gradient: string
    overlayFrom: string
    badgeBg: string
    badgeText: string
    badgeBorder: string
    iconBg: string
    accentBorder: string
    dotColor: string
  }
> = {
  "software-development": {
    gradient: "from-[#1E88E5] to-[#18C7E7]",
    overlayFrom: "from-[#050816]/90",
    badgeBg: "bg-[#1E88E5]/15",
    badgeText: "text-[#18C7E7]",
    badgeBorder: "border-[#1E88E5]/40",
    iconBg: "bg-[#1E88E5]",
    accentBorder: "border-[#1E88E5]/40",
    dotColor: "bg-[#18C7E7]",
  },
  "ai-software": {
    gradient: "from-[#6A2DBD] to-[#1E88E5]",
    overlayFrom: "from-[#050816]/90",
    badgeBg: "bg-[#6A2DBD]/20",
    badgeText: "text-[#18C7E7]",
    badgeBorder: "border-[#6A2DBD]/40",
    iconBg: "bg-[#6A2DBD]",
    accentBorder: "border-[#6A2DBD]/40",
    dotColor: "bg-[#18C7E7]",
  },
  "technical-support": {
    gradient: "from-[#18C7E7] to-[#1E88E5]",
    overlayFrom: "from-[#050816]/90",
    badgeBg: "bg-[#18C7E7]/15",
    badgeText: "text-[#18C7E7]",
    badgeBorder: "border-[#18C7E7]/40",
    iconBg: "bg-[#18C7E7]",
    accentBorder: "border-[#18C7E7]/40",
    dotColor: "bg-[#18C7E7]",
  },
  videosurveillance: {
    gradient: "from-[#D9A441] to-[#F0C96A]",
    overlayFrom: "from-[#050816]/90",
    badgeBg: "bg-[#D9A441]/15",
    badgeText: "text-[#F0C96A]",
    badgeBorder: "border-[#D9A441]/40",
    iconBg: "bg-[#D9A441]",
    accentBorder: "border-[#D9A441]/40",
    dotColor: "bg-[#F0C96A]",
  },
  networks: {
    gradient: "from-[#1E88E5] to-[#18C7E7]",
    overlayFrom: "from-[#050816]/90",
    badgeBg: "bg-[#1E88E5]/15",
    badgeText: "text-[#18C7E7]",
    badgeBorder: "border-[#1E88E5]/40",
    iconBg: "bg-[#1E88E5]",
    accentBorder: "border-[#1E88E5]/40",
    dotColor: "bg-[#18C7E7]",
  },
  consulting: {
    gradient: "from-[#6A2DBD] to-[#D9A441]",
    overlayFrom: "from-[#050816]/90",
    badgeBg: "bg-[#6A2DBD]/20",
    badgeText: "text-[#F0C96A]",
    badgeBorder: "border-[#D9A441]/40",
    iconBg: "bg-[#6A2DBD]",
    accentBorder: "border-[#D9A441]/40",
    dotColor: "bg-[#F0C96A]",
  },
  "equipment-sales": {
    gradient: "from-[#D9A441] to-[#F0C96A]",
    overlayFrom: "from-[#050816]/90",
    badgeBg: "bg-[#D9A441]/15",
    badgeText: "text-[#F0C96A]",
    badgeBorder: "border-[#D9A441]/40",
    iconBg: "bg-[#D9A441]",
    accentBorder: "border-[#D9A441]/40",
    dotColor: "bg-[#F0C96A]",
  },
}

/* Service image paths */
const serviceImages: Record<string, string> = {
  "software-development": "/images/services/software-development.png",
  "ai-software": "/images/services/ai-software.png",
  "technical-support": "/images/services/technical-support.png",
  videosurveillance: "/images/services/videosurveillance.png",
  networks: "/images/services/networks.png",
  consulting: "/images/services/consulting.png",
  "equipment-sales": "/images/services/equipment-sales.png",
}

/* ---------- Filter tabs ---------- */
const filterTabs = [
  { id: "all", label: "Todos los Servicios" },
  { id: "software", label: "Software & IA" },
  { id: "infrastructure", label: "Redes & Videovigilancia" },
  { id: "support", label: "Soporte & Consultoría" },
]

/* ============================================================
   LARGE CARD
   ============================================================ */
function LargeServiceCard({
  service,
  index,
  reversed,
}: {
  service: (typeof services)[number]
  index: number
  reversed?: boolean
}) {
  const Icon = iconMap[service.icon] ?? Code2
  const theme = serviceThemes[service.id] || serviceThemes["software-development"]
  const imageSrc = serviceImages[service.id]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`group relative grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[20px] border border-[#27304F] bg-[#12182D] shadow-lg hover:shadow-2xl hover:border-[#1E88E5] hover:bg-[#1B2340] transition-all duration-300 ${
        reversed ? "lg:direction-rtl" : ""
      }`}
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* Image Side */}
      <div
        className={`relative h-64 lg:h-full min-h-[280px] overflow-hidden ${
          reversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={imageSrc}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${theme.overlayFrom} to-transparent opacity-80`}
        />
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full ${theme.badgeBg} backdrop-blur-md px-3 py-1.5 text-[11px] font-mono font-bold ${theme.badgeText} border ${theme.accentBorder}`}
          >
            <span className={`size-1.5 rounded-full ${theme.dotColor} animate-pulse`} />
            SLP-0{index + 1}
          </span>
        </div>
      </div>

      {/* Content Side */}
      <div
        className={`flex flex-col justify-center gap-5 p-7 lg:p-10 ${
          reversed ? "lg:order-1 lg:direction-ltr" : "lg:order-2"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex size-11 items-center justify-center rounded-xl ${theme.iconBg} text-white shadow-md transition-transform group-hover:scale-110 duration-200`}
          >
            <Icon className="size-5 text-white" aria-hidden="true" />
          </div>
          <h3
            id={`service-title-${service.id}`}
            className="font-heading text-xl font-bold text-[#FFFFFF] leading-tight"
          >
            {service.title}
          </h3>
        </div>

        <p className="text-sm text-[#D8DCE8] leading-relaxed">{service.description}</p>

        <ul
          className="flex flex-col gap-2.5"
          aria-label={`Características de ${service.title}`}
        >
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-[#D8DCE8] font-medium">
              <CheckCircle2 className="size-4 text-[#18C7E7] shrink-0" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          aria-label={`Solicitar información sobre ${service.title}`}
          className={`mt-1 inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-200`}
        >
          Solicitar información
          <ArrowRight className="size-4 text-[#18C7E7]" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  )
}

/* ============================================================
   COMPACT CARD
   ============================================================ */
function CompactServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const Icon = iconMap[service.icon] ?? Code2
  const theme = serviceThemes[service.id] || serviceThemes["software-development"]
  const imageSrc = serviceImages[service.id]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-[20px] border border-[#27304F] bg-[#12182D] shadow-lg hover:shadow-2xl hover:border-[#1E88E5] hover:bg-[#1B2340] transition-all duration-300"
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${theme.overlayFrom} to-transparent opacity-80`}
        />
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full ${theme.badgeBg} backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold ${theme.badgeText} border ${theme.accentBorder}`}
          >
            <span className={`size-1.5 rounded-full ${theme.dotColor} animate-pulse`} />
            SLP-0{index + 1}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-center gap-3">
          <div
            className={`flex size-10 items-center justify-center rounded-xl ${theme.iconBg} text-white shadow-md transition-transform group-hover:scale-110 duration-200`}
          >
            <Icon className="size-5 text-white" aria-hidden="true" />
          </div>
          <h3
            id={`service-title-${service.id}`}
            className="font-heading text-lg font-bold text-[#FFFFFF] leading-tight"
          >
            {service.title}
          </h3>
        </div>

        <p className="text-sm text-[#D8DCE8] leading-relaxed">{service.description}</p>

        <ul
          className="flex flex-col gap-2 mt-auto pt-3 border-t border-[#27304F]"
          aria-label={`Características de ${service.title}`}
        >
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-[#D8DCE8] font-semibold">
              <CheckCircle2 className="size-3.5 text-[#18C7E7] shrink-0" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          aria-label={`Solicitar información sobre ${service.title}`}
          className={`inline-flex items-center gap-2 text-xs font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-200`}
        >
          Solicitar información
          <ArrowRight className="size-3.5 text-[#18C7E7]" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  )
}

/* ============================================================
   MAIN SECTION
   ============================================================ */
export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filtered = services.filter((s) => {
    if (activeTab === "all") return true
    if (activeTab === "software") return s.id === "software-development" || s.id === "ai-software"
    if (activeTab === "infrastructure") return s.id === "networks" || s.id === "videosurveillance"
    if (activeTab === "support")
      return s.id === "technical-support" || s.id === "equipment-sales" || s.id === "consulting"
    return true
  })

  const useSymmetricLayout = activeTab === "all" && filtered.length === 7
  const topRow = useSymmetricLayout ? filtered.slice(0, 2) : []
  const middleRow = useSymmetricLayout ? filtered.slice(2, 5) : []
  const bottomRow = useSymmetricLayout ? filtered.slice(5, 7) : []

  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="section-padding bg-[#050816] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-matrix opacity-[0.05] pointer-events-none" aria-hidden="true" />

      <div className="container-slp relative z-10">
        <SectionTitle
          label="Nuestros Servicios"
          title="Soluciones tecnológicas integrales de ingeniería"
          subtitle="Portafolio estructurado para potenciar la eficiencia, seguridad e infraestructura tecnológica de su empresa."
          align="center"
          className="mb-10"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#6A2DBD] via-[#1E88E5] to-[#18C7E7] text-white shadow-lg"
                  : "bg-[#12182D] text-[#D8DCE8] border border-[#27304F] hover:text-white hover:border-[#1E88E5]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {useSymmetricLayout ? (
            <motion.div
              key="symmetric"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-8"
            >
              {/* Row 1 — 2 large cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {topRow.map((service, i) => (
                  <LargeServiceCard
                    key={service.id}
                    service={service}
                    index={i}
                    reversed={i === 1}
                  />
                ))}
              </div>

              {/* Row 2 — 3 compact cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {middleRow.map((service, i) => (
                  <CompactServiceCard
                    key={service.id}
                    service={service}
                    index={i + 2}
                  />
                ))}
              </div>

              {/* Row 3 — 2 large cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {bottomRow.map((service, i) => (
                  <LargeServiceCard
                    key={service.id}
                    service={service}
                    index={i + 5}
                    reversed={i === 0}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((service, i) => (
                <CompactServiceCard key={service.id} service={service} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contacto"
            id="services-cta"
            className="btn-primary inline-flex items-center gap-2.5 px-9 py-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
          >
            Hablar con un especialista técnico
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
