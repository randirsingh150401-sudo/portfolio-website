import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { siteContent } from "../../data/content"
import { ExternalLink } from "lucide-react"
import React from "react"

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  // Mouse hover effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-3xl bg-surface border border-white/5 p-2 overflow-hidden hover:border-primary/30 transition-colors duration-500"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(0)" }}
      />
      
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-6" style={{ transform: "translateZ(30px)" }}>
        <img 
          src={project.imagePlaceholder} 
          alt={project.title} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white">
            <ExternalLink size={24} />
          </a>
          <a href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        </div>
      </div>

      <div className="px-4 pb-6" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-text-secondary mb-6 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech: string) => (
            <span key={tech} className="px-3 py-1 text-sm rounded-full bg-white/5 text-text-secondary border border-white/10">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const { projects } = siteContent;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container px-6 mx-auto">
        <div className="mb-16 md:mb-24 flex items-center justify-between">
          <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
            <span className="w-12 h-1 bg-accent rounded-full block" />
            Selected Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 [perspective:1000px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
