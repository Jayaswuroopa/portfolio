import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GradientBlob } from "@/components/GradientBlob";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const Resume = () => {
  const handleDownload = () => {
    // In a real app, this would download the actual PDF
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Place your resume PDF in the public folder
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <PageTransition>
      <ParticlesBackground />
      <GradientBlob color="primary" size="lg" position={{ top: "-10%", left: "20%" }} />
      <GradientBlob color="accent" size="md" position={{ bottom: "20%", right: "10%" }} delay={0.3} />

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">Resume</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download my complete resume or view it below
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:opacity-90 group"
            >
              <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
              Download Resume (PDF)
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8 md:p-12 gradient-border backdrop-blur-sm bg-card/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">Your Name</h2>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Summary</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate full-stack developer with 5+ years of experience building modern web
                    applications. Proficient in React, Node.js, and cloud technologies. Strong focus
                    on creating efficient, scalable solutions and exceptional user experiences.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">Senior Developer</h4>
                      <p className="text-sm text-secondary mb-2">Tech Company • 2022 - Present</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Led development of enterprise web applications</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                        <li>Improved application performance by 40%</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-foreground">Full Stack Developer</h4>
                      <p className="text-sm text-secondary mb-2">StartUp Inc • 2020 - 2022</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Built scalable solutions for enterprise clients</li>
                        <li>Implemented CI/CD pipelines and automated testing</li>
                        <li>Collaborated with cross-functional teams</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Education</h3>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Bachelor of Science in Computer Science</h4>
                    <p className="text-sm text-secondary">University Name • 2016 - 2020</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Certifications</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AWS Certified Solutions Architect</li>
                    <li>• Google Cloud Professional Developer</li>
                    <li>• MongoDB Certified Developer</li>
                  </ul>
                </section>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Resume;
