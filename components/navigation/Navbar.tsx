"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Cpu } from "lucide-react"
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
            ? "bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs"
            : "bg-transparent",
        )}
        role="banner"
      >
        <div className="container-slp">
          <nav
            className="flex h-18 items-center justify-between"
            aria-label="Navegación principal"
          >
            {/* Logo */}
            <a
              href="#inicio"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8] rounded-md"
              aria-label="SLP Soluciones Informáticas — Ir al inicio"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#1E4ED8] text-white">
                <Cpu className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-base font-bold text-[#111827] tracking-tight">
                  SLP
                </span>
                <span className="text-[10px] text-[#6B7280] font-medium tracking-wider uppercase">
                  Soluciones Informáticas
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden items-center gap-1 md:flex" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-[#6B7280] transition-colors hover:text-[#1E4ED8] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Primary CTA (pill button per Constitution) */}
            <div className="hidden md:flex">
              <a
                href="#contacto"
                id="navbar-cta"
                className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
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
              className="flex size-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#111827] hover:bg-[#F6F7F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8] md:hidden"
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
            className="fixed inset-x-0 top-18 z-40 bg-[#FAFAFA] border-b border-[#E5E7EB] shadow-lg md:hidden"
          >
            <nav className="container-slp py-6">
              <ul className="flex flex-col gap-2" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="flex items-center px-4 py-3 text-base font-medium text-[#111827] rounded-lg transition-colors hover:bg-[#F6F7F9] hover:text-[#1E4ED8]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-4 pt-4 border-t border-[#E5E7EB]">
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
