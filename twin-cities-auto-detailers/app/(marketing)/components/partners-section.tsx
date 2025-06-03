"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const partnerLogos = [
  {
    name: "CARPRO",
    src: "/partners/carpro-logo.png",
    alt: "CARPRO Logo - Professional Car Care Products",
    href: "https://www.carpro-us.com",
    // Estimated dimensions for aspect ratio, actual display size controlled by Tailwind
    width: 300,
    height: 100,
    invertInDarkMode: true, // Black logo, needs inversion for dark mode
  },
  {
    name: "Meguiar's",
    src: "/partners/meguiars-logo.png",
    alt: "Meguiar's Logo - Car Care Products Since 1901",
    href: "https://www.meguiars.com",
    width: 250,
    height: 100,
    invertInDarkMode: true, // Colored logo
  },
  {
    name: "Chemical Guys",
    src: "/partners/chemical-guys-logo.png",
    alt: "Chemical Guys Logo - Car Wash Chemicals & Detailing Supplies",
    href: "https://www.chemicalguys.com",
    width: 150,
    height: 150,
    invertInDarkMode: true, // Black & white logo, benefits from inversion
  },
  {
    name: "Turtle Wax",
    src: "/partners/turtle-wax-logo.png",
    alt: "Turtle Wax Logo - Car Care & Detailing Products",
    href: "https://www.turtlewax.com",
    width: 200,
    height: 100,
    invertInDarkMode: true, // Colored logo
  },
]

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-background dark:bg-brand-charcoal">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16" // Increased bottom margin
        >
          <h3 className="text-base font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Trusted By & Partnered With
          </h3>
          <p className="text-lg text-brand-steel-gray dark:text-brand-light-gray/80 max-w-xl mx-auto">
            We proudly use and recommend products from these industry-leading brands to ensure the best results for your
            vehicle.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 sm:gap-x-16 md:gap-x-20 lg:gap-x-24">
          {" "}
          {/* Increased gaps */}
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 25 }} // Slightly increased y offset
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
              className="transition-all duration-300 ease-out hover:scale-105 group" // Added group for potential child targeting
            >
              <Link
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name}`}
                className="block opacity-80 group-hover:opacity-100 transition-opacity duration-300" // Opacity on link, full on hover
              >
                <Image
                  src={partner.src || "/placeholder.svg"}
                  alt={partner.alt}
                  width={partner.width} // Using dimensions from array for aspect ratio
                  height={partner.height}
                  className={`
                    h-14 sm:h-16 md:h-20 lg:h-20 w-auto object-contain 
                    ${partner.invertInDarkMode ? "dark:invert" : ""}
                  `} // Increased height, conditional invert
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
