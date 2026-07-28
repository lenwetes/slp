"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => setIsMobileOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-180",
          isScrolled
            ? "bg-[#050816]/90 backdrop-blur-md border-b border-[#27304F] shadow-lg shadow-[#050816]/50"
            : "bg-transparent",
        )}
        role="banner"
      >
        <div className="container-slp">
          <nav
            className="flex h-22 sm:h-24 items-center justify-between py-2"
            aria-label="Navegación principal"
          >
            {/* Logo */}
            <a
              href="#inicio"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5] rounded-md py-1"
              aria-label="SLP Soluciones Informáticas — Ir al inicio"
            >
              <Image
                src="/logos/slp-logo.png"
                alt="SLP Soluciones Informáticas"
                width={280}
                height={84}
                className="h-14 sm:h-16 md:h-18 w-auto object-contain max-w-[220px] sm:max-w-[280px] md:max-w-[320px] transition-transform duration-200 group-hover:scale-[1.03]"
                priority
              />
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden items-center gap-1 md:flex" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-[#D8DCE8] transition-colors hover:text-[#18C7E7] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Primary CTA */}
            <div className="hidden md:flex">
              <a
                href="#contacto"
                id="navbar-cta"
                className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
              >
                Solicitar Cotización
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              className="flex size-10 items-center justify-center rounded-full border border-[#27304F] bg-[#12182D] text-[#FFFFFF] hover:bg-[#1B2340] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5] md:hidden"
              onClick={() => setIsMobileOpen((prev) => !prev)}
            >
              {isMobileOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Menú de navegación móvil"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-18 z-40 bg-[#0B1022] border-b border-[#27304F] shadow-xl md:hidden"
          >
            <nav className="container-slp py-6">
              <ul className="flex flex-col gap-2" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="flex items-center px-4 py-3 text-base font-medium text-[#FFFFFF] rounded-lg transition-colors hover:bg-[#12182D] hover:text-[#18C7E7]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-4 pt-4 border-t border-[#27304F]">
                  <a
                    href="#contacto"
                    onClick={handleLinkClick}
                    className="btn-primary flex w-full items-center justify-center py-3 text-sm"
                  >
                    Solicitar Cotización
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
