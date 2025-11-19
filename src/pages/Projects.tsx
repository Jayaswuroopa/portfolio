import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GradientBlob } from "@/components/GradientBlob";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses and sentiment analysis",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=500&fit=crop",
    tech: ["Next.js", "OpenAI", "WebSocket", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking project metrics and performance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tech: ["React", "D3.js", "Express", "Redis"],
    github: "#",
    live: "#",
  },
  {
    title: "Social Media App",
    description: "Modern social platform with real-time updates and media sharing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    tech: ["React Native", "Firebase", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management Tool",
    description: "Collaborative project management with kanban boards and team features",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
    tech: ["Vue.js", "Express", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather app with location-based forecasts and alerts",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    tech: ["React", "Weather API", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projectsData[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <Card className="overflow-hidden gradient-border backdrop-blur-sm bg-card/50 group h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4 gap-2"
          >
            <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </motion.div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <PageTransition>
      <ParticlesBackground />
      <GradientBlob color="primary" size="lg" position={{ top: "5%", left: "10%" }} />
      <GradientBlob color="accent" size="md" position={{ bottom: "10%", right: "-5%" }} delay={0.3} />

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">Featured Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative endeavors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects;
