import { useRef } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

const FACES = [
  { transform: "rotateY(0deg) translateZ(100px)" },
  { transform: "rotateY(180deg) translateZ(100px)" },
  { transform: "rotateY(90deg) translateZ(100px)" },
  { transform: "rotateY(-90deg) translateZ(100px)" },
  { transform: "rotateX(90deg) translateZ(100px)" },
  { transform: "rotateX(-90deg) translateZ(100px)" },
]

export function GlassPolyhedron() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 80, damping: 20, mass: 0.5 })
  const springY = useSpring(rotateY, { stiffness: 80, damping: 20, mass: 0.5 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return
    const el = wrapperRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 24)
    rotateX.set(-py * 24)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] mx-auto"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          rotateX: springX,
          rotateY: springY,
        }}
      >
        <div
          className={`relative w-full h-full ${prefersReducedMotion ? "" : "animate-polyhedron-spin"}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 m-auto"
            style={{
              width: "200px",
              height: "200px",
              transformStyle: "preserve-3d",
              transform: "rotateX(-18deg) rotateY(35deg)",
            }}
          >
            {FACES.map((face, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-2xl border border-white/15 backdrop-blur-sm"
                style={{
                  transform: face.transform,
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg, rgba(232,121,249,0.28), rgba(251,146,60,0.08))"
                      : "linear-gradient(135deg, rgba(251,146,60,0.22), rgba(232,121,249,0.06))",
                  boxShadow: "inset 0 0 40px rgba(255,255,255,0.06), 0 0 60px rgba(232,121,249,0.15)",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
