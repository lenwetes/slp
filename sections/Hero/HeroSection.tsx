"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Phone,
  Code2,
  BrainCircuit,
  Network,
  Camera,
  Server,
  CheckCircle2,
  Activity,
  Terminal,
  Layers,
  Zap,
} from "lucide-react"
import { companyContent } from "@/content/company"

const ecosystemNodes = [
  {
    id: "software",
    label: "Software",
    icon: Code2,
    step: "01",
    metric: "100% Personalizado",
    detail: "Desarrollo a medida, Web & Mobile, Arquitectura Cloud",
    tech: "Next.js 15, React 19, TypeScript, PostgreSQL",
  },
  {
    id: "ia",
    label: "IA & Automatización",
    icon: BrainCircuit,
    step: "02",
    metric: "Modelos & Chatbots",
    detail: "Asistentes virtuales, Automatización inteligente y Análisis predictivo",
    tech: "LLM, RAG, OpenAI, Python, Data Pipelines",
  },
  {
    id: "redes",
    label: "Redes Empresariales",
    icon: Network,
    step: "03",
    metric: "Gigabit LAN / WLAN",
    detail: "Cableado estructurado, Racks, Switches y Seguridad Firewall",
    tech: "VLANs, Ubiquiti, Mikrotik, Cisco, Fortinet",
  },
  {
    id: "videovigilancia",
    label: "Videovigilancia IP",
    icon: Camera,
    step: "04",
    metric: "Cámaras IP & NVR",
    detail: "Monitoreo remoto 24/7, Análisis de video y DVR/NVR empresarial",
    tech: "Dahua, Hikvision, IP 4K, AI Motion Detect",
  },
  {
    id: "infraestructura",
    label: "Infraestructura TI",
    icon: Server,
    step: "05",
    metric: "Soporte Remoto & Presencial",
    detail: "Mantenimiento preventivo, Servidores y Optimización de Equipos",
    tech: "Windows Server, Linux, RAID, Backup 3-2-1",
  },
  {
    id: "resultados",
    label: "Resultados Garantizados",
    icon: CheckCircle2,
    step: "06",
    metric: "Transformación Digital",
    detail: "Eficiencia operativa, Crecimiento sostenido y Garantía directas",
    tech: "KPIs Medibles, SLA Garantizado, Soporte Continuo",
  },
]

export function HeroSection() {
  const { hero } = companyContent
  const [activeNode, setActiveNode] = useState(ecosystemNodes[0])

  return (
    <section
      id="inicio"
      aria-label="Inicio — SLP Soluciones Informáticas"
      className="relative min-h-[92vh] flex flex-col justify-center bg-[#FAFAFA] pt-28 pb-20 overflow-hidden bg-tech-grid"
    >
      {/* Background radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 60% 30%, rgba(30, 78, 216, 0.05) 0%, rgba(250, 250, 250, 0.8) 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container-slp relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Heading + CTAs + Live Status Badge (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Live Operational Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.05 }}
              className="flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-1.5 text-xs font-semibold text-[#111827] shadow-xs">
                <span className="live-dot" />
                <span className="font-mono text-[11px] text-[#6B7280]">ESTADO:</span>
                <span className="text-[#16A34A] font-semibold">100% Operativo</span>
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-[#F6F7F9] px-3.5 py-1 text-[11px] font-mono text-[#6B7280]">
                <Activity className="size-3 text-[#1E4ED8]" aria-hidden="true" />
                SLA & Soporte 24/7
              </span>
            </motion.div>

            {/* Main Headline with Accent Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.1 }}
              className="font-heading text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl leading-[1.08]"
            >
              Desarrollamos{" "}
              <span className="text-gradient-primary">soluciones tecnológicas</span>{" "}
              inteligentes para su empresa.
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.15 }}
              className="text-base text-[#6B7280] sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              En SLP impulsamos a empresas y negocios optimizando procesos mediante{" "}
              <strong className="text-[#111827]">software a medida</strong>,{" "}
              <strong className="text-[#111827]">inteligencia artificial</strong>,{" "}
              <strong className="text-[#111827]">redes empresariales</strong> y soporte de alta precisión.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#contacto"
                id="hero-primary-cta"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
              >
                {hero.primaryCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>

              <a
                href="tel:+573214451817"
                id="hero-secondary-cta"
                className="btn-secondary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
              >
                <Phone className="size-4 text-[#1E4ED8]" aria-hidden="true" />
                {hero.secondaryCta}
              </a>
            </motion.div>

            {/* Quick stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.18, delay: 0.25 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E5E7EB] mt-2 max-w-xl"
            >
              <div>
                <span className="font-heading text-xl font-bold text-[#1E4ED8]">100%</span>
                <p className="text-xs text-[#6B7280] font-medium">Garantía Directa</p>
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-[#111827]">7+</span>
                <p className="text-xs text-[#6B7280] font-medium">Líneas de Ingeniería</p>
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-[#6D28D9]">24/7</span>
                <p className="text-xs text-[#6B7280] font-medium">Monitoreo & Soporte</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Architectural Node Diagram (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.18, delay: 0.2 }}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-md"
            >
              {/* Header inside diagram */}
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-[#1E4ED8]/10 text-[#1E4ED8]">
                    <Layers className="size-4" aria-hidden="true" />
                  </div>
                  <span className="font-heading text-xs font-bold text-[#111827] uppercase tracking-wider">
                    Ecosistema Tecnológico
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#1E4ED8] animate-pulse" />
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase">Arquitectura SLP</span>
                </div>
              </div>

              {/* Connected Nodes List */}
              <div className="flex flex-col gap-2.5">
                {ecosystemNodes.map((node) => {
                  const Icon = node.icon
                  const isActive = activeNode.id === node.id

                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNode(node)}
                      className={`w-full flex items-center justify-between rounded-xl p-3 text-left transition-all duration-180 border ${
                        isActive
                          ? "bg-[#1E4ED8] text-white border-[#1E4ED8] shadow-sm"
                          : "bg-[#F6F7F9] text-[#111827] border-[#E5E7EB] hover:border-[#1E4ED8]/40 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex size-8 items-center justify-center rounded-lg ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-white text-[#1E4ED8] border border-[#E5E7EB]"
                          }`}
                        >
                          <Icon className="size-4" aria-hidden="true" />
                        </div>
                        <div className="flex flex-col leading-tight">
                          <span className="text-sm font-bold">{node.label}</span>
                          <span
                            className={`text-[11px] ${
                              isActive ? "text-white/80" : "text-[#6B7280]"
                            }`}
                          >
                            {node.metric}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-semibold ${
                            isActive ? "text-white/90" : "text-[#6B7280]"
                          }`}
                        >
                          {node.step}
                        </span>
                        <Zap
                          className={`size-3.5 ${
                            isActive ? "text-[#C8A447]" : "text-[#6B7280]/40"
                          }`}
                        />
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Dynamic Detail Card for Selected Node */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="mt-5 rounded-xl border border-[#E5E7EB] bg-[#F6F7F9] p-4 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-[#111827]">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="size-3.5 text-[#1E4ED8]" aria-hidden="true" />
                      {activeNode.label}
                    </span>
                    <span className="font-mono text-[10px] text-[#1E4ED8] bg-[#1E4ED8]/10 px-2 py-0.5 rounded-full">
                      SLP Stack
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] font-normal leading-relaxed">
                    {activeNode.detail}
                  </p>
                  <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                    <span>Tecnología:</span>
                    <span className="text-[#111827] font-semibold">{activeNode.tech}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
