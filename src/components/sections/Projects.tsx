import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion"
import { siteContent } from "../../data/content"
import { useFadeUpVariants, useStaggerContainer, viewportOnce } from "../../lib/motion"
import React from "react"

const ProjectCard = ({ project }: { project: any }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = useFadeUpVariants();

  // Mouse hover effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  const specularBackground = useTransform([x, y], (latest) => {
    const [xv, yv] = latest as number[];
    return `radial-gradient(circle at ${(xv + 0.5) * 100}% ${(yv + 0.5) * 100}%, rgba(255,255,255,0.5), transparent 55%)`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
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
    <motion.div variants={fadeUp}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.015, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="group relative rounded-3xl bg-surface/40 backdrop-blur-xl border border-white/10 p-2 overflow-hidden transition-[border-color,box-shadow] duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4),0_0_60px_-12px_rgba(167,139,250,0.35)]"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: "translateZ(0)" }}
        />

        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none"
          style={{ background: specularBackground, transform: "translateZ(1px)" }}
        />

        <div
          className={`relative rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.35),0_0_30px_-12px_rgba(56,189,248,0.3)] ${project.videoPlaceholder ? 'w-full' : 'aspect-video'}`}
          style={{ transform: "rotateX(4deg) rotateY(-6deg) translateZ(30px)" }}
        >
          {project.videoPlaceholder ? (
            <video
              src={project.videoPlaceholder}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
          ) : (
            <img
              src={project.imagePlaceholder}
              alt={project.title}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            />
          )}
        </div>

        <div className="px-4 pb-6" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-text-secondary mb-6 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech: string) => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full bg-white/5 text-text-secondary border border-white/10">
                {tech}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {project.linkText || "View Project"}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const { projects } = siteContent;
  const stagger = useStaggerContainer(0.15);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container px-6 mx-auto">
        <div className="mb-16 md:mb-24 flex items-center justify-between">
          <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
            <span className="w-12 h-1 bg-accent rounded-full block" />
            Portfolio
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-16 lg:gap-24 max-w-4xl mx-auto [perspective:1000px]"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
