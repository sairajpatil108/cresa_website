import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, ArrowLeft, Share2, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { VideoPlayer } from "@/components/video-player"

// This would typically come from a database or API
const getEventById = (id: string) => {
  const events = {
    "ai-workshop": {
      id: "ai-workshop",
      title: "AI & Machine Learning Workshop",
      date: "March 15, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Engineering Building, Room 305",
      category: "Workshop",
      image: "/placeholder.svg?height=500&width=1000",
      description: "A hands-on workshop exploring the latest advancements in AI and machine learning technologies.",
      content: `
        <p>Join us for an immersive one-day workshop on Artificial Intelligence and Machine Learning, where participants will gain practical experience with cutting-edge technologies and frameworks.</p>
        
        <h3>Workshop Highlights:</h3>
        <ul>
          <li>Introduction to neural networks and deep learning</li>
          <li>Hands-on sessions with TensorFlow and PyTorch</li>
          <li>Computer vision and natural language processing applications</li>
          <li>Ethical considerations in AI development</li>
          <li>Industry applications and career opportunities</li>
        </ul>
        
        <p>This workshop is designed for students with basic programming knowledge who want to explore the exciting field of AI. All participants will receive certificates of completion and access to workshop materials for continued learning.</p>
        
        <h3>Guest Speakers:</h3>
        <p>We are honored to host Dr. Sarah Johnson, AI Research Lead at TechCorp, and Prof. Michael Chen, author of "Machine Learning: A Practical Approach," who will share their insights and experiences in the field.</p>
      `,
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      videoUrl: "/placeholder-video.mp4",
      speakers: [
        {
          name: "Dr. Sarah Johnson",
          role: "AI Research Lead, TechCorp",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          name: "Prof. Michael Chen",
          role: "Author & AI Researcher",
          image: "/placeholder.svg?height=100&width=100",
        },
      ],
    },
    "national-hackathon": {
      id: "national-hackathon",
      title: "National Hackathon 2023",
      date: "February 8-10, 2023",
      time: "Starts at 9:00 AM",
      location: "University Main Hall",
      category: "Competition",
      image: "/placeholder.svg?height=500&width=1000",
      description:
        "A 48-hour coding competition where students developed innovative solutions for real-world problems.",
      content: `
        <p>The National Hackathon 2023 was a tremendous success, bringing together over 200 talented students from 25 universities across the country. For 48 intense hours, teams collaborated to develop innovative solutions addressing real-world challenges in healthcare, education, sustainability, and smart cities.</p>
        
        <h3>Hackathon Highlights:</h3>
        <ul>
          <li>25 teams competing for prizes worth $10,000</li>
          <li>Industry mentors from leading tech companies</li>
          <li>Workshops on emerging technologies</li>
          <li>Networking opportunities with potential employers</li>
          <li>Demo day with industry judges</li>
        </ul>
        
        <p>The winning team, "CodeCrafters" from our own Computer Engineering Department, developed an AI-powered solution for early detection of crop diseases using smartphone cameras, which could significantly impact agricultural productivity in rural areas.</p>
        
        <h3>Sponsors:</h3>
        <p>We extend our gratitude to our sponsors - TechGiant, InnovateCorp, and DevSolutions - for their generous support in making this event possible.</p>
      `,
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      videoUrl: "/placeholder-video.mp4",
      speakers: [],
    },
    "expert-talk": {
      id: "expert-talk",
      title: "Industry Expert Talk Series",
      date: "January 25, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      category: "Seminar",
      image: "/placeholder.svg?height=500&width=1000",
      description:
        "Leading professionals from top tech companies shared insights on emerging technologies and career opportunities.",
      content: `
        <p>Our Industry Expert Talk Series featured distinguished professionals from leading technology companies who shared valuable insights on emerging technologies, industry trends, and career opportunities for computer engineering graduates.</p>
        
        <h3>Key Topics Covered:</h3>
        <ul>
          <li>The future of cloud computing and edge technologies</li>
          <li>Cybersecurity challenges in the digital age</li>
          <li>How to prepare for careers in emerging tech fields</li>
          <li>The impact of quantum computing on traditional systems</li>
          <li>Soft skills essential for success in the tech industry</li>
        </ul>
        
        <p>The interactive Q&A sessions allowed students to engage directly with industry leaders and gain practical advice on navigating their career paths. The event was attended by over 300 students and faculty members.</p>
        
        <h3>Featured Speakers:</h3>
        <p>We were privileged to host speakers from Google, Microsoft, Amazon Web Services, and several innovative startups, providing a diverse perspective on the technology landscape.</p>
      `,
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      videoUrl: "/placeholder-video.mp4",
      speakers: [
        {
          name: "Alex Rivera",
          role: "Senior Engineer, Google",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          name: "Priya Sharma",
          role: "Cloud Architect, AWS",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          name: "James Wilson",
          role: "CTO, TechStartup",
          image: "/placeholder.svg?height=100&width=100",
        },
      ],
    },
  }

  return events[id as keyof typeof events]
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)

  if (!event) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Event not found</h1>
        <p className="text-gray-400 mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Link href="/#events">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-orange-600/20 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
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
          <nav className="hidden md:flex gap-6">
            <Link href="/#home" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="/#achievements" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Achievements
            </Link>
            <Link href="/#events" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Events
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
            Student Portal
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50 z-10" />
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
          </div>
          <div className="container relative z-20 -mt-20">
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-black">{event.category}</Badge>
                <Badge variant="outline" className="border-orange-500/50 text-orange-500">
                  Computer Engineering
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black">Register Now</Button>
                <Button variant="outline" className="border-orange-500/50 text-orange-500 hover:bg-orange-500/10">
                  <Calendar className="mr-2 h-4 w-4" />
                  Add to Calendar
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-zinc-800">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-zinc-900/50 border border-orange-500/20 rounded-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">About This Event</h2>
                  <div
                    className="prose prose-invert prose-orange max-w-none"
                    dangerouslySetInnerHTML={{ __html: event.content }}
                  />

                  {event.videoUrl && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Event Highlights</h3>
                      <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                        <VideoPlayer videoUrl={event.videoUrl} />
                      </div>
                    </div>
                  )}

                  {event.gallery && event.gallery.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Event Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {event.gallery.map((image, index) => (
                          <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Gallery image ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-zinc-900/50 border border-orange-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Event Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-500/10 rounded-full p-2 mt-1">
                        <Calendar className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <span className="block text-gray-400 text-sm">Date & Time</span>
                        <span className="block font-medium">{event.date}</span>
                        <span className="block">{event.time}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-500/10 rounded-full p-2 mt-1">
                        <MapPin className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <span className="block text-gray-400 text-sm">Location</span>
                        <span className="block font-medium">{event.location}</span>
                      </div>
                    </li>
                  </ul>

                  <Separator className="my-4 bg-orange-500/20" />

                  <div className="flex flex-col gap-3">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">Register Now</Button>
                    <Button
                      variant="outline"
                      className="w-full border-orange-500/50 text-orange-500 hover:bg-orange-500/10"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Button>
                  </div>
                </div>

                {event.speakers && event.speakers.length > 0 && (
                  <div className="bg-zinc-900/50 border border-orange-500/20 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Speakers</h3>
                    <div className="space-y-4">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Image
                            src={speaker.image || "/placeholder.svg"}
                            alt={speaker.name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-medium">{speaker.name}</h4>
                            <p className="text-sm text-gray-400">{speaker.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-zinc-900/50 border border-orange-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Share This Event</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-blue-500/50 text-blue-500 hover:bg-blue-500/10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-blue-700/50 text-blue-700 hover:bg-blue-700/10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-pink-600/50 text-pink-600 hover:bg-pink-600/10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-blue-500/50 text-blue-500 hover:bg-blue-500/10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Events */}
        <section className="py-12 bg-zinc-900/50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Related Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.values(
                getEventById("ai-workshop")
                  ? {
                      "national-hackathon": getEventById("national-hackathon"),
                      "expert-talk": getEventById("expert-talk"),
                    }
                  : {
                      "ai-workshop": getEventById("ai-workshop"),
                      "expert-talk": getEventById("expert-talk"),
                    },
              ).map((relatedEvent) => (
                <div
                  key={relatedEvent.id}
                  className="bg-zinc-800/50 border border-orange-500/20 rounded-lg overflow-hidden group hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedEvent.image || "/placeholder.svg"}
                      alt={relatedEvent.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600 text-black">
                      {relatedEvent.category}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{relatedEvent.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{relatedEvent.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{relatedEvent.description}</p>
                    <Link href={`/events/${relatedEvent.id}`}>
                      <Button variant="link" className="mt-4 p-0 text-orange-500 hover:text-orange-400">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
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
                  <Link href="/#home" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#achievements"
                    className="hover:text-orange-500 transition-colors flex items-center gap-1"
                  >
                    <ArrowLeft className="h-3 w-3" /> Achievements
                  </Link>
                </li>
                <li>
                  <Link href="/#events" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> E-Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> Career Services
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

