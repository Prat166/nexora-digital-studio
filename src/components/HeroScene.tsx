import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import type { Group } from 'three';

/** Tilts the whole scene toward the mouse, with a gentle idle sway (so touch devices still move). */
function Rig({ children }: { children: ReactNode }) {
  const ref = useRef<Group>(null);
  useFrame((state, delta) => {
    const g = ref.current;
    if (!g) return;
    const k = Math.min(1, delta * 3);
    const t = state.clock.elapsedTime;
    g.rotation.y += (state.pointer.x * 0.6 + Math.sin(t * 0.4) * 0.25 - g.rotation.y) * k;
    g.rotation.x += (-state.pointer.y * 0.4 + Math.cos(t * 0.3) * 0.12 - g.rotation.x) * k;
  });
  return <group ref={ref}>{children}</group>;
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 4, 5]} intensity={60} color="#60a5fa" />
      <pointLight position={[-5, -3, 3]} intensity={50} color="#a78bfa" />
      <pointLight position={[0, 3, -4]} intensity={40} color="#22d3ee" />
      <Rig>
        <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
          <mesh>
            <icosahedronGeometry args={[1.3, 1]} />
            <MeshDistortMaterial color="#6d5dfc" distort={0.28} speed={1.4} roughness={0.15} metalness={0.5} />
          </mesh>
        </Float>
        <mesh rotation={[1.2, 0.3, 0]}>
          <torusGeometry args={[2.2, 0.035, 16, 120]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.9} />
        </mesh>
        <mesh rotation={[0.4, 1.1, 0.6]}>
          <torusGeometry args={[2.7, 0.025, 16, 120]} />
          <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.7} />
        </mesh>
        <Float speed={2} floatIntensity={1.4}>
          <mesh position={[2.3, 1.2, 0.5]} rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshPhysicalMaterial color="#60a5fa" transparent opacity={0.45} roughness={0.1} metalness={0.3} clearcoat={1} />
          </mesh>
        </Float>
        <Float speed={1.8} floatIntensity={1.2}>
          <mesh position={[-2.4, -1, 0.4]}>
            <octahedronGeometry args={[0.55]} />
            <meshPhysicalMaterial color="#22d3ee" transparent opacity={0.5} roughness={0.1} clearcoat={1} />
          </mesh>
        </Float>
        <Float speed={2.4} floatIntensity={1.6}>
          <mesh position={[-1.6, 1.9, -0.5]}>
            <tetrahedronGeometry args={[0.4]} />
            <meshPhysicalMaterial color="#a78bfa" transparent opacity={0.55} roughness={0.1} clearcoat={1} />
          </mesh>
        </Float>
        <Float speed={1.5} floatIntensity={1}>
          <mesh position={[1.9, -1.6, -0.3]}>
            <sphereGeometry args={[0.32, 32, 32]} />
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} roughness={0.2} />
          </mesh>
        </Float>
      </Rig>
    </Canvas>
  );
}
