"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Phone, Mail, User, Send, CheckCircle2, Building2, MessageSquare } from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { contactInfo, contactFormConfig } from "@/content/contact"

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  company: z.string().max(100, "El nombre de empresa es demasiado largo").optional(),
  email: z
    .string()
    .email("Ingrese un correo electrónico válido"),
  phone: z
    .string()
    .min(7, "El teléfono debe tener al menos 7 dígitos")
    .max(20, "El teléfono es demasiado largo")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(20, "El mensaje debe tener al menos 20 caracteres")
    .max(1000, "El mensaje es demasiado largo"),
})

type ContactFormData = z.infer<typeof contactSchema>

function InputField({
  id,
  label,
  error,
  icon: Icon,
  ...props
}: {
  id: string
  label: string
  error?: string
  icon: React.ElementType
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-[#111827]">
        {label}
        {props.required && <span className="text-[#DC2626] ml-1" aria-label="requerido">*</span>}
      </label>
      <div className="relative">
        <Icon
          className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#6B7280]"
          aria-hidden="true"
        />
        <input
          id={id}
          className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-[#111827] placeholder:text-[#6B7280]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8] ${
            error ? "border-[#DC2626]" : "border-[#E5E7EB] hover:border-[#D1D5DB]"
          }`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xs text-[#DC2626]" role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    setIsSubmitted(true)
    reset()
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="section-padding bg-[#F6F7F9] border-t border-[#E5E7EB]"
    >
      <div className="container-slp">
        <SectionTitle
          label="Contacto Directo"
          title="Hablemos de su proyecto tecnológico"
          subtitle="Cuéntenos sobre sus necesidades de ingeniería e infraestructura y le responderemos con un diagnóstico inicial."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="slp-card p-8 bg-white flex flex-col gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1E4ED8]">
                  Responsable Técnico
                </span>
                <h3 className="font-heading text-xl font-bold text-[#111827] mt-1">
                  {contactInfo.name}
                </h3>
                <p className="text-sm text-[#6B7280]">{contactInfo.role}</p>
              </div>

              <div className="flex flex-col gap-4 pt-2 border-t border-[#E5E7EB]">
                <a
                  href={`tel:+57${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#E5E7EB] hover:border-[#1E4ED8] bg-[#F6F7F9] transition-colors"
                  aria-label={`Llamar al ${contactInfo.phone}`}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#1E4ED8] border border-[#E5E7EB]">
                    <Phone className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#6B7280]">Teléfono directo</span>
                    <p className="text-sm font-bold text-[#111827]">{contactInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#E5E7EB] hover:border-[#1E4ED8] bg-[#F6F7F9] transition-colors"
                  aria-label={`Enviar correo a ${contactInfo.email}`}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#1E4ED8] border border-[#E5E7EB]">
                    <Mail className="size-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono text-[#6B7280]">Correo oficial</span>
                    <p className="text-sm font-bold text-[#111827] truncate">{contactInfo.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-xs text-[#6B7280] leading-relaxed">
              <strong className="text-[#111827] block mb-1">Horarios de Atención:</strong>
              Atención presencial y remota de lunes a sábado. Respuestas a requerimientos en menos de 24 horas hábiles.
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="slp-card p-8 bg-white">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <div className="flex size-14 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A]">
                    <CheckCircle2 className="size-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#111827]">
                    ¡Mensaje recibido correctamente!
                  </h3>
                  <p className="text-sm text-[#6B7280] max-w-md">
                    {contactFormConfig.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-semibold text-[#1E4ED8] hover:underline mt-2"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Formulario de contacto"
                  className="flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      id="contact-name"
                      label={contactFormConfig.fields.name.label}
                      placeholder={contactFormConfig.fields.name.placeholder}
                      icon={User}
                      required
                      autoComplete="name"
                      error={errors.name?.message}
                      {...register("name")}
                    />
                    <InputField
                      id="contact-company"
                      label={contactFormConfig.fields.company.label}
                      placeholder={contactFormConfig.fields.company.placeholder}
                      icon={Building2}
                      autoComplete="organization"
                      error={errors.company?.message}
                      {...register("company")}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      id="contact-email"
                      label={contactFormConfig.fields.email.label}
                      placeholder={contactFormConfig.fields.email.placeholder}
                      icon={Mail}
                      type="email"
                      required
                      autoComplete="email"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                    <InputField
                      id="contact-phone"
                      label={contactFormConfig.fields.phone.label}
                      placeholder={contactFormConfig.fields.phone.placeholder}
                      icon={Phone}
                      type="tel"
                      autoComplete="tel"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-sm font-semibold text-[#111827]">
                      {contactFormConfig.fields.message.label}
                      <span className="text-[#DC2626] ml-1" aria-label="requerido">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare
                        className="absolute left-3.5 top-3.5 size-4 text-[#6B7280]"
                        aria-hidden="true"
                      />
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder={contactFormConfig.fields.message.placeholder}
                        className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-[#111827] placeholder:text-[#6B7280]/60 transition-colors resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8] ${
                          errors.message ? "border-[#DC2626]" : "border-[#E5E7EB] hover:border-[#D1D5DB]"
                        }`}
                        aria-required="true"
                        {...register("message")}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-xs text-[#DC2626]" role="alert" aria-live="polite">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={isSubmitting}
                    className="btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4ED8]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" aria-hidden="true" />
                        {contactFormConfig.submitLabel}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
