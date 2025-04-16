"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SkillsSection } from "@/components/skills-section"
import { BlogSection } from "@/components/blog-section"

export function ContentToggle() {
  const [activeTab, setActiveTab] = useState("skills")

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="skills" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="skills" className="mt-0">
          <SkillsSection />
        </TabsContent>

        <TabsContent value="blog" className="mt-0">
          <BlogSection />
        </TabsContent>
      </Tabs>
    </div>
  )
}
