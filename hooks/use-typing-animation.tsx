"use client"

import { useState, useEffect, useCallback } from "react"

type UseTypingAnimationProps = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export function useTypingAnimation({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: UseTypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const animateText = useCallback(() => {
    const currentWord = words[currentIndex]

    // If deleting
    if (isDeleting) {
      setDisplayedText(currentWord.substring(0, displayedText.length - 1))

      // If deleted completely, start typing the next word
      if (displayedText.length === 0) {
        setIsDeleting(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
      }
    }
    // If typing
    else {
      setDisplayedText(currentWord.substring(0, displayedText.length + 1))

      // If typed completely, start deleting after delay
      if (displayedText.length === currentWord.length) {
        setTimeout(() => {
          setIsDeleting(true)
        }, delayBetweenWords)
        return
      }
    }
  }, [currentIndex, delayBetweenWords, displayedText, isDeleting, words])

  useEffect(() => {
    const timeout = setTimeout(animateText, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [animateText, deletingSpeed, isDeleting, typingSpeed])

  return { text: displayedText, isTyping: !isDeleting && displayedText.length < words[currentIndex].length }
}
