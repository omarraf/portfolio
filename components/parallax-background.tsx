"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        style={{
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]),
          opacity: backgroundOpacity,
        }}
      />
      <motion.div
        className="absolute top-40 left-1/3 h-32 w-32 rounded-full bg-secondary/20 blur-2xl"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
          opacity: backgroundOpacity,
        }}
      />
    </div>
  )
}
