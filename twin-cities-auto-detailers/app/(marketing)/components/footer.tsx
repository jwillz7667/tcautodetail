import Link from "next/link"
import { Sparkles, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-brand-charcoal text-brand-light-gray/80 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="font-heading text-xl font-bold text-brand-white">
                Twin Cities <span className="text-primary">Auto</span> Detailers
              </span>
            </Link>
            <p className="text-sm">
              Premium auto detailing services by Twin Cities Auto Detailers in the Twin Cities metro area. Meticulous
              care for your vehicle.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-brand-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-primary">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-primary">
                  Book Online
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-brand-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-of-service" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-brand-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="tel:+16512869930" className="hover:text-primary">
                  (651) 286-9930
                </Link>
              </li>
              <li>
                <Link href="mailto:info@twincitiesautodetailers.com" className="hover:text-primary">
                  info@twincitiesautodetailers.com
                </Link>
              </li>
              <li>Twin Cities, MN</li>
              <li>Monday - Sunday: 8 AM - 8 PM</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="Facebook" className="text-brand-light-gray/60 hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-brand-light-gray/60 hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-brand-light-gray/60 hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-brand-light-gray/60 hover:text-primary">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-steel-gray/50 pt-8 text-center text-sm text-brand-charcoal dark:text-brand-white">
          <p>&copy; {currentYear} Twin Cities Auto Detailers. All Rights Reserved.</p>
          <p className="mt-1">Website by Your Vercel AI Assistant</p>
        </div>
      </div>
    </footer>
  )
}
