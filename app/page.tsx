import Profile from "@/components/profile"
import ProjectsBlog from "@/components/projects-blog"
import Contact from "@/components/contact"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Profile />
        <ProjectsBlog />
        <Contact />
      </div>
    </main>
  )
}
