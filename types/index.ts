// ============================================================
// SLP Soluciones Informáticas — Tipos TypeScript Globales
// ============================================================

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  accentColor: string
  features: string[]
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface BlogCategory {
  id: string
  title: string
  description: string
  icon: string
  slug: string
  color: string
}

export interface ContactInfo {
  name: string
  role: string
  phone: string
  email: string
}

export interface ProcessStep {
  id: string
  number: number
  title: string
  description: string
  icon: string
}

export interface WhyChooseUsItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface HeroContent {
  title: string
  subtitle: string
  description: string
  primaryCta: string
  secondaryCta: string
}

export interface AboutContent {
  intro: string
  description: string
  values: string[]
}

export interface CompanyContent {
  name: string
  tagline: string
  hero: HeroContent
  about: AboutContent
  mission: string
  vision: string
}
