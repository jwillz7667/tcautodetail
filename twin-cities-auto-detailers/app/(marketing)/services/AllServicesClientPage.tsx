"use client"

// This page will list all services, similar to the ServicesOverview component but as a full page.
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import { servicesData } from "@/lib/services-data" // Import the full data
import Image from "next/image"
import CtaSection from "../components/cta-section"

export default function AllServicesClientPage() {
  return (
    <>
      <section className="relative py-20 md:py-32 bg-brand-light-gray dark:bg-brand-charcoal-light">
        <Image
          src="/placeholder.svg?width=1600&height=500"
          alt="Auto detailing services hero"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-10 dark:opacity-[0.07]"
          priority
        />
        <div className="container relative z-10 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter mb-4 text-brand-charcoal dark:text-brand-white">
            Our Comprehensive <span className="text-primary">Detailing Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-steel-gray dark:text-brand-light-gray/80 max-w-3xl mx-auto">
            Discover the perfect solution to maintain, protect, and enhance your vehicle. We offer a wide array of
            services tailored to meet your specific needs and budget.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background dark:bg-brand-charcoal">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col bg-card dark:bg-brand-charcoal-light shadow-neumorphic-light dark:shadow-neumorphic-dark hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="items-center text-center">
                    {service.icon && (
                      <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 mb-3 border border-primary/30 inline-block">
                        {service.icon}
                      </div>
                    )}
                    <CardTitle className="text-xl text-brand-charcoal dark:text-brand-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <CardDescription className="text-brand-steel-gray dark:text-brand-light-gray/70 mb-4 min-h-[60px]">
                      {service.tagline}
                    </CardDescription>
                    <Button variant="link" asChild className="text-primary hover:text-primary/80">
                      <Link href={`/services/${service.slug}`}>Learn More &rarr;</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection
        title="Ready for the Ultimate Clean?"
        description="Don't wait to give your car the treatment it deserves. Get a personalized quote or book your detailing service online today!"
        buttonText="Get Your Free Quote"
        buttonLink="/quote"
      />
    </>
  )
}
