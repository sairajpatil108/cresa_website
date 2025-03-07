import Link from "next/link"
import Image from "next/image"
import { Calendar, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { EventCard } from "@/components/event-card"

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
    featured: true,
  },
  {
    id: "national-hackathon",
    title: "National Hackathon 2023",
    date: "February 8-10, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "A 48-hour coding competition where students developed innovative solutions for real-world problems.",
    category: "Competition",
    status: "ongoing",
    featured: true,
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
    featured: true,
  },
  {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp",
    date: "April 5, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "Learn modern web development with React, Next.js and more in this intensive bootcamp.",
    category: "Workshop",
    status: "upcoming",
    featured: false,
  },
  {
    id: "research-symposium",
    title: "Research Symposium",
    date: "March 30, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "Annual research showcase featuring student and faculty projects.",
    category: "Conference",
    status: "upcoming",
    featured: false,
  },
  {
    id: "alumni-meetup",
    title: "Alumni Networking Event",
    date: "February 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "Connect with successful alumni and build your professional network.",
    category: "Networking",
    status: "past",
    featured: false,
  },
  {
    id: "cybersecurity-workshop",
    title: "Cybersecurity Workshop",
    date: "February 20-22, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "Hands-on training in ethical hacking and security best practices.",
    category: "Workshop",
    status: "past",
    featured: false,
  },
  {
    id: "tech-fest",
    title: "Annual Tech Fest 2023",
    date: "March 1-3, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "The department's flagship technical festival with competitions, workshops and more.",
    category: "Festival",
    status: "ongoing",
    featured: true,
  },
  {
    id: "iot-workshop",
    title: "Internet of Things Workshop",
    date: "April 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "Hands-on workshop on building IoT devices and applications.",
    category: "Workshop",
    status: "upcoming",
    featured: false,
  },
  {
    id: "career-fair",
    title: "Tech Career Fair 2023",
    date: "May 5, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "Meet recruiters from top tech companies and explore career opportunities.",
    category: "Career",
    status: "upcoming",
    featured: false,
  },
  {
    id: "mobile-dev-bootcamp",
    title: "Mobile App Development Bootcamp",
    date: "April 20-22, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "Learn to build cross-platform mobile applications using React Native.",
    category: "Workshop",
    status: "upcoming",
    featured: false,
  },
  {
    id: "data-science-seminar",
    title: "Data Science and Analytics Seminar",
    date: "January 10, 2023",
    image: "/placeholder.svg?height=200&width=400",
    description: "Industry experts discuss the latest trends in data science and analytics.",
    category: "Seminar",
    status: "past",
    featured: false,
  },
]

export default function EventsPage({ searchParams }) {
  const filter = searchParams?.filter || "all"

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true
    return event.status === filter
  })

  const featuredEvents = events.filter((event) => event.featured)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-zinc-900/50 border-b border-orange-500/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Events & Activities</h1>
              <p className="text-gray-400 text-lg mb-6">
                Discover workshops, seminars, competitions, and other activities organized by the Computer Engineering
                Department.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search events..."
                    className="pl-10 bg-zinc-800 border-orange-500/30 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <Button variant="outline" className="border-orange-500/50 text-orange-500 hover:bg-orange-500/10">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-zinc-800/50 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 rounded-lg overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600 text-black">
                      {event.category}
                    </Badge>
                    <Badge
                      className={`absolute top-3 left-3 ${
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
                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                    <Link href={`/events/${event.id}`}>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">View Details</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Events */}
        <section className="py-12 bg-zinc-900/50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">All Events</h2>

            <Tabs defaultValue={filter} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all" asChild>
                  <Link href="/events">All</Link>
                </TabsTrigger>
                <TabsTrigger value="upcoming" asChild>
                  <Link href="/events?filter=upcoming">Upcoming</Link>
                </TabsTrigger>
                <TabsTrigger value="ongoing" asChild>
                  <Link href="/events?filter=ongoing">Ongoing</Link>
                </TabsTrigger>
                <TabsTrigger value="past" asChild>
                  <Link href="/events?filter=past">Past</Link>
                </TabsTrigger>
              </TabsList>

              <TabsContent value={filter} className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      id={event.id}
                      title={event.title}
                      date={event.date}
                      image={event.image}
                      description={event.description}
                      category={event.category}
                      status={event.status}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-12">
          <div className="container">
            <div className="bg-zinc-800/50 border border-orange-500/20 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Event Calendar</h2>
              <p className="text-gray-400 mb-6">
                View our upcoming events calendar to plan your participation. Subscribe to receive notifications for
                events you're interested in.
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black">View Full Calendar</Button>
                <Button variant="outline" className="border-orange-500/50 text-orange-500 hover:bg-orange-500/10">
                  Subscribe to Calendar
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-orange-500/20 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Department Logo"
                  width={40}
                  height={40}
                  className="rounded-md border border-orange-500"
                />
                <div className="font-bold tracking-tight">
                  <span className="text-orange-500">Computer</span> Engineering
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students to become innovative leaders in the field of computer engineering through excellence
                in education and research.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/#home" className="hover:text-orange-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-orange-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-orange-500 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-orange-500 transition-colors">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    E-Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Career Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <address className="text-gray-400 not-italic space-y-2">
                <p>123 University Avenue</p>
                <p>City, State 12345</p>
                <p>Email: info@compeng.edu</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-orange-500/20 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Computer Engineering Department. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

