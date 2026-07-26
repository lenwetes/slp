"use client"

import { motion } from "framer-motion"
import { Target, Eye, CheckCircle2, Award, ShieldCheck, Zap, Activity } from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { companyContent } from "@/content/company"

const capabilities = [
  { name: "Desarrollo de Software & Web", value: 98 },
  { name: "Inteligencia Artificial & Chatbots", value: 95 },
  { name: "Redes & Infraestructura LAN/WLAN", value: 96 },
  { name: "Sistemas de Videovigilancia IP", value: 99 },
]

export function AboutSection() {
  const { about, mission, vision } = companyContent

  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="section-padding bg-[#F6F7F9] border-y border-[#E5E7EB] relative overflow-hidden"
    >
      <div className="container-slp relative z-10">
        <SectionTitle
          label="Quiénes Somos"
          title="Tecnología e Ingeniería al servicio de su crecimiento"
          subtitle={about.intro}
          align="center"
          className="mb-16"
        />

        {/* Description + Capability Bars + Metrics */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch mb-16">
          
          {/* Main text & values (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4 text-[#6B7280] text-base leading-relaxed">
              <p className="text-lg text-[#111827] font-medium leading-relaxed">
                {about.description}
              </p>
              <p>
                Trabajamos bajo principios de responsabilidad, calidad, innovación y mejora continua, garantizando soluciones tecnológicas que generan valor real para cada organización.
              </p>
            </div>

            {/* Capability Bars */}
            <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E4ED8] flex items-center gap-2">
                <Activity className="size-4" aria-hidden="true" />
                Nivel de Cobertura & Capacidad Técnica
              </span>

              <div className="flex flex-col gap-3.5 pt-1">
                {capabilities.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs font-semibold text-[#111827]">
                      <span>{item.name}</span>
                      <span className="font-mono text-[#1E4ED8]">{item.value}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#F6F7F9] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#1E4ED8] to-[#6D28D9] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {about.values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-3 text-center justify-center shadow-xs"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-[#1E4ED8]" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#111827]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Highlights Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="slp-card p-8 h-full flex flex-col justify-between bg-white border border-[#E5E7EB] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E4ED8]/5 rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="size-2 rounded-full bg-[#16A34A]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">
                    SLP Quality Standard
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#111827] mb-8">
                  Indicadores de Compromiso e Ingeniería
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1 border-l-2 border-[#1E4ED8] pl-4">
                    <span className="font-heading text-3xl font-extrabold text-[#1E4ED8]">100%</span>
                    <span className="text-xs text-[#6B7280] font-medium">Garantía en Proyectos</span>
                  </div>
                  <div className="flex flex-col gap-1 border-l-2 border-[#6D28D9] pl-4">
                    <span className="font-heading text-3xl font-extrabold text-[#6D28D9]">7+</span>
                    <span className="text-xs text-[#6B7280] font-medium">Áreas Tecnológicas</span>
                  </div>
                  <div className="flex flex-col gap-1 border-l-2 border-[#1E4ED8] pl-4">
                    <span className="font-heading text-3xl font-extrabold text-[#1E4ED8]">24/7</span>
                    <span className="text-xs text-[#6B7280] font-medium">Soporte Continuo</span>
                  </div>
                  <div className="flex flex-col gap-1 border-l-2 border-[#C8A447] pl-4">
                    <span className="font-heading text-3xl font-extrabold text-[#111827]">WCAG AA</span>
                    <span className="text-xs text-[#6B7280] font-medium">Accesibilidad & Calidad</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#1E4ED8]/10 text-[#1E4ED8]">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Desarrollos respaldados por estándares de ingeniería internacional y monitoreo continuo.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mission & Vision Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.18 }}
            className="slp-card p-8 flex flex-col gap-4 bg-white"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#1E4ED8]/10 text-[#1E4ED8]">
                <Target className="size-6" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#1E4ED8] uppercase tracking-wider">Propósito</span>
                <h3 className="font-heading text-xl font-bold text-[#111827]">Nuestra Misión</h3>
              </div>
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed font-normal">{mission}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.18, delay: 0.05 }}
            className="slp-card p-8 flex flex-col gap-4 bg-white"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#6D28D9]/10 text-[#6D28D9]">
                <Eye className="size-6" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#6D28D9] uppercase tracking-wider">Futuro</span>
                <h3 className="font-heading text-xl font-bold text-[#111827]">Nuestra Visión</h3>
              </div>
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed font-normal">{vision}</p>
          </motion.article>
        </div>

      </div>
    </section>
  )
}
