import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Zap, MapPin, ShieldCheck, Award, Leaf, HeartHandshake } from "lucide-react"
import CtaSection from "../components/cta-section"

export const metadata = {
  title: "About Us | Twin Cities Auto Detailers",
  description:
    "Learn about Twin Cities Auto Detailers, our journey from a 2-person mobile service in 2020 to a team of 40+ offering premium in-shop and mobile detailing, paint correction, and ceramic coatings.",
}

const coreValues = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary mb-3" />,
    title: "Uncompromising Quality",
    description: "We use only the best products and techniques to deliver flawless results that exceed expectations.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-secondary mb-3" />,
    title: "Customer Centricity",
    description:
      "Your satisfaction is our driving force. We listen, adapt, and strive to provide an exceptional experience.",
  },
  {
    icon: <Award className="w-10 h-10 text-green-500 mb-3" />,
    title: "Expert Craftsmanship",
    description: "Our highly skilled and passionate technicians are masters of their craft, dedicated to perfection.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-teal-500 mb-3" />,
    title: "Integrity & Transparency",
    description: "We believe in honest communication, fair pricing, and building lasting trust with our clients.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background dark:bg-brand-charcoal">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-background dark:bg-brand-charcoal-light">
        <Image
          src="/abstract-blue-lines-modern.png"
          alt="Abstract background for About Us page"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-10 dark:opacity-[0.07]"
          priority
        />
        <div className="container relative z-10 text-center">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter mb-4 text-brand-charcoal dark:text-brand-white">
            Our Journey, Your <span className="text-primary">Pristine Ride</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-steel-gray dark:text-brand-light-gray/80 max-w-3xl mx-auto">
            Discover the story behind Twin Cities Auto Detailers – a passion for perfection born from humble beginnings,
            now serving the entire metro area with unparalleled detailing expertise.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-6 text-brand-charcoal dark:text-brand-white">
                From Pandemic Passion to <span className="text-primary">Detailing Powerhouse</span>
              </h2>
              <div className="space-y-5 text-brand-steel-gray dark:text-brand-light-gray/80 leading-relaxed">
                <p>
                  Twin Cities Auto Detailers was born in the heart of uncertainty, in April 2020, amidst the global
                  COVID-19 pandemic. What started as a bold idea to bring high-quality auto detailing directly to
                  customers' doorsteps quickly resonated with a community seeking convenience and exceptional care for
                  their vehicles.
                </p>
                <p>
                  Our journey began with a dedicated team of just two individuals, a van equipped with top-tier tools,
                  and an unwavering commitment to meticulousness. We navigated the challenges of the time by focusing on
                  safety, reliability, and delivering a mobile detailing experience that was second to none. Word of our
                  passion and the quality of our work spread rapidly.
                </p>
                <p>
                  The demand for our services grew, and so did our team. We reinvested in our people, our equipment, and
                  our processes. Today, we are incredibly proud to have expanded from that initial duo to a thriving
                  team of over 40 skilled detailing professionals, each sharing the same dedication to automotive
                  excellence.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team-photo.jpeg"
                alt="Twin Cities Auto Detailers Team"
                width={800}
                height={533} // Adjust aspect ratio if needed
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Evolution & Commitment Section */}
      <section className="py-16 md:py-24 bg-background dark:bg-brand-charcoal-light">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4 text-brand-charcoal dark:text-brand-white">
              Evolving Services, <span className="text-primary">Steadfast Commitment</span>
            </h2>
            <p className="text-lg text-brand-steel-gray dark:text-brand-light-gray/80 max-w-3xl mx-auto">
              While our roots are in mobile detailing, our growth has allowed us to expand our capabilities
              significantly. We now offer a comprehensive suite of services to cater to every automotive enthusiast's
              needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="p-6 rounded-lg bg-background dark:bg-brand-charcoal shadow-lg">
              <div className="flex items-center mb-3">
                <MapPin className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-brand-charcoal dark:text-brand-white">
                  Convenient Mobile Detailing
                </h3>
              </div>
              <p className="text-brand-steel-gray dark:text-brand-light-gray/80 mb-4">
                Our renowned mobile detailing service continues to bring the ultimate convenience to your home or
                office. We arrive fully equipped to provide a wide range of interior and exterior detailing services
                on-site, saving you time without compromising on quality.
              </p>
              <Button variant="link" asChild className="text-primary">
                <Link href="/services/interior-detailing">Explore Mobile Options &rarr;</Link>
              </Button>
            </div>
            <div className="p-6 rounded-lg bg-background dark:bg-brand-charcoal shadow-lg">
              <div className="flex items-center mb-3">
                <Zap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-brand-charcoal dark:text-brand-white">
                  Advanced In-Shop Services
                </h3>
              </div>
              <p className="text-brand-steel-gray dark:text-brand-light-gray/80 mb-4">
                Our state-of-the-art detailing studio is equipped for the most advanced treatments. This includes
                intensive full paint correction to eliminate swirls and scratches, and the application of
                professional-grade ceramic coatings for long-lasting protection and incredible gloss.
              </p>
              <Button variant="link" asChild className="text-primary">
                <Link href="/services/paint-correction">Discover In-Shop Expertise &rarr;</Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-brand-steel-gray dark:text-brand-light-gray/80 max-w-3xl mx-auto">
              No matter the service, our core philosophy remains: to treat every vehicle as if it were our own,
              delivering meticulous results that protect your investment and ignite your passion for driving.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-background dark:bg-brand-charcoal">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4 text-brand-charcoal dark:text-brand-white">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-lg text-brand-steel-gray dark:text-brand-light-gray/80 max-w-2xl mx-auto">
              These principles guide every decision we make and every vehicle we touch.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-brand-light-gray dark:bg-brand-charcoal-light shadow-lg hover:shadow-xl transition-shadow duration-300 text-center glassmorphic"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-brand-charcoal dark:text-brand-white">{value.title}</h3>
                <p className="text-sm text-brand-steel-gray dark:text-brand-light-gray/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Meet the Passion Behind the Polish"
        description="Ready to experience the Twin Cities Auto Detailers difference? Explore our services or get in touch with our expert team today."
        buttonText="View Our Services"
        buttonLink="/services"
      />
    </div>
  )
}
