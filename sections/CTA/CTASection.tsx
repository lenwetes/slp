"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, ShieldCheck, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="section-padding bg-gradient-to-br from-[#1E4ED8] via-[#1D4ED8] to-[#6D28D9] text-white relative overflow-hidden"
    >
      {/* Background Dot Matrix pattern with low opacity */}
      <div
        className="absolute inset-0 opacity-10 bg-dot-matrix pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-slp relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.18 }}
          className="mx-auto max-w-3xl text-center flex flex-col items-center gap-8"
        >
          <div className="flex flex-col gap-4 items-center">
            {/* Gold detail line per Design Constitution */}
            <div className="w-14 h-1 bg-[#C8A447] rounded-full mb-1" />

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 shadow-xs">
              <Zap className="size-3.5 text-[#C8A447]" />
              Transformación Digital & Ingeniería
            </span>

            <h2
              id="cta-heading"
              className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight text-white tracking-tight"
            >
              Impulse su empresa con soluciones tecnológicas de ingeniería
            </h2>

            <p className="text-base sm:text-lg text-white/85 font-normal max-w-2xl leading-relaxed">
              Solicite una evaluación técnica inicial sin costo. Analizamos sus requerimientos, procesos e infraestructura.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contacto"
              id="cta-primary"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-[#111827] px-9 py-4 text-base font-bold hover:bg-white/95 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Solicitar Cotización Gratuita
              <ArrowRight className="size-4 text-[#1E4ED8]" aria-hidden="true" />
            </a>

            <a
              href="tel:+573214451817"
              id="cta-secondary"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-white/10 text-white px-8 py-4 text-base font-semibold hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="size-4" aria-hidden="true" />
              321 445 1817
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/70 pt-2">
            <ShieldCheck className="size-4 text-[#C8A447]" aria-hidden="true" />
            <span>Respuesta en menos de 24 horas hábiles · Garantía directas por escrito</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
