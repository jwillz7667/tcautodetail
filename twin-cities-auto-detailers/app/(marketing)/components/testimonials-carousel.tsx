"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "Absolutely blown away by the results! My car looks newer than when I bought it. The attention to detail is incredible. Highly recommend Twin Cities Auto Detailers!",
    service: "Full Detail Package",
  },
  {
    name: "John B.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "Professional service from start to finish. The ceramic coating they applied is fantastic – water just beads off. Worth every penny.",
    service: "Ceramic Coating",
  },
  {
    name: "Mike P.",
    avatar: "/placeholder-user.jpg",
    rating: 4,
    text: "Great job on the interior. Got rid of some tough stains I thought were permanent. Scheduling was easy too.",
    service: "Interior Detailing",
  },
  {
    name: "Emily R.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "My car had seen better days, but after their paint correction service, it looks absolutely stunning. The gloss is incredible!",
    service: "Paint Correction",
  },
  {
    name: "David K.",
    avatar: "/placeholder-user.jpg",
    rating: 4,
    text: "Efficient and thorough. They did a great job with the exterior wash and wax. Will be back for a full detail soon.",
    service: "Exterior Wash & Wax",
  },
]

export default function TestimonialsCarousel() {
  return (
    <section className="py-16 md:py-24 bg-background dark:bg-brand-charcoal-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4 text-brand-charcoal dark:text-brand-white">
            Hear From Our <span className="text-primary">Happy Clients</span>
          </h2>
          <p className="text-lg text-brand-steel-gray dark:text-brand-light-gray/80 max-w-2xl mx-auto">
            We take pride in our work, and our customers agree. See what they have to say about their experience.
          </p>
        </motion.div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper pb-10"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full pb-4">
              <Card className="h-full flex flex-col bg-background dark:bg-brand-charcoal shadow-lg hover:shadow-xl transition-shadow duration-300 glassmorphic">
                <CardContent className="pt-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.substring(0, 1)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-brand-charcoal dark:text-brand-white">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-secondary fill-secondary" : "text-muted-foreground/50"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-brand-steel-gray dark:text-brand-light-gray/80 flex-grow">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
