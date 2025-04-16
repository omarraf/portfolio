"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useTypingAnimation } from "@/hooks/use-typing-animation"

export default function Profile() {
  // Array of roles for the typing animation
  const roles = [
    "Full Stack Developer",
    "CS Student",
    "Open Source Contributor",
    "Software Engineer",
    "UI/UX Enthusiast",
  ]

  // Use the typing animation hook
  const { text: role, isTyping } = useTypingAnimation({
    words: roles,
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenWords: 2000,
  })

  return (
    <motion.section
      className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-primary/10 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/placeholder.svg?height=192&width=192"
          alt="Profile picture"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Jane Doe
        </motion.h1>
        <motion.h2
          className="text-xl text-muted-foreground mb-4 h-7 flex items-center justify-center md:justify-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>{role}</span>
          <span
            className={`ml-1 inline-block w-0.5 h-5 bg-primary ${isTyping ? "opacity-100" : "opacity-0"}`}
            style={{ animation: "blink 1s step-end infinite" }}
          ></span>
        </motion.h2>
        <motion.p
          className="text-base leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I'm a passionate developer with expertise in React, Next.js, and Node.js. With over 5 years of experience
          building web applications, I focus on creating intuitive, performant, and accessible user experiences. When
          I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
        </motion.p>
      </div>
    </motion.section>
  )
}
