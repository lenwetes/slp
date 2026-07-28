import Link from "next/link"
import Image from "next/image"
import { Home, ShieldAlert } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center p-4 relative overflow-hidden bg-tech-grid">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#6A2DBD]/20 via-[#1E88E5]/20 to-[#18C7E7]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-6 slp-card border-[#27304F] bg-[#12182D]/90 backdrop-blur-md p-8 sm:p-10 shadow-2xl">
        <div className="flex justify-center pb-2">
          <Image
            src="/logos/slp-logo.png"
            alt="SLP Soluciones Informáticas Logo"
            width={320}
            height={96}
            className="h-20 sm:h-24 w-auto object-contain mx-auto max-w-[320px]"
            priority
          />
        </div>

        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1B2340] border border-[#27304F] text-[#18C7E7] mx-auto">
          <ShieldAlert className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-gradient-vibrant tracking-tight">
            404
          </h1>
          <h2 className="text-2xl font-bold text-white">
            Página No Encontrada
          </h2>
          <p className="text-[#95A0C0] text-sm leading-relaxed">
            Lo sentimos, el recurso o la dirección que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 btn-primary text-sm font-semibold transition-all"
          >
            <Home className="w-4 h-4" />
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
