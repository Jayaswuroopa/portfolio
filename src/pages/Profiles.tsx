import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GradientBlob } from "@/components/GradientBlob";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Code2, Youtube, Instagram } from "lucide-react";

const profilesData = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
    description: "View my open source contributions and projects",
    color: "primary",
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/yourusername",
    description: "Check out my coding challenges and solutions",
    color: "secondary",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername",
    description: "Connect with me professionally",
    color: "accent",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/yourusername",
    description: "Follow me for tech insights and updates",
    color: "primary",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@yourusername",
    description: "Watch my coding tutorials and tech talks",
    color: "secondary",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/yourusername",
    description: "Behind the scenes of my dev journey",
    color: "accent",
  },
];

const Profiles = () => {
  return (
    <PageTransition>
      <ParticlesBackground />
      <GradientBlob color="secondary" size="lg" position={{ top: "10%", right: "10%" }} />
      <GradientBlob color="primary" size="md" position={{ bottom: "20%", left: "-10%" }} delay={0.2} />

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">
              Coding Profiles & Social
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with me across different platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profilesData.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="block"
              >
                <Card className="p-6 gradient-border backdrop-blur-sm bg-card/50 h-full group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-${profile.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <profile.icon className={`w-7 h-7 text-${profile.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-gradient transition-all">
                        {profile.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{profile.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Card className="p-8 gradient-border backdrop-blur-sm bg-card/50 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-4">Let's Collaborate!</h2>
              <p className="text-muted-foreground mb-6">
                I'm always excited to connect with fellow developers, work on interesting projects,
                and share knowledge. Feel free to reach out on any of these platforms!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {profilesData.slice(0, 3).map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <profile.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Profiles;
