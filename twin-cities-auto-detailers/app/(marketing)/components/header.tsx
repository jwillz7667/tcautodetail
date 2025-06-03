"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sparkles, Phone, MapPin, Mail } from "lucide-react" // Removed ShoppingCart
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react" // Import useEffect and useState

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/quote", label: "Pricing/Quote" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false) // Add mounted state

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="font-heading text-xl font-bold tracking-tight">
            Twin Cities <span className="text-primary">Auto</span> Detailers
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-charcoal dark:text-brand-white transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <Link href="/book">Book Now</Link>
          </Button>
          {mounted && ( // Conditionally render based on mounted state
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          {/* Shopping cart icon removed from desktop nav */}
        </nav>

        <div className="md:hidden flex items-center">
          {mounted && ( // Conditionally render based on mounted state
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary" // text-foreground adapts to theme
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-4 bg-primary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
                {/* Shopping cart icon removed from mobile nav */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="bg-muted/50 py-2 border-t border-border/40 hidden md:block">
        <div className="container flex justify-between items-center text-xs text-brand-charcoal dark:text-brand-white">
          <div className="flex gap-4">
            <Link href="tel:+16512869930" className="flex items-center gap-1 hover:text-primary">
              <Phone size={14} /> (651) 286-9930
            </Link>
            <Link href="/contact" className="flex items-center gap-1 hover:text-primary">
              <MapPin size={14} /> Twin Cities, MN
            </Link>
            <Link href="mailto:info@twincitiesautodetailers.com" className="flex items-center gap-1 hover:text-primary">
              <Mail size={14} /> info@twincitiesautodetailers.com
            </Link>
          </div>
          <span>Monday - Sunday: 8 AM - 8 PM</span>
        </div>
      </div>
    </motion.header>
  )
}
