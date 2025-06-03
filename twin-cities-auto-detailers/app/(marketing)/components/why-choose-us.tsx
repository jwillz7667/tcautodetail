"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Award, Sparkles, ShieldCheck, Leaf } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

const points = [
  {
    icon: <Award className="w-10 h-10 text-primary mb-3" />,
    title: "Unmatched Quality",
    description: "We use premium products and meticulous techniques to deliver showroom-worthy results every time.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-secondary mb-3" />,
    title: "Attention to Detail",
    description: "From intricate interior cleaning to flawless paint correction, no detail is overlooked.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-500 mb-3" />,
    title: "Customer Satisfaction",
    description: "Your satisfaction is our top priority. We strive to exceed expectations with every service.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-teal-500 mb-3" />,
    title: "Eco-Friendly Options",
    description: "We offer environmentally conscious detailing solutions without compromising on quality.",
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Track from when bottom of section hits top of viewport, to when top of section hits bottom
  })

  // Parallax for the background image/video placeholder
  // Make image taller than its container and move it up
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) // Adjust range for desired effect

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background dark:bg-brand-charcoal overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4 text-brand-charcoal dark:text-brand-white">
            Our Promise to <span className="text-primary">You</span>
          </h2>
          <p className="text-lg text-brand-steel-gray dark:text-brand-light-gray/80 max-w-2xl mx-auto">
            At Twin Cities Auto Detailers, we're not just cleaning cars; we're restoring pride and passion in your
            vehicle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-brand-light-gray dark:bg-brand-charcoal-light shadow-lg hover:shadow-xl transition-shadow duration-300 text-center glassmorphic"
            >
              <div className="flex justify-center">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-charcoal dark:text-brand-white">{point.title}</h3>
              <p className="text-sm text-brand-steel-gray dark:text-brand-light-gray/70">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Video section with parallax background image */}
        <div
          className="mt-12 md:mt-16 rounded-xl overflow-hidden shadow-2xl aspect-video relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[575px]" // Reduced mt and height
        >
          <motion.div
            className="absolute inset-0 w-full h-full flex justify-center items-center"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/team-photo.jpeg"
              alt="Car detailing thumbnail"
              width={800} // Reduced width
              height={480} // Reduced height
              style={{ objectFit: "contain", opacity: 0.85 }}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          {/* You can add a play button or other content on top here if it's a video */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Example Play Button Overlay (optional) */}
            {/* <div className="bg-black/30 p-4 rounded-full cursor-pointer pointer-events-auto">
            <Play className="w-12 h-12 text-white" />
          </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
