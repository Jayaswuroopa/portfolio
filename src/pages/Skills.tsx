import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GradientBlob } from "@/components/GradientBlob";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Card } from "@/components/ui/card";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: 88 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "Django", level: 75 },
      { name: "Flask", level: 75 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "PyTorch", level: 80 },
      { name: "Deep Learning", level: 78 },
      { name: "Image Classification", level: 80 },
    ],
  },
  {
    category: "Core Subjects & Tools",
    skills: [
      { name: "Data Structures", level: 88 },
      { name: "OOP", level: 88 },
      { name: "Operating Systems", level: 80 },
      { name: "Git", level: 85 },
      { name: "Linux", level: 78 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const FloatingSkillSphere = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2 + Math.random()} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere args={[0.4, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Skills3D = () => {
  const skillSpheres = [
    { color: "#00ffff", position: [2, 1, 0] },
    { color: "#a855f7", position: [-2, -1, 0] },
    { color: "#ff00ff", position: [0, 2, -1] },
    { color: "#00ffff", position: [-1.5, 0, 1] },
    { color: "#a855f7", position: [1.5, -1.5, 0.5] },
  ];
  
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      
      {skillSpheres.map((sphere, i) => (
        <FloatingSkillSphere
          key={i}
          position={sphere.position as [number, number, number]}
          color={sphere.color}
        />
      ))}

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
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
