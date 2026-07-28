"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code2, Rocket, Headphones, Clock } from "lucide-react"
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

const stepColors = [
  { bg: "bg-[#6A2DBD]", text: "text-[#18C7E7]", border: "border-[#6A2DBD]", lightBg: "bg-[#6A2DBD]/20" },
  { bg: "bg-[#1E88E5]", text: "text-[#1E88E5]", border: "border-[#1E88E5]", lightBg: "bg-[#1E88E5]/20" },
  { bg: "bg-[#18C7E7]", text: "text-[#18C7E7]", border: "border-[#18C7E7]", lightBg: "bg-[#18C7E7]/20" },
  { bg: "bg-[#D9A441]", text: "text-[#F0C96A]", border: "border-[#D9A441]", lightBg: "bg-[#D9A441]/20" },
  { bg: "bg-[#1E88E5]", text: "text-[#18C7E7]", border: "border-[#1E88E5]", lightBg: "bg-[#1E88E5]/20" },
]

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
  const color = stepColors[index % stepColors.length]

  return (
    <div className="relative flex flex-col items-center flex-1">
      {/* Horizontal Connector Line for Desktop */}
      {!isLast && (
        <div
          className="absolute top-6 left-1/2 hidden h-[2px] w-full bg-[#27304F] lg:block overflow-hidden"
          aria-hidden="true"
        >
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: false }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#18C7E7] to-transparent"
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.2, delay: index * 0.05 }}
        className="relative z-10 flex flex-col items-center text-center gap-4 w-full group"
      >
        {/* Step circle */}
        <div className={`flex size-13 items-center justify-center rounded-full bg-[#050816] border-2 ${color.border} ${color.text} font-mono text-sm font-extrabold shadow-lg group-hover:${color.bg} group-hover:text-white transition-colors duration-200`}>
          0{step.number}
        </div>

        {/* Step details card */}
        <div className="slp-card p-6 flex flex-col items-center gap-3 w-full bg-[#12182D] border-[#27304F] rounded-[20px] group-hover:border-[#1E88E5] group-hover:bg-[#1B2340] transition-all duration-200">
          <div className={`flex size-10 items-center justify-center rounded-xl ${color.lightBg} ${color.text} font-bold`}>
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-base font-bold text-[#FFFFFF]">
            {step.title}
          </h3>
          <p className="text-xs text-[#D8DCE8] leading-relaxed font-normal">
            {step.description}
          </p>
        </div>
      </motion.div>

      {/* Vertical Connector Line for Mobile */}
      {!isLast && (
        <div
          className="my-3 h-6 w-[2px] bg-[#27304F] lg:hidden"
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
      className="section-padding bg-[#050816] relative overflow-hidden"
    >
      <div className="container-slp relative z-10">
        <SectionTitle
          label="Nuestro Proceso"
          title="Metodología de ingeniería estructurada en 5 etapas"
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
          <div className="inline-flex items-center gap-3 rounded-full border border-[#27304F] bg-[#12182D] px-6 py-3.5 text-xs font-medium text-[#D8DCE8] shadow-sm">
            <Clock className="size-4 text-[#18C7E7]" aria-hidden="true" />
            Entregamos un <strong className="text-[#FFFFFF] font-bold">cronograma detallado</strong> tras el análisis técnico inicial. Sin improvisaciones.
          </div>
        </div>
      </div>
    </section>
  )
}
