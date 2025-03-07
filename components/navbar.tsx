"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className={`rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-between px-6 py-2 ${
            scrolled ? "bg-black/80 border border-orange-500/20 shadow-lg shadow-orange-500/5" : "bg-black/40"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-orange-500">
              <Image src="/placeholder.svg?height=40&width=40" alt="Department Logo" fill className="object-cover" />
            </div>
            <div className="font-bold tracking-tight">
              <span className="text-orange-500">Computer</span> Engineering
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/#home">Home</NavLink>
            <NavLink href="/#about">About</NavLink>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="group px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500 flex items-center">
                  Events
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="bg-zinc-900/95 backdrop-blur-md border-orange-500/20 rounded-xl"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/events"
                    className="cursor-pointer hover:bg-orange-500/10 hover:text-orange-500 focus:bg-orange-500/10 focus:text-orange-500"
                  >
                    All Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/events?filter=upcoming"
                    className="cursor-pointer hover:bg-orange-500/10 hover:text-orange-500 focus:bg-orange-500/10 focus:text-orange-500"
                  >
                    Upcoming Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/events?filter=ongoing"
                    className="cursor-pointer hover:bg-orange-500/10 hover:text-orange-500 focus:bg-orange-500/10 focus:text-orange-500"
                  >
                    Ongoing Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/events?filter=past"
                    className="cursor-pointer hover:bg-orange-500/10 hover:text-orange-500 focus:bg-orange-500/10 focus:text-orange-500"
                  >
                    Past Events
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink href="/#achievements">Achievements</NavLink>
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/#testimonials">Testimonials</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black rounded-full"
            >
              Student Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-50 p-2 text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center z-40"
              >
                <nav className="flex flex-col items-center gap-6 text-lg">
                  <MobileNavLink href="/#home" onClick={() => setIsOpen(false)}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink href="/#about" onClick={() => setIsOpen(false)}>
                    About
                  </MobileNavLink>
                  <MobileNavLink href="/events" onClick={() => setIsOpen(false)}>
                    Events
                  </MobileNavLink>
                  <MobileNavLink href="/#achievements" onClick={() => setIsOpen(false)}>
                    Achievements
                  </MobileNavLink>
                  <MobileNavLink href="/team" onClick={() => setIsOpen(false)}>
                    Team
                  </MobileNavLink>
                  <MobileNavLink href="/#testimonials" onClick={() => setIsOpen(false)}>
                    Testimonials
                  </MobileNavLink>
                 

                  <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-black rounded-full">
                    Contact
                  </Button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500 group">
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-xl font-medium transition-colors hover:text-orange-500 py-2"
    >
      {children}
    </Link>
  )
}

