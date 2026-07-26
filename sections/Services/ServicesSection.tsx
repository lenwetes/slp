"use client"

import { motion } from "framer-motion"
import {
  Code2,
  BrainCircuit,
  Headphones,
  Camera,
  Network,
  Lightbulb,
  Monitor,
  ArrowRight,
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

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? Code2

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.18, delay: index * 0.04 }}
      className="slp-card p-8 flex flex-col gap-6"
      aria-labelledby={`service-title-${service.id}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex size-12 items-center justify-center rounded-xl bg-[#F6F7F9] text-[#1E4ED8] border border-[#E5E7EB]">
          <Icon className="size-6" aria-hidden="true" />
        </div>
        <span className="text-xs font-mono text-[#6B7280]">0{index + 1}</span>
      </div>

      <div className="flex flex-col gap-2">
        <h3
          id={`service-title-${service.id}`}
          className="font-heading text-xl font-bold text-[#111827]"
        >
          {service.title}
        </h3>
        <p className="text-sm text-[#6B7280] leading-relaxed font-normal">
          {service.description}
        </p>
      </div>

      {/* Feature list */}
      <ul className="flex flex-col gap-2 pt-2 mt-auto border-t border-[#E5E7EB]" aria-label={`Características de ${service.title}`}>
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-xs text-[#111827]">
            <span className="size-1.5 rounded-full bg-[#1E4ED8]" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        aria-label={`Solicitar información sobre ${service.title}`}
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E4ED8] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8] rounded"
      >
        Solicitar información
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </a>
    </motion.article>
  )
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="section-padding bg-[#FAFAFA]"
    >
      <div className="container-slp">
        <SectionTitle
          label="Nuestros Servicios"
          title="Soluciones tecnológicas integrales"
          subtitle="Portafolio de ingeniería diseñado para potenciar la productividad, seguridad y eficiencia operativa de su empresa."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <a
            href="#contacto"
            id="services-cta"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
          >
            Hablar con un especialista técnico
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
