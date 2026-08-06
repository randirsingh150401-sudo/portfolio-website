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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              {about.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-surface/50 bg-surface flex items-center justify-center transform group-hover:rotate-y-12 transition-transform duration-700">
                {/* Replace with actual image later */}
                <div className="text-center p-8">
                  <span className="text-6xl mb-4 block">👋</span>
                  <p className="text-text-primary font-display font-medium text-xl">
                    Replace this with your photo!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
