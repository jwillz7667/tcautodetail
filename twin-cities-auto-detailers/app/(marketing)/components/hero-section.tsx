"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { CheckCircle, ShieldCheck, Award, Zap } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const videoSources = [
  "/videos/hero-video-1.mp4",
  "/videos/hero-video-2.mp4",
  "/videos/hero-video-3.mp4",
  "/videos/hero-video-4.mp4",
  "/videos/hero-video-5.mp4",
]

const CROSSFADE_DURATION = 500 // ms

export default function HeroSection() {
  const benefits = [
    { id: "01", text: "Guaranteed Quality", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
    { id: "02", text: "Eco-Friendly", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { id: "03", text: "Expert Technicians", icon: <Award className="w-5 h-5 text-secondary" /> },
    { id: "04", text: "Cutting-Edge", icon: <Zap className="w-5 h-5 text-purple-500" /> },
  ]

  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], // Track scroll from when section starts until it ends at the top of viewport
  })

  // Parallax for the large "DETAIL" text
  const detailTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) // Moves up faster

  // Parallax for the car image
  const carImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) // Moves down slower

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [nextVideoIndex, setNextVideoIndex] = useState(1 % videoSources.length) // Preload the next one
  const [isFading, setIsFading] = useState(false)

  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)

  // Determine which video element is active and which is preloading
  const [activeVideoRef, setActiveVideoRef] = useState(videoRef1)
  const [preloadVideoRef, setPreloadVideoRef] = useState(videoRef2)

  useEffect(() => {
    // Initial setup: set first video src and preload next
    if (activeVideoRef.current) {
      activeVideoRef.current.src = videoSources[currentVideoIndex]
      activeVideoRef.current.playbackRate = 0.85;
      activeVideoRef.current.play().catch(error => console.error("Error playing video:", error));
    }
    if (preloadVideoRef.current) {
      preloadVideoRef.current.src = videoSources[nextVideoIndex]
      // Don't play, just load
    }
  }, []) // Runs once on mount

  useEffect(() => {
    const currentActiveVideo = activeVideoRef.current
    if (!currentActiveVideo) return

    const handleVideoEnd = () => {
      setIsFading(true)
      // Switch roles of video elements
      const temp = activeVideoRef
      setActiveVideoRef(preloadVideoRef)
      setPreloadVideoRef(temp)

      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videoSources.length)
    }

    currentActiveVideo.addEventListener("ended", handleVideoEnd)
    return () => {
      currentActiveVideo.removeEventListener("ended", handleVideoEnd)
    }
  }, [activeVideoRef, preloadVideoRef])

  useEffect(() => {
    if (isFading && activeVideoRef.current && preloadVideoRef.current) {
      // PreloadVideoRef is now the old active one, activeVideoRef is the new active one
      preloadVideoRef.current.style.opacity = "0" // Old active fades out
      activeVideoRef.current.style.opacity = "1"   // New active fades in
      activeVideoRef.current.playbackRate = 0.85;
      activeVideoRef.current.play().catch(error => console.error("Error playing next video:", error));
      
      // After fade, set up the next video for preloading
      const newNextVideoIndex = (currentVideoIndex + 1) % videoSources.length;
      setNextVideoIndex(newNextVideoIndex);
      if (preloadVideoRef.current) { // This is the old active, now becoming preload
          preloadVideoRef.current.src = videoSources[newNextVideoIndex]; 
      }

      const fadeTimeout = setTimeout(() => {
        setIsFading(false)
      }, CROSSFADE_DURATION)
      return () => clearTimeout(fadeTimeout)
    }
  }, [isFading, currentVideoIndex, activeVideoRef, preloadVideoRef])

  return (
    <section ref={targetRef} className="relative w-full bg-background dark:bg-brand-charcoal-light overflow-hidden hero-section">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden" style={{ opacity: 0.35 }}>
        <video
          ref={videoRef1}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          style={{ opacity: 1 }} // Video 1 starts as visible
          playsInline
          muted
          controls={false}
          // loop // Custom looping logic will handle this
        />
        <video
          ref={videoRef2}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          style={{ opacity: 0 }} // Video 2 starts as hidden
          playsInline
          muted
          controls={false}
          // loop
        />
      </div>
      
      {/* Original Content (needs to be above the video background) */}
      <div className="relative z-10 container pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6 text-brand-charcoal dark:text-brand-white">
              <span className="block">Twin Cities #1</span>
              <span className="block text-primary">Auto Detailing Service</span>
              <span className="block">To Your Door</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-steel-gray dark:text-brand-light-gray/80 mb-8 max-w-lg">
              Experience meticulous car care with Twin Cities Auto Detailers. We combine passion, precision, and premium
              products for a finish that speaks volumes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 btn-neumorphic-light dark:btn-neumorphic-dark"
              >
                <Link href="/quote">Get an Instant Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>

          <div className="relative h-64 md:h-[500px]">
            {/* Ensure container has defined height for parallax positioning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ y: carImageY }}
              className="absolute inset-0 flex items-center justify-center" // Use absolute positioning for parallax
            >
              <Image
                src="/images/twin-cities-auto-detailers-logo.png"
                alt="Twin Cities Auto Detailers Logo"
                width={700} // Will be overridden by className for responsive sizing
                height={438} // Will be overridden by className for responsive sizing
                priority
                className="rounded-lg object-contain relative z-[5] w-4/5 h-auto max-w-2xl drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Benefits bar - similar to the numbered bar in the example */}
      <div className="relative z-10 bg-background dark:bg-brand-charcoal border-t border-b border-border/60 py-6 md:py-8 mt-8 md:mt-12">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 text-center">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + Number.parseInt(benefit.id) * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 mb-2 border border-primary/30">
                  {benefit.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-foreground dark:text-brand-light-gray/90">
                  {benefit.text.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
