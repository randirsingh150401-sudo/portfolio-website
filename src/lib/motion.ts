import type { Variants } from "framer-motion"
import { useReducedMotion } from "framer-motion"

export const viewportOnce = { once: true, margin: "-100px" } as const

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
