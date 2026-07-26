"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
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
        isOpen ? "border-[#1E4ED8] shadow-xs" : "border-[#E5E7EB]"
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
        <span className="flex items-center gap-3">
          <span className="shrink-0 font-mono text-xs font-semibold text-[#6B7280]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-heading text-base font-bold text-[#111827]">
            {item.question}
          </span>
        </span>

        <span className="shrink-0 flex size-8 items-center justify-center rounded-full bg-[#F6F7F9] text-[#111827]">
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
            <p className="px-6 pb-6 text-sm text-[#6B7280] leading-relaxed pl-12 font-normal">
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
      className="section-padding bg-[#F6F7F9] border-y border-[#E5E7EB]"
    >
      <div className="container-slp">
        <SectionTitle
          label="Preguntas Frecuentes"
          title="Respuestas claras y precisas"
          subtitle="Información detallada sobre nuestros servicios de ingeniería, soporte y modalidades de atención."
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
          <div className="mt-12 text-center slp-card p-8 bg-white">
            <h3 className="font-heading text-lg font-bold text-[#111827] mb-2">
              ¿Tiene una consulta específica no listada?
            </h3>
            <p className="text-sm text-[#6B7280] mb-6 font-normal">
              Nuestro equipo de ingeniería evaluará su caso de forma personalizada.
            </p>
            <a
              href="#contacto"
              id="faq-cta"
              className="btn-primary inline-flex items-center px-8 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
            >
              Contactar Soporte Técnico
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
