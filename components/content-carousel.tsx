"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

// Sample carousel items
const carouselItems = [
  {
    id: 1,
    type: "video",
    title: "Annual Tech Symposium 2023",
    description:
      "Highlights from our flagship event featuring keynote speeches, project exhibitions, and award ceremonies.",
    media: "/placeholder-video.mp4",
    thumbnail: "/gathering1.jpg?height=500&width=1000",
  },
  {
    id: 2,
    type: "image",
    title: "Robotics Competition",
    description: "Students showcasing their innovative robotics projects at the inter-university competition.",
    media: "/gathering2.jpg?height=500&width=1000",
  },

  {
    id: 3,
    type: "image",
    title: "Industry Visit to Tech Giant",
    description:
      "Students visited the headquarters of a leading technology company to gain insights into industry practices.",
    media: "/hackathon1.jpg?height=500&width=1000",
  },
  {
    id: 4,
    type: "video",
    title: "AI Research Showcase",
    description: "Presentation of groundbreaking research projects in artificial intelligence and machine learning.",
    media: "/placeholder-video.mp4",
    thumbnail: "/gathering3.jpeg?height=500&width=1000",
  },
]

export function ContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const totalItems = carouselItems.length

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()

    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
      }, 6000)
    }

    return () => {
      resetTimeout()
    }
  }, [currentIndex, isPlaying, totalItems])

  const goToPrevious = () => {
    resetTimeout()
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)
  }

  const goToNext = () => {
    resetTimeout()
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
  }

  const goToSlide = (index: number) => {
    resetTimeout()
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const currentItem = carouselItems[currentIndex]

  return (
    <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 border border-orange-500/20">
      <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
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
            className="absolute inset-0 w-full h-full"
          >
            {currentItem.type === "video" && (
              <div className="relative w-full h-full">
                <Image
                  src={currentItem.thumbnail || "/placeholder.svg"}
                  alt={currentItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-16 h-16 bg-orange-500/90 border-orange-500 text-black hover:bg-orange-600 hover:text-black"
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              </div>
            )}

            {currentItem.type === "image" && (
              <Image
                src={currentItem.media || "/placeholder.svg"}
                alt={currentItem.title}
                fill
                className="object-cover"
              />
            )}

            {currentItem.type === "testimonial" && (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-zinc-900 to-black p-8">
                <div className="max-w-3xl text-center">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={currentItem.avatar || "/placeholder.svg"}
                      alt={currentItem.name}
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-orange-500"
                    />
                  </div>
                  <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-6">
                    "{currentItem.quote}"
                  </blockquote>
                  <div className="text-orange-500 font-bold">{currentItem.name}</div>
                  <div className="text-gray-400">{currentItem.role}</div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Content overlay */}
        {currentItem.type !== "testimonial" && (
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black via-black/70 to-transparent">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{currentItem.title}</h3>
            <p className="text-gray-300 max-w-2xl">{currentItem.description}</p>
          </div>
        )}

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicators and controls */}
      <div className="flex items-center justify-between p-4 border-t border-orange-500/20">
        <Button variant="ghost" size="sm" onClick={toggleAutoPlay} className="text-gray-400 hover:text-white">
          {isPlaying ? "Pause" : "Play"}
        </Button>

        <div className="flex gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-orange-500 scale-110" : "bg-gray-600 hover:bg-gray-500"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-gray-400 text-sm">
          {currentIndex + 1} / {totalItems}
        </div>
      </div>
    </div>
  )
}

