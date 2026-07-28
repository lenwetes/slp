"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Target,
  Eye,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Sparkles,
  ArrowRight,
  Zap,
  TrendingUp,
  Globe,
  Clock,
  Award,
} from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { companyContent } from "@/content/company"

/* ---------- Animated Counter ---------- */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.span
      ref={ref}
      className="font-heading text-4xl lg:text-5xl font-black text-[#FFFFFF]"
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}
          {suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </motion.span>
  )
}

/* ---------- Capability data ---------- */
const capabilities = [
  { name: "Desarrollo de Software & Web", value: 98, color: "from-[#6A2DBD] to-[#1E88E5]" },
  { name: "Inteligencia Artificial & Chatbots", value: 95, color: "from-[#1E88E5] to-[#18C7E7]" },
  { name: "Redes & Infraestructura LAN/WLAN", value: 96, color: "from-[#18C7E7] to-[#1E88E5]" },
  { name: "Sistemas de Videovigilancia IP", value: 99, color: "from-[#D9A441] to-[#F0C96A]" },
]

/* ---------- Stats data ---------- */
const stats = [
  { value: 100, suffix: "%", label: "Garantía en Proyectos", color: "text-[#1E88E5]", icon: ShieldCheck },
  { value: 7, suffix: "+", label: "Áreas Tecnológicas", color: "text-[#18C7E7]", icon: Globe },
  { value: 24, suffix: "/7", label: "Soporte Continuo", color: "text-[#6A2DBD]", icon: Clock },
  { value: 100, suffix: "%", label: "Clientes Satisfechos", color: "text-[#D9A441]", icon: Award },
]

