"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ZoomIn } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    src: "/split-paint-correction.png", // This was the original black car paint correction
    alt: "Side-by-side comparison of car paint before and after paint correction, showing swirl removal and gloss restoration.",
    label: "Paint Correction: Before & After",
    description: "Left: Swirls & Scratches | Right: Flawless Gloss & Clarity",
  },
  // Removed the second item (ceramic coating example) as per request
  // {
  //   id: 2,
  //   src: "/split-ceramic-coating.png",
  //   alt: "Side-by-side comparison of car paint before and after ceramic coating, showing enhanced shine and hydrophobic properties.",
  //   label: "Ceramic Coating: Before & After",
  //   description: "Left: Dull & Contaminated | Right: Extreme Shine & Protection",
  // },
]

export default function FeaturedWork() {
  return (
    <section className="py-16 md:py-24 bg-brand-charcoal text-brand-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            A Glimpse of <span className="text-primary">Perfection</span>
          </h2>
          <p className="text-lg text-brand-light-gray/80 max-w-2xl mx-auto">
            Witness the dramatic transformation: our paint correction results, side-by-side.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 max-w-2xl mx-auto">
          {" "}
          {/* Changed to md:grid-cols-1 and centered */}
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-xl aspect-[16/10]"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={800}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.label}
                </h3>
                <p className="text-sm md:text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  {item.description}
                </p>
              </div>
              <div className="absolute top-3 right-3 bg-primary/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                <ZoomIn className="w-5 h-5 md:w-6 md:h-6" title="View Detail" />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/gallery">Explore Full Gallery</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
