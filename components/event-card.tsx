"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"

interface EventCardProps {
  title: string
  date: string
  image: string
  description: string
  category: string
  id?: string
  status: "upcoming" | "ongoing" | "past"
}

export function EventCard({ title, date, image, description, category, id = "ai-workshop", status }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="flex flex-col h-full"
    >
      <div className="overflow-hidden bg-zinc-800/50 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 rounded-lg flex flex-col h-full">
        <div className="relative h-32 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600 text-black text-xs">
            {category}
          </Badge>
          <Badge
            className={`absolute top-2 left-2 text-xs ${
              status === "upcoming"
                ? "bg-green-500 hover:bg-green-600 text-black"
                : status === "ongoing"
                  ? "bg-blue-500 hover:bg-blue-600 text-black"
                  : "bg-gray-500 hover:bg-gray-600 text-white"
            }`}
          >
            {status === "upcoming" ? "Upcoming" : status === "ongoing" ? "Ongoing" : "Past"}
          </Badge>
        </div>
        <div className="p-3 flex flex-col flex-grow">
          <div className="flex items-center text-xs text-gray-400 mb-1">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
          <h3 className="text-sm font-bold mb-1 text-white line-clamp-1">{title}</h3>
          <p className="text-xs text-gray-400 line-clamp-2 mb-2 flex-grow">{description}</p>
          <Link
            href={`/events/${id}`}
            className="text-orange-500 text-xs font-medium hover:text-orange-400 transition-colors flex items-center mt-auto"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

