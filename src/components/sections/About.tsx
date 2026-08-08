import { motion } from "framer-motion"
import { siteContent } from "../../data/content"

export function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-primary rounded-full block" />
            {about.title}
          </h2>

          <div className="space-y-6 text-lg text-text-secondary leading-relaxed max-w-3xl">
            {about.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
