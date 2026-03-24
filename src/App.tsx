/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, Globe, Code2, Cpu } from "lucide-react";
import React from "react";

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-light-bg/80 backdrop-blur-md border-b border-black/5">
      <div className="section-container h-20 flex items-center justify-between">
        <a href="#" className="font-black text-xl tracking-tighter uppercase">
          &lt;Nikhil Choudhary&gt;
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="https://github.com/100nikhil" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://drive.google.com/file/d/1KqJFfzJYamAzrVr9cXm5Gxi9_aylsvh3/view" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">My CV</a>
        </div>
      </div>
    </nav>
  );
};

const GitHubHeatmap = () => {
  const rows = 7;
  const cols = 25;
  const cells = Array.from({ length: rows * cols });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">GitHub contributions</span>
        <Github size={14} className="text-gray-400" />
      </div>
      <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
        {cells.map((_, i) => {
          const intensity = Math.random();
          let color = "bg-gray-100";
          if (intensity > 0.8) color = "bg-accent";
          else if (intensity > 0.5) color = "bg-accent/60";
          else if (intensity > 0.3) color = "bg-accent/30";
          
          return <div key={i} className={`w-3 h-3 rounded-[2px] ${color}`} />;
        })}
      </div>
      <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        <span>May '24</span>
        <span>Nov '24</span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="pt-40 pb-24 bg-light-bg">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-6xl md:text-8xl tight-heading mb-8"
            >
              Full Stack Java Developer <br />
              <span className="text-gray-400">Nikhil Choudhary</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="max-w-md"
            >
              <p className="text-xs font-black uppercase tracking-widest mb-4">&lt;Java | SpringBoot | Microservices | AWS | React&gt;</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Full Stack Java Developer with 5+ years of experience building scalable microservices and React-based applications
in banking and aviation domains. Expertise in Spring Boot, AWS, and performance optimization, delivering up
to 40% improvements in system efficiency.
              </p>
              <a 
                href="https://drive.google.com/file/d/1KqJFfzJYamAzrVr9cXm5Gxi9_aylsvh3/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter text-sm inline-flex items-center gap-2 neon-glow transition-all active:scale-95"
              >
                Download CV <Download size={16} />
              </a>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <GitHubHeatmap />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto mb-32"
    >
      <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 hover:border-accent/30 transition-colors">
        <div className="mb-6 flex justify-between items-start">
          <span className="text-4xl font-black text-white/10 tight-heading">&lt;{index + 1}&gt;</span>
        </div>
        <h3 className="text-4xl font-black text-white tight-heading mb-4">{project.title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">Role</p>
            <p className="text-accent font-bold">{project.role}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">Tenure</p>
            <p className="text-accent font-bold">{project.tenure}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Frontend Stack</p>
            <p className="text-white text-sm font-medium">{project.frontend}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Backend</p>
            <p className="text-white text-sm font-medium">{project.backend}</p>
          </div>
        </div>

        <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
          {project.description.map((p: string, i: number) => (
            <div key={i} className="flex gap-3">
              <span className="text-accent mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"></span>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const projects = [
    {
      title: "Birlasoft",
      role: "Full Stack Java Developer",
      tenure: "Sep 2022 - Present",
      frontend: "Javascript, React, Redux, Material UI, CSS, HTML, Microfrontend",
      backend: "Java, SpringBoot, JPA, Rest APIs, Microservices, MySQL, Oracle, Redis, kafka, AWS",
      description: [
        "Contributed as a Full Stack Developer on a large-scale banking project involving migration from legacy monolith architecture to microservices and micro frontends.",
        "Reduced bug response time by 40% and improved coding standards, reduced code issues by 25% and significantly improved overall project quality.",
        "Designed and developed scalable microservices using Spring Boot handling 80k+ daily transactions.",
        "Developed React-based micro frontends, improving UI responsiveness by 30% and providing a seamless user experience.",
        "Leveraged AI tools and prompt engineering to accelerate development, improving code quality and reducing implementation time.",
        "Partnered with key stakeholders and team members to prioritize critical features, reducing development cycle time by 20% while driving optimal technical solutions.",
        "Received the Star Performer Award twice in recognition of outstanding performance and consistent project excellence."
      ]
    },
    {
      title: "Cognizant",
      role: "Programmer Analyst",
      tenure: "Jan 2021 - Sep 2022",
      frontend: "Javascript, React, Redux, Material UI, CSS, HTML, Microfrontend",
      backend: "Java, SpringBoot, JPA, Rest APIs, Microservices, MySQL, MongoDB, AWS",
      description: [
        "Developed SpringBoot backend services for aviation domain applications to support flight booking, passenger management, and ticketing workflows.",
        "Developed optimized caching solutions, reducing application load times by 30% and improving system scalability by 25%.",
        "Resolved production issues and improved system stability through performance optimization and debugging.",
        "Optimized database queries and improved system performance by 25–30%"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-dark-bg py-32">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl tight-heading text-white mb-24"
        >
          Professional Experience
        </motion.h2>
        
        <div>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="text-accent" />,
      skills: ["React", "Javascript", "TypeScript", "CSS", "Material UI", "Redux", "HTML"]
    },
    {
      title: "Backend",
      icon: <Code2 className="text-accent" />,
      skills: ["Java", "Spring Boot", "Microservices", "Rest APIs", "JPA", "Hibernate", "OOPs", "Design Patterns", "MongoDB", "MySQL", "Oracle", "Redis" ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cpu className="text-accent" />,
      skills: ["AWS", "Docker", "CI/CD", "Apache Kafka", "PCF Cloud", "Git"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-light-bg">
      <div className="section-container">
        <h2 className="text-5xl md:text-7xl tight-heading mb-24">Technical Stack</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-black/5"
            >
              <div className="mb-6">{cat.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1 bg-light-bg rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-32 bg-dark-bg text-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl tight-heading mb-8">Let's build <br /><span className="text-accent">together</span></h2>
            <p className="text-gray-400 mb-12 max-w-md">
              Currently open to new opportunities and interesting projects. If you have a question or just want to say hi, my inbox is always open.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:nikhilchoudhary9392@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Email</p>
                  <p className="font-bold">nikhilchoudhary9392@gmail.com</p>
                </div>
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/nikhil-choudhary-17a5201b6/" target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/100nikhil" target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"></textarea>
              </div>
              <button className="w-full bg-accent text-black py-4 rounded-xl font-black uppercase tracking-widest text-xs neon-glow transition-all active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-dark-bg border-t border-white/5">
      <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
          © 2026 Nikhil Choudhary. Built with React & Tailwind.
        </p>
        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

