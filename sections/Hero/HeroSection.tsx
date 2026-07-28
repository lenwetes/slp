"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import {
  ArrowRight,
  Phone,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Layers,
  Pause,
  Play,
  Code2,
  BrainCircuit,
  Headphones,
  Camera,
  Network,
  Lightbulb,
  Monitor,
} from "lucide-react"
import { companyContent } from "@/content/company"
import { services } from "@/content/services"
import {
  serviceStages,
  DashboardSoftware,
  DashboardAI,
  DashboardSupport,
  DashboardCCTV,
  DashboardNetworks,
  DashboardConsulting,
  DashboardEquipment,
} from "./ServiceDashboards"

// Mapeo de dashboards por ID
const dashboardComponents: Record<string, React.ElementType> = {
  "software-development": DashboardSoftware,
  "ai-software": DashboardAI,
  "technical-support": DashboardSupport,
  videosurveillance: DashboardCCTV,
  networks: DashboardNetworks,
  consulting: DashboardConsulting,
  "equipment-sales": DashboardEquipment,
}

// Iconos de servicios
const serviceIcons: Record<string, React.ElementType> = {
  "software-development": Code2,
  "ai-software": BrainCircuit,
  "technical-support": Headphones,
  videosurveillance: Camera,
  networks: Network,
  consulting: Lightbulb,
  "equipment-sales": Monitor,
}

// Easing premium
const easeExpoOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

// Nombres de tecnologías para la franja inferior (marquee)
const techNames = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Node.js",
  "Docker",
  "OpenAI RAG",
  "Vercel Cloud",
  "AWS Enterprise",
  "PostgreSQL",
  "Fortinet UTM",
  "CCTV 4K AI",
]

// Partículas flotantes discretas
const particles = [
  { top: "8%", left: "11%", size: 2, delayIndex: 0 },
  { top: "16%", left: "80%", size: 2, delayIndex: 1 },
  { top: "27%", left: "36%", size: 3, delayIndex: 2 },
  { top: "43%", left: "91%", size: 2, delayIndex: 0 },
  { top: "58%", left: "7%", size: 2, delayIndex: 1 },
  { top: "66%", left: "56%", size: 3, delayIndex: 2 },
  { top: "72%", left: "23%", size: 2, delayIndex: 0 },
  { top: "82%", left: "87%", size: 2, delayIndex: 1 },
]
const particleAnimations = ["animate-float-a", "animate-float-b", "animate-float-c"]
const particleDelays = ["0s", "1.1s", "2.2s"]

