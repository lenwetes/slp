"use client"

import { motion } from "framer-motion"
import {
  ShieldAlert,
  BrainCircuit,
  Zap,
  Network,
  Code2,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { blogCategories } from "@/content/blog"
import type { BlogCategory } from "@/types"

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  BrainCircuit,
  Zap,
  Network,
  Code2,
  TrendingUp,
}

function BlogCard({ category, index }: { category: BlogCategory; index: number }) {
  const Icon = iconMap[category.icon] ?? Code2

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.18, delay: index * 0.04 }}
      className="slp-card p-8 flex flex-col gap-5 bg-white"
      aria-labelledby={`blog-cat-${category.id}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex size-10 items-center justify-center rounded-lg bg-[#F6F7F9] text-[#1E4ED8] border border-[#E5E7EB]">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <span className="text-xs font-mono text-[#6B7280]">Recursos</span>
      </div>

      <div className="flex flex-col gap-2">
        <h3
          id={`blog-cat-${category.id}`}
          className="font-heading text-lg font-bold text-[#111827]"
        >
          {category.title}
        </h3>
        <p className="text-sm text-[#6B7280] leading-relaxed font-normal">
          {category.description}
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E4ED8] mt-auto pt-4 border-t border-[#E5E7EB]">
        <span>Explorar publicaciones</span>
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </div>
    </motion.article>
  )
}

export function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="section-padding bg-[#FAFAFA]"
    >
      <div className="container-slp">
        <SectionTitle
          label="Blog Tecnológico"
          title="Conocimiento técnico especializado"
          subtitle="Artículos, guías y análisis sobre arquitectura de software, ciberseguridad, infraestructura e inteligencia artificial."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogCategories.map((category, index) => (
            <BlogCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
