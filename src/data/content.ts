import youtubeAgentVideo from "../assets/0807.mov";
import mainVideo from "../assets/main.mov";
import jwVideo from "../assets/jw.mov";

export const siteContent = {
  hero: {
    name: "[Your Name]",
    tagline: "[e.g., I build products people actually use]",
    description:
      "A developer crafting high-quality software, fast web applications, and intuitive user experiences. Passionate about turning complex problems into elegant solutions.",
    ctaText: "View my work",
  },
  about: {
    title: "About Me",
    bio: [
      "I'm an indie hacker and software developer focused on building scalable, user-centric applications.",
      "Currently, I'm building [SaaS Product Name], an innovative solution that helps teams [solve a specific problem]. Before that, I worked as a [Previous Role] at [Company], where I spearheaded [Key Achievement].",
      "When I'm not coding, you'll probably find me exploring new technologies, writing about my learnings, or designing UI concepts."
    ],
  },
  projects: [
    {
      id: "project-1",
      title: "YouTube Automation Agent",
      description: "An automated agent that creates and uploads YouTube videos, connected directly with Telegram for seamless monitoring and control.",
      techStack: ["Python", "Telegram API", "YouTube API", "FFmpeg"],
      link: "https://example.com",
      imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      videoPlaceholder: youtubeAgentVideo,
    },
    {
      id: "project-2",
      title: "AI Desktop Assistant",
      description: "An intelligent desktop assistant that takes screenshots and understands your problems across any field, providing instant, contextual help.",
      techStack: ["Python", "OpenAI Vision", "PyAutoGUI", "Desktop App"],
      link: "https://example.com",
      imagePlaceholder: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      videoPlaceholder: mainVideo,
    },
    {
      id: "project-3",
      title: "3D Modern Website",
      description: "A visually stunning website featuring interactive 3D elements and modern design principles, creating an immersive user experience.",
      techStack: ["React", "Three.js", "React Three Fiber", "Framer Motion"],
      link: "https://example.com",
      imagePlaceholder: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
      videoPlaceholder: jwVideo,
    },
    {
      id: "project-4",
      title: "[Project Four - E-commerce]",
      description: "A high-performance storefront with sub-second page loads, increasing conversion rates by 35%.",
      techStack: ["Next.js", "Stripe", "GraphQL"],
      link: "https://example.com",
      imagePlaceholder: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1000",
    }
  ],
  skills: {
    title: "Skills & Technologies",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
      },
      {
        name: "Tools & DevOps",
        skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD"]
      }
    ]
  },
  contact: {
    title: "Let's Talk",
    description: "I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    email: "hello@example.com",
    socials: {
      github: "https://github.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/"
    }
  }
};
