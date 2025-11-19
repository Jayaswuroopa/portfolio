import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GradientBlob } from "@/components/GradientBlob";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { Card } from "@/components/ui/card";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 82 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Testing", level: 85 },
    ],
  },
];

const FloatingSkill = ({ text, position }: { text: string; position: [number, number, number] }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Center position={position}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.3}
          height={0.1}
          curveSegments={12}
        >
          {text}
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
        </Text3D>
      </Center>
    </Float>
  );
};

const Skills3D = () => {
  const skills3D = ["React", "Node", "TS", "CSS", "JS"];
  
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      
      {skills3D.map((skill, i) => (
        <FloatingSkill
          key={skill}
          text={skill}
          position={[
            Math.cos((i / skills3D.length) * Math.PI * 2) * 3,
            Math.sin((i / skills3D.length) * Math.PI * 2) * 2,
            0,
          ]}
        />
      ))}
    </Canvas>
  );
};

const Skills = () => {
  return (
    <PageTransition>
      <ParticlesBackground />
      <GradientBlob color="accent" size="lg" position={{ top: "-5%", right: "10%" }} />
      <GradientBlob color="primary" size="md" position={{ bottom: "20%", left: "-10%" }} delay={0.2} />

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="h-[400px] rounded-2xl gradient-border overflow-hidden"
          >
            <Skills3D />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * categoryIndex }}
              >
                <Card className="p-6 gradient-border backdrop-blur-sm bg-card/50 h-full">
                  <h3 className="text-2xl font-bold text-primary mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-primary text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.7 + skillIndex * 0.1 }}
                            className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Skills;
