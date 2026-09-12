import type { Variants } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"

export const viewportOnce = { once: true, margin: "-100px" } as const

// Mouse-only hover/tilt interactions must not attach on touch devices —
// a link nested inside an ancestor with hover listeners can eat the first
// tap on iOS/Android (tap registers as hover-enter instead of a click).
export function useFinePointer(): boolean {
  const [isFine, setIsFine] = useState(true)
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    setIsFine(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsFine(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])
  return isFine
}

export function useFadeUpVariants(): Variants {
  const prefersReducedMotion = useReducedMotion()
  return {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0.01 }
        : { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }
}

export function useStaggerContainer(staggerChildren = 0.12, delayChildren = 0): Variants {
  const prefersReducedMotion = useReducedMotion()
  return {
    hidden: {},
    show: {
      transition: prefersReducedMotion
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren, delayChildren },
    },
  }
}
