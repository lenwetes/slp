"use client"

import {
  Code2,
  BrainCircuit,
  Headphones,
  Camera,
  Network,
  Lightbulb,
  Monitor,
  CheckCircle2,
  ShieldAlert,
  Cpu,
  HardDrive,
  Activity,
  Server,
  TrendingUp,
  Terminal,
  Sparkles,
  Zap,
  Lock,
  Wifi,
  BarChart3,
  Bot,
  User,
  ArrowUpRight,
} from "lucide-react"

// Interface para los dashboards de servicios
export interface ServiceStageConfig {
  id: string
  title: string
  subtitle: string
  accentColor: string
  glowColor: string
  badgeBg: string
  badgeBorder: string
  badgeText: string
  floatingMetrics: {
    id: string
    label: string
    value: string
    icon: React.ElementType
    color: string
    position: string
    delay: string
  }[]
}

export const serviceStages: ServiceStageConfig[] = [
  {
    id: "software-development",
    title: "Desarrollo de Software",
    subtitle: "Sistemas Empresariales & Cloud Apps",
    accentColor: "#1E88E5",
    glowColor: "rgba(30, 136, 229, 0.22)",
    badgeBg: "bg-[#1E88E5]/15",
    badgeBorder: "border-[#1E88E5]/40",
    badgeText: "text-[#18C7E7]",
    floatingMetrics: [
      {
        id: "m1",
        label: "Build Status",
        value: "Passing ✓",
        icon: CheckCircle2,
        color: "text-emerald-400",
        position: "-top-4 -left-4",
        delay: "0s",
      },
      {
        id: "m2",
        label: "Code Coverage",
        value: "98.4%",
        icon: Code2,
        color: "text-[#18C7E7]",
        position: "top-1/3 -right-6",
        delay: "1.2s",
      },
      {
        id: "m3",
        label: "Response Time",
        value: "18ms",
        icon: Zap,
        color: "text-amber-400",
        position: "-bottom-4 left-6",
        delay: "2.4s",
      },
    ],
  },
  {
    id: "ai-software",
    title: "Software con IA",
    subtitle: "Agentes RAG & Automatización Cognitiva",
    accentColor: "#6A2DBD",
    glowColor: "rgba(106, 45, 189, 0.26)",
    badgeBg: "bg-[#6A2DBD]/20",
    badgeBorder: "border-[#6A2DBD]/40",
    badgeText: "text-[#18C7E7]",
    floatingMetrics: [
      {
        id: "m1",
        label: "Precisión LLM",
        value: "99.2%",
        icon: BrainCircuit,
        color: "text-purple-400",
        position: "-top-4 -right-4",
        delay: "0.5s",
      },
      {
        id: "m2",
        label: "Tokens / sec",
        value: "142 t/s",
        icon: Sparkles,
        color: "text-[#18C7E7]",
        position: "bottom-1/3 -left-6",
        delay: "1.7s",
      },
      {
        id: "m3",
        label: "Procesos Auto",
        value: "2,480 / día",
        icon: Activity,
        color: "text-emerald-400",
        position: "-bottom-4 right-8",
        delay: "2.9s",
      },
    ],
  },
  {
    id: "technical-support",
    title: "Soporte Técnico",
    subtitle: "Monitoreo 24/7 & Mantenimiento Proactivo",
    accentColor: "#18C7E7",
    glowColor: "rgba(24, 199, 231, 0.20)",
    badgeBg: "bg-[#18C7E7]/15",
    badgeBorder: "border-[#18C7E7]/40",
    badgeText: "text-[#18C7E7]",
    floatingMetrics: [
      {
        id: "m1",
        label: "System Uptime",
        value: "99.99%",
        icon: Server,
        color: "text-[#18C7E7]",
        position: "-top-4 left-8",
        delay: "0.3s",
      },
      {
        id: "m2",
        label: "Tiempo Resp.",
        value: "< 5 min",
        icon: Headphones,
        color: "text-emerald-400",
        position: "top-1/2 -right-6",
        delay: "1.5s",
      },
      {
        id: "m3",
        label: "Casos Resueltos",
        value: "100%",
        icon: CheckCircle2,
        color: "text-blue-400",
        position: "-bottom-4 left-4",
        delay: "2.7s",
      },
    ],
  },
  {
    id: "videosurveillance",
    title: "Videovigilancia IP",
    subtitle: "CCTV Inteligente & Analítica de Video",
    accentColor: "#D9A441",
    glowColor: "rgba(217, 164, 65, 0.22)",
    badgeBg: "bg-[#D9A441]/15",
    badgeBorder: "border-[#D9A441]/40",
    badgeText: "text-[#F0C96A]",
    floatingMetrics: [
      {
        id: "m1",
        label: "Cámaras IP",
        value: "4K HD Live",
        icon: Camera,
        color: "text-amber-400",
        position: "-top-4 -left-4",
        delay: "0.8s",
      },
      {
        id: "m2",
        label: "Detección IA",
        value: "Activa 🟢",
        icon: Lock,
        color: "text-emerald-400",
        position: "bottom-1/3 -right-6",
        delay: "2.0s",
      },
      {
        id: "m3",
        label: "Almacenamiento",
        value: "30 Días NVR",
        icon: HardDrive,
        color: "text-[#18C7E7]",
        position: "-bottom-4 left-10",
        delay: "3.1s",
      },
    ],
  },
  {
    id: "networks",
    title: "Redes LAN & WLAN",
    subtitle: "Infraestructura de Alta Velocidad & Ciberseguridad",
    accentColor: "#1E88E5",
    glowColor: "rgba(30, 136, 229, 0.20)",
    badgeBg: "bg-[#1E88E5]/15",
    badgeBorder: "border-[#1E88E5]/40",
    badgeText: "text-[#18C7E7]",
    floatingMetrics: [
      {
        id: "m1",
        label: "Velocidad Red",
        value: "10 Gbps",
        icon: Wifi,
        color: "text-[#18C7E7]",
        position: "-top-4 right-10",
        delay: "0.4s",
      },
      {
        id: "m2",
        label: "Latencia",
        value: "1.2 ms",
        icon: Activity,
        color: "text-emerald-400",
        position: "top-1/3 -left-6",
        delay: "1.6s",
      },
      {
        id: "m3",
        label: "Firewall UTM",
        value: "Protegido",
        icon: ShieldAlert,
        color: "text-amber-400",
        position: "-bottom-4 right-6",
        delay: "2.8s",
      },
    ],
  },
  {
    id: "consulting",
    title: "Consultoría Tecnológica",
    subtitle: "Auditoría & Plan de Transformación Digital",
    accentColor: "#6A2DBD",
    glowColor: "rgba(106, 45, 189, 0.20)",
    badgeBg: "bg-[#6A2DBD]/20",
    badgeBorder: "border-[#6A2DBD]/40",
    badgeText: "text-[#F0C96A]",
    floatingMetrics: [
      {
        id: "m1",
        label: "ROI Estimado",
        value: "+320%",
        icon: TrendingUp,
        color: "text-emerald-400",
        position: "-top-4 left-6",
        delay: "0.6s",
      },
      {
        id: "m2",
        label: "Ahorro Costos",
        value: "-45%",
        icon: BarChart3,
        color: "text-[#18C7E7]",
        position: "top-1/2 -right-6",
        delay: "1.8s",
      },
      {
        id: "m3",
        label: "Madurez Digital",
        value: "Nivel 5/5",
        icon: Lightbulb,
        color: "text-amber-400",
        position: "-bottom-4 left-8",
        delay: "3.0s",
      },
    ],
  },
  {
    id: "equipment-sales",
    title: "Venta de Equipos",
    subtitle: "Hardware Empresarial con Garantía Directa",
    accentColor: "#D9A441",
    glowColor: "rgba(217, 164, 65, 0.22)",
    badgeBg: "bg-[#D9A441]/15",
    badgeBorder: "border-[#D9A441]/40",
    badgeText: "text-[#F0C96A]",
    floatingMetrics: [
      {
        id: "m1",
        label: "Garantía SLP",
        value: "Directa 100%",
        icon: Monitor,
        color: "text-amber-400",
        position: "-top-4 right-4",
        delay: "0.2s",
      },
      {
        id: "m2",
        label: "Disponibilidad",
        value: "Stock Inmediato",
        icon: CheckCircle2,
        color: "text-emerald-400",
        position: "bottom-1/3 -left-6",
        delay: "1.4s",
      },
      {
        id: "m3",
        label: "Soporte Incluido",
        value: "Gratis 1 año",
        icon: Headphones,
        color: "text-[#18C7E7]",
        position: "-bottom-4 right-10",
        delay: "2.6s",
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────
// COMPONENTES INDIVIDUALES DE DASHBOARDS (JSX/SVG Puro)
// ─────────────────────────────────────────────────────────────

// 1. Dashboard: Desarrollo de Software (IDE Editor)
export function DashboardSoftware() {
  return (
    <div className="w-full h-full flex flex-col font-mono text-xs text-[#D8DCE8] bg-[#090D1E] rounded-xl overflow-hidden border border-[#27304F]">
      {/* IDE Tab Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#0C1226] border-b border-[#27304F]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 text-[11px] text-[#95A0C0] font-sans flex items-center gap-1">
            <Terminal className="size-3 text-[#18C7E7]" />
            slp-core-api.ts
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          TypeScript 5.4
        </span>
      </div>

      {/* Code Area */}
      <div className="p-4 flex-1 space-y-2 overflow-hidden leading-relaxed">
        <div className="text-[#95A0C0]">// SLP Enterprise Architecture</div>
        <div>
          <span className="text-purple-400">export async function</span>{" "}
          <span className="text-blue-400">deployModule</span>
          <span className="text-amber-300">(config: SLPConfig)</span> {"{"}
        </div>
        <div className="pl-4">
          <span className="text-[#95A0C0]">// Auto-scaling microservices</span>
        </div>
        <div className="pl-4">
          <span className="text-purple-400">const</span> engine ={" "}
          <span className="text-purple-400">new</span>{" "}
          <span className="text-cyan-300">EnterpriseEngine</span>(config);
        </div>
        <div className="pl-4">
          <span className="text-purple-400">await</span> engine.
          <span className="text-blue-400">optimizeProcess</span>({"{"}
        </div>
        <div className="pl-8 text-amber-200">
          security: <span className="text-emerald-400">&quot;AES-256-GCM&quot;</span>,
        </div>
        <div className="pl-8 text-amber-200">
          aiAgents: <span className="text-purple-400">true</span>,
        </div>
        <div className="pl-8 text-amber-200">
          cloudProvider: <span className="text-emerald-400">&quot;AWS-Enterprise&quot;</span>
        </div>
        <div className="pl-4">{"}"});</div>
        <div className="pl-4 flex items-center gap-1 text-emerald-400">
          return engine.getStatus();
          <span
            className="w-1.5 h-4 bg-[#18C7E7] inline-block animate-[blink-cursor_1s_infinite]"
          />
        </div>
        <div>{"}"}</div>
      </div>

      {/* Mini Terminal Footer */}
      <div className="px-3 py-2 bg-[#070A18] border-t border-[#27304F] flex items-center justify-between text-[10px]">
        <span className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Server: Connected (24ms)
        </span>
        <span className="text-[#95A0C0]">UTF-8 • LN 14, COL 32</span>
      </div>
    </div>
  )
}

// 2. Dashboard: IA Empresarial (Chatbot & RAG Analytics)
export function DashboardAI() {
  return (
    <div className="w-full h-full flex flex-col text-xs text-[#D8DCE8] bg-[#090D1E] rounded-xl overflow-hidden border border-[#27304F]">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-[#0C1226] border-b border-[#27304F]">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Bot className="size-3.5" />
          </div>
          <span className="font-semibold text-white">SLP AI Copilot v3</span>
        </div>
        <span className="text-[10px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded border border-purple-500/30">
          Modelo: RAG-Enterprise
        </span>
      </div>

      {/* Chat Conversation */}
      <div className="p-3.5 flex-1 flex flex-col gap-3 justify-between overflow-hidden">
        {/* User Bubble */}
        <div className="flex gap-2 justify-end">
          <div className="bg-[#1E88E5]/20 border border-[#1E88E5]/40 rounded-2xl rounded-tr-none p-2.5 max-w-[85%] text-[11px] text-white">
            Genera reporte ejecutivo de ventas y optimiza costos del Q3.
          </div>
          <div className="size-6 rounded-full bg-[#1E88E5] flex items-center justify-center shrink-0 text-white">
            <User className="size-3.5" />
          </div>
        </div>

        {/* AI Response Bubble */}
        <div className="flex gap-2">
          <div className="size-6 rounded-full bg-purple-600 flex items-center justify-center shrink-0 text-white shadow-lg shadow-purple-600/30">
            <Bot className="size-3.5" />
          </div>
          <div className="bg-[#12182D] border border-[#27304F] rounded-2xl rounded-tl-none p-3 max-w-[88%] text-[11px] space-y-2">
            <p className="text-purple-300 font-semibold flex items-center gap-1">
              <Sparkles className="size-3 text-[#18C7E7]" />
              Análisis IA completado (0.24s):
            </p>
            <div className="bg-[#050816] p-2 rounded border border-[#27304F] space-y-1 font-mono text-[10px]">
              <div className="flex justify-between">
                <span className="text-[#95A0C0]">Margen Operativo:</span>
                <span className="text-emerald-400 font-bold">+34.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#95A0C0]">Procesos Automatizados:</span>
                <span className="text-[#18C7E7]">1,420 horas/mes</span>
              </div>
            </div>
            {/* Progress indicator */}
            <div className="w-full bg-[#050816] h-1.5 rounded-full overflow-hidden border border-[#27304F]">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[88%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Input Prompt Box */}
      <div className="p-2.5 bg-[#070A18] border-t border-[#27304F] flex items-center gap-2">
        <input
          type="text"
          readOnly
          value="Consulta en tiempo real a la base de datos empresarial..."
          className="w-full bg-[#12182D] border border-[#27304F] rounded-lg px-3 py-1.5 text-[10px] text-[#95A0C0] outline-none"
        />
        <button type="button" aria-label="Enviar consulta" className="p-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors">
          <ArrowUpRight className="size-3.5" />
        </button>
      </div>
    </div>
  )
}

// 3. Dashboard: Soporte Técnico (Server Health Monitor)
export function DashboardSupport() {
  return (
    <div className="w-full h-full flex flex-col text-xs text-[#D8DCE8] bg-[#090D1E] rounded-xl overflow-hidden border border-[#27304F]">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-[#0C1226] border-b border-[#27304F]">
        <div className="flex items-center gap-2">
          <Activity className="size-4 text-[#18C7E7]" />
          <span className="font-semibold text-white">SLP System Monitor</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Servidor Principal: OK
        </div>
      </div>

      {/* Real-time Metrics Grid */}
      <div className="p-3.5 flex-1 grid grid-cols-2 gap-3">
        {/* CPU Box */}
        <div className="bg-[#12182D] border border-[#27304F] rounded-lg p-2.5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[11px] text-[#95A0C0]">
            <span className="flex items-center gap-1">
              <Cpu className="size-3 text-cyan-400" /> CPU Load
            </span>
            <span className="font-mono text-cyan-400 font-bold">24%</span>
          </div>
          <div className="w-full bg-[#050816] h-2 rounded-full overflow-hidden border border-[#27304F] my-1">
            <div className="bg-cyan-400 h-full w-[24%]" />
          </div>
          <span className="text-[9px] text-[#95A0C0]">16 Cores • 3.8 GHz</span>
        </div>

        {/* RAM Box */}
        <div className="bg-[#12182D] border border-[#27304F] rounded-lg p-2.5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[11px] text-[#95A0C0]">
            <span className="flex items-center gap-1">
              <HardDrive className="size-3 text-purple-400" /> RAM Usage
            </span>
            <span className="font-mono text-purple-400 font-bold">42%</span>
          </div>
          <div className="w-full bg-[#050816] h-2 rounded-full overflow-hidden border border-[#27304F] my-1">
            <div className="bg-purple-400 h-full w-[42%]" />
          </div>
          <span className="text-[9px] text-[#95A0C0]">26.8 GB / 64 GB DDR5</span>
        </div>

        {/* Recent Tickets List */}
        <div className="col-span-2 bg-[#12182D] border border-[#27304F] rounded-lg p-2.5 space-y-1.5">
          <span className="text-[10px] uppercase font-bold text-[#95A0C0] block">
            Cola de Mantenimiento Preventivo
          </span>
          <div className="flex justify-between items-center text-[10px] bg-[#050816] p-1.5 rounded border border-[#27304F]">
            <span className="text-white flex items-center gap-1">
              <CheckCircle2 className="size-3 text-emerald-400" />
              Backup Automático Base de Datos
            </span>
            <span className="text-emerald-400 font-mono">Completado</span>
          </div>
          <div className="flex justify-between items-center text-[10px] bg-[#050816] p-1.5 rounded border border-[#27304F]">
            <span className="text-white flex items-center gap-1">
              <CheckCircle2 className="size-3 text-emerald-400" />
              Parches de Seguridad SO
            </span>
            <span className="text-emerald-400 font-mono">Actualizado</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// 4. Dashboard: Videovigilancia (CCTV Grid Live Feed)
export function DashboardCCTV() {
  return (
    <div className="w-full h-full flex flex-col text-xs text-[#D8DCE8] bg-[#090D1E] rounded-xl overflow-hidden border border-[#27304F]">
      {/* Top CCTV Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#0C1226] border-b border-[#27304F]">
        <div className="flex items-center gap-2">
          <Camera className="size-3.5 text-amber-400" />
          <span className="font-semibold text-white">SLP Security Matrix</span>
        </div>
        <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
          LIVE NVR FEED
        </span>
      </div>

      {/* 4 Camera Grid */}
      <div className="p-2 flex-1 grid grid-cols-2 gap-2 relative">
        {/* Scanning Line FX */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#18C7E7]/10 to-transparent h-6 pointer-events-none z-10 animate-[cctv-scan_4s_linear_infinite]"
        />

        {/* Cam 1 */}
        <div className="bg-[#050816] border border-[#27304F] rounded-lg relative overflow-hidden flex flex-col justify-between p-2">
          <div className="flex justify-between items-center text-[9px] font-mono text-amber-400 z-10">
            <span>CAM-01 [RECEPCIÓN]</span>
            <span className="bg-rose-500/80 text-white px-1 rounded">REC</span>
          </div>
          <div className="w-full h-12 flex items-center justify-center opacity-30">
            <User className="size-8 text-[#95A0C0]" />
          </div>
          <span className="text-[8px] font-mono text-[#95A0C0]">30 FPS • 4K</span>
        </div>

        {/* Cam 2 */}
        <div className="bg-[#050816] border border-[#27304F] rounded-lg relative overflow-hidden flex flex-col justify-between p-2">
          <div className="flex justify-between items-center text-[9px] font-mono text-cyan-400 z-10">
            <span>CAM-02 [DATA CENTER]</span>
            <span className="bg-emerald-500/80 text-white px-1 rounded">OK</span>
          </div>
          <div className="w-full h-12 flex items-center justify-center opacity-30">
            <Server className="size-8 text-[#95A0C0]" />
          </div>
          <span className="text-[8px] font-mono text-[#95A0C0]">Sens. Temp: 21°C</span>
        </div>

        {/* Cam 3 */}
        <div className="bg-[#050816] border border-[#27304F] rounded-lg relative overflow-hidden flex flex-col justify-between p-2">
          <div className="flex justify-between items-center text-[9px] font-mono text-emerald-400 z-10">
            <span>CAM-03 [PERÍMETRO]</span>
            <span className="bg-emerald-500/80 text-white px-1 rounded">OK</span>
          </div>
          <div className="w-full h-12 flex items-center justify-center opacity-30">
            <Lock className="size-8 text-[#95A0C0]" />
          </div>
          <span className="text-[8px] font-mono text-[#95A0C0]">IR Nocturno Activo</span>
        </div>

        {/* Cam 4 */}
        <div className="bg-[#050816] border border-[#27304F] rounded-lg relative overflow-hidden flex flex-col justify-between p-2">
          <div className="flex justify-between items-center text-[9px] font-mono text-purple-400 z-10">
            <span>CAM-04 [PARQUEADERO]</span>
            <span className="bg-emerald-500/80 text-white px-1 rounded">OK</span>
          </div>
          <div className="w-full h-12 flex items-center justify-center opacity-30">
            <Activity className="size-8 text-[#95A0C0]" />
          </div>
          <span className="text-[8px] font-mono text-[#95A0C0]">AI Motion Detect</span>
        </div>
      </div>
    </div>
  )
}

// 5. Dashboard: Redes LAN/WLAN (Network Topology Map)
export function DashboardNetworks() {
  return (
    <div className="w-full h-full flex flex-col text-xs text-[#D8DCE8] bg-[#090D1E] rounded-xl overflow-hidden border border-[#27304F]">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-[#0C1226] border-b border-[#27304F]">
        <div className="flex items-center gap-2">
          <Network className="size-4 text-[#1E88E5]" />
          <span className="font-semibold text-white">Topología de Red Empresarial</span>
        </div>
        <span className="text-[10px] font-mono text-[#18C7E7] bg-[#1E88E5]/15 px-2 py-0.5 rounded border border-[#1E88E5]/30">
          VLAN 10 • 10 Gbps
        </span>
      </div>

      {/* SVG Network Canvas */}
      <div className="p-3 flex-1 relative flex items-center justify-center">
        <svg className="w-full h-full max-h-[190px]" viewBox="0 0 300 160">
          {/* Lines */}
          <line x1="150" y1="30" x2="70" y2="80" stroke="#27304F" strokeWidth="2" />
          <line x1="150" y1="30" x2="150" y2="80" stroke="#1E88E5" strokeWidth="2" strokeDasharray="4" />
          <line x1="150" y1="30" x2="230" y2="80" stroke="#27304F" strokeWidth="2" />
          <line x1="70" y1="80" x2="50" y2="130" stroke="#27304F" strokeWidth="1.5" />
          <line x1="70" y1="80" x2="90" y2="130" stroke="#27304F" strokeWidth="1.5" />
          <line x1="230" y1="80" x2="230" y2="130" stroke="#18C7E7" strokeWidth="1.5" />

          {/* Central Router Node */}
          <g transform="translate(150,30)">
            <circle r="16" fill="#12182D" stroke="#1E88E5" strokeWidth="2" />
            <circle r="22" fill="none" stroke="#18C7E7" strokeWidth="1" opacity="0.4" className="animate-[network-pulse_2s_infinite]" />
            <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">UTM Core</text>
          </g>

          {/* Switch 1 */}
          <g transform="translate(70,80)">
            <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#0C1226" stroke="#27304F" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fill="#95A0C0" fontSize="8">SW-01</text>
          </g>

          {/* Switch 2 */}
          <g transform="translate(150,80)">
            <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#0C1226" stroke="#1E88E5" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fill="#18C7E7" fontSize="8">AP WiFi</text>
          </g>

          {/* Firewall Node */}
          <g transform="translate(230,80)">
            <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#0C1226" stroke="#27304F" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fill="#95A0C0" fontSize="8">SW-02</text>
          </g>

          {/* End Devices */}
          <circle cx="50" cy="130" r="6" fill="#18C7E7" />
          <circle cx="90" cy="130" r="6" fill="#18C7E7" />
          <circle cx="230" cy="130" r="6" fill="#emerald-400" />
        </svg>
      </div>

      {/* Footer Info */}
      <div className="px-3 py-2 bg-[#070A18] border-t border-[#27304F] flex justify-between text-[10px] text-[#95A0C0]">
        <span>Firewall Fortinet: Protegido</span>
        <span className="text-emerald-400">Cableado Categoría 6A OK</span>
      </div>
    </div>
  )
}

// 6. Dashboard: Consultoría Tecnológica (Analytics & ROI Chart)
export function DashboardConsulting() {
  return (
    <div className="w-full h-full flex flex-col text-xs text-[#D8DCE8] bg-[#090D1E] rounded-xl overflow-hidden border border-[#27304F]">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-[#0C1226] border-b border-[#27304F]">
        <div className="flex items-center gap-2">
          <BarChart3 className="size-4 text-[#F0C96A]" />
          <span className="font-semibold text-white">Plan de Transformación Digital</span>
        </div>
        <span className="text-[10px] font-mono text-[#F0C96A] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
          Diagnóstico SLP
        </span>
      </div>

      {/* Content Chart + Stats */}
      <div className="p-3.5 flex-1 flex flex-col gap-3 justify-between">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#12182D] border border-[#27304F] p-2 rounded-lg">
            <span className="text-[9px] text-[#95A0C0] uppercase block">Retorno de Inversión (ROI)</span>
            <span className="text-base font-extrabold text-emerald-400 font-heading">+340%</span>
          </div>
          <div className="bg-[#12182D] border border-[#27304F] p-2 rounded-lg">
            <span className="text-[9px] text-[#95A0C0] uppercase block">Reducción de Costos</span>
            <span className="text-base font-extrabold text-cyan-400 font-heading">-42.5%</span>
          </div>
        </div>

        {/* SVG Area Bar Chart */}
        <div className="bg-[#050816] border border-[#27304F] rounded-lg p-2 flex flex-col justify-between flex-1">
          <span className="text-[9px] text-[#95A0C0] font-mono">Curva de Crecimiento Eficiencia Operativa</span>
          <svg className="w-full h-20" viewBox="0 0 200 60">
            <defs>
              <linearGradient id="consultingGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#18C7E7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#18C7E7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 50 Q 40 45, 80 30 T 160 15 T 200 5 L 200 60 L 0 60 Z"
              fill="url(#consultingGrad)"
            />
            <path
              d="M 0 50 Q 40 45, 80 30 T 160 15 T 200 5"
              fill="none"
              stroke="#18C7E7"
              strokeWidth="2.5"
            />
            <circle cx="200" cy="5" r="3" fill="#F0C96A" />
          </svg>
        </div>
      </div>
    </div>
  )
}

// 7. Dashboard: Venta de Equipos (Ficha Producto Hardware)
export function DashboardEquipment() {
  return (
    <div className="w-full h-full flex flex-col text-xs text-[#D8DCE8] bg-[#090D1E] rounded-xl overflow-hidden border border-[#27304F]">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-[#0C1226] border-b border-[#27304F]">
        <div className="flex items-center gap-2">
          <Monitor className="size-4 text-amber-400" />
          <span className="font-semibold text-white">Catálogo Hardware SLP</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          En Stock
        </span>
      </div>

      {/* Hardware Card Spec */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div className="bg-[#12182D] border border-[#27304F] rounded-lg p-3 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-heading font-bold text-white text-sm">Workstation Pro SLP-Enterprise</h4>
              <p className="text-[10px] text-[#95A0C0]">Para desarrollo, IA y diseño pesado</p>
            </div>
            <span className="text-amber-400 font-bold font-mono text-sm">$1,480 USD</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-2 text-[10px] text-[#D8DCE8]">
            <div className="bg-[#050816] p-1.5 rounded border border-[#27304F] flex items-center gap-1">
              <Cpu className="size-3 text-cyan-400" /> Core i9 14th Gen
            </div>
            <div className="bg-[#050816] p-1.5 rounded border border-[#27304F] flex items-center gap-1">
              <HardDrive className="size-3 text-purple-400" /> 64 GB DDR5 RAM
            </div>
            <div className="bg-[#050816] p-1.5 rounded border border-[#27304F] flex items-center gap-1">
              <Activity className="size-3 text-amber-400" /> RTX 4080 16GB
            </div>
            <div className="bg-[#050816] p-1.5 rounded border border-[#27304F] flex items-center gap-1">
              <ShieldAlert className="size-3 text-emerald-400" /> 2 Años Garantía
            </div>
          </div>
        </div>

        <div className="bg-[#070A18] border border-[#27304F] rounded-lg p-2 flex items-center justify-between text-[10px]">
          <span className="text-[#95A0C0]">Soporte técnico de configuración incluido</span>
          <span className="text-[#18C7E7] font-bold">SLP Certified ✓</span>
        </div>
      </div>
    </div>
  )
}
