import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import CtaSection from "../components/cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Twin Cities Auto Detailers",
  description:
    "Get in touch with Twin Cities Auto Detailers for inquiries, quotes, or to book your premium auto detailing service. We're here to help!",
}

export default function ContactPage() {
  return (
    <div className="bg-background dark:bg-brand-charcoal">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-background dark:bg-brand-charcoal-light">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50 dark:opacity-30"></div>
        <div className="container relative z-10 text-center">
          <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter mb-4 text-brand-charcoal dark:text-brand-white">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-steel-gray dark:text-brand-light-gray/80 max-w-3xl mx-auto">
            We're here to answer your questions, provide quotes, and schedule your next detailing appointment. Reach out
            to Twin Cities Auto Detailers today!
          </p>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl dark:bg-brand-charcoal-light">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="w-6 h-6 mr-2 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input type="text" placeholder="Your Name" aria-label="Your Name" className="h-12 text-base" />
                    <Input type="email" placeholder="Your Email" aria-label="Your Email" className="h-12 text-base" />
                  </div>
                  <Input type="text" placeholder="Subject" aria-label="Subject" className="h-12 text-base" />
                  <Textarea placeholder="Your Message" aria-label="Your Message" rows={6} className="text-base" />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading mb-4 text-brand-charcoal dark:text-brand-white">
                  Contact Information
                </h2>
                <p className="text-brand-steel-gray dark:text-brand-light-gray/80 mb-6">
                  Prefer to reach us directly? Here's how you can connect with Twin Cities Auto Detailers:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-brand-charcoal dark:text-brand-white">Phone</h4>
                      <a
                        href="tel:+16512869930"
                        className="text-brand-steel-gray dark:text-brand-light-gray/80 hover:text-primary"
                      >
                        (651) 286-9930
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-brand-charcoal dark:text-brand-white">Email</h4>
                      <a
                        href="mailto:info@twincitiesautodetailers.com"
                        className="text-brand-steel-gray dark:text-brand-light-gray/80 hover:text-primary"
                      >
                        info@twincitiesautodetailers.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-brand-charcoal dark:text-brand-white">Location</h4>
                      <p className="text-brand-steel-gray dark:text-brand-light-gray/80">
                        Twin Cities, MN (Mobile Service & In-Shop)
                      </p>
                      <p className="text-xs text-muted-foreground">Our shop location is available by appointment.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-charcoal dark:text-brand-white">Business Hours</h3>
                <p className="text-brand-steel-gray dark:text-brand-light-gray/80">Monday - Sunday: 8 AM - 8 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 md:py-24 bg-background dark:bg-brand-charcoal-light">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12 text-brand-charcoal dark:text-brand-white">
            Find <span className="text-primary">Us</span>
          </h2>
          <div className="aspect-video bg-muted rounded-lg shadow-lg overflow-hidden">
            {/* Placeholder for an embedded map. Replace with actual map iframe or component */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180660.00000000003!2d-93.27000000000001!3d44.970000000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f3a7173!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Map of Twin Cities Area"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-center mt-4 text-sm text-muted-foreground">
            We primarily offer mobile services across the Twin Cities metro. Our shop is available for advanced
            treatments by appointment.
          </p>
        </div>
      </section>

      <CtaSection
        title="Ready to Experience the Best?"
        description="Contact Twin Cities Auto Detailers today for a free quote or to schedule your next detailing service. Let us make your car shine!"
        buttonText="Book Your Appointment"
        buttonLink="/book"
      />
    </div>
  )
}
