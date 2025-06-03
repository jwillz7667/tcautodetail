"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Car, SprayCan, WindIcon as Windshield, Sparkle, ShieldAlert, Wand2 } from "lucide-react" // Using Sparkle instead of Sparkles for single icon

const services = [
  {
    icon: <Car className="w-8 h-8 text-primary" />,
    title: "Interior Detailing",
    description: "Deep cleaning, leather treatment, odor removal, and more for a pristine cabin.",
    link: "/services/interior-detailing",
  },
  {
    icon: <SprayCan className="w-8 h-8 text-primary" />,
    title: "Exterior Detailing",
    description: "Hand wash, waxing, polishing, and paint sealant for a brilliant, protected shine.",
    link: "/services/exterior-detailing",
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    title: "Paint Correction",
    description: "Multi-stage correction to remove swirls, scratches, and restore paint clarity.",
    link: "/services/paint-correction",
  },
  {
    icon: <Wand2 className="w-8 h-8 text-primary" />,
    title: "Ceramic Coatings",
    description: "Long-lasting protection against elements, enhancing gloss and hydrophobicity.",
    link: "/services/ceramic-coatings",
  },
  {
    icon: <Windshield className="w-8 h-8 text-primary" />,
    title: "Paint Protection Film",
    description: "Invisible shield against rock chips, scratches, and road debris.",
    link: "/services/paint-protection-film",
  },
  {
    icon: <Sparkle className="w-8 h-8 text-primary" />,
    title: "Specialty Services",
    description: "Headlight restoration, engine bay cleaning, and other custom requests.",
    link: "/services/specialty-services",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-background dark:bg-brand-charcoal-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4 text-brand-charcoal dark:text-brand-white">
            Our <span className="text-primary">Signature</span> Services
          </h2>
          <p className="text-lg text-brand-steel-gray dark:text-brand-light-gray/80 max-w-2xl mx-auto">
            Discover our comprehensive range of detailing services designed to meet every need and exceed every
            expectation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col bg-background dark:bg-brand-charcoal shadow-neumorphic-light dark:shadow-neumorphic-dark hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 mb-3 border border-primary/30">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-brand-charcoal dark:text-brand-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <CardDescription className="text-brand-steel-gray dark:text-brand-light-gray/70 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="link" asChild className="text-primary hover:text-primary/80">
                    <Link href={service.link}>Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
