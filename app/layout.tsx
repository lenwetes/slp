import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "SLP Soluciones Informáticas | Ingeniería y Soluciones Tecnológicas",
    template: "%s | SLP Soluciones Informáticas",
  },
  description:
    "Empresa especializada en desarrollo de software empresarial, soluciones con inteligencia artificial, redes, videovigilancia e infraestructura informática.",
  keywords: [
    "soluciones informáticas",
    "desarrollo de software",
    "inteligencia artificial",
    "soporte técnico",
    "redes empresariales",
    "videovigilancia",
    "infraestructura tecnológica",
  ],
  authors: [{ name: "lenwetes" }],
  creator: "lenwetes",
  publisher: "SLP Soluciones Informáticas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "SLP Soluciones Informáticas | Ingeniería y Soluciones Tecnológicas",
    description:
      "Desarrollo de software, IA empresarial, redes, videovigilancia e infraestructura de TI.",
    siteName: "SLP Soluciones Informáticas",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLP Soluciones Informáticas",
    description:
      "Desarrollo de software a medida, IA, infraestructura de TI y soporte especializado.",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SLP Soluciones Informáticas",
  description:
    "Empresa especializada en soluciones tecnológicas de ingeniería: desarrollo de software, IA empresarial, redes LAN/WLAN, videovigilancia e infraestructura.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-321-445-1817",
    email: "slps.soluciones.informaticas@gmail.com",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  founder: {
    "@type": "Person",
    name: "lenwetes",
    jobTitle: "Desarrollador",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased bg-[#FAFAFA] text-[#111827]">{children}</body>
    </html>
  )
}
