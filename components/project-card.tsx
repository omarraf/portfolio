"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
}

export function ProjectCard({ title, description, tags, imageUrl, projectUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="overflow-hidden rounded-lg border border-border bg-card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.div animate={isHovered ? { scale: 1.05 } : { scale: 1 }} transition={{ duration: 0.4 }}>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="transition-all hover:scale-105 duration-200">
                {tag}
              </Badge>
            ))}
          </div>

          <Link href={projectUrl} className="inline-flex items-center gap-2 text-primary hover:underline w-fit group">
            View Project
            <ExternalLinkIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
