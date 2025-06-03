import { servicesData, getServiceBySlug, getRelatedServices } from "@/lib/services-data"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ChevronRight, AlertTriangle, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CtaSection from "../../components/cta-section"

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  if (!service) {
    return { title: "Service Not Found | Twin Cities Auto Detailers" }
  }
  return {
    title: `${service.title} | Twin Cities Auto Detailers`,
    description: `${service.tagline}. Discover expert ${service.title.toLowerCase()} services from Twin Cities Auto Detailers. ${service.description[0].substring(0, 100)}...`,
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return (
      <div className="container py-12 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center">
        <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
        <h1 className="text-4xl font-bold mb-2">Service Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The service you're looking for doesn't exist or may have been moved.
        </p>
        <Button asChild>
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    )
  }

  const relatedServicesDetails = getRelatedServices(
    service.slug,
    service.relatedServices.map((rs) => rs.slug),
  )

  return (
    <div className="bg-background dark:bg-brand-charcoal">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-background dark:bg-brand-charcoal-light">
        <Image
          src={service.heroImage || "/placeholder.svg?width=1920&height=500&query=abstract+automotive+background"}
          alt={`${service.title} hero image`}
          fill
          style={{ objectFit: "cover" }}
          className="opacity-10 dark:opacity-[0.07]"
          priority
        />
        <div className="container relative z-10 text-center">
          {service.heroIcon && (
            <div className="flex justify-center mb-6">
              {typeof service.heroIcon === "function"
                ? (service.heroIcon as () => React.ReactNode)()
                : service.heroIcon}
            </div>
          )}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter mb-4 text-brand-charcoal dark:text-brand-white">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-8">{service.tagline}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={`/quote?service=${service.slug}`}>Get a Quote for {service.title}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <Link href={`/book?service=${service.slug}`}>Book This Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column / Main Content */}
          <div className="lg:col-span-2">
            {/* Description Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading mb-6 text-brand-charcoal dark:text-brand-white">
                About Our <span className="text-primary">{service.title}</span>
              </h2>
              {service.description.map((paragraph, index) => (
                <p key={index} className="text-brand-steel-gray dark:text-brand-light-gray/80 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Benefits Section */}
            {service.benefits && service.benefits.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-heading mb-6 text-brand-charcoal dark:text-brand-white">
                  Key <span className="text-primary">Benefits</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 rounded-lg bg-brand-light-gray dark:bg-brand-charcoal-light glassmorphic"
                    >
                      {benefit.icon ? (
                        <div className="mr-3 mt-1 shrink-0">
                          {typeof benefit.icon === "function"
                            ? (benefit.icon as () => React.ReactNode)()
                            : benefit.icon}
                        </div>
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                      )}
                      <div>
                        <h4 className="font-semibold text-lg mb-1 text-brand-charcoal dark:text-brand-white">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-brand-steel-gray dark:text-brand-light-gray/70">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* What's Included Section */}
            {service.whatsIncluded && service.whatsIncluded.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-heading mb-6 text-brand-charcoal dark:text-brand-white">
                  What's <span className="text-primary">Included</span>
                </h2>
                <ul className="space-y-3">
                  {service.whatsIncluded.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start p-3 rounded-md bg-muted/50 dark:bg-brand-charcoal-light/30"
                    >
                      {item.icon ? (
                        <div className="mr-3 mt-1">
                          {typeof item.icon === "function"
                            ? (item.icon as () => React.ReactNode)()
                            : item.icon}
                        </div>
                      ) : (
                        <ChevronRight className="w-5 h-5 text-primary mr-2 mt-1 shrink-0" />
                      )}
                      <div>
                        <span className="font-medium text-brand-charcoal dark:text-brand-white">{item.item}</span>
                        {item.details && <p className="text-xs text-muted-foreground">{item.details}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Pricing Packages Section */}
            {service.packages && service.packages.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-heading mb-8 text-center text-brand-charcoal dark:text-brand-white">
                  Choose Your <span className="text-primary">Package</span>
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {service.packages.map((pkg) => (
                    <Card
                      key={pkg.name}
                      className={`flex flex-col ${pkg.popular ? "border-primary border-2 shadow-primary/30 shadow-lg" : "shadow-lg dark:bg-brand-charcoal-light"}`}
                    >
                      {pkg.popular && (
                        <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center py-1.5 rounded-t-md">
                          Most Popular
                        </div>
                      )}
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-xl font-bold text-brand-charcoal dark:text-brand-white">
                          {pkg.name}
                        </CardTitle>
                        <p className="text-3xl font-extrabold text-primary">{pkg.price}</p>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between">
                        <ul className="space-y-2 text-sm text-brand-steel-gray dark:text-brand-light-gray/80 mb-6">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-auto"
                          asChild
                        >
                          <Link
                            href={`/quote?service=${service.slug}&package=${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            Select Package
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
            {service.startingPrice && !service.packages && (
              <section className="mb-12 p-6 bg-primary/10 dark:bg-primary/20 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">Starting From</h3>
                <p className="text-4xl font-bold text-brand-charcoal dark:text-brand-white mb-4">
                  {service.startingPrice}
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/quote?service=${service.slug}`}>Get a Precise Quote</Link>
                </Button>
              </section>
            )}

            {/* Gallery Section */}
            {service.galleryImages && service.galleryImages.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-heading mb-6 text-brand-charcoal dark:text-brand-white">
                  Visual <span className="text-primary">Showcase</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.galleryImages.map((image, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={image.src || "/placeholder.svg?width=600&height=400&query=detailing+result"}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-1 space-y-10">
            {/* FAQs Section */}
            {service.faqs && service.faqs.length > 0 && (
              <section>
                <h3 className="text-xl md:text-2xl font-heading mb-4 text-brand-charcoal dark:text-brand-white">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b dark:border-brand-steel-gray/50"
                    >
                      <AccordionTrigger className="text-left hover:no-underline text-brand-charcoal dark:text-brand-white">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-brand-steel-gray dark:text-brand-light-gray/70">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {/* Related Services Section */}
            {relatedServicesDetails && relatedServicesDetails.length > 0 && (
              <section>
                <h3 className="text-xl md:text-2xl font-heading mb-4 text-brand-charcoal dark:text-brand-white">
                  Related <span className="text-primary">Services</span>
                </h3>
                <div className="space-y-3">
                  {relatedServicesDetails.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/services/${related.slug}`}
                      className="flex items-center p-4 rounded-lg bg-brand-light-gray dark:bg-brand-charcoal-light hover:shadow-lg transition-shadow group glassmorphic"
                    >
                      {related.icon ? ( // Use the main icon for related services list
                        <div className="mr-3 text-primary">
                          {typeof related.icon === "function"
                            ? (related.icon as () => React.ReactNode)()
                            : related.icon}
                        </div>
                      ) : (
                        <Sparkles className="w-6 h-6 text-primary mr-3" />
                      )}
                      <div>
                        <h4 className="font-semibold text-brand-charcoal dark:text-brand-white group-hover:text-primary transition-colors">
                          {related.title}
                        </h4>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </section>
            )}
            <section className="p-6 bg-primary/10 dark:bg-primary/20 rounded-lg text-center sticky top-24">
              <h3 className="text-xl font-bold text-primary mb-3">Ready to Transform Your Vehicle?</h3>
              <p className="text-sm text-brand-steel-gray dark:text-brand-light-gray/80 mb-4">
                Let our experts bring out the best in your car with our {service.title} service.
              </p>
              <Button size="lg" asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-2">
                <Link href={`/quote?service=${service.slug}`}>Get Your Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full border-primary text-primary hover:bg-primary/10"
              >
                <Link href={`/book?service=${service.slug}`}>Book Appointment</Link>
              </Button>
            </section>
          </aside>
        </div>
      </div>
      <CtaSection
        title={`Experience the Best ${service.title}`}
        description={`Ready to give your car the ${service.title.toLowerCase()} it deserves? Contact us today or book online for a premium detailing experience.`}
        buttonText="Book Your Service Now"
        buttonLink={`/book?service=${service.slug}`}
      />
    </div>
  )
}
