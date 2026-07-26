"use client"

import { motion } from "framer-motion"
import {
  Award,
  Settings2,
  Sparkles,
  Headphones,
  ShieldCheck,
  CheckCircle,
} from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { whyChooseUsItems } from "@/content/company"
import type { WhyChooseUsItem } from "@/types"

const iconMap: Record<string, React.ElementType> = {
  Award,
  Settings2,
  Sparkles,
  Headphones,
  ShieldCheck,
}

function WhyCard({ item, index }: { item: WhyChooseUsItem; index: number }) {
  const Icon = iconMap[item.icon] ?? Award

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.18, delay: index * 0.04 }}
      className="slp-card p-6 flex gap-5 items-start"
      aria-labelledby={`why-title-${item.id}`}
    >
      <div className="shrink-0 flex size-10 items-center justify-center rounded-lg bg-[#F6F7F9] text-[#1E4ED8] border border-[#E5E7EB]">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3
          id={`why-title-${item.id}`}
          className="font-heading text-base font-bold text-[#111827]"
        >
          {item.title}
        </h3>
        <p className="text-sm text-[#6B7280] leading-relaxed font-normal">
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}

export function WhyChooseUsSection() {
  return (
    <section
      id="por-que-elegirnos"
      aria-labelledby="why-heading"
      className="section-padding bg-[#F6F7F9] border-y border-[#E5E7EB]"
    >
      <div className="container-slp">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <SectionTitle
              label="¿Por qué elegir SLP?"
              title="Comprometidos con la excelencia técnica"
              subtitle="No somos solo proveedores de tecnología. Somos su aliado estratégico de ingeniería, enfocados en resultados reales y medibles."
              align="left"
            />

            <div className="flex flex-col gap-3 border-l-2 border-[#C8A447] pl-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1E4ED8]">
                Garantía de Calidad
              </span>
              <p className="text-sm text-[#6B7280]">
                Todos nuestros proyectos se entregan bajo estrictos estándares de ingeniería, documentación exhaustiva y garantía directa.
              </p>
            </div>

            <div>
              <a
                href="#contacto"
                id="why-cta"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
              >
                <CheckCircle className="size-4" aria-hidden="true" />
                Iniciar mi proyecto
              </a>
            </div>
          </div>

          {/* Right Column: Why cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {whyChooseUsItems.map((item, index) => (
              <WhyCard key={item.id} item={item} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
