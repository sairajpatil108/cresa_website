import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample team data
const leadershipTeam = [
  {
    id: "president",
    name: "Alex Johnson",
    role: "President",
    image: "/person3.jpg?height=300&width=300",
    bio: "Alex is a final year Computer Engineering student with a passion for AI and machine learning. As President, he leads the department's student initiatives and represents student interests to faculty.",
    email: "alex.johnson@example.com",
    linkedin: "https://linkedin.com/in/example",
    twitter: "https://twitter.com/example",
    github: "https://github.com/example",
  },
  {
    id: "vice-president",
    name: "Sophia Chen",
    role: "Vice-President",
    image: "/person6.jpeg?height=300&width=300",
    bio: "Sophia specializes in cybersecurity and works closely with the President to coordinate department activities and manage team operations.",
    email: "sophia.chen@example.com",
    linkedin: "https://linkedin.com/in/example",
    twitter: "https://twitter.com/example",
    github: "https://github.com/example",
  },
]

const domainHeads = [
  {
    id: "technical-head",
    name: "Raj Patel",
    role: "Technical Head",
    image: "/person1.jpg?height=300&width=300",
    bio: "Raj oversees all technical projects and workshops in the department. He has expertise in full-stack development and cloud computing.",
    email: "raj.patel@example.com",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
  },
  {
    id: "marketing-head",
    name: "Emma Wilson",
    role: "Marketing Head",
    image: "/person2.jpg?height=300&width=300",
    bio: "Emma manages the department's branding, social media presence, and promotional activities for events and initiatives.",
    email: "emma.wilson@example.com",
    linkedin: "https://linkedin.com/in/example",
    twitter: "https://twitter.com/example",
  },
  {
    id: "design-head",
    name: "Miguel Rodriguez",
    role: "Design Head",
    image: "/person4.jpg?height=300&width=300",
    bio: "Miguel leads the design team responsible for creating visual assets for department events, publications, and digital platforms.",
    email: "miguel.rodriguez@example.com",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
  },
  {
    id: "sports-head",
    name: "Aisha Khan",
    role: "Sports Head",
    image: "/person5.jpg?height=300&width=300",
    bio: "Aisha coordinates sports activities and competitions for the department, promoting physical fitness and team building.",
    email: "aisha.khan@example.com",
    linkedin: "https://linkedin.com/in/example",
    twitter: "https://twitter.com/example",
  },
  {
    id: "events-head",
    name: "David Park",
    role: "Events Head",
    image: "/placeholder.svg?height=300&width=300",
    bio: "David plans and executes department events, from technical workshops to social gatherings, ensuring smooth operations.",
    email: "david.park@example.com",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
  },
  {
    id: "content-head",
    name: "Priya Sharma",
    role: "Content Head",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Priya manages content creation for the department's blog, newsletter, and social media channels.",
    email: "priya.sharma@example.com",
    linkedin: "https://linkedin.com/in/example",
    twitter: "https://twitter.com/example",
  },
]

const teamMembers = [
  {
    id: "technical-team-1",
    name: "James Wilson",
    role: "Technical Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Backend Development",
  },
  {
    id: "technical-team-2",
    name: "Zara Ahmed",
    role: "Technical Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Mobile Development",
  },
  {
    id: "technical-team-3",
    name: "Lucas Garcia",
    role: "Technical Team",
    image: "/hackathon1.jpg?height=300&width=300",
    specialization: "AI & Machine Learning",
  },
  {
    id: "marketing-team-1",
    name: "Olivia Brown",
    role: "Marketing Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Social Media",
  },
  {
    id: "marketing-team-2",
    name: "Ethan Lee",
    role: "Marketing Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Event Promotion",
  },
  {
    id: "design-team-1",
    name: "Isabella Martinez",
    role: "Design Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "UI/UX Design",
  },
  {
    id: "design-team-2",
    name: "Noah Kim",
    role: "Design Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Graphic Design",
  },
  {
    id: "events-team-1",
    name: "Ava Thompson",
    role: "Events Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Logistics",
  },
  {
    id: "events-team-2",
    name: "William Zhang",
    role: "Events Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Coordination",
  },
  {
    id: "content-team-1",
    name: "Sofia Nguyen",
    role: "Content Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Blog Writing",
  },
  {
    id: "content-team-2",
    name: "Benjamin Clark",
    role: "Content Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Video Production",
  },
  {
    id: "sports-team-1",
    name: "Mia Jackson",
    role: "Sports Team",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Tournament Organization",
  },
]

