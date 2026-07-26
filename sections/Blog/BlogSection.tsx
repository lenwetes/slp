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
  BookOpen,
  Clock,
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
      className="slp-card p-8 flex flex-col gap-5 bg-white group cursor-pointer relative overflow-hidden"
      aria-labelledby={`blog-cat-${category.id}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex size-11 items-center justify-center rounded-xl bg-[#F6F7F9] text-[#1E4ED8] border border-[#E5E7EB] group-hover:bg-[#1E4ED8] group-hover:text-white transition-colors duration-180">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <span className="text-[11px] font-mono text-[#1E4ED8] bg-[#1E4ED8]/10 px-2.5 py-0.5 rounded-full font-semibold">
          Categoría
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3
          id={`blog-cat-${category.id}`}
          className="font-heading text-lg font-bold text-[#111827] group-hover:text-[#1E4ED8] transition-colors"
        >
          {category.title}
        </h3>
        <p className="text-sm text-[#6B7280] leading-relaxed font-normal">
          {category.description}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs font-semibold text-[#1E4ED8] mt-auto pt-4 border-t border-[#E5E7EB]">
        <span className="flex items-center gap-1.5 text-[#6B7280] font-normal text-[11px]">
          <Clock className="size-3 text-[#1E4ED8]" />
          Guías Técnicas
        </span>
        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Explorar recursos
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </span>
      </div>
    </motion.article>
  )
}

export function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="section-padding bg-[#FAFAFA] relative overflow-hidden"
    >
      <div className="container-slp relative z-10">
        <SectionTitle
          label="Blog Tecnológico"
          title="Conocimiento técnico especializado"
          subtitle="Análisis, metodologías y guías prácticas sobre desarrollo de software, inteligencia artificial, ciberseguridad y redes."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogCategories.map((category, index) => (
            <BlogCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-[#6B7280]">
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="size-3.5 text-[#1E4ED8]" />
            Próximamente: Publicación semanal de artículos técnicos y casos de éxito.
          </span>
        </div>
      </div>
    </section>
  )
}
