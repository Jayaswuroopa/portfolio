import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GradientBlob } from "@/components/GradientBlob";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const timelineData = [
  {
    year: "2025",
    title: "Java Full Stack Intern",
    company: "Litz Tech",
    description:
      "Worked on Java full-stack development, debugged backend issues and improved application stability while collaborating with the team.",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "100+ LeetCode Problems",
    company: "Problem Solving",
    description:
      "Solved 100+ LeetCode problems and earned HackerRank Java & Problem Solving certifications.",
    icon: Award,
  },
  {
    year: "2023",
    title: "B.E. Computer Science & Engineering",
    company: "KPR Institute of Engineering and Technology",
    description: "Currently pursuing B.E. in CSE (2023 – 2027) with a CGPA of 8.4.",
    icon: GraduationCap,
  },
  {
    year: "2021",
    title: "Higher Secondary Education",
    company: "GRG Matriculation Higher Secondary School",
    description: "Completed Higher Secondary Education (2021 – 2023) with 94%.",
    icon: GraduationCap,
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
              Computer Science undergraduate passionate about full stack development and AI
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
                I am currently pursuing B.E. Computer Science and Engineering at KPR Institute of
                Engineering and Technology with a CGPA of 8.4.
              </p>
              <p>
                I enjoy solving real-world problems using software development and artificial
                intelligence. My interests include full-stack web development, deep learning,
                computer vision, and backend systems.
              </p>
              <p>
                I have solved 100+ LeetCode problems which strengthened my problem-solving and
                programming skills, and I love turning ideas into scalable applications.
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
