"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Code2, BrainCircuit, Network, Camera, Server, CheckCircle2 } from "lucide-react"
import { companyContent } from "@/content/company"

const ecosystemNodes = [
  { label: "Software", icon: Code2, step: "01" },
  { label: "IA", icon: BrainCircuit, step: "02" },
  { label: "Redes", icon: Network, step: "03" },
  { label: "Videovigilancia", icon: Camera, step: "04" },
  { label: "Infraestructura", icon: Server, step: "05" },
  { label: "Resultados", icon: CheckCircle2, step: "06" },
]

export function HeroSection() {
  const { hero } = companyContent

  return (
    <section
      id="inicio"
      aria-label="Inicio — SLP Soluciones Informáticas"
      className="relative min-h-[90vh] flex flex-col justify-center bg-[#FAFAFA] pt-24 pb-16 overflow-hidden"
    >
      <div className="container-slp relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Heading + CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.05 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F6F7F9] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1E4ED8]">
                <span className="size-1.5 rounded-full bg-[#C8A447]" aria-hidden="true" />
                Ingeniería & Soluciones Tecnológicas
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.1 }}
              className="font-heading text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl leading-[1.1]"
            >
              Desarrollamos <span className="text-[#1E4ED8]">soluciones tecnológicas</span> inteligentes para impulsar el crecimiento de su empresa.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.15 }}
              className="text-base text-[#6B7280] sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              {hero.description}
            </motion.p>

            {/* CTAs - Strict Pill buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#contacto"
                id="hero-primary-cta"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
              >
                {hero.primaryCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>

              <a
                href="tel:+573214451817"
                id="hero-secondary-cta"
                className="btn-secondary inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
              >
                <Phone className="size-4 text-[#1E4ED8]" aria-hidden="true" />
                {hero.secondaryCta}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Technological Ecosystem Diagram (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.25 }}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F6F7F9] p-6 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#1E4ED8]" />
                  <span className="font-heading text-xs font-semibold text-[#111827] uppercase tracking-wider">
                    Ecosistema de Soluciones Integradas
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#6B7280]">Arquitectura SLP</span>
              </div>

              {/* Connected flow representation */}
              <div className="flex flex-col gap-3">
                {ecosystemNodes.map((node, idx) => {
                  const Icon = node.icon
                  const isLast = idx === ecosystemNodes.length - 1

                  return (
                    <div key={node.label} className="flex flex-col">
                      <div className={`flex items-center justify-between rounded-xl p-3.5 border ${isLast ? 'bg-[#1E4ED8] text-white border-[#1E4ED8]' : 'bg-white text-[#111827] border-[#E5E7EB]'}`}>
                        <div className="flex items-center gap-3">
                          <div className={`flex size-8 items-center justify-center rounded-lg ${isLast ? 'bg-white/10 text-white' : 'bg-[#F6F7F9] text-[#1E4ED8]'}`}>
                            <Icon className="size-4" aria-hidden="true" />
                          </div>
                          <span className="text-sm font-semibold">{node.label}</span>
                        </div>
                        <span className={`text-xs font-mono font-medium ${isLast ? 'text-white/80' : 'text-[#6B7280]'}`}>
                          {node.step}
                        </span>
                      </div>
                      {!isLast && (
                        <div className="flex justify-center py-1">
                          <div className="w-px h-3 bg-[#E5E7EB]" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
