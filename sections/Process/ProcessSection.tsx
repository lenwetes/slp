"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code2, Rocket, Headphones, CheckCircle2, Clock } from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { processSteps } from "@/content/company"
import type { ProcessStep } from "@/types"

const iconMap: Record<string, React.ElementType> = {
  Search,
  Palette,
  Code2,
  Rocket,
  HeadphonesIcon: Headphones,
}

function ProcessCard({
  step,
  index,
  total,
}: {
  step: ProcessStep
  index: number
  total: number
}) {
  const Icon = iconMap[step.icon] ?? Code2
  const isLast = index === total - 1

  return (
    <div className="relative flex flex-col items-center flex-1">
      {/* Horizontal Connector Line for Desktop */}
      {!isLast && (
        <div
          className="absolute top-6 left-1/2 hidden h-[2px] w-full bg-[#E5E7EB] lg:block overflow-hidden"
          aria-hidden="true"
        >
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: false }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#1E4ED8] to-transparent"
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.18, delay: index * 0.05 }}
        className="relative z-10 flex flex-col items-center text-center gap-4 w-full group"
      >
        {/* Step circle with step number */}
        <div className="flex size-12 items-center justify-center rounded-full bg-white border-2 border-[#1E4ED8] text-[#1E4ED8] font-mono text-sm font-bold shadow-xs group-hover:bg-[#1E4ED8] group-hover:text-white transition-colors duration-180">
          0{step.number}
        </div>

        {/* Step details card */}
        <div className="slp-card p-6 flex flex-col items-center gap-3 w-full bg-white group-hover:border-[#1E4ED8] transition-colors">
          <div className="flex size-9 items-center justify-center rounded-lg bg-[#F6F7F9] text-[#1E4ED8]">
            <Icon className="size-4" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-base font-bold text-[#111827]">
            {step.title}
          </h3>
          <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
            {step.description}
          </p>
        </div>
      </motion.div>

      {/* Vertical Connector Line for Mobile */}
      {!isLast && (
        <div
          className="my-3 h-6 w-[2px] bg-[#E5E7EB] lg:hidden"
          aria-hidden="true"
        />
      )}
    </div>
  )
}

export function ProcessSection() {
  return (
    <section
      id="proceso"
      aria-labelledby="process-heading"
      className="section-padding bg-[#FAFAFA] relative overflow-hidden"
    >
      <div className="container-slp relative z-10">
        <SectionTitle
          label="Nuestro Proceso"
          title="Metodología de ingeniería estructurada"
          subtitle="Un flujo continuo y transparente que asegura entregas a tiempo y según especificaciones técnicas aprobadas."
          align="center"
          className="mb-16"
        />

        {/* Desktop Process Flow */}
        <ol className="hidden lg:flex lg:items-start lg:gap-4" aria-label="Pasos del proceso de trabajo">
          {processSteps.map((step, index) => (
            <li key={step.id} className="flex-1">
              <ProcessCard step={step} index={index} total={processSteps.length} />
            </li>
          ))}
        </ol>

        {/* Mobile Process Flow */}
        <ol className="flex flex-col items-center lg:hidden" aria-label="Pasos del proceso de trabajo">
          {processSteps.map((step, index) => (
            <li key={step.id} className="w-full max-w-sm">
              <ProcessCard step={step} index={index} total={processSteps.length} />
            </li>
          ))}
        </ol>

        {/* Guaranteed Timeline Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white px-6 py-3.5 text-xs text-[#6B7280] shadow-xs">
            <Clock className="size-4 text-[#1E4ED8]" aria-hidden="true" />
            Entregamos un <strong className="text-[#111827]">cronograma detallado</strong> tras el análisis inicial. Sin sorpresas.
          </div>
        </div>
      </div>
    </section>
  )
}
