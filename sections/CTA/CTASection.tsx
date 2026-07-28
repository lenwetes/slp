"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, ShieldCheck, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="section-padding bg-[#0B1022] border-y border-[#27304F] text-white relative overflow-hidden"
    >
      {/* Background Dot Matrix pattern with opacity */}
      <div
        className="absolute inset-0 opacity-10 bg-dot-matrix pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Orbs inside CTA */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 size-72 rounded-full bg-[#6A2DBD]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 size-72 rounded-full bg-[#1E88E5]/15 blur-3xl pointer-events-none" />

      <div className="container-slp relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.2 }}
          className="mx-auto max-w-4xl text-center flex flex-col items-center gap-8 bg-[#12182D] border border-[#27304F] p-8 sm:p-14 rounded-[20px] shadow-2xl"
        >
          <div className="flex flex-col gap-4 items-center">
            {/* Gold Detail Line */}
            <div className="w-16 h-1.5 bg-[#D9A441] rounded-full mb-1 shadow-sm" />

            <span className="inline-flex items-center gap-2 rounded-full bg-[#050816] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#18C7E7] border border-[#27304F] shadow-sm">
              <Zap className="size-3.5 text-[#D9A441]" />
              Transformación Digital & Ingeniería
            </span>

            <h2
              id="cta-heading"
              className="font-heading text-3xl font-black sm:text-4xl lg:text-5xl leading-tight text-[#FFFFFF] tracking-tight max-w-2xl"
            >
              Impulse su empresa con soluciones tecnológicas de ingeniería
            </h2>

            <p className="text-base sm:text-lg text-[#D8DCE8] font-normal max-w-2xl leading-relaxed">
              Solicite una evaluación técnica inicial sin costo. Analizamos sus requerimientos, procesos e infraestructura.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contacto"
              id="cta-primary"
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-9 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
            >
              Solicitar Cotización Gratuita
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>

            <a
              href="tel:+573214451817"
              id="cta-secondary"
              className="btn-secondary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
            >
              <Phone className="size-4 text-[#D9A441]" aria-hidden="true" />
              321 445 1817
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#95A0C0] pt-2 font-medium">
            <ShieldCheck className="size-4 text-[#D9A441]" aria-hidden="true" />
            <span>Respuesta en menos de 24 horas hábiles · Garantía escrita por contrato</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
