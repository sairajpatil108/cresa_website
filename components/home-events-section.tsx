"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample events data
const events = [
  {
    id: "ai-workshop",
    title: "AI & Machine Learning Workshop",
    date: "March 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "A hands-on workshop exploring the latest advancements in AI and machine learning technologies.",
    category: "Workshop",
    status: "upcoming",
  },
  {
    id: "national-hackathon",
    title: "National Hackathon 2023",
    date: "February 8-10, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "A 48-hour coding competition where students developed innovative solutions for real-world problems.",
    category: "Competition",
    status: "ongoing",
  },
  {
    id: "expert-talk",
    title: "Industry Expert Talk Series",
    date: "January 25, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Leading professionals from top tech companies shared insights on emerging technologies and career opportunities.",
    category: "Seminar",
    status: "past",
  },
  {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp",
    date: "April 5, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "Learn modern web development with React, Next.js and more in this intensive bootcamp.",
    category: "Workshop",
    status: "upcoming",
  },
  {
    id: "research-symposium",
    title: "Research Symposium",
    date: "March 30, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "Annual research showcase featuring student and faculty projects.",
    category: "Conference",
    status: "upcoming",
  },
  {
    id: "tech-fest",
    title: "Annual Tech Fest 2023",
    date: "March 1-3, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "The department's flagship technical festival with competitions, workshops and more.",
    category: "Festival",
    status: "ongoing",
  },
]

export function HomeEventsSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(0)
  const eventsPerPage = 3

  const filteredEvents = events.filter((event) => {
    if (activeFilter === "all") return true
    return event.status === activeFilter
  })

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)
  const displayedEvents = filteredEvents.slice(currentPage * eventsPerPage, (currentPage + 1) * eventsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section id="events" className="py-20 bg-zinc-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Events & Activities</h2>
            <div className="h-1 w-20 bg-orange-500"></div>
            <p className="mt-4 text-gray-400 max-w-2xl">
              Explore our latest events, workshops, and activities that showcase our vibrant academic community.
            </p>
          </div>
          <Link
            href="/events"
            className="mt-4 md:mt-0 text-orange-500 hover:text-orange-400 transition-colors flex items-center group"
          >
            View All Events
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <FilterButton active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>
            All Events
          </FilterButton>
          <FilterButton active={activeFilter === "upcoming"} onClick={() => setActiveFilter("upcoming")}>
            Upcoming
          </FilterButton>
          <FilterButton active={activeFilter === "ongoing"} onClick={() => setActiveFilter("ongoing")}>
            Ongoing
          </FilterButton>
          <FilterButton active={activeFilter === "past"} onClick={() => setActiveFilter("past")}>
            Past
          </FilterButton>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {displayedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-zinc-800/50 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge
                      className={`${
                        event.status === "upcoming"
                          ? "bg-green-500 hover:bg-green-600 text-black"
                          : event.status === "ongoing"
                            ? "bg-blue-500 hover:bg-blue-600 text-black"
                            : "bg-gray-500 hover:bg-gray-600 text-white"
                      }`}
                    >
                      {event.status === "upcoming" ? "Upcoming" : event.status === "ongoing" ? "Ongoing" : "Past"}
                    </Badge>
                  </div>

                  <Badge className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600 text-black">
                    {event.category}
                  </Badge>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{event.description}</p>
                  <Link href={`/events/${event.id}`}>
                    <Button className="w-full bg-zinc-700/50 hover:bg-orange-500 text-white hover:text-black border border-orange-500/20 transition-colors duration-300">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="rounded-full border-orange-500/30 text-orange-500 hover:bg-orange-500/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="text-sm text-gray-400">
              {currentPage + 1} / {totalPages}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              className="rounded-full border-orange-500/30 text-orange-500 hover:bg-orange-500/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        active ? "bg-orange-500 text-black" : "bg-zinc-800/70 text-gray-300 hover:bg-zinc-700/70"
      }`}
    >
      {children}
    </button>
  )
}

