"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Professor of AI & Machine Learning",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The Computer Engineering Department has fostered an environment of innovation and excellence. The students consistently demonstrate exceptional technical skills and creative problem-solving abilities.",
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Alumni, Software Engineer at Google",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "My time at the Computer Engineering Department provided me with the foundation I needed to succeed in the tech industry. The hands-on projects and dedicated faculty prepared me for real-world challenges.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Current Student, Final Year",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Being part of this department has been transformative. The opportunities for research, industry collaboration, and peer learning have helped me grow both technically and personally.",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Industry Partner, CTO at TechSolutions",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "We've hired several graduates from this department, and they consistently bring exceptional skills and fresh perspectives to our team. The curriculum clearly aligns with industry needs.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const nextTestimonial = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,100,0,0.1),transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">What People Say</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Hear from our faculty, students, alumni, and industry partners about their experiences with the Computer
            Engineering Department.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 md:p-12 min-h-[300px] relative overflow-hidden">
            <div className="absolute top-6 left-6 text-orange-500/20">
              <Quote size={120} />
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative z-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-200 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-orange-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-orange-500/30 text-orange-500 hover:bg-orange-500/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-orange-500/30 text-orange-500 hover:bg-orange-500/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

