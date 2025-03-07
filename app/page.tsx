"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Award, Calendar, FileText, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CounterAnimation } from "@/components/counter-animation"
import { ContentCarousel } from "@/components/content-carousel"
import { Navbar } from "@/components/navbar"
import { HomeEventsSection } from "@/components/home-events-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.1),transparent_70%)]" />
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full opacity-20">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-orange-500/20" />
              ))}
            </div>
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl space-y-6"
            >
              <div className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500 border border-orange-500/20">
                Welcome to the Department of Computer Engineering
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Shaping the <span className="text-orange-500">Future</span> of Technology
              </h1>
              <p className="text-xl text-gray-400">
                Empowering students with cutting-edge knowledge and skills to innovate and lead in the digital era.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black rounded-full">Explore Programs</Button>
                <Button
                  variant="outline"
                  className="border-orange-500/50 text-orange-500 hover:bg-orange-500/10 rounded-full"
                >
                  Meet Our Faculty
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section id="about" className="py-20 bg-zinc-900/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-2">Vision & Mission</h2>
              <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 p-8 rounded-lg border border-orange-500/20 relative overflow-hidden group"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
                <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Vision</h3>
                <p className="text-gray-300 relative z-10">
                  To be a globally recognized center of excellence in computer engineering education and research,
                  producing innovative leaders who drive technological advancement and societal impact.
                </p>
                <div className="absolute bottom-4 right-4 text-orange-500/20">
                  <Lightbulb size={60} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 p-8 rounded-lg border border-orange-500/20 relative overflow-hidden group"
              >
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
                <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Mission</h3>
                <p className="text-gray-300 relative z-10">
                  To provide high-quality education that combines theoretical knowledge with practical skills, foster
                  research and innovation, promote industry collaboration, and instill ethical values to prepare
                  students for successful careers in the ever-evolving field of computer engineering.
                </p>
                <div className="absolute bottom-4 right-4 text-orange-500/20">
                  <FileText size={60} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 relative overflow-hidden">
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
              <h2 className="text-3xl font-bold mb-2">Our Achievements</h2>
              <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Celebrating excellence in academics, research, and innovation through our remarkable accomplishments.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <AchievementCard
                icon={<Calendar className="h-8 w-8" />}
                title="Events Hosted"
                value={120}
                description="International and national events"
              />
              <AchievementCard
                icon={<Award className="h-8 w-8" />}
                title="Awards Won"
                value={85}
                description="Recognition for excellence"
              />
              <AchievementCard
                icon={<Lightbulb className="h-8 w-8" />}
                title="Projects Completed"
                value={350}
                description="Innovative student projects"
              />
              <AchievementCard
                icon={<FileText className="h-8 w-8" />}
                title="Research Papers"
                value={210}
                description="Published in prestigious journals"
              />
            </div>
          </div>
        </section>

        {/* Events Section */}
        <HomeEventsSection />

        {/* Featured Content */}
        <section className="py-20">
          <div className="container">
            <h3 className="text-2xl font-bold mb-6">Featured Content</h3>
            <ContentCarousel />
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-black to-zinc-900">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Stay Updated</h2>
                <p className="text-gray-400">
                  Subscribe to our newsletter to receive updates on upcoming events, research opportunities, and
                  department news.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-zinc-800 border border-orange-500/30 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 flex-grow"
                  />
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black rounded-full">Subscribe</Button>
                </div>
              </motion.div>
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
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3" /> Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3" /> Faculty
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3" /> Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3" /> Publications
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3" /> Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3" /> Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3" /> E-Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3" /> Career Services
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

function AchievementCard({ icon, title, value, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-zinc-800/50 p-6 rounded-lg border border-orange-500/20 text-center group hover:bg-zinc-800 transition-all duration-300"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 mb-4 group-hover:bg-orange-500/20 transition-all duration-300">
        {icon}
      </div>
      <CounterAnimation value={value} className="text-4xl font-bold text-white mb-1" />
      <h3 className="text-lg font-medium text-orange-500 mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  )
}

