"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Contact() {
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
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <div className="flex flex-col space-y-4">
        <p className="text-muted-foreground mb-4">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>

        <motion.div className="flex flex-wrap gap-4" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Button asChild variant="outline" size="lg" className="gap-2 transition-all duration-300 hover:scale-105">
              <a href="mailto:hello@janedoe.com">
                <Mail className="h-5 w-5" />
                <span>hello@janedoe.com</span>
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button asChild variant="outline" size="lg" className="gap-2 transition-all duration-300 hover:scale-105">
              <a href="https://github.com/omarraf" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button asChild variant="outline" size="lg" className="gap-2 transition-all duration-300 hover:scale-105">
              <a href="https://linkedin.com/in/omarrafiq" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
