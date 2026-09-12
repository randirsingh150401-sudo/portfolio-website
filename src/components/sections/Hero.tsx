import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion"
import { siteContent } from "../../data/content"
import { Button } from "../ui/Button"
import { GlassPolyhedron } from "../ui/GlassPolyhedron"
import { ArrowRight, Terminal } from "lucide-react"

const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const wordItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
}

function AnimatedLine({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span variants={wordContainer} className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={wordItem} className="inline-block mr-[0.25em] last:mr-0">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function Hero() {
  const { hero } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -160]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated gradient-mesh background — parallaxed slower than foreground content */}
      <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
        <div className="hero-blob animate-blob-1 top-[10%] left-[15%] w-[600px] h-[600px] bg-primary/18" />
        <div className="hero-blob animate-blob-2 top-[35%] right-[10%] w-[500px] h-[500px] bg-accent/14" />
        <div className="hero-blob animate-blob-3 bottom-[5%] left-[35%] w-[450px] h-[450px] bg-primary/10" />
      </motion.div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/50 border border-primary/20 text-primary mb-8 backdrop-blur-sm"
            >
              <Terminal size={16} />
              <span className="text-sm font-medium tracking-wide">Developer</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={wordContainer}
              className="text-[clamp(2.75rem,6vw,6rem)] font-bold tracking-tight leading-[1.05] mb-6"
            >
              <AnimatedLine text={`Hi, We are ${hero.name}.`} />
              <br />
              <AnimatedLine text={hero.tagline} className="text-gradient" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto gap-2" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                {hero.ctaText}
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="lg:col-span-5"
          >
            <GlassPolyhedron />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
