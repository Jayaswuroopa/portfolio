import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";

export const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00ffff" />
        <pointLight position={[10, 10, 5]} intensity={0.5} color="#a855f7" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 100, 100]} scale={2}>
            <MeshDistortMaterial
              color="#00ffff"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0}
              metalness={0.8}
            />
          </Sphere>
        </Float>

        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
          <Sphere args={[0.5, 100, 100]} position={[2, 1, 0]}>
            <MeshDistortMaterial
              color="#a855f7"
              attach="material"
              distort={0.3}
              speed={3}
              roughness={0}
              metalness={0.8}
            />
          </Sphere>
        </Float>

        <Float speed={1.8} rotationIntensity={2} floatIntensity={1}>
          <Sphere args={[0.3, 100, 100]} position={[-2, -1, 0]}>
            <MeshDistortMaterial
              color="#ff00ff"
              attach="material"
              distort={0.4}
              speed={2.5}
              roughness={0}
              metalness={0.8}
            />
          </Sphere>
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
