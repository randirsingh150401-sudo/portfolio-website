import { motion } from "framer-motion"
import { siteContent } from "../../data/content"

export function Skills() {
  const { skills } = siteContent;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-surface/30">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          {skills.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {skills.categories.map((category, index) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-surface rounded-3xl p-8 border border-white/5 hover:border-primary/20 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-gradient inline-block">{category.name}</h3>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map(skill => (
                  <motion.span 
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary)", color: "#fff", borderColor: "var(--color-primary)" }}
                    className="px-4 py-2 rounded-xl bg-background border border-white/10 text-sm font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
