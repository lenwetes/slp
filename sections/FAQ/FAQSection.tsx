"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { faqItems } from "@/content/faq"
import type { FaqItem } from "@/types"

function FaqAccordionItem({ item, index }: { item: FaqItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const headingId = `faq-heading-${item.id}`
  const panelId = `faq-panel-${item.id}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.18, delay: index * 0.03 }}
      className={`rounded-2xl border transition-all duration-180 bg-white ${
        isOpen ? "border-[#1E4ED8] shadow-sm" : "border-[#E5E7EB]"
      }`}
    >
      <button
        id={headingId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8] rounded-2xl"
      >
        <span className="flex items-center gap-3.5">
          <span className="shrink-0 font-mono text-xs font-bold text-[#1E4ED8] bg-[#1E4ED8]/10 size-7 rounded-lg flex items-center justify-center">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-heading text-base font-bold text-[#111827]">
            {item.question}
          </span>
        </span>

        <span
          className={`shrink-0 flex size-8 items-center justify-center rounded-full transition-colors ${
            isOpen ? "bg-[#1E4ED8] text-white" : "bg-[#F6F7F9] text-[#111827]"
          }`}
        >
          {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
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
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm text-[#6B7280] leading-relaxed pl-14 font-normal border-t border-[#E5E7EB]/60 pt-4">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-[#F6F7F9] border-y border-[#E5E7EB] relative overflow-hidden"
    >
      <div className="container-slp relative z-10">
        <SectionTitle
          label="Preguntas Frecuentes"
          title="Respuestas claras y precisas de ingeniería"
          subtitle="Información detallada sobre nuestras soluciones tecnológicas, garantías y metodologías de atención."
          align="center"
          className="mb-14"
        />

        <div className="mx-auto max-w-3xl">
          <dl className="flex flex-col gap-3">
            {faqItems.map((item, index) => (
              <FaqAccordionItem key={item.id} item={item} index={index} />
            ))}
          </dl>

          {/* Support callout */}
          <div className="mt-12 text-center slp-card p-8 bg-white border border-[#E5E7EB] shadow-xs flex flex-col items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#1E4ED8]/10 text-[#1E4ED8]">
              <HelpCircle className="size-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-[#111827] mb-1">
                ¿Tiene una consulta técnica específica?
              </h3>
              <p className="text-sm text-[#6B7280] font-normal">
                Nuestro equipo evaluará los requerimientos de su empresa sin compromiso.
              </p>
            </div>
            <a
              href="#contacto"
              id="faq-cta"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
            >
              <MessageSquare className="size-4" />
              Contactar Especialista Técnico
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