const facultyAdvisors = [
  {
    id: "faculty-1",
    name: "Dr. Sarah Johnson",
    role: "Faculty Advisor",
    title: "Professor & Department Head",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Johnson specializes in artificial intelligence and machine learning. She provides strategic guidance to the student team and helps align activities with department goals.",
    email: "sarah.johnson@example.edu",
    research: "Artificial Intelligence, Machine Learning, Neural Networks",
  },
  {
    id: "faculty-2",
    name: "Dr. Michael Chen",
    role: "Faculty Advisor",
    title: "Associate Professor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Chen's expertise is in cybersecurity and network systems. He mentors students on technical projects and helps organize industry-focused events.",
    email: "michael.chen@example.edu",
    research: "Cybersecurity, Network Systems, Cryptography",
  },
  {
    id: "faculty-3",
    name: "Prof. Anita Patel",
    role: "Faculty Advisor",
    title: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Prof. Patel focuses on software engineering and project management. She guides students on professional development and industry readiness.",
    email: "anita.patel@example.edu",
    research: "Software Engineering, Project Management, DevOps",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-zinc-900/50 border-b border-orange-500/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h1>
              <p className="text-gray-400 text-lg">
                Meet the dedicated individuals who lead and contribute to the Computer Engineering Department's
                initiatives and activities.
              </p>
            </div>
          </div>
        </section>

        {/* Team Tabs */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="leadership" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="domain-heads">Core Team</TabsTrigger>
                <TabsTrigger value="members">Team Members</TabsTrigger>
                <TabsTrigger value="faculty">Faculty Advisors</TabsTrigger>
              </TabsList>

              {/* Leadership Team */}
              <TabsContent value="leadership" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {leadershipTeam.map((member) => (
                    <LeadershipCard key={member.id} member={member} />
                  ))}
                </div>
              </TabsContent>

              {/* Domain Heads */}
              <TabsContent value="domain-heads" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {domainHeads.map((member) => (
                    <DomainHeadCard key={member.id} member={member} />
                  ))}
                </div>
              </TabsContent>

              {/* Team Members */}
              <TabsContent value="members" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {teamMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </TabsContent>

              {/* Faculty Advisors */}
              <TabsContent value="faculty" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {facultyAdvisors.map((advisor) => (
                    <FacultyAdvisorCard key={advisor.id} advisor={advisor} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Join the Team */}
        <section className="py-12 bg-zinc-900/50">
          <div className="container">
            <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-orange-500/20 rounded-lg p-6 md:p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                Interested in becoming part of the Computer Engineering Department team? We're always looking for
                passionate and talented individuals to join us.
              </p>
              <a
                href="https://forms.gle/EuoaQaF18Rb12nrq8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 inline-block text-center rounded-md"
              >
                Apply Now
              </a>
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
                <p>Pimpri Chinchwad College Of Engineering</p>
                <p>Pune, Maharashtra 411044</p>
                <p>Email: pccoepune.org</p>
                <p>Phone: 767-456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-orange-500/20 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Computer Engineering Regional Department. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Leadership Card Component
function LeadershipCard({ member }) {
  return (
    <div className="bg-zinc-800/50 border border-orange-500/20 rounded-lg overflow-hidden group hover:border-orange-500/40 transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-full min-h-[300px]">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white">{member.name}</h3>
          <p className="text-orange-500 font-medium mb-4">{member.role}</p>
          <p className="text-gray-400 text-sm mb-6">{member.bio}</p>

          <div className="flex space-x-3">
            <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-orange-500 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Domain Head Card Component
function DomainHeadCard({ member }) {
  return (
    <div className="bg-zinc-800/50 border border-orange-500/20 rounded-lg overflow-hidden group hover:border-orange-500/40 transition-all duration-300">
      <div className="relative h-64">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4">
            <div className="flex space-x-3">
              <a href={`mailto:${member.email}`} className="text-white hover:text-orange-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{member.name}</h3>
        <p className="text-orange-500 text-sm font-medium mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm line-clamp-3">{member.bio}</p>
      </div>
    </div>
  )
}

// Team Member Card Component
function TeamMemberCard({ member }) {
  return (
    <div className="bg-zinc-800/50 border border-orange-500/20 rounded-lg overflow-hidden group hover:border-orange-500/40 transition-all duration-300 flex flex-col">
      <div className="relative h-40">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-3 text-center flex-grow flex flex-col justify-center">
        <h3 className="text-sm font-bold text-white">{member.name}</h3>
        <p className="text-orange-500 text-xs font-medium">{member.role}</p>
        <p className="text-gray-400 text-xs mt-1">{member.specialization}</p>
      </div>
    </div>
  )
}

// Faculty Advisor Card Component
function FacultyAdvisorCard({ advisor }) {
  return (
    <div className="bg-zinc-800/50 border border-orange-500/20 rounded-lg overflow-hidden group hover:border-orange-500/40 transition-all duration-300">
      <div className="relative h-64">
        <Image
          src={advisor.image || "/placeholder.svg"}
          alt={advisor.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{advisor.name}</h3>
        <p className="text-orange-500 font-medium">{advisor.title}</p>
        <p className="text-gray-300 text-sm mt-1">{advisor.role}</p>
        <p className="text-gray-400 text-sm mt-4 mb-3">{advisor.bio}</p>

        <div className="border-t border-orange-500/20 pt-3">
          <p className="text-xs text-gray-500 mb-1">Research Areas:</p>
          <p className="text-sm text-gray-300">{advisor.research}</p>
        </div>

        <a
          href={`mailto:${advisor.email}`}
          className="inline-flex items-center mt-4 text-orange-500 hover:text-orange-400 transition-colors text-sm"
        >
          <Mail className="h-4 w-4 mr-1" />
          Contact
        </a>
      </div>
    </div>
  )
}