export function HeroSection() {
  const { hero } = companyContent
  const [[page, direction], setPage] = useState([0, 0])
  const [isPaused, setIsPaused] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Parallax motion values
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const springConfig = { stiffness: 50, damping: 22, mass: 0.6 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Tilt 3D suave (max ±3.5deg)
  const rotateX = useTransform(smoothY, [0, 1], [3.5, -3.5])
  const rotateY = useTransform(smoothX, [0, 1], [-3.5, 3.5])

  // Desplazamiento spotlight
  const glowX = useTransform(smoothX, [0, 1], [-25, 25])
  const glowY = useTransform(smoothY, [0, 1], [-25, 25])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (prefersReducedMotion) return
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set((e.clientX - rect.left) / rect.width)
      mouseY.set((e.clientY - rect.top) / rect.height)
    },
    [mouseX, mouseY, prefersReducedMotion]
  )

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }, [mouseX, mouseY])

  // Slider state (7 servicios)
  const activeIndex = ((page % serviceStages.length) + serviceStages.length) % serviceStages.length
  const currentStage = serviceStages[activeIndex]
  const currentServiceInfo = services[activeIndex] || services[0]

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection])
  }, [])

  const goToSlide = (index: number) => {
    const newDir = index > activeIndex ? 1 : -1
    setPage([index, newDir])
  }

  // Autoplay de 7 segundos
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => paginate(1), 7000)
    return () => clearInterval(timer)
  }, [isPaused, paginate])

  const ActiveDashboard = dashboardComponents[currentStage.id] || DashboardSoftware
  const ServiceIcon = serviceIcons[currentStage.id] || Code2

  return (
    <section
      id="inicio"
      ref={sectionRef}
      aria-label="Inicio — SLP Soluciones Informáticas"
      className="relative min-h-[95vh] flex flex-col justify-center bg-[#050816] pt-28 pb-12 overflow-hidden bg-tech-grid"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Illumination Glows ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 50%, rgba(30,136,229,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Dynamic Aura Glow per Service */}
      <div
        className="absolute top-1/3 -right-20 w-[38rem] h-[38rem] rounded-full blur-[130px] transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background: currentStage.glowColor,
        }}
        aria-hidden="true"
      />

      {/* Left Purple Aura */}
      <div
        className="absolute top-1/4 -left-32 w-[34rem] h-[34rem] rounded-full bg-[#6A2DBD]/10 blur-[110px] animate-pulse-glow pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Particles */}
      {isMounted &&
        !prefersReducedMotion &&
        particles.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-[#18C7E7]/25 pointer-events-none ${particleAnimations[p.delayIndex]}`}
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: particleDelays[p.delayIndex],
            }}
            aria-hidden="true"
          />
        ))}

      {/* ── Main Layout 40 / 60 ── */}
      <div className="container-slp relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

          {/* ───────────────── 40% Left Column ───────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Status Pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeExpoOut, delay: 0 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#27304F] bg-[#12182D]/80 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-[#FFFFFF] shadow-sm">
                <span className="live-dot" />
                <span className="font-mono text-[11px] text-[#95A0C0]">
                  SLP OS:
                </span>
                <span className="text-[#18C7E7] font-bold">100% Operativo</span>
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27304F] bg-[#12182D]/80 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-[#D8DCE8]">
                <Sparkles className="size-3 text-[#18C7E7]" aria-hidden="true" />
                IA &amp; Cloud Native
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#27304F] bg-[#12182D]/80 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-[#F0C96A]">
                <ShieldCheck className="size-3 text-[#D9A441]" aria-hidden="true" />
                Garantía Directa
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeExpoOut, delay: 0.1 }}
              className="font-heading text-4xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-5xl leading-[1.08]"
            >
              Desarrollamos{" "}
              <span
                className="text-gradient-slp"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(24,199,231,0.22))",
                }}
              >
                soluciones tecnológicas
              </span>{" "}
              inteligentes para su empresa.
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeExpoOut, delay: 0.2 }}
              className="text-base text-[#D8DCE8] leading-relaxed font-normal"
            >
              En SLP transformamos organizaciones optimizando procesos con{" "}
              <strong className="text-[#FFFFFF] font-semibold">
                software a medida
              </strong>
              ,{" "}
              <strong className="text-[#FFFFFF] font-semibold">
                inteligencia artificial
              </strong>
              ,{" "}
              <strong className="text-[#FFFFFF] font-semibold">
                redes empresariales
              </strong>{" "}
              y soporte de alta precisión.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeExpoOut, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <a
                href="#contacto"
                id="hero-primary-cta"
                className="btn-hero-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5] rounded-[14px] relative overflow-hidden group"
              >
                <span className="relative z-10 font-semibold text-white">
                  {hero.primaryCta}
                </span>
                <ArrowRight
                  className="size-4 relative z-10 text-white transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
                <span className="shine-overlay" aria-hidden="true" />
              </a>

              <a
                href="tel:+573214451817"
                id="hero-secondary-cta"
                className="btn-hero-secondary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5] rounded-[14px]"
              >
                <Phone className="size-4 text-[#1E88E5]" aria-hidden="true" />
                <span className="font-semibold">{hero.secondaryCta}</span>
              </a>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeExpoOut, delay: 0.42 }}
              className="grid grid-cols-3 gap-3 pt-5 border-t border-[#27304F]/60 mt-1"
            >
              <div className="flex flex-col">
                <span className="font-heading text-xl font-black text-[#1E88E5]">
                  100%
                </span>
                <p className="text-[11px] text-[#95A0C0] font-semibold">
                  Garantía Directa
                </p>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-black text-[#18C7E7]">
                  7+
                </span>
                <p className="text-[11px] text-[#95A0C0] font-semibold">
                  Servicios 3D
                </p>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-black text-[#D9A441]">
                  24/7
                </span>
                <p className="text-[11px] text-[#95A0C0] font-semibold">
                  Monitoreo Real
                </p>
              </div>
            </motion.div>
          </div>

          {/* ───────────────── 60% Right Column: 3D Stage ───────────────── */}
          <div className="lg:col-span-7 relative lg:pl-4">

            {/* Stage Container */}
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: easeExpoOut, delay: 0.45 }}
              style={{ perspective: "1200px" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="relative"
            >
              {/* Floating Contextual Metrics for active service */}
              <AnimatePresence mode="wait">
                {isMounted &&
                  !prefersReducedMotion &&
                  currentStage.floatingMetrics.map((m) => {
                    const MetricIcon = m.icon
                    return (
                      <motion.div
                        key={`${currentStage.id}-${m.id}`}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -10 }}
                        transition={{ duration: 0.4, ease: easeExpoOut }}
                        className={`absolute ${m.position} z-30 hidden lg:flex items-center gap-2 glass-chip animate-float-a`}
                        aria-hidden="true"
                      >
                        <MetricIcon className={`size-3.5 ${m.color}`} />
                        <div className="flex flex-col text-[10px]">
                          <span className="text-[#95A0C0] leading-none">{m.label}</span>
                          <span className="font-bold text-white font-mono leading-tight">{m.value}</span>
                        </div>
                      </motion.div>
                    )
                  })}
              </AnimatePresence>

              {/* Parallax Wrapper */}
              <motion.div
                style={
                  prefersReducedMotion
                    ? {}
                    : {
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                      }
                }
                className="relative"
              >
                {/* Glow Spotlight behind dashboard */}
                <motion.div
                  className="absolute -inset-4 rounded-[32px] pointer-events-none transition-all duration-700"
                  style={
                    prefersReducedMotion
                      ? {}
                      : {
                          translateX: glowX,
                          translateY: glowY,
                          background: currentStage.glowColor,
                          filter: "blur(40px)",
                        }
                  }
                  aria-hidden="true"
                />

                {/* Main 3D Dashboard Card */}
                <div
                  className="rounded-[22px] border border-[#27304F]/80 bg-[#0D1428]/95 backdrop-blur-md p-4 sm:p-5 relative overflow-hidden"
                  style={{
                    boxShadow:
                      "0 24px 64px -10px rgba(5,8,22,0.9), 0 0 0 1px rgba(39,48,79,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Top Edge Highlight */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px pointer-events-none transition-colors duration-700"
                    style={{
                      background: `linear-gradient(90deg, transparent 5%, ${currentStage.accentColor} 50%, transparent 95%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Stage Control Header */}
                  <div className="flex items-center justify-between border-b border-[#27304F]/60 pb-3 mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="flex size-8 items-center justify-center rounded-lg text-white shadow-md transition-colors duration-500"
                        style={{
                          backgroundColor: currentStage.accentColor,
                        }}
                      >
                        <ServiceIcon className="size-4" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-heading text-xs font-extrabold text-[#FFFFFF] uppercase tracking-wider">
                          {currentStage.title}
                        </span>
                        <span className="text-[10px] text-[#95A0C0] font-medium">
                          {currentStage.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full ${currentStage.badgeBg} border ${currentStage.badgeBorder} px-2.5 py-0.5 text-[11px] font-mono font-bold ${currentStage.badgeText}`}
                      >
                        0{activeIndex + 1} / 0{serviceStages.length}
                      </span>

                      <button
                        type="button"
                        onClick={() => setIsPaused(!isPaused)}
                        aria-label={isPaused ? "Reanudar rotación" : "Pausar rotación"}
                        className="p-1 rounded-md text-[#95A0C0] hover:text-[#FFFFFF] hover:bg-[#1B2340] transition-colors"
                      >
                        {isPaused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Dashboard Visual Stage Area (Cinematic Transition) */}
                  <div className="relative min-h-[310px] sm:min-h-[330px] flex flex-col justify-between overflow-hidden rounded-xl">
                    <AnimatePresence custom={direction} mode="wait">
                      <motion.div
                        key={page}
                        custom={direction}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                        transition={{ duration: 0.45, ease: easeExpoOut }}
                        className="w-full h-[270px] sm:h-[290px]"
                      >
                        <ActiveDashboard />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Stage Bottom Bar & Controls */}
                  <div className="pt-3 border-t border-[#27304F]/60 flex items-center justify-between gap-3 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-[#D8DCE8] font-semibold truncate max-w-[200px]">
                        {currentServiceInfo.title}
                      </span>
                      <a
                        href="#servicios"
                        className="text-[10px] text-[#18C7E7] hover:text-[#1E88E5] font-bold inline-flex items-center gap-1 transition-colors"
                      >
                        Saber más →
                      </a>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => paginate(-1)}
                        aria-label="Servicio anterior"
                        className="p-1.5 rounded-full border border-[#27304F] bg-[#12182D] text-[#FFFFFF] hover:bg-[#1B2340] hover:border-[#1E88E5] hover:text-[#18C7E7] transition-all shadow-sm active:scale-95"
                      >
                        <ChevronLeft className="size-4" />
                      </button>

                      {/* Dot Progress Indicators */}
                      <div className="flex items-center gap-1 px-1">
                        {serviceStages.map((s, idx) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => goToSlide(idx)}
                            aria-label={`Ir al servicio ${idx + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx === activeIndex
                                ? "w-5 bg-[#18C7E7]"
                                : "w-2 bg-[#27304F] hover:bg-[#95A0C0]"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => paginate(1)}
                        aria-label="Siguiente servicio"
                        className="p-1.5 rounded-full border border-[#27304F] bg-[#12182D] text-[#FFFFFF] hover:bg-[#1B2340] hover:border-[#1E88E5] hover:text-[#18C7E7] transition-all shadow-sm active:scale-95"
                      >
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  </div>

                  {/* Autoplay Progress Timer Bar */}
                  {!isPaused && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#27304F]/40 overflow-hidden">
                      <div
                        key={page}
                        className="h-full bg-gradient-to-r from-[#1E88E5] via-[#18C7E7] to-[#D9A441] animate-[progress-timer_7s_linear_forwards]"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── Social Proof / Technology Marquee ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeExpoOut, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-[#27304F]/40"
        >
          <p className="text-center text-[10px] text-[#66708E] font-medium uppercase tracking-[0.2em] mb-6">
            Stack Tecnológico Empresarial SLP
          </p>

          <div className="overflow-hidden relative" aria-hidden="true">
            {/* Fade Edges */}
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, #050816 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(270deg, #050816 0%, transparent 100%)",
              }}
            />

            {/* Marquee Track */}
            <div className="marquee-track">
              {[...techNames, ...techNames].map((name, i) => (
                <span
                  key={i}
                  className="text-xs font-bold text-[#FFFFFF]/35 hover:text-[#FFFFFF]/80 transition-colors duration-300 cursor-default select-none font-heading tracking-wide whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
