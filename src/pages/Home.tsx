import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GradientBlob } from "@/components/GradientBlob";
import { Scene3D } from "@/components/Scene3D";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <ParticlesBackground />
      <GradientBlob color="primary" size="lg" position={{ top: "-10%", right: "-10%" }} />
      <GradientBlob color="secondary" size="md" position={{ bottom: "10%", left: "-5%" }} delay={0.2} />
      <GradientBlob color="accent" size="md" position={{ top: "50%", right: "30%" }} delay={0.4} />

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 z-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold"
              >
                <span className="text-gradient glow-primary">Hi, I'm</span>
                <br />
                <span className="text-foreground">Jayaswuroopa V</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-muted-foreground"
              >
                <TypeAnimation
                  sequence={[
                    "Computer Science Engineering Student",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "AI & Machine Learning Enthusiast",
                    2000,
                    "Problem Solver",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-primary"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                I am a Computer Science undergraduate passionate about building scalable web
                applications and intelligent AI-based systems using React.js, Node.js, MongoDB,
                Java, Python and Deep Learning with PyTorch.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  onClick={() => navigate("/projects")}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                >
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => navigate("/contact")}
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  Get in Touch
                </Button>
                <Button
                  onClick={() => navigate("/resume")}
                  size="lg"
                  variant="outline"
                  className="border-secondary/50 text-secondary hover:bg-secondary/10"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[500px] lg:h-[600px] relative flex items-center justify-center"
            >
              <div className="absolute inset-0 z-0 opacity-40">
                <Scene3D />
              </div>
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_50px_rgba(var(--primary),0.3)] group transition-all duration-500 hover:scale-105">
                <img 
                  src={`${import.meta.env.BASE_URL}profile.jpeg`} 
                  alt="Jayaswuroopa V" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[400px] md:h-[400px] border border-secondary/10 rounded-full animate-reverse-spin-slow pointer-events-none" />
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
