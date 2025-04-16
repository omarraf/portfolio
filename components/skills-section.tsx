"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
  category: "language" | "tool"
}

const skills: Skill[] = [
  // Programming Languages
  { name: "HTML/CSS", level: 90, category: "language" },
  { name: "JavaScript", level: 85, category: "language" },
  { name: "TypeScript", level: 75, category: "language" },
  { name: "Python", level: 70, category: "language" },
  { name: "PHP", level: 65, category: "language" },
  { name: "SQL", level: 80, category: "language" },

  // Tools & Other
  { name: "React", level: 85, category: "tool" },
  { name: "Next.js", level: 80, category: "tool" },
  { name: "Node.js", level: 75, category: "tool" },
  { name: "Git", level: 85, category: "tool" },
  { name: "Docker", level: 60, category: "tool" },
  { name: "Figma", level: 70, category: "tool" },
  { name: "AWS", level: 65, category: "tool" },
  { name: "MongoDB", level: 70, category: "tool" },
]

export function SkillsSection() {
  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const programmingLanguages = skills.filter((skill) => skill.category === "language")
  const tools = skills.filter((skill) => skill.category === "tool")

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Programming Languages Card */}
        <Card>
          <CardHeader>
            <CardTitle>Programming Languages</CardTitle>
            <CardDescription>Core languages I work with</CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {programmingLanguages.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants} custom={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>

        {/* Tools & Other Card */}
        <Card>
          <CardHeader>
            <CardTitle>Tools & Frameworks</CardTitle>
            <CardDescription>Technologies I use daily</CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {tools.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants} custom={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
