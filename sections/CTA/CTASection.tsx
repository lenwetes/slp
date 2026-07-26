"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="section-padding bg-[#1E4ED8] text-white relative overflow-hidden"
    >
      <div className="container-slp relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.18 }}
          className="mx-auto max-w-3xl text-center flex flex-col items-center gap-8"
        >
          <div className="flex flex-col gap-4 items-center">
            {/* Gold detail line per Constitution */}
            <div className="w-12 h-1 bg-[#C8A447] rounded-full mb-2" />

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/20">
              Transformación Digital & Ingeniería
            </span>

            <h2
              id="cta-heading"
              className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight text-white"
            >
              Impulse su empresa con soluciones tecnológicas de ingeniería
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-normal max-w-2xl leading-relaxed">
              Solicite una evaluación técnica inicial sin costo. Analizamos sus requerimientos e infraestructura.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contacto"
              id="cta-primary"
              className="inline-flex items-center gap-2.5 rounded-full bg-white text-[#111827] px-8 py-3.5 text-base font-semibold hover:bg-white/95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Solicitar Cotización Gratuita
              <ArrowRight className="size-4 text-[#1E4ED8]" aria-hidden="true" />
            </a>

            <a
              href="tel:+573214451817"
              id="cta-secondary"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-transparent text-white px-8 py-3.5 text-base font-semibold hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="size-4" aria-hidden="true" />
              321 445 1817
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
