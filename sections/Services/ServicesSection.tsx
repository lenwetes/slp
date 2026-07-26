"use client"

import { useState } from "react"
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
  Terminal,
  Cpu,
  Radio,
  Eye,
  Server,
  Layers,
} from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { services } from "@/content/services"
import type { Service } from "@/types"

const iconMap: Record<string, React.ElementType> = {
  Code2,
  BrainCircuit,
  Headphones,
  Camera,
  Network,
  Lightbulb,
  Monitor,
}

// Technical UI Preview Visuals for each Service Card
function ServiceTechVisual({ serviceId }: { serviceId: string }) {
  if (serviceId === "software-development") {
    return (
      <div className="rounded-xl border border-[#E5E7EB] bg-[#111827] p-3.5 text-white font-mono text-[11px] flex flex-col gap-1.5 shadow-inner">
        <div className="flex items-center justify-between text-[10px] text-gray-400 border-b border-gray-800 pb-1.5">
          <span className="flex items-center gap-1 text-[#1E4ED8]">
            <Terminal className="size-3" /> App.tsx
          </span>
          <span className="text-[#16A34A]">✓ Compiled</span>
        </div>
        <div className="text-gray-300">
          <span className="text-purple-400">const</span> app = <span className="text-blue-400">createEnterpriseApp</span>({"{"}
        </div>
        <div className="pl-3 text-gray-400">
          stack: [<span className="text-emerald-400">&apos;Next.js&apos;</span>, <span className="text-emerald-400">&apos;TypeScript&apos;</span>],
        </div>
        <div className="pl-3 text-gray-400">
          security: <span className="text-amber-400">&apos;OAuth2 / SSL&apos;</span>
        </div>
        <div className="text-gray-300">{"}"});</div>
      </div>
    )
  }

  if (serviceId === "ai-software") {
    return (
      <div className="rounded-xl border border-[#E5E7EB] bg-[#F6F7F9] p-3.5 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-semibold text-[#111827]">
          <span className="flex items-center gap-1.5 text-[#6D28D9]">
            <Cpu className="size-3.5" /> Pipeline IA
          </span>
          <span className="text-[10px] font-mono text-[#6D28D9] bg-[#6D28D9]/10 px-2 py-0.5 rounded-full">
            Active RAG
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
          <div className="p-1.5 rounded-lg bg-white border border-[#E5E7EB] text-[#111827]">Input</div>
          <div className="p-1.5 rounded-lg bg-[#6D28D9] text-white font-bold">LLM Model</div>
          <div className="p-1.5 rounded-lg bg-white border border-[#E5E7EB] text-[#16A34A]">Output</div>
        </div>
      </div>
    )
  }

  if (serviceId === "technical-support") {
    return (
      <div className="rounded-xl border border-[#E5E7EB] bg-[#F6F7F9] p-3.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2.5">
          <div className="size-2 rounded-full bg-[#16A34A] animate-pulse" />
          <span className="font-semibold text-[#111827]">Soporte Activo</span>
        </div>
        <span className="font-mono text-[11px] text-[#1E4ED8] bg-[#1E4ED8]/10 px-2.5 py-1 rounded-full font-bold">
          Remote / On-Site 24/7
        </span>
      </div>
    )
  }

  if (serviceId === "videosurveillance") {
    return (
      <div className="rounded-xl border border-[#E5E7EB] bg-[#111827] p-2.5 grid grid-cols-2 gap-1.5">
        {[1, 2, 3, 4].map((cam) => (
          <div key={cam} className="aspect-video bg-gray-900 rounded-md flex items-center justify-between p-1.5 border border-gray-800 text-[9px] font-mono text-gray-400">
            <span className="flex items-center gap-1 text-red-400">
              <Eye className="size-2.5" /> CAM 0{cam}
            </span>
            <span className="text-emerald-400">REC</span>
          </div>
        ))}
      </div>
    )
  }

  if (serviceId === "networks") {
    return (
      <div className="rounded-xl border border-[#E5E7EB] bg-[#F6F7F9] p-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#111827]">
          <Radio className="size-3.5 text-[#1E4ED8]" />
          <span>VLAN 10 / Gigabit</span>
        </div>
        <div className="flex gap-1">
          <span className="size-2 rounded-full bg-[#16A34A]" />
          <span className="size-2 rounded-full bg-[#1E4ED8]" />
          <span className="size-2 rounded-full bg-[#C8A447]" />
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-[#F6F7F9] p-3.5 flex items-center justify-between text-xs">
      <span className="font-semibold text-[#111827] flex items-center gap-2">
        <Server className="size-3.5 text-[#1E4ED8]" />
        Especificaciones Garantizadas
      </span>
      <span className="font-mono text-[10px] text-[#16A34A] font-bold">✓ Verificado</span>
    </div>
  )
}

const filterTabs = [
  { id: "all", label: "Todos los Servicios" },
  { id: "software", label: "Software & IA" },
  { id: "infrastructure", label: "Redes & Videovigilancia" },
  { id: "support", label: "Soporte & Equipos" },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredServices = services.filter((service) => {
    if (activeTab === "all") return true
    if (activeTab === "software") return service.id === "software-development" || service.id === "ai-software" || service.id === "consulting"
    if (activeTab === "infrastructure") return service.id === "networks" || service.id === "videosurveillance"
    if (activeTab === "support") return service.id === "technical-support" || service.id === "equipment-sales"
    return true
  })

  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="section-padding bg-[#FAFAFA] relative overflow-hidden"
    >
      <div className="container-slp relative z-10">
        <SectionTitle
          label="Nuestros Servicios"
          title="Soluciones tecnológicas integrales de ingeniería"
          subtitle="Portafolio estructurado para potenciar la eficiencia, seguridad e infraestructura tecnológica de su empresa."
          align="center"
          className="mb-10"
        />

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-full transition-all duration-180 ${
                activeTab === tab.id
                  ? "bg-[#1E4ED8] text-white shadow-xs"
                  : "bg-white text-[#6B7280] border border-[#E5E7EB] hover:text-[#111827] hover:border-[#D1D5DB]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Code2

              return (
                <motion.article
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.18, delay: index * 0.03 }}
                  className="slp-card p-7 flex flex-col gap-5 bg-white relative overflow-hidden group"
                  aria-labelledby={`service-title-${service.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#F6F7F9] text-[#1E4ED8] border border-[#E5E7EB] group-hover:bg-[#1E4ED8] group-hover:text-white transition-colors duration-180">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono text-[#6B7280]">SLP-0{index + 1}</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      id={`service-title-${service.id}`}
                      className="font-heading text-xl font-bold text-[#111827] group-hover:text-[#1E4ED8] transition-colors"
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Technical visual preview */}
                  <ServiceTechVisual serviceId={service.id} />

                  {/* Feature list */}
                  <ul
                    className="flex flex-col gap-2 pt-2 mt-auto border-t border-[#E5E7EB]"
                    aria-label={`Características de ${service.title}`}
                  >
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-xs text-[#111827]">
                        <CheckCircle2 className="size-3.5 text-[#1E4ED8] shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    aria-label={`Solicitar información sobre ${service.title}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E4ED8] group-hover:translate-x-1 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8] rounded"
                  >
                    Solicitar información
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </a>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <a
            href="#contacto"
            id="services-cta"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
          >
            Hablar con un especialista técnico
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
