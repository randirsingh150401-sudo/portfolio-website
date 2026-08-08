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
            <p>
              I’m a developer and AI automation builder with <strong className="text-text-primary font-semibold">4+ years of experience in coding, software development, and building intelligent agent-based systems</strong>.
            </p>
            <p>
              My work focuses on turning complex business processes into <strong className="text-text-primary font-semibold">AI-powered automated workflows</strong>. I build AI agents that can research information, analyze data, make decisions, generate content, interact with APIs, and execute tasks across different platforms.
            </p>
            <p>
              Over the years, I’ve worked with technologies including <strong className="text-text-primary font-semibold">Python, JavaScript, APIs, databases, cloud platforms, AI/LLMs, automation systems, and third-party integrations</strong>. I enjoy working on projects where AI is not just used for generating text, but is connected to real tools and can actually <strong className="text-text-primary font-semibold">perform actions and complete workflows</strong>.
            </p>

            <h3 className="text-2xl font-bold text-text-primary mt-12 mb-6">What I Build</h3>
            <ul className="space-y-4">
              <li>🤖 <strong className="text-text-primary font-semibold">AI Agents</strong> — autonomous agents for research, analysis, content creation, marketing, and business automation.</li>
              <li>⚙️ <strong className="text-text-primary font-semibold">AI Automation Systems</strong> — multi-step workflows where AI can plan, execute, verify, and improve tasks.</li>
              <li>📊 <strong className="text-text-primary font-semibold">Marketing Automation</strong> — AI systems for website auditing, campaign analysis, content generation, and growth optimization.</li>
              <li>🎥 <strong className="text-text-primary font-semibold">Content Automation</strong> — automated pipelines for research, scripting, voice generation, video production, and publishing.</li>
              <li>🔗 <strong className="text-text-primary font-semibold">API & Platform Integrations</strong> — connecting AI systems with services such as Google, Meta, YouTube, Gmail, databases, and other business tools.</li>
            </ul>

            <h3 className="text-2xl font-bold text-text-primary mt-12 mb-6">My Approach</h3>
            <p>
              I believe the future of software is moving from applications that simply <strong className="text-text-primary font-semibold">wait for users to click buttons</strong> toward intelligent systems that can understand a goal and execute the work themselves.
            </p>
            <p>
              That’s why I focus on building agents with clear workflows, tool access, approval systems, memory, error handling, and human oversight where necessary.
            </p>
            <p>
              I’m constantly experimenting with new AI models, agent architectures, automation techniques, and developer tools to build software that is <strong className="text-text-primary font-semibold">smarter, more autonomous, and genuinely useful</strong>.
            </p>
            
            <p className="pt-6 mt-6 border-t border-white/10 font-bold text-primary">
              4+ Years of Coding • AI Agents • Automation • SaaS • APIs • AI Systems
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
