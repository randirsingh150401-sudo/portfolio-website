import youtubeAgentVideo from "../assets/0807.mov";
import mainVideo from "../assets/main.mov";
import jwVideo from "../assets/jw.mov";

export const siteContent = {
  hero: {
    name: "an AI Agent Expert",
    tagline: "& Advanced Tools Specialist",
    description:
      "A developer crafting high-quality software, fast web applications, and intuitive user experiences. Passionate about turning complex problems into elegant solutions.",
    ctaText: "View my work",
  },
  about: {
    title: "About Us",
    bio: [
      "I'm an indian software developer focused on building scalable, ai agent who really matters.",
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
      link: "https://youtube.com/@stellarpulse-pc?si=3EFRan8IaiwEUEsI",
      linkText: "View YouTube Channel",
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
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Python", "JavaScript", "React"]
      },
      {
        name: "Tools & DevOps",
        skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD", "Render", "Sarvam AI", "Supabase", "GitHub", "ElevenLabs"]
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
