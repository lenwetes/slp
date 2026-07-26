// ============================================================
// SLP Soluciones Informáticas — Información de Contacto
// ============================================================

import type { ContactInfo } from "@/types"

export const contactInfo: ContactInfo = {
  name: "Sergio Luis Pérez Contreras",
  role: "Ingeniero de Sistemas",
  phone: "321 445 1817",
  email: "slps.soluciones.informaticas@gmail.com",
}

export const contactFormConfig = {
  fields: {
    name: {
      label: "Nombre completo",
      placeholder: "¿Cómo se llama?",
    },
    company: {
      label: "Empresa",
      placeholder: "Nombre de su empresa (opcional)",
    },
    email: {
      label: "Correo electrónico",
      placeholder: "correo@empresa.com",
    },
    phone: {
      label: "Teléfono",
      placeholder: "300 000 0000",
    },
    message: {
      label: "Mensaje",
      placeholder: "Cuéntenos sobre su proyecto o necesidad tecnológica...",
    },
  },
  submitLabel: "Enviar Mensaje",
  successMessage:
    "¡Mensaje enviado con éxito! Nos pondremos en contacto con usted a la brevedad.",
}
