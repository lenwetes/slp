"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
  titleClassName?: string
  delay?: number
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  delay = 0,
}: SectionTitleProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align]

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.18, delay }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F6F7F9] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1E4ED8]">
            {/* Accent gold subtle dot per Constitution */}
            <span className="size-1.5 rounded-full bg-[#C8A447]" />
            {label}
          </span>
        </motion.div>
      )}

      <motion.h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl",
          titleClassName,
        )}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.18, delay: delay + 0.04 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="max-w-2xl text-base text-[#6B7280] sm:text-lg font-normal leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.18, delay: delay + 0.08 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
