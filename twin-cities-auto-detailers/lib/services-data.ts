import React from "react"
import { Car, SprayCan, ShieldAlert, Wand2, WindIcon, CheckCircle, Sparkle } from "lucide-react"

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServicePackage {
  name: string
  price: string
  features: string[]
  popular?: boolean
}

export interface ServiceDetails {
  slug: string
  title: string
  tagline: string
  icon?: React.ReactNode // For display on the all services page
  heroIcon?: React.ReactNode // For display on the individual service page hero
  heroImage: string
  description: string[] // Array of paragraphs
  benefits: { title: string; description: string; icon?: React.ReactNode }[]
  whatsIncluded: { item: string; details?: string; icon?: React.ReactNode }[]
  packages?: ServicePackage[] // Optional pricing packages
  startingPrice?: string // Alternative to packages
  galleryImages: { src: string; alt: string }[]
  faqs: ServiceFAQ[]
  relatedServices: { slug: string; title: string; icon?: React.ReactNode }[]
}

export const servicesData: ServiceDetails[] = [
  {
    slug: "interior-detailing",
    title: "Interior Detailing",
    tagline: "Revitalize Your Vehicle\'s Inner Sanctum",
    icon: React.createElement(Car, { className: "w-8 h-8 text-primary" }),
    heroIcon: React.createElement(Car, { className: "w-12 h-12 text-primary" }),
    heroImage: "/luxury-car-interior.png",
    description: [
      "Experience a new level of clean with our comprehensive interior detailing services. We meticulously treat every surface, from carpets and upholstery to dashboards and door panels, ensuring your vehicle's interior is not just clean, but hygienically refreshed and visually stunning.",
      "Our process involves deep cleaning techniques to remove embedded dirt, stubborn stains, and unpleasant odors. We use specialized tools and premium, safe cleaning solutions to restore the look and feel of your car's interior, making your driving experience more enjoyable and comfortable.",
    ],
    benefits: [
      {
        title: "Enhanced Comfort",
        description: "A clean, fresh interior significantly improves driving pleasure.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Improved Air Quality",
        description: "Removal of dust, allergens, and bacteria for healthier air.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Preserved Value",
        description: "Regular interior care maintains your vehicle's condition and resale value.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Stain & Odor Removal",
        description: "Effective treatment for common issues like spills, pet odors, and smoke.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
    ],
    whatsIncluded: [
      { item: "Thorough Vacuuming", details: "Carpets, seats, mats, and trunk" },
      { item: "Steam Cleaning & Shampooing", details: "Carpets, upholstery, and floor mats" },
      { item: "Leather Cleaning & Conditioning", details: "For leather seats and surfaces" },
      { item: "Dashboard & Console Cleaning", details: "Detailed cleaning and UV protection" },
      { item: "Door Panel & Jamb Cleaning" },
      { item: "Interior Glass Cleaning" },
      { item: "Odor Neutralization (if needed)" },
    ],
    packages: [
      {
        name: "Standard Interior",
        price: "$149+",
        features: ["Full Vacuum", "Wipe Down Surfaces", "Windows Cleaned", "Basic Stain Removal"],
        popular: false,
      },
      {
        name: "Premium Interior",
        price: "$249+",
        features: [
          "Standard Package",
          "Deep Carpet & Upholstery Shampoo",
          "Leather Clean & Condition",
          "Detailed Console & Vents",
        ],
        popular: true,
      },
      {
        name: "Ultimate Interior Revival",
        price: "$399+",
        features: ["Premium Package", "Ozone Treatment/Odor Bomb", "Headliner Cleaning", "Fabric Protection"],
        popular: false,
      },
    ],
    galleryImages: [
      { src: "/clean-car-dashboard.png", alt: "Clean car dashboard" },
      { src: "/placeholder-4h386.png", alt: "Detailed car seats" },
      { src: "/car-interior-before-after.png", alt: "Car interior before and after" },
    ],
    faqs: [
      {
        question: "How long does interior detailing take?",
        answer: "Typically 2-5 hours, depending on the vehicle\'s condition and selected package.",
      },
      {
        question: "Do you remove all types of stains?",
        answer:
          "We strive to remove all stains, but some deeply set or aged stains may not be fully removable. We\'ll assess and inform you.",
      },
      {
        question: "Are your cleaning products safe for children and pets?",
        answer: "Yes, we use high-quality, eco-friendly, and non-toxic cleaning solutions where possible.",
      },
    ],
    relatedServices: [
      { slug: "exterior-detailing", title: "Exterior Detailing", icon: React.createElement(SprayCan) },
      { slug: "ceramic-coatings", title: "Ceramic Coatings", icon: React.createElement(Wand2) },
    ],
  },
  {
    slug: "exterior-detailing",
    title: "Exterior Detailing",
    tagline: "Restore Your Car\'s Showroom Shine & Protection",
    icon: React.createElement(SprayCan, { className: "w-8 h-8 text-primary" }),
    heroIcon: React.createElement(SprayCan, { className: "w-12 h-12 text-primary" }),
    heroImage: "/shiny-car-exterior.png",
    description: [
      "Our exterior detailing services are designed to bring back your vehicle's original luster and protect it from the elements. We go beyond a simple wash, employing meticulous techniques to decontaminate, polish, and protect your car's paintwork and exterior surfaces.",
      "From a gentle hand wash to advanced paint correction and sealant application, we tailor our services to your vehicle's specific needs. The result is a stunningly clean, glossy, and well-protected exterior that turns heads.",
    ],
    benefits: [
      {
        title: "Enhanced Appearance",
        description: "Achieve a deep, glossy shine that makes your car look its best.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Paint Protection",
        description: "Shields paint from UV rays, contaminants, and minor scratches.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Increased Resale Value",
        description: "A well-maintained exterior significantly boosts your car's value.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Easier Maintenance",
        description: "Protected surfaces are easier to clean and stay clean longer.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
    ],
    whatsIncluded: [
      { item: "Gentle Hand Wash & Dry" },
      { item: "Wheel & Tire Cleaning & Dressing" },
      { item: "Clay Bar Decontamination", details: "Removes embedded contaminants" },
      { item: "Paint Sealant or Wax Application", details: "For gloss and protection" },
      { item: "Exterior Glass Cleaning" },
      { item: "Trim Restoration & Protection" },
    ],
    packages: [
      {
        name: "Wash & Wax",
        price: "$99+",
        features: [
          "Hand Wash",
          "Clay Bar Light",
          "Premium Wax/Sealant (3-6 months)",
          "Tire Dressing",
          "Exterior Windows",
        ],
        popular: false,
      },
      {
        name: "Polish & Protect",
        price: "$299+",
        features: [
          "Wash & Wax Package",
          "Single-Stage Polish (enhances gloss, minor defects)",
          "Upgraded Sealant (6-9 months)",
        ],
        popular: true,
      },
      {
        name: "Full Exterior Revival",
        price: "$499+",
        features: [
          "Polish & Protect Package",
          "Two-Stage Paint Correction (removes moderate swirls/scratches)",
          "Premium Long-Lasting Sealant (12+ months)",
        ],
        popular: false,
      },
    ],
    galleryImages: [
      { src: "/car-hand-wash.png", alt: "Car being hand washed" },
      { src: "/glossy-car-paint.png", alt: "Glossy car paint finish" },
      { src: "/placeholder-57f2i.png", alt: "Detailed car wheels" },
    ],
    faqs: [
      {
        question: "How often should I get my car exterior detailed?",
        answer:
          "We recommend a full exterior detail every 3-6 months, with regular washes in between, depending on driving conditions and storage.",
      },
      {
        question: "What\'s the difference between wax and sealant?",
        answer:
          "Wax typically provides a warm gloss and lasts a few weeks to months. Sealants are synthetic, offer longer-lasting protection (months to a year), and often a sharper shine.",
      },
    ],
    relatedServices: [
      { slug: "interior-detailing", title: "Interior Detailing", icon: React.createElement(Car) },
      { slug: "paint-correction", title: "Paint Correction", icon: React.createElement(ShieldAlert) },
      { slug: "ceramic-coatings", title: "Ceramic Coatings", icon: React.createElement(Wand2) },
    ],
  },
  {
    slug: "paint-correction",
    title: "Paint Correction",
    tagline: "Erase Imperfections, Restore Flawless Shine",
    icon: React.createElement(ShieldAlert, { className: "w-8 h-8 text-primary" }),
    heroIcon: React.createElement(ShieldAlert, { className: "w-12 h-12 text-primary" }),
    heroImage: "/sports-car-paint-correction.png",
    description: [
      "Paint correction is the meticulous process of restoring and rejuvenating your vehicle's paintwork by removing imperfections such as swirl marks, fine scratches, oxidation, water spots, and etchings. This is achieved through careful machine polishing with various grades of compounds and polishes.",
      "Our skilled technicians analyze your paint's condition and employ precise techniques to level the clear coat, revealing a deep, glossy, and flawless finish. This service is essential for achieving true optical clarity and is the perfect preparation for ceramic coatings or paint protection film.",
    ],
    benefits: [
      {
        title: "Flawless Finish",
        description: "Eliminates unsightly swirls, scratches, and other surface defects.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Enhanced Gloss & Clarity",
        description: "Restores a deep, wet look and vibrant color to your paint.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Increased Resale Value",
        description: "Perfect paintwork significantly boosts your vehicle's appeal and value.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Optimal Surface for Protection",
        description: "Creates the ideal base for ceramic coatings or PPF to bond effectively.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
    ],
    whatsIncluded: [
      { item: "Thorough Decontamination Wash & Clay Bar" },
      { item: "Paint Thickness Measurement (as needed)" },
      { item: "Masking of Sensitive Areas (trim, badges)" },
      { item: "Multi-Stage Machine Compounding (to remove deeper defects)" },
      { item: "Multi-Stage Machine Polishing (to refine finish and enhance gloss)" },
      { item: "Surface Cleansing (IPA wipe-down to remove polishing oils)" },
      { item: "Optional: Application of Paint Sealant or Preparation for Coating" },
    ],
    packages: [
      {
        name: "Single-Stage Correction (Enhancement Polish)",
        price: "$399+",
        features: [
          "Removes light swirls & oxidation",
          "Enhances gloss significantly (approx. 50-70% defect removal)",
          "Ideal for newer vehicles or as a coating prep",
        ],
        popular: false,
      },
      {
        name: "Two-Stage Correction",
        price: "$699+",
        features: [
          "Removes moderate swirls, scratches & water spots",
          "Significant improvement in clarity & gloss (approx. 70-90% defect removal)",
          "Our most popular correction service",
        ],
        popular: true,
      },
      {
        name: "Multi-Stage Correction (Concours Prep)",
        price: "$999+",
        features: [
          "Aims for near-perfect finish",
          "Removes deeper defects where possible (approx. 90%+ defect removal)",
          "For enthusiasts seeking the ultimate finish",
        ],
        popular: false,
      },
    ],
    galleryImages: [
      { src: "/paint-correction-before-after.png", alt: "Paint correction before and after" },
      { src: "/car-swirl-marks.png", alt: "Swirl marks on car paint" },
      { src: "/placeholder-dfj9p.png", alt: "Glossy finish after paint correction" },
    ],
    faqs: [
      {
        question: "How long does paint correction take?",
        answer:
          "Depending on the level of correction and vehicle size, it can take anywhere from 6 hours to multiple days.",
      },
      {
        question: "Will paint correction remove all scratches?",
        answer:
          "It removes imperfections within the clear coat. Scratches deep enough to reach the paint or primer may not be fully removable but can often be significantly improved.",
      },
      {
        question: "Is paint correction permanent?",
        answer:
          "The defects removed are permanently gone. However, new imperfections can be introduced without proper washing techniques and protection.",
      },
    ],
    relatedServices: [
      { slug: "ceramic-coatings", title: "Ceramic Coatings", icon: React.createElement(Wand2) },
      { slug: "paint-protection-film", title: "Paint Protection Film", icon: React.createElement(WindIcon) },
      { slug: "exterior-detailing", title: "Exterior Detailing", icon: React.createElement(SprayCan) },
    ],
  },
  {
    slug: "ceramic-coatings",
    title: "Ceramic Coatings",
    tagline: "The Ultimate in Long-Term Paint Protection & Gloss",
    icon: React.createElement(Wand2, { className: "w-8 h-8 text-primary" }),
    heroIcon: React.createElement(Wand2, { className: "w-12 h-12 text-primary" }),
    heroImage: "/placeholder.svg?width=1200&height=400",
    description: [
      "Elevate your vehicle's protection and appearance with our professional-grade ceramic coating services. A ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory paint, creating a durable, hydrophobic, and incredibly glossy layer of protection.",
      "This advanced technology shields your car from environmental contaminants, UV rays, minor scratches, and chemical etching, all while making it significantly easier to clean. Experience unparalleled shine and peace of mind with a multi-year protective coating.",
    ],
    benefits: [
      {
        title: "Extreme Durability",
        description: "Years of protection, not months.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Superior Hydrophobicity",
        description: "Water and dirt slide off effortlessly, keeping your car cleaner.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Enhanced Gloss & Depth",
        description: "Unmatched candy-like shine and color richness.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Chemical & UV Resistance",
        description: "Protects against bird droppings, tree sap, acid rain, and sun fading.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Scratch Resistance (Minor)",
        description: "Adds a sacrificial layer against light swirls and wash marring.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
    ],
    whatsIncluded: [
      { item: "Thorough Exterior Decontamination Wash" },
      { item: "Clay Bar Treatment" },
      { item: "Paint Correction (level depends on paint condition, quoted separately or included in package)" },
      { item: "Surface Prep Wipe-Down (e.g., IPA)" },
      { item: "Professional Application of Ceramic Coating (Paint, Glass, Wheels optional)" },
      { item: "Infrared Curing (if applicable)" },
    ],
    packages: [
      {
        name: "2-Year Coating",
        price: "$799+",
        features: [
          "Professional Grade 2-Year Ceramic Coating",
          "Includes Single-Stage Paint Correction",
          "Coating on Paint & Trim",
        ],
        popular: false,
      },
      {
        name: "5-Year Coating",
        price: "$1299+",
        features: [
          "Premium 5-Year Ceramic Coating",
          "Includes Multi-Stage Paint Correction",
          "Coating on Paint, Trim & Wheel Faces",
        ],
        popular: true,
      },
      {
        name: "Ultimate 7+ Year Coating",
        price: "$1799+",
        features: [
          "Flagship 7+ Year Ceramic Coating",
          "Includes Extensive Paint Correction",
          "Coating on Paint, Trim, Wheel Faces & Barrels, Glass",
        ],
        popular: false,
      },
    ],
    galleryImages: [
      { src: "/placeholder.svg?width=600&height=400", alt: "Ceramic coating application" },
      { src: "/placeholder.svg?width=600&height=400", alt: "Water beading on ceramic coated car" },
      { src: "/placeholder.svg?width=600&height=400", alt: "Extreme gloss from ceramic coating" },
    ],
    faqs: [
      {
        question: "How long does a ceramic coating last?",
        answer: "Depending on the product and maintenance, our coatings can last from 2 years up to 7+ years.",
      },
      {
        question: "Is paint correction necessary before applying a ceramic coating?",
        answer:
          "Yes, for optimal bonding and appearance, the paint should be as perfect as possible. The level of correction needed will be assessed.",
      },
      {
        question: "How do I maintain a ceramic coated car?",
        answer:
          "Maintenance is easier! Regular gentle hand washes with pH-neutral soap are recommended. Avoid abrasive washes or harsh chemicals.",
      },
    ],
    relatedServices: [
      { slug: "paint-correction", title: "Paint Correction", icon: React.createElement(ShieldAlert) },
      { slug: "exterior-detailing", title: "Exterior Detailing", icon: React.createElement(SprayCan) },
      { slug: "paint-protection-film", title: "Paint Protection Film", icon: React.createElement(WindIcon) },
    ],
  },
  {
    slug: "paint-protection-film",
    title: "Paint Protection Film (PPF)",
    tagline: "Invisible Armor for Your Vehicle\'s Paint",
    icon: React.createElement(WindIcon, { className: "w-8 h-8 text-primary" }),
    heroIcon: React.createElement(WindIcon, { className: "w-12 h-12 text-primary" }),
    heroImage: "/placeholder.svg?width=1200&height=400",
    description: [
      "Paint Protection Film (PPF), also known as clear bra, is a virtually invisible urethane film applied to your vehicle's painted surfaces to protect them from stone chips, bug splatters, minor abrasions, and environmental contaminants.",
      "Our high-quality PPF features self-healing properties for minor scratches, exceptional clarity, and resistance to yellowing. Protect your investment and keep your car looking pristine for years to come.",
    ],
    benefits: [
      {
        title: "Impact Resistance",
        description: "Protects against rock chips and road debris.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Self-Healing Properties",
        description: "Minor scratches disappear with heat.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Stain Resistance",
        description: "Resists bug guts, bird droppings, and tree sap.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Enhanced Resale Value",
        description: "Keeps paint in original condition.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
    ],
    whatsIncluded: [
      { item: "Thorough Vehicle Prep & Decontamination" },
      { item: "Custom Plotter Cut or Bulk Film Installation" },
      { item: "Expert Application by Certified Installers" },
      { item: "Wrapped Edges for Seamless Look (where possible)" },
    ],
    packages: [
      {
        name: "Partial Front End",
        price: "$899+",
        features: ["Full Bumper", "Partial Hood & Fenders", "Mirrors"],
        popular: false,
      },
      {
        name: "Full Front End",
        price: "$1899+",
        features: ["Full Bumper", "Full Hood & Fenders", "Mirrors", "Headlights"],
        popular: true,
      },
      {
        name: "Full Vehicle Wrap",
        price: "$4999+",
        features: ["Complete coverage of all painted surfaces"],
        popular: false,
      },
    ],
    galleryImages: [
      { src: "/placeholder.svg?width=600&height=400", alt: "PPF installation process" },
      { src: "/placeholder.svg?width=600&height=400", alt: "Car hood with PPF" },
    ],
    faqs: [
      { question: "How long does PPF last?", answer: "High-quality PPF can last 5-10 years or more with proper care." },
      {
        question: "Can PPF be removed?",
        answer: "Yes, it can be safely removed by a professional without damaging the paint.",
      },
    ],
    relatedServices: [
      { slug: "ceramic-coatings", title: "Ceramic Coatings", icon: React.createElement(Wand2) },
      { slug: "paint-correction", title: "Paint Correction", icon: React.createElement(ShieldAlert) },
      { slug: "exterior-detailing", title: "Exterior Detailing", icon: React.createElement(SprayCan) },
    ],
  },
  {
    slug: "specialty-services",
    title: "Specialty Detailing Services",
    tagline: "Custom Solutions for Unique Needs",
    icon: React.createElement(Sparkle, { className: "w-8 h-8 text-primary" }),
    heroIcon: React.createElement(Sparkle, { className: "w-12 h-12 text-primary" }),
    heroImage: "/placeholder.svg?width=1200&height=400",
    description: [
      "Beyond our core offerings, we provide a range of specialty detailing services to address specific concerns and enhance particular areas of your vehicle. Whether it's restoring cloudy headlights, deep cleaning an engine bay, or applying protective coatings to unique surfaces, we have the expertise.",
      "Contact us to discuss your specific needs, and we'll tailor a solution for you.",
    ],
    benefits: [
      {
        title: "Targeted Solutions",
        description: "Address specific issues effectively.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Enhanced Safety",
        description: "E.g., headlight restoration improves visibility.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
      {
        title: "Complete Care",
        description: "Ensure every part of your vehicle is pristine.",
        icon: React.createElement(CheckCircle, { className: "text-green-500" }),
      },
    ],
    whatsIncluded: [
      { item: "Headlight Restoration" },
      { item: "Engine Bay Cleaning & Dressing" },
      { item: "Convertible Top Cleaning & Protection" },
      { item: "Wheel & Caliper Coatings" },
      { item: "Glass Polishing & Coatings" },
      { item: "Odor Elimination (Ozone Treatment)" },
      { item: "Pet Hair Removal" },
      // Add more as needed
    ],
    startingPrice: "$79+", // General starting price, specific services vary
    galleryImages: [
      { src: "/paint-correction-before-after.png", alt: "Headlight restoration before and after" },
      { src: "/car-swirl-marks.png", alt: "Clean engine bay" },
    ],
    faqs: [
      {
        question: "Do you offer custom detailing packages?",
        answer: "Yes, we can create custom packages based on your specific requirements.",
      },
      {
        question: "How much do specialty services cost?",
        answer: "Pricing varies depending on the specific service and condition. Please contact us for a quote.",
      },
    ],
    relatedServices: [
      { slug: "interior-detailing", title: "Interior Detailing", icon: React.createElement(Car) },
      { slug: "exterior-detailing", title: "Exterior Detailing", icon: React.createElement(SprayCan) },
    ],
  },
]

export const getServiceBySlug = (slug: string): ServiceDetails | undefined => {
  return servicesData.find((service) => service.slug === slug)
}

export const getRelatedServices = (currentSlug: string, slugs: string[]): ServiceDetails[] => {
  return servicesData.filter((service) => slugs.includes(service.slug) && service.slug !== currentSlug)
}
