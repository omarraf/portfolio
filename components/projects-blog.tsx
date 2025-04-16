"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Project type definition - makes it easy to add new projects
type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  sourceCode: string // GitHub or source code URL
  liveDemo?: string // Optional live demo URL
}

// Blog post type definition - makes it easy to add new blog posts
type BlogPost = {
  id: number
  title: string
  slug: string // URL-friendly identifier for the blog post
  excerpt: string
  date: string
  readTime: string
}

export default function ProjectsBlog() {
  const [activeTab, setActiveTab] = useState("projects")

  // Project data - add new projects by adding to this array
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment processing and inventory management.",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=300",
      sourceCode: "https://github.com/yourusername/ecommerce-platform",
      liveDemo: "https://ecommerce-demo.yourdomain.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      tags: ["React", "Firebase", "TypeScript"],
      image: "/placeholder.svg?height=200&width=300",
      sourceCode: "https://github.com/yourusername/task-management",
      liveDemo: "https://tasks-demo.yourdomain.com",
    },
    {
      id: 3,
      title: "Portfolio Generator",
      description: "A tool that helps developers create beautiful portfolios with minimal effort.",
      tags: ["Vue.js", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
      sourceCode: "https://github.com/yourusername/portfolio-generator",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application with interactive maps and detailed forecasts.",
      tags: ["React", "OpenWeather API", "Mapbox"],
      image: "/placeholder.svg?height=200&width=300",
      sourceCode: "https://github.com/yourusername/weather-dashboard",
      liveDemo: "https://weather-demo.yourdomain.com",
    },
  ]

  // Blog post data - add new blog posts by adding to this array
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "My First Open Source Contribution",
      slug: "my-first-open-source-contribution",
      excerpt: "My experience contributing to Open Energy Dashboard, a project that helps visualize energy data.",
      date: "November 11, 2024",
      readTime: "5 min read",
    },
  ]

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="mb-16">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Work
      </motion.h2>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="mt-0">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 flex-wrap">
                    <Button asChild variant="default" size="sm" className="gap-2">
                      <Link href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                      </Link>
                    </Button>
                    {project.liveDemo && (
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="blog" className="mt-0">
          <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link href={`/blog/${post.slug}`} className="block">
                  <Card className="transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-primary hover:underline">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <div className="flex items-center text-sm text-muted-foreground gap-4">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-1 h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Instructions for adding new content */}
      {/* 
        HOW TO ADD NEW CONTENT:
        
        1. To add a new project:
           - Copy an existing project object in the 'projects' array
           - Update the id, title, description, tags, image, sourceCode, and liveDemo (optional)
           - The new project will automatically appear in the grid
        
        2. To add a new blog post:
           - Copy an existing blog post object in the 'blogPosts' array
           - Update the id, title, slug (URL-friendly version of title), excerpt, date, and readTime
           - Create a new page at app/blog/[slug]/page.tsx to display the full blog post
           - The new blog post will automatically appear in the list
      */}
    </section>
  )
}
