"use client"

import { Phone, Mail, Cpu, ArrowUp } from "lucide-react"
import { companyContent } from "@/content/company"
import { contactInfo } from "@/content/contact"

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
]

const services = [
  "Desarrollo de Software",
  "Software con IA",
  "Soporte Técnico",
  "Videovigilancia",
  "Redes LAN y WLAN",
  "Consultoría Tecnológica",
  "Venta de Equipos",
]

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      role="contentinfo"
      className="bg-[#111827] text-white border-t border-gray-800"
    >
      <div className="container-slp">
        {/* Main Footer Content */}
        <div className="py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1 & 2: Brand Info */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <a
              href="#inicio"
              className="flex items-center gap-3 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8] rounded-md"
              aria-label="SLP Soluciones Informáticas — Ir al inicio"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#1E4ED8] text-white">
                <Cpu className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-base font-bold text-white tracking-tight">
                  SLP
                </span>
                <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">
                  Soluciones Informáticas
                </span>
              </div>
            </a>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-normal">
              Empresa especializada en soluciones tecnológicas integrales de ingeniería. Desarrollamos software, infraestructura y soporte profesional para empresas.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`tel:+57${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
                aria-label={`Teléfono: ${contactInfo.phone}`}
              >
                <Phone className="size-4 text-[#1E4ED8]" aria-hidden="true" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
                aria-label={`Email: ${contactInfo.email}`}
              >
                <Mail className="size-4 text-[#1E4ED8]" aria-hidden="true" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <nav aria-label="Navegación del pie de página">
            <h2 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-5">
              Navegación
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Services */}
          <div>
            <h2 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-5">
              Servicios
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-sm text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800 py-6 text-xs text-gray-500">
          <p className="text-center sm:text-left">
            © {currentYear} {companyContent.name}. Todos los derechos reservados.
          </p>

          <p className="text-center">
            Desarrollo hecho por <span className="text-gray-300 font-medium">lenwetes</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver al inicio de la página"
            className="flex size-8 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  )
}
