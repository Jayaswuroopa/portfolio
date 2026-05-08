import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GradientBlob } from "@/components/GradientBlob";
import { Button } from "@/components/ui/button";
import { Download, FileText, Mail, Linkedin, Github, Code2 } from "lucide-react";
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
                  <h2 className="text-3xl font-bold text-primary">Jayaswuroopa V</h2>
                  <p className="text-muted-foreground mb-4">
                    Full Stack Developer & AI/ML Enthusiast
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a href="mailto:v.jayaswuroopa@gmail.com" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" /> v.jayaswuroopa@gmail.com
                    </a>
                    <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                      <Code2 className="w-4 h-4" /> LeetCode
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Summary</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Computer Science undergraduate at KPR Institute of Engineering and Technology
                    (CGPA 8.4) passionate about full-stack web development and AI/ML. Experienced
                    with React.js, Node.js, MongoDB, Java, Python and Deep Learning using PyTorch.
                    Solved 100+ LeetCode problems.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">
                        Java Full Stack Intern
                      </h4>
                      <p className="text-sm text-secondary mb-2">Litz Tech • 2025</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Worked on Java full-stack application development</li>
                        <li>Assisted in debugging backend issues</li>
                        <li>Improved application stability and functionality</li>
                        <li>Collaborated with team members to implement features</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">
                        B.E. Computer Science and Engineering
                      </h4>
                      <p className="text-sm text-secondary">
                        KPR Institute of Engineering and Technology • 2023 – 2027 • CGPA: 8.4
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">
                        Higher Secondary Education
                      </h4>
                      <p className="text-sm text-secondary">
                        GRG Matriculation Higher Secondary School • 2021 – 2023 • 94%
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                    <div><strong className="text-foreground">Languages:</strong> Java, Python, JavaScript</div>
                    <div><strong className="text-foreground">Frontend:</strong> HTML, CSS, React.js, Tailwind CSS</div>
                    <div><strong className="text-foreground">Backend:</strong> Node.js, Express.js</div>
                    <div><strong className="text-foreground">Frameworks:</strong> Django, Flask</div>
                    <div><strong className="text-foreground">Database:</strong> MongoDB, SQL</div>
                    <div><strong className="text-foreground">AI/ML:</strong> PyTorch, Deep Learning, Image Classification</div>
                    <div><strong className="text-foreground">Core:</strong> Data Structures, OOP, Operating Systems</div>
                    <div><strong className="text-foreground">Tools:</strong> Git, Linux, VS Code</div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Projects</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">SmartCart – E-Commerce Web Application</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
                        <li>Built a full-stack web application using React.js, Node.js, and Express.js.</li>
                        <li>Implemented authentication and shopping cart functionality for user interaction.</li>
                        <li>Designed reusable UI components for better code structure and maintainability.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">Suspicious Activity Detection System</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
                        <li>Developed a deep learning model using PyTorch (MobileNetV2) for image classification.</li>
                        <li>Worked with image datasets and applied preprocessing and augmentation techniques.</li>
                        <li>Built a basic inference pipeline for detecting suspicious activities.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">Smart Crop Monitoring System</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
                        <li>Developed an IoT-based monitoring system using Arduino sensors.</li>
                        <li>Collected environmental data such as soil moisture, temperature, and humidity.</li>
                        <li>Implemented a rule-based system for fertilizer recommendation.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Certifications & Achievements
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Solved 100+ LeetCode Problems</li>
                    <li>• HackerRank Java Certification (2025)</li>
                    <li>• Problem Solving Certification (2025)</li>
                    <li>• NPTEL Cyber Security and Privacy (2024)</li>
                    <li>
                      • Infosys Certifications: Computer Vision, NLP, Deep Learning, AI Fundamentals
                    </li>
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
