"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ExternalLink, Code } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  // Handle scroll snapping and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight
      const scrollPosition = window.scrollY
      const newActiveSection = Math.round(scrollPosition / pageHeight)

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  // Scroll to section when navigation is clicked
  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(index)
  }

  return (
    <main className="relative h-screen w-full overflow-x-hidden bg-gradient-to-b from-stone-400 to-stone-500 snap-y snap-mandatory">
      {/* Hero Section */}
      <section
        ref={(el) => {
          sectionsRef.current[0] = el as HTMLDivElement | null;
        }}
        className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          {/* first-image */}
          <Image 
            src="/dawn2.png?height=1080&width=1920"
            alt="Ghibli-inspired landscape with rolling hills and fluffy clouds"
            fill
            priority
            className="object-cover"
          />
          
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-6"
        >
            <div className="mb-6 rounded-full border-4 border-white/80 overflow-hidden shadow-2xl">
            <Image
              src="/omarraf.jpg"
              alt="Profile picture"
              width={150}
              height={150}
              className="rounded-full"
            />
            </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Omar Rafiq</h1>
          <h2 className="text-xl md:text-2xl text-white/90 mb-6">Computer Scientist</h2>

          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            I create beautiful, responsive web experiences with a focus on user interaction and clean code. Passionate
            about building applications that make a difference.
          </p>

          <div className="flex gap-6">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FileText size={24} />
              <span className="sr-only">Resume</span>
            </Link>
            <Link href="mailto:hello@example.com" className="text-white hover:text-primary transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection(1)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Scroll to projects section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={(el) => {
          sectionsRef.current[1] = el as HTMLDivElement | null;
        }}
        className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden"
      >
        
        <div className="absolute inset-0 w-full h-full">
          {/* second-image  */}
          <Image
            src="/dawn3.png?height=1080&width=1920"
            alt="Ghibli-inspired forest scene with sunlight through trees"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:shadow-xl group"
              >
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white flex items-center gap-1 text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </Link>
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white flex items-center gap-1 text-sm transition-colors"
                    >
                      <Code size={16} />
                      <span>Source Code</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={(el) => {
          sectionsRef.current[2] = el as HTMLDivElement | null;
        }}
        className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          {/* third-image */}
          <Image
            src="/rivers.png?height=1080&width=1920"
            alt="Ghibli-inspired ocean scene with waves and distant mountains"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            transition-opacity={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4 ">Programming Languages</h3>
              <ul className="space-y-2">
                {programmingLangs.map((lang, index) => (
                  <li key={index} className="text-white/80 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {lang}
                  </li>
                ))}
              </ul>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Tools & Others</h3>
              <ul className="space-y-2">
                {toolsSkills.map((skill, index) => (
                  <li key={index} className="text-white/80 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        ref={(el) => {
          sectionsRef.current[3] = el as HTMLDivElement | null;
        }}
        className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/mtn.png?height=1080&width=1920"
            alt="Ghibli-inspired night sky with stars and floating lanterns"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Blog Posts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:shadow-xl"
              >
                <div className="p-6">
                  <span className="text-xs text-white/60">{post.date}</span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-3">{post.title}</h3>
                  <p className="text-white/70 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-white/80 mb-6">More coming soon!</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

// Sample data
const projects = [
  {
    title: "Campus Nav",
    description: "A project using graph algorithms to help students find their way around the CSUF campus",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Matplotlib", "Mapbox"],
    demoLink: "https://example.com",
    repoLink: "https://github.com",
  },
  {
    title: "Transport Planner",
    description: "Plan your next transport method smartly",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["JavaScript", "React.js", "OpenRoute API"],
    demoLink: "https://example.com",
    repoLink: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather visualization with forecasts and historical data.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "D3.js", "OpenWeather API"],
    demoLink: "https://example.com",
    repoLink: "https://github.com",
  },
]

const programmingLangs = [
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "R",
  "HTML/CSS",
]

const backendSkills = ["Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL", "GraphQL", "REST API Design"]

const toolsSkills = ["Git & GitHub", "Docker", "AWS", "Figma", "CI/CD", "Agile Methodologies", "Postman", "Bash", "Command Line", ]

const blogPosts = [
  {
    title: "My First Open Source Contribution",
    excerpt:
      "My experience on contributing to Open Energy Dashboard",
    date: "November 4, 2024",
    link: "/blog/first-open-source-contribution",
  },
  
]

