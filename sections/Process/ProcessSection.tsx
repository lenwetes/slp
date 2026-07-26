"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code2, Rocket, Headphones } from "lucide-react"
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
          className="absolute top-6 left-1/2 hidden h-[2px] w-full bg-[#E5E7EB] lg:block"
          aria-hidden="true"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.18, delay: index * 0.05 }}
        className="relative z-10 flex flex-col items-center text-center gap-4 w-full"
      >
        {/* Step circle */}
        <div className="flex size-12 items-center justify-center rounded-full bg-white border-2 border-[#1E4ED8] text-[#1E4ED8] font-mono text-sm font-bold shadow-xs">
          {step.number}
        </div>

        {/* Icon & Details */}
        <div className="slp-card p-6 flex flex-col items-center gap-2.5 w-full">
          <div className="flex size-8 items-center justify-center rounded-md bg-[#F6F7F9] text-[#1E4ED8]">
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
      className="section-padding bg-[#FAFAFA]"
    >
      <div className="container-slp">
        <SectionTitle
          label="Nuestro Proceso"
          title="Metodología de ingeniería estructurada"
          subtitle="Proceso transparente y disciplinado que asegura entregas a tiempo y según especificaciones aprobadas."
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

        {/* Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-[#F6F7F9] px-6 py-3 text-xs text-[#6B7280]">
            <span className="size-2 rounded-full bg-[#16A34A]" aria-hidden="true" />
            Entregamos un <strong className="text-[#111827]">cronograma detallado</strong> tras el análisis técnico inicial.
          </div>
        </div>
      </div>
    </section>
  )
}
