import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GradientBlob } from "@/components/GradientBlob";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const timelineData = [
  {
    year: "2024",
    title: "Senior Developer",
    company: "Tech Company",
    description: "Leading development of cutting-edge web applications",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "StartUp Inc",
    description: "Built scalable solutions for enterprise clients",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Bachelor's Degree",
    company: "University Name",
    description: "Computer Science & Engineering",
    icon: GraduationCap,
  },
  {
    year: "2019",
    title: "First Achievement",
    company: "Hackathon Winner",
    description: "Won first place in national coding competition",
    icon: Award,
  },
];

const About = () => {
  return (
    <PageTransition>
      <ParticlesBackground />
      <GradientBlob color="secondary" size="lg" position={{ top: "10%", left: "-10%" }} />
      <GradientBlob color="primary" size="md" position={{ bottom: "-5%", right: "10%" }} delay={0.3} />

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a mission to create impactful digital experiences
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="gradient-border rounded-2xl p-8 backdrop-blur-sm bg-card/50"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">My Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with expertise in building modern web applications.
                My journey in tech started with curiosity and has evolved into a deep commitment to
                creating elegant, efficient, and user-friendly solutions.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I specialize in
                React, Node.js, and cloud architectures. I thrive on solving complex problems and
                turning ideas into reality through clean, maintainable code.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gradient">Experience & Education</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className={`flex items-center mb-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <Card className="p-6 gradient-border backdrop-blur-sm bg-card/50 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        {index % 2 === 0 ? (
                          <>
                            <div>
                              <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.company}</p>
                            </div>
                            <item.icon className="w-8 h-8 text-secondary ml-auto" />
                          </>
                        ) : (
                          <>
                            <item.icon className="w-8 h-8 text-secondary" />
                            <div>
                              <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.company}</p>
                            </div>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background">
                    <span className="text-sm font-bold">{item.year}</span>
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default About;
