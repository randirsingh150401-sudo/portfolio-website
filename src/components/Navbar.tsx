import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "../utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
]

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navItems.map(item => item.name.toLowerCase());
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-4 bg-background/80 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"
      )}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl font-display font-bold tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
            PF
          </div>
          <span className="hidden sm:inline">Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-surface/50 border border-white/10 rounded-full px-2 py-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-white"
              style={{ color: active === item.name.toLowerCase() ? "white" : "var(--color-text-secondary)" }}
            >
              {active === item.name.toLowerCase() && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform">
          Hire Me
        </a>
      </div>
    </motion.header>
  )
}
