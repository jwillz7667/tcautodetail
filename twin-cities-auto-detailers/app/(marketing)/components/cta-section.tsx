"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

interface CtaSectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function CtaSection({ title, description, buttonText, buttonLink }: CtaSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">{title}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">{description}</p>
          <Button
            size="xl"
            asChild
            className="bg-brand-white text-primary hover:bg-brand-light-gray/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-6 text-lg"
          >
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
