import HeroSection from "./components/hero-section"
import WhyChooseUs from "./components/why-choose-us"
import ServicesOverview from "./components/services-overview"
import FeaturedWork from "./components/featured-work"
import TestimonialsCarousel from "./components/testimonials-carousel"
import CtaSection from "./components/cta-section"
import NewsletterSignup from "./components/newsletter-signup"
import PartnersSection from "./components/partners-section"

export default function HomePage() {
  return (
    <>
      <main className="flex-grow">
        <HeroSection />
        <ServicesOverview />
        <PartnersSection />
        <FeaturedWork />
        <WhyChooseUs />
        <CtaSection
          title="Ready for a Showroom Shine?"
          description="Get an instant quote for your vehicle and experience the Twin Cities Auto Detailers difference."
          buttonText="Get Your Free Quote"
          buttonLink="/quote"
        />
      </main>
      <TestimonialsCarousel />
      <NewsletterSignup />
    </>
  )
}
