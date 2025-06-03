import Image from "next/image"
import CtaSection from "../components/cta-section"
import { Sparkles } from "lucide-react"
import GalleryGridClient from "./components/gallery-grid-client"

export const metadata = {
  title: "Our Work Gallery | Twin Cities Auto Detailers",
  description:
    "View stunning before-and-after transformations by Twin Cities Auto Detailers. See the impact of our paint correction and ceramic coating services on various vehicles.",
}

export default function GalleryPage() {
  return (
    <div className="bg-background dark:bg-brand-charcoal">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-background dark:bg-brand-charcoal-light">
        <Image
          src="/abstract-gallery-background.png"
          alt="Abstract background for Gallery page"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-10 dark:opacity-[0.07]"
          priority
        />
        <div className="container relative z-10 text-center">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter mb-4 text-brand-charcoal dark:text-brand-white">
            Witness the <span className="text-primary">Transformation</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-steel-gray dark:text-brand-light-gray/80 max-w-3xl mx-auto">
            Explore our gallery of before-and-after showcases, highlighting the meticulous results of our paint
            correction and ceramic coating services on a variety of vehicles.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <GalleryGridClient />
        </div>
      </section>

      <CtaSection
        title="Ready for Your Car's Transformation?"
        description="Inspired by what you see? Let us bring this level of perfection to your vehicle. Get a quote or book your service today."
        buttonText="Get a Free Quote"
        buttonLink="/quote"
      />
    </div>
  )
}
