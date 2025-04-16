"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarIcon, ClockIcon, TagIcon } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  imageUrl: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "My First Open Source Contribution",
    excerpt:
      "My experience contributing to Open Energy Dashboard, a project that helps visualize energy data.",
    date: "November 11, 2024",
    readTime: "5 min read",
    category: "Open Source",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  
]

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

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

  const postVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  }

  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        {selectedPost ? (
          <motion.div
            key="post-detail"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={postVariants}
            className="space-y-6"
          >
            <motion.button
              onClick={() => setSelectedPost(null)}
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
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
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to all posts
            </motion.button>

            <div className="space-y-4">
              <motion.div
                className="relative h-64 md:h-80 overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src={selectedPost.imageUrl || "/placeholder.svg"}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <TagIcon className="h-4 w-4" />
                  <span>{selectedPost.category}</span>
                </div>
              </motion.div>

              <motion.h3
                className="text-2xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {selectedPost.title}
              </motion.h3>

              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {selectedPost.excerpt}
              </motion.p>

              <motion.div
                className="prose prose-sm dark:prose-invert max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia,
                  nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies lacinia,
                  nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                </p>
                <p>
                  Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                  Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                </p>
                <h4>Key Takeaways</h4>
                <ul>
                  <li>First important point about the topic</li>
                  <li>Second key insight that readers should remember</li>
                  <li>Third valuable piece of information</li>
                  <li>Final thought to conclude the list</li>
                </ul>
                <p>
                  Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                  Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                </p>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="post-grid"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                custom={index}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{post.category}</span>
                      <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">
                        Read more →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
