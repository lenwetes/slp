"use client"

import Image from "next/image"
import { Phone, Mail, ArrowUp } from "lucide-react"
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
      className="bg-[#050816] text-[#FFFFFF] border-t border-[#27304F]"
    >
      <div className="container-slp">
        {/* Main Footer Content */}
        <div className="py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1 & 2: Brand Info */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <a
              href="#inicio"
              className="flex items-center w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5] rounded-md"
              aria-label="SLP Soluciones Informáticas — Ir al inicio"
            >
              <Image
                src="/logos/slp-logo.png"
                alt="SLP Soluciones Informáticas"
                width={580}
                height={170}
                className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto object-contain max-w-[420px] sm:max-w-[520px] md:max-w-[580px] transition-transform duration-200 hover:scale-[1.02]"
              />
            </a>

            <p className="text-sm text-[#D8DCE8] leading-relaxed max-w-sm font-normal">
              Empresa especializada en soluciones tecnológicas integrales de ingeniería. Desarrollamos software, infraestructura y soporte profesional para empresas.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`tel:+57${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-[#D8DCE8] hover:text-[#18C7E7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
                aria-label={`Teléfono: ${contactInfo.phone}`}
              >
                <Phone className="size-4 text-[#18C7E7]" aria-hidden="true" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2.5 text-sm text-[#D8DCE8] hover:text-[#18C7E7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
                aria-label={`Email: ${contactInfo.email}`}
              >
                <Mail className="size-4 text-[#18C7E7]" aria-hidden="true" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <nav aria-label="Navegación del pie de página">
            <h2 className="font-heading text-xs font-bold text-[#FFFFFF] uppercase tracking-wider mb-5">
              Navegación
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#D8DCE8] hover:text-[#18C7E7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Services */}
          <div>
            <h2 className="font-heading text-xs font-bold text-[#FFFFFF] uppercase tracking-wider mb-5">
              Servicios
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-sm text-[#D8DCE8] hover:text-[#18C7E7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#27304F] py-6 text-xs text-[#95A0C0]">
          <p className="text-center sm:text-left">
            © {currentYear} {companyContent.name}. Todos los derechos reservados.
          </p>

          <p className="text-center">
            Desarrollo hecho por <span className="text-[#FFFFFF] font-medium">lenwetes</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver al inicio de la página"
            className="flex size-8 items-center justify-center rounded-full border border-[#27304F] bg-[#12182D] text-[#D8DCE8] hover:bg-[#1B2340] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  )
}
