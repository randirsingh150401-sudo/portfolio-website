import { Navbar } from "./components/Navbar"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills"

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary/30 relative">
      <div className="motion-grid" />
      <div className="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <footer className="py-8 text-center text-text-secondary text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} — Built with React & Vite.</p>
      </footer>
      </div>
    </div>
  )
}

export default App
