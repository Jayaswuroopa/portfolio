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
                <span className="text-foreground">Your Name</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-muted-foreground"
              >
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "UI/UX Designer",
                    2000,
                    "Problem Solver",
                    2000,
                    "Tech Enthusiast",
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
                Crafting digital experiences with modern technologies. Passionate about building
                innovative solutions that make a difference.
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
              className="h-[500px] lg:h-[600px] relative"
            >
              <Scene3D />
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
