"use client"

import { motion } from "framer-motion"
import { Target, Eye, CheckCircle2 } from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { companyContent } from "@/content/company"

export function AboutSection() {
  const { about, mission, vision } = companyContent

  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="section-padding bg-[#F6F7F9] border-y border-[#E5E7EB]"
    >
      <div className="container-slp">
        <SectionTitle
          label="Quiénes Somos"
          title="Tecnología al servicio de su crecimiento"
          subtitle={about.intro}
          align="center"
          className="mb-16"
        />

        {/* Description + Values */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch mb-12">
          
          {/* Main text & values (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4 text-[#6B7280] text-base leading-relaxed">
              <p>{about.description}</p>
              <p>
                Trabajamos bajo principios de responsabilidad, calidad, innovación y mejora continua, garantizando soluciones tecnológicas que generan valor real para cada cliente.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {about.values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3.5"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-[#1E4ED8]" aria-hidden="true" />
                  <span className="text-sm font-semibold text-[#111827]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Highlights Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="slp-card p-8 h-full flex flex-col justify-between">
              <h3 className="font-heading text-lg font-bold text-[#111827] mb-6">
                Indicadores de Compromiso Técnico
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1 border-l-2 border-[#1E4ED8] pl-4">
                  <span className="font-heading text-3xl font-bold text-[#1E4ED8]">100%</span>
                  <span className="text-xs text-[#6B7280]">Garantía en Proyectos</span>
                </div>
                <div className="flex flex-col gap-1 border-l-2 border-[#1E4ED8] pl-4">
                  <span className="font-heading text-3xl font-bold text-[#1E4ED8]">7+</span>
                  <span className="text-xs text-[#6B7280]">Áreas de Ingeniería</span>
                </div>
                <div className="flex flex-col gap-1 border-l-2 border-[#1E4ED8] pl-4">
                  <span className="font-heading text-3xl font-bold text-[#1E4ED8]">24/7</span>
                  <span className="text-xs text-[#6B7280]">Disponibilidad de Soporte</span>
                </div>
                <div className="flex flex-col gap-1 border-l-2 border-[#C8A447] pl-4">
                  <span className="font-heading text-3xl font-bold text-[#111827]">WCAG AA</span>
                  <span className="text-xs text-[#6B7280]">Accesibilidad & Calidad</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E7EB] text-xs text-[#6B7280]">
                Ingeniería rigurosa y estándar internacional en cada entrega.
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
            className="slp-card p-8 flex flex-col gap-4"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#F6F7F9] text-[#1E4ED8] border border-[#E5E7EB]">
              <Target className="size-6" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#111827]">Nuestra Misión</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">{mission}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.18, delay: 0.05 }}
            className="slp-card p-8 flex flex-col gap-4"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#F6F7F9] text-[#6D28D9] border border-[#E5E7EB]">
              <Eye className="size-6" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#111827]">Nuestra Visión</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">{vision}</p>
          </motion.article>
        </div>

      </div>
    </section>
  )
}