/* ---------- Stagger animation variants ---------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function AboutSection() {
  const { about, mission, vision } = companyContent

  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="section-padding bg-[#0B1022] relative overflow-hidden"
    >
      {/* Ambient background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E88E5]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6A2DBD]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" aria-hidden="true" />

      <div className="container-slp relative z-10">

        <SectionTitle
          label="Quiénes Somos"
          title="Tecnología e Ingeniería al servicio de su crecimiento"
          subtitle={about.intro}
          align="center"
          className="mb-20"
        />

        {/* ========== BLOCK 1: Hero Image + Description ========== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24"
        >
          {/* Image with floating accent elements */}
          <motion.div variants={scaleInVariants} className="relative">
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl border border-[#27304F]">
              <Image
                src="/images/about/workspace.png"
                alt="Centro de operaciones tecnológicas SLP"
                width={720}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050816]/70 via-transparent to-[#6A2DBD]/20" />
            </div>

            {/* Floating stats card — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-5 -right-5 lg:-right-8 bg-[#12182D] rounded-2xl shadow-xl border border-[#27304F] p-4 flex items-center gap-3 z-20"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#18C7E7]/15 text-[#18C7E7]">
                <TrendingUp className="size-5" />
              </div>
              <div>
                <p className="text-xs text-[#95A0C0] font-medium">Proyectos Activos</p>
                <p className="font-heading text-xl font-black text-[#FFFFFF]">+50</p>
              </div>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 lg:-left-6 bg-gradient-to-r from-[#6A2DBD] to-[#1E88E5] text-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-20"
            >
              <Sparkles className="size-5 text-[#FFE4A3]" />
              <div>
                <p className="text-[11px] font-medium text-white/80">Innovación</p>
                <p className="text-sm font-bold text-white">IA & Automatización</p>
              </div>
            </motion.div>

            <div className="absolute -inset-4 border-2 border-dashed border-[#27304F]/60 rounded-[28px] -z-10 pointer-events-none" aria-hidden="true" />
          </motion.div>

          {/* Text content */}
          <motion.div variants={containerVariants} className="flex flex-col gap-6">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#12182D] border border-[#27304F] px-3.5 py-1.5 text-[11px] font-bold text-[#18C7E7] uppercase tracking-wider">
                <Zap className="size-3 text-[#D9A441]" />
                Ingeniería de Software
              </span>
            </motion.div>

            <motion.h3 variants={itemVariants} className="font-heading text-2xl lg:text-3xl font-bold text-[#FFFFFF] leading-tight">
              Soluciones integrales que transforman la operación de su empresa
            </motion.h3>

            <motion.div variants={itemVariants} className="flex flex-col gap-4 text-[#D8DCE8] text-base leading-relaxed">
              <p className="text-lg text-[#FFFFFF] font-medium">{about.description}</p>
              <p>
                Trabajamos bajo principios de responsabilidad, calidad, innovación y mejora continua,
                garantizando soluciones tecnológicas que generan valor real para cada organización.
              </p>
            </motion.div>

            {/* Values badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 pt-2">
              {about.values.map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-2 rounded-full border border-[#27304F] bg-[#12182D] px-4 py-2 hover:border-[#1E88E5] hover:bg-[#1B2340] transition-all duration-200 cursor-default"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-[#18C7E7]" aria-hidden="true" />
                  <span className="text-sm font-semibold text-[#D8DCE8]">{value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#18C7E7] hover:text-[#1E88E5] hover:gap-3 transition-all duration-200 mt-2 group"
            >
              Conocer más sobre nuestro enfoque
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ========== BLOCK 2: Animated Stats Bar ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative group flex flex-col items-center gap-3 rounded-[20px] border border-[#27304F] bg-[#12182D] p-8 text-center shadow-lg hover:border-[#1E88E5] hover:bg-[#1B2340] transition-all duration-300 overflow-hidden"
              >
                <div className={`flex size-12 items-center justify-center rounded-xl bg-[#050816] border border-[#27304F] ${stat.color}`}>
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                <div className={stat.color}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-sm font-semibold text-[#D8DCE8]">{stat.label}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ========== BLOCK 3: Capability Bars + Innovation Image ========== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24"
        >
          {/* Capability Bars */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#18C7E7]">
                <Activity className="size-4 text-[#D9A441]" aria-hidden="true" />
                Capacidad Técnica & Cobertura
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#FFFFFF]">
                Competencias especializadas de ingeniería
              </h3>
            </div>

            <div className="flex flex-col gap-5 bg-[#12182D] p-6 rounded-[20px] border border-[#27304F]">
              {capabilities.map((item, i) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm font-bold text-[#FFFFFF]">
                    <span>{item.name}</span>
                    <motion.span
                      className="font-mono text-[#18C7E7] font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    >
                      {item.value}%
                    </motion.span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-[#050816] overflow-hidden border border-[#27304F]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Innovation Image */}
          <motion.div variants={scaleInVariants} className="relative">
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl border border-[#27304F]">
              <Image
                src="/images/about/innovation.png"
                alt="Innovación tecnológica y redes neurales IA"
                width={720}
                height={480}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 -right-5 lg:-right-6 bg-[#12182D] rounded-2xl shadow-xl border border-[#27304F] p-4 flex items-center gap-3 z-20"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#6A2DBD]/20 text-[#18C7E7]">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="text-xs text-[#95A0C0] font-medium">Tech Stack</p>
                <p className="font-heading text-base font-bold text-[#FFFFFF]">IA · Cloud · IoT</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ========== BLOCK 4: Mission & Vision with Images ========== */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative flex flex-col overflow-hidden rounded-[20px] border border-[#27304F] bg-[#12182D] shadow-lg hover:border-[#1E88E5] hover:bg-[#1B2340] transition-all duration-300"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src="/images/about/mission.png"
                alt="Misión SLP - Planificación estratégica digital"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/30 to-transparent" />
              <div className="absolute bottom-4 left-5 z-10">
                <span className="text-[11px] font-mono text-[#18C7E7] uppercase font-bold tracking-wider">
                  Propósito Técnico
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mt-0.5">Nuestra Misión</h3>
              </div>
              <div className="absolute top-4 right-4 z-10 flex size-12 items-center justify-center rounded-xl bg-[#1E88E5] text-white shadow-lg">
                <Target className="size-6" aria-hidden="true" />
              </div>
            </div>

            <div className="flex flex-col gap-4 p-7">
              <p className="text-sm text-[#D8DCE8] leading-relaxed">{mission}</p>
              <div className="flex items-center gap-2 pt-2 border-t border-[#27304F]">
                <ShieldCheck className="size-4 text-[#18C7E7]" />
                <span className="text-xs font-semibold text-[#95A0C0]">Compromiso respaldado por contrato</span>
              </div>
            </div>
          </motion.article>

          {/* Vision */}
          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative flex flex-col overflow-hidden rounded-[20px] border border-[#27304F] bg-[#12182D] shadow-lg hover:border-[#1E88E5] hover:bg-[#1B2340] transition-all duration-300"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src="/images/about/vision.png"
                alt="Visión SLP - Infraestructura de red del futuro"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/30 to-transparent" />
              <div className="absolute bottom-4 left-5 z-10">
                <span className="text-[11px] font-mono text-[#F0C96A] uppercase font-bold tracking-wider">
                  Futuro Digital
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mt-0.5">Nuestra Visión</h3>
              </div>
              <div className="absolute top-4 right-4 z-10 flex size-12 items-center justify-center rounded-xl bg-[#6A2DBD] text-white shadow-lg">
                <Eye className="size-6" aria-hidden="true" />
              </div>
            </div>

            <div className="flex flex-col gap-4 p-7">
              <p className="text-sm text-[#D8DCE8] leading-relaxed">{vision}</p>
              <div className="flex items-center gap-2 pt-2 border-t border-[#27304F]">
                <TrendingUp className="size-4 text-[#D9A441]" />
                <span className="text-xs font-semibold text-[#95A0C0]">Transformación digital continua</span>
              </div>
            </div>
          </motion.article>
        </div>

      </div>
    </section>
  )
}
