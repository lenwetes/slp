import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://slpsoluciones.com"),
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
  icons: {
    icon: "/logos/slp-logo.png",
    shortcut: "/logos/slp-logo.png",
    apple: "/logos/slp-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "SLP Soluciones Informáticas | Ingeniería y Soluciones Tecnológicas",
    description:
      "Desarrollo de software, IA empresarial, redes, videovigilancia e infraestructura de TI.",
    siteName: "SLP Soluciones Informáticas",
    images: [
      {
        url: "/logos/slp-logo.png",
        width: 800,
        height: 600,
        alt: "SLP Soluciones Informáticas Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SLP Soluciones Informáticas",
    description:
      "Desarrollo de software a medida, IA, infraestructura de TI y soporte especializado.",
    images: ["/logos/slp-logo.png"],
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SLP Soluciones Informáticas",
  logo: "https://slp-soluciones.com/logos/slp-logo.png",
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
    <html lang="es" className={`${inter.variable} ${montserrat.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased bg-[#050816] text-[#FFFFFF] selection:bg-[#1E88E5]/20 selection:text-[#18C7E7]">
        {children}
      </body>
    </html>
  )
}
