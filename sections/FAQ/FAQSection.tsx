"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Plus,
  Minus,
  HelpCircle,
  MessageSquare,
  Headphones,
  Code2,
  Camera,
  Building2,
  Wrench,
  ShieldCheck,
  Clock,
  Settings,
  MapPin,
  FileText,
  Sparkles,
  Phone,
} from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { faqItems } from "@/content/faq"
import type { FaqItem } from "@/types"

/* ---------- Category & icon mapping for each FAQ ---------- */
const faqMeta: Record<
  string,
  { icon: React.ElementType; category: string; color: string; iconBg: string }
> = {
  "faq-1": {
    icon: Headphones,
    category: "Soporte",
    color: "text-[#18C7E7]",
    iconBg: "bg-[#12182D] border-[#27304F]",
  },
  "faq-2": {
    icon: Code2,
    category: "Software",
    color: "text-[#1E88E5]",
    iconBg: "bg-[#12182D] border-[#27304F]",
  },
  "faq-3": {
    icon: Camera,
    category: "Seguridad",
    color: "text-[#F0C96A]",
    iconBg: "bg-[#12182D] border-[#27304F]",
  },
  "faq-4": {
    icon: Building2,
    category: "Clientes",
    color: "text-[#6A2DBD]",
    iconBg: "bg-[#12182D] border-[#27304F]",
  },
  "faq-5": {
    icon: Wrench,
    category: "Mantenimiento",
    color: "text-[#18C7E7]",
    iconBg: "bg-[#12182D] border-[#27304F]",
  },
  "faq-6": {
    icon: ShieldCheck,
    category: "Garantía",
    color: "text-[#D9A441]",
    iconBg: "bg-[#12182D] border-[#27304F]",
  },
  "faq-7": {
    icon: Clock,
    category: "Plazos",
    color: "text-[#1E88E5]",
    iconBg: "bg-[#12182D] border-[#27304F]",
  },
  "faq-8": {
    icon: Settings,
    category: "Software",
    color: "text-[#1E88E5]",
    iconBg: "bg-[#12182D] border-[#27304F]",
  },
  "faq-9": {
    icon: MapPin,
    category: "Cobertura",
    color: "text-[#18C7E7]",
    iconBg: "bg-[#12182D] border-[#27304F]",
  },
  "faq-10": {
    icon: FileText,
    category: "Cotización",
    color: "text-[#F0C96A]",
    iconBg: "bg-[#12182D] border-[#27304F]",
  },
}

const defaultMeta = {
  icon: HelpCircle,
  category: "General",
  color: "text-[#1E88E5]",
  iconBg: "bg-[#12182D] border-[#27304F]",
}

/* ---------- Single Accordion Item ---------- */
function FaqAccordionItem({ item, index }: { item: FaqItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const headingId = `faq-heading-${item.id}`
  const panelId = `faq-panel-${item.id}`
  const meta = faqMeta[item.id] ?? defaultMeta
  const Icon = meta.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={`group rounded-[20px] border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-[#1E88E5] bg-[#1B2340] shadow-lg shadow-[#1E88E5]/10"
          : "border-[#27304F] bg-[#12182D] hover:border-[#1E88E5] hover:shadow-md"
      }`}
    >
      <button
        id={headingId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center gap-4 px-5 py-5 sm:px-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5] rounded-[20px]"
      >
        {/* Icon */}
        <div
          className={`flex size-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
            isOpen ? "bg-[#1E88E5] border-[#1E88E5] text-white scale-110" : `${meta.iconBg} ${meta.color}`
          }`}
        >
          <Icon className="size-5" aria-hidden="true" />
        </div>

        {/* Question + Category */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider ${
                isOpen ? "text-[#18C7E7]" : meta.color
              }`}
            >
              {meta.category}
            </span>
          </div>
          <span className="font-heading text-[15px] font-bold text-[#FFFFFF] leading-snug block">
            {item.question}
          </span>
        </div>

        {/* Toggle */}
        <span
          className={`shrink-0 flex size-9 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#1E88E5] text-white rotate-0 shadow-md"
              : "bg-[#050816] text-[#95A0C0] group-hover:text-white border border-[#27304F]"
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pl-[4.5rem]">
              <div className="border-t border-[#27304F] pt-4">
                <p className="text-sm text-[#D8DCE8] leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ============================================================
   FAQ SECTION
   ============================================================ */
export function FAQSection() {
  const half = Math.ceil(faqItems.length / 2)
  const leftColumn = faqItems.slice(0, half)
  const rightColumn = faqItems.slice(half)

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-[#0B1022] relative overflow-hidden"
    >
      <div className="container-slp relative z-10">
        <SectionTitle
          label="Preguntas Frecuentes"
          title="Respuestas claras y precisas de ingeniería"
          subtitle="Información detallada sobre nuestras soluciones tecnológicas, garantías y metodologías de atención."
          align="center"
          className="mb-16"
        />

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto mb-16">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((item, index) => (
              <FaqAccordionItem key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((item, index) => (
              <FaqAccordionItem key={item.id} item={item} index={index + half} />
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-r from-[#6A2DBD] via-[#1E88E5] via-[#18C7E7] to-[#D9A441] p-[1px] shadow-2xl">
            <div className="rounded-[19px] bg-[#12182D] p-8 sm:p-10 relative overflow-hidden">
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                {/* Icon */}
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#050816] border border-[#27304F] text-[#D9A441] shadow-lg">
                  <Sparkles className="size-7 text-[#F0C96A]" aria-hidden="true" />
                </div>

                {/* Text */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-heading text-xl font-bold text-[#FFFFFF] mb-2">
                    ¿Tiene una consulta técnica específica?
                  </h3>
                  <p className="text-sm text-[#D8DCE8] leading-relaxed">
                    Nuestro equipo de ingenieros evaluará los requerimientos de su empresa sin compromiso.
                    Respuesta garantizada en menos de 24 horas hábiles.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 shrink-0">
                  <a
                    href="#contacto"
                    id="faq-cta"
                    className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
                  >
                    <MessageSquare className="size-4" />
                    Consultar Ahora
                  </a>
                  <a
                    href="tel:+573214451817"
                    className="btn-secondary inline-flex items-center justify-center gap-2 px-7 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
                  >
                    <Phone className="size-4 text-[#D9A441]" />
                    321 445 1817
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
