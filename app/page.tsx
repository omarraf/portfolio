import Image from "next/image"
import Link from "next/link"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-4xl">
          🏡
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" size="sm" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
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
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="container py-24 sm:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hi, I'm Omar Rafiq 📚 🏀 🧑🏽‍💻</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I'm currently majoring in Computer Science with a minor in Business 
                  Data Analytics at California State University, Fullerton. 
                  I'm particularly interested in full stack development, 
                  machine learning and data science. Outside of school, 
                  you'll probably find me playing basketball, reading a book, at the gym, 
                  or trying to build cool things.
                </p>
              </div>
              <div className="flex gap-2">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
              </div>
              <div className="flex gap-4 text-muted-foreground">
                <Link href="https://github.com/omarraf" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 hover:text-primary" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://linkedin.com/in/omarrafiq" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 hover:text-primary" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:your.omarrafiq@gmail.com">
                  <Mail className="h-5 w-5 hover:text-primary" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-background bg-muted">
                <Image
                  src="/omarraf.jpg"
                  alt="My profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Check out some of my recent work and personal projects.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-16">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=250&width=500&text=Project+${project}`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Project {project}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    A brief description of this project, what technologies were used, and what problems it solves.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" className="flex items-center gap-1">
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="#" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link href="#">View All Projects</Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Technologies and tools I work with.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-16">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML", "CSS", "Tailwind", "Git", "Figma"].map(
              (skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center justify-center rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
                >
                  <div className="mb-2 rounded-full bg-primary/10 p-3">
                    <div className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center text-sm font-medium">{skill}</div>
                </div>
              ),
            )}
          </div>
        </section>


        {/* Blog Section */}
        <section id="blog" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Blog</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Thoughts, ideas, and insights I've shared.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Blog+${post}`}
                    alt={`Blog post ${post}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-2">March {post}, 2023</div>
                  <h3 className="text-xl font-bold">Blog Post Title {post}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    A brief summary of what this blog post is about and why someone might want to read it.
                  </p>
                  <Button variant="link" className="px-0 mt-2" asChild>
                    <Link href="#">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link href="#">View All Posts</Link>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto grid gap-8 md:grid-cols-2 md:gap-12 max-w-5xl">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
              </div>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/omarraf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/omarrafiq" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button>Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

