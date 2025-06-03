"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Image from "next/image"

export default function NewsletterSignup() {
  return (
    <section className="relative py-16 md:py-24 bg-brand-charcoal text-brand-white overflow-hidden">
      <Image
        src="/placeholder.svg?width=1600&height=800"
        alt="Abstract background"
        fill
        style={{ objectFit: "cover" }}
        className="opacity-10 dark:opacity-[0.07]"
      />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Stay Updated, Stay <span className="text-primary">Immaculate</span>
          </h2>
          <p className="text-lg text-brand-light-gray/80 mb-8">
            Subscribe to our newsletter for the latest car care tips, special offers, and service updates from Twin
            Cities Auto Detailers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-brand-charcoal-light/50 dark:bg-brand-charcoal-light/80 border-brand-steel-gray text-brand-white placeholder:text-brand-light-gray/60 focus:ring-primary focus:border-primary h-12 text-base"
              aria-label="Email for newsletter"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base px-8 shadow-md hover:shadow-lg transition-shadow"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
