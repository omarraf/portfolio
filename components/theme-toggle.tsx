// "use client"

// import { useTheme } from "next-themes"
// import { Button } from "@/components/ui/button"
// import { MoonIcon, SunIcon } from "lucide-react"
// import { useEffect, useState } from "react"

// export function ThemeToggle() {
//   const { setTheme, resolvedTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   // Avoid hydration mismatch
//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return <Button variant="ghost" size="icon" className="w-9 px-0" disabled />
//   }

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "light")}
//       className="w-9 px-0"
//       aria-label="Toggle theme"
//     >
//       <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//     </Button>
//   )
// }
